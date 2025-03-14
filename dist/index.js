(()=>{var l=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
        <button class="btn">
          <slot></slot>
        </button>
      `;e.innerHTML=t;let o=document.createElement("style");o.textContent=`
        .btn {
          background-color: var(--primary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-family);
          color: var(--text-white);
          padding: 10px 1rem;
          border: none;
          border-radius: var(--border-radius);
          font-size: var(--font-size);
        }
  
        .btn:hover {
          background-color: var(--primary-hover);
        }
  
        /* Variantes */
        .btn.secondary {
          background-color: var(--secondary);
          color: var(--text-black);
        }
  
        .btn.secondary:hover {
          background-color: var(--secondary-hover);
        }
  
        .btn.destructive {
          background-color: var(--red);
          color: var(--text-white);
        }
  
        .btn.destructive:hover {
          background-color: var(--danger-hover);
        }
  
        .btn.outline {
          background-color: transparent;
          border: 1px solid var(--components-border);
          color: var(--text-black);
        }
  
        .btn.outline:hover {
          background-color: var(--background-hover);
        }
  
        .btn.ghost {
          background-color: transparent;
          color: var(--text-black);
        }
  
        .btn.ghost:hover {
          background-color: var(--background-hover);
        }
  
        .btn:disabled {
          background-color: var(--components-disabled);
          color: var(--text-black);
          cursor: not-allowed;
        }
        
        .btn.full-width {
          display: block; /* Garante que o bot\xE3o seja tratado como bloco */
          width: 100%;    /* Ocupa toda a largura do container */
        }
      `,e.appendChild(o)}connectedCallback(){let e=this.shadowRoot.querySelector(".btn"),t=this.getAttribute("variant");t&&e.classList.add(t),this.hasAttribute("disabled")&&e.setAttribute("disabled","true"),this.hasAttribute("full-width")&&e.classList.add("full-width")}};customElements.define("causs-button",l);var c=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
        <div class="card">
          <div class="card-header">
            <slot name="header"></slot>
          </div>
          <div class="card-content">
            <slot name="content"></slot>
          </div>
          <div class="card-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      `;e.innerHTML=t;let o=document.createElement("style");o.textContent=`
        .card {
            font-family: var(--font-family);
            width: fit-content;
            max-width: 400px;
            background: var(--foreground);
            border: 1px solid var(--components-border);
            border-radius: var(--border-radius);
            box-shadow: 0 2px 0 var(--shadow-color);
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .card-header {
          font-size: 1.25rem;
          font-weight: bold;
          color: var(--text-black);
        }
  
        .card-content {
          font-size: 1rem;
          color: var(--subtext-black);
        }
  
        .card-footer {
            text-align: right;
        }
      `,e.appendChild(o)}};customElements.define("causs-card",c);var h=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
        <div class="avatar">
          <img class="avatar-img" src="" alt="Avatar" />
        </div>
      `;e.innerHTML=t;let o=document.createElement("style");o.textContent=`
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
      `,e.appendChild(o)}connectedCallback(){let e=this.shadowRoot.querySelector(".avatar"),t=this.shadowRoot.querySelector(".avatar-img"),o=this.getAttribute("src");o&&t.setAttribute("src",o);let s=this.getAttribute("variant")||"round";e.classList.add(s);let i=this.getAttribute("size");i&&e.style.setProperty("--avatar-size",`${i}px`)}};customElements.define("causs-avatar",h);var p=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=`
      <style>
        :host {
          font-family: var(--font-family, Arial, sans-serif);
          display: block;
          width: 100%;
        }
      </style>
      <slot></slot>
    `;this.shadowRoot.innerHTML=e}},u=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=`
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
    `;this.shadowRoot.innerHTML=e}},b=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=`
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
    `;this.shadowRoot.innerHTML=e}},v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=`
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
      <a class="breadcrumb-link" href="${this.getAttribute("href")}">
        <slot></slot>
      </a>
    `;this.shadowRoot.innerHTML=e}},m=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=`
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
    `;this.shadowRoot.innerHTML=e}},g=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=`
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
    `;this.shadowRoot.innerHTML=e}};customElements.define("causs-breadcrumb",p);customElements.define("causs-breadcrumb-list",u);customElements.define("causs-breadcrumb-item",b);customElements.define("causs-breadcrumb-link",v);customElements.define("causs-breadcrumb-separator",m);customElements.define("causs-breadcrumb-page",g);var x=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupFileInput()}render(){let e=this.getAttribute("variant")||"default",t=this.getAttribute("label"),o=this.hasAttribute("disabled"),s=this.getAttribute("type")||"text",i=this.getAttribute("placeholder")||"",a=s==="file",n=this.getAttribute("button-text")||"Choose File",d=`
      <style>
        .input-wrapper {
          display: flex;
          flex-direction: column;
        }

        .input {
          color: var(--text-black);
          background: transparent;
          padding: 8px 12px;
          border: 1px solid var(--components-border);
          border-radius: var(--border-radius);
          font-size: 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        .input:focus {
          border-color: var(--primary);
          outline: none;
        }

        .input:disabled {
          border: none;
          background-color: var(--components-disabled);
          color: var(--subtext-black);
          cursor: not-allowed;
        }

        .label {
          font-size: 0.875rem;
          font-weight: 500;
        }

        /* Esconde o input de arquivo padr\xE3o */
        .file-input {
          display: none;
        }

        /* Bot\xE3o customizado para upload */
        .custom-file-button {
          border: 1px solid var(--components-border);
          margin-top: 8px;
          border-radius: var(--border-radius);
          display: inline-block;
          cursor: pointer;
        }
      </style>

      <div class="input-wrapper">
        ${t?`<label class="label">${t}</label>`:""}

        ${a?`
            <input type="file" class="file-input" />
            <causs-button class="custom-file-button" variant="ghost">${n}</causs-button>
          `:`
            <input
              type="${s}"
              class="input ${e}"
              ${o?"disabled":""}
              placeholder="${i}"
            />
          `}
      </div>
    `;this.shadowRoot.innerHTML=d}setupFileInput(){let e=this.shadowRoot.querySelector(".file-input"),t=this.shadowRoot.querySelector(".custom-file-button");t&&e&&t.addEventListener("click",()=>{e.click()})}};customElements.define("causs-input",x);var f=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("variant")||"primary",t=this.textContent.trim()||"Badge",o=`
        <style>
          .badge {
            padding: 6px 12px;
            border-radius: var(--border-radius);
            font-size: 0.675rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
  
          .badge.primary {
            background-color: var(--primary);
            color: var(--text-white);
          }
  
          .badge.secondary {
            background-color: var(--secondary);
            color: var(--text-black);
          }
  
          .badge.destructive {
            background-color: var(--danger);
            color: var(--text-white);
          }
  
          .badge.outline {
            background-color: transparent;
            border: 1px solid #ccc;
            color: var(--text-black);
          }
        </style>
  
        <span class="badge ${e}">
          ${t}
        </span>
      `;this.shadowRoot.innerHTML=o}};customElements.define("causs-badge",f);var y=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.date=new Date}connectedCallback(){this.render()}render(){let e=this.date.getMonth(),t=this.date.getFullYear(),o=new Date(t,e+1,0).getDate(),s=new Date(t,e,1).getDay(),i="";for(let n=0;n<s;n++)i+='<div class="day empty"></div>';for(let n=1;n<=o;n++)i+=`<div class="day" data-day="${n}">${n}</div>`;let a=`
        <style>
  :host {
    display: block;
    font-family: var(--font-family);
    width: 300px;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: var(--border-radius);
    overflow: hidden;
    user-select: none;
    border: 1px solid var(--components-border);
  }

  .calendar-header {
    background-color: var(--primary);
    font-family: var(--font-family);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: var(--text-white);
  }

  .calendar-header button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    width: 32px;
    height: 32px;
    border: 1px solid #ffffff00;
    border-radius: var(--border-radius);
    color: var(--text-white);
    font-family: var(--font-family-variant);
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 300ms ease;
  }

  .calendar-header button:hover {
    border-color: var(--components-border);
  }

  .days-of-week,
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px; /* Reduz o espa\xE7o entre as c\xE9lulas */
    padding: 8px;
  }

  .day,
  .days-of-week div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px; /* Menor padding interno */
    height: 32px; /* Reduz altura das c\xE9lulas */
    width: 100%; /* Autom\xE1tico conforme o grid */
    border-radius: var(--border-radius);
    box-sizing: border-box;
    font-size: 0.85rem; /* Reduz tamanho do texto */
  }

  .day {
    cursor: pointer;
    background-color: var(--background);
    color: var(--text-black);
    height: 32px;
    width: 32px;
    transition: all ease 300ms;
  }

  .day.empty {
    background-color: transparent;
    pointer-events: none;
  }

  .day.active {
    background-color: var(--primary);
    color: var(--text-white);
  }

  .days-of-week div {
    font-weight: bold;
    color: var(--subtext-black);
  }
