import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [

    new Quotes(1, 'I am thankful for all of those who said NO to me. It`s because of them i`m doing it myself.', `Albert Einstein`,0, 0,`wanje`, new Date(2019, 5, 30)),

  ];
  deleteQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)

  }

  highlighter(index){
    const check = this.quotes[index].upvote;
    if(this.quotes.length > 0) {
      const votes = [];
     this.quotes.forEach(quote => votes.push(quote.upvote));
     if (check === Math.max(...votes)) {
      return true;
    }
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
