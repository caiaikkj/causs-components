class Rating extends HTMLElement {
    constructor() {
        super();

        // Create Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Create container for stars
        this.container = document.createElement('div');
        this.container.classList.add('rating-container');

        // Styles
        const style = document.createElement('style');
        style.textContent = `
            .rating-container {
                display: inline-flex;
                align-items: center;
                gap: 0.25rem;
            }

            .star {
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .star svg {
                fill: var(--components-bg);
                width: var(--star-size, 24px);
                height: var(--star-size, 24px);
                transition: fill 0.2s ease;
            }

            .star.filled svg {
                fill: var(--primary);
            }

            .star.interactive:hover {
                transform: scale(1.05);
            }

            .star.interactive.hover-preview svg {
                fill: var(--primary-hover);
                opacity: 0.8;
            }

            .rating-value {
                margin-left: 0.5rem;
                color: var(--text-black);
                font-family: var(--font-family, sans-serif);
                font-size: var(--font-size, 16px);
            }
        `;

        // Append style to shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(this.container);

        // Bind methods
        this.handleStarClick = this.handleStarClick.bind(this);
        this.handleStarHover = this.handleStarHover.bind(this);
        this.handleStarLeave = this.handleStarLeave.bind(this);
    }

    connectedCallback() {
        // Get attributes
        const maxRating = parseInt(this.getAttribute('max-rating') || '5');
        const initialRating = parseFloat(this.getAttribute('initial-rating') || '0');
        const interactive = this.hasAttribute('interactive');
        const showValue = this.hasAttribute('show-value');

        this.renderStars(maxRating, initialRating, interactive, showValue);
    }

    renderStars(maxRating, initialRating, interactive, showValue) {
        this.container.innerHTML = ''; // Clear previous stars
        this.starElements = [];
        this.currentRating = initialRating;

        for (let i = 1; i <= maxRating; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            star.innerHTML = '<svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1</style></defs><title>star</title><g id="star-Filled"><path id="star-Filled-2" data-name="star-Filled" class="cls-1" d="M20.934,12.13,17.82,15.122l.735,4.221a1.824,1.824,0,0,1-.726,1.792,1.872,1.872,0,0,1-1.973.152L12,19.29l-3.856,2a1.869,1.869,0,0,1-1.973-.152,1.824,1.824,0,0,1-.726-1.792l.735-4.221L3.066,12.13a1.82,1.82,0,0,1-.477-1.881A1.845,1.845,0,0,1,4.1,8.986l4.309-.617,1.926-3.845a1.871,1.871,0,0,1,3.336,0l1.926,3.845,4.309.617a1.845,1.845,0,0,1,1.508,1.263A1.82,1.82,0,0,1,20.934,12.13Z"/></g></svg>'; // Full star SVG
            star.dataset.rating = i;

            if (i <= initialRating) {
                star.classList.add('filled');
            }

            if (interactive) {
                star.classList.add('interactive');
                star.addEventListener('click', this.handleStarClick);
                star.addEventListener('mouseover', this.handleStarHover);
                star.addEventListener('mouseleave', this.handleStarLeave);
            }

            this.container.appendChild(star);
            this.starElements.push(star);
        }

        // Add rating value display if show-value is true
        if (showValue) {
            const valueDisplay = document.createElement('span');
            valueDisplay.classList.add('rating-value');
            valueDisplay.textContent = `${initialRating.toFixed(1)}`;
            this.container.appendChild(valueDisplay);
        }
    }

    handleStarHover(event) {
        if (!this.hasAttribute('interactive')) return;

        const hoverRating = parseInt(event.target.closest('.star').dataset.rating);

        // Clear any previous hover states
        this.starElements.forEach(star => star.classList.remove('hover-preview'));

        // Add hover preview for stars up to and including the hovered star
        this.starElements.forEach(star => {
            const starRating = parseInt(star.dataset.rating);
            if (starRating <= hoverRating) {
                star.classList.add('hover-preview');
            }
        });
    }

    handleStarLeave() {
        if (!this.hasAttribute('interactive')) return;

        // Remove hover preview and restore filled state
        this.starElements.forEach(star => {
            star.classList.remove('hover-preview');
        });
    }

    handleStarClick(event) {
        if (!this.hasAttribute('interactive')) return;

        const clickedRating = parseInt(event.target.closest('.star').dataset.rating);
        this.currentRating = clickedRating;
        
        // Update filled state
        this.starElements.forEach(star => {
            const starRating = parseInt(star.dataset.rating);
            star.classList.toggle('filled', starRating <= clickedRating);
        });

        // Dispatch custom event with rating
        const ratingChangeEvent = new CustomEvent('rating-change', {
            detail: { rating: clickedRating },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(ratingChangeEvent);

        // Update rating value display if it exists
        const valueDisplay = this.shadowRoot.querySelector('.rating-value');
        if (valueDisplay) {
            valueDisplay.textContent = `${clickedRating.toFixed(1)}`;
        }
    }
}

// Define the custom element
customElements.define('causs-rating', Rating);