/**
 * LuminAIT Pricing Toggle Component
 * 
 * Handles the 5-week vs 10-week program toggle on the landing-hub page.
 * Shows different content, pricing, and curriculum based on selection.
 * 
 * Usage:
 * 1. Include this script in the landing-hub page
 * 2. Use data attributes on elements to show/hide content
 * 3. Call initPricingToggle() on page load
 */

class PricingToggle {
  constructor(config = {}) {
    this.config = {
      defaultProgram: config.defaultProgram || '10-week',
      programs: config.programs || {
        '5-week': {
          name: '5-Week Thematic Model',
          target: 'Year 7-9',
          focus: 'Pattern Recognition & Device Analysis',
          price: '$275',
          pricePerWeek: '$55',
          pricePerHour: '~$37',
          hours: '7.5 hours total',
          description: 'Build foundational analytical skills through our thematic framework.',
          weeks: [
            { week: 1, title: 'Context & Pattern', desc: 'Identify the core pattern driving the text' },
            { week: 2, title: 'Device Detection', desc: 'Learn to spot and name literary devices' },
            { week: 3, title: 'Evidence Collection', desc: 'Find and organize textual evidence' },
            { week: 4, title: 'Analysis Sentences', desc: 'Write TVODE sentences that connect evidence to effect' },
            { week: 5, title: 'Paragraph Assembly', desc: 'Build complete analytical paragraphs' }
          ]
        },
        '10-week': {
          name: '10-Week Theoretical Model',
          target: 'Year 10-12',
          focus: 'Complete Essay Mastery',
          price: '$550',
          pricePerWeek: '$55',
          pricePerHour: '~$37',
          hours: '15 hours total',
          description: 'Master the complete analytical essay framework from thesis to conclusion.',
          weeks: [
            { week: '0-0.5', title: 'Pre-Analysis', desc: 'Context, author background, structural overview' },
            { week: '1-2', title: 'Pattern Recognition', desc: 'Identify the controlling pattern and voice' },
            { week: '3-4', title: 'Device Analysis', desc: 'Deep dive into 5-7 key devices with evidence' },
            { week: '5-6', title: 'Evidence Integration', desc: 'Connect devices to pattern, build TVODE sentences' },
            { week: '7-8', title: 'Thesis Construction', desc: 'Build DCCEPS thesis statements' },
            { week: '9-10', title: 'Essay Synthesis', desc: 'Write complete analytical essays with feedback' }
          ]
        }
      },
      selectors: {
        toggle: '.pricing-toggle',
        toggleBtn: '.pricing-toggle-btn',
        content: '[data-program]',
        price: '.program-price',
        pricePerWeek: '.program-price-per-week',
        programName: '.program-name',
        programTarget: '.program-target',
        weekGrid: '.curriculum-weeks'
      }
    };
    
    this.currentProgram = this.config.defaultProgram;
    this.init();
  }
  
  init() {
    // Set up toggle buttons
    this.toggleBtns = document.querySelectorAll(this.config.selectors.toggleBtn);
    this.toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const program = btn.dataset.program;
        this.setProgram(program);
      });
    });
    
    // Set initial state
    this.setProgram(this.currentProgram);
    
    // Listen for URL hash changes
    if (window.location.hash) {
      const hashProgram = window.location.hash.replace('#', '');
      if (this.config.programs[hashProgram]) {
        this.setProgram(hashProgram);
      }
    }
  }
  
  setProgram(programId) {
    if (!this.config.programs[programId]) return;
    
    this.currentProgram = programId;
    const program = this.config.programs[programId];
    
    // Update toggle buttons
    this.toggleBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.program === programId);
    });
    
    // Update content visibility
    document.querySelectorAll(this.config.selectors.content).forEach(el => {
      const showFor = el.dataset.program;
      if (showFor === 'all' || showFor === programId) {
        el.style.display = '';
        el.classList.add('animate-fade-in');
      } else {
        el.style.display = 'none';
        el.classList.remove('animate-fade-in');
      }
    });
    
    // Update dynamic text
    this.updateText('.program-name', program.name);
    this.updateText('.program-target', program.target);
    this.updateText('.program-focus', program.focus);
    this.updateText('.program-price', program.price);
    this.updateText('.program-price-per-week', program.pricePerWeek);
    this.updateText('.program-price-per-hour', program.pricePerHour);
    this.updateText('.program-hours', program.hours);
    this.updateText('.program-description', program.description);
    
    // Render curriculum weeks
    this.renderCurriculum(program.weeks);
    
    // Update URL hash (without scrolling)
    history.replaceState(null, null, `#${programId}`);
    
    // Dispatch event for external listeners
    document.dispatchEvent(new CustomEvent('programChange', { 
      detail: { programId, program } 
    }));
  }
  
  updateText(selector, text) {
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = text;
    });
  }
  
  renderCurriculum(weeks) {
    const container = document.querySelector(this.config.selectors.weekGrid);
    if (!container) return;
    
    container.innerHTML = weeks.map((week, index) => `
      <div class="curriculum-week card-dark animate-fade-in" style="animation-delay: ${index * 50}ms">
        <div class="week-number">${typeof week.week === 'number' ? `Week ${week.week}` : `Weeks ${week.week}`}</div>
        <h4 class="week-title">${week.title}</h4>
        <p class="week-desc">${week.desc}</p>
      </div>
    `).join('');
  }
  
  getProgram(programId) {
    return this.config.programs[programId || this.currentProgram];
  }
}

/**
 * Initialize pricing toggle
 * Call on page load with optional custom program data
 */
function initPricingToggle(customPrograms) {
  return new PricingToggle({
    programs: customPrograms
  });
}

/**
 * Pricing Toggle HTML Component
 * Returns the HTML for the toggle buttons
 */
function renderPricingToggle() {
  return `
    <div class="pricing-toggle">
      <button class="pricing-toggle-btn" data-program="5-week">
        <span class="toggle-label">5 Weeks</span>
        <span class="toggle-subtitle">Yr 7-9</span>
      </button>
      <button class="pricing-toggle-btn active" data-program="10-week">
        <span class="toggle-label">10 Weeks</span>
        <span class="toggle-subtitle">Yr 10-12</span>
      </button>
    </div>
  `;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PricingToggle, initPricingToggle, renderPricingToggle };
}
