class Card extends HTMLElement {
    constructor() {
      super();
  
      // Criar Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Estrutura base do Card
      const cardHTML = `
        <div class="card">
          <div class="card-header">
            <slot name="header"></slot>
          </div>
          <div class="card-content">
            <slot name="content"></slot>
          </div>
          <div class="card-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      `;
  
      // Adicionar HTML ao Shadow DOM
      shadow.innerHTML = cardHTML;
  
      // Adicionar estilos
      const style = document.createElement('style');
      style.textContent = `
        .card {
            font-family: var(--font-family);
            width: fit-content;
            max-width: 400px;
            background: var(--foreground);
            border: 1px solid var(--components-border);
            border-radius: var(--border-radius);
            box-shadow: 0 2px 0 var(--shadow-color);
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .card-header {
          font-size: 1.25rem;
          font-weight: bold;
          color: var(--text-black);
        }
  
        .card-content {
          font-size: 1rem;
          color: var(--subtext-black);
        }
  
        .card-footer {
            text-align: right;
        }
      `;
  
      shadow.appendChild(style);
    }
  }
  
  // Definir o elemento customizado
  customElements.define('causs-card', Card);
  