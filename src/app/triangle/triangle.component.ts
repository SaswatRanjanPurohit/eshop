import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
  private a: string;
  private b: string;
  private c: string;

  constructor() { }

  ngOnInit() {
  }
getArea(){
  let t1 = parseInt(this.a);
  let t2 = parseInt(this.b);
  let t3 = parseInt(this.c);
  let s = (t1 + t2 + t3) / 2;
  let area = Math.sqrt(s * (s - t1) * (s - t2) * (s - t3));
  alert('Area of triangle is' + area);
}
}
