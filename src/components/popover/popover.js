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
          user-select: none;
        }

        .popover-content {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(-20px);
          min-width: 200px;
          background: var(--background, white);
          color: var(--text-black, black);
          border: 1px solid var(--components-border, #e0e0e0);
          border-radius: var(--border-radius, 8px);
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          transition: 
            transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
            opacity 0.3s ease,
            visibility 0.3s;
          visibility: hidden;
        }

        .popover-content.open {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        }

        .arrow {
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          background: inherit;
          border-top: 1px solid var(--components-border, #e0e0e0);
          border-left: 1px solid var(--components-border, #e0e0e0);
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
          transition: 
            transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
            opacity 0.3s ease;
          opacity: 0;
        }

        .popover-content.open .arrow {
          transform: translateX(-50%) rotate(180deg);
          opacity: 1;
        }

        /* Subtle scale and fade animation */
        @keyframes popoverEntrance {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }

        .popover-content.open {
          animation: popoverEntrance 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
      </style>
      <div class="popover-trigger">
        <slot name="trigger">Click me</slot>
      </div>
      <div class="popover-content">
        <slot name="content">Popover Content</slot>
      </div>
    `;
    this.shadowRoot.innerHTML = template;
  }

  connectedCallback() {
    this.trigger = this.shadowRoot.querySelector('.popover-trigger');
    this.content = this.shadowRoot.querySelector('.popover-content');
    this.arrow = this.shadowRoot.querySelector('.arrow');

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