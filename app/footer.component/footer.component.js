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
    var FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent() {
                }
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'my-footer',
                        template: "\n<div class=\"mastfoot\">\n  <div class=\"inner\">\n    <footer class=\"page-footer\">\n\n      <div class=\"col l4 offset-l2 s12\">\n         <a class=\"grey-text text-lighten-3\" href=\"https://github.com/FlashApps\" target='blank'><i class=\"fa fa-github\" aria-hidden=\"true\"></i> GitHub </a>\n         <a class=\"grey-text text-lighten-3\" href=\"#!\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i> Dev Team</a>\n      </div>\n\n      <small class=\"footer-copyright\">\n       \u00A9 2016 Flash Cards Group\n      </small>\n\n    </footer>\n  </div>\n</div>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            }());
            exports_1("FooterComponent", FooterComponent);
        }
    }
});
//# sourceMappingURL=footer.component.js.map