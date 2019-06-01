import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    // tslint:disable-next-line: max-line-length
    new Quotes(1, 'I am thankful for all of those who said NO to me. It`s because of them i`m doing it myself.', `Albert Einstein`, 0, new Date(2019, 5, 30)),
    new Quotes(2, 'If you do what youve always done, you`ll get what youve always gotten. ', `Tony Robbins
    `, 0, new Date(2018, 3, 14)),
    new Quotes(3, 'Once you choose hope, anything’s possible.', `john wanjema`, 0, new Date(2018, 3, 14)),
    new Quotes(4, 'பயம்தான் பாதித் தோல்விக்குக் காரணம்', ` சுஜாதா [Sujatha]`, 0, new Date(2018, 3, 14)),
    new Quotes(5, 'I call her Google because she got everything I have been searching for.', `Genereux Philip`, 0, new Date(2018, 3, 14)),


  ];
  deleteQuote(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }
  constructor() { }

  ngOnInit() {
  }

}