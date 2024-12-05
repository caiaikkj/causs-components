class Badge extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const variant = this.getAttribute('variant') || 'primary'; // Padrão é "primary"
      const label = this.textContent.trim() || 'Badge'; // Texto dentro do componente
  
      let badgeHTML = `
        <style>
          .badge {
            padding: 6px 12px;
            border-radius: 12px;
            font-size: 0.675rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
  
          .badge.primary {
            background-color: var(--primary);
            color: white;
          }
  
          .badge.secondary {
            background-color: var(--secondary);
            color: var(--primary);
          }
  
          .badge.destructive {
            background-color: var(--red);
            color: white;
          }
  
          .badge.outline {
            background-color: transparent;
            border: 1px solid #ccc;
            color: var(--primary);
          }
        </style>
  
        <span class="badge ${variant}">
          ${label}
        </span>
      `;
  
      this.shadowRoot.innerHTML = badgeHTML;
    }
  }
  
  customElements.define('causs-badge', Badge);
  