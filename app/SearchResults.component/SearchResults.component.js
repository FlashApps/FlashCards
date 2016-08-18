/// <reference path="../../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Rx', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, Rx_1, router_1;
    var SearchResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SearchResultsComponent = (function () {
                function SearchResultsComponent() {
                    this.decks = [];
                    this.decks = [];
                }
                SearchResultsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    $(document).ready(function () {
                        var keyups = Rx_1.Observable.fromEvent($("#searchForm"), "keyup")
                            .map(function (e) { return e.target.value; })
                            .filter(function (text) { return text.length >= 2; })
                            .debounceTime(200)
                            .distinctUntilChanged()
                            .flatMap(function (searchTerm) {
                            var url = "https://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/search/sets?client_id=BGDhWP7Cth&whitespace=1&q=" + searchTerm;
                            var promise = $.getJSON(url);
                            console.log(promise);
                            return Rx_1.Observable.fromPromise(promise);
                        });
                        keyups.subscribe(function (data) {
                            _this.decks = data.sets;
                        });
                    });
                };
                SearchResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'SearchResults',
                        template: "\n  <main>\n     <form class=\"form-inline\" >\n  \u00A0 \u00A0<div class=\"form-group\">\n  <div class=\"row\">\n\u00A0 \u00A0 \u00A0 <h1>Start Typing to Search</h1>\n</div>\n<div class=\"row\">\n\n\u00A0 \u00A0 \u00A0 <input type=\"text\" class=\"form-control\" id=\"searchForm\" placeholder=\"Search\">\n\u00A0 \u00A0 </div></div>\n\u00A0 </form>\n\n <div class=\"row\">\n <h3 *ngIf=\"decks[0]\">Available Flashcard Decks</h3>\n\u00A0   <div class=\"list-group\">\n\u00A0 \u00A0     <p *ngFor=\"#deck of decks\"><a class=\"list-group-item list-group-item-action\"  [routerLink]=\"['FlashCard', {id: deck.id}]\"><span><strong>{{deck.title}}</strong></span> <span>{{deck.description}}</span> <span>{{deck.term_count}} cards</span></a></p>\n\u00A0   </div>\n\n\u00A0</div>\n\u00A0</main>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchResultsComponent);
                return SearchResultsComponent;
            }());
            exports_1("SearchResultsComponent", SearchResultsComponent);
        }
    }
});
//# sourceMappingURL=SearchResults.component.js.map