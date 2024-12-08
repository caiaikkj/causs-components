class Breadcrumb extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const breadcrumbHTML = `
      <style>
        :host {
          font-family: var(--font-family, Arial, sans-serif);
          display: block;
          width: 100%;
        }
      </style>
      <slot></slot>
    `;
    this.shadowRoot.innerHTML = breadcrumbHTML;
  }
}

class BreadcrumbList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const listHTML = `
      <style>
        .breadcrumb-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
        }
      </style>
      <ul class="breadcrumb-list">
        <slot></slot>
      </ul>
    `;
    this.shadowRoot.innerHTML = listHTML;
  }
}

class BreadcrumbItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const itemHTML = `
      <style>
        .breadcrumb-item {
          font-family: var(--font-family, Arial, sans-serif);
          font-size: 1rem;
          display: flex;
          align-items: center;
        }
      </style>
      <li class="breadcrumb-item">
        <slot></slot>
      </li>
    `;
    this.shadowRoot.innerHTML = itemHTML;
  }
}

class BreadcrumbLink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const linkHTML = `
      <style>
        .breadcrumb-link {
          font-family: var(--font-family, Arial, sans-serif);
          font-weight: 500;
          text-decoration: none;
          color: var(--subtext-black);
          transition: 300ms ease all;
        }
        .breadcrumb-link:hover {
          color: var(--primary);
        }
      </style>
      <a class="breadcrumb-link" href="${this.getAttribute('href')}">
        <slot></slot>
      </a>
    `;
    this.shadowRoot.innerHTML = linkHTML;
  }
}

class BreadcrumbSeparator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const separatorHTML = `
      <style>
        .breadcrumb-separator {
          user-select: none;
          font-size: 1rem;
          font-family: var(--font-family-variant, Arial, sans-serif);
          margin: 0 8px;
          color: var(--subtext-black);
        }
      </style>
      <span class="breadcrumb-separator">></span>
    `;
    this.shadowRoot.innerHTML = separatorHTML;
  }
}

class BreadcrumbPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const pageHTML = `
      <style>
        .breadcrumb-page {
          font-family: var(--font-family, Arial, sans-serif);
          font-weight: 500;
          color: var(--primary);
        }
      </style>
      <span class="breadcrumb-page">
        <slot></slot>
      </span>
    `;
    this.shadowRoot.innerHTML = pageHTML;
  }
}

// Define the custom elements
customElements.define('causs-breadcrumb', Breadcrumb);
customElements.define('causs-breadcrumb-list', BreadcrumbList);
customElements.define('causs-breadcrumb-item', BreadcrumbItem);
customElements.define('causs-breadcrumb-link', BreadcrumbLink);
customElements.define('causs-breadcrumb-separator', BreadcrumbSeparator);
customElements.define('causs-breadcrumb-page', BreadcrumbPage);
