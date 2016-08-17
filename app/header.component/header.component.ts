import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Auth} from '../auth.service/auth.service';

@Component({
    selector: 'my-header',
    template: `
      <div class="masthead clearfix">
        <div class="inner">
          <a [routerLink]="['Home']"><h3 class="masthead-brand"><span class="glyphicon glyphicon-flash" aria-hidden="true"></span> Flash</h3></a>
          <nav>
            <ul class="nav masthead-nav">
              <li class="active"><button class="btn btn-primary btn-margin" (click)="auth.login()">Log In</button></li>
              <li><button class="btn btn-primary btn-margin" (click)="auth.logout()">Log Out</button></li>
            </ul>
          </nav>
        </div>
      </div>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [Auth]
})
export class HeaderComponent {
    constructor(private auth: Auth){}
}
