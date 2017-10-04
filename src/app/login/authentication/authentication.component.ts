import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  username: string = "Bartek";
  isLoggedIn: boolean = false;
  constructor(public authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isLoggedIn(this.username);
  }

}
