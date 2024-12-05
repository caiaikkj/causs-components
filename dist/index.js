(()=>{var c=class extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"}),e=`
        <button class="btn">
          <slot></slot>
        </button>
      `;t.innerHTML=e;let o=document.createElement("style");o.textContent=`
        .btn {
          background-color: var(--primary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-family);
          color: white;
          padding: 10px 1rem;
          border: none;
          border-radius: var(--button-border-radius);
          font-size: var(--font-size);
        }
  
        .btn:hover {
          background-color: #2F2F31;
        }
  
        /* Variantes */
        .btn.secondary {
          background-color: var(--secondary);
          color: var(--primary);
        }
  
        .btn.secondary:hover {
          background-color: #F6F6F7;
        }
  
        .btn.destructive {
          background-color: var(--red);
          color: white;
        }
  
        .btn.destructive:hover {
          background-color: #DF3B3B;
        }
  
        .btn.outline {
          background-color: transparent;
          border: 1px solid #ccc;
          color: var(--primary);
        }
  
        .btn.outline:hover {
          background-color: #F6F6F7;
        }
  
        .btn.ghost {
          background-color: transparent;
          color: var(--primary);
        }
  
        .btn.ghost:hover {
          background-color: #F4F4F5;
        }
  
        .btn:disabled {
          background-color: #ccc;
          color: #333;
          cursor: not-allowed;
        }
        
        .btn.full-width {
          display: block; /* Garante que o bot\xE3o seja tratado como bloco */
          width: 100%;    /* Ocupa toda a largura do container */
        }
      `,t.appendChild(o)}connectedCallback(){let t=this.shadowRoot.querySelector(".btn"),e=this.getAttribute("variant");e&&t.classList.add(e),this.hasAttribute("disabled")&&t.setAttribute("disabled","true"),this.hasAttribute("full-width")&&t.classList.add("full-width")}};customElements.define("causs-button",c);var d=class extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"}),e=`
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
      `;t.innerHTML=e;let o=document.createElement("style");o.textContent=`
        .card {
            font-family: var(--font-family);
            width: fit-content;
            max-width: 400px;
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .card-header {
          font-size: 1.25rem;
          font-weight: bold;
          color: var(--card-header-color, #111827);
        }
  
        .card-content {
          font-size: 1rem;
          color: var(--card-content-color, #4b5563);
        }
  
        .card-footer {
            text-align: right;
        }
      `,t.appendChild(o)}};customElements.define("causs-card",d);var l=class extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"}),e=`
        <div class="avatar">
          <img class="avatar-img" src="" alt="Avatar" />
        </div>
      `;t.innerHTML=e;let o=document.createElement("style");o.textContent=`
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
      `,t.appendChild(o)}connectedCallback(){let t=this.shadowRoot.querySelector(".avatar"),e=this.shadowRoot.querySelector(".avatar-img"),o=this.getAttribute("src");o&&e.setAttribute("src",o);let r=this.getAttribute("variant")||"round";t.classList.add(r);let n=this.getAttribute("size");n&&t.style.setProperty("--avatar-size",`${n}px`)}};customElements.define("causs-avatar",l);var p=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let t=`
      <style>
        :host {
          font-family: var(--font-family, Arial, sans-serif);
          display: block;
          width: 100%;
        }
      </style>
      <slot></slot>
    `;this.shadowRoot.innerHTML=t}},h=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let t=`
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
    `;this.shadowRoot.innerHTML=t}},u=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let t=`
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
    `;this.shadowRoot.innerHTML=t}},m=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let t=`
      <style>
        .breadcrumb-link {
          font-family: var(--font-family, Arial, sans-serif);
          font-weight: 500;
          text-decoration: none;
          color: #ccc;
          transition: 300ms ease all;
        }
        .breadcrumb-link:hover {
          color: var(--primary, #007bff);
        }
      </style>
      <a class="breadcrumb-link" href="${this.getAttribute("href")}">
        <slot></slot>
      </a>
    `;this.shadowRoot.innerHTML=t}},b=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let t=`
      <style>
        .breadcrumb-separator {
          user-select: none;
          font-size: 1rem;
          font-family: var(--font-family-variant, Arial, sans-serif);
          margin: 0 8px;
          color: #ccc;
        }
      </style>
      <span class="breadcrumb-separator">></span>
    `;this.shadowRoot.innerHTML=t}},v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let t=`
      <style>
        .breadcrumb-page {
          font-family: var(--font-family, Arial, sans-serif);
          font-weight: 500;
          color: var(--primary, #007bff);
        }
      </style>
      <span class="breadcrumb-page">
        <slot></slot>
      </span>
    `;this.shadowRoot.innerHTML=t}};customElements.define("causs-breadcrumb",p);customElements.define("causs-breadcrumb-list",h);customElements.define("causs-breadcrumb-item",u);customElements.define("causs-breadcrumb-link",m);customElements.define("causs-breadcrumb-separator",b);customElements.define("causs-breadcrumb-page",v);var g=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let t=this.getAttribute("variant")||"default",e=this.getAttribute("label"),o=this.hasAttribute("disabled"),r=t==="file",n=this.getAttribute("type")||"text",i=this.getAttribute("placeholder")||"",s=`
        <style>
          .input-wrapper {
            display: flex;
            flex-direction: column;
          }
  
            .input {
              padding: 8px 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              font-size: 1rem;
              width: 100%; /* Garante que os inputs ocuparam o mesmo espa\xE7o */
              box-sizing: border-box; /* Garante que o padding n\xE3o afete o tamanho total */
            }

            .input:focus {
              border-color: var(--primary);
              outline: none;
            }

            .input:disabled {
              border: none;
              background-color: #f1f1f1;
              color: #ccc;
              cursor: not-allowed;
            }
  
          .label {
            font-size: 0.875rem;
            font-weight: 500;
          }
  
          /* Estilo para o input de tipo "file" */
          .input[type="file"] {
              font-size: 1rem; /* Mesma fonte para todos os inputs */
              padding: 8px 12px; /* Mesmo padding */
              border-radius: 4px;
              width: 100%; /* Garante que o input de arquivo tenha a mesma largura */
            }
        </style>
  
        <div class="input-wrapper">
          ${e?`<label class="label">${e}</label>`:""}
          <input
            type="${n}"
            class="input ${t}"
            ${o?"disabled":""}
            placeholder="${i}"
          />
        </div>
      `;this.shadowRoot.innerHTML=s}};customElements.define("causs-input",g);var f=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let t=this.getAttribute("variant")||"primary",e=this.textContent.trim()||"Badge",o=`
        <style>
          .badge {
            padding: 6px 12px;
            border-radius: 12px;
            font-size: 0.675rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
  
          .badge.primary {
            background-color: var(--primary);
            color: white;
          }
  
          .badge.secondary {
            background-color: var(--secondary);
            color: var(--primary);
          }
  
          .badge.destructive {
            background-color: var(--red);
            color: white;
          }
  
          .badge.outline {
            background-color: transparent;
            border: 1px solid #ccc;
            color: var(--primary);
          }
        </style>
  
        <span class="badge ${t}">
          ${e}
        </span>
      `;this.shadowRoot.innerHTML=o}};customElements.define("causs-badge",f);var y=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.date=new Date}connectedCallback(){this.render()}render(){let t=this.date.getMonth(),e=this.date.getFullYear(),o=new Date(e,t+1,0).getDate(),r=new Date(e,t,1).getDay(),n="";for(let s=0;s<r;s++)n+='<div class="day empty"></div>';for(let s=1;s<=o;s++)n+=`<div class="day" data-day="${s}">${s}</div>`;let i=`
        <style>
  :host {
    display: block;
    font-family: Arial, sans-serif;
    width: 300px;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    user-select: none;
    border: 1px solid #e5e7eb;
  }

  .calendar-header {
    background-color: var(--primary);
    font-family: var(--font-family);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: var(--secondary);
  }

  .calendar-header button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    width: 32px;
    height: 32px;
    border: 1px solid #ffffff00;
    border-radius: var(--button-border-radius);
    color: var(--secondary);
    font-family: var(--font-family-variant);
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 300ms ease;
  }

  .calendar-header button:hover {
    border-color: #2F2F31;
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
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 0.85rem; /* Reduz tamanho do texto */
  }

  .day {
    cursor: pointer;
    background-color: var(--background);
    color: var(--primary);
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
    color: white;
  }

  .days-of-week div {
    font-weight: bold;
    color: #666;
  }
</style>

  
        <div class="calendar">
          <div class="calendar-header">
            <button class="prev-month">&lt;</button>
            <div class="month-year">${this.getMonthName(t)} ${e}</div>
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
            ${n}
          </div>
        </div>
      `;this.shadowRoot.innerHTML=i,this.shadowRoot.querySelector(".prev-month").addEventListener("click",()=>this.changeMonth(-1)),this.shadowRoot.querySelector(".next-month").addEventListener("click",()=>this.changeMonth(1)),this.shadowRoot.querySelectorAll(".day").forEach(s=>{s.addEventListener("click",E=>this.onDayClick(E))})}changeMonth(t){this.date.setMonth(this.date.getMonth()+t),this.render()}getMonthName(t){return["January","February","March","April","May","June","July","August","September","October","November","December"][t]}onDayClick(t){let e=t.target.getAttribute("data-day");this.shadowRoot.querySelectorAll(".day").forEach(r=>r.classList.remove("active")),t.target.classList.add("active");let o=new Date(this.date.getFullYear(),this.date.getMonth(),e);this.dispatchEvent(new CustomEvent("day-selected",{detail:{date:o},bubbles:!0,composed:!0}))}};customElements.define("causs-calendar",y);var x=class extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"}),e=`
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
      `;t.innerHTML=e;let o=document.createElement("style");o.textContent=`
        .alert {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: 8px;
          color: var(--primary);
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
          border-color: var(--red);
          color: var(--red);
        }
      `,t.appendChild(o)}connectedCallback(){let t=this.shadowRoot.querySelector(".alert"),e=this.getAttribute("variant");e&&t.classList.add(e)}};customElements.define("causs-alert",x);var w=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isOpen=!1;let t=`
      <style>
        :host {
          position: relative;
          display: inline-block;
        }

        .popover-trigger {
          cursor: pointer;
        }

        .popover-content {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) scaleY(0); /* Come\xE7a escondido e com escala 0 */
          min-width: 200px;
          background: var(--popover-bg, white);
          color: var(--popover-color, black);
          border: 1px solid var(--popover-border, #ccc);
          border-radius: 8px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          z-index: 10;
          display: block;
          opacity: 0; /* Come\xE7a invis\xEDvel */
          pointer-events: none; /* N\xE3o interage enquanto n\xE3o vis\xEDvel */
          transition: transform 0.3s ease, opacity 0.3s ease; /* Transi\xE7\xF5es suaves */
        }

        .popover-content.open {
          transform: translateX(-50%) scaleY(1); /* Quando vis\xEDvel, expande */
          opacity: 1; /* Fica vis\xEDvel */
          pointer-events: auto; /* Pode interagir quando vis\xEDvel */
        }

        .arrow {
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          background: inherit;
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
          transition: transform 0.3s ease; /* Anima\xE7\xE3o suave para a seta */
        }

        .popover-content.open .arrow {
          transform: translateX(-50%) rotate(180deg); /* Seta vira quando o popover est\xE1 aberto */
        }
      </style>
      <div class="popover-trigger">
        <slot name="trigger">Click me</slot>
      </div>
      <div class="popover-content">
        <slot name="content">Popover Content</slot>
      </div>
    `;this.shadowRoot.innerHTML=t}connectedCallback(){this.trigger=this.shadowRoot.querySelector(".popover-trigger"),this.content=this.shadowRoot.querySelector(".popover-content"),this.trigger.addEventListener("click",this.togglePopover.bind(this)),document.addEventListener("click",this.handleOutsideClick.bind(this))}disconnectedCallback(){this.trigger.removeEventListener("click",this.togglePopover),document.removeEventListener("click",this.handleOutsideClick)}togglePopover(t){t.stopPropagation(),this.isOpen=!this.isOpen,this.content.classList.toggle("open",this.isOpen)}handleOutsideClick(t){this.contains(t.target)||(this.isOpen=!1,this.content.classList.remove("open"))}};customElements.define("causs-popover",w);var k=class extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"});t.innerHTML=`
            <div class="accordion-item">
                <div class="accordion-header">
                    <slot name="header"></slot>
                    <span class="accordion-icon">+</span>
                </div>
                <div class="accordion-content">
                    <slot></slot>
                </div>
            </div>
        `;let e=document.createElement("style");e.textContent=`
            .accordion-item {
                border-bottom: 1px solid #e5e7eb;
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
                background-color: #f0f0f0;
            }
            .accordion-content {
                height: 0; /* Start with zero height */
                padding: 0 16px; /* Only horizontal padding initially */
                background-color: white;
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
                transform: rotate(45deg);
            }
        `,t.appendChild(e)}connectedCallback(){this.isOpen=!1,this.header=this.shadowRoot.querySelector(".accordion-header"),this.content=this.shadowRoot.querySelector(".accordion-content"),this.icon=this.shadowRoot.querySelector(".accordion-icon"),this.header.addEventListener("click",()=>{this.toggle()})}toggle(){this.isOpen=!this.isOpen,this.isOpen?(this.content.classList.add("open"),this.icon.classList.add("open")):(this.content.classList.remove("open"),this.icon.classList.remove("open")),this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0}))}close(){this.isOpen=!1,this.content.classList.remove("open"),this.icon.classList.remove("open")}};customElements.define("causs-accordion-item",k);var L=class extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"}),e=`
            <div class="otp-container">
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
                <input type="text" class="otp-input" maxlength="1" />
            </div>
        `;t.innerHTML=e;let o=document.createElement("style");o.textContent=`
            .otp-container {
                display: flex;
                justify-content: space-between;
                gap: 10px;
            }

            .otp-input {
                width: 40px;
                height: 40px;
                text-align: center;
                font-size: 1.5rem;
                border: 1px solid #ccc;
                transition: border-color 0.3s ease;
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
        `,t.appendChild(o),this.autoFocus()}connectedCallback(){let t=this.shadowRoot.querySelectorAll(".otp-input");t.forEach((e,o)=>{e.addEventListener("input",r=>{r.target.value.length===1&&o<t.length-1&&t[o+1].focus(),r.target.value.length===0&&o>0&&t[o-1].focus(),this.emitOTPValue()})})}emitOTPValue(){let t=Array.from(this.shadowRoot.querySelectorAll(".otp-input")).map(o=>o.value).join(""),e=new CustomEvent("otp-change",{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(e)}autoFocus(){this.shadowRoot.querySelectorAll(".otp-input")[0].focus()}};customElements.define("causs-otp",L);var M=class extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"}),e=`
            <div class="progress-container">
                <div class="progress-bar"></div>
            </div>
        `;t.innerHTML=e;let o=document.createElement("style");o.textContent=`
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
        `,t.appendChild(o)}set progress(t){let e=this.shadowRoot.querySelector(".progress-bar"),o=Math.min(Math.max(t,0),100);e.style.width=`${o}%`}get progress(){let t=this.shadowRoot.querySelector(".progress-bar");return parseFloat(t.style.width)}connectedCallback(){let t=this.getAttribute("value")||0;this.progress=t}};customElements.define("causs-progress",M);})();
