class Sheet extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.isOpen = false; // Estado inicial
    }
  
    connectedCallback() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      const trigger = this.shadowRoot.querySelector('.sheet-trigger');
      const close = this.shadowRoot.querySelector('.sheet-close');
      const content = this.shadowRoot.querySelector('.sheet-content');
      const overlay = this.shadowRoot.querySelector('.sheet-overlay');
  
      // Abre o Sheet
      trigger?.addEventListener('click', () => {
        this.isOpen = true;
        content.classList.add('open');
        overlay.classList.add('visible');
      });
  
      // Fecha o Sheet
      close?.addEventListener('click', () => {
        this.isOpen = false;
        content.classList.remove('open');
        overlay.classList.remove('visible');
      });

      // Fecha o Sheet ao clicar no overlay
      overlay?.addEventListener('click', () => {
        this.isOpen = false;
        content.classList.remove('open');
        overlay.classList.remove('visible');
      });
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            --sheet-width: 400px;
          }
  
          .sheet-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
            z-index: 10;
          }

          .sheet-overlay.visible {
            opacity: 1;
            visibility: visible;
          }
  
          .sheet-container {
            position: relative;
          }
  
          .sheet-trigger {
            cursor: pointer;
          }
  
          .sheet-content {
            position: fixed;
            top: 0;
            right: 0;
            height: 100%;
            width: var(--sheet-width);
            background-color: var(--background);
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            display: flex;
            flex-direction: column;
            border-left: 1px solid var(--components-border);
            z-index: 20;
          }
  
          .sheet-content.open {
            transform: translateX(0);
          }
  
          .sheet-header {
            position: relative;
            display: flex;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid var(--components-border);
          }
  
          .sheet-close {
            position: absolute;
            top: 16px;
            right: 16px;
            cursor: pointer;
            background: none;
            border: none;
            font-size: 20px;
            line-height: 1;
            color: var(--text-color, black);
          }
  
          .sheet-close:hover {
            opacity: 0.7;
          }
  
          .sheet-body {
            flex: 1;
            padding: 16px;
            overflow-y: auto;
          }
  
          .sheet-footer {
            padding: 16px;
            border-top: 1px solid var(--components-border);
          }
        </style>
  
        <div class="sheet-overlay"></div>
        <div class="sheet-container">
          <slot name="trigger" class="sheet-trigger"></slot>
          <div class="sheet-content">
            <div class="sheet-header">
              <slot name="header"></slot>
              <button class="sheet-close" aria-label="Close"><svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:var(--subtext-black);}</style></defs><title>Close</title><g id="times-square-Filled"><path id="times-square-Filled-2" data-name="times-square-Filled" class="cls-1" d="M15,2.5H9A6.513,6.513,0,0,0,2.5,9v6A6.513,6.513,0,0,0,9,21.5h6A6.513,6.513,0,0,0,21.5,15V9A6.513,6.513,0,0,0,15,2.5Zm.71,11.79a1.008,1.008,0,0,1,0,1.42,1.014,1.014,0,0,1-1.42,0L12,13.42,9.71,15.71a1.014,1.014,0,0,1-1.42,0,1.008,1.008,0,0,1,0-1.42L10.58,12,8.29,9.71A1,1,0,0,1,9.71,8.29L12,10.58l2.29-2.29a1,1,0,0,1,1.42,1.42L13.42,12Z"/></g></svg></button>
            </div>
            <div class="sheet-body">
              <slot name="body"></slot>
            </div>
            <div class="sheet-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('causs-sheet', Sheet);