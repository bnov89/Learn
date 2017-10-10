import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
@Injectable()
export class AuthenticationService {

  constructor(public http: Http) {
  }

  public isLoggedIn(username: string, password: string): Observable<boolean> {
    return this.http.get('./assets/login.json').map((res: Response) => {
      return res.json().username === username && res.json().password === password;
    })
      .catch((error: any) => {
        throw Observable.throw(error.statusText);
    });
  }
}
