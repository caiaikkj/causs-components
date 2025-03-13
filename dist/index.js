(()=>{var l=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
        <button class="btn">
          <slot></slot>
        </button>
      `;e.innerHTML=t;let s=document.createElement("style");s.textContent=`
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
      `,e.appendChild(s)}connectedCallback(){let e=this.shadowRoot.querySelector(".btn"),t=this.getAttribute("variant");t&&e.classList.add(t),this.hasAttribute("disabled")&&e.setAttribute("disabled","true"),this.hasAttribute("full-width")&&e.classList.add("full-width")}};customElements.define("causs-button",l);var c=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
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
      `;e.innerHTML=t;let s=document.createElement("style");s.textContent=`
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
      `,e.appendChild(s)}};customElements.define("causs-card",c);var h=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
        <div class="avatar">
          <img class="avatar-img" src="" alt="Avatar" />
        </div>
      `;e.innerHTML=t;let s=document.createElement("style");s.textContent=`
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
      `,e.appendChild(s)}connectedCallback(){let e=this.shadowRoot.querySelector(".avatar"),t=this.shadowRoot.querySelector(".avatar-img"),s=this.getAttribute("src");s&&t.setAttribute("src",s);let o=this.getAttribute("variant")||"round";e.classList.add(o);let r=this.getAttribute("size");r&&e.style.setProperty("--avatar-size",`${r}px`)}};customElements.define("causs-avatar",h);var p=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=`
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
    `;this.shadowRoot.innerHTML=e}},m=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=`
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
    `;this.shadowRoot.innerHTML=e}},v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=`
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
    `;this.shadowRoot.innerHTML=e}};customElements.define("causs-breadcrumb",p);customElements.define("causs-breadcrumb-list",u);customElements.define("causs-breadcrumb-item",b);customElements.define("causs-breadcrumb-link",m);customElements.define("causs-breadcrumb-separator",v);customElements.define("causs-breadcrumb-page",g);var x=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupFileInput()}render(){let e=this.getAttribute("variant")||"default",t=this.getAttribute("label"),s=this.hasAttribute("disabled"),o=this.getAttribute("type")||"text",r=this.getAttribute("placeholder")||"",i=o==="file",n=this.getAttribute("button-text")||"Choose File",d=`
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

        ${i?`
            <input type="file" class="file-input" />
            <causs-button class="custom-file-button" variant="ghost">${n}</causs-button>
          `:`
            <input
              type="${o}"
              class="input ${e}"
              ${s?"disabled":""}
              placeholder="${r}"
            />
          `}
      </div>
    `;this.shadowRoot.innerHTML=d}setupFileInput(){let e=this.shadowRoot.querySelector(".file-input"),t=this.shadowRoot.querySelector(".custom-file-button");t&&e&&t.addEventListener("click",()=>{e.click()})}};customElements.define("causs-input",x);var f=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("variant")||"primary",t=this.textContent.trim()||"Badge",s=`
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
      `;this.shadowRoot.innerHTML=s}};customElements.define("causs-badge",f);var y=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.date=new Date}connectedCallback(){this.render()}render(){let e=this.date.getMonth(),t=this.date.getFullYear(),s=new Date(t,e+1,0).getDate(),o=new Date(t,e,1).getDay(),r="";for(let n=0;n<o;n++)r+='<div class="day empty"></div>';for(let n=1;n<=s;n++)r+=`<div class="day" data-day="${n}">${n}</div>`;let i=`
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
            ${r}
          </div>
        </div>
      `;this.shadowRoot.innerHTML=i,this.shadowRoot.querySelector(".prev-month").addEventListener("click",()=>this.changeMonth(-1)),this.shadowRoot.querySelector(".next-month").addEventListener("click",()=>this.changeMonth(1)),this.shadowRoot.querySelectorAll(".day").forEach(n=>{n.addEventListener("click",d=>this.onDayClick(d))})}changeMonth(e){this.date.setMonth(this.date.getMonth()+e),this.render()}getMonthName(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e]}onDayClick(e){let t=e.target.getAttribute("data-day");this.shadowRoot.querySelectorAll(".day").forEach(o=>o.classList.remove("active")),e.target.classList.add("active");let s=new Date(this.date.getFullYear(),this.date.getMonth(),t);this.dispatchEvent(new CustomEvent("day-selected",{detail:{date:s},bubbles:!0,composed:!0}))}};customElements.define("causs-calendar",y);var w=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
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
      `;e.innerHTML=t;let s=document.createElement("style");s.textContent=`
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
      `,e.appendChild(s)}connectedCallback(){let e=this.shadowRoot.querySelector(".alert"),t=this.getAttribute("variant");t&&e.classList.add(t)}};customElements.define("causs-alert",w);var k=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isOpen=!1;let e=`
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
        `;e.innerHTML=t;let s=document.createElement("style");s.textContent=`
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
        `,e.appendChild(s),this.autoFocus()}connectedCallback(){let e=this.shadowRoot.querySelectorAll(".otp-input");e.forEach((t,s)=>{t.addEventListener("input",o=>{o.target.value.length===1&&s<e.length-1&&e[s+1].focus(),o.target.value.length===0&&s>0&&e[s-1].focus(),this.emitOTPValue()})})}emitOTPValue(){let e=Array.from(this.shadowRoot.querySelectorAll(".otp-input")).map(s=>s.value).join(""),t=new CustomEvent("otp-change",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}autoFocus(){this.shadowRoot.querySelectorAll(".otp-input")[0].focus()}};customElements.define("causs-otp",E);var C=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
            <div class="progress-container">
                <div class="progress-bar"></div>
            </div>
        `;e.innerHTML=t;let s=document.createElement("style");s.textContent=`
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
        `,e.appendChild(s)}set progress(e){let t=this.shadowRoot.querySelector(".progress-bar"),s=Math.min(Math.max(e,0),100);t.style.width=`${s}%`}get progress(){let e=this.shadowRoot.querySelector(".progress-bar");return parseFloat(e.style.width)}connectedCallback(){let e=this.getAttribute("value")||0;this.progress=e}};customElements.define("causs-progress",C);var S=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._min=0,this._max=100,this._step=1,this._value=50;let e=`
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
      `;this.shadowRoot.innerHTML=e}static get observedAttributes(){return["min","max","value","step"]}connectedCallback(){this.slider=this.shadowRoot.querySelector(".slider"),this.valueDisplay=this.shadowRoot.querySelector("#value-display"),this.slider.min=this._min,this.slider.max=this._max,this.slider.step=this._step,this.slider.value=this._value,this.updateSliderBackground(),this.slider.addEventListener("input",this.updateValue.bind(this))}attributeChangedCallback(e,t,s){t!==s&&(e==="min"&&(this._min=s,this.slider.min=this._min),e==="max"&&(this._max=s,this.slider.max=this._max),e==="value"&&(this._value=s,this.slider.value=this._value,this.valueDisplay.textContent=this._value,this.updateSliderBackground()),e==="step"&&(this._step=s,this.slider.step=this._step))}updateValue(){this._value=this.slider.value,this.valueDisplay.textContent=this._value,this.updateSliderBackground()}updateSliderBackground(){let e=(this._value-this._min)/(this._max-this._min)*100;this.slider.style.background=`linear-gradient(to right, var(--primary) ${e}%, var(--components-bg) ${e}%)`}get value(){return this._value}set value(e){this._value=e,this.slider.value=e,this.valueDisplay.textContent=e,this.updateSliderBackground()}get min(){return this._min}set min(e){this._min=e,this.slider.min=e,this.updateSliderBackground()}get max(){return this._max}set max(e){this._max=e,this.slider.max=e,this.updateSliderBackground()}get step(){return this._step}set step(e){this._step=e,this.slider.step=e}};customElements.define("causs-slider",S);var M=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});let e=`
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
      `;this.shadowRoot.innerHTML=e}static get observedAttributes(){return["orientation","thickness","color","margin"]}connectedCallback(){this.separator=this.shadowRoot.querySelector(".separator"),this.updateStyles()}attributeChangedCallback(e,t,s){t!==s&&this.updateStyles()}updateStyles(){let e=this.getAttribute("orientation")||"horizontal",t=this.getAttribute("thickness")||"1px",s=this.getAttribute("color")||"#ccc",o=this.getAttribute("margin")||"8px 0";this.separator.className=`separator ${e}`,this.separator.style.setProperty("--separator-thickness",t),this.separator.style.setProperty("--separator-color",s),this.separator.style.setProperty("--separator-margin",o)}};customElements.define("causs-separator",M);var A=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
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
      `}};customElements.define("causs-spinner",A);var T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
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
      `}connectedCallback(){this.trigger=this.shadowRoot.querySelector(".select-trigger"),this.content=this.shadowRoot.querySelector(".select-content"),this.valueDisplay=this.shadowRoot.querySelector("#select-value"),this.trigger.addEventListener("click",()=>{this.content.classList.toggle("open")}),document.addEventListener("click",e=>{this.contains(e.target)||this.content.classList.remove("open")}),this.hasAttribute("items")&&this.addItems(JSON.parse(this.getAttribute("items")))}addItems(e){let t=this.shadowRoot.querySelector(".select-content");e.forEach(s=>{let o=document.createElement("div");o.classList.add("select-item"),o.textContent=s.label||s,o.dataset.value=s.value||s,t.appendChild(o),o.addEventListener("click",()=>{this.value=s.value||s,this.valueDisplay.textContent=s.label||s,this.content.classList.remove("open"),this.dispatchEvent(new Event("change"))})})}get value(){return this._value||""}set value(e){this._value=e}};customElements.define("causs-select",T);var H=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
        <div class="pagination">
          <button class="btn prev" disabled><svg width="14px" height="14px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:var(--subtext-black);}</style></defs><title>chevron-left</title><g id="chevron-left-Filled"><path id="chevron-left-Filled-2" data-name="chevron-left-Filled" class="cls-1" d="M16.707,20.293a1,1,0,1,1-1.414,1.414l-9-9a1,1,0,0,1,0-1.414l9-9a1,1,0,1,1,1.414,1.414L8.414,12Z"/></g></svg> Previous</button>
          <div class="pages"></div>
          <button class="btn next">Next <svg width="14px" height="14px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:var(--subtext-black);}</style></defs><title>chevron-right</title><g id="chevron-right-Filled"><path id="chevron-right-Filled-2" data-name="chevron-right-Filled" class="cls-1" d="M17.707,12.707l-9,9a1,1,0,1,1-1.414-1.414L15.586,12,7.293,3.707A1,1,0,1,1,8.707,2.293l9,9A1,1,0,0,1,17.707,12.707Z"/></g></svg></button>
        </div>
      `;e.innerHTML=t;let s=document.createElement("style");s.textContent=`
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
      `,e.appendChild(s)}connectedCallback(){this.currentPage=Number(this.getAttribute("current"))||1,this.totalPages=Number(this.getAttribute("total"))||1,this.updatePagination(),this.shadowRoot.querySelector(".prev").addEventListener("click",()=>this.changePage(this.currentPage-1)),this.shadowRoot.querySelector(".next").addEventListener("click",()=>this.changePage(this.currentPage+1))}updatePagination(){let e=this.shadowRoot.querySelector(".pages"),t=this.shadowRoot.querySelector(".prev"),s=this.shadowRoot.querySelector(".next");e.innerHTML="";for(let o=1;o<=this.totalPages;o++){let r=document.createElement("div");r.classList.add("page-number"),o===this.currentPage&&r.classList.add("active"),r.textContent=o,r.addEventListener("click",()=>this.changePage(o)),e.appendChild(r)}t.disabled=this.currentPage===1,s.disabled=this.currentPage===this.totalPages}changePage(e){e<1||e>this.totalPages||(this.currentPage=e,this.updatePagination(),this.dispatchEvent(new CustomEvent("page-change",{detail:{page:e}})))}static get observedAttributes(){return["current","total"]}attributeChangedCallback(e,t,s){e==="current"&&(this.currentPage=Number(s)),e==="total"&&(this.totalPages=Number(s)),this.updatePagination()}};customElements.define("causs-pagination",H);var R=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=`
        <label class="switch">
          <input type="checkbox" class="toggle">
          <span class="slider"></span>
        </label>
      `;e.innerHTML=t;let s=document.createElement("style");s.textContent=`
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
      `,e.appendChild(s)}connectedCallback(){let e=this.shadowRoot.querySelector(".toggle");e.checked=this.hasAttribute("checked"),e.disabled=this.hasAttribute("disabled"),e.addEventListener("change",()=>{this.dispatchEvent(new CustomEvent("switch-change",{detail:{checked:e.checked}}))})}static get observedAttributes(){return["checked","disabled"]}attributeChangedCallback(e,t,s){let o=this.shadowRoot.querySelector(".toggle");e==="checked"&&(o.checked=this.hasAttribute("checked")),e==="disabled"&&(o.disabled=this.hasAttribute("disabled"))}};customElements.define("causs-switch",R);var q=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});e.innerHTML=`
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
      `}connectedCallback(){this.addEventListener("click",this.handleLabelClick.bind(this))}handleLabelClick(){let e=this.getAttribute("htmlFor");if(e){let t=document.getElementById(e);if(t&&t.shadowRoot){let s=t.shadowRoot.querySelector("input");s&&!s.disabled&&s.click()}}}};customElements.define("causs-label",q);var F=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("class")||"",t=this.hasAttribute("shimmer")?"shimmer":"",s=this.getAttribute("width")||"100%",o=this.getAttribute("height")||"100%",r=this.getAttribute("border-radius")||"4px",i=this.getAttribute("circle")!==null,n=`
        <style>
          :host {
            display: block;
          }
  
          .skeleton {
            background-color: #e0e0e0;
            border-radius: ${r};
            width: ${s};
            height: ${o};
            display: inline-block;
            position: relative;
            overflow: hidden;
            ${i?"border-radius: 50%;":""}
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
      `;this.shadowRoot.innerHTML=n}};customElements.define("causs-skeleton",F);var z=class extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._isChecked=!1,this._isDisabled=!1}connectedCallback(){this.render(),this.setupEventListeners()}static get observedAttributes(){return["checked","disabled"]}attributeChangedCallback(e,t,s){e==="checked"&&(this._isChecked=s!==null,this.render()),e==="disabled"&&(this._isDisabled=s!==null,this.render())}setupEventListeners(){this.addEventListener("click",this.handleClick.bind(this))}handleClick(e){if(e.preventDefault(),e.stopPropagation(),this._isDisabled)return;this._isChecked=!this._isChecked,this._isChecked?this.setAttribute("checked",""):this.removeAttribute("checked");let t=new CustomEvent("change",{detail:{checked:this._isChecked},bubbles:!0,composed:!0});this.dispatchEvent(t),this.render()}render(){this._shadowRoot.innerHTML=`
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
        `}};customElements.define("causs-checkbox",z);var _=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.tooltipText=this.getAttribute("data-tooltip")||"Tooltip"}connectedCallback(){this.render(),this.addEventListeners()}addEventListeners(){let e=this.shadowRoot.querySelector(".tooltip"),t=this.shadowRoot.querySelector(".tooltip-container");t.addEventListener("mouseenter",()=>e.classList.add("visible")),t.addEventListener("mouseleave",()=>e.classList.remove("visible")),t.addEventListener("focus",()=>e.classList.add("visible")),t.addEventListener("blur",()=>e.classList.remove("visible"))}render(){this.shadowRoot.innerHTML=`
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
      `}};customElements.define("causs-tooltip",_);var O=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});this.container=document.createElement("div"),this.container.classList.add("rating-container");let t=document.createElement("style");t.textContent=`
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
        `,e.appendChild(t),e.appendChild(this.container),this.handleStarClick=this.handleStarClick.bind(this),this.handleStarHover=this.handleStarHover.bind(this),this.handleStarLeave=this.handleStarLeave.bind(this)}connectedCallback(){let e=parseInt(this.getAttribute("max-rating")||"5"),t=parseFloat(this.getAttribute("initial-rating")||"0"),s=this.hasAttribute("interactive"),o=this.hasAttribute("show-value");this.renderStars(e,t,s,o)}renderStars(e,t,s,o){this.container.innerHTML="",this.starElements=[],this.currentRating=t;for(let r=1;r<=e;r++){let i=document.createElement("span");i.classList.add("star"),i.innerHTML='<svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1</style></defs><title>star</title><g id="star-Filled"><path id="star-Filled-2" data-name="star-Filled" class="cls-1" d="M20.934,12.13,17.82,15.122l.735,4.221a1.824,1.824,0,0,1-.726,1.792,1.872,1.872,0,0,1-1.973.152L12,19.29l-3.856,2a1.869,1.869,0,0,1-1.973-.152,1.824,1.824,0,0,1-.726-1.792l.735-4.221L3.066,12.13a1.82,1.82,0,0,1-.477-1.881A1.845,1.845,0,0,1,4.1,8.986l4.309-.617,1.926-3.845a1.871,1.871,0,0,1,3.336,0l1.926,3.845,4.309.617a1.845,1.845,0,0,1,1.508,1.263A1.82,1.82,0,0,1,20.934,12.13Z"/></g></svg>',i.dataset.rating=r,r<=t&&i.classList.add("filled"),s&&(i.classList.add("interactive"),i.addEventListener("click",this.handleStarClick),i.addEventListener("mouseover",this.handleStarHover),i.addEventListener("mouseleave",this.handleStarLeave)),this.container.appendChild(i),this.starElements.push(i)}if(o){let r=document.createElement("span");r.classList.add("rating-value"),r.textContent=`${t.toFixed(1)}`,this.container.appendChild(r)}}handleStarHover(e){if(!this.hasAttribute("interactive"))return;let t=parseInt(e.target.closest(".star").dataset.rating);this.starElements.forEach(s=>s.classList.remove("hover-preview")),this.starElements.forEach(s=>{parseInt(s.dataset.rating)<=t&&s.classList.add("hover-preview")})}handleStarLeave(){this.hasAttribute("interactive")&&this.starElements.forEach(e=>{e.classList.remove("hover-preview")})}handleStarClick(e){if(!this.hasAttribute("interactive"))return;let t=parseInt(e.target.closest(".star").dataset.rating);this.currentRating=t,this.starElements.forEach(r=>{let i=parseInt(r.dataset.rating);r.classList.toggle("filled",i<=t)});let s=new CustomEvent("rating-change",{detail:{rating:t},bubbles:!0,composed:!0});this.dispatchEvent(s);let o=this.shadowRoot.querySelector(".rating-value");o&&(o.textContent=`${t.toFixed(1)}`)}};customElements.define("causs-rating",O);var P=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isOpen=!1}connectedCallback(){this.render(),this.addEventListeners()}addEventListeners(){let e=this.shadowRoot.querySelector(".sheet-trigger"),t=this.shadowRoot.querySelector(".sheet-close"),s=this.shadowRoot.querySelector(".sheet-content"),o=this.shadowRoot.querySelector(".sheet-overlay");e?.addEventListener("click",()=>{this.isOpen=!0,s.classList.add("open"),o.classList.add("visible")}),t?.addEventListener("click",()=>{this.isOpen=!1,s.classList.remove("open"),o.classList.remove("visible")}),o?.addEventListener("click",()=>{this.isOpen=!1,s.classList.remove("open"),o.classList.remove("visible")})}render(){this.shadowRoot.innerHTML=`
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
      `}};customElements.define("causs-sheet",P);var $=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.addEventListeners()}addEventListeners(){this.shadowRoot.querySelectorAll(".menu-trigger").forEach(t=>{t.addEventListener("click",s=>{s.stopPropagation();let o=t.nextElementSibling,r=o.classList.contains("open");this.shadowRoot.querySelectorAll(".submenu").forEach(i=>{i.classList.remove("open")}),r||o.classList.add("open")})}),document.addEventListener("click",()=>{this.shadowRoot.querySelectorAll(".submenu").forEach(t=>{t.classList.remove("open")})})}render(){this.shadowRoot.innerHTML=`
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
      `}};customElements.define("causs-menubar",$);var D=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("toast-container");let s=document.createElement("div");s.classList.add("toast");let o=document.createElement("div");o.classList.add("toast-header");let r=document.createElement("div");r.classList.add("toast-title");let i=document.createElement("div");i.classList.add("toast-description");let n=document.createElement("button");n.classList.add("toast-close"),n.innerHTML="\xD7",o.appendChild(r),o.appendChild(n),s.appendChild(o),s.appendChild(i),t.appendChild(s),e.appendChild(t);let d=document.createElement("style");d.textContent=`
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
      `,e.appendChild(d),n.addEventListener("click",()=>this.hide())}connectedCallback(){let e=this.shadowRoot.querySelector(".toast"),t=this.shadowRoot.querySelector(".toast-container"),s=this.shadowRoot.querySelector(".toast-title"),o=this.shadowRoot.querySelector(".toast-description"),r=this.getAttribute("variant")||"info";e.classList.add(r);let i=this.getAttribute("position")||"top-right";t.classList.add(i),s.textContent=this.getAttribute("title")||"Notification",o.textContent=this.getAttribute("description")||"";let n=parseInt(this.getAttribute("duration")||3e3);n>0&&(this.autoHideTimer=setTimeout(()=>this.hide(),n))}disconnectedCallback(){this.autoHideTimer&&clearTimeout(this.autoHideTimer)}show(){let e=this.shadowRoot.querySelector(".toast-container"),t=this.shadowRoot.querySelector(".toast");e.style.display="block",t.classList.add("show")}hide(){let e=this.shadowRoot.querySelector(".toast-container");this.shadowRoot.querySelector(".toast").classList.remove("show"),e.style.display="none"}};customElements.define("causs-toast",D);window.createToast=function(a){let e=document.createElement("causs-toast");return a.title&&e.setAttribute("title",a.title),a.description&&e.setAttribute("description",a.description),a.variant&&e.setAttribute("variant",a.variant),a.duration&&e.setAttribute("duration",a.duration),a.position&&e.setAttribute("position",a.position),document.body.appendChild(e),e.show(),e};var B=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("tabs-container");let s=document.createElement("div");s.classList.add("tab-list"),s.setAttribute("role","tablist");let o=document.createElement("div");o.classList.add("tab-content-container");let r=document.createElement("style");r.textContent=`
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
        `,e.appendChild(r),e.appendChild(t),t.appendChild(s),t.appendChild(o)}connectedCallback(){let e=this.shadowRoot.querySelector(".tab-list"),t=this.shadowRoot.querySelector(".tab-content-container");Array.from(this.querySelectorAll(":scope > causs-tab")).forEach((o,r)=>{let i=document.createElement("button");i.classList.add("tab"),i.setAttribute("role","tab"),i.textContent=o.getAttribute("label")||`Tab ${r+1}`,i.setAttribute("data-index",r),r===0&&(i.classList.add("active"),o.classList.add("active")),i.addEventListener("click",()=>{e.querySelectorAll(".tab").forEach(n=>n.classList.remove("active")),t.querySelectorAll(".tab-panel").forEach(n=>n.classList.remove("active")),i.classList.add("active"),o.classList.add("active")}),o.classList.add("tab-panel"),o.setAttribute("role","tabpanel"),e.appendChild(i),t.appendChild(o)})}},I=class extends HTMLElement{constructor(){super()}};customElements.define("causs-tabs",B);customElements.define("causs-tab",I);var j=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.addEventListeners(),this.setInitialIcon()}addEventListeners(){let e=this.shadowRoot.querySelector(".theme-toggle");e.addEventListener("click",()=>{let t=document.documentElement;t.classList.contains("dark")?(t.classList.remove("dark"),e.innerHTML=`
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
      `}};customElements.define("causs-theme",j);var N=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isOpen=!1}connectedCallback(){this.render(),this.addEventListeners()}addEventListeners(){let e=this.shadowRoot.querySelector(".drawer-trigger"),t=this.shadowRoot.querySelector(".drawer-close"),s=this.shadowRoot.querySelector(".drawer-content"),o=this.shadowRoot.querySelector(".drawer-overlay");e?.addEventListener("click",()=>{this.isOpen=!0,s.classList.add("open"),o.classList.add("visible")}),t?.addEventListener("click",()=>{this.isOpen=!1,s.classList.remove("open"),o.classList.remove("visible")}),o?.addEventListener("click",()=>{this.isOpen=!1,s.classList.remove("open"),o.classList.remove("visible")})}render(){this.shadowRoot.innerHTML=`
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
      `}};customElements.define("causs-drawer",N);var X=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isCollapsed=!1,this.activeMenuItem=null}connectedCallback(){this.render(),this.addEventListeners()}addEventListeners(){let e=this.shadowRoot.querySelector(".sidebar-collapse-toggle"),t=this.shadowRoot.querySelectorAll(".sidebar-menu-item");e?.addEventListener("click",()=>{this.isCollapsed=!this.isCollapsed,this.updateSidebarState()}),t.forEach(s=>{s.querySelector(".sidebar-menu-button")?.addEventListener("click",()=>{this.setActiveMenuItem(s)})})}setActiveMenuItem(e){this.activeMenuItem&&this.activeMenuItem.querySelector(".sidebar-menu-button").classList.remove("active"),this.activeMenuItem=e,this.activeMenuItem.querySelector(".sidebar-menu-button").classList.add("active")}updateSidebarState(){let e=this.shadowRoot.querySelector(".sidebar"),t=this.shadowRoot.querySelector(".sidebar-content"),s=this.shadowRoot.querySelector(".main-content"),o=this.shadowRoot.querySelector(".sidebar-header");this.isCollapsed?(e.classList.add("collapsed"),t.classList.add("hidden"),o.querySelector('slot[name="header"]').style.display="none",s.style.marginLeft="var(--sidebar-collapsed-width)"):(e.classList.remove("collapsed"),t.classList.remove("hidden"),o.querySelector('slot[name="header"]').style.display="",s.style.marginLeft="var(--sidebar-width)")}render(){this.shadowRoot.innerHTML=`
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
        `}};customElements.define("causs-interactive-sidebar",X);})();
