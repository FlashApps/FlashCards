import {Component} from 'angular2/core';
import {HTTPTestService} from './http-test.service';
import {ActivatedRoute} from '@angular/router';


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
  construtor(private route: ActivatedRoute){

  }
  ngOnInit() {
    console.log(this)
      // .map(params => params['query'])
      // .subscribe((query) => {
      //   this.HTTPTestService
      //     .getContact(query)
      //     .subscribe(contact => this.contact = contact);
    });

}
