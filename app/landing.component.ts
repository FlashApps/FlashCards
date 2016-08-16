import {Component} from 'angular2/core';
import {HTTPTestComponent} from './http-test.component';
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
   <http-test></http-test>

    </main>
    `,
    directives: [HTTPTestComponent]
})
export class LandingComponent { }
