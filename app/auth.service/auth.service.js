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
    var Auth;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Auth = (function () {
                function Auth() {
                    // Configure Auth0
                    this.lock = new Auth0Lock('5s3bgLbOxRq8iT8NJ7hs5c2XlyOJqhnE', 'tttimmusgrove.auth0.com', {});
                    // Add callback for lock `authenticated` event
                    this.lock.on("authenticated", function (authResult) {
                        localStorage.setItem('id_token', authResult.idToken);
                    });
                }
                Auth.prototype.login = function () {
                    // Call the show method to display the widget.
                    this.lock.show(function (error, profile, id_token) {
                        if (error) {
                            console.log(error);
                        }
                        // We get a profile object for the user from Auth0
                        localStorage.setItem('profile', JSON.stringify(profile));
                        // We also get the user's JWT
                        localStorage.setItem('id_token', id_token);
                    });
                    // this.authenticated();
                };
                ;
                // public authenticated() {
                //   // Check if there's an unexpired JWT
                //   // This searches for an item in localStorage with key == 'id_token'
                //   return tokenNotExpired();
                // };
                Auth.prototype.logout = function () {
                    // Remove token from localStorage
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    // this.authenticated();
                };
                ;
                Auth = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Auth);
                return Auth;
            }());
            exports_1("Auth", Auth);
        }
    }
});
//# sourceMappingURL=auth.service.js.map