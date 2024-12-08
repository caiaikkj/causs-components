class Switch extends HTMLElement {
    constructor() {
      super();
  
      // Criar o Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Estrutura HTML
      const switchHTML = `
        <label class="switch">
          <input type="checkbox" class="toggle">
          <span class="slider"></span>
        </label>
      `;
      shadow.innerHTML = switchHTML;
  
      // Estilos
      const style = document.createElement('style');
      style.textContent = `
        :host {
          display: inline-block;
        }
  
        .switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }
  
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
  
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--components-bg);
          transition: 0.2s;
          border-radius: var(--border-radius);
        }
  
        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: var(--white);
          transition: 0.2s;
          border-radius: var(--border-radius);
        }
  
        input:checked + .slider {
          background-color: var(--primary);
        }
  
        input:checked + .slider:before {
          transform: translateX(20px);
        }
  
        input:disabled + .slider {
          background-color: var(--components-disabled);
          cursor: not-allowed;
        }
      `;
      shadow.appendChild(style);
    }
  
    connectedCallback() {
      const toggle = this.shadowRoot.querySelector('.toggle');
  
      // Definir o estado inicial
      toggle.checked = this.hasAttribute('checked');
      toggle.disabled = this.hasAttribute('disabled');
  
      // Adicionar evento de mudança
      toggle.addEventListener('change', () => {
        this.dispatchEvent(
          new CustomEvent('switch-change', {
            detail: { checked: toggle.checked },
          })
        );
      });
    }
  
    // Atualiza atributos dinamicamente
    static get observedAttributes() {
      return ['checked', 'disabled'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      const toggle = this.shadowRoot.querySelector('.toggle');
      if (name === 'checked') {
        toggle.checked = this.hasAttribute('checked');
      }
      if (name === 'disabled') {
        toggle.disabled = this.hasAttribute('disabled');
      }
    }
  }
  
  customElements.define('causs-switch', Switch);
  