class InputOTP extends HTMLElement {
    constructor() {
        super();

        // Cria o Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Criação do HTML
        const inputHTML = `
            <div class="otp-container">
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
            </div>
        `;
        shadow.innerHTML = inputHTML;

        // Adiciona o estilo
        const style = document.createElement('style');
        style.textContent = `
            .otp-container {
                display: flex;
                justify-content: space-between;
                gap: 10px;
            }

            .otp-input {
                width: 40px;
                height: 40px;
                text-align: center;
                background: transparent;
                font-size: 1.5rem;
                border: 1px solid var(--components-border);
                transition: border-color 0.3s ease;
                color: var(--black);
            }

            .otp-input:first-child {
                border-radius: 12px 0 0 12px;
            }

            .otp-input:last-child {
                border-radius: 0 12px 12px 0;
            }

            .otp-input:focus {
                border-color: var(--primary);
                outline: none;
            }
        `;
        shadow.appendChild(style);

        // Função para garantir que o foco passe automaticamente
        this.autoFocus();
    }

    connectedCallback() {
        const inputs = this.shadowRoot.querySelectorAll('.otp-input');
        
        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                // Quando um dígito for digitado, vai para o próximo campo
                if (e.target.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }

                // Quando o campo for apagado, volta para o campo anterior
                if (e.target.value.length === 0 && index > 0) {
                    inputs[index - 1].focus();
                }

                // Emite um evento customizado com o valor do OTP
                this.emitOTPValue();
            });
        });
    }

    // Função para emitir o valor do OTP como um evento customizado
    emitOTPValue() {
        const otpValue = Array.from(this.shadowRoot.querySelectorAll('.otp-input'))
            .map(input => input.value)
            .join('');

        const event = new CustomEvent('otp-change', {
            detail: otpValue,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    // Função que garante que o foco é ajustado conforme o valor do OTP
    autoFocus() {
        const inputs = this.shadowRoot.querySelectorAll('.otp-input');
        inputs[0].focus();
    }
}

// Define o componente como um custom element
customElements.define('causs-otp', InputOTP);
