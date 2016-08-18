import {Component, OnInit, AfterContentInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {StopTimer} from '../StopTimer/StopTimer';

@Component({
    selector: 'flashcard',
    directives: [ StopTimer],
    template: `
        <main>
        <div class="row">
          <div class="col-md-12">
            <a (click)="loadPage()" (click)="timer.toggle()" id="secret"><button class="btn btn-primary btn-block">Start Timer and Begin Studying</button></a>
          </div>
          <div class="row spacer">

          </div>
        </div>
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 well flashCardSidebar">
                <h4>Cards on Deck</h4>
                <ul>
                  <li class="cardDef" (click)="highlight(index)" *ngFor="#card of deck.terms; #index = index" [class.highlighted]="index == highlightedIndex">{{card.term}}</li>
                </ul>
                </div>
                <div class="col-lg-1 col-md-1 hidden-sm hidden-xs"></div>
                <div class="card well effect__click">
                    <div class="card__front">
                        <span class="card__text">{{currentFront}}</span>
                    </div>
                    <div class="card__back">
                        <span *ngIf="currentBack" class="card__text">{{currentBack}}</span>
                        <img *ngIf="!currentBack" src="{{currentBackImage}}">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4">
                <stop-timer #timer>
                      <div class="timer">
                        <div  class="time" [innerHTML]="timer.timeString"></div>
                        <div class="controls">
                          <button class="btn"(click)="timer.toggle()">Pause</button>
                          <button class="btn"(click)="timer.reset()">Reset</button>
                        </div>
                      </div>
                    </stop-timer>
                </div>
                <div class="col-sm-8 col-md-8 col-lg-8 text-center">
                  <button (click)="previousCard()" type="button" class="btn btn-default btn-lg">
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

  constructor (params: RouteParams){
          this.deckId = params.get("id");
          console.log(this.deckId)
        }

    loadPage(){
      $('#secret').hide();
        $('#stop').show();
      $('.cardDef').click(function() {
            $(this).addClass("highlighted")
        })
      var url = "https://cors-anywhere.herokuapp.com/https://api.quizlet.com/2.0/sets/" + this.deckId + "?client_id=BGDhWP7Cth&whitespace=1";
      $.get(url).done( (data) => {
          this.deck = data;
          console.log(this.deck);
      });
    }

    highlight(index){
        this.highlightedIndex = index;
        console.log(this.currentFront);
        this.currentBack = this.deck.terms[index].definition;
        if(!this.currentBack) {
            this.currentBackImage = this.deck.terms[index].image.url;
        }
        this.currentFront = this.deck.terms[index].term;

    }

    previousCard(){
      this.highlightedIndex--;
      console.log(this.currentFront);
      this.currentFront = this.deck.terms[this.highlightedIndex].term;
      this.currentBack = this.deck.terms[this.highlightedIndex].definition;
      if(!this.currentBack) {
          this.currentBackImage = this.deck.terms[this.highlightedIndex].image.url;
      }
    }

    nextCard(){
      this.highlightedIndex++;
      console.log(this.currentFront);
      this.currentFront = this.deck.terms[this.highlightedIndex].term;
      this.currentBack = this.deck.terms[this.highlightedIndex].definition;
      if(!this.currentBack) {
          this.currentBackImage = this.deck.terms[this.highlightedIndex].image.url;
      }
    }

    toggleFlip(){
        $('.card').toggleClass("flipped");
    }

  ngOnInit() {
    $('#stop').hide();
  }
}
