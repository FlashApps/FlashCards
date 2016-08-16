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
    var FlashcardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FlashcardComponent = (function () {
                function FlashcardComponent() {
                }
                FlashcardComponent = __decorate([
                    core_1.Component({
                        selector: 'flashcard',
                        template: "\n        <main class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <a class=\"btn btn-default\" href=\"#\" role=\"button\">Practice</a>\n                </div>\n                <div class=\"col-md-4\">\n                    <a class=\"btn btn-default\" href=\"#\" role=\"button\">Study</a>\n                </div>\n                <div class=\"col-md-4\">\n                    <a class=\"btn btn-default\" href=\"#\" role=\"button\">Test</a>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-8\"></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\"></div>\n            </div>\n        </main>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlashcardComponent);
                return FlashcardComponent;
            }());
            exports_1("FlashcardComponent", FlashcardComponent);
        }
    }
});
//# sourceMappingURL=footer.component.js.map