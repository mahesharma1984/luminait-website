
from PIL import Image, ImageOps
import os

# Paths
BASE_DIR = "/Users/mahesh/.gemini/antigravity/brain/952329e0-5657-44c8-b656-7c49c15f6715"

# Approved Source Files
ICON_PATH = os.path.join(BASE_DIR, "logo_concept_b_spark_quill_1769984819850.png")
LOCKUP_PATH = os.path.join(BASE_DIR, "logo_concept_b_text_lockup_1769985529485.png")

# Target Backgrounds
CLEAN_SQUARE = os.path.join(BASE_DIR, "clean_template_square_1769986596560.png")
CLEAN_STORY = os.path.join(BASE_DIR, "clean_template_story_1769986618064.png")
CLEAN_LANDSCAPE = os.path.join(BASE_DIR, "clean_template_landscape_1769986643229.png")
# Note: Outro path will be determined after generation, assuming standard naming or I'll list the dir to find it.

BG_COLOR = (253, 252, 248) # #FDFCF8 approx
TOLERANCE = 30

def make_transparent(img_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        # Check if pixel is close to background color
        if all(abs(item[i] - BG_COLOR[i]) < TOLERANCE for i in range(3)):
            new_data.append((255, 255, 255, 0)) # Transparent
        else:
            new_data.append(item)
    img.putdata(new_data)
    return img

def make_white(img):
    # Convert non-transparent pixels to white
    datas = img.getdata()
    new_data = []
    for item in datas:
        if item[3] > 0: # If not transparent
            new_data.append((255, 255, 255, item[3])) # Keep alpha, make white
        else:
            new_data.append(item)
    res = Image.new("RGBA", img.size)
    res.putdata(new_data)
    return res

def process_assets():
    print("Processing assets...")
    
    # 1. Prepare Logos
    icon_transparent = make_transparent(ICON_PATH)
    lockup_transparent = make_transparent(LOCKUP_PATH)
    
    # Save Watermark (Icon only)
    watermark_path = os.path.join(BASE_DIR, "final_video_watermark.png")
    icon_transparent.save(watermark_path, "PNG")
    print(f"Saved watermark to {watermark_path}")

    # 2. Composite Square (Icon bottom right)
    if os.path.exists(CLEAN_SQUARE):
        bg = Image.open(CLEAN_SQUARE).convert("RGBA")
        # Resize icon to 15% of width
        target_w = int(bg.width * 0.15)
        scale = target_w / icon_transparent.width
        icon_resized = icon_transparent.resize((target_w, int(icon_transparent.height * scale)), Image.Resampling.LANCZOS)
        
        # Position: Bottom right with padding
        x = bg.width - icon_resized.width - 50
        y = bg.height - icon_resized.height - 50
        
        bg.paste(icon_resized, (x, y), icon_resized)
        bg.save(os.path.join(BASE_DIR, "final_social_square.png"))
        print("Saved final_social_square.png")

    # 3. Composite Landscape (Icon top center)
    if os.path.exists(CLEAN_LANDSCAPE):
        bg = Image.open(CLEAN_LANDSCAPE).convert("RGBA")
        # Resize icon to 15% of height
        target_h = int(bg.height * 0.2)
        scale = target_h / icon_transparent.height
        icon_resized = icon_transparent.resize((int(icon_transparent.width * scale), target_h), Image.Resampling.LANCZOS)
        
        # Position: Top center
        x = (bg.width - icon_resized.width) // 2
        y = 60 # Padding from top
        
        bg.paste(icon_resized, (x, y), icon_resized)
        bg.save(os.path.join(BASE_DIR, "final_social_landscape.png"))
        print("Saved final_social_landscape.png")

    # 4. Composite Story (White Lockup on Blue Bar)
    if os.path.exists(CLEAN_STORY):
        bg = Image.open(CLEAN_STORY).convert("RGBA")
        
        # Make white version of lockup
        lockup_white = make_white(lockup_transparent)
        
        # Resize to fit inside header bar (assuming header is top 15%)
        header_h = int(bg.height * 0.15)
        target_h = int(header_h * 0.6) # 60% of header height
        scale = target_h / lockup_white.height
        lockup_resized = lockup_white.resize((int(lockup_white.width * scale), target_h), Image.Resampling.LANCZOS)
        
        # Position: Center of header
        x = (bg.width - lockup_resized.width) // 2
        y = (header_h - lockup_resized.height) // 2
        
        bg.paste(lockup_resized, (x, y), lockup_resized)
        bg.save(os.path.join(BASE_DIR, "final_social_story.png"))
        print("Saved final_social_story.png")

    # 5. Composite Outro (Lockup Center Top)
    # Find the outro file (most recent clean_template_outro)
    outro_files = [f for f in os.listdir(BASE_DIR) if f.startswith("clean_template_outro") and f.endswith(".png")]
    if outro_files:
        outro_path = os.path.join(BASE_DIR, sorted(outro_files)[-1]) # Get latest
        bg = Image.open(outro_path).convert("RGBA")
        
        # Resize lockup to 40% width
        target_w = int(bg.width * 0.4)
        scale = target_w / lockup_transparent.width
        lockup_resized = lockup_transparent.resize((target_w, int(lockup_transparent.height * scale)), Image.Resampling.LANCZOS)
        
        # Position: Center horizontally, 20% down
        x = (bg.width - lockup_resized.width) // 2
        y = int(bg.height * 0.2)
        
        bg.paste(lockup_resized, (x, y), lockup_resized)
        bg.save(os.path.join(BASE_DIR, "final_video_outro.png"))
        print("Saved final_video_outro.png")

if __name__ == "__main__":
    process_assets()
