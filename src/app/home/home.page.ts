import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http:HttpClient) {
    this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=4d9d0ef7').subscribe((data)=>{
console.log(data);})
  }
}
