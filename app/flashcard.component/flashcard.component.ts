import {Component, OnInit, AfterContentInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
@Component({
    selector: 'flashcard',
    template: `
        <main>
        <div class="row">
          <div class="col-md-12">
            <a (click)="loadPage()" id="secret"><button class="btn btn-primary btn-block">Start Timer and Begin Studying</button></a>
            <a id="stop"><button class="btn btn-primary btn-block">Stop Timer</button></a>
          </div>
        </div>
            <div class="row">
                <div class="col-lg-3 col-md-3 hidden-sm hidden-xs well flashCardSidebar">
                <ul>
                  <li *ngFor="#card of deck.terms">{{card.term}}</li>
                </ul>
                </div>
                <div class="col-lg-1 col-md-1 hidden-sm hidden-xs"></div>
                <div class="col-lg-8 col-md-8 well flashCardContainer">
                    <p>Click to Flip!</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 hidden-sm hidden-xs"></div>
                <div class="col-sm-8 col-md-8 col-lg-8 text-center">
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
export class FlashcardComponent implements OnInit{
  deckId: Object;
  deck: Object = {};
  params: string;
  constructor (params: RouteParams){
          this.deckId = params.get("id");
          console.log(this.deckId)}

    loadPage(){
      console.log("hi tim");
      $('#secret').hide();
        $('#stop').show();
      var url = "http://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/sets/" + this.deckId + "?client_id=BGDhWP7Cth&whitespace=1";
      $.get(url).done( (data) => {
          this.deck = data;
          console.log(this.deck);
      });

    }

  ngOnInit() {
    $('#stop').hide();

  }

}
