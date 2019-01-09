import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  private cities: any[] = [{
    city_name : 'bangalore',
    city_area: '3000 sq meter',
    city_state: 'KA',
    city_mayor: ' ',
    city_lakes: [
      { name : 'bellandur lake', area: '100 sq meter', pic: '' },
      { name : 'ulsoor lake', area: '150 sq meter', pic: '' },
    ]
   },
   {
    city_name : 'ooty',
    city_area: '1000 sq meter',
    city_state: 'TN',
    city_mayor: ' ',
    city_lakes: [
      { name : 'pykra lake', area: '100 sq meter', pic: '' },
      { name : 'ooty lake', area: '150 sq meter', pic: '' },
    ]
   } ];

  constructor() { }

  ngOnInit() {
  }

}
