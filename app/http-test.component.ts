import {Component} from 'angular2/core';
import {HTTPTestService} from './http-test.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component ({
  selector: 'http-test',
  template: `
  <form class="form-inline" >
      <div class="form-group">
       <label for="searchForm">Search</label>
       <input [(ngModel)]="query" type="text" class="form-control" id="searchForm" placeholder="Search">
     </div>
     <a [routerLink] = "['Search', {query: query}]"><button  type="submit" class="btn btn-primary">Search</button></a>
   </form>
  `,
  providers: [HTTPTestService],
  directives: [ROUTER_DIRECTIVES]
})
export class HTTPTestComponent{
  getData: string;
  postData: string;
  query: string;

  constructor (private _httpService: HTTPTestService) {}

  onTestGet() {
    this. _httpService.getDeck()
      .subscribe(
        function(data) {
          this.getData = JSON.stringify(data);
          console.log(data)
        },
        error => alert(error),
        () => console.log("finished")

      );
  }
}
