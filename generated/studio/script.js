/**
 * Studio Animation Controller
 * 
 * Usage:
 * 1. Include this script.
 * 2. In your scene script, listen for 'studio-step' event on window.
 * 3. Event detail contains { step: number }.
 * 4. Press SPACE or Right Arrow to advance.
 */

class StudioController {
  constructor() {
    this.step = 0;
    this.totalSteps = 99; // Default
    this.setupListeners();
    console.log("Studio Controller Initialized. Press SPACE to start.");
  }

  setupListeners() {
    document.addEventListener('keydown', (e) => {
      // Space or Right Arrow to advance
      if (e.code === 'Space' || e.code === 'ArrowRight') {
        e.preventDefault(); // Prevent scrolling
        this.nextStep();
      }
      // Left Arrow to go back (optional, mostly for reset)
      if (e.code === 'ArrowLeft') {
        this.prevStep();
      }
      // R to reset
      if (e.code === 'KeyR') {
        this.reset();
      }
    });
  }

  nextStep() {
    this.step++;
    this.dispatch();
  }

  prevStep() {
    if (this.step > 0) {
      this.step--;
      this.dispatch();
    }
  }

  reset() {
    this.step = 0;
    this.dispatch();
  }

  dispatch() {
    console.log(`Studio Step: ${this.step}`);
    const event = new CustomEvent('studio-step', { detail: { step: this.step } });
    window.dispatchEvent(event);
    
    // Update debug display if exists
    const debugEl = document.getElementById('step-debug');
    if (debugEl) debugEl.innerText = `Step: ${this.step}`;
  }
}

// Initialize
window.studio = new StudioController();
