class Drawer extends HTMLElement {
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
      const trigger = this.shadowRoot.querySelector('.drawer-trigger');
      const close = this.shadowRoot.querySelector('.drawer-close');
      const content = this.shadowRoot.querySelector('.drawer-content');
      const overlay = this.shadowRoot.querySelector('.drawer-overlay');
  
      // Abre o Drawer
      trigger?.addEventListener('click', () => {
        this.isOpen = true;
        content.classList.add('open');
        overlay.classList.add('visible');
      });
  
      // Fecha o Drawer
      close?.addEventListener('click', () => {
        this.isOpen = false;
        content.classList.remove('open');
        overlay.classList.remove('visible');
      });
  
      // Fecha ao clicar no overlay
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
            --drawer-height: 70%;
          }
  
          .drawer-overlay {
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
  
          .drawer-overlay.visible {
            opacity: 1;
            visibility: visible;
          }
  
          .drawer-container {
            position: relative;
          }
  
          .drawer-trigger {
            cursor: pointer;
          }
  
          .drawer-content {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: var(--drawer-height);
            background-color: var(--background);
            transform: translateY(100%);
            transition: transform 0.3s ease-in-out;
            display: flex;
            flex-direction: column;
            border-top: 1px solid var(--components-border);
            border-left: 1px solid var(--components-border);
            border-right: 1px solid var(--components-border);
            z-index: 20;
            border-radius: 1rem 1rem 0 0;
          }
  
          .drawer-content.open {
            transform: translateY(0);
          }
  
          .drawer-header {
            position: relative;
            display: flex;
            align-items: center;
            padding: 16px;
          }
  
          .drawer-close {
            position: absolute;
            top: 16px;
            right: 16px;
            cursor: pointer;
            background: none;
            border: none;
            font-size: 20px;
            line-height: 1;
            color: var(--subtext-black);
          }
  
          .drawer-close:hover {
            opacity: 0.7;
          }
  
          .drawer-body {
            flex: 1;
            padding: 16px;
            overflow-y: auto;
          }
  
          .drawer-footer {
            padding: 16px;
          }
        </style>
  
        <div class="drawer-overlay"></div>
        <div class="drawer-container">
          <slot name="trigger" class="drawer-trigger"></slot>
          <div class="drawer-content">
            <div class="drawer-header">
              <slot name="header"></slot>
              <button class="drawer-close" aria-label="Close">✕</button>
            </div>
            <div class="drawer-body">
              <slot name="body"></slot>
            </div>
            <div class="drawer-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('causs-drawer', Drawer);
  