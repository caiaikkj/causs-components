class Checkbox extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._isChecked = false;
        this._isDisabled = false;
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    static get observedAttributes() {
        return ['checked', 'disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'checked') {
            this._isChecked = newValue !== null;
            this.render();
        }
        if (name === 'disabled') {
            this._isDisabled = newValue !== null;
            this.render();
        }
    }

    setupEventListeners() {
        this.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(clickEvent) {
        clickEvent.preventDefault();
        clickEvent.stopPropagation();

        if (this._isDisabled) return;

        this._isChecked = !this._isChecked;
        
        if (this._isChecked) {
            this.setAttribute('checked', '');
        } else {
            this.removeAttribute('checked');
        }

        const customEvent = new CustomEvent('change', {
            detail: { checked: this._isChecked },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(customEvent);

        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    cursor: ${this._isDisabled ? 'not-allowed' : 'pointer'};
                }
                .checkbox {
                    width: 20px;
                    height: 20px;
                    border: 2px solid ${this._isDisabled ? 'var(--components-disabled)' : 'var(--primary)'};
                    background-color: ${this._isDisabled ? 'var(--components-disabled)' : 
                        (this._isChecked ? 'var(--primary)' : 'var(--secondary)')};
                    border-radius: var(--border-radius);
                    position: relative;
                    transition: all 0.2s ease;
                }
                .checkbox::after {
                    content: '';
                    position: absolute;
                    display: ${this._isChecked ? 'block' : 'none'};
                    left: 6px;
                    top: 2px;
                    width: 5px;
                    height: 10px;
                    border: solid var(--white);
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                }
            </style>
            <div class="checkbox"></div>
        `;
    }
}

customElements.define('causs-checkbox', Checkbox);