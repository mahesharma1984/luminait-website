import xml.etree.ElementTree as ET
from pathlib import Path

# Paths
ROOT_DIR = Path(__file__).resolve().parents[2]
LOGO_MARK_PATH = ROOT_DIR / 'brand' / 'source' / 'logo-mark.svg'
SKELETON_PATH = ROOT_DIR / 'brand' / 'animation' / 'logotype_skeleton.svg'
OUTPUT_HTML_PATH = ROOT_DIR / 'brand' / 'animation' / 'logo_animation.html'

def get_namespace(element):
    if '}' in element.tag:
        return element.tag.split('}')[0].strip('{')
    return ''

def parse_svg_paths(svg_path):
    tree = ET.parse(svg_path)
    root = tree.getroot()
    ns = get_namespace(root)
    ET.register_namespace('', ns)
    
    paths = []
    # Find all path elements, recursively
    for path in root.findall('.//{http://www.w3.org/2000/svg}path'):
        d = path.get('d')
        if d:
            paths.append(d)
    return paths

def get_logo_mark_content(svg_path):
    tree = ET.parse(svg_path)
    root = tree.getroot()
    
    # We want to extract the defs and the groups (page and star)
    # We will just return the inner XML string of the root
    inner_xml = ""
    for child in root:
        inner_xml += ET.tostring(child, encoding='unicode')
    return inner_xml

def generate_html():
    # Get Skeleton Paths
    skeleton_paths = parse_svg_paths(SKELETON_PATH)
    
    # Get Logo Mark Content (Quill)
    logo_mark_content = get_logo_mark_content(LOGO_MARK_PATH)
    
    # Construct paths SVG group
    paths_svg = ""
    for i, d in enumerate(skeleton_paths):
        paths_svg += f'<path id="path-{i}" class="skeleton-path" d="{d}" />\n'

    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LuminAIT Logo Animation</title>
    <style>
        body {{ 
            margin: 0; 
            padding: 0; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            background: #fff; 
            overflow: hidden;
        }}
        svg {{ 
            width: 80%; 
            max-width: 800px; 
            height: auto; 
            overflow: visible;
        }}
        .skeleton-path {{ 
            fill: none; 
            stroke: #000; 
            stroke-width: 3.5; 
            stroke-linecap: round; 
            stroke-linejoin: round; 
            opacity: 1;
        }}
        #quill-container {{
            /* Initial position offset if needed */
        }}
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
</head>
<body>
    <svg viewBox="0 0 1024 1024" id="main-svg">
        <defs>
             <!-- Copied from logo-mark.svg manually or via script if regexed, but let's rely on what we extracted -->
        </defs>

        <!-- Re-inject logo mark defs here -->
        {logo_mark_content}
        
        <!-- We need to ensure the logo mark content is hidden or transformed correctly -->
        <!-- The logo mark svg had viewbox 200 180 624 644 and groups were transformed. 
             We'll likely need to wrap them to control them. 
             We will hide the original static logo parts and use them in the 'quill' group.
        -->

        <!-- Skeleton (Text) Layer -->
        <g id="text-layer">
            {paths_svg}
        </g>

        <!-- Quill Layer -->
        <g id="quill-wrapper" style="opacity: 0;"> 
            <!-- We reuse the definitions from logo mark but position them at 0,0 relative to the wrapper -->
            <!-- The 'page' and 'star' IDs come from the {logo_mark_content} -->
            
            <!-- We will use a <use> tag or just let the JS move the elements if they are naturally structured.
                 However, the logo mark content is pasted directly above.
                 The logo mark groups have transforms: transform="translate(0,1024) scale(0.1,-0.1)"
                 We should group them under a movable cursor.
            -->
            <g id="quill-cursor">
                 <!-- Visual representation of the quill. 
                      We need to center the 'tip' of the quill at (0,0) of this group.
                      The tip of the quill in the original SVG seems to be roughly at bottom left of the shape?
                      Let's approximate visual alignment in JS or CSS.
                 -->
                 <use href="#page" />
                 <use href="#star" />
            </g>
        </g>
    </svg>

    <script>
        document.addEventListener('DOMContentLoaded', () => {{
            const paths = document.querySelectorAll('.skeleton-path');
            const quillWrapper = document.getElementById('quill-wrapper');
            const quillCursor = document.getElementById('quill-cursor');
            
            // 1. Setup paths for animation (stroke-dasharray)
            const timeline = anime.timeline({{
                easing: 'linear',
                autoplay: false // We will trigger it manually or start immediately
            }});

            // Adjust Quill Scale/Position
            // The Original logo mark groups are scaled 0.1, -0.1 inside the SVG. 
            // We need to position the 'quill-cursor' such that its tip writes the text.
            // Let's deduce where the tip is. 
            // We might need to adjust the transform of #quill-cursor manually to look good.
            
            // Move quill to start
            // timeline.add({{
            //    targets: '#quill-wrapper',
            //    opacity: [0, 1],
            //    duration: 500
            // }});

            let globalDelay = 0;

            paths.forEach((path, i) => {{
                const length = path.getTotalLength();
                path.style.strokeDasharray = length;
                path.style.strokeDashoffset = length;
                
                // Duration proportional to length
                const duration = length * 5; // Adjust speed here

                timeline.add({{
                    targets: path,
                    strokeDashoffset: [length, 0],
                    duration: duration,
                    easing: 'linear',
                    begin: function(anim) {{
                        // Move quill to start of this path
                    }},
                    update: function(anim) {{
                        // Move quill along path
                        const progress = anim.progress / 100;
                        const point = path.getPointAtLength(length * progress);
                        
                        quillWrapper.style.transform = `translate(${{point.x}}px, ${{point.y}}px)`;
                        quillWrapper.style.opacity = 1;
                    }}
                }}, globalDelay);
                
                globalDelay += duration;
            }});
            
            // Finish animation
            timeline.add({{
                targets: '#quill-wrapper',
                opacity: 0,
                duration: 500,
                easing: 'easeOutQuad'
            }});
            
            // Start
            setTimeout(() => timeline.play(), 500);
            
            window.timeline = timeline; // Expose for puppeteer
        }});
    </script>
</body>
</html>"""
    
    with open(OUTPUT_HTML_PATH, 'w') as f:
        f.write(html_content)
    
    print(f"Generated {{OUTPUT_HTML_PATH}}")

if __name__ == "__main__":
    generate_html()
