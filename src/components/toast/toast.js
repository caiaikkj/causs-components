class Toast extends HTMLElement {
  constructor() {
      super();
      
      // Create Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
      
      // Create toast container
      const toastContainer = document.createElement('div');
      toastContainer.classList.add('toast-container');
      
      // Create toast element
      const toast = document.createElement('div');
      toast.classList.add('toast');
      
      // Create toast content areas
      const header = document.createElement('div');
      header.classList.add('toast-header');
      
      const title = document.createElement('div');
      title.classList.add('toast-title');
      
      const description = document.createElement('div');
      description.classList.add('toast-description');
      
      const closeButton = document.createElement('button');
      closeButton.classList.add('toast-close');
      closeButton.innerHTML = '×';
      
      header.appendChild(title);
      header.appendChild(closeButton);
      
      toast.appendChild(header);
      toast.appendChild(description);
      toastContainer.appendChild(toast);
      shadow.appendChild(toastContainer);
      
      // Styles
      const style = document.createElement('style');
      style.textContent = `
          .toast-container {
              position: fixed;
              z-index: 1000;
              display: none;
          }
          
          /* Positioning classes */
          .toast-container.top-left {
              top: 1rem;
              left: 1rem;
          }
          
          .toast-container.top-right {
              top: 1rem;
              right: 1rem;
          }
          
          .toast-container.top-center {
              top: 1rem;
              left: 50%;
              transform: translateX(-50%);
          }
          
          .toast-container.bottom-left {
              bottom: 1rem;
              left: 1rem;
          }
          
          .toast-container.bottom-right {
              bottom: 1rem;
              right: 1rem;
          }
          
          .toast-container.bottom-center {
              bottom: 1rem;
              left: 50%;
              transform: translateX(-50%);
          }
          
          .toast {
              background: var(--background);
              border: 1px solid var(--components-border);
              border-radius: var(--border-radius);
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
              padding: 1rem;
              min-width: 300px;
              max-width: 400px;
          }
          
          .toast-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 0.5rem;
          }
          
          .toast-title {
              font-weight: 600;
              color: var(--text-black);
          }
          
          .toast-description {
              color: var(--subtext-black);
              font-size: 0.875rem;
          }
          
          .toast-close {
              background: none;
              border: none;
              color: var(--primary);
              font-size: 1.5rem;
              cursor: pointer;
              padding: 0;
              line-height: 1;
          }
          
          .toast-close:hover {
              color: var(--primary-hover);
          }
          
          .toast.success {
              border-left: 4px solid var(--success);
          }
          
          .toast.error {
              border-left: 4px solid var(--danger);
          }
          
          .toast.warning {
              border-left: 4px solid var(--warning);
          }
          
          .toast.info {
              border-left: 4px solid var(--primary);
          }
          
          .toast.show {
              display: block;
              animation: slideIn 0.3s ease-out;
          }
          
          @keyframes slideIn {
              from {
                  opacity: 0;
                  transform: translateX(100%);
              }
              to {
                  opacity: 1;
                  transform: translateX(0);
              }
          }
      `;
      
      shadow.appendChild(style);
      
      // Close button functionality
      closeButton.addEventListener('click', () => this.hide());
  }
  
  connectedCallback() {
      const toast = this.shadowRoot.querySelector('.toast');
      const toastContainer = this.shadowRoot.querySelector('.toast-container');
      const title = this.shadowRoot.querySelector('.toast-title');
      const description = this.shadowRoot.querySelector('.toast-description');
      
      // Set variant (success, error, warning, info)
      const variant = this.getAttribute('variant') || 'info';
      toast.classList.add(variant);
      
      // Set position
      const position = this.getAttribute('position') || 'top-right';
      toastContainer.classList.add(position);
      
      // Set title and description
      title.textContent = this.getAttribute('title') || 'Notification';
      description.textContent = this.getAttribute('description') || '';
      
      // Auto-hide functionality
      const duration = parseInt(this.getAttribute('duration') || 3000);
      if (duration > 0) {
          this.autoHideTimer = setTimeout(() => this.hide(), duration);
      }
  }
  
  disconnectedCallback() {
      // Clear auto-hide timer to prevent memory leaks
      if (this.autoHideTimer) {
          clearTimeout(this.autoHideTimer);
      }
  }
  
  show() {
      const toastContainer = this.shadowRoot.querySelector('.toast-container');
      const toast = this.shadowRoot.querySelector('.toast');
      
      toastContainer.style.display = 'block';
      toast.classList.add('show');
  }
  
  hide() {
      const toastContainer = this.shadowRoot.querySelector('.toast-container');
      const toast = this.shadowRoot.querySelector('.toast');
      
      toast.classList.remove('show');
      toastContainer.style.display = 'none';
  }
}

// Define the custom element
customElements.define('causs-toast', Toast);

// Expose createToast globally
window.createToast = function(options) {
  const toast = document.createElement('causs-toast');
  
  if (options.title) toast.setAttribute('title', options.title);
  if (options.description) toast.setAttribute('description', options.description);
  if (options.variant) toast.setAttribute('variant', options.variant);
  if (options.duration) toast.setAttribute('duration', options.duration);
  if (options.position) toast.setAttribute('position', options.position);
  
  document.body.appendChild(toast);
  toast.show();
  
  return toast;
};