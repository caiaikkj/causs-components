class ThemeToggle extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.addEventListeners();
      this.setInitialIcon(); // Define o ícone inicial com base no tema atual
    }
  
    addEventListeners() {
      const button = this.shadowRoot.querySelector('.theme-toggle');
  
      button.addEventListener('click', () => {
        const html = document.documentElement;
  
        if (html.classList.contains('dark')) {
          html.classList.remove('dark');
          button.innerHTML = `
            <svg class="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          `;
        } else {
          html.classList.add('dark');
          button.innerHTML = `
            <svg class="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          `;
        }
      });
    }
  
    setInitialIcon() {
      const button = this.shadowRoot.querySelector('.theme-toggle');
      const html = document.documentElement;
  
      if (html.classList.contains('dark')) {
        button.innerHTML = `
          <svg class="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `;
      } else {
        button.innerHTML = `
          <svg class="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;
      }
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .theme-toggle {
            cursor: pointer;
            font-size: var(--font-size);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--border-radius, 4px);
            background-color: var(--primary);
            color: var(--text-white);
            transition: background-color 0.3s ease;
          }
  
          .theme-toggle:hover {
            background-color: var(--primary-hover);
          }
  
          .theme-toggle {
            width: 36px;
            height: 36px;
          }
  
          .theme-toggle svg {
            width: 16px;
            height: 16px;
          }
        </style>
        <button class="theme-toggle"></button>
      `;
    }
  }
  
  customElements.define('causs-theme', ThemeToggle);
  