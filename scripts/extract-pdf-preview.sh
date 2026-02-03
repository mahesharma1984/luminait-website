#!/bin/bash
# Extract preview pages from annotation guide PDFs
#
# Usage: ./extract-pdf-preview.sh <pdf-file> <output-dir> <pages>
#
# This script uses macOS's built-in tools to extract PDF pages as images
# For other platforms, install imagemagick or use Python with pdf2image

PDF_FILE="$1"
OUTPUT_DIR="$2"
PAGES="${3:-1-2}"  # Default to pages 1-2

if [ ! -f "$PDF_FILE" ]; then
    echo "Error: PDF file not found: $PDF_FILE"
    exit 1
fi

mkdir -p "$OUTPUT_DIR"

# Method 1: Using sips (macOS only, requires splitting PDF first)
# Method 2: Using qlmanage (macOS Quick Look)
# Method 3: Manual instruction

echo "📄 Extracting pages from: $(basename "$PDF_FILE")"
echo "📁 Output directory: $OUTPUT_DIR"
echo ""
echo "⚠️  Manual extraction required:"
echo "1. Open: $PDF_FILE"
echo "2. Export pages $PAGES as PNG (File > Export as PNG)"
echo "3. Save to: $OUTPUT_DIR/"
echo "4. Name files: preview-page-1.png, preview-page-2.png"
echo ""
echo "Recommended settings:"
echo "  - Format: PNG"
echo "  - Resolution: 144 DPI (for retina displays)"
echo "  - Width: ~1200px (maintains readability on web)"

# Alternative: Use Python if pdf2image is available
if command -v python3 &> /dev/null; then
    cat << 'EOF'

Alternative: Install pdf2image and use Python:
    pip3 install pdf2image pillow
    python3 -c "
from pdf2image import convert_from_path
import os

pdf_path = '$PDF_FILE'
output_dir = '$OUTPUT_DIR'
pages = convert_from_path(pdf_path, first_page=1, last_page=2, dpi=144)

for i, page in enumerate(pages, start=1):
    output_path = os.path.join(output_dir, f'preview-page-{i}.png')
    page.save(output_path, 'PNG')
    print(f'Saved: {output_path}')
"
EOF
fi
