import {Component} from 'angular2/core';

@Component({
    selector: 'landing-page',
    template:
    `
    <main>
        <div class="landingImage">
            <div class="landingText">
                <h2>Learn Anything</h2><br/>
                <h3> AS NATURALLY AS LEARNING TO WALK</h3>
            </div>
            <img src="https://adoptresources.files.wordpress.com/2010/09/learning-istock_000011456468.jpg" />
        </div>
        <div class="landingSearch">
            <h2>SEARCH FOR ANYTHING TO STUDY</h2>
            <div class='search'>
                <i class="fa fa-search" aria-hidden="true"> </i>
                <input type="text" placeholder="Topic" >
            </div>
            <h3>IT'S JUST THAT EASY!</h3>
        </div>

    </main>
    `
})
export class LandingComponent { }
