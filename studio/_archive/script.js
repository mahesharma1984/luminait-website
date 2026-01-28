/**
 * Studio Animation Controller (Auto-Play Version)
 * 
 * Usage:
 * 1. Define `window.sceneTimings = [ms, ms, ms...]` in your HTML.
 * 2. Press 'A' to start Auto-Play.
 * 3. Press SPACE for manual control.
 */

class StudioController {
  constructor() {
    this.step = 0;
    this.isPlaying = false;
    this.setupListeners();
    console.log("Studio Controller Initialized. Press 'A' for Auto-Play.");
  }

  setupListeners() {
    document.addEventListener('keydown', (e) => {
      // Space or Right Arrow to advance (Manual)
      if (e.code === 'Space' || e.code === 'ArrowRight') {
        e.preventDefault();
        this.stopAutoPlay();
        this.nextStep();
      }
      // R to reset
      if (e.code === 'KeyR') {
        this.stopAutoPlay();
        this.reset();
      }
      // A to Auto-Play
      if (e.code === 'KeyA') {
        if (!this.isPlaying) {
          this.startAutoPlay();
        } else {
          this.stopAutoPlay();
        }
      }
    });
  }

  nextStep() {
    this.step++;
    this.dispatch();
  }

  reset() {
    this.step = 0;
    this.dispatch();
  }

  // --- DISPATCH ---

  dispatch() {
    console.log(`Studio Step: ${this.step}`);
    const event = new CustomEvent('studio-step', { detail: { step: this.step } });
    window.dispatchEvent(event);

    // Update debug display if exists
    const debugEl = document.getElementById('step-debug');
    if (debugEl) debugEl.innerText = `Step: ${this.step}`;

    // Update Subtitles
    const subContainer = document.getElementById('subtitle-container');
    if (subContainer && window.sceneSteps && this.step > 0) {
      const currentData = window.sceneSteps[this.step - 1]; // Step 1 is index 0
      if (currentData && currentData.text) {
        subContainer.innerText = currentData.text;
        subContainer.classList.add('show');
      } else {
        subContainer.classList.remove('show');
      }
    }
  }

  // --- AUTO PLAY LOGIC ---

  startAutoPlay() {
    if (!window.sceneSteps) {
      console.warn("No 'window.sceneSteps' array found in this scene.");
      return;
    }

    console.log("Starting Auto-Play...");
    this.isPlaying = true;

    // If we are at step 0, advance to step 1 immediately to start
    if (this.step === 0) {
      this.nextStep();
    }

    this.scheduleNext_();
  }

  stopAutoPlay() {
    this.isPlaying = false;
    if (this.timer) clearTimeout(this.timer);
    console.log("Auto-Play Stopped.");
  }

  scheduleNext_() {
    if (!this.isPlaying) return;

    // sceneSteps[0] is data for Step 1
    const currentData = window.sceneSteps[this.step - 1];

    if (!currentData || !currentData.duration) {
      console.log("End of Timings. Stopping.");
      this.stopAutoPlay();
      return;
    }

    this.timer = setTimeout(() => {
      this.nextStep();
      this.scheduleNext_();
    }, currentData.duration);
  }
}

// Initialize
window.studio = new StudioController();
