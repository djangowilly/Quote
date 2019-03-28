import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
//   quotes = [
//     new Quote(1, 'Success is not final, failure is not fatal: it is the courage to continue that counts.','Winston Churchill',"-"),
//     new Quote(2,'Our greatest glory is not in never falling, but in rising every time we fall.','Confucius','-'),
//     new Quote(3,'All our dreams can come true, if we have the courage to pursue them.','Walt Disney','-'),
//     new Quote(4,'Everything you’ve ever wanted is on the other side of fear.','George Addair','-'),
// ];

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  this.quotes.unshift(quote)

}

toogleDetails(index){
  this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}
public date = new Date ();
  constructor() { }

  ngOnInit() {
  }

}