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
<<<<<<< HEAD:app/header.component/header.component.js
                        template: "\n      <div class=\"masthead clearfix\">\n        <div class=\"inner\">\n          <a [routerLink]=\"['Home']\"><h3 class=\"masthead-brand\"><span class=\"glyphicon glyphicon-flash\" aria-hidden=\"true\"></span> Flash</h3></a>\n          <nav>\n            <ul class=\"nav masthead-nav\">\n              <li class=\"active\"><button class=\"btn btn-primary btn-margin\" (click)=\"auth.login()\">Log In</button></li>\n              <li><button class=\"btn btn-primary btn-margin\" (click)=\"auth.logout()\">Log Out</button></li>\n            </ul>\n          </nav>\n        </div>\n      </div>",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [auth_service_1.Auth]
=======
                        template: "\n      <div class=\"masthead clearfix\">\n        <div class=\"inner\">\n          <a href=\"/\"><h3 class=\"masthead-brand\"><span class=\"glyphicon glyphicon-flash\" aria-hidden=\"true\"></span> Flash</h3></a>\n          <nav>\n            <ul class=\"nav masthead-nav\">\n              <li class=\"active\"><a href=\"#\">Register</a></li>\n              <li><a href=\"#\">Sign In</a></li>\n            </ul>\n          </nav>\n        </div>\n      </div>",
                        directives: [router_1.ROUTER_DIRECTIVES]
>>>>>>> bfd150f28e1e7ea948208c57eb7a72629fcd0030:app/header.component.js
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