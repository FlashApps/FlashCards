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
  <div class="row">
      <h1>Start Typing to Search</h1>
</div>
<div class="row">

      <input type="text" class="form-control" id="searchForm" placeholder="Search">
    </div></div>
  </form>

 <div class="row">
 <h3 *ngIf="decks[0]">Available Flashcard Decks</h3>
    <div class="list-group">
        <p *ngFor="#deck of decks"><a class="list-group-item list-group-item-action"  [routerLink]="['FlashCard', {id: deck.id}]"><span><strong>{{deck.title}}</strong></span> <span>{{deck.description}}</span> <span>{{deck.term_count}} cards</span></a></p>
    </div>

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
                .filter(text => text.length >= 2)
                .debounceTime(200)
                .distinctUntilChanged()
                .flatMap(searchTerm => {
                    var url = "https://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/search/sets?client_id=BGDhWP7Cth&whitespace=1&q=" + searchTerm;
                    var promise = $.getJSON(url);
                    console.log(promise);
                    return Observable.fromPromise(promise);
                });

                keyups.subscribe(data => {
                    this.decks = data.sets;
                })
        });
    }
}
