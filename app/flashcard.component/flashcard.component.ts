import {Component} from 'angular2/core';

@Component({
    selector: 'flashcard',
    template: `
        <main>
            <div class="row">
                <div class="col-lg-3 col-md-3 hidden-sm hidden-xs well flashCardSidebar"></div>
                <div class="col-lg-1 col-md-1 hidden-sm hidden-xs"></div>
                <div class="col-lg-8 col-md-8 well flashCardContainer">
                    <p>Click to Flip!</p>
                </div>
            </div>
            <div class="row">
               <div class="col-lg-4 col-md-4 hidden-sm hidden-xs"></div>
               <div class="col-sm-8 col-md-8 text-center">
                 <button type="button" class="btn btn-default btn-lg">
                 <span class="glyphicon glyphicon-menu-left
                 " aria-hidden="true"></span> Last
                 </button>
                 <button type="button" class="btn btn-default btn-lg">
                   <span class="glyphicon glyphicon-play" aria-hidden="true"></span> Flip
                 </button>
                 <button type="button" class="btn btn-default btn-lg">
                   <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span> Next
                 </button>
               </div>
           </div>

        </main>
    `
})
export class FlashcardComponent { }
