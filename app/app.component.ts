import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import { Routes, RouterModule } from '@angular/router';


@Component({
    selector: 'my-app',
    template: '<my-header></my-header><router-outlet></router-outlet><my-footer></my-footer>'
    directives: [HeaderComponent, FooterComponent]
})
export class AppComponent { }
