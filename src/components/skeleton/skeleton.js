class Skeleton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const classes = this.getAttribute('class') || '';
      const animation = this.hasAttribute('shimmer') ? 'shimmer' : '';
      const width = this.getAttribute('width') || '100%';
      const height = this.getAttribute('height') || '100%';
      const borderRadius = this.getAttribute('border-radius') || '4px'; // Default rounded corners
      const isCircle = this.getAttribute('circle') !== null; // If circle shape is required
  
      const skeletonHTML = `
        <style>
          :host {
            display: block;
          }
  
          .skeleton {
            background-color: #e0e0e0;
            border-radius: ${borderRadius};
            width: ${width};
            height: ${height};
            display: inline-block;
            position: relative;
            overflow: hidden;
            ${isCircle ? 'border-radius: 50%;' : ''}
          }
  
          /* Shimmer Effect */
          .skeleton.shimmer::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            height: 100%;
            width: 100%;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            animation: shimmer 1.5s infinite;
          }
  
          /* Animating the shimmer effect */
          @keyframes shimmer {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }
  
          /* Extra Styles for Width and Height customization */
          .skeleton.h-4 {
            height: 1rem;
          }
  
          .skeleton.h-8 {
            height: 2rem;
          }
  
          .skeleton.h-12 {
            height: 3rem;
          }
  
          .skeleton.w-4 {
            width: 1rem;
          }
  
          .skeleton.w-8 {
            width: 2rem;
          }
  
          .skeleton.w-12 {
            width: 3rem;
          }
  
          .skeleton.w-[250px] {
            width: 250px;
          }
  
          .skeleton.w-full {
            width: 100%;
          }
  
          .skeleton.rounded-xl {
            border-radius: 1rem;
          }
  
          .skeleton.rounded-full {
            border-radius: 50%;
          }
        </style>
  
        <div class="skeleton ${animation} ${classes}"></div>
      `;
  
      this.shadowRoot.innerHTML = skeletonHTML;
    }
  }
  
  customElements.define('causs-skeleton', Skeleton);
  