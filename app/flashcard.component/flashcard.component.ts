import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Http} from 'angular2/http';
import {StopTimer} from '../StopTimer/StopTimer';

@Component({
    selector: 'flashcard',
    directives: [ StopTimer],
    template: `
        <main class="container">

        <div class="row">
          <div class="row spacer">

          </div>
        </div>
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 well flashCardSidebar">
                <h4>Cards in Deck</h4>
                <p>Click a card to start!</p>
                <ul>
                  <li class="cardDef" (click)="highlight(index)" *ngFor="#card of deck.terms; #index = index" [class.highlighted]="index == highlightedIndex">{{card.term}}</li>
                </ul>
                </div>
                <div class="col-lg-1 col-md-1 hidden-sm hidden-xs"></div>
                <div class="col-lg-8 col-md-8 col-sm-12 card well effect__click">
                    <div class="card__front">
                    <div class="row">
                    <div class="row">Term</div>
                        <span class="card__text">{{currentFront}}</span>
                        </div>
                    </div>
                    <div class="card__back">
                    <div class="row">
                    <div class="row">Answer</div>
                        <span *ngIf="currentBack" class="card__text">{{currentBack}}</span>
                        <img *ngIf="!currentBack" src="{{currentBackImage}}">
                    </div>
                    </div>
                </div>
            </div>
            <div class="row spacer">

            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12">
                <stop-timer #timer>
                      <div class="timer">
                        <div  class="time" [innerHTML]="timer.timeString"></div>
                        <div class="controls">
                          <button class="btn btn-outline-info
                          "(click)="timer.toggle()">Start/Stop</button>
                          <button class="btn btn btn-outline-warning"(click)="timer.reset()">Reset</button>
                        </div>
                      </div>
                    </stop-timer>
                </div>
                <div class="col-sm-12 col-md-8 col-lg-8 text-center">
                  <button *ngIf="highlightedIndex>0" (click)="previousCard()" type="button" class="btn btn-default btn-lg">
                  <span class="glyphicon glyphicon-menu-left
                  " aria-hidden="true"></span> Previous
                  </button>
                  <button type="button" (click)="toggleFlip()" class="btn btn-default btn-lg">
                    <span class="glyphicon glyphicon-play" aria-hidden="true"></span> Flip
                  </button>
                  <button (click)="nextCard()" type="button" class="btn btn-default btn-lg">
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
  currentFront: string;
  currentBack: string;
  currentBackImage: string;
  highlightedIndex: number = 0;
  http: Http;

  constructor (params: RouteParams, http: Http){
          this.http = http;
          this.deckId = params.get("id");
          console.log(this.deckId)
        }

    loadPage(){
        console.log("Calling load page")
      $('#secret').hide();
        $('#stop').show();
      $('.cardDef').click(function() {
            $(this).addClass("highlighted")
        })
      var url = "https://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/sets/" + this.deckId + "?client_id=BGDhWP7Cth&whitespace=1";
        this.http.get(url).map(res => res.json()).subscribe(data => {
            console.log("data",data)
         this.deck = data;
         console.log('deck', this.deck)
         this.highlight(0);
     }, error => console.log(error));

    }

    highlight(index){
        this.highlightedIndex = index;
        if(this.deck.terms && this.deck.terms.length>0) {
        this.currentBack = this.deck.terms[index].definition;
        if(!this.currentBack) {
            this.currentBackImage = this.deck.terms[index].image.url;
        }
        this.currentFront = this.deck.terms[index].term;
    }
    }

    previousCard(){
        if(this.deck.terms && this.deck.terms.length>0) {
      this.highlightedIndex--;
      this.currentFront = this.deck.terms[this.highlightedIndex].term;
      this.currentBack = this.deck.terms[this.highlightedIndex].definition;
      if(!this.currentBack) {
          this.currentBackImage = this.deck.terms[this.highlightedIndex].image.url;
      }
  }
    }

    nextCard(){
        if(this.deck.terms && this.deck.terms.length>0) {
          this.highlightedIndex++;
          this.currentFront = this.deck.terms[this.highlightedIndex].term;
          this.currentBack = this.deck.terms[this.highlightedIndex].definition;
          if(!this.currentBack) {
              this.currentBackImage = this.deck.terms[this.highlightedIndex].image.url;
          }
        }
    }

    toggleFlip(){
        $('.card').toggleClass("flipped");
    }

  ngOnInit() {
    this.loadPage();
  }
}
