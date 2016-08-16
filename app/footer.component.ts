import {Component} from 'angular2/core';

@Component({
    selector: 'flashcard',
    template: `
        <main class="container">
            <div class="row">
                <div class="col-md-4">
                    <a class="btn btn-default" href="#" role="button">Practice</a>
                </div>
                <div class="col-md-4">
                    <a class="btn btn-default" href="#" role="button">Study</a>
                </div>
                <div class="col-md-4">
                    <a class="btn btn-default" href="#" role="button">Test</a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-8"></div>
            </div>
            <div class="row">
                <div class="col-md-12"></div>
            </div>
        </main>
    `
})
export class FlashcardComponent { }
