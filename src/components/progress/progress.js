class CaussProgress extends HTMLElement {
    constructor() {
        super();

        // Criação do Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Estrutura do HTML
        const progressHTML = `
            <div class="progress-container">
                <div class="progress-bar"></div>
            </div>
        `;
        shadow.innerHTML = progressHTML;

        // Estilos CSS
        const style = document.createElement('style');
        style.textContent = `
            .progress-container {
                width: 100%;
                min-width: 400px;
                height: 10px;
                background-color: #e0e0e0;
                border-radius: 10px;
                overflow: hidden;
                position: relative;
            }

            .progress-bar {
                width: 0%;
                height: 100%;
                border-radius: 10px;
                background-color: var(--primary);
                transition: width 0.5s ease;
            }
        `;
        shadow.appendChild(style);
    }

    // Define o valor de progresso
    set progress(value) {
        const progressBar = this.shadowRoot.querySelector('.progress-bar');
        const clampedValue = Math.min(Math.max(value, 0), 100);  // Garante que o valor fique entre 0 e 100
        progressBar.style.width = `${clampedValue}%`;
    }

    // Obter o valor de progresso
    get progress() {
        const progressBar = this.shadowRoot.querySelector('.progress-bar');
        return parseFloat(progressBar.style.width);
    }

    // A função connectedCallback é chamada quando o componente é adicionado ao DOM
    connectedCallback() {
        // Atribuindo o valor de progresso inicial a partir do atributo `value`
        const value = this.getAttribute('value') || 0;
        this.progress = value;
    }
}

// Define o componente como um custom element
customElements.define('causs-progress', CaussProgress);
