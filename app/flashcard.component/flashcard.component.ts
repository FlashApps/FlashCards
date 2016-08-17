import {Component} from 'angular2/core';

@Component({
    selector: 'flashcard',
    template: `
        <main class="container">
            <div class="row flashCardButtonContainer centered">
                <div class="col-lg-12 col-md-12">
                <a class="btn btn-info btn-lg btn-block" href="#" role="button">Practice</a>
                <a class="btn btn-outline btn-lg btn-block" href="#" role="button">Study</a>
                    <a class="btn btn-info btn-lg btn-block" href="#" role="button">Test</a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-3 hidden-sm hidden-xs well flashCardSidebar"></div>
                <div class="col-lg-1 col-md-1 hidden-sm hidden-xs"></div>
                <div class="col-lg-8 col-md-8 well flashCardContainer">
                    <p>Click to Flip!</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 col-md-4"></div>
                <div class="col-sm-8 col-md-8 well text-center">
                    <i class="fa fa-chevron-circle-left navigate"></i>
                    <i class="fa fa-play navigate"></i>
                    <i class="fa fa-chevron-circle-right navigate"></i>
                </div>

            </div>

        </main>
    `
})
export class FlashcardComponent { }
