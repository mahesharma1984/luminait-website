#!/usr/bin/env python3
"""
LuminAIT Site Generator

This script generates HTML files from templates using data from JSON files.
It replaces Handlebars-style placeholders ({{variable}}) with actual values.

Usage:
    python generate_site.py                    # Build all guides
    python generate_site.py --guide romeo-and-juliet  # Build specific guide
    python generate_site.py --hub              # Build hub page only
    python generate_site.py --all              # Build everything

Directory Structure Expected:
    /data/kernels/{text-slug}/data.json  - Guide data
    /templates/guide-spoke.html          - Guide template
    /templates/landing-hub.html          - Hub template
    /analysis/{text-slug}/{pattern-slug}/ - Output directory
"""

import json
import os
import re
import sys
import html
from pathlib import Path
from typing import Any, Dict, Optional
import argparse
import shutil


class TemplateEngine:
    """Simple template engine supporting Handlebars-style syntax."""
    
    def __init__(self, data: Dict[str, Any]):
        self.data = data
    
    def render(self, template: str) -> str:
        """Render template with data."""
        result = template
        
        # Handle {{{json_data}}} - raw JSON injection
        result = re.sub(
            r'\{\{\{json_data\}\}\}',
            lambda m: json.dumps(self.data, indent=2),
            result
        )
        
        # Handle {{#each array}}...{{/each}} loops
        result = self._process_each_blocks(result)
        
        # Handle {{#if condition}}...{{/if}} conditionals
        result = self._process_if_blocks(result)
        
        # Handle {{{variable}}} - unescaped HTML
        result = re.sub(
            r'\{\{\{([^}]+)\}\}\}',
            lambda m: str(self._get_value(m.group(1).strip())),
            result
        )
        
        # Handle {{variable}} - escaped HTML
        result = re.sub(
            r'\{\{([^#/][^}]*)\}\}',
            lambda m: html.escape(str(self._get_value(m.group(1).strip()))),
            result
        )
        
        return result
    
    def _get_value(self, path: str, context: Optional[Dict] = None) -> Any:
        """Get value from data using dot notation path."""
        if context is None:
            context = self.data
        
        parts = path.split('.')
        value = context
        
        for part in parts:
            if isinstance(value, dict):
                value = value.get(part, '')
            elif isinstance(value, list) and part.isdigit():
                value = value[int(part)] if int(part) < len(value) else ''
            else:
                return ''
        
        return value if value is not None else ''
    
    def _process_each_blocks(self, template: str) -> str:
        """Process {{#each}} blocks."""
        pattern = r'\{\{#each\s+([^}]+)\}\}(.*?)\{\{/each\}\}'
        
        def replace_each(match):
            array_path = match.group(1).strip()
            block_content = match.group(2)
            items = self._get_value(array_path)
            
            if not isinstance(items, list):
                return ''
            
            result = []
            for i, item in enumerate(items):
                # Create context with this, @index, @first, @last
                item_context = {
                    'this': item,
                    '@index': i,
                    '@first': i == 0,
                    '@last': i == len(items) - 1,
                }
                
                # If item is a dict, merge it into context
                if isinstance(item, dict):
                    item_context.update(item)
                
                # Create sub-engine with item context
                sub_engine = TemplateEngine({**self.data, **item_context})
                result.append(sub_engine.render(block_content))
            
            return ''.join(result)
        
        return re.sub(pattern, replace_each, template, flags=re.DOTALL)
    
    def _process_if_blocks(self, template: str) -> str:
        """Process {{#if}} and {{#unless}} blocks."""
        # Process {{#if}}
        pattern = r'\{\{#if\s+([^}]+)\}\}(.*?)(?:\{\{else\}\}(.*?))?\{\{/if\}\}'
        
        def replace_if(match):
            condition_path = match.group(1).strip()
            if_content = match.group(2)
            else_content = match.group(3) or ''
            
            value = self._get_value(condition_path)
            is_truthy = bool(value) and value != '' and value != 0
            
            return if_content if is_truthy else else_content
        
        result = re.sub(pattern, replace_if, template, flags=re.DOTALL)
        
        # Process {{#unless}}
        pattern = r'\{\{#unless\s+([^}]+)\}\}(.*?)\{\{/unless\}\}'
        
        def replace_unless(match):
            condition_path = match.group(1).strip()
            content = match.group(2)
            
            value = self._get_value(condition_path)
            is_truthy = bool(value) and value != '' and value != 0
            
            return '' if is_truthy else content
        
        return re.sub(pattern, replace_unless, result, flags=re.DOTALL)


