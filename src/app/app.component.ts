import { Quotes, } from './quotes'
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  quotes = [
    new Quotes(1, 'I am thankful for all of those who said NO to me. It`s because of them i`m doing it myself.', `Albert Einstein`, 0, new Date(2018, 3, 14)),
    new Quotes(2, 'If you do what youve always done, you`ll get what youve always gotten. ', `Tony Robbins
    `, 0, new Date(2018, 3, 14)),
    new Quotes(3, 'Once you choose hope, anything’s possible.', `john wanjema`, 0, new Date(2018, 3, 14)),
    new Quotes(4, 'பயம்தான் பாதித் தோல்விக்குக் காரணம்', ` சுஜாதா [Sujatha]`, 0, new Date(2018, 3, 14)),
    new Quotes(5, 'I call her Google because she got everything I have been searching for.', `Genereux Philip`, 0, new Date(2018, 3, 14)),


  ]

}
