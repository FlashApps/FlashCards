System.register(['angular2/core', 'angular2/router', 'angular2/http', '../StopTimer/StopTimer'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, StopTimer_1;
    var FlashcardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (StopTimer_1_1) {
                StopTimer_1 = StopTimer_1_1;
            }],
        execute: function() {
            FlashcardComponent = (function () {
                function FlashcardComponent(params, http) {
                    this.deck = {};
                    this.highlightedIndex = 0;
                    this.http = http;
                    this.deckId = params.get("id");
                }
                FlashcardComponent.prototype.loadPage = function () {
                    var _this = this;
                    $('#secret').hide();
                    $('#stop').show();
                    $('.cardDef').click(function () {
                        $(this).addClass("highlighted");
                    });
                    var url = "https://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/sets/" + this.deckId + "?client_id=BGDhWP7Cth&whitespace=1";
                    this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
                        _this.deck = data;
                        _this.highlight(0);
                    }, function (error) { return console.log(error); });
                };
                FlashcardComponent.prototype.highlight = function (index) {
                    this.highlightedIndex = index;
                    if (this.deck.terms && this.deck.terms.length > 0) {
                        this.currentBack = this.deck.terms[index].definition;
                        if (!this.currentBack) {
                            this.currentBackImage = this.deck.terms[index].image.url;
                        }
                        this.currentFront = this.deck.terms[index].term;
                    }
                };
                FlashcardComponent.prototype.previousCard = function () {
                    if (this.deck.terms && this.deck.terms.length > 0) {
                        this.highlightedIndex--;
                        this.currentFront = this.deck.terms[this.highlightedIndex].term;
                        this.currentBack = this.deck.terms[this.highlightedIndex].definition;
                        if (!this.currentBack) {
                            this.currentBackImage = this.deck.terms[this.highlightedIndex].image.url;
                        }
                    }
                };
                FlashcardComponent.prototype.nextCard = function () {
                    if (this.deck.terms && this.deck.terms.length > 0) {
                        this.highlightedIndex++;
                        this.currentFront = this.deck.terms[this.highlightedIndex].term;
                        this.currentBack = this.deck.terms[this.highlightedIndex].definition;
                        if (!this.currentBack) {
                            this.currentBackImage = this.deck.terms[this.highlightedIndex].image.url;
                        }
                    }
                };
                FlashcardComponent.prototype.toggleFlip = function () {
                    $('.card').toggleClass("flipped");
                };
                FlashcardComponent.prototype.ngOnInit = function () {
                    this.loadPage();
                };
                FlashcardComponent = __decorate([
                    core_1.Component({
                        selector: 'flashcard',
                        directives: [StopTimer_1.StopTimer],
                        template: "\n        <main class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"row spacer\">\n\n          </div>\n        </div>\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-12 well flashCardSidebar\">\n                <h4>Cards in Deck</h4>\n                <p>Click a card to start!</p>\n                <ul>\n                  <li class=\"cardDef\" (click)=\"highlight(index)\" *ngFor=\"#card of deck.terms; #index = index\" [class.highlighted]=\"index == highlightedIndex\">{{card.term}}</li>\n                </ul>\n                </div>\n                <div class=\"col-lg-1 col-md-1 hidden-sm hidden-xs\"></div>\n                <div class=\"col-lg-8 col-md-8 col-sm-12 card well effect__click\">\n                    <div class=\"card__front\">\n                    <div class=\"row\">\n                    <div class=\"row term\">Term</div>\n                        <span class=\"card__text\">{{currentFront}}</span>\n                        </div>\n                    </div>\n                    <div class=\"card__back\">\n                    <div class=\"row\">\n                    <div class=\"row term\">Answer</div>\n                        <span *ngIf=\"currentBack\" class=\"card__text\">{{currentBack}}</span>\n                        <img *ngIf=\"!currentBack\" src=\"{{currentBackImage}}\">\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row spacer\">\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12 timerBox\">\n                <stop-timer #timer>\n                      <div class=\"timer\">\n                        <div  class=\"time\" [innerHTML]=\"timer.timeString\"></div>\n                        <div class=\"controls\">\n                          <button class=\"btn btn-outline-info\n                          \"(click)=\"timer.toggle()\">Start/Stop</button>\n                          <button class=\"btn btn btn-outline-warning\"(click)=\"timer.reset()\">Reset</button>\n                        </div>\n                      </div>\n                    </stop-timer>\n                </div>\n                <div class=\"col-sm-12 col-md-8 col-lg-8 text-center\">\n                  <button *ngIf=\"highlightedIndex>0\" (click)=\"previousCard()\" type=\"button\" class=\"btn btn-default btn-lg\">\n                  <span class=\"glyphicon glyphicon-menu-left\n                  \" aria-hidden=\"true\"></span> Previous\n                  </button>\n                  <button type=\"button\" (click)=\"toggleFlip()\" class=\"btn btn-default btn-lg\">\n                    <span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span> Flip\n                  </button>\n                  <button (click)=\"nextCard()\" type=\"button\" class=\"btn btn-default btn-lg\">\n                    <span class=\"glyphicon glyphicon-menu-right\" aria-hidden=\"true\"></span> Next\n                  </button>\n                </div>\n            </div>\n        </main>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, http_1.Http])
                ], FlashcardComponent);
                return FlashcardComponent;
            }());
            exports_1("FlashcardComponent", FlashcardComponent);
        }
    }
});
//# sourceMappingURL=flashcard.component.js.map