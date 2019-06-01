import { Quotes } from './../quotes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  delete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  upvote(Quotes){

    this.quote.vote = this.quote.vote +1;
  }
  downvote(Quotes){

    this.quote.vote = this.quote.vote -1;
  }

  constructor() { }

  ngOnInit() {
  }

}