</style>

  
        <div class="calendar">
          <div class="calendar-header">
            <button class="prev-month">&lt;</button>
            <div class="month-year">${this.getMonthName(e)} ${t}</div>
            <button class="next-month">&gt;</button>
          </div>
          <div class="days-of-week">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>
          <div class="calendar-grid">
            ${i}
          </div>
        </div>
      `;this.shadowRoot.innerHTML=a,this.shadowRoot.querySelector(".prev-month").addEventListener("click",()=>this.changeMonth(-1)),this.shadowRoot.querySelector(".next-month").addEventListener("click",()=>this.changeMonth(1)),this.shadowRoot.querySelectorAll(".day").forEach(n=>{n.addEventListener("click",d=>this.onDayClick(d))})}changeMonth(e){this.date.setMonth(this.date.getMonth()+e),this.render()}getMonthName(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e]}onDayClick(e){let t=e.target.getAttribute("data-day");this.shadowRoot.querySelectorAll(".day").forEach(s=>s.classList.remove("active")),e.target.classList.add("active");let o=new Date(this.date.getFullYear(),this.date.getMonth(),t);this.dispatchEvent(new CustomEvent("day-selected",{detail:{date:o},bubbles:!0,composed:!0}))}};customElements.define("causs-calendar",y);var w=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
        <div class="alert">
          <div class="icon">
            <slot name="icon"></slot>
          </div>
          <div class="content">
            <div class="title">
              <slot name="title"></slot>
            </div>
            <div class="description">
              <slot name="description"></slot>
            </div>
          </div>
        </div>
      `;e.innerHTML=t;let o=document.createElement("style");o.textContent=`
        .alert {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: 8px;
          color: var(--text-black);
          border: 1px solid #e5e7eb;
          font-family: var(--font-family);
        }
  
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
  
        .content {
          flex: 1;
        }
  
        .title {
          font-weight: bold;
          font-size: 1rem;
          margin-bottom: 4px;
        }
  
        .description {
          font-size: 0.875rem;
          line-height: 1.4;
        }
  
        /* Variantes */
        .alert.destructive {
          border-color: var(--danger);
          color: var(--danger);
        }
      `,e.appendChild(o)}connectedCallback(){let e=this.shadowRoot.querySelector(".alert"),t=this.getAttribute("variant");t&&e.classList.add(t)}};customElements.define("causs-alert",w);var k=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isOpen=!1;let e=`
      <style>
        :host {
          position: relative;
          display: inline-block;
        }

        .popover-trigger {
          cursor: pointer;
          user-select: none;
        }

        .popover-content {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(-20px);
          min-width: 200px;
          background: var(--background, white);
          color: var(--text-black, black);
          border: 1px solid var(--components-border, #e0e0e0);
          border-radius: var(--border-radius, 8px);
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          transition: 
            transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
            opacity 0.3s ease,
            visibility 0.3s;
          visibility: hidden;
        }

        .popover-content.open {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        }

        .arrow {
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          background: inherit;
          border-top: 1px solid var(--components-border, #e0e0e0);
          border-left: 1px solid var(--components-border, #e0e0e0);
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
          transition: 
            transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
            opacity 0.3s ease;
          opacity: 0;
        }

        .popover-content.open .arrow {
          transform: translateX(-50%) rotate(180deg);
          opacity: 1;
        }

        /* Subtle scale and fade animation */
        @keyframes popoverEntrance {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }

        .popover-content.open {
          animation: popoverEntrance 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
      </style>
      <div class="popover-trigger">
        <slot name="trigger">Click me</slot>
      </div>
      <div class="popover-content">
        <slot name="content">Popover Content</slot>
      </div>
    `;this.shadowRoot.innerHTML=e}connectedCallback(){this.trigger=this.shadowRoot.querySelector(".popover-trigger"),this.content=this.shadowRoot.querySelector(".popover-content"),this.arrow=this.shadowRoot.querySelector(".arrow"),this.trigger.addEventListener("click",this.togglePopover.bind(this)),document.addEventListener("click",this.handleOutsideClick.bind(this))}disconnectedCallback(){this.trigger.removeEventListener("click",this.togglePopover),document.removeEventListener("click",this.handleOutsideClick)}togglePopover(e){e.stopPropagation(),this.isOpen=!this.isOpen,this.content.classList.toggle("open",this.isOpen)}handleOutsideClick(e){this.contains(e.target)||(this.isOpen=!1,this.content.classList.remove("open"))}};customElements.define("causs-popover",k);var L=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});e.innerHTML=`
            <div class="accordion-item">
                <div class="accordion-header">
                    <slot name="header"></slot>
                    <span class="accordion-icon">
                    <svg width="14px" height="14px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:var(--subtext-black);}</style></defs><title>chevron-down</title><g id="chevron-down-Filled"><path id="chevron-down-Filled-2" data-name="chevron-down-Filled" class="cls-1" d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"/></g></svg>
                    </span>
                </div>
                <div class="accordion-content">
                    <slot></slot>
                </div>
            </div>
        `;let t=document.createElement("style");t.textContent=`
            .accordion-item {
                border-bottom: 1px solid var(--components-border);
                overflow: hidden;
                width: 100%;
            }
            .accordion-header {
                min-width: 400px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px;
                cursor: pointer;
                background-color: var(--background);
                font-weight: 600;
                transition: background-color 0.3s ease;
            }
            .accordion-header:hover {
                background-color: var(--background-hover);
            }
            .accordion-content {
                height: 0; /* Start with zero height */
                padding: 0 16px; /* Only horizontal padding initially */
                background-color: var(--background);
                overflow: hidden;
                width: 100%;
                transition: height 0.3s ease, padding 0.3s ease; /* Animate height and padding */
            }
            .accordion-content.open {
                height: auto; /* Auto height when open */
                padding: 16px; /* Apply padding when open */
            }
            .accordion-icon {
                transition: transform 0.3s ease;
                font-size: 18px;
            }
            .accordion-icon.open {
                transform: rotate(180deg);
            }
        `,e.appendChild(t)}connectedCallback(){this.isOpen=!1,this.header=this.shadowRoot.querySelector(".accordion-header"),this.content=this.shadowRoot.querySelector(".accordion-content"),this.icon=this.shadowRoot.querySelector(".accordion-icon"),this.header.addEventListener("click",()=>{this.toggle()})}toggle(){this.isOpen=!this.isOpen,this.isOpen?(this.content.classList.add("open"),this.icon.classList.add("open")):(this.content.classList.remove("open"),this.icon.classList.remove("open")),this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0}))}close(){this.isOpen=!1,this.content.classList.remove("open"),this.icon.classList.remove("open")}};customElements.define("causs-accordion-item",L);var E=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
            <div class="otp-container">
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
            </div>
        `;e.innerHTML=t;let o=document.createElement("style");o.textContent=`
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
        `,e.appendChild(o),this.autoFocus()}connectedCallback(){let e=this.shadowRoot.querySelectorAll(".otp-input");e.forEach((t,o)=>{t.addEventListener("input",s=>{s.target.value.length===1&&o<e.length-1&&e[o+1].focus(),s.target.value.length===0&&o>0&&e[o-1].focus(),this.emitOTPValue()})})}emitOTPValue(){let e=Array.from(this.shadowRoot.querySelectorAll(".otp-input")).map(o=>o.value).join(""),t=new CustomEvent("otp-change",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}autoFocus(){this.shadowRoot.querySelectorAll(".otp-input")[0].focus()}};customElements.define("causs-otp",E);var S=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
            <div class="progress-container">
                <div class="progress-bar"></div>
            </div>
        `;e.innerHTML=t;let o=document.createElement("style");o.textContent=`
            .progress-container {
                width: 100%;
                min-width: 400px;
                height: 10px;
                background-color: var(--components-bg);
                border-radius: var(--border-radius);
                overflow: hidden;
                position: relative;
            }

            .progress-bar {
                width: 0%;
                height: 100%;
                border-radius: var(--border-radius);
                background-color: var(--primary);
                transition: width 0.5s ease;
            }
        `,e.appendChild(o)}set progress(e){let t=this.shadowRoot.querySelector(".progress-bar"),o=Math.min(Math.max(e,0),100);t.style.width=`${o}%`}get progress(){let e=this.shadowRoot.querySelector(".progress-bar");return parseFloat(e.style.width)}connectedCallback(){let e=this.getAttribute("value")||0;this.progress=e}};customElements.define("causs-progress",S);var C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._min=0,this._max=100,this._step=1,this._value=50;let e=`
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
      `;this.shadowRoot.innerHTML=e}static get observedAttributes(){return["min","max","value","step"]}connectedCallback(){this.slider=this.shadowRoot.querySelector(".slider"),this.valueDisplay=this.shadowRoot.querySelector("#value-display"),this.slider.min=this._min,this.slider.max=this._max,this.slider.step=this._step,this.slider.value=this._value,this.updateSliderBackground(),this.slider.addEventListener("input",this.updateValue.bind(this))}attributeChangedCallback(e,t,o){t!==o&&(e==="min"&&(this._min=o,this.slider.min=this._min),e==="max"&&(this._max=o,this.slider.max=this._max),e==="value"&&(this._value=o,this.slider.value=this._value,this.valueDisplay.textContent=this._value,this.updateSliderBackground()),e==="step"&&(this._step=o,this.slider.step=this._step))}updateValue(){this._value=this.slider.value,this.valueDisplay.textContent=this._value,this.updateSliderBackground()}updateSliderBackground(){let e=(this._value-this._min)/(this._max-this._min)*100;this.slider.style.background=`linear-gradient(to right, var(--primary) ${e}%, var(--components-bg) ${e}%)`}get value(){return this._value}set value(e){this._value=e,this.slider.value=e,this.valueDisplay.textContent=e,this.updateSliderBackground()}get min(){return this._min}set min(e){this._min=e,this.slider.min=e,this.updateSliderBackground()}get max(){return this._max}set max(e){this._max=e,this.slider.max=e,this.updateSliderBackground()}get step(){return this._step}set step(e){this._step=e,this.slider.step=e}};customElements.define("causs-slider",C);var A=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});let e=`
        <style>
          :host {
            display: block;
            width: 100%;
          }
  
          .separator {
            background-color: var(--components-border);
            margin: var(--separator-margin, 8px 0);
          }
  
          .horizontal {
            height: var(--separator-thickness, 1px);
            width: 100%;
          }
  
          .vertical {
            width: var(--separator-thickness, 1px);
            height: 100%;
          }
        </style>
        <div class="separator"></div>
      `;this.shadowRoot.innerHTML=e}static get observedAttributes(){return["orientation","thickness","color","margin"]}connectedCallback(){this.separator=this.shadowRoot.querySelector(".separator"),this.updateStyles()}attributeChangedCallback(e,t,o){t!==o&&this.updateStyles()}updateStyles(){let e=this.getAttribute("orientation")||"horizontal",t=this.getAttribute("thickness")||"1px",o=this.getAttribute("color")||"#ccc",s=this.getAttribute("margin")||"8px 0";this.separator.className=`separator ${e}`,this.separator.style.setProperty("--separator-thickness",t),this.separator.style.setProperty("--separator-color",o),this.separator.style.setProperty("--separator-margin",s)}};customElements.define("causs-separator",A);var M=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
        <style>
          :host {
            display: inline-block;
            width: var(--spinner-size, 40px);
            height: var(--spinner-size, 40px);
          }
  
          .spinner {
            width: 100%;
            height: 100%;
            border: var(--spinner-thickness, 4px) solid var(--components-bg);
            border-top: var(--spinner-thickness, 4px) solid var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
  
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        </style>
        <div class="spinner"></div>
      `}};customElements.define("causs-spinner",M);var _=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
        <style>
          :host {
            display: inline-block;
            --select-width: 300px;
          }
  
          .select-container {
            position: relative;
            width: var(--select-width);
          }
  
          .select-trigger {
            width: 100%;
            padding: 10px 12px;
            background-color: var(--background);
            border: 1px solid var(--components-border);
            border-radius: var(--border-radius);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--text-black);
            transition: background-color 0.2s ease;
          }
  
          .select-trigger:hover {
            background-color: var(--background-hover);
          }
  
          .select-content {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%; /* Garante que a largura \xE9 igual \xE0 do select-container */
            margin-top: 4px;
            background-color: var(--background);
            border: 1px solid var(--components-border);
            border-radius: var(--border-radius);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
            max-height: 200px;
            overflow-y: auto;
            z-index: 10;
            display: none;
            padding: 8px;
          }
  
          .select-content.open {
            display: block;
          }
  
          .select-item {
            padding: 10px 12px;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
  
          .select-item:hover {
            background-color: var(--background-hover);
            border-radius: var(--border-radius);
          }
  
          .select-item.active {
            background-color: var(--primary);
          }
  
          .select-label {
            border-radius: var(--border-radius);
            font-weight: bold;
            padding: 8px 12px;
            background-color: var(--background-hover);
          }
        </style>
  
        <div class="select-container">
          <div class="select-trigger" tabindex="0">
            <span id="select-value">Select an item</span>
            <span>
            <svg width="14px" height="14px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:var(--subtext-black);}</style></defs><title>chevron-down</title><g id="chevron-down-Filled"><path id="chevron-down-Filled-2" data-name="chevron-down-Filled" class="cls-1" d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"/></g></svg>
            </span>
          </div>
          <div class="select-content">
            <div class="select-label">Options</div>
            <!-- Items ser\xE3o adicionados dinamicamente -->
          </div>
        </div>
      `}connectedCallback(){this.trigger=this.shadowRoot.querySelector(".select-trigger"),this.content=this.shadowRoot.querySelector(".select-content"),this.valueDisplay=this.shadowRoot.querySelector("#select-value"),this.trigger.addEventListener("click",()=>{this.content.classList.toggle("open")}),document.addEventListener("click",e=>{this.contains(e.target)||this.content.classList.remove("open")}),this.hasAttribute("items")&&this.addItems(JSON.parse(this.getAttribute("items")))}addItems(e){let t=this.shadowRoot.querySelector(".select-content");e.forEach(o=>{let s=document.createElement("div");s.classList.add("select-item"),s.textContent=o.label||o,s.dataset.value=o.value||o,t.appendChild(s),s.addEventListener("click",()=>{this.value=o.value||o,this.valueDisplay.textContent=o.label||o,this.content.classList.remove("open"),this.dispatchEvent(new Event("change"))})})}get value(){return this._value||""}set value(e){this._value=e}};customElements.define("causs-select",_);var R=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
        <div class="pagination">
          <button class="btn prev" disabled><svg width="14px" height="14px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:var(--subtext-black);}</style></defs><title>chevron-left</title><g id="chevron-left-Filled"><path id="chevron-left-Filled-2" data-name="chevron-left-Filled" class="cls-1" d="M16.707,20.293a1,1,0,1,1-1.414,1.414l-9-9a1,1,0,0,1,0-1.414l9-9a1,1,0,1,1,1.414,1.414L8.414,12Z"/></g></svg> Previous</button>
          <div class="pages"></div>
          <button class="btn next">Next <svg width="14px" height="14px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:var(--subtext-black);}</style></defs><title>chevron-right</title><g id="chevron-right-Filled"><path id="chevron-right-Filled-2" data-name="chevron-right-Filled" class="cls-1" d="M17.707,12.707l-9,9a1,1,0,1,1-1.414-1.414L15.586,12,7.293,3.707A1,1,0,1,1,8.707,2.293l9,9A1,1,0,0,1,17.707,12.707Z"/></g></svg></button>
        </div>
      `;e.innerHTML=t;let o=document.createElement("style");o.textContent=`
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
          aspect-ratio: 1; /* Garante propor\xE7\xE3o 1:1 */
          transition: background-color 0.3s ease;
        }
  
        .page-number.active {
          border: 1px solid var(--components-border);
        }
  
        .page-number:hover {
          background-color: var(--foreground);
        }
      `,e.appendChild(o)}connectedCallback(){this.currentPage=Number(this.getAttribute("current"))||1,this.totalPages=Number(this.getAttribute("total"))||1,this.updatePagination(),this.shadowRoot.querySelector(".prev").addEventListener("click",()=>this.changePage(this.currentPage-1)),this.shadowRoot.querySelector(".next").addEventListener("click",()=>this.changePage(this.currentPage+1))}updatePagination(){let e=this.shadowRoot.querySelector(".pages"),t=this.shadowRoot.querySelector(".prev"),o=this.shadowRoot.querySelector(".next");e.innerHTML="";for(let s=1;s<=this.totalPages;s++){let i=document.createElement("div");i.classList.add("page-number"),s===this.currentPage&&i.classList.add("active"),i.textContent=s,i.addEventListener("click",()=>this.changePage(s)),e.appendChild(i)}t.disabled=this.currentPage===1,o.disabled=this.currentPage===this.totalPages}changePage(e){e<1||e>this.totalPages||(this.currentPage=e,this.updatePagination(),this.dispatchEvent(new CustomEvent("page-change",{detail:{page:e}})))}static get observedAttributes(){return["current","total"]}attributeChangedCallback(e,t,o){e==="current"&&(this.currentPage=Number(o)),e==="total"&&(this.totalPages=Number(o)),this.updatePagination()}};customElements.define("causs-pagination",R);var H=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
        <label class="switch">
          <input type="checkbox" class="toggle">
          <span class="slider"></span>
        </label>
      `;e.innerHTML=t;let o=document.createElement("style");o.textContent=`
        :host {
          display: inline-block;
        }
  
        .switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }
  
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
  
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--components-bg);
          transition: 0.2s;
          border-radius: var(--border-radius);
        }
  
        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: var(--white);
          transition: 0.2s;
          border-radius: var(--border-radius);
        }
  
        input:checked + .slider {
          background-color: var(--primary);
        }
  
        input:checked + .slider:before {
          transform: translateX(20px);
        }
  
        input:disabled + .slider {
          background-color: var(--components-disabled);
          cursor: not-allowed;
        }
      `,e.appendChild(o)}connectedCallback(){let e=this.shadowRoot.querySelector(".toggle");e.checked=this.hasAttribute("checked"),e.disabled=this.hasAttribute("disabled"),e.addEventListener("change",()=>{this.dispatchEvent(new CustomEvent("switch-change",{detail:{checked:e.checked}}))})}static get observedAttributes(){return["checked","disabled"]}attributeChangedCallback(e,t,o){let s=this.shadowRoot.querySelector(".toggle");e==="checked"&&(s.checked=this.hasAttribute("checked")),e==="disabled"&&(s.disabled=this.hasAttribute("disabled"))}};customElements.define("causs-switch",H);var T=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});e.innerHTML=`
        <style>
          :host {
            display: inline-block;
            font-size: 14px;
            color: var(--label-color, #333);
            user-select: none;
          }
          :host([disabled]) {
            color: var(--disabled-color, #999);
            cursor: not-allowed;
          }
        </style>
        <slot></slot>
      `}connectedCallback(){this.addEventListener("click",this.handleLabelClick.bind(this))}handleLabelClick(){let e=this.getAttribute("htmlFor");if(e){let t=document.getElementById(e);if(t&&t.shadowRoot){let o=t.shadowRoot.querySelector("input");o&&!o.disabled&&o.click()}}}};customElements.define("causs-label",T);var q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("class")||"",t=this.hasAttribute("shimmer")?"shimmer":"",o=this.getAttribute("width")||"100%",s=this.getAttribute("height")||"100%",i=this.getAttribute("border-radius")||"4px",a=this.getAttribute("circle")!==null,n=`
        <style>
          :host {
            display: block;
          }
  
          .skeleton {
            background-color: #e0e0e0;
            border-radius: ${i};
            width: ${o};
            height: ${s};
            display: inline-block;
            position: relative;
            overflow: hidden;
            ${a?"border-radius: 50%;":""}
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
  
        <div class="skeleton ${t} ${e}"></div>
      `;this.shadowRoot.innerHTML=n}};customElements.define("causs-skeleton",q);var F=class extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._isChecked=!1,this._isDisabled=!1}connectedCallback(){this.render(),this.setupEventListeners()}static get observedAttributes(){return["checked","disabled"]}attributeChangedCallback(e,t,o){e==="checked"&&(this._isChecked=o!==null,this.render()),e==="disabled"&&(this._isDisabled=o!==null,this.render())}setupEventListeners(){this.addEventListener("click",this.handleClick.bind(this))}handleClick(e){if(e.preventDefault(),e.stopPropagation(),this._isDisabled)return;this._isChecked=!this._isChecked,this._isChecked?this.setAttribute("checked",""):this.removeAttribute("checked");let t=new CustomEvent("change",{detail:{checked:this._isChecked},bubbles:!0,composed:!0});this.dispatchEvent(t),this.render()}render(){this._shadowRoot.innerHTML=`
            <style>
                :host {
                    display: inline-block;
                    cursor: ${this._isDisabled?"not-allowed":"pointer"};
                }
                .checkbox {
                    width: 20px;
                    height: 20px;
                    border: 2px solid ${this._isDisabled?"var(--components-disabled)":"var(--primary)"};
                    background-color: ${this._isDisabled?"var(--components-disabled)":this._isChecked?"var(--primary)":"var(--secondary)"};
                    border-radius: var(--border-radius);
                    position: relative;
                    transition: all 0.2s ease;
                }
                .checkbox::after {
                    content: '';
                    position: absolute;
                    display: ${this._isChecked?"block":"none"};
                    left: 6px;
                    top: 2px;
                    width: 5px;
                    height: 10px;
                    border: solid var(--white);
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                }
            </style>
            <div class="checkbox"></div>
        `}};customElements.define("causs-checkbox",F);var z=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.tooltipText=this.getAttribute("data-tooltip")||"Tooltip"}connectedCallback(){this.render(),this.addEventListeners()}addEventListeners(){let e=this.shadowRoot.querySelector(".tooltip"),t=this.shadowRoot.querySelector(".tooltip-container");t.addEventListener("mouseenter",()=>e.classList.add("visible")),t.addEventListener("mouseleave",()=>e.classList.remove("visible")),t.addEventListener("focus",()=>e.classList.add("visible")),t.addEventListener("blur",()=>e.classList.remove("visible"))}render(){this.shadowRoot.innerHTML=`
        <style>
          :host {
            position: relative;
            display: inline-block;
            cursor: pointer;
          }
  
          .tooltip {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary);
            color: var(--background);
            padding: 8px;
            font-size: 14px;
            border-radius: var(--border-radius);
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s, visibility 0.2s;
          }
  
          .tooltip.visible {
            opacity: 1;
            visibility: visible;
          }
  
          .tooltip-container {
            display: inline-block;
          }
        </style>
        <div class="tooltip-container">
          <slot></slot>
          <div class="tooltip">${this.tooltipText}</div>
        </div>
      `}};customElements.define("causs-tooltip",z);var P=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});this.container=document.createElement("div"),this.container.classList.add("rating-container");let t=document.createElement("style");t.textContent=`
            .rating-container {
                display: inline-flex;
                align-items: center;
                gap: 0.25rem;
            }

            .star {
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .star svg {
                fill: var(--components-bg);
                width: var(--star-size, 24px);
                height: var(--star-size, 24px);
                transition: fill 0.2s ease;
            }

            .star.filled svg {
                fill: var(--primary);
            }

            .star.interactive:hover {
                transform: scale(1.05);
            }

            .star.interactive.hover-preview svg {
                fill: var(--primary-hover);
                opacity: 0.8;
            }

            .rating-value {
                margin-left: 0.5rem;
                color: var(--text-black);
                font-family: var(--font-family, sans-serif);
                font-size: var(--font-size, 16px);
            }
        `,e.appendChild(t),e.appendChild(this.container),this.handleStarClick=this.handleStarClick.bind(this),this.handleStarHover=this.handleStarHover.bind(this),this.handleStarLeave=this.handleStarLeave.bind(this)}connectedCallback(){let e=parseInt(this.getAttribute("max-rating")||"5"),t=parseFloat(this.getAttribute("initial-rating")||"0"),o=this.hasAttribute("interactive"),s=this.hasAttribute("show-value");this.renderStars(e,t,o,s)}renderStars(e,t,o,s){this.container.innerHTML="",this.starElements=[],this.currentRating=t;for(let i=1;i<=e;i++){let a=document.createElement("span");a.classList.add("star"),a.innerHTML='<svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1</style></defs><title>star</title><g id="star-Filled"><path id="star-Filled-2" data-name="star-Filled" class="cls-1" d="M20.934,12.13,17.82,15.122l.735,4.221a1.824,1.824,0,0,1-.726,1.792,1.872,1.872,0,0,1-1.973.152L12,19.29l-3.856,2a1.869,1.869,0,0,1-1.973-.152,1.824,1.824,0,0,1-.726-1.792l.735-4.221L3.066,12.13a1.82,1.82,0,0,1-.477-1.881A1.845,1.845,0,0,1,4.1,8.986l4.309-.617,1.926-3.845a1.871,1.871,0,0,1,3.336,0l1.926,3.845,4.309.617a1.845,1.845,0,0,1,1.508,1.263A1.82,1.82,0,0,1,20.934,12.13Z"/></g></svg>',a.dataset.rating=i,i<=t&&a.classList.add("filled"),o&&(a.classList.add("interactive"),a.addEventListener("click",this.handleStarClick),a.addEventListener("mouseover",this.handleStarHover),a.addEventListener("mouseleave",this.handleStarLeave)),this.container.appendChild(a),this.starElements.push(a)}if(s){let i=document.createElement("span");i.classList.add("rating-value"),i.textContent=`${t.toFixed(1)}`,this.container.appendChild(i)}}handleStarHover(e){if(!this.hasAttribute("interactive"))return;let t=parseInt(e.target.closest(".star").dataset.rating);this.starElements.forEach(o=>o.classList.remove("hover-preview")),this.starElements.forEach(o=>{parseInt(o.dataset.rating)<=t&&o.classList.add("hover-preview")})}handleStarLeave(){this.hasAttribute("interactive")&&this.starElements.forEach(e=>{e.classList.remove("hover-preview")})}handleStarClick(e){if(!this.hasAttribute("interactive"))return;let t=parseInt(e.target.closest(".star").dataset.rating);this.currentRating=t,this.starElements.forEach(i=>{let a=parseInt(i.dataset.rating);i.classList.toggle("filled",a<=t)});let o=new CustomEvent("rating-change",{detail:{rating:t},bubbles:!0,composed:!0});this.dispatchEvent(o);let s=this.shadowRoot.querySelector(".rating-value");s&&(s.textContent=`${t.toFixed(1)}`)}};customElements.define("causs-rating",P);var I=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isOpen=!1}connectedCallback(){this.render(),this.addEventListeners()}addEventListeners(){let e=this.shadowRoot.querySelector(".sheet-trigger"),t=this.shadowRoot.querySelector(".sheet-close"),o=this.shadowRoot.querySelector(".sheet-content"),s=this.shadowRoot.querySelector(".sheet-overlay");e?.addEventListener("click",()=>{this.isOpen=!0,o.classList.add("open"),s.classList.add("visible")}),t?.addEventListener("click",()=>{this.isOpen=!1,o.classList.remove("open"),s.classList.remove("visible")}),s?.addEventListener("click",()=>{this.isOpen=!1,o.classList.remove("open"),s.classList.remove("visible")})}render(){this.shadowRoot.innerHTML=`
        <style>
          :host {
            --sheet-width: 400px;
          }
  
          .sheet-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
            z-index: 10;
          }

          .sheet-overlay.visible {
            opacity: 1;
            visibility: visible;
          }
  
          .sheet-container {
            position: relative;
          }
  
          .sheet-trigger {
            cursor: pointer;
          }
  
          .sheet-content {
            position: fixed;
            top: 0;
            right: 0;
            height: 100%;
            width: var(--sheet-width);
            background-color: var(--background);
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            display: flex;
            flex-direction: column;
            border-left: 1px solid var(--components-border);
            z-index: 20;
          }
  
          .sheet-content.open {
            transform: translateX(0);
          }
  
          .sheet-header {
            position: relative;
            display: flex;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid var(--components-border);
          }
  
          .sheet-close {
            position: absolute;
            top: 16px;
            right: 16px;
            cursor: pointer;
            background: none;
            border: none;
            font-size: 20px;
            line-height: 1;
            color: var(--text-color, black);
          }
  
          .sheet-close:hover {
            opacity: 0.7;
          }
  
          .sheet-body {
            flex: 1;
            padding: 16px;
            overflow-y: auto;
          }
  
          .sheet-footer {
            padding: 16px;
            border-top: 1px solid var(--components-border);
          }
        </style>
  
        <div class="sheet-overlay"></div>
        <div class="sheet-container">
          <slot name="trigger" class="sheet-trigger"></slot>
          <div class="sheet-content">
            <div class="sheet-header">
              <slot name="header"></slot>
              <button class="sheet-close" aria-label="Close"><svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:var(--subtext-black);}</style></defs><title>Close</title><g id="times-square-Filled"><path id="times-square-Filled-2" data-name="times-square-Filled" class="cls-1" d="M15,2.5H9A6.513,6.513,0,0,0,2.5,9v6A6.513,6.513,0,0,0,9,21.5h6A6.513,6.513,0,0,0,21.5,15V9A6.513,6.513,0,0,0,15,2.5Zm.71,11.79a1.008,1.008,0,0,1,0,1.42,1.014,1.014,0,0,1-1.42,0L12,13.42,9.71,15.71a1.014,1.014,0,0,1-1.42,0,1.008,1.008,0,0,1,0-1.42L10.58,12,8.29,9.71A1,1,0,0,1,9.71,8.29L12,10.58l2.29-2.29a1,1,0,0,1,1.42,1.42L13.42,12Z"/></g></svg></button>
            </div>
            <div class="sheet-body">
              <slot name="body"></slot>
            </div>
            <div class="sheet-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      `}};customElements.define("causs-sheet",I);var $=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.addEventListeners()}addEventListeners(){this.shadowRoot.querySelectorAll(".menu-trigger").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();let s=t.nextElementSibling,i=s.classList.contains("open");this.shadowRoot.querySelectorAll(".submenu").forEach(a=>{a.classList.remove("open")}),i||s.classList.add("open")})}),document.addEventListener("click",()=>{this.shadowRoot.querySelectorAll(".submenu").forEach(t=>{t.classList.remove("open")})})}render(){this.shadowRoot.innerHTML=`
        <style>
          .menu {
            display: inline-flex;
            background: var(--background);
            border: 1px solid var(--components-border);
            border-radius: var(--border-radius);
            padding: 8px;
            gap: 8px;
            align-items: center;
          }
  
          .menu-item {
            position: relative;
          }
  
          .menu-trigger {
            color: var(--text-black);
            cursor: pointer;
            background: transparent;
            border: none;
            border-radius: var(--border-radius);
            padding: 8px 12px;
            font-size: 14px;
            white-space: nowrap;
          }
  
          .menu-trigger:hover {
            background: var(--background-hover);
          }
  
          .submenu {
            overflow: hidden;
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: var(--background);
            border: 1px solid var(--components-border);
            border-radius: var(--border-radius);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            min-width: 150px;
            z-index: 10;
            padding: 8px;
          }
  
          .submenu.open {
            display: block;
          }
  
          .submenu-item {
            border-radius: var(--border-radius);
            padding: 8px 12px;
            cursor: pointer;
            font-size: 14px;
            white-space: nowrap;
          }
  
          .submenu-item:hover {
            background: var(--background-hover);
          }
        </style>
        <div class="menu">
          <div class="menu-item">
            <button class="menu-trigger">File</button>
            <div class="submenu">
              <div class="submenu-item">New File</div>
              <div class="submenu-item">Open File</div>
              <div class="submenu-item">Save</div>
            </div>
          </div>
          <div class="menu-item">
            <button class="menu-trigger">Edit</button>
            <div class="submenu">
              <div class="submenu-item">Undo</div>
              <div class="submenu-item">Redo</div>
            </div>
          </div>
          <div class="menu-item">
            <button class="menu-trigger">View</button>
            <div class="submenu">
              <div class="submenu-item">Zoom In</div>
              <div class="submenu-item">Zoom Out</div>
            </div>
          </div>
        </div>
      `}};customElements.define("causs-menubar",$);var D=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("toast-container");let o=document.createElement("div");o.classList.add("toast");let s=document.createElement("div");s.classList.add("toast-header");let i=document.createElement("div");i.classList.add("toast-title");let a=document.createElement("div");a.classList.add("toast-description");let n=document.createElement("button");n.classList.add("toast-close"),n.innerHTML="\xD7",s.appendChild(i),s.appendChild(n),o.appendChild(s),o.appendChild(a),t.appendChild(o),e.appendChild(t);let d=document.createElement("style");d.textContent=`
          .toast-container {
              position: fixed;
              z-index: 1000;
              display: none;
          }
          
          /* Positioning classes */
          .toast-container.top-left {
              top: 1rem;
              left: 1rem;
          }
          
          .toast-container.top-right {
              top: 1rem;
              right: 1rem;
          }
          
          .toast-container.top-center {
              top: 1rem;
              left: 50%;
              transform: translateX(-50%);
          }
          
          .toast-container.bottom-left {
              bottom: 1rem;
              left: 1rem;
          }
          
          .toast-container.bottom-right {
              bottom: 1rem;
              right: 1rem;
          }
          
          .toast-container.bottom-center {
              bottom: 1rem;
              left: 50%;
              transform: translateX(-50%);
          }
          
          .toast {
              background: var(--background);
              border: 1px solid var(--components-border);
              border-radius: var(--border-radius);
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
              padding: 1rem;
              min-width: 300px;
              max-width: 400px;
          }
          
          .toast-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 0.5rem;
          }
          
          .toast-title {
              font-weight: 600;
              color: var(--text-black);
          }
          
          .toast-description {
              color: var(--subtext-black);
              font-size: 0.875rem;
          }
          
          .toast-close {
              background: none;
              border: none;
              color: var(--primary);
              font-size: 1.5rem;
              cursor: pointer;
              padding: 0;
              line-height: 1;
          }
          
          .toast-close:hover {
              color: var(--primary-hover);
          }
          
          .toast.success {
              border-left: 4px solid var(--success);
          }
          
          .toast.error {
              border-left: 4px solid var(--danger);
          }
          
          .toast.warning {
              border-left: 4px solid var(--warning);
          }
          
          .toast.info {
              border-left: 4px solid var(--primary);
          }
          
          .toast.show {
              display: block;
              animation: slideIn 0.3s ease-out;
          }
          
          @keyframes slideIn {
              from {
                  opacity: 0;
                  transform: translateX(100%);
              }
              to {
                  opacity: 1;
                  transform: translateX(0);
              }
          }
      `,e.appendChild(d),n.addEventListener("click",()=>this.hide())}connectedCallback(){let e=this.shadowRoot.querySelector(".toast"),t=this.shadowRoot.querySelector(".toast-container"),o=this.shadowRoot.querySelector(".toast-title"),s=this.shadowRoot.querySelector(".toast-description"),i=this.getAttribute("variant")||"info";e.classList.add(i);let a=this.getAttribute("position")||"top-right";t.classList.add(a),o.textContent=this.getAttribute("title")||"Notification",s.textContent=this.getAttribute("description")||"";let n=parseInt(this.getAttribute("duration")||3e3);n>0&&(this.autoHideTimer=setTimeout(()=>this.hide(),n))}disconnectedCallback(){this.autoHideTimer&&clearTimeout(this.autoHideTimer)}show(){let e=this.shadowRoot.querySelector(".toast-container"),t=this.shadowRoot.querySelector(".toast");e.style.display="block",t.classList.add("show")}hide(){let e=this.shadowRoot.querySelector(".toast-container");this.shadowRoot.querySelector(".toast").classList.remove("show"),e.style.display="none"}};customElements.define("causs-toast",D);window.createToast=function(r){let e=document.createElement("causs-toast");return r.title&&e.setAttribute("title",r.title),r.description&&e.setAttribute("description",r.description),r.variant&&e.setAttribute("variant",r.variant),r.duration&&e.setAttribute("duration",r.duration),r.position&&e.setAttribute("position",r.position),document.body.appendChild(e),e.show(),e};var B=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("tabs-container");let o=document.createElement("div");o.classList.add("tab-list"),o.setAttribute("role","tablist");let s=document.createElement("div");s.classList.add("tab-content-container");let i=document.createElement("style");i.textContent=`
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
        `,e.appendChild(i),e.appendChild(t),t.appendChild(o),t.appendChild(s)}connectedCallback(){let e=this.shadowRoot.querySelector(".tab-list"),t=this.shadowRoot.querySelector(".tab-content-container");Array.from(this.querySelectorAll(":scope > causs-tab")).forEach((s,i)=>{let a=document.createElement("button");a.classList.add("tab"),a.setAttribute("role","tab"),a.textContent=s.getAttribute("label")||`Tab ${i+1}`,a.setAttribute("data-index",i),i===0&&(a.classList.add("active"),s.classList.add("active")),a.addEventListener("click",()=>{e.querySelectorAll(".tab").forEach(n=>n.classList.remove("active")),t.querySelectorAll(".tab-panel").forEach(n=>n.classList.remove("active")),a.classList.add("active"),s.classList.add("active")}),s.classList.add("tab-panel"),s.setAttribute("role","tabpanel"),e.appendChild(a),t.appendChild(s)})}},O=class extends HTMLElement{constructor(){super()}};customElements.define("causs-tabs",B);customElements.define("causs-tab",O);var j=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.addEventListeners(),this.setInitialIcon()}addEventListeners(){let e=this.shadowRoot.querySelector(".theme-toggle");e.addEventListener("click",()=>{let t=document.documentElement;t.classList.contains("dark")?(t.classList.remove("dark"),e.innerHTML=`
            <svg class="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          `):(t.classList.add("dark"),e.innerHTML=`
            <svg class="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          `)})}setInitialIcon(){let e=this.shadowRoot.querySelector(".theme-toggle");document.documentElement.classList.contains("dark")?e.innerHTML=`
          <svg class="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `:e.innerHTML=`
          <svg class="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `}render(){this.shadowRoot.innerHTML=`
        <style>
          .theme-toggle {
            cursor: pointer;
            font-size: var(--font-size);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--border-radius, 4px);
            background-color: var(--primary);
            color: var(--text-white);
            transition: background-color 0.3s ease;
          }
  
          .theme-toggle:hover {
            background-color: var(--primary-hover);
          }
  
          .theme-toggle {
            width: 36px;
            height: 36px;
          }
  
          .theme-toggle svg {
            width: 16px;
            height: 16px;
          }
        </style>
        <button class="theme-toggle"></button>
      `}};customElements.define("causs-theme",j);var N=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isOpen=!1}connectedCallback(){this.render(),this.addEventListeners()}addEventListeners(){let e=this.shadowRoot.querySelector(".drawer-trigger"),t=this.shadowRoot.querySelector(".drawer-close"),o=this.shadowRoot.querySelector(".drawer-content"),s=this.shadowRoot.querySelector(".drawer-overlay");e?.addEventListener("click",()=>{this.isOpen=!0,o.classList.add("open"),s.classList.add("visible")}),t?.addEventListener("click",()=>{this.isOpen=!1,o.classList.remove("open"),s.classList.remove("visible")}),s?.addEventListener("click",()=>{this.isOpen=!1,o.classList.remove("open"),s.classList.remove("visible")})}render(){this.shadowRoot.innerHTML=`
        <style>
          :host {
            --drawer-height: 70%;
          }
  
          .drawer-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
            z-index: 10;
          }
  
          .drawer-overlay.visible {
            opacity: 1;
            visibility: visible;
          }
  
          .drawer-container {
            position: relative;
          }
  
          .drawer-trigger {
            cursor: pointer;
          }
  
          .drawer-content {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: var(--drawer-height);
            background-color: var(--background);
            transform: translateY(100%);
            transition: transform 0.3s ease-in-out;
            display: flex;
            flex-direction: column;
            border-top: 1px solid var(--components-border);
            border-left: 1px solid var(--components-border);
            border-right: 1px solid var(--components-border);
            z-index: 20;
            border-radius: 1rem 1rem 0 0;
          }
  
          .drawer-content.open {
            transform: translateY(0);
          }
  
          .drawer-header {
            position: relative;
            display: flex;
            align-items: center;
            padding: 16px;
          }
  
          .drawer-close {
            position: absolute;
            top: 16px;
            right: 16px;
            cursor: pointer;
            background: none;
            border: none;
            font-size: 20px;
            line-height: 1;
            color: var(--subtext-black);
          }
  
          .drawer-close:hover {
            opacity: 0.7;
          }
  
          .drawer-body {
            flex: 1;
            padding: 16px;
            overflow-y: auto;
          }
  
          .drawer-footer {
            padding: 16px;
          }
        </style>
  
        <div class="drawer-overlay"></div>
        <div class="drawer-container">
          <slot name="trigger" class="drawer-trigger"></slot>
          <div class="drawer-content">
            <div class="drawer-header">
              <slot name="header"></slot>
              <button class="drawer-close" aria-label="Close">\u2715</button>
            </div>
            <div class="drawer-body">
              <slot name="body"></slot>
            </div>
            <div class="drawer-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      `}};customElements.define("causs-drawer",N);var X=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isCollapsed=!1,this.activeMenuItem=null}connectedCallback(){this.render(),this.addEventListeners()}addEventListeners(){let e=this.shadowRoot.querySelector(".sidebar-collapse-toggle"),t=this.shadowRoot.querySelectorAll(".sidebar-menu-item");e?.addEventListener("click",()=>{this.isCollapsed=!this.isCollapsed,this.updateSidebarState()}),t.forEach(o=>{o.querySelector(".sidebar-menu-button")?.addEventListener("click",()=>{this.setActiveMenuItem(o)})})}setActiveMenuItem(e){this.activeMenuItem&&this.activeMenuItem.querySelector(".sidebar-menu-button").classList.remove("active"),this.activeMenuItem=e,this.activeMenuItem.querySelector(".sidebar-menu-button").classList.add("active")}updateSidebarState(){let e=this.shadowRoot.querySelector(".sidebar"),t=this.shadowRoot.querySelector(".sidebar-content"),o=this.shadowRoot.querySelector(".main-content"),s=this.shadowRoot.querySelector(".sidebar-header");this.isCollapsed?(e.classList.add("collapsed"),t.classList.add("hidden"),s.querySelector('slot[name="header"]').style.display="none",o.style.marginLeft="var(--sidebar-collapsed-width)"):(e.classList.remove("collapsed"),t.classList.remove("hidden"),s.querySelector('slot[name="header"]').style.display="",o.style.marginLeft="var(--sidebar-width)")}render(){this.shadowRoot.innerHTML=`
            <style>
                :host {
                    --sidebar-width: 250px;
                    --sidebar-collapsed-width: 64px;
                    --sidebar-background: #0f0f11;
                    --sidebar-border-color: #1d1d20;
                    --sidebar-text-color: #e5e5e5;
                    --sidebar-hover-background: #1d1d20;
                    --sidebar-active-background: #2a2a2e;
                }

                .container {
                    display: flex;
                    height: 100vh;
                }

                .sidebar {
                    width: var(--sidebar-width);
                    height: 100%;
                    background-color: var(--foreground);
                    border-right: 1px solid var(--components-border);
                    display: flex;
                    flex-direction: column;
                    transition: width 0.3s ease;
                    overflow-x: hidden;
                }

                .sidebar.collapsed {
                    width: var(--sidebar-collapsed-width);
                }

                .main-content {
                    flex-grow: 1;
                    margin-left: var(--sidebar-width);
                    padding: 20px;
                    transition: margin-left 0.3s ease;
                }

                .sidebar-header {
                    padding: 16px;
                    border-bottom: 1px solid var(--components-border);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .sidebar-collapse-toggle {
                    cursor: pointer;
                    background: none;
                    width: 32px; /* Largura e altura iguais */
                    height: 32px;
                    border: 1px solid var(--components-border); /* Adicione borda para defini\xE7\xE3o */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px; /* Pode ajustar para deixar levemente arredondado */
                    color: var(--subtext-black);
                    transition: background-color 0.2s ease;
                }

                .sidebar-collapse-toggle svg {
                    width: 16px;
                    height: 16px;
                }

                .sidebar-collapse-toggle:hover {
                    color: var(--subtext-black);
                }

                .sidebar-content {
                    flex-grow: 1;
                    overflow-y: auto;
                    padding: 16px 0;
                }

                .sidebar-content.hidden {
                    display: none;
                }

                .sidebar-group {
                    margin-bottom: 16px;
                }

                .sidebar-group-label {
                    padding: 8px 16px;
                    font-weight: 600;
                    color: var(--text-black);
                    opacity: 0.7;
                }

                .sidebar-menu-item {
                    padding: 8px 16px;
                }

                .sidebar-menu-button {
                    text-decoration: none;
                    color: var(--text-black);
                    display: block;
                    width: 100%;
                    padding: 8px;
                    border-radius: 4px;
                    transition: background-color 0.2s, color 0.2s;
                }

                .sidebar-menu-button:hover {
                    background-color: var(--background-hover);
                }

                .sidebar-menu-button.active {
                    font-weight: bold;
                    background-color: var(--primary);
                    color: var(--text-black);
                }

                .sidebar-footer {
                    border-top: 1px solid var(--components-border);
                    padding: 16px;
                    color: var(--subtext-black);
                    opacity: 0.7;
                }
            </style>

            <div class="container">
                <div class="sidebar">
                    <div class="sidebar-header">
                        <slot name="header"></slot>
                        <causs-button variant='ghost' class="sidebar-collapse-toggle" aria-label="Toggle Sidebar">
                            <svg fill="var(--text-black)" width="16px" height="16px" viewBox="0 0 24 24" id="menu" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path id="primary" d="M3,12H21M9,18H21M3,6H15" style="fill: none; stroke: var(--text-black); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>
                        </causs-button>
                    </div>
                    <div class="sidebar-content">
                        <slot name="content"></slot>
                    </div>
                    <div class="sidebar-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
                <div class="main-content">
                    <slot name="main-content"></slot>
                </div>
            </div>
        `}};customElements.define("causs-interactive-sidebar",X);var U=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});let e=`
      <style>
        :host {
          display: block;
        }
        .dropzone {
          border: 2px dashed var(--components-border);
          border-radius: var(--border-radius);
          padding: 32px;
          text-align: center;
          background-color: var(--background);
          transition: border-color 0.3s ease, background-color 0.3s ease;
          cursor: pointer;
        }
        .dropzone.dragover {
          border-color: var(--primary);
          background-color: var(--foreground);
        }
        .dropzone p {
          margin: 16px 0 0;
          color: var(--text-black);
          font-size: 14px;
        }
        .preview-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        .file-preview {
          position: relative;
          padding: 8px;
          border: 1px solid var(--components-border);
          border-radius: var(--border-radius);
          background: var(--background);
        }
        .remove-file {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 20px;
          height: 20px;
          border: none;
          border-radius: 50%;
          background: var(--danger);
          color: var(--white);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: background-color 0.3s ease;
        }
        .remove-file:hover {
          background: var(--danger-hover);
        }
        .file-name {
          margin-top: 8px;
          font-size: 12px;
          color: var(--subtext-black);
          word-break: break-all;
        }
        input[type="file"] {
          display: none;
        }
      </style>
      <div class="dropzone">
        <slot name="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </slot>
        <p><slot>Drag files here or click to upload</slot></p>
        <input type="file" hidden multiple />
      </div>
      <div class="preview-container"></div>
    `;this.shadowRoot.innerHTML=e,this.files=[]}connectedCallback(){let e=this.shadowRoot.querySelector(".dropzone"),t=this.shadowRoot.querySelector("input");e.addEventListener("click",()=>t.click()),e.addEventListener("dragover",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover"),o.dataTransfer.files.length&&(t.files=o.dataTransfer.files,this.handleFiles(o.dataTransfer.files))}),t.addEventListener("change",()=>{this.handleFiles(t.files)})}handleFiles(e){let t=this.shadowRoot.querySelector(".preview-container"),o=Array.from(e);this.files=[...this.files,...o],o.forEach(s=>{let i=document.createElement("div");if(i.className="file-preview",s.type.startsWith("image/")){let d=document.createElement("img"),K=new FileReader;K.onload=Q=>{d.src=Q.target.result},K.readAsDataURL(s),i.appendChild(d)}else i.textContent=s.name.split(".").pop().toUpperCase();let a=document.createElement("div");a.className="remove-file",a.textContent="\xD7",a.addEventListener("click",d=>{d.stopPropagation(),this.removeFile(s),i.remove()});let n=document.createElement("div");n.className="file-name",n.textContent=s.name,i.appendChild(a),t.appendChild(i),t.appendChild(n)}),this.dispatchEvent(new CustomEvent("files-changed",{detail:{files:this.files}}))}removeFile(e){this.files=this.files.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("files-changed",{detail:{files:this.files}}))}};customElements.define("causs-dropzone",U);var V=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});let e=`
      <style>
        :host {
          display: block;
          font-family: var(--font-family, sans-serif);
        }
        .tree-view {
          padding: 10px;
        }
        ::slotted(causs-tree-item) {
          margin-bottom: 5px;
        }
      </style>
      <div class="tree-view">
        <slot></slot>
      </div>
    `;this.shadowRoot.innerHTML=e}},Z=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});let e=`
      <style>
        :host {
          display: block;
        }
        .tree-item {
          margin-left: 20px;
        }
        .tree-item-header {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 8px;
          border-radius: var(--border-radius);
          transition: background-color 0.2s;
        }
        .tree-item-header:hover {
          background-color: var(--background-hover);
        }
        .tree-item-header.selected {
          background-color: var(--components-bg);
        }
        .toggle-icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
          transition: transform 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .toggle-icon svg {
          width: 12px;
          height: 12px;
        }
        .tree-item-content {
          display: none;
          padding-left: 24px;
        }
        :host([expanded]) .tree-item-content {
          display: block;
        }
        :host([expanded]) .toggle-icon {
          transform: rotate(90deg);
        }
        .tree-item-label {
          flex: 1;
        }
        .tree-item-icon {
          margin-right: 8px;
          display: flex;
          align-items: center;
        }
        :host(:not([has-children])) .toggle-icon {
          visibility: hidden;
        }
      </style>
      <div class="tree-item">
        <div class="tree-item-header">
          <div class="toggle-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <div class="tree-item-icon">
            <slot name="icon"></slot>
          </div>
          <div class="tree-item-label">
            <slot name="label">Item</slot>
          </div>
        </div>
        <div class="tree-item-content">
          <slot></slot>
        </div>
      </div>
    `;this.shadowRoot.innerHTML=e}connectedCallback(){let e=this.querySelector("causs-tree-item")!==null;e&&this.setAttribute("has-children",""),this.shadowRoot.querySelector(".tree-item-header").addEventListener("click",()=>{e&&this.toggleExpanded(),this.dispatchEvent(new CustomEvent("tree-item-select",{bubbles:!0,composed:!0,detail:{item:this}}))}),this.hasAttribute("expanded")&&this.toggleExpanded(!0)}toggleExpanded(e){let t=typeof e<"u"?e:!this.hasAttribute("expanded");t?this.setAttribute("expanded",""):this.removeAttribute("expanded"),this.dispatchEvent(new CustomEvent("tree-item-toggle",{bubbles:!0,composed:!0,detail:{expanded:t}}))}};customElements.define("causs-tree-view",V);customElements.define("causs-tree-item",Z);var Y=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._currentSlide=0,this._autoplay=!1,this._interval=null,this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    padding-top: 16px;
                }

                .carousel {
                    position: relative;
                    width: 100%;
                }

                .slides-container {
                    display: flex;
                    transition: transform 0.3s ease-in-out;
                    width: 100%;
                    padding: 16px 0;
                }

                ::slotted(*) {
                    flex: 0 0 100%;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .controls {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    transform: translateY(-50%);
                    display: flex;
                    justify-content: space-between;
                    padding: 0 16px;
                    z-index: 1;
                }

                .control-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    background: var(--background);
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    padding: 8px;
                    cursor: pointer;
                    opacity: 0.8;
                    transition: all 0.2s ease;
                    color: var(--subtext-black);
                }

                .control-button:hover {
                    opacity: 1;
                    background: var(--background-hover);
                }

                .control-button svg {
                    width: 16px;
                    height: 16px;
                }

                .indicators {
                    position: absolute;
                    bottom: 16px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 8px;
                    padding: 8px;
                    background: var(--background);
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    z-index: 1;
                }

                .indicator {
                    width: 8px;
                    height: 8px;
                    min-width: 8px;
                    min-height: 8px;
                    border-radius: 50%;
                    background: var(--background);
                    border: 1px solid var(--components-border);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }

                .indicator:hover {
                    background: var(--background-hover);
                }

                .indicator.active {
                    background: var(--primary);
                    border-color: var(--primary);
                }
            </style>

            <div class="carousel">
                <div class="slides-container">
                    <slot></slot>
                </div>
                <div class="controls">
                    <button class="control-button prev" aria-label="Previous slide">
                        <svg width="14" height="14" viewBox="0 0 24 24">
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="control-button next" aria-label="Next slide">
                        <svg width="14" height="14" viewBox="0 0 24 24">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div class="indicators"></div>
            </div>
        `}connectedCallback(){this.setupSlides(),this.setupControls(),this.setupAutoplay()}setupSlides(){this.slides=Array.from(this.children),this.totalSlides=this.slides.length;let e=this.shadowRoot.querySelector(".indicators");this.slides.forEach((t,o)=>{let s=document.createElement("div");s.classList.add("indicator"),s.addEventListener("click",()=>this.goToSlide(o)),e.appendChild(s)}),this.updateSlidePosition()}setupControls(){let e=this.shadowRoot.querySelector(".prev"),t=this.shadowRoot.querySelector(".next");e.addEventListener("click",()=>this.previousSlide()),t.addEventListener("click",()=>this.nextSlide()),this.addEventListener("keydown",o=>{o.key==="ArrowLeft"&&this.previousSlide(),o.key==="ArrowRight"&&this.nextSlide()})}setupAutoplay(){if(this.hasAttribute("autoplay")){this._autoplay=!0;let e=this.getAttribute("interval")||5e3;this.startAutoplay(e)}}startAutoplay(e){this._interval=setInterval(()=>this.nextSlide(),e)}stopAutoplay(){this._interval&&(clearInterval(this._interval),this._interval=null)}goToSlide(e){this._currentSlide=e,this.updateSlidePosition()}previousSlide(){this._currentSlide=(this._currentSlide-1+this.totalSlides)%this.totalSlides,this.updateSlidePosition()}nextSlide(){this._currentSlide=(this._currentSlide+1)%this.totalSlides,this.updateSlidePosition()}updateSlidePosition(){let e=this.shadowRoot.querySelector(".slides-container");e.style.transform=`translateX(-${this._currentSlide*100}%)`,this.shadowRoot.querySelectorAll(".indicator").forEach((o,s)=>{o.classList.toggle("active",s===this._currentSlide)}),this.dispatchEvent(new CustomEvent("slide-change",{detail:{currentSlide:this._currentSlide},bubbles:!0}))}disconnectedCallback(){this.stopAutoplay()}};customElements.define("causs-carousel",Y);var J=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._open=!1,this._selectedIndex=-1,this._items=[];let e=this.getAttribute("label");this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: inline-block;
                    position: relative;
                    width: var(--select-width, 300px);
                }

                .combobox {
                    position: relative;
                }

                .input-wrapper {
                    display: flex;
                    align-items: center;
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    background: var(--background);
                    padding: 10px 12px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    width: 100%;
                    box-sizing: border-box;
                }

                .input-wrapper:hover {
                    background: var(--background-hover);
                }

                .input-wrapper:focus-within {
                    border-color: var(--primary);
                }

                input {
                    flex: 1;
                    border: none;
                    background: none;
                    padding: 0;
                    margin: 0;
                    outline: none;
                    font-size: 1rem;
                    color: var(--text-black);
                    width: 100%;
                    cursor: pointer;
                }

                input::placeholder {
                    color: var(--subtext-black);
                    opacity: 1;
                }

                .arrow {
                    display: flex;
                    align-items: center;
                    margin-left: 8px;
                    color: var(--subtext-black);
                    transition: transform 0.2s ease;
                }

                .arrow svg {
                    width: 14px;
                    height: 14px;
                }

                .arrow.open {
                    transform: rotate(180deg);
                }

                .dropdown {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    margin-top: 4px;
                    background: var(--background);
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    max-height: 200px;
                    overflow-y: auto;
                    z-index: 10;
                    display: none;
                    padding: 8px;
                }

                .dropdown.open {
                    display: block;
                }

                .option {
                    padding: 10px 12px;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                    border-radius: var(--border-radius);
                }

                .option:hover {
                    background-color: var(--background-hover);
                }

                .option.selected {
                    background-color: var(--primary);
                    color: var(--white);
                }

                .option.highlighted {
                    background: var(--background-hover);
                }

                .no-results {
                    padding: 8px 12px;
                    color: var(--subtext-black);
                    font-style: italic;
                }

                /* For multiple selection */
                .tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4px;
                    margin-bottom: 4px;
                }

                .tag {
                    display: flex;
                    align-items: center;
                    background: var(--background-hover);
                    border: 1px solid var(--components-border);
                    border-radius: var(--border-radius);
                    padding: 2px 8px;
                    font-size: 12px;
                }

                .tag-remove {
                    margin-left: 4px;
                    cursor: pointer;
                    opacity: 0.7;
                }

                .tag-remove:hover {
                    opacity: 1;
                }

                /* Add label support */
                .label {
                    font-size: 0.875rem;
                    font-weight: 500;
                    margin-bottom: 8px;
                    display: block;
                }
            </style>

            <div class="combobox">
                ${e?`<label class="label">${e}</label>`:""}
                <div class="input-wrapper">
                    <div class="tags"></div>
                    <input type="text" placeholder="${this.getAttribute("placeholder")||"Select or type..."}">
                    <div class="arrow">
                        <svg width="14" height="14" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg">
                            <defs><style>.cls-1{fill:var(--subtext-black);}</style></defs>
                            <title>chevron-down</title>
                            <g id="chevron-down-Filled">
                                <path id="chevron-down-Filled-2" data-name="chevron-down-Filled" class="cls-1" d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="dropdown"></div>
            </div>
        `,this._input=this.shadowRoot.querySelector("input"),this._dropdown=this.shadowRoot.querySelector(".dropdown"),this._arrow=this.shadowRoot.querySelector(".arrow"),this._tags=this.shadowRoot.querySelector(".tags")}connectedCallback(){this.multiple=this.hasAttribute("multiple"),this.setupEventListeners(),this.loadItems()}setupEventListeners(){this._input.addEventListener("input",()=>this.handleInput()),this.shadowRoot.querySelector(".input-wrapper").addEventListener("click",()=>{this._input.focus(),this.open()}),this._input.addEventListener("keydown",t=>this.handleKeydown(t)),document.addEventListener("click",t=>{this.contains(t.target)||this.close()})}loadItems(){let e=this.getAttribute("items");if(e)this._items=JSON.parse(e);else{let t=this.querySelector("slot");t&&(this._items=Array.from(t.children).map(o=>({value:o.getAttribute("value")||o.textContent,label:o.textContent})))}this.renderDropdown()}handleInput(){let e=this._input.value.toLowerCase();this.filterItems(e),this.open()}filterItems(e){let t=this._items.filter(o=>o.label.toLowerCase().includes(e));this.renderDropdown(t)}renderDropdown(e=this._items){this._dropdown.innerHTML=e.length?e.map((t,o)=>`
                <div class="option" data-index="${o}">
                    ${t.label}
                </div>
            `).join(""):'<div class="no-results">No results found</div>',this._dropdown.querySelectorAll(".option").forEach(t=>{t.addEventListener("click",()=>{this.selectItem(parseInt(t.dataset.index))})})}selectItem(e){let t=this._items[e];this.multiple?(this.addTag(t),this._input.value="",this._input.placeholder=""):(this._input.value=t.label,this._input.placeholder="",this.close()),this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value,label:t.label},bubbles:!0}))}addTag(e){let t=document.createElement("div");t.className="tag",t.innerHTML=`
            ${e.label}
            <span class="tag-remove">\xD7</span>
        `,t.querySelector(".tag-remove").addEventListener("click",()=>{t.remove(),this.dispatchEvent(new CustomEvent("remove",{detail:{value:e.value,label:e.label},bubbles:!0}))}),this._tags.appendChild(t)}handleKeydown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.highlightNext();break;case"ArrowUp":e.preventDefault(),this.highlightPrevious();break;case"Enter":e.preventDefault(),this._selectedIndex>=0&&this.selectItem(this._selectedIndex);break;case"Escape":this.close();break}}highlightNext(){let e=this._dropdown.querySelectorAll(".option");this._selectedIndex<e.length-1&&(this._selectedIndex++,this.updateHighlight())}highlightPrevious(){this._selectedIndex>0&&(this._selectedIndex--,this.updateHighlight())}updateHighlight(){this._dropdown.querySelectorAll(".option").forEach((t,o)=>{t.classList.toggle("highlighted",o===this._selectedIndex),o===this._selectedIndex&&t.scrollIntoView({block:"nearest"})})}open(){this._open||(this._open=!0,this._dropdown.classList.add("open"),this._arrow.classList.add("open"))}close(){this._open&&(this._open=!1,this._dropdown.classList.remove("open"),this._arrow.classList.remove("open"),this._selectedIndex=-1)}reset(){this._input.value="",this._input.placeholder=this.getAttribute("placeholder")||"Select or type..."}};customElements.define("causs-combobox",J);var G=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._sortColumn=null,this._sortDirection="asc",this._currentPage=1,this._itemsPerPage=parseInt(this.getAttribute("items-per-page"))||10,this.shadowRoot.innerHTML=`
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
        `,this._thead=this.shadowRoot.querySelector("thead tr"),this._tbody=this.shadowRoot.querySelector("tbody"),this._paginationInfo=this.shadowRoot.querySelector(".pagination-info"),this._prevButton=this.shadowRoot.querySelector(".pagination-button.prev"),this._nextButton=this.shadowRoot.querySelector(".pagination-button.next")}static get observedAttributes(){return["columns","data","items-per-page"]}attributeChangedCallback(e,t,o){t!==o&&(e==="columns"?(this.columns=JSON.parse(o),this.renderHeaders()):e==="data"?(this.data=JSON.parse(o),this.renderData()):e==="items-per-page"&&(this._itemsPerPage=parseInt(o),this.renderData()))}connectedCallback(){this.setupEventListeners()}setupEventListeners(){this._prevButton.addEventListener("click",()=>this.previousPage()),this._nextButton.addEventListener("click",()=>this.nextPage())}renderHeaders(){this._thead.innerHTML=this.columns.map(e=>`
            <th data-field="${e.field}">
                ${e.label}
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
        `).join(""),this._thead.querySelectorAll("th").forEach(e=>{e.addEventListener("click",()=>this.sortByColumn(e.dataset.field))})}renderData(){if(!this.data||!this.data.length){this._tbody.innerHTML=`
                <tr>
                    <td colspan="${this.columns.length}" class="empty-state">
                        No data available
                    </td>
                </tr>
            `;return}let e=[...this.data];this._sortColumn&&e.sort((s,i)=>{let a=s[this._sortColumn],n=i[this._sortColumn],d=this._sortDirection==="asc"?1:-1;return typeof a=="string"?a.localeCompare(n)*d:(a-n)*d});let t=(this._currentPage-1)*this._itemsPerPage,o=e.slice(t,t+this._itemsPerPage);this._tbody.innerHTML=o.map(s=>`
            <tr>
                ${this.columns.map(i=>`
                    <td>${this.formatCell(s[i.field],i)}</td>
                `).join("")}
            </tr>
        `).join(""),this.updatePagination(e.length)}formatCell(e,t){return t.format?t.format(e):e}sortByColumn(e){this._sortColumn===e?this._sortDirection=this._sortDirection==="asc"?"desc":"asc":(this._sortColumn=e,this._sortDirection="asc"),this._thead.querySelectorAll(".sort-icon").forEach(o=>{o.classList.remove("active")}),this._thead.querySelector(`[data-field="${e}"] .sort-icon`).classList.add("active"),this.renderData()}updatePagination(e){let t=Math.ceil(e/this._itemsPerPage),o=(this._currentPage-1)*this._itemsPerPage+1,s=Math.min(o+this._itemsPerPage-1,e);this._paginationInfo.textContent=`Showing ${o}-${s} of ${e}`,this._prevButton.disabled=this._currentPage===1,this._nextButton.disabled=this._currentPage===t}previousPage(){this._currentPage>1&&(this._currentPage--,this.renderData())}nextPage(){let e=Math.ceil(this.data.length/this._itemsPerPage);this._currentPage<e&&(this._currentPage++,this.renderData())}};customElements.define("causs-table",G);var W=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
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
        `}static get observedAttributes(){return["items"]}attributeChangedCallback(e,t,o){e==="items"&&t!==o&&this.renderItems(JSON.parse(o))}renderItems(e){let t=this.shadowRoot.querySelector(".timeline");t.innerHTML=e.map((o,s)=>`
            <div class="timeline-item ${o.status||""}">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <div class="timeline-title">${o.title}</div>
                        ${o.date?`<div class="timeline-date">${o.date}</div>`:""}
                    </div>
                    <div class="timeline-body">
                        ${o.content}
                    </div>
                </div>
            </div>
        `).join("")}};customElements.define("causs-timeline",W);})();
