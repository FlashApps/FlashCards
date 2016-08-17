<<<<<<< HEAD:app/app.component/app.component.js
System.register(['angular2/core', 'angular2/router', '../header.component/header.component', '../footer.component/footer.component', '../SearchResults.component/SearchResults.component', '../landing.component/landing.component'], function(exports_1, context_1) {
=======
System.register(['angular2/core', 'angular2/router', './header.component', './footer.component', './SearchResults.component', './landing.component', './http-test.component', './flashcard.component'], function(exports_1, context_1) {
>>>>>>> bfd150f28e1e7ea948208c57eb7a72629fcd0030:app/app.component.js
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
<<<<<<< HEAD:app/app.component/app.component.js
    var core_1, router_1, header_component_1, footer_component_1, SearchResults_component_1, landing_component_1;
=======
    var core_1, router_1, header_component_1, footer_component_1, SearchResults_component_1, landing_component_1, http_test_component_1, flashcard_component_1;
>>>>>>> bfd150f28e1e7ea948208c57eb7a72629fcd0030:app/app.component.js
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (SearchResults_component_1_1) {
                SearchResults_component_1 = SearchResults_component_1_1;
            },
            function (landing_component_1_1) {
                landing_component_1 = landing_component_1_1;
<<<<<<< HEAD:app/app.component/app.component.js
=======
            },
            function (http_test_component_1_1) {
                http_test_component_1 = http_test_component_1_1;
            },
            function (flashcard_component_1_1) {
                flashcard_component_1 = flashcard_component_1_1;
>>>>>>> bfd150f28e1e7ea948208c57eb7a72629fcd0030:app/app.component.js
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
<<<<<<< HEAD:app/app.component/app.component.js
                        { path: '/', name: 'Home', component: landing_component_1.LandingComponent },
                        { path: '/search', name: 'Search', component: SearchResults_component_1.SearchResultsComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
=======
                        { path: '/', name: 'Landing', component: landing_component_1.LandingComponent },
                        { path: '/search/:query', name: 'Search', component: SearchResults_component_1.SearchResultsComponent },
                        { path: '/flashcards', name: 'Flashcards', component: flashcard_component_1.FlashcardComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Landing'] }
>>>>>>> bfd150f28e1e7ea948208c57eb7a72629fcd0030:app/app.component.js
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "<my-header></my-header><router-outlet></router-outlet><my-footer></my-footer>",
                        directives: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map