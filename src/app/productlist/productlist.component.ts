import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  private product: any = {};
  private btn_stt : boolean = false;
  private products: any[] = [
    {
      name: 'Apple',
      pic: 'https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg',
      cost: 200
    },
    {
      name: 'Banana',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Banana_Fruit.JPG',
      cost: 90
    },
    {
      name: 'Pineapple',
      pic: 'https://i.ebayimg.com/images/g/sHAAAOSwjLtbcYyV/s-l300.jpg',
      cost: 150
    },

  ];

  constructor() { }

  ngOnInit() {
  }
  delProduct(index) {
    this.products.splice (index, 1);
  }
  editProduct(product){
    this.btn_stt = true;
    this.product = product;
  }
  addProduct(product){
    this.products.push;
  }
  updateProduct(){

  }


}
