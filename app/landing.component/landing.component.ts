import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'landing-page',
    template:
    `
    <main>
        <div class="row landingImage">
            <div class="col-md-4 landingText">
                <h2>Learn Anything</h2>
                <h3>AS NATURALLY AS LEARNING TO WALK</h3>
            </div>
            <div class="col-lg-8">

            <img src="https://adoptresources.files.wordpress.com/2010/09/learning-istock_000011456468.jpg" />
        </div>
        </div>
        <a [routerLink]="['Search']"> <button class="btn btn-lg btn-primary" >GET STARTED</button></a>

    </main>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class LandingComponent { }
