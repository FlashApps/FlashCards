import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Auth} from '../auth.service/auth.service';

@Component({
    selector: 'my-header',
    template: `
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" [routerLink]="['Home']"><h4 class="navbar-header"><i class="fa fa-book" aria-hidden="true"></i>Let's Learn</h4></a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a [routerLink]="['Home']">Home</a></li>
          <li><a [routerLink]="['Search']">Search</a></li>
          <li><a (click)="auth.login()">Log In</a></li>
        </ul>
      </div>
      </nav>
      `,
  directives: [ROUTER_DIRECTIVES],
  providers: [Auth]
})
export class HeaderComponent {
    constructor(private auth: Auth){}
}
