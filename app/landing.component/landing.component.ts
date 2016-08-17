import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'landing-page',
    template:
    `
    <main>
        <div class="landingImage">
            <div class="landingText">
                <h2>Learn Anything</h2>
                <h3>AS NATURALLY AS LEARNING TO WALK</h3>
            </div>
            <img src="https://adoptresources.files.wordpress.com/2010/09/learning-istock_000011456468.jpg" />
        </div>
        <a [routerLink]="['Search']">GET STARTED</a>

    </main>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class LandingComponent { }
