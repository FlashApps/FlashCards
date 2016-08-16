System.register(['@angular/router', './SearchResults.component', './landing.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, SearchResults_component_1, landing_component_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (SearchResults_component_1_1) {
                SearchResults_component_1 = SearchResults_component_1_1;
            },
            function (landing_component_1_1) {
                landing_component_1 = landing_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'home', component: landing_component_1.LandingComponent },
                {
                    path: 'search',
                    component: SearchResults_component_1.SearchResultsComponent,
                }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map