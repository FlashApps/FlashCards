import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';

@Component({
    selector: 'my-app',
    template: '<my-header></my-header>'
    directives: [HeaderComponent]
})
export class AppComponent { }
