System.register(['angular2/core', 'angular2/router', '../header.component/header.component', '../footer.component/footer.component', '../SearchResults.component/SearchResults.component', '../landing.component/landing.component', '../flashcard.component/flashcard.component', '../devteam.component/devteam.component'], function(exports_1, context_1) {
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
    var core_1, router_1, header_component_1, footer_component_1, SearchResults_component_1, landing_component_1, flashcard_component_1, devteam_component_1;
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
            },
            function (flashcard_component_1_1) {
                flashcard_component_1 = flashcard_component_1_1;
            },
            function (devteam_component_1_1) {
                devteam_component_1 = devteam_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: landing_component_1.LandingComponent },
                        { path: '/search', name: 'Search', component: SearchResults_component_1.SearchResultsComponent },
                        { path: '/study/:id', name: 'FlashCard', component: flashcard_component_1.FlashcardComponent },
                        { path: '/devteam', name: 'DevTeam', component: devteam_component_1.DevTeamComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
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