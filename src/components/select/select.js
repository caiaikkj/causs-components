class CaussSelect extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      // Template HTML para o componente
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
            --select-width: 300px;
          }
  
          .select-container {
            position: relative;
            width: var(--select-width);
          }
  
          .select-trigger {
            width: 100%;
            padding: 10px 12px;
            background-color: var(--background);
            border: 1px solid var(--components-border);
            border-radius: var(--border-radius);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--text-black);
            transition: background-color 0.2s ease;
          }
  
          .select-trigger:hover {
            background-color: var(--background-hover);
          }
  
          .select-content {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%; /* Garante que a largura é igual à do select-container */
            margin-top: 4px;
            background-color: var(--background);
            border: 1px solid var(--components-border);
            border-radius: var(--border-radius);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
            max-height: 200px;
            overflow-y: auto;
            z-index: 10;
            display: none;
            padding: 8px;
          }
  
          .select-content.open {
            display: block;
          }
  
          .select-item {
            padding: 10px 12px;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
  
          .select-item:hover {
            background-color: var(--background-hover);
            border-radius: var(--border-radius);
          }
  
          .select-item.active {
            background-color: var(--primary);
          }
  
          .select-label {
            border-radius: var(--border-radius);
            font-weight: bold;
            padding: 8px 12px;
            background-color: var(--background-hover);
          }
        </style>
  
        <div class="select-container">
          <div class="select-trigger" tabindex="0">
            <span id="select-value">Select an item</span>
            <span>
            <svg width="14px" height="14px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:var(--subtext-black);}</style></defs><title>chevron-down</title><g id="chevron-down-Filled"><path id="chevron-down-Filled-2" data-name="chevron-down-Filled" class="cls-1" d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"/></g></svg>
            </span>
          </div>
          <div class="select-content">
            <div class="select-label">Options</div>
            <!-- Items serão adicionados dinamicamente -->
          </div>
        </div>
      `;
    }
  
    connectedCallback() {
      this.trigger = this.shadowRoot.querySelector('.select-trigger');
      this.content = this.shadowRoot.querySelector('.select-content');
      this.valueDisplay = this.shadowRoot.querySelector('#select-value');
  
      // Adicionar comportamento ao abrir/fechar
      this.trigger.addEventListener('click', () => {
        this.content.classList.toggle('open');
      });
  
      // Fechar ao clicar fora
      document.addEventListener('click', (e) => {
        if (!this.contains(e.target)) {
          this.content.classList.remove('open');
        }
      });
  
      // Adicionar os itens definidos via atributo `items`
      if (this.hasAttribute('items')) {
        this.addItems(JSON.parse(this.getAttribute('items')));
      }
    }
  
    addItems(items) {
      const content = this.shadowRoot.querySelector('.select-content');
      items.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('select-item');
        itemElement.textContent = item.label || item;
        itemElement.dataset.value = item.value || item;
        content.appendChild(itemElement);
  
        // Evento de seleção
        itemElement.addEventListener('click', () => {
          this.value = item.value || item;
          this.valueDisplay.textContent = item.label || item;
          this.content.classList.remove('open');
          this.dispatchEvent(new Event('change'));
        });
      });
    }
  
    get value() {
      return this._value || '';
    }
  
    set value(val) {
      this._value = val;
    }
  }
  
  customElements.define('causs-select', CaussSelect);
  