import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class AuthenticationService {

  constructor(public http: Http) {
  }

  public isLoggedIn(username: string, password: string): Observable<boolean> {
    let headers = new Headers({'Content-Type':'X-custom'});
    let requestOptions = new RequestOptions({headers: headers});
    return this.http.get('./assets/login.json', requestOptions)
      .map((res: Response) => {
      return res.json().username === username && res.json().password === password;
    })
      .catch((error: any) => { return Observable.throw(error.statusText)
    });
  }
}
