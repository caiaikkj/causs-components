class Tooltip extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      // Cria o contêiner e inicializa com o texto do atributo "data-tooltip"
      this.tooltipText = this.getAttribute('data-tooltip') || 'Tooltip';
    }
  
    connectedCallback() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      const tooltip = this.shadowRoot.querySelector('.tooltip');
      const target = this.shadowRoot.querySelector('.tooltip-container');
  
      target.addEventListener('mouseenter', () => tooltip.classList.add('visible'));
      target.addEventListener('mouseleave', () => tooltip.classList.remove('visible'));
      target.addEventListener('focus', () => tooltip.classList.add('visible'));
      target.addEventListener('blur', () => tooltip.classList.remove('visible'));
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            position: relative;
            display: inline-block;
            cursor: pointer;
          }
  
          .tooltip {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary);
            color: var(--background);
            padding: 8px;
            font-size: 14px;
            border-radius: var(--border-radius);
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s, visibility 0.2s;
          }
  
          .tooltip.visible {
            opacity: 1;
            visibility: visible;
          }
  
          .tooltip-container {
            display: inline-block;
          }
        </style>
        <div class="tooltip-container">
          <slot></slot>
          <div class="tooltip">${this.tooltipText}</div>
        </div>
      `;
    }
  }
  
  customElements.define('causs-tooltip', Tooltip);
  