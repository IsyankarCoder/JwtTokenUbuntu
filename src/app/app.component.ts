import { Component,VERSION } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JwtTokenUbuntu' +VERSION.major;
  myId =uuid.v4();
}
