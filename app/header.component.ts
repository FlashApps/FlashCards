import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-header',
    template: `
      <div class="masthead clearfix">
        <div class="inner">
          <h3 class="masthead-brand"><span class="glyphicon glyphicon-flash" aria-hidden="true"></span> Flash</h3>
          <nav>
            <ul class="nav masthead-nav">
              <li class="active"><a href="#">Register</a></li>
              <li><a href="#">Sign In</a></li>
            </ul>
          </nav>
        </div>
      </div>`,
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent { }
