import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {LandingComponent} from './landing.component';

@Component({
    selector: 'my-app',
    template: '<my-header></my-header><landing-page></landing-page>',
    directives: [HeaderComponent, LandingComponent]
})
export class AppComponent { }