def load_json(filepath: Path) -> Dict[str, Any]:
    """Load JSON file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_html(filepath: Path, content: str):
    """Save HTML content to file."""
    filepath.parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✓ Generated: {filepath}")


def generate_guide(
    guide_slug: str,
    data_dir: Path,
    templates_dir: Path,
    output_dir: Path
) -> bool:
    """Generate a single guide page from data.json and template."""
    
    # Try both old and new data locations
    data_paths = [
        data_dir / 'kernels' / guide_slug / 'data.json',
        Path('guides') / guide_slug / 'data.json',
    ]
    
    data_file = None
    for path in data_paths:
        if path.exists():
            data_file = path
            break
    
    if not data_file:
        print(f"✗ Data file not found for: {guide_slug}")
        print(f"  Looked in: {[str(p) for p in data_paths]}")
        return False
    
    template_file = templates_dir / 'guide-spoke.html'
    if not template_file.exists():
        print(f"✗ Template not found: {template_file}")
        return False
    
    # Load data and template
    data = load_json(data_file)
    with open(template_file, 'r', encoding='utf-8') as f:
        template = f.read()
    
    # Generate pattern slug from hook title
    pattern_slug = data.get('hook', {}).get('title', 'analysis')
    pattern_slug = pattern_slug.lower().replace(' ', '-').replace("'", '')
    pattern_slug = re.sub(r'[^a-z0-9-]', '', pattern_slug)
    
    # Add plain text versions for schema.org
    for faq in data.get('faq', []):
        faq['answer_plain'] = re.sub(r'<[^>]+>', '', faq.get('answer', ''))
    
    # Render template
    engine = TemplateEngine(data)
    html_content = engine.render(template)
    
    # Save to output directory
    output_path = output_dir / 'analysis' / guide_slug / pattern_slug / 'index.html'
    save_html(output_path, html_content)
    
    return True


def generate_hub(templates_dir: Path, output_dir: Path) -> bool:
    """Generate the landing hub page."""
    template_file = templates_dir / 'landing-hub.html'
    
    if not template_file.exists():
        print(f"✗ Template not found: {template_file}")
        return False
    
    with open(template_file, 'r', encoding='utf-8') as f:
        template = f.read()
    
    # The hub template has minimal placeholders, mostly static
    # Just copy it to the course output
    output_path = output_dir / 'course-new.html'
    save_html(output_path, template)
    
    return True


def copy_components(components_dir: Path, output_dir: Path):
    """Copy component files to output directory."""
    output_components = output_dir / 'components'
    
    # Skip if source and destination are the same
    if components_dir.resolve() == output_components.resolve():
        print("✓ Components already in place")
        return
    
    output_components.mkdir(parents=True, exist_ok=True)
    
    for file in components_dir.glob('*'):
        if file.is_file():
            dest = output_components / file.name
            if file.resolve() != dest.resolve():
                shutil.copy(file, dest)
                print(f"✓ Copied: components/{file.name}")


def discover_guides(data_dir: Path, guides_dir: Path) -> list:
    """Discover all available guides."""
    guides = []
    
    # Check new location: data/kernels/
    kernels_dir = data_dir / 'kernels'
    if kernels_dir.exists():
        for guide_path in kernels_dir.iterdir():
            if guide_path.is_dir():
                 if (guide_path / 'data.json').exists() or (guide_path / 'course-outline.json').exists():
                    guides.append(guide_path.name)
    
    # Check old location: guides/
    if guides_dir.exists():
        for guide_path in guides_dir.iterdir():
            if guide_path.is_dir() and (guide_path / 'data.json').exists():
                if guide_path.name not in guides:
                    guides.append(guide_path.name)
    
    return guides



def generate_outline(
    slug: str,
    data_dir: Path,
    templates_dir: Path,
    output_dir: Path
) -> bool:
    """Generate a course outline page."""
    data_file = data_dir / 'kernels' / slug / 'course-outline.json'
    
    if not data_file.exists():
        return False
        
    template_file = templates_dir / 'course-outline.html'
    if not template_file.exists():
        print(f"✗ Template not found: {template_file}")
        return False
        
    data = load_json(data_file)
    with open(template_file, 'r', encoding='utf-8') as f:
        template = f.read()
        
    engine = TemplateEngine(data)
    html_content = engine.render(template)
    
    # Save to root/[slug]/index.html
    output_path = output_dir / slug / 'index.html'
    save_html(output_path, html_content)
    return True


def main():
    parser = argparse.ArgumentParser(description='LuminAIT Site Generator')
    parser.add_argument('--guide', type=str, help='Generate specific guide by slug')
    parser.add_argument('--hub', action='store_true', help='Generate hub page only')
    parser.add_argument('--all', action='store_true', help='Generate everything')
    parser.add_argument('--list', action='store_true', help='List available guides')
    args = parser.parse_args()
    
    # Paths
    root_dir = Path(__file__).parent
    data_dir = root_dir / 'data'
    guides_dir = root_dir / 'guides'
    templates_dir = root_dir / 'templates'
    components_dir = root_dir / 'components'
    output_dir = root_dir
    
    print("LuminAIT Site Generator")
    print("=" * 40)
    
    if args.list:
        guides = discover_guides(data_dir, guides_dir)
        print(f"\nAvailable guides ({len(guides)}):")
        for guide in guides:
            print(f"  - {guide}")
        return
    
    # Copy components first
    if components_dir.exists():
        copy_components(components_dir, output_dir)
    
    success_count = 0
    fail_count = 0
    
    if args.hub or args.all:
        print("\n[Hub Page]")
        if generate_hub(templates_dir, output_dir):
            success_count += 1
        else:
            fail_count += 1
    
    if args.guide:
        print(f"\n[Guide: {args.guide}]")
        # Try generating both guide and outline
        guide_success = generate_guide(args.guide, data_dir, templates_dir, output_dir)
        outline_success = generate_outline(args.guide, data_dir, templates_dir, output_dir)
        
        if guide_success: success_count += 1 
        else: fail_count += 1
            
        if outline_success:
            print(f"✓ Generated Outline: {args.guide}")
            success_count += 1
    elif args.all or not args.hub:
        guides = discover_guides(data_dir, guides_dir)
        print(f"\n[Generating {len(guides)} guides]")
        
        for guide_slug in guides:
            print(f"\n[Processing: {guide_slug}]")
            # Generate Guide
            if generate_guide(guide_slug, data_dir, templates_dir, output_dir):
                success_count += 1
            else:
                fail_count += 1
                
            # Generate Outline
            if generate_outline(guide_slug, data_dir, templates_dir, output_dir):
                print(f"✓ Generated Outline: {guide_slug}")
                success_count += 1
    
    print("\n" + "=" * 40)
    print(f"Complete: {success_count} succeeded, {fail_count} failed")


if __name__ == '__main__':
    main()
