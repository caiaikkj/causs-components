class Avatar extends HTMLElement {
    constructor() {
      super();
  
      // Criar o Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Estrutura HTML do Avatar
      const avatarHTML = `
        <div class="avatar">
          <img class="avatar-img" src="" alt="Avatar" />
        </div>
      `;
  
      shadow.innerHTML = avatarHTML;
  
      // Adicionar estilos
      const style = document.createElement('style');
      style.textContent = `
        .avatar {
          width: var(--avatar-size, 48px);
          height: var(--avatar-size, 48px);
          display: inline-block;
          overflow: hidden;
          position: relative;
        }
  
        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
  
        .avatar.round .avatar-img {
          border-radius: 50%; /* Torna o avatar redondo */
        }
  
        .avatar.square .avatar-img {
          border-radius: 8px; /* Avatar quadrado com bordas levemente arredondadas */
        }
      `;
  
      shadow.appendChild(style);
    }
  
    connectedCallback() {
      const container = this.shadowRoot.querySelector('.avatar');
      const img = this.shadowRoot.querySelector('.avatar-img');
  
      // Definir a imagem
      const src = this.getAttribute('src');
      if (src) {
        img.setAttribute('src', src);
      }
  
      // Adicionar classe com base na variante
      const variant = this.getAttribute('variant') || 'round';
      container.classList.add(variant); // Define a classe `round` ou `square`
  
      // Definir o tamanho
      const size = this.getAttribute('size');
      if (size) {
        container.style.setProperty('--avatar-size', `${size}px`);
      }
    }
  }
  
  // Definir o elemento customizado
  customElements.define('causs-avatar', Avatar);
  