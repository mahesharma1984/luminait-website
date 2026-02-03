import cv2
import numpy as np
from skimage.morphology import skeletonize
import svgwrite
import sys
from pathlib import Path

# Paths
ROOT_DIR = Path(__file__).resolve().parents[2]
INPUT_PATH = ROOT_DIR / 'brand' / 'working' / 'logotype_cursive.png'
OUTPUT_PATH = ROOT_DIR / 'brand' / 'animation' / 'logotype_skeleton.svg'

def create_svg_from_skeleton(skeleton, output_path):
    height, width = skeleton.shape
    dwg = svgwrite.Drawing(output_path, size=(width, height), profile='tiny')
    
    # Trace the skeleton
    # Simple approach: Create distinct paths for connected components
    # For a perfect single-stroke animation, we ideally want long continuous paths.
    # This simple pixel-to-rect implementation or small line segments is a starting point.
    # A better approach for animation is to trace coordinates.
    
    # Let's find contours of the skeleton. Since it's 1px thick, contours might double back.
    # Alternatively, we can just iterate through pixels and draw lines.
    
    # Better approach for ensuring clean SVG lines:
    # 1. Get coordinates of white pixels which form the skeleton
    # 2. Use a graph approach or a simple neighboring pixel search to build paths.
    
    y_indices, x_indices = np.where(skeleton > 0)
    points = list(zip(x_indices, y_indices))
    
    if not points:
        print("No skeleton points found!")
        return

    # Visited set
    visited = set()
    paths = []

    # 8-neighbor offsets
    neighbors = [(-1, -1), (-1, 0), (-1, 1),
                 (0, -1),           (0, 1),
                 (1, -1),  (1, 0),  (1, 1)]

    for p in points:
        if p not in visited:
            # Start a new path
            current_path = [p]
            visited.add(p)
            
            # DFS/BFS to follow the line
            stack = [p]
            while stack:
                curr = stack.pop()
                # find neighbors
                found_next = False
                for dx, dy in neighbors:
                    nx, ny = curr[0] + dx, curr[1] + dy
                    neighbor = (nx, ny)
                    
                    if neighbor in points and neighbor not in visited: # Check bounds implicitly by existence in points
                         visited.add(neighbor)
                         current_path.append(neighbor)
                         stack.append(neighbor)
                         # Simple greeding: verify we are following a line, not branching wildly
                         # For a simple skeleton, this depth-first standard greedy works reasonable well
                         # to get long segments.
                         break 
                
            paths.append(current_path)

    # Draw paths
    path_data = ""
    for p_list in paths:
        if len(p_list) > 1:
            # simple smoothing could be done here, but let's just connect points
            d = f"M {p_list[0][0]},{p_list[0][1]} "
            for x, y in p_list[1:]:
                d += f"L {x},{y} "
            
            dwg.add(dwg.path(d=d, stroke='black', stroke_width=2, fill='none'))

    dwg.save()
    print(f"SVG saved to {output_path}")

def main():
    print(f"Reading image from {INPUT_PATH}...")
    # Load image in grayscale
    img = cv2.imread(INPUT_PATH, cv2.IMREAD_GRAYSCALE)
    if img is None:
        print("Error: Could not read image.")
        return

    # Threshold to binary (invert if necessary: text should be white, bg black for skeletonize)
    # Our image has black text on white bg.
    # Otsu's thresholding
    _, binary = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    
    # Convert to boolean (0 and 1) for skimage
    # 255 becomes True (white text), 0 becomes False (black bg)
    binary_bool = binary > 0

    print("Skeletonizing...")
    skeleton = skeletonize(binary_bool)
    
    # Convert skeleton back to uint8 for visualization or processing if needed
    skeleton_uint8 = (skeleton * 255).astype(np.uint8)
    
    # Debug: Save skeleton image
    # cv2.imwrite("debug_skeleton.png", skeleton_uint8)
    
    print("Converting to SVG...")
    create_svg_from_skeleton(skeleton_uint8, OUTPUT_PATH)

if __name__ == "__main__":
    main()
