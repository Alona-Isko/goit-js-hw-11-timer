class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.intervalId = null;
    }
    
  start() {
    this.intervalId = setInterval(() => {
        const time = this.targetDate - new Date();
        if (time > 0) {
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);
        
            this.selector.querySelector('[data-value="secs"]').textContent = this.pad(secs);
            this.selector.querySelector('[data-value="mins"]').textContent = this.pad(mins);
            this.selector.querySelector('[data-value="hours"]').textContent = this.pad(hours);
            this.selector.querySelector('[data-value="days"]').textContent = this.pad(days);
        }
        else {
            clearInterval(this.intervalId);
        }
    }, 1000);
    }
    pad(value) {
        return String(value).padStart(2, '0');
    }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan-01-2022'),
});

timer.start();
