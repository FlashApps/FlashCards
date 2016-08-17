/// <reference path="../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';


@Component ({
  selector: 'SearchResults',

  template:`
  <div class="row">
       <div class="col s12 m7">
         <div class="card">
           <div class="card-image">

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
       <div>

       </div>
     </div>
     <input type="text" id="mySearch" class="form-control">
  `
})

export class SearchResultsComponent {
    constructor(){
        $('#mySearch').keyup(function(e){
            e.preventDefault();
            console.log("BABABABANANNA")
        })
    }





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
    //   var keyups = Observable.fromEvent($("#search"), "keyup")
    //         .map(e => e.target.value)
    //         // .filter(text => text.length >= 3)
    //         // .debounceTime(400)
    //         .distinctUntilChanged()
    //         .flatMap(searchTerm => {
    //             console.log("BABABABABANNANANANA")
    //             var url = "http://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/search/sets?client_id=BGDhWP7Cth&whitespace=1&q="+searchTerm;
    //             var promise = $.getJSON(url);
    //             return Observable.fromPromise(promise);
    //         });
      //
    //     keyups.subscribe(data => console.log(data))
  }
// }
