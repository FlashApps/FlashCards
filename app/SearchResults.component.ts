import {Component} from 'angular2/core';
import {HTTPTestService} from './http-test.service';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'SearchResults',
    template: `
<main>
  <div class="row">
  <ul>
   <div class="list-group">
     <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in </a>
   </div>
       <div class="list-group col-sm-12" *ngFor="#flashcard of flashcards">{{flashcard}}</div>
    </ul>
  </div>
  </main>
  `
})
export class SearchResultsComponent {

    }
