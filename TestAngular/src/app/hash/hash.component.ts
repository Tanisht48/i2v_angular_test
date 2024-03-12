import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface HashResponse {
  hash: string;
}
@Component({
  selector: 'pm-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent implements OnInit {
  attribution = '<a href="https://www.freepik.com/free-vector/graphic-design-geometric-wallpaper_7088577.htm#query=graphic%20design&position=48&from_view=keyword">Image by pikisuperstar</a> on Freepik'
  firstName = 'archit';
  hash = '';
  pageTitle = 'Hash Generator';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  generateHash() {
    try {
      if (this.firstName === '') {
        throw new Error('Please enter a name');
      }
      this.http.get<HashResponse>(`http://localhost:5000/api/Hash/${this.firstName.toLowerCase()}`)
        .subscribe(res => {
          if (res.hash === '') {
            throw new Error('Something went wrong');
          }
          // if the hash contains '-', its not a valid hash, so throw an error
          if (res.hash.includes('-')) {
            throw new Error('Not a valid hash, The hash should not contain a hyphen. Maybe the response from server should be updated');
          }
          this.hash = res.hash;
        });
    }
    catch (e) {
      console.log(e);
    }
    
  }
}
