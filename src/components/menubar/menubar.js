class Menubar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      const triggers = this.shadowRoot.querySelectorAll('.menu-trigger');
  
      triggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          const submenu = trigger.nextElementSibling;
          const isOpen = submenu.classList.contains('open');
          
          // Close all submenus
          this.shadowRoot.querySelectorAll('.submenu').forEach(sub => {
            sub.classList.remove('open');
          });
  
          // Open clicked submenu if it wasn't already open
          if (!isOpen) {
            submenu.classList.add('open');
          }
        });
      });
  
      // Close submenus when clicking outside
      document.addEventListener('click', () => {
        this.shadowRoot.querySelectorAll('.submenu').forEach(sub => {
          sub.classList.remove('open');
        });
      });
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .menu {
            display: inline-flex;
            background: var(--background);
            border: 1px solid var(--components-border);
            border-radius: var(--border-radius);
            padding: 8px;
            gap: 8px;
            align-items: center;
          }
  
          .menu-item {
            position: relative;
          }
  
          .menu-trigger {
            color: var(--text-black);
            cursor: pointer;
            background: transparent;
            border: none;
            border-radius: var(--border-radius);
            padding: 8px 12px;
            font-size: 14px;
            white-space: nowrap;
          }
  
          .menu-trigger:hover {
            background: var(--background-hover);
          }
  
          .submenu {
            overflow: hidden;
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: var(--background);
            border: 1px solid var(--components-border);
            border-radius: var(--border-radius);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            min-width: 150px;
            z-index: 10;
            padding: 8px;
          }
  
          .submenu.open {
            display: block;
          }
  
          .submenu-item {
            border-radius: var(--border-radius);
            padding: 8px 12px;
            cursor: pointer;
            font-size: 14px;
            white-space: nowrap;
          }
  
          .submenu-item:hover {
            background: var(--background-hover);
          }
        </style>
        <div class="menu">
          <div class="menu-item">
            <button class="menu-trigger">File</button>
            <div class="submenu">
              <div class="submenu-item">New File</div>
              <div class="submenu-item">Open File</div>
              <div class="submenu-item">Save</div>
            </div>
          </div>
          <div class="menu-item">
            <button class="menu-trigger">Edit</button>
            <div class="submenu">
              <div class="submenu-item">Undo</div>
              <div class="submenu-item">Redo</div>
            </div>
          </div>
          <div class="menu-item">
            <button class="menu-trigger">View</button>
            <div class="submenu">
              <div class="submenu-item">Zoom In</div>
              <div class="submenu-item">Zoom Out</div>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('causs-menubar', Menubar);