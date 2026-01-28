# LuminAIT Video Studio

The **Video Studio** is a browser-based tool for creating high-quality, animated literary analysis videos without editing software.

## Scenes
*   **[The Outsiders (Week 3: First-Person)](outsiders-scene-week3-first-person.html)**: Exposition / Dual Consciousness.
*   **[The Outsiders (Week 3: Flashback)](outsiders-scene-week3-flashback.html)**: Rising Action / Relational Trauma.
*   **[The Outsiders (Week 3: Internal Monologue)](outsiders-scene-week3-internal-monologue.html)**: Climax / Trauma Response.
*   **[The Outsiders (Social Lens)](outsiders-scene-social.html)**: Original Social Lens analysis.
*   **[The Outsiders (Climax/Social)](outsiders-scene-social-climax.html)**: Original Climax scene.

## How to Use

1.  Open `studio/outsiders-scene-week3-first-person.html` (or any scene file) in Chrome or Safari.
2.  Set your browser to **Fullscreen (F11)** to hide the URL bar.
3.  Start your screen recording (QuickTime or OBS).
4.  **Click anywhere** to start the Auto-Play sequence.
5.  The video will play through automatically with synchronized subtitles.

## Creating New Scenes (Copy & Edit)

1.  **Duplicate** an existing scene file (e.g., `outsiders-scene-week3-first-person.html`).
2.  **Edit** the `sequence` array at the bottom of the file:
    *   Change the `text` for your script.
    *   Change the `duration` for timing.
    *   Update the `action` function to trigger your visual changes (showing layers, highlighting text).
3.  **Update** the HTML/CSS in the `<style>` and `<body>` sections as needed for your new assets (images, text).

**Note:** This studio is designed for "Precision" — you define exactly what happens and when. No complex engines, just simple Javascript timing.
