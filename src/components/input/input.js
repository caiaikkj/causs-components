class Input extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const variant = this.getAttribute('variant') || 'default';
      const label = this.getAttribute('label');
      const isDisabled = this.hasAttribute('disabled');
      const isFile = variant === 'file';
      const type = this.getAttribute('type') || 'text';
      const placeholder = this.getAttribute('placeholder') || '';
  
      let inputHTML = `
        <style>
          .input-wrapper {
            display: flex;
            flex-direction: column;
          }
  
            .input {
              padding: 8px 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              font-size: 1rem;
              width: 100%; /* Garante que os inputs ocuparam o mesmo espaço */
              box-sizing: border-box; /* Garante que o padding não afete o tamanho total */
            }

            .input:disabled {
              border: none;
              background-color: #f1f1f1;
              color: #ccc;
              cursor: not-allowed;
            }
  
          .label {
            font-size: 0.875rem;
            font-weight: 500;
          }
  
          /* Estilo para o input de tipo "file" */
          .input[type="file"] {
              font-size: 1rem; /* Mesma fonte para todos os inputs */
              padding: 8px 12px; /* Mesmo padding */
              border-radius: 4px;
              width: 100%; /* Garante que o input de arquivo tenha a mesma largura */
            }
        </style>
  
        <div class="input-wrapper">
          ${label ? `<label class="label">${label}</label>` : ''}
          <input
            type="${type}"
            class="input ${variant}"
            ${isDisabled ? 'disabled' : ''}
            placeholder="${placeholder}"
          />
        </div>
      `;
  
      this.shadowRoot.innerHTML = inputHTML;
    }
  }
  
  customElements.define('causs-input', Input);
  