import { Injectable }      from 'angular2/core';
// import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('5s3bgLbOxRq8iT8NJ7hs5c2XlyOJqhnE', 'tttimmusgrove.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show((error: string, profile: Object, id_token: string) => {
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

  // public authenticated() {
  //   // Check if there's an unexpired JWT
  //   // This searches for an item in localStorage with key == 'id_token'
  //   return tokenNotExpired();
  // };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    // this.authenticated();
  };
}
