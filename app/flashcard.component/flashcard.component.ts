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
            <a id="stop" (click)="timer.toggle()"><button class="btn btn-primary btn-block">Start / Stop Timer</button></a>
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
                <h3>Deck: {{deck.title}}</h3>
                <ul>
        

                </ul>
                  <a><p>Click to Flip!</p></a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4">
                <stop-timer #timer>
                      <div class="timer">
                        <div  class="time" [innerHTML]="timer.timeString"></div>
                        <div class="controls">
                          <button class="btn"(click)="timer.toggle()">Toggle</button>
                          <button class="btn"(click)="timer.reset()">Reset</button>
                        </div>
                      </div>
                    </stop-timer>
                </div>
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
          console.log(this.deckId)
        }

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
