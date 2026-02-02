#!/usr/bin/env python3
"""
Export logos from SVG source to PNG at multiple sizes.
Reads configuration from manifest.json
"""

import json
import os
from pathlib import Path
import cairosvg

def load_manifest(brand_dir: Path) -> dict:
    """Load the brand manifest."""
    manifest_path = brand_dir / "manifest.json"
    with open(manifest_path, 'r') as f:
        return json.load(f)

def export_svg_to_png(svg_path: Path, output_path: Path, size: int):
    """Export SVG to PNG at specified size."""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    cairosvg.svg2png(
        url=str(svg_path),
        write_to=str(output_path),
        output_width=size,
        output_height=size
    )
    print(f"  ✓ Exported: {output_path.name} ({size}x{size})")

def export_logos(brand_dir: Path):
    """Export all logos defined in manifest."""
    manifest = load_manifest(brand_dir)
    
    print("Exporting logos from SVG sources...\n")
    
    for logo_name, logo_config in manifest.get("logos", {}).items():
        source_path = brand_dir / logo_config["source"]
        
        if not source_path.exists():
            print(f"⚠ Skipping {logo_name}: source not found at {source_path}")
            continue
        
        print(f"📄 {logo_name}")
        
        exports = logo_config.get("exports", {})
        sizes = exports.get("sizes", [256])
        formats = exports.get("formats", ["png"])
        output_template = exports.get("output", f"exports/logo/{logo_name}_{{size}}.{{format}}")
        
        for size in sizes:
            for fmt in formats:
                output_name = output_template.format(size=size, format=fmt)
                output_path = brand_dir / output_name
                
                if fmt == "png":
                    export_svg_to_png(source_path, output_path, size)
    
    print("\n✓ Export complete!")

def main():
    # Determine brand directory (script location or current dir)
    script_dir = Path(__file__).parent
    brand_dir = script_dir.parent if script_dir.name == "scripts" else script_dir
    
    # Handle case where we're running from brand root
    if (brand_dir / "manifest.json").exists():
        export_logos(brand_dir)
    elif (brand_dir / "brand" / "manifest.json").exists():
        export_logos(brand_dir / "brand")
    else:
        print("Error: Could not find manifest.json")
        print(f"Looked in: {brand_dir}")
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main())
