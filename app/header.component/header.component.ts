import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Auth} from '../auth.service/auth.service';

@Component({
    selector: 'my-header',
    template: `
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" [routerLink]="['Home']"><h3 class="navbar-header"><span class="glyphicon glyphicon-flash" aria-hidden="true"></span> Flash</h3></a>
        </div>
        <ul class="nav navbar-nav">
          <li><a (click)="auth.login()">Log In</a></li>
          <li><a (click)="auth.logout()">Log Out</a></li>
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
