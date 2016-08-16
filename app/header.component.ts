import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-header',
    template: `
    <nav>
    <div class="nav-wrapper">
      <a [routerLink]="['Landing']" class="brand-logo">Flash</a>
      <a href="#!" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Register</a></li>
        <li><a href="#">Sign In</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
      <li><a href="#">Register</a></li>
        <li><a href="#">Sign In</a></li>
      </ul>
    </div>
  </nav>`,
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent { }
