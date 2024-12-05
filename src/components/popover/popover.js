class CaussPopover extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.isOpen = false;
  
      // Template HTML
      const template = `
        <style>
          :host {
            position: relative;
            display: inline-block;
          }
  
          .popover-trigger {
            cursor: pointer;
          }
  
          .popover-content {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            min-width: 200px;
            background: var(--popover-bg, white);
            color: var(--popover-color, black);
            border: 1px solid var(--popover-border, #ccc);
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            z-index: 10;
            display: none;
          }
  
          .popover-content.open {
            display: block;
          }
  
          .arrow {
            position: absolute;
            top: -6px;
            left: 50%;
            transform: translateX(-50%);
            width: 12px;
            height: 12px;
            background: inherit;
            clip-path: polygon(50% 0, 100% 100%, 0 100%);
          }
        </style>
        <div class="popover-trigger">
          <slot name="trigger">Click me</slot>
        </div>
        <div class="popover-content">
          <div class="arrow"></div>
          <slot name="content">Popover Content</slot>
        </div>
      `;
      this.shadowRoot.innerHTML = template;
    }
  
    connectedCallback() {
      this.trigger = this.shadowRoot.querySelector('.popover-trigger');
      this.content = this.shadowRoot.querySelector('.popover-content');
  
      // Add event listeners
      this.trigger.addEventListener('click', this.togglePopover.bind(this));
      document.addEventListener('click', this.handleOutsideClick.bind(this));
    }
  
    disconnectedCallback() {
      this.trigger.removeEventListener('click', this.togglePopover);
      document.removeEventListener('click', this.handleOutsideClick);
    }
  
    togglePopover(event) {
      event.stopPropagation();
      this.isOpen = !this.isOpen;
      this.content.classList.toggle('open', this.isOpen);
    }
  
    handleOutsideClick(event) {
      if (!this.contains(event.target)) {
        this.isOpen = false;
        this.content.classList.remove('open');
      }
    }
  }
  
  customElements.define('causs-popover', CaussPopover);
  