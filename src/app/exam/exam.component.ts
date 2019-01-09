import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
private p: number = 90;
private c: number = 80;
private h: number = 72;
private m: number = 84;
private s: number = 76;
private avg: number;
  constructor() { }

  ngOnInit() {
  }
  getAverage() {
     alert('the sum is ' + (this.p + this.c + this.h + this.m + this.s ) / 5 );
     this . avg = (this.p + this.c + this.h + this.m + this.s ) / 5;
  }

}
