class Timeline extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    padding: 16px;
                }

                .timeline {
                    position: relative;
                    padding-left: 32px;
                }

                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 7px;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: var(--components-border);
                }

                .timeline-item {
                    position: relative;
                    margin-bottom: 24px;
                }

                .timeline-item:last-child {
                    margin-bottom: 0;
                }

                .timeline-dot {
                    position: absolute;
                    left: -32px;
                    width: 16px;
                    height: 16px;
                    background: var(--background);
                    border: 2px solid var(--components-border);
                    border-radius: 50%;
                    z-index: 1;
                }

                .timeline-item.active .timeline-dot {
                    background: var(--primary);
                    border-color: var(--primary);
                }

                .timeline-item.completed .timeline-dot {
                    background: var(--success, #10B981);
                    border-color: var(--success, #10B981);
                }

                .timeline-content {
                    background: var(--background);
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    padding: 16px;
                }

                .timeline-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 8px;
                }

                .timeline-title {
                    font-weight: 500;
                    color: var(--text-black);
                }

                .timeline-date {
                    font-size: 0.875rem;
                    color: var(--subtext-black);
                }

                .timeline-body {
                    color: var(--text-black);
                    font-size: 0.875rem;
                }

                /* Optional: Hover effect */
                .timeline-content:hover {
                    background: var(--background-hover);
                }
            </style>

            <div class="timeline">
                <slot></slot>
            </div>
        `;
    }

    static get observedAttributes() {
        return ['items'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'items' && oldValue !== newValue) {
            this.renderItems(JSON.parse(newValue));
        }
    }

    renderItems(items) {
        const timeline = this.shadowRoot.querySelector('.timeline');
        timeline.innerHTML = items.map((item, index) => `
            <div class="timeline-item ${item.status || ''}">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <div class="timeline-title">${item.title}</div>
                        ${item.date ? `<div class="timeline-date">${item.date}</div>` : ''}
                    </div>
                    <div class="timeline-body">
                        ${item.content}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

customElements.define('causs-timeline', Timeline); 