System.register(['angular2/core', './http-test.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, http_test_service_1, router_1;
    var HTTPTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HTTPTestComponent = (function () {
                function HTTPTestComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HTTPTestComponent.prototype.onTestGet = function () {
                    this._httpService.getDeck()
                        .subscribe(function (data) {
                        this.getData = JSON.stringify(data);
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log("finished"); });
                };
                HTTPTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n  <form class=\"form-inline\" >\n\u00A0 \u00A0   <div class=\"form-group\">\n\u00A0 \u00A0 \u00A0 \u00A0<label for=\"searchForm\">Search</label>\n\u00A0 \u00A0 \u00A0 \u00A0<input [(ngModel)]=\"query\" type=\"text\" class=\"form-control\" id=\"searchForm\" placeholder=\"Search\">\n\u00A0 \u00A0 \u00A0</div>\n\u00A0 \u00A0 \u00A0<a [routerLink] = \"['Search', {query: query}]\"><button  type=\"submit\" class=\"btn btn-primary\">Search</button></a>\n\u00A0 \u00A0</form>\n  ",
                        providers: [http_test_service_1.HTTPTestService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], HTTPTestComponent);
                return HTTPTestComponent;
            }());
            exports_1("HTTPTestComponent", HTTPTestComponent);
        }
    }
});
//# sourceMappingURL=http-test.component.js.map