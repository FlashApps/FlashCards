/// <reference path="../../typings/tsd.d.ts" />

import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'SearchResults',

    template: `
  <main>
     <form class="form-inline" >
     <div class="form-group">
      <label for="searchForm">Search</label>
      <input type="text" class="form-control" id="searchForm" placeholder="Search">
    </div>
    <button id="mySearch" type="submit" class="btn btn-primary">Search</button>
  </form>

 <div class="row">
 <h3 *ngIf="decks[0]">Available Flashcard Decks</h3>
 <ul>
    <div class="list-group">
        <p *ngFor="#deck of decks"><a class="list-group-item list-group-item-action"  [routerLink]="['FlashCard', {id: deck.id}]"><strong>{{deck.title}}</strong> - Card Count: {{deck.term_count}}</a></p>
    </div>
 </ul>
 </div>
 </main>
  `,
    directives: [ROUTER_DIRECTIVES]
})

export class SearchResultsComponent implements OnInit {

    public decks = [];

    constructor() {
        this.decks = [];
    }


    ngOnInit() {

        $(document).ready(() => {
            var keyups = Observable.fromEvent($("#searchForm"), "keyup")
                .map(e => e.target.value)
                .filter(text => text.length >= 3)
                .debounceTime(400)
                .distinctUntilChanged()
                .flatMap(searchTerm => {
                    var url = "http://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/search/sets?client_id=BGDhWP7Cth&whitespace=1&q=" + searchTerm;
                    var promise = $.getJSON(url);
                    return Observable.fromPromise(promise);
                });

                keyups.subscribe(data => {
                    this.decks = data.sets;
                    console.log(data)
                })
        });
    }




}
//    constructor(){
//      $(document).ready(function(){
//         var keyups = Observable.fromEvent($("#mySearch"), "keyup")
//           .map(e => e.target.value)
//           // .filter(text => text.length >= 3)
//           // .debounceTime(400)
//           .distinctUntilChanged()
//           .flatMap(searchTerm => {
//               console.log("BABABABABANNANANANA")
//               var url = "http://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/search/sets?client_id=BGDhWP7Cth&whitespace=1&q="+searchTerm;
//               var promise = $.getJSON(url);
//               return Observable.fromPromise(promise);
//           });
//
//       keyups.subscribe(data => console.log(data))
//     });
// }




        //   var text = e.target.value;
          //
        //   if(text.length < 3) {
        //       return;
        //   }
          //
        //   var url = "http://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/search/sets?client_id=BGDhWP7Cth&whitespace=1&q="+text;
        //   $.getJSON(url, function(cards){
        //       console.log(cards);
        //   })
    //   })

// }
