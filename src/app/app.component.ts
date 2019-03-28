import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Quotes"
  quotes = [
    new Quote(1, 'The sun is a star.','A.B Clark',"Z.G"),
  
];
  constructor(){
    }
}
