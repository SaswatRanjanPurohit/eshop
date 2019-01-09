import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eshop';
  private users: any [];

constructor (private http : HttpClient ){
  this.http.get('https://reqres.in/api/users?page=2').subscribe(
    (res) => {
      let record = JSON.stringify(res);
      let list = JSON.parse(record);
      console.log('the response is ' , list.data);
      this.users  = list.data;
    },
    (err) => {
      console.log('the err is ' ,err);
    },
    () => {
      console.log('Api call completed');
    }
  )
}
}
