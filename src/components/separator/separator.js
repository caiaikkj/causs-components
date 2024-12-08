class CaussSeparator extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const template = `
        <style>
          :host {
            display: block;
            width: 100%;
          }
  
          .separator {
            background-color: var(--components-border);
            margin: var(--separator-margin, 8px 0);
          }
  
          .horizontal {
            height: var(--separator-thickness, 1px);
            width: 100%;
          }
  
          .vertical {
            width: var(--separator-thickness, 1px);
            height: 100%;
          }
        </style>
        <div class="separator"></div>
      `;
  
      this.shadowRoot.innerHTML = template;
    }
  
    static get observedAttributes() {
      return ['orientation', 'thickness', 'color', 'margin'];
    }
  
    connectedCallback() {
      this.separator = this.shadowRoot.querySelector('.separator');
      this.updateStyles();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.updateStyles();
      }
    }
  
    updateStyles() {
      const orientation = this.getAttribute('orientation') || 'horizontal';
      const thickness = this.getAttribute('thickness') || '1px';
      const color = this.getAttribute('color') || '#ccc';
      const margin = this.getAttribute('margin') || '8px 0';
  
      // Define a classe de orientação
      this.separator.className = `separator ${orientation}`;
      // Aplica os estilos personalizados
      this.separator.style.setProperty('--separator-thickness', thickness);
      this.separator.style.setProperty('--separator-color', color);
      this.separator.style.setProperty('--separator-margin', margin);
    }
  }
  
  customElements.define('causs-separator', CaussSeparator);
  