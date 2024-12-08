class Pagination extends HTMLElement {
    constructor() {
      super();
  
      // Criar o Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Estrutura HTML
      const paginationHTML = `
        <div class="pagination">
          <button class="btn prev" disabled><svg width="14px" height="14px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:var(--subtext-black);}</style></defs><title>chevron-left</title><g id="chevron-left-Filled"><path id="chevron-left-Filled-2" data-name="chevron-left-Filled" class="cls-1" d="M16.707,20.293a1,1,0,1,1-1.414,1.414l-9-9a1,1,0,0,1,0-1.414l9-9a1,1,0,1,1,1.414,1.414L8.414,12Z"/></g></svg> Previous</button>
          <div class="pages"></div>
          <button class="btn next">Next <svg width="14px" height="14px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:var(--subtext-black);}</style></defs><title>chevron-right</title><g id="chevron-right-Filled"><path id="chevron-right-Filled-2" data-name="chevron-right-Filled" class="cls-1" d="M17.707,12.707l-9,9a1,1,0,1,1-1.414-1.414L15.586,12,7.293,3.707A1,1,0,1,1,8.707,2.293l9,9A1,1,0,0,1,17.707,12.707Z"/></g></svg></button>
        </div>
      `;
      shadow.innerHTML = paginationHTML;
  
      // Adicionar estilos
      const style = document.createElement('style');
      style.textContent = `
        .pagination {
          display: flex;
          align-items: center;
          gap: 8px;
        }
  
        .btn {
            display: flex;
            align-items: center;
            gap: 8px;
          background-color: var(--background);
          color: var(--text-black);
          border: none;
          border-radius: var(--border-radius);
          padding: 8px 12px;
          cursor: pointer;
          font-family: var(--font-family);
          font-size: 14px;
          transition: background-color 0.3s ease;
        }
  
        .btn:disabled {
          background-color: var(--components-disabled));
          cursor: not-allowed;
        }
  
        .btn:hover:not(:disabled) {
          background-color: var(--foreground);
        }
  
        .pages {
          display: flex;
          gap: 4px;
        }
  
        .page-number {
            text-align: center;
          display: inline-block;
          padding: 6px 10px;
          border-radius: var(--border-radius);
          background-color: var(--background);
          cursor: pointer;
          width: 18px; /* Define a largura fixa */
          aspect-ratio: 1; /* Garante proporção 1:1 */
          transition: background-color 0.3s ease;
        }
  
        .page-number.active {
          border: 1px solid var(--components-border);
        }
  
        .page-number:hover {
          background-color: var(--foreground);
        }
      `;
      shadow.appendChild(style);
    }
  
    connectedCallback() {
      this.currentPage = Number(this.getAttribute('current')) || 1;
      this.totalPages = Number(this.getAttribute('total')) || 1;
  
      this.updatePagination();
  
      // Adiciona os eventos aos botões
      this.shadowRoot.querySelector('.prev').addEventListener('click', () => this.changePage(this.currentPage - 1));
      this.shadowRoot.querySelector('.next').addEventListener('click', () => this.changePage(this.currentPage + 1));
    }
  
    updatePagination() {
      const pagesContainer = this.shadowRoot.querySelector('.pages');
      const prevButton = this.shadowRoot.querySelector('.prev');
      const nextButton = this.shadowRoot.querySelector('.next');
  
      // Limpar páginas anteriores
      pagesContainer.innerHTML = '';
  
      // Gerar números de página
      for (let i = 1; i <= this.totalPages; i++) {
        const pageNumber = document.createElement('div');
        pageNumber.classList.add('page-number');
        if (i === this.currentPage) pageNumber.classList.add('active');
        pageNumber.textContent = i;
        pageNumber.addEventListener('click', () => this.changePage(i));
        pagesContainer.appendChild(pageNumber);
      }
  
      // Ativar/desativar botões
      prevButton.disabled = this.currentPage === 1;
      nextButton.disabled = this.currentPage === this.totalPages;
    }
  
    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
  
      this.currentPage = page;
      this.updatePagination();
  
      // Emitir evento customizado
      this.dispatchEvent(new CustomEvent('page-change', { detail: { page } }));
    }
  
    static get observedAttributes() {
      return ['current', 'total'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'current') this.currentPage = Number(newValue);
      if (name === 'total') this.totalPages = Number(newValue);
  
      this.updatePagination();
    }
  }
  
  customElements.define('causs-pagination', Pagination);
  