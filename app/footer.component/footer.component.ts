import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-footer',
    template: `
<div class="mastfoot">
  <div class="inner">
    <footer class="page-footer">

      <div class="col l4 offset-l2 s12">
         <a class="grey-text text-lighten-3" href="https://github.com/FlashApps" target='blank'><i class="fa fa-github" aria-hidden="true"></i> GitHub </a>
         <a class="grey-text text-lighten-3" href="#!"><i class="fa fa-star" aria-hidden="true"></i> Dev Team</a>
      </div>

      <small class="footer-copyright">
       © 2016 Flash Cards Group
      </small>

    </footer>
  </div>
</div>`,
       directives: [ROUTER_DIRECTIVES]
})
export class FooterComponent { }
