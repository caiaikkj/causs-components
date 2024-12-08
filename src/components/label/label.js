class Label extends HTMLElement {
    constructor() {
      super();
  
      // Criar Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Estrutura HTML
      shadow.innerHTML = `
        <style>
          :host {
            display: inline-block;
            font-size: 14px;
            color: var(--label-color, #333);
            user-select: none;
          }
          :host([disabled]) {
            color: var(--disabled-color, #999);
            cursor: not-allowed;
          }
        </style>
        <slot></slot>
      `;
    }
  
    connectedCallback() {
      // Configurar o clique para associar ao elemento vinculado via htmlFor
      this.addEventListener('click', this.handleLabelClick.bind(this));
    }
  
    handleLabelClick() {
      const targetId = this.getAttribute('htmlFor');
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement && targetElement.shadowRoot) {
          // Encontrar o input dentro do Shadow DOM do Switch
          const toggleInput = targetElement.shadowRoot.querySelector('input');
          if (toggleInput && !toggleInput.disabled) {
            toggleInput.click(); // Simula o clique no input
          }
        }
      }
    }
  }
  
  customElements.define('causs-label', Label);
  