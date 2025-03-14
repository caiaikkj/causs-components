class Combobox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this._open = false;
        this._selectedIndex = -1;
        this._items = [];
        
        const label = this.getAttribute('label');
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    position: relative;
                    width: var(--select-width, 300px);
                }

                .combobox {
                    position: relative;
                }

                .input-wrapper {
                    display: flex;
                    align-items: center;
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    background: var(--background);
                    padding: 10px 12px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    width: 100%;
                    box-sizing: border-box;
                }

                .input-wrapper:hover {
                    background: var(--background-hover);
                }

                .input-wrapper:focus-within {
                    border-color: var(--primary);
                }

                input {
                    flex: 1;
                    border: none;
                    background: none;
                    padding: 0;
                    margin: 0;
                    outline: none;
                    font-size: 1rem;
                    color: var(--text-black);
                    width: 100%;
                    cursor: pointer;
                }

                input::placeholder {
                    color: var(--subtext-black);
                    opacity: 1;
                }

                .arrow {
                    display: flex;
                    align-items: center;
                    margin-left: 8px;
                    color: var(--subtext-black);
                    transition: transform 0.2s ease;
                }

                .arrow svg {
                    width: 14px;
                    height: 14px;
                }

                .arrow.open {
                    transform: rotate(180deg);
                }

                .dropdown {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    margin-top: 4px;
                    background: var(--background);
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    max-height: 200px;
                    overflow-y: auto;
                    z-index: 10;
                    display: none;
                    padding: 8px;
                }

                .dropdown.open {
                    display: block;
                }

                .option {
                    padding: 10px 12px;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                    border-radius: var(--border-radius);
                }

                .option:hover {
                    background-color: var(--background-hover);
                }

                .option.selected {
                    background-color: var(--primary);
                    color: var(--white);
                }

                .option.highlighted {
                    background: var(--background-hover);
                }

                .no-results {
                    padding: 8px 12px;
                    color: var(--subtext-black);
                    font-style: italic;
                }

                /* For multiple selection */
                .tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4px;
                    margin-bottom: 4px;
                }

                .tag {
                    display: flex;
                    align-items: center;
                    background: var(--background-hover);
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    padding: 2px 8px;
                    font-size: 12px;
                }

                .tag-remove {
                    margin-left: 4px;
                    cursor: pointer;
                    opacity: 0.7;
                }

                .tag-remove:hover {
                    opacity: 1;
                }

                /* Add label support */
                .label {
                    font-size: 0.875rem;
                    font-weight: 500;
                    margin-bottom: 8px;
                    display: block;
                }
            </style>

            <div class="combobox">
                ${label ? `<label class="label">${label}</label>` : ''}
                <div class="input-wrapper">
                    <div class="tags"></div>
                    <input type="text" placeholder="${this.getAttribute('placeholder') || 'Select or type...'}">
                    <div class="arrow">
                        <svg width="14" height="14" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg">
                            <defs><style>.cls-1{fill:var(--subtext-black);}</style></defs>
                            <title>chevron-down</title>
                            <g id="chevron-down-Filled">
                                <path id="chevron-down-Filled-2" data-name="chevron-down-Filled" class="cls-1" d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="dropdown"></div>
            </div>
        `;

        this._input = this.shadowRoot.querySelector('input');
        this._dropdown = this.shadowRoot.querySelector('.dropdown');
        this._arrow = this.shadowRoot.querySelector('.arrow');
        this._tags = this.shadowRoot.querySelector('.tags');
    }

    connectedCallback() {
        this.multiple = this.hasAttribute('multiple');
        this.setupEventListeners();
        this.loadItems();
    }

    setupEventListeners() {
        // Input events
        this._input.addEventListener('input', () => this.handleInput());
        
        // Make the whole wrapper clickable
        const wrapper = this.shadowRoot.querySelector('.input-wrapper');
        wrapper.addEventListener('click', () => {
            this._input.focus();
            this.open();
        });
        
        this._input.addEventListener('keydown', (e) => this.handleKeydown(e));

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                this.close();
            }
        });
    }

    loadItems() {
        // Load items from slot or data attribute
        const items = this.getAttribute('items');
        if (items) {
            this._items = JSON.parse(items);
        } else {
            // Load from slot
            const slot = this.querySelector('slot');
            if (slot) {
                this._items = Array.from(slot.children).map(child => ({
                    value: child.getAttribute('value') || child.textContent,
                    label: child.textContent
                }));
            }
        }
        this.renderDropdown();
    }

    handleInput() {
        const value = this._input.value.toLowerCase();
        this.filterItems(value);
        this.open();
    }

    filterItems(value) {
        const filtered = this._items.filter(item => 
            item.label.toLowerCase().includes(value)
        );
        this.renderDropdown(filtered);
    }

    renderDropdown(items = this._items) {
        this._dropdown.innerHTML = items.length ? 
            items.map((item, index) => `
                <div class="option" data-index="${index}">
                    ${item.label}
                </div>
            `).join('') :
            '<div class="no-results">No results found</div>';

        this._dropdown.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => {
                this.selectItem(parseInt(option.dataset.index));
            });
        });
    }

    selectItem(index) {
        const item = this._items[index];
        if (this.multiple) {
            this.addTag(item);
            this._input.value = '';
            this._input.placeholder = '';
        } else {
            this._input.value = item.label;
            this._input.placeholder = '';
            this.close();
        }

        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: item.value, label: item.label },
            bubbles: true
        }));
    }

    addTag(item) {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `
            ${item.label}
            <span class="tag-remove">×</span>
        `;
        tag.querySelector('.tag-remove').addEventListener('click', () => {
            tag.remove();
            this.dispatchEvent(new CustomEvent('remove', {
                detail: { value: item.value, label: item.label },
                bubbles: true
            }));
        });
        this._tags.appendChild(tag);
    }

    handleKeydown(e) {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.highlightNext();
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.highlightPrevious();
                break;
            case 'Enter':
                e.preventDefault();
                if (this._selectedIndex >= 0) {
                    this.selectItem(this._selectedIndex);
                }
                break;
            case 'Escape':
                this.close();
                break;
        }
    }

    highlightNext() {
        const options = this._dropdown.querySelectorAll('.option');
        if (this._selectedIndex < options.length - 1) {
            this._selectedIndex++;
            this.updateHighlight();
        }
    }

    highlightPrevious() {
        if (this._selectedIndex > 0) {
            this._selectedIndex--;
            this.updateHighlight();
        }
    }

    updateHighlight() {
        const options = this._dropdown.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.classList.toggle('highlighted', index === this._selectedIndex);
            if (index === this._selectedIndex) {
                option.scrollIntoView({ block: 'nearest' });
            }
        });
    }

    open() {
        if (!this._open) {
            this._open = true;
            this._dropdown.classList.add('open');
            this._arrow.classList.add('open');
        }
    }

    close() {
        if (this._open) {
            this._open = false;
            this._dropdown.classList.remove('open');
            this._arrow.classList.remove('open');
            this._selectedIndex = -1;
        }
    }

    reset() {
        this._input.value = '';
        this._input.placeholder = this.getAttribute('placeholder') || 'Select or type...';
    }
}

customElements.define('causs-combobox', Combobox); 