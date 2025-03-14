class Table extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this._sortColumn = null;
        this._sortDirection = 'asc';
        this._currentPage = 1;
        this._itemsPerPage = parseInt(this.getAttribute('items-per-page')) || 10;
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }

                .table-container {
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    overflow: hidden;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    background: var(--background);
                }

                thead {
                    background: var(--background);
                    position: sticky;
                    top: 0;
                    z-index: 1;
                }

                th {
                    padding: 12px 16px;
                    text-align: left;
                    font-weight: 500;
                    color: var(--text-black);
                    border-bottom: 1px solid var(--components-border);
                    cursor: pointer;
                    user-select: none;
                    white-space: nowrap;
                }

                th:hover {
                    background: var(--background-hover);
                }

                th .sort-icon {
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    margin-left: 4px;
                    opacity: 0.5;
                }

                th .sort-icon.active {
                    opacity: 1;
                }

                td {
                    padding: 12px 16px;
                    border-bottom: 1px solid var(--components-border);
                    color: var(--text-black);
                }

                tr:last-child td {
                    border-bottom: none;
                }

                tr:hover td {
                    background: var(--background-hover);
                }

                .pagination {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 16px;
                    background: var(--background);
                    border-top: 1px solid var(--components-border);
                }

                .pagination-info {
                    color: var(--subtext-black);
                    font-size: 0.875rem;
                }

                .pagination-controls {
                    display: flex;
                    gap: 8px;
                }

                .pagination-button {
                    padding: 6px 12px;
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    background: var(--background);
                    cursor: pointer;
                    color: var(--text-black);
                    transition: all 0.2s ease;
                }

                .pagination-button:hover:not(:disabled) {
                    background: var(--background-hover);
                }

                .pagination-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .empty-state {
                    padding: 32px;
                    text-align: center;
                    color: var(--subtext-black);
                }

                /* Responsive styles */
                @media (max-width: 768px) {
                    .table-container {
                        overflow-x: auto;
                    }
                }
            </style>

            <div class="table-container">
                <table>
                    <thead>
                        <tr></tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <div class="pagination">
                    <div class="pagination-info"></div>
                    <div class="pagination-controls">
                        <button class="pagination-button prev" disabled>Previous</button>
                        <button class="pagination-button next">Next</button>
                    </div>
                </div>
            </div>
        `;

        this._thead = this.shadowRoot.querySelector('thead tr');
        this._tbody = this.shadowRoot.querySelector('tbody');
        this._paginationInfo = this.shadowRoot.querySelector('.pagination-info');
        this._prevButton = this.shadowRoot.querySelector('.pagination-button.prev');
        this._nextButton = this.shadowRoot.querySelector('.pagination-button.next');
    }

    static get observedAttributes() {
        return ['columns', 'data', 'items-per-page'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === 'columns') {
                this.columns = JSON.parse(newValue);
                this.renderHeaders();
            } else if (name === 'data') {
                this.data = JSON.parse(newValue);
                this.renderData();
            } else if (name === 'items-per-page') {
                this._itemsPerPage = parseInt(newValue);
                this.renderData();
            }
        }
    }

    connectedCallback() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        this._prevButton.addEventListener('click', () => this.previousPage());
        this._nextButton.addEventListener('click', () => this.nextPage());
    }

    renderHeaders() {
        this._thead.innerHTML = this.columns.map(column => `
            <th data-field="${column.field}">
                ${column.label}
                <span class="sort-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg">
                        <defs><style>.cls-1{fill:var(--subtext-black);}</style></defs>
                        <title>chevron-down</title>
                        <g id="chevron-down-Filled">
                            <path id="chevron-down-Filled-2" data-name="chevron-down-Filled" class="cls-1" d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"/>
                        </g>
                    </svg>
                </span>
            </th>
        `).join('');

        this._thead.querySelectorAll('th').forEach(th => {
            th.addEventListener('click', () => this.sortByColumn(th.dataset.field));
        });
    }

    renderData() {
        if (!this.data || !this.data.length) {
            this._tbody.innerHTML = `
                <tr>
                    <td colspan="${this.columns.length}" class="empty-state">
                        No data available
                    </td>
                </tr>
            `;
            return;
        }

        let displayData = [...this.data];

        // Sort if needed
        if (this._sortColumn) {
            displayData.sort((a, b) => {
                const aVal = a[this._sortColumn];
                const bVal = b[this._sortColumn];
                const direction = this._sortDirection === 'asc' ? 1 : -1;
                
                if (typeof aVal === 'string') {
                    return aVal.localeCompare(bVal) * direction;
                }
                return (aVal - bVal) * direction;
            });
        }

        // Paginate
        const start = (this._currentPage - 1) * this._itemsPerPage;
        const paginatedData = displayData.slice(start, start + this._itemsPerPage);

        // Render rows
        this._tbody.innerHTML = paginatedData.map(row => `
            <tr>
                ${this.columns.map(column => `
                    <td>${this.formatCell(row[column.field], column)}</td>
                `).join('')}
            </tr>
        `).join('');

        // Update pagination
        this.updatePagination(displayData.length);
    }

    formatCell(value, column) {
        if (column.format) {
            return column.format(value);
        }
        return value;
    }

    sortByColumn(field) {
        if (this._sortColumn === field) {
            this._sortDirection = this._sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this._sortColumn = field;
            this._sortDirection = 'asc';
        }

        // Update sort icons - only toggle active state
        this._thead.querySelectorAll('.sort-icon').forEach(icon => {
            icon.classList.remove('active');
        });

        const currentIcon = this._thead.querySelector(`[data-field="${field}"] .sort-icon`);
        currentIcon.classList.add('active');

        this.renderData();
    }

    updatePagination(totalItems) {
        const totalPages = Math.ceil(totalItems / this._itemsPerPage);
        const start = (this._currentPage - 1) * this._itemsPerPage + 1;
        const end = Math.min(start + this._itemsPerPage - 1, totalItems);

        this._paginationInfo.textContent = `Showing ${start}-${end} of ${totalItems}`;
        this._prevButton.disabled = this._currentPage === 1;
        this._nextButton.disabled = this._currentPage === totalPages;
    }

    previousPage() {
        if (this._currentPage > 1) {
            this._currentPage--;
            this.renderData();
        }
    }

    nextPage() {
        const totalPages = Math.ceil(this.data.length / this._itemsPerPage);
        if (this._currentPage < totalPages) {
            this._currentPage++;
            this.renderData();
        }
    }
}

customElements.define('causs-table', Table); 