import { Injectable, NgZone }      from 'angular2/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import {Router} from 'angular2/router'

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('5s3bgLbOxRq8iT8NJ7hs5c2XlyOJqhnE', 'tttimmusgrove.auth0.com');
  refreshSubscription: any;
  user: Object;
  zoneImpl: NgZone;

  constructor(private authHttp: AuthHttp, zone: NgZone, private router: Router){
    this.zoneImpl = zone;
    this.user = JSON.parse(localStorage.getItem('profile'));
  }
  public authenticated() {
  // Check if there's an unexpired JWT
  return tokenNotExpired();
}

public login() {
  // Show the Auth0 Lock widget
  this.lock.show({}, (err, profile, token) => {
    if (err) {
      alert(err);
      return;
    }
    // If authentication is successful, save the items
    // in local storage
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('id_token', token);
    this.zoneImpl.run(() => this.user = profile);
  });
}

public logout() {
  localStorage.removeItem('profile');
  localStorage.removeItem('id_token');
  this.zoneImpl.run(() => this.user = null);
  this.router.navigate(['Home']);
}
}
