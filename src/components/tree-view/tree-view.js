class TreeView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    const template = `
      <style>
        :host {
          display: block;
          font-family: var(--font-family, sans-serif);
        }
        .tree-view {
          padding: 10px;
        }
        ::slotted(causs-tree-item) {
          margin-bottom: 5px;
        }
      </style>
      <div class="tree-view">
        <slot></slot>
      </div>
    `;
    
    this.shadowRoot.innerHTML = template;
  }
}

class TreeItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    const template = `
      <style>
        :host {
          display: block;
        }
        .tree-item {
          margin-left: 20px;
        }
        .tree-item-header {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 8px;
          border-radius: var(--border-radius);
          transition: background-color 0.2s;
        }
        .tree-item-header:hover {
          background-color: var(--background-hover);
        }
        .tree-item-header.selected {
          background-color: var(--components-bg);
        }
        .toggle-icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
          transition: transform 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .toggle-icon svg {
          width: 12px;
          height: 12px;
        }
        .tree-item-content {
          display: none;
          padding-left: 24px;
        }
        :host([expanded]) .tree-item-content {
          display: block;
        }
        :host([expanded]) .toggle-icon {
          transform: rotate(90deg);
        }
        .tree-item-label {
          flex: 1;
        }
        .tree-item-icon {
          margin-right: 8px;
          display: flex;
          align-items: center;
        }
        :host(:not([has-children])) .toggle-icon {
          visibility: hidden;
        }
      </style>
      <div class="tree-item">
        <div class="tree-item-header">
          <div class="toggle-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <div class="tree-item-icon">
            <slot name="icon"></slot>
          </div>
          <div class="tree-item-label">
            <slot name="label">Item</slot>
          </div>
        </div>
        <div class="tree-item-content">
          <slot></slot>
        </div>
      </div>
    `;
    
    this.shadowRoot.innerHTML = template;
  }
  
  connectedCallback() {
    // Check if this item has children
    const hasChildren = this.querySelector('causs-tree-item') !== null;
    if (hasChildren) {
      this.setAttribute('has-children', '');
    }
    
    // Set up toggle functionality
    const header = this.shadowRoot.querySelector('.tree-item-header');
    header.addEventListener('click', () => {
      if (hasChildren) {
        this.toggleExpanded();
      }
      
      // Dispatch selection event
      this.dispatchEvent(new CustomEvent('tree-item-select', {
        bubbles: true,
        composed: true,
        detail: { item: this }
      }));
    });
    
    // Expand by default if attribute is set
    if (this.hasAttribute('expanded')) {
      this.toggleExpanded(true);
    }
  }
  
  toggleExpanded(force) {
    const isExpanded = typeof force !== 'undefined' ? force : !this.hasAttribute('expanded');
    
    if (isExpanded) {
      this.setAttribute('expanded', '');
    } else {
      this.removeAttribute('expanded');
    }
    
    this.dispatchEvent(new CustomEvent('tree-item-toggle', {
      bubbles: true,
      composed: true,
      detail: { expanded: isExpanded }
    }));
  }
}

customElements.define('causs-tree-view', TreeView);
customElements.define('causs-tree-item', TreeItem); 