import {Component} from 'angular2/core';

@Component({
    selector: 'my-header',
    template: `
    <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Flash</a>
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
  </nav>`
})
export class HeaderComponent { }
