System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var StopTimer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StopTimer = (function () {
                function StopTimer() {
                    this.intervalDuration = 10;
                    this.time = 0;
                    this.timeString = this.formatTime(this.time);
                }
                StopTimer.prototype.toggle = function () {
                    var _this = this;
                    if (this.interval) {
                        this.interval = clearInterval(this.interval);
                    }
                    else {
                        this.interval = setInterval(function (_) { return _this.increment(); }, this.intervalDuration);
                    }
                };
                StopTimer.prototype.reset = function () {
                    this.time = 0;
                    this.timeString = this.formatTime(this.time);
                };
                StopTimer.prototype.increment = function () {
                    this.time += this.intervalDuration;
                    this.timeString = this.formatTime(this.time);
                };
                StopTimer.prototype.formatTime = function (timeInMs) {
                    var milliseconds = this.padTimeSlot(timeInMs % 1000, 3), seconds = this.padTimeSlot(Math.floor(timeInMs / 1000) % 60, 2), minutes = this.padTimeSlot(Math.floor(timeInMs / 60000) % 60, 2);
                    return minutes + ":" + seconds + "." + milliseconds;
                };
                StopTimer.prototype.padTimeSlot = function (value, length) {
                    return ("00" + value).slice(-length);
                };
                StopTimer = __decorate([
                    core_1.Component({
                        selector: "stop-timer",
                        template: "<div #contentWrap><ng-content></ng-content></div>\n  <div class=\"timer\" *ngIf=\"contentWrap.childNodes.length === 0\">\n    <div class=\"time\"> {{ timeString }} </div>\n    <div class=\"controls\">\n      <button (click)=\"toggle()\">Toggle</button>\n      <button (click)=\"reset()\">Reset</button>\n    </div>\n  </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], StopTimer);
                return StopTimer;
            }());
            exports_1("StopTimer", StopTimer);
        }
    }
});
//# sourceMappingURL=StopTimer.js.map