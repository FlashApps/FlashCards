import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';

@Component({
    selector: 'my-app',
    template: '<my-header></my-header><my-footer></my-footer>'
    directives: [HeaderComponent, FooterComponent]
})
export class AppComponent { }
