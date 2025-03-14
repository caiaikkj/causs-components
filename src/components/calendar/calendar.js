class Calendar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.date = new Date(); // Data atual
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const currentMonth = this.date.getMonth();
      const currentYear = this.date.getFullYear();
  
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  
      let daysHTML = '';
  
      // Adiciona espaços vazios para os dias antes do início do mês
      for (let i = 0; i < firstDay; i++) {
        daysHTML += `<div class="day empty"></div>`;
      }
  
      // Adiciona os dias do mês
      for (let i = 1; i <= daysInMonth; i++) {
        daysHTML += `<div class="day" data-day="${i}">${i}</div>`;
      }
  
      const calendarHTML = `
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
    gap: 2px; /* Reduz o espaço entre as células */
    padding: 8px;
  }

  .day,
  .days-of-week div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px; /* Menor padding interno */
    height: 32px; /* Reduz altura das células */
    width: 100%; /* Automático conforme o grid */
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
            <div class="month-year">${this.getMonthName(currentMonth)} ${currentYear}</div>
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
            ${daysHTML}
          </div>
        </div>
      `;
  
      this.shadowRoot.innerHTML = calendarHTML;
  
      // Eventos
      this.shadowRoot
        .querySelector('.prev-month')
        .addEventListener('click', () => this.changeMonth(-1));
      this.shadowRoot
        .querySelector('.next-month')
        .addEventListener('click', () => this.changeMonth(1));
      this.shadowRoot.querySelectorAll('.day').forEach((day) => {
        day.addEventListener('click', (e) => this.onDayClick(e));
      });
    }
  
    changeMonth(offset) {
      this.date.setMonth(this.date.getMonth() + offset);
      this.render();
    }
  
    getMonthName(monthIndex) {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      return monthNames[monthIndex];
    }
  
    onDayClick(event) {
      const selectedDay = event.target.getAttribute('data-day');
      this.shadowRoot
        .querySelectorAll('.day')
        .forEach((day) => day.classList.remove('active'));
      event.target.classList.add('active');
  
      const selectedDate = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        selectedDay
      );
  
      // Dispara um evento customizado
      this.dispatchEvent(
        new CustomEvent('day-selected', {
          detail: { date: selectedDate },
          bubbles: true,
          composed: true,
        })
      );
    }
  }
  
  customElements.define('causs-calendar', Calendar);
  