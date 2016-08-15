import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {LandingComponent} from './landing.component';
import {FooterComponent} from './footer.component';

@Component({
    selector: 'my-app',
    template: '<my-header></my-header><landing-page></landing-page><my-footer></my-footer>',
    directives: [HeaderComponent, FooterComponent, LandingComponent]
})
export class AppComponent { }
