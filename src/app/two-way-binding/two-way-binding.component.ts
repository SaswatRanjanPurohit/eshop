import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  private p: string;
  private c: string;
  private h: string;
  private m: string;


  constructor() { }

  ngOnInit() {
  }
getAverage() {
  let t1 = parseInt(this.p);
  let t2 = parseInt(this.c);
  let t3 = parseInt(this.m);
  let t4 = parseInt(this.h);
  let avg = (t1 + t2 + t3 + t4 ) / 4;
  alert('the average is' + avg);

}
}
