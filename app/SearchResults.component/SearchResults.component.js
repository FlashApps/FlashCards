/// <reference path="../../typings/tsd.d.ts" />
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
    var SearchResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchResultsComponent = (function () {
                function SearchResultsComponent() {
                    $('#mySearch').keyup(function (e) {
                        e.preventDefault();
                        console.log("BABABABANANNA");
                    });
                }
                SearchResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'SearchResults',
<<<<<<< HEAD:app/SearchResults.component/SearchResults.component.js
                        template: "\n  <div class=\"row\">\n       <div class=\"col s12 m7\">\n         <div class=\"card\">\n           <div class=\"card-image\">\n\n             <span class=\"card-title\">Card Title</span>\n           </div>\n           <div class=\"card-content\">\n             <p>I am a very simple card. I am good at containing small bits of information.\n             I am convenient because I require little markup to use effectively.</p>\n           </div>\n           <div class=\"card-action\">\n             <a href=\"#\">This is a link</a>\n           </div>\n\n         </div>\n       </div>\n       <div>\n\n       </div>\n     </div>\n     <input type=\"text\" id=\"mySearch\" class=\"form-control\">\n  "
=======
                        template: "\n<main>\n  <div class=\"row\">\n  <ul>\n   <div class=\"list-group\">\n     <a href=\"#\" class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in </a>\n   </div>\n       <div class=\"list-group col-sm-12\" *ngFor=\"#flashcard of flashcards\">{{flashcard}}</div>\n    </ul>\n  </div>\n  </main>\n  "
>>>>>>> bfd150f28e1e7ea948208c57eb7a72629fcd0030:app/SearchResults.component.js
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchResultsComponent);
                return SearchResultsComponent;
            }());
            exports_1("SearchResultsComponent", SearchResultsComponent);
        }
    }
});
// }
//# sourceMappingURL=SearchResults.component.js.map