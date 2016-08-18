System.register(['angular2/core', 'angular2/router', '../auth.service/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(auth) {
                    this.auth = auth;
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'my-header',
                        template: "\n    <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" [routerLink]=\"['Home']\"><h3 class=\"navbar-header\"><span class=\"glyphicon glyphicon-flash\" aria-hidden=\"true\"></span> Flash</h3></a>\n        </div>\n        <ul class=\"nav navbar-nav\">\n          <li><a (click)=\"auth.login()\">Log In</a></li>\n          <li><a (click)=\"auth.logout()\">Log Out</a></li>\n        </ul>\n      </div>\n      </nav>\n      ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [auth_service_1.Auth]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.Auth])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map