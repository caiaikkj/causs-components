class Tabs extends HTMLElement {
    constructor() {
        super();
        
        // Create shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });
        
        // Container for tabs
        const tabsContainer = document.createElement('div');
        tabsContainer.classList.add('tabs-container');
        
        // Tab list (for navigation)
        const tabList = document.createElement('div');
        tabList.classList.add('tab-list');
        tabList.setAttribute('role', 'tablist');
        
        // Content container
        const tabContentContainer = document.createElement('div');
        tabContentContainer.classList.add('tab-content-container');
        
        // Styles
        const style = document.createElement('style');
        style.textContent = `
            .tabs-container {
                width: 100%;
            }
            
            .tab-list {
                display: flex;
                border-radius: var(--border-radius);
                background: var(--components-bg);
                gap: 1rem;
                margin-bottom: 1rem;
                padding: 4px;
            }
            
            .tab {
                cursor: pointer;
                padding: 0.5rem 1rem;
                border: none;
                background: transparent;
                font-family: var(--font-family);
                font-size: var(--font-size);
                color: var(--text-black);
                border-bottom: 2px solid transparent;
                transition: all 0.3s ease;
                border-radius: var(--border-radius);
            }
            
            .tab:hover {
                color: var(--primary);
            }
            
            .tab.active {
                color: var(--text-black);
                background: var(--background);
                border-radius: var(--border-radius);
            }
            
            .tab-panel {
                display: none;
            }
            
            .tab-panel.active {
                display: block;
            }
        `;
        
        // Append elements
        shadow.appendChild(style);
        shadow.appendChild(tabsContainer);
        tabsContainer.appendChild(tabList);
        tabsContainer.appendChild(tabContentContainer);
    }
    
    connectedCallback() {
        const tabList = this.shadowRoot.querySelector('.tab-list');
        const tabContentContainer = this.shadowRoot.querySelector('.tab-content-container');
        
        // Find all immediate tab children
        const tabs = Array.from(this.querySelectorAll(':scope > causs-tab'));
        
        tabs.forEach((tab, index) => {
            // Create tab button
            const tabButton = document.createElement('button');
            tabButton.classList.add('tab');
            tabButton.setAttribute('role', 'tab');
            tabButton.textContent = tab.getAttribute('label') || `Tab ${index + 1}`;
            tabButton.setAttribute('data-index', index);
            
            // First tab is active by default
            if (index === 0) {
                tabButton.classList.add('active');
                tab.classList.add('active');
            }
            
            // Tab click handler
            tabButton.addEventListener('click', () => {
                // Remove active state from all tabs and panels
                tabList.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tabContentContainer.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
                
                // Add active state to clicked tab and corresponding panel
                tabButton.classList.add('active');
                tab.classList.add('active');
            });
            
            // Wrap tab content in a panel
            tab.classList.add('tab-panel');
            tab.setAttribute('role', 'tabpanel');
            
            // Append to respective containers
            tabList.appendChild(tabButton);
            tabContentContainer.appendChild(tab);
        });
    }
}

// Tab sub-component
class Tab extends HTMLElement {
    constructor() {
        super();
    }
}

// Define custom elements
customElements.define('causs-tabs', Tabs);
customElements.define('causs-tab', Tab);