class CaussAlert extends HTMLElement {
    constructor() {
      super();
  
      // Criar o Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Estrutura HTML
      const alertHTML = `
        <div class="alert">
          <div class="icon">
            <slot name="icon"></slot>
          </div>
          <div class="content">
            <div class="title">
              <slot name="title"></slot>
            </div>
            <div class="description">
              <slot name="description"></slot>
            </div>
          </div>
        </div>
      `;
      shadow.innerHTML = alertHTML;
  
      // Adicionar estilos
      const style = document.createElement('style');
      style.textContent = `
        .alert {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: 8px;
          color: var(--text-black);
          border: 1px solid #e5e7eb;
          font-family: var(--font-family);
        }
  
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
  
        .content {
          flex: 1;
        }
  
        .title {
          font-weight: bold;
          font-size: 1rem;
          margin-bottom: 4px;
        }
  
        .description {
          font-size: 0.875rem;
          line-height: 1.4;
        }
  
        /* Variantes */
        .alert.destructive {
          border-color: var(--danger);
          color: var(--danger);
        }
      `;
      shadow.appendChild(style);
    }
  
    connectedCallback() {
      const alert = this.shadowRoot.querySelector('.alert');
      const variant = this.getAttribute('variant');
      if (variant) {
        alert.classList.add(variant); // Adiciona a classe correspondente à variante
      }
    }
  }
  
  customElements.define('causs-alert', CaussAlert);
  