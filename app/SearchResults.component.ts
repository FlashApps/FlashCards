import {Component} from 'angular2/core';
@Component ({
  selector: 'SearchResults',

  template:`
  <div class="row">
       <div class="col s12 m7">
         <div class="card">
           <div class="card-image">
             <img src="http://materializecss.com/images/sample-1.jpg">
             <span class="card-title">Card Title</span>
           </div>
           <div class="card-content">
             <p>I am a very simple card. I am good at containing small bits of information.
             I am convenient because I require little markup to use effectively.</p>
           </div>
           <div class="card-action">
             <a href="#">This is a link</a>
           </div>

         </div>
       </div>
       <div class="col s12 m5" *ngFor="#flashcard of flashcards">{{flashcard}}</div>
     </div>
  `
})

export class SearchResultsComponent {
    flashcards = ["Card1", "Card2", "Card3"];
}
