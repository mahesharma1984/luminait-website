# LuminAIT Video Studio

The **Video Studio** is a browser-based tool for creating high-quality, animated literary analysis videos without editing software.

## How to Use

1.  Open `studio/outsiders-scene.html` in Chrome or Safari.
2.  Set your browser to **Fullscreen (F11)** to hide the URL bar.
3.  Start your screen recording (QuickTime or OBS).
4.  **Click anywhere** to start the Auto-Play sequence.
5.  The video will play through automatically with synchronized subtitles.

## Creating New Scenes (Copy & Edit)

1.  **Duplicate** `outsiders-scene.html` to a new file (e.g., `macbeth-scene.html`).
2.  **Edit** the `sequence` array at the bottom of the file:
    *   Change the `text` for your script.
    *   Change the `duration` for timing.
    *   Update the `action` function to trigger your visual changes (showing layers, adding classes).
3.  **Update** the HTML/CSS in the `<style>` and `<body>` sections as needed for your new assets (images, text).

**Note:** This studio is designed for "Precision" — you define exactly what happens and when. No complex engines, just simple Javascript timing.
