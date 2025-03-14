class Carousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        // Initial state
        this._currentSlide = 0;
        this._autoplay = false;
        this._interval = null;
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    padding-top: 16px;
                }

                .carousel {
                    position: relative;
                    width: 100%;
                }

                .slides-container {
                    display: flex;
                    transition: transform 0.3s ease-in-out;
                    width: 100%;
                    padding: 16px 0;
                }

                ::slotted(*) {
                    flex: 0 0 100%;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .controls {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    transform: translateY(-50%);
                    display: flex;
                    justify-content: space-between;
                    padding: 0 16px;
                    z-index: 1;
                }

                .control-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    background: var(--background);
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    padding: 8px;
                    cursor: pointer;
                    opacity: 0.8;
                    transition: all 0.2s ease;
                    color: var(--subtext-black);
                }

                .control-button:hover {
                    opacity: 1;
                    background: var(--background-hover);
                }

                .control-button svg {
                    width: 16px;
                    height: 16px;
                }

                .indicators {
                    position: absolute;
                    bottom: 16px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 8px;
                    padding: 8px;
                    background: var(--background);
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    z-index: 1;
                }

                .indicator {
                    width: 8px;
                    height: 8px;
                    min-width: 8px;
                    min-height: 8px;
                    border-radius: 50%;
                    background: var(--background);
                    border: 1px solid var(--components-border);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }

                .indicator:hover {
                    background: var(--background-hover);
                }

                .indicator.active {
                    background: var(--primary);
                    border-color: var(--primary);
                }
            </style>

            <div class="carousel">
                <div class="slides-container">
                    <slot></slot>
                </div>
                <div class="controls">
                    <button class="control-button prev" aria-label="Previous slide">
                        <svg width="14" height="14" viewBox="0 0 24 24">
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="control-button next" aria-label="Next slide">
                        <svg width="14" height="14" viewBox="0 0 24 24">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div class="indicators"></div>
            </div>
        `;
    }

    connectedCallback() {
        this.setupSlides();
        this.setupControls();
        this.setupAutoplay();
    }

    setupSlides() {
        this.slides = Array.from(this.children);
        this.totalSlides = this.slides.length;
        
        // Create indicators
        const indicators = this.shadowRoot.querySelector('.indicators');
        this.slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.addEventListener('click', () => this.goToSlide(index));
            indicators.appendChild(indicator);
        });
        
        this.updateSlidePosition();
    }

    setupControls() {
        const prevButton = this.shadowRoot.querySelector('.prev');
        const nextButton = this.shadowRoot.querySelector('.next');
        
        prevButton.addEventListener('click', () => this.previousSlide());
        nextButton.addEventListener('click', () => this.nextSlide());
        
        // Keyboard navigation
        this.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    setupAutoplay() {
        if (this.hasAttribute('autoplay')) {
            this._autoplay = true;
            const interval = this.getAttribute('interval') || 5000;
            this.startAutoplay(interval);
        }
    }

    startAutoplay(interval) {
        this._interval = setInterval(() => this.nextSlide(), interval);
    }

    stopAutoplay() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }

    goToSlide(index) {
        this._currentSlide = index;
        this.updateSlidePosition();
    }

    previousSlide() {
        this._currentSlide = (this._currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlidePosition();
    }

    nextSlide() {
        this._currentSlide = (this._currentSlide + 1) % this.totalSlides;
        this.updateSlidePosition();
    }

    updateSlidePosition() {
        const container = this.shadowRoot.querySelector('.slides-container');
        container.style.transform = `translateX(-${this._currentSlide * 100}%)`;
        
        // Update indicators
        const indicators = this.shadowRoot.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this._currentSlide);
        });

        // Dispatch event
        this.dispatchEvent(new CustomEvent('slide-change', {
            detail: { currentSlide: this._currentSlide },
            bubbles: true
        }));
    }

    disconnectedCallback() {
        this.stopAutoplay();
    }
}

customElements.define('causs-carousel', Carousel); 