class Input extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupFileInput();
  }

  render() {
    const variant = this.getAttribute('variant') || 'default';
    const label = this.getAttribute('label');
    const isDisabled = this.hasAttribute('disabled');
    const type = this.getAttribute('type') || 'text';
    const placeholder = this.getAttribute('placeholder') || '';

    const isFile = type === 'file';
    const buttonText = this.getAttribute('button-text') || 'Choose File';

    let inputHTML = `
      <style>
        .input-wrapper {
          display: flex;
          flex-direction: column;
        }

        .input {
          color: var(--text-black);
          background: transparent;
          padding: 8px 12px;
          border: 1px solid var(--components-border);
          border-radius: var(--border-radius);
          font-size: 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        .input:focus {
          border-color: var(--primary);
          outline: none;
        }

        .input:disabled {
          border: none;
          background-color: var(--components-disabled);
          color: var(--subtext-black);
          cursor: not-allowed;
        }

        .label {
          font-size: 0.875rem;
          font-weight: 500;
        }

        /* Esconde o input de arquivo padrão */
        .file-input {
          display: none;
        }

        /* Botão customizado para upload */
        .custom-file-button {
          border: 1px solid var(--components-border);
          margin-top: 8px;
          border-radius: var(--border-radius);
          display: inline-block;
          cursor: pointer;
        }
      </style>

      <div class="input-wrapper">
        ${label ? `<label class="label">${label}</label>` : ''}

        ${
          isFile
            ? `
            <input type="file" class="file-input" />
            <causs-button class="custom-file-button" variant="ghost">${buttonText}</causs-button>
          `
            : `
            <input
              type="${type}"
              class="input ${variant}"
              ${isDisabled ? 'disabled' : ''}
              placeholder="${placeholder}"
            />
          `
        }
      </div>
    `;

    this.shadowRoot.innerHTML = inputHTML;
  }

  setupFileInput() {
    const fileInput = this.shadowRoot.querySelector('.file-input');
    const customButton = this.shadowRoot.querySelector('.custom-file-button');

    if (customButton && fileInput) {
      // Ativa o clique no input escondido ao clicar no botão customizado
      customButton.addEventListener('click', () => {
        fileInput.click();
      });
    }
  }
}

customElements.define('causs-input', Input);
