import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  private a: string;
  private b: string;

  constructor() { }

  ngOnInit() {
  }
  getArea() {
    let t1 = parseInt(this.a);
    let t2 = parseInt(this.b);
    let area = t1 * t2 ;
    alert('the area is' + area);
  }
  getPerimeter() {
    let t1 = parseInt(this.a);
    let t2 = parseInt(this.b);
    let perimeter = 2 * ( t1 +  t2);
    alert('the perimeter is' + perimeter);
  }

}
