class CaussSlider extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      // Valores padrão do slider
      this._min = 0;
      this._max = 100;
      this._step = 1;
      this._value = 50;
  
      // Template HTML
      const template = `
        <style>
          :host {
            display: inline-block;
            width: 100%;
            max-width: 400px;
          }
  
          .slider-container {
            position: relative;
            width: 100%;
            height: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
  
          .slider {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 8px;
            background: linear-gradient(to right, var(--primary) 50%, var(--components-bg) 50%);
            border-radius: var(--border-radius);
            outline: none;
            transition: background-color 0.2s ease;
          }
  
          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid var(--components-border);
            background: var(--secondary);
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
  
          .slider::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--secondary);
            cursor: pointer;
          }
  
          .slider-value {
            margin-top: 8px;
            font-size: 14px;
            color: var(--text-black);
          }
        </style>
  
        <div class="slider-container">
          <input type="range" class="slider" />
          <div class="slider-value">
            <span id="value-display">${this._value}</span>
          </div>
        </div>
      `;
      this.shadowRoot.innerHTML = template;
    }
  
    static get observedAttributes() {
      return ['min', 'max', 'value', 'step'];
    }
  
    connectedCallback() {
      this.slider = this.shadowRoot.querySelector('.slider');
      this.valueDisplay = this.shadowRoot.querySelector('#value-display');
  
      this.slider.min = this._min;
      this.slider.max = this._max;
      this.slider.step = this._step;
      this.slider.value = this._value;
  
      this.updateSliderBackground(); // Inicializa o background do slider
      this.slider.addEventListener('input', this.updateValue.bind(this));
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        if (name === 'min') {
          this._min = newValue;
          this.slider.min = this._min;
        }
        if (name === 'max') {
          this._max = newValue;
          this.slider.max = this._max;
        }
        if (name === 'value') {
          this._value = newValue;
          this.slider.value = this._value;
          this.valueDisplay.textContent = this._value;
          this.updateSliderBackground();
        }
        if (name === 'step') {
          this._step = newValue;
          this.slider.step = this._step;
        }
      }
    }
  
    updateValue() {
      this._value = this.slider.value;
      this.valueDisplay.textContent = this._value;
      this.updateSliderBackground();
    }
  
    updateSliderBackground() {
      const percentage = ((this._value - this._min) / (this._max - this._min)) * 100;
      this.slider.style.background = `linear-gradient(to right, var(--primary) ${percentage}%, var(--components-bg) ${percentage}%)`;
    }
  
    // Propriedades personalizáveis
    get value() {
      return this._value;
    }
  
    set value(val) {
      this._value = val;
      this.slider.value = val;
      this.valueDisplay.textContent = val;
      this.updateSliderBackground();
    }
  
    get min() {
      return this._min;
    }
  
    set min(val) {
      this._min = val;
      this.slider.min = val;
      this.updateSliderBackground();
    }
  
    get max() {
      return this._max;
    }
  
    set max(val) {
      this._max = val;
      this.slider.max = val;
      this.updateSliderBackground();
    }
  
    get step() {
      return this._step;
    }
  
    set step(val) {
      this._step = val;
      this.slider.step = val;
    }
  }
  
  customElements.define('causs-slider', CaussSlider);
  