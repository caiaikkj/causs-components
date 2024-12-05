class AccordionItem extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        // Estrutura do item de acordeão
        shadow.innerHTML = `
            <div class="accordion-item">
                <div class="accordion-header">
                    <slot name="header"></slot>
                    <span class="accordion-icon">+</span>
                </div>
                <div class="accordion-content">
                    <slot></slot>
                </div>
            </div>
        `;

        // Estilos do item de acordeão
        const style = document.createElement('style');
        style.textContent = `
            .accordion-item {
                border-bottom: 1px solid #e5e7eb;
                overflow: hidden;
                width: 100%;
            }
            .accordion-header {
                min-width: 400px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px;
                cursor: pointer;
                background-color: var(--background);
                font-weight: 600;
                transition: background-color 0.3s ease;
            }
            .accordion-header:hover {
                background-color: #f0f0f0;
            }
            .accordion-content {
                height: 0; /* Start with zero height */
                padding: 0 16px; /* Only horizontal padding initially */
                background-color: white;
                overflow: hidden;
                width: 100%;
                transition: height 0.3s ease, padding 0.3s ease; /* Animate height and padding */
            }
            .accordion-content.open {
                height: auto; /* Auto height when open */
                padding: 16px; /* Apply padding when open */
            }
            .accordion-icon {
                transition: transform 0.3s ease;
                font-size: 18px;
            }
            .accordion-icon.open {
                transform: rotate(45deg);
            }
        `;
        shadow.appendChild(style);
    }

    connectedCallback() {
        this.isOpen = false;
        this.header = this.shadowRoot.querySelector('.accordion-header');
        this.content = this.shadowRoot.querySelector('.accordion-content');
        this.icon = this.shadowRoot.querySelector('.accordion-icon');

        this.header.addEventListener('click', () => {
            this.toggle();
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.content.classList.add('open');
            this.icon.classList.add('open');
        } else {
            this.content.classList.remove('open');
            this.icon.classList.remove('open');
        }
        this.dispatchEvent(new CustomEvent('toggle', { bubbles: true }));
    }

    close() {
        this.isOpen = false;
        this.content.classList.remove('open');
        this.icon.classList.remove('open');
    }
}

customElements.define('causs-accordion-item', AccordionItem);
