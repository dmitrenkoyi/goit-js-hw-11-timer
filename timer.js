const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer{
     constructor({ targetDate, onTick }) {
         this.intervalId = null;
         this.targetDate = targetDate;
         this.onTick = onTick;
         this.start();
    }

     start() {
    const startTime = this.targetDate;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;

      if (deltaTime <= 0) {
        return;
      }

      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
    }
    
      stop() {
    clearInterval(this.intervalId);
  }   


getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
    }
}

new CountdownTimer({
    onTick: updateClockFace,
    targetDate: new Date('Jan 01, 2022'),
});


function  updateClockFace({ days, hours, mins, secs }) {
refs.days.textContent = `${days}`;
refs.hours.textContent = `${hours}`;
refs.mins.textContent = `${mins}`;
refs.secs.textContent = `${secs}`;
};