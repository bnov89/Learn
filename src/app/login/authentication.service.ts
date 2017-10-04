import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  public isLoggedIn(username: string): boolean {
    return username === "Bartek";
  }
}
