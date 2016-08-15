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
    var FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent() {
                }
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'my-footer',
                        template: "\n    <footer class=\"page-footer\">\n         <div class=\"container\">\n           <div class=\"row\">\n             <div class=\"col l6 s12\">\n               <h5 class=\"white-text\">About</h5>\n               <p class=\"grey-text text-lighten-4\">Flash Cards to make learning anywhere anytime a breeze!</p>\n             </div>\n             <div class=\"col l4 offset-l2 s12\">\n               <h5 class=\"white-text\">Links</h5>\n               <ul>\n                 <li><a class=\"grey-text text-lighten-3\" href=\"https://github.com/FlashApps\" target='blank'><i class=\"fa fa-github\" aria-hidden=\"true\"></i> GitHub </a></li>\n                 <li><a class=\"grey-text text-lighten-3\" href=\"#!\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i> Dev Team</a></li>\n               </ul>\n             </div>\n           </div>\n         </div>\n         <div class=\"footer-copyright\">\n           <div class=\"container\">\n           \u00A9 2016 Flash Apps Group\n           </div>\n         </div>\n       </footer>"
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