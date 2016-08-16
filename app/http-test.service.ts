import {Injectable} from "angular2/core";
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HTTPTestService {
  constructor (private _http: Http) {}

  getDeck() {
    return this._http.get(
      "http://galvanize-cors-proxy.herokuapp.com/https://api.quizlet.com/2.0/search/sets?client_id=BGDhWP7Cth&whitespace=1&q=spanish&term=silla")
        .map(res => res.json());
  }
  postJSON(){

  }
}
