class InteractiveSidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isCollapsed = false;
        this.activeMenuItem = null;
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    addEventListeners() {
        const collapseToggle = this.shadowRoot.querySelector('.sidebar-collapse-toggle');
        const menuItems = this.shadowRoot.querySelectorAll('.sidebar-menu-item');

        // Toggle sidebar collapse
        collapseToggle?.addEventListener('click', () => {
            this.isCollapsed = !this.isCollapsed;
            this.updateSidebarState();
        });

        // Handle menu item clicks
        menuItems.forEach((item) => {
            const button = item.querySelector('.sidebar-menu-button');
            button?.addEventListener('click', () => {
                this.setActiveMenuItem(item);
            });
        });
    }

    setActiveMenuItem(item) {
        // Deactivate the previous active item
        if (this.activeMenuItem) {
            this.activeMenuItem.querySelector('.sidebar-menu-button').classList.remove('active');
        }

        // Activate the new item
        this.activeMenuItem = item;
        this.activeMenuItem.querySelector('.sidebar-menu-button').classList.add('active');
    }

    updateSidebarState() {
        const sidebar = this.shadowRoot.querySelector('.sidebar');
        const sidebarContent = this.shadowRoot.querySelector('.sidebar-content');
        const mainContent = this.shadowRoot.querySelector('.main-content');
        const sidebarHeader = this.shadowRoot.querySelector('.sidebar-header');
    
        if (this.isCollapsed) {
            sidebar.classList.add('collapsed');
            sidebarContent.classList.add('hidden');
            sidebarHeader.querySelector('slot[name="header"]').style.display = 'none';
            mainContent.style.marginLeft = 'var(--sidebar-collapsed-width)';
        } else {
            sidebar.classList.remove('collapsed');
            sidebarContent.classList.remove('hidden');
            sidebarHeader.querySelector('slot[name="header"]').style.display = '';
            mainContent.style.marginLeft = 'var(--sidebar-width)';
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --sidebar-width: 250px;
                    --sidebar-collapsed-width: 64px;
                    --sidebar-background: #0f0f11;
                    --sidebar-border-color: #1d1d20;
                    --sidebar-text-color: #e5e5e5;
                    --sidebar-hover-background: #1d1d20;
                    --sidebar-active-background: #2a2a2e;
                }

                .container {
                    display: flex;
                    height: 100vh;
                }

                .sidebar {
                    width: var(--sidebar-width);
                    height: 100%;
                    background-color: var(--foreground);
                    border-right: 1px solid var(--components-border);
                    display: flex;
                    flex-direction: column;
                    transition: width 0.3s ease;
                    overflow-x: hidden;
                }

                .sidebar.collapsed {
                    width: var(--sidebar-collapsed-width);
                }

                .main-content {
                    flex-grow: 1;
                    margin-left: var(--sidebar-width);
                    padding: 20px;
                    transition: margin-left 0.3s ease;
                }

                .sidebar-header {
                    padding: 16px;
                    border-bottom: 1px solid var(--components-border);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .sidebar-collapse-toggle {
                    cursor: pointer;
                    background: none;
                    width: 32px; /* Largura e altura iguais */
                    height: 32px;
                    border: 1px solid var(--components-border); /* Adicione borda para definição */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px; /* Pode ajustar para deixar levemente arredondado */
                    color: var(--subtext-black);
                    transition: background-color 0.2s ease;
                }

                .sidebar-collapse-toggle svg {
                    width: 16px;
                    height: 16px;
                }

                .sidebar-collapse-toggle:hover {
                    color: var(--subtext-black);
                }

                .sidebar-content {
                    flex-grow: 1;
                    overflow-y: auto;
                    padding: 16px 0;
                }

                .sidebar-content.hidden {
                    display: none;
                }

                .sidebar-group {
                    margin-bottom: 16px;
                }

                .sidebar-group-label {
                    padding: 8px 16px;
                    font-weight: 600;
                    color: var(--text-black);
                    opacity: 0.7;
                }

                .sidebar-menu-item {
                    padding: 8px 16px;
                }

                .sidebar-menu-button {
                    text-decoration: none;
                    color: var(--text-black);
                    display: block;
                    width: 100%;
                    padding: 8px;
                    border-radius: 4px;
                    transition: background-color 0.2s, color 0.2s;
                }

                .sidebar-menu-button:hover {
                    background-color: var(--background-hover);
                }

                .sidebar-menu-button.active {
                    font-weight: bold;
                    background-color: var(--primary);
                    color: var(--text-black);
                }

                .sidebar-footer {
                    border-top: 1px solid var(--components-border);
                    padding: 16px;
                    color: var(--subtext-black);
                    opacity: 0.7;
                }
            </style>

            <div class="container">
                <div class="sidebar">
                    <div class="sidebar-header">
                        <slot name="header"></slot>
                        <causs-button variant='ghost' class="sidebar-collapse-toggle" aria-label="Toggle Sidebar">
                            <svg fill="var(--text-black)" width="16px" height="16px" viewBox="0 0 24 24" id="menu" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path id="primary" d="M3,12H21M9,18H21M3,6H15" style="fill: none; stroke: var(--text-black); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>
                        </causs-button>
                    </div>
                    <div class="sidebar-content">
                        <slot name="content"></slot>
                    </div>
                    <div class="sidebar-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
                <div class="main-content">
                    <slot name="main-content"></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('causs-interactive-sidebar', InteractiveSidebar);