/**
 * LuminAIT Tracker Component
 * 
 * Handles the interactive "Dread Tracker" / "Knowledge Gap" visualizations
 * used in guide pages. Configurable for different pattern types:
 * - Dread Engine (Romeo & Juliet)
 * - Innocence Lens (To Kill a Mockingbird)
 * - Trust Trap (Unreliable narrators)
 * 
 * Usage:
 * 1. Include this script in your guide page
 * 2. Call initTracker() with your guide data
 * 3. Ensure HTML elements have correct IDs
 */

class PatternTracker {
  constructor(config) {
    // Configuration
    this.config = {
      meterLabel: config.meterLabel || 'Dread level',
      effectNoun: config.effectNoun || 'Dread',
      levels: config.levels || { 1: '20%', 2: '40%', 3: '60%', 4: '80%', 5: '100%' },
      gapStates: config.gapStates || {},
      timeline: config.timeline || [],
      colors: {
        low: config.colors?.low || '#10b981',      // Emerald - hope/beginning
        mid: config.colors?.mid || '#f59e0b',      // Gold - tension
        high: config.colors?.high || '#dc2626',     // Crimson - dread/climax
      }
    };
    
    // DOM Elements
    this.slider = document.getElementById('gapSlider');
    this.audienceText = document.getElementById('audienceText');
    this.charactersText = document.getElementById('charactersText');
    this.dreadValue = document.getElementById('dreadValue');
    this.trackerItems = document.querySelectorAll('.tracker-item');
    
    // Initialize
    this.init();
  }
  
  init() {
    if (this.slider) {
      this.slider.addEventListener('input', (e) => this.updateGap(e.target.value));
      this.updateGap(1); // Start at Act 1
    }
    
    // Initialize tracker item click handlers
    this.trackerItems.forEach(item => {
      item.addEventListener('click', () => {
        const level = item.dataset.level;
        if (this.slider) {
          this.slider.value = level;
          this.updateGap(level);
        }
        this.scrollToItem(item);
      });
    });
    
    // Scroll-based activation
    this.initScrollObserver();
  }
  
  updateGap(value) {
    const level = parseInt(value);
    const gapState = this.config.gapStates[level] || {};
    
    // Update text with animation
    if (this.audienceText) {
      this.animateTextChange(this.audienceText, gapState.audience || '');
    }
    if (this.charactersText) {
      this.animateTextChange(this.charactersText, gapState.characters || '');
    }
    
    // Update dread meter
    if (this.dreadValue) {
      this.dreadValue.textContent = this.config.levels[level] || `${level * 20}%`;
      this.dreadValue.style.color = this.getLevelColor(level);
    }
    
    // Update tracker items visual state
    this.updateTrackerVisuals(level);
    
    // Dispatch custom event for external listeners
    document.dispatchEvent(new CustomEvent('trackerUpdate', { 
      detail: { level, gapState } 
    }));
  }
  
  animateTextChange(element, newText) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      element.textContent = newText;
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 150);
  }
  
  getLevelColor(level) {
    if (level <= 2) return this.config.colors.low;
    if (level <= 4) return this.config.colors.mid;
    return this.config.colors.high;
  }
  
  updateTrackerVisuals(activeLevel) {
    this.trackerItems.forEach(item => {
      const itemLevel = parseInt(item.dataset.level);
      item.classList.remove('active', 'passed');
      
      if (itemLevel === activeLevel) {
        item.classList.add('active');
      } else if (itemLevel < activeLevel) {
        item.classList.add('passed');
      }
    });
    
    // Update progress bar fill
    const progressBar = document.querySelector('.tracker-progress');
    if (progressBar) {
      const percentage = ((activeLevel - 1) / 4) * 100;
      progressBar.style.width = `${percentage}%`;
      progressBar.style.background = `linear-gradient(90deg, ${this.config.colors.low}, ${this.getLevelColor(activeLevel)})`;
    }
  }
  
  scrollToItem(item) {
    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  initScrollObserver() {
    // Auto-update tracker based on scroll position
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const level = entry.target.dataset.level;
          if (this.slider && !this.isUserInteracting) {
            this.slider.value = level;
            this.updateGap(level);
          }
        }
      });
    }, { threshold: [0.5] });
    
    this.trackerItems.forEach(item => observer.observe(item));
    
    // Track user interaction to prevent scroll conflicts
    if (this.slider) {
      this.slider.addEventListener('mousedown', () => this.isUserInteracting = true);
      this.slider.addEventListener('mouseup', () => {
        setTimeout(() => this.isUserInteracting = false, 1000);
      });
      this.slider.addEventListener('touchstart', () => this.isUserInteracting = true);
      this.slider.addEventListener('touchend', () => {
        setTimeout(() => this.isUserInteracting = false, 1000);
      });
    }
  }
}

/**
 * Initialize tracker with guide data
 * Call this function with the data from your guide's data.json
 */
function initTracker(guideData) {
  return new PatternTracker({
    meterLabel: guideData.meter_label,
    effectNoun: guideData.effect_noun,
    levels: guideData.dread_levels,
    gapStates: guideData.gap_states,
    timeline: guideData.timeline?.acts || [],
    colors: guideData.colors || undefined
  });
}

/**
 * 5-Step Progress Bar Controller
 * Links sections of the guide to the 5-step methodology
 */
class FiveStepProgress {
  constructor(steps) {
    this.steps = steps || [
      { id: 1, label: 'Context', section: '#reveal' },
      { id: 2, label: 'Pattern', section: '#gap' },
      { id: 3, label: 'Evidence', section: '#tools' },
      { id: 4, label: 'Analysis', section: '#toolkit' },
      { id: 5, label: 'Synthesis', section: '#cta' }
    ];
    
    this.progressBar = document.querySelector('.progress-bar');
    this.init();
  }
  
  init() {
    if (!this.progressBar) return;
    
    // Render progress steps
    this.render();
    
    // Set up scroll observer
    this.initScrollObserver();
    
    // Handle click navigation
    this.initClickHandlers();
  }
  
  render() {
    this.progressBar.innerHTML = this.steps.map(step => `
      <a href="${step.section}" class="progress-step" data-step="${step.id}">
        <div class="progress-step-marker">${step.id}</div>
        <span class="progress-step-label">${step.label}</span>
      </a>
    `).join('');
  }
  
  initScrollObserver() {
    const sections = this.steps.map(step => document.querySelector(step.section)).filter(Boolean);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = '#' + entry.target.id;
          const step = this.steps.find(s => s.section === sectionId);
          if (step) this.setActiveStep(step.id);
        }
      });
    }, { threshold: 0.3, rootMargin: '-20% 0px -70% 0px' });
    
    sections.forEach(section => observer.observe(section));
  }
  
  initClickHandlers() {
    const stepElements = this.progressBar.querySelectorAll('.progress-step');
    stepElements.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const stepId = parseInt(el.dataset.step);
        const step = this.steps.find(s => s.id === stepId);
        if (step) {
          const section = document.querySelector(step.section);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }
  
  setActiveStep(stepId) {
    const stepElements = this.progressBar.querySelectorAll('.progress-step');
    stepElements.forEach(el => {
      const id = parseInt(el.dataset.step);
      el.classList.remove('active', 'completed');
      
      if (id === stepId) {
        el.classList.add('active');
      } else if (id < stepId) {
        el.classList.add('completed');
      }
    });
  }
}

/**
 * Initialize the 5-step progress bar
 * Call this on page load for guide pages
 */
function initProgressBar(customSteps) {
  return new FiveStepProgress(customSteps);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PatternTracker, FiveStepProgress, initTracker, initProgressBar };
}
