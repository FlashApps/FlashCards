import {Component} from 'angular2/core'

@Component({
  selector: "stop-timer",
  template:
  `<div #contentWrap><ng-content></ng-content></div>
  <div class="timer" *ngIf="contentWrap.childNodes.length === 0">
    <div class="time"> {{ timeString }} </div>
    <div class="controls">
      <button (click)="toggle()">Toggle</button>
      <button (click)="reset()">Reset</button>
    </div>
  </div>`
})
export class StopTimer {
  interval: number;
  intervalDuration: number = 10;
  time: number = 0;
  timeString: string;

  constructor() {
    this.timeString = this.formatTime(this.time);
  }

  toggle() {
    if (this.interval) {
      this.interval = clearInterval(this.interval);
    } else { // Otherwise, if the timer is stopped, start it.
      this.interval = setInterval(_ => this.increment(), this.intervalDuration);
    }
  }

  reset() {
    this.time = 0;
    this.timeString = this.formatTime(this.time);
  }

  increment() {
    this.time += this.intervalDuration;
    this.timeString = this.formatTime(this.time);
  }

  formatTime(timeInMs: number): string {
    let milliseconds = this.padTimeSlot( timeInMs % 1000, 3 ),
        seconds = this.padTimeSlot(Math.floor( timeInMs / 1000 ) % 60, 2),
        minutes = this.padTimeSlot(Math.floor( timeInMs / 60000 ) % 60, 2);

    return `${minutes}:${seconds}.${milliseconds}`;
  }

  padTimeSlot(value: number, length: number): string {
      return ("00" + value).slice(-length);
  }

}
