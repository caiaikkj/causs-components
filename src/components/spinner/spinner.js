class CaussSpinner extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      // Template do spinner
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
            width: var(--spinner-size, 40px);
            height: var(--spinner-size, 40px);
          }
  
          .spinner {
            width: 100%;
            height: 100%;
            border: var(--spinner-thickness, 4px) solid var(--components-bg);
            border-top: var(--spinner-thickness, 4px) solid var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
  
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        </style>
        <div class="spinner"></div>
      `;
    }
  }
  
  customElements.define('causs-spinner', CaussSpinner);
  