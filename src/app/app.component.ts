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
    new Quotes(1, 'Watch Finding Nemo', `wanje`, 0),
    new Quotes(2, 'Buy Cookies', `wanje`, 0),
    new Quotes(3, 'Get new Phone Case', `wanje`, 0),
    new Quotes(4, 'Get Dog Food', `wanje`, 0),
    new Quotes(5, 'Solve math homework', `wanje`, 0),
    new Quotes(6, 'Plot my world domination plan', `wanje`, 0),

  ]


