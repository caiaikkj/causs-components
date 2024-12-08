class Button extends HTMLElement {
    constructor() {
      super();
  
      // Criar o Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Estrutura HTML
      const buttonHTML = `
        <button class="btn">
          <slot></slot>
        </button>
      `;
      shadow.innerHTML = buttonHTML;
  
      // Adicionar estilos
      const style = document.createElement('style');
      style.textContent = `
        .btn {
          background-color: var(--primary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-family);
          color: var(--text-white);
          padding: 10px 1rem;
          border: none;
          border-radius: var(--border-radius);
          font-size: var(--font-size);
        }
  
        .btn:hover {
          background-color: var(--primary-hover);
        }
  
        /* Variantes */
        .btn.secondary {
          background-color: var(--secondary);
          color: var(--text-black);
        }
  
        .btn.secondary:hover {
          background-color: var(--secondary-hover);
        }
  
        .btn.destructive {
          background-color: var(--red);
          color: var(--text-white);
        }
  
        .btn.destructive:hover {
          background-color: var(--danger-hover);
        }
  
        .btn.outline {
          background-color: transparent;
          border: 1px solid var(--components-border);
          color: var(--text-black);
        }
  
        .btn.outline:hover {
          background-color: var(--background-hover);
        }
  
        .btn.ghost {
          background-color: transparent;
          color: var(--text-black);
        }
  
        .btn.ghost:hover {
          background-color: var(--background-hover);
        }
  
        .btn:disabled {
          background-color: var(--components-disabled);
          color: var(--text-black);
          cursor: not-allowed;
        }
        
        .btn.full-width {
          display: block; /* Garante que o botão seja tratado como bloco */
          width: 100%;    /* Ocupa toda a largura do container */
        }
      `;
      shadow.appendChild(style);
    }
  
    connectedCallback() {
        const button = this.shadowRoot.querySelector('.btn');
        const variant = this.getAttribute('variant');
        if (variant) {
          button.classList.add(variant); // Adiciona a classe correspondente à variante
        }
        if (this.hasAttribute('disabled')) {
          button.setAttribute('disabled', 'true');
        }
        if (this.hasAttribute('full-width')) {
          button.classList.add('full-width'); // Adiciona a classe full-width
        }
      }
      
  }
  
  customElements.define('causs-button', Button);
  