System.register(['angular2/core', './http-test.component'], function(exports_1, context_1) {
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
    var core_1, http_test_component_1;
    var LandingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_component_1_1) {
                http_test_component_1 = http_test_component_1_1;
            }],
        execute: function() {
            LandingComponent = (function () {
                function LandingComponent() {
                }
                LandingComponent = __decorate([
                    core_1.Component({
                        selector: 'landing-page',
                        template: "\n    <main>\n        <div class=\"landingImage\">\n            <div class=\"landingText\">\n                <h2>Learn Anything</h2>\n                <h3>AS NATURALLY AS LEARNING TO WALK</h3>\n            </div>\n            <img src=\"https://adoptresources.files.wordpress.com/2010/09/learning-istock_000011456468.jpg\" />\n        </div>\n   <http-test></http-test>\n\n    </main>\n    ",
                        directives: [http_test_component_1.HTTPTestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LandingComponent);
                return LandingComponent;
            }());
            exports_1("LandingComponent", LandingComponent);
        }
    }
});
//# sourceMappingURL=landing.component.js.map