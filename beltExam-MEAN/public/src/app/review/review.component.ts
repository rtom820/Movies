import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() reviewVariable:any;
  @Output() reviewOutputVariable = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendBackToParent(){
    this.reviewOutputVariable.emit(true);
  }
}