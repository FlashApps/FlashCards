System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var DevTeamComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DevTeamComponent = (function () {
                function DevTeamComponent() {
                }
                DevTeamComponent = __decorate([
                    core_1.Component({
                        selector: 'Dev-Team',
                        template: "\n    <main>\n    <div class=\"page-header\">\n      <h1>Flash Cards Dev Team</h1>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-md-6 col-lg-6\">\n          <div class=\"thumbnail\">\n            <img src=\"...\" alt=\"...\">\n            <div class=\"caption\">\n              <h3>Wes Heidiger</h3>\n              <p>...</p>\n              <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-6 col-lg-6\">\n          <div class=\"thumbnail\">\n            <img src=\"...\" alt=\"...\">\n            <div class=\"caption\">\n              <h3>Tim Musgrove</h3>\n              <p>...</p>\n              <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n            </div>\n          </div>\n        </div>\n        </div>\n        <div class=\"row\">\n        <div class=\"col-sm-6 col-md-6 col-lg-6\">\n          <div class=\"thumbnail\">\n            <img src=\"https://avatars3.githubusercontent.com/u/16106956?v=3&s=460\" alt=\"Ray Koren\">\n            <div class=\"caption\">\n              <h3>Ray Koren</h3>\n              <p>Full Stack Developer, SEO, Audio Enthusiast.</p>\n              <p><a href=\"https://github.com/rayk216\" class=\"btn btn-primary\" role=\"button\">GitHub</a> <a href=\"https://www.linkedin.com/in/raykoren\" class=\"btn btn-primary\" role=\"button\">LinkedIn</a></p>\n            </div>\n          </div>\n        </div>\n\n      <div class=\"col-sm-6 col-md-6 col-lg-6\">\n        <div class=\"thumbnail\">\n          <img src=\"...\" alt=\"...\">\n          <div class=\"caption\">\n            <h3>Bennett Joeger</h3>\n            <p>...</p>\n            <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n          </div>\n        </div>\n      </div>\n        </div>\n    </main>\n      ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DevTeamComponent);
                return DevTeamComponent;
            }());
            exports_1("DevTeamComponent", DevTeamComponent);
        }
    }
});
//# sourceMappingURL=devteam.component.js.map