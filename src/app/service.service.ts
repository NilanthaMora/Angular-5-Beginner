import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import {Http,Headers} from "@angular/http";


@Injectable({
  providedIn: 'root',
})
export class MyService {

  constructor(private http:Http ) { }

getStudents(){
// return this.http.get('http://localhost:3000/student').map(subscribe(result => {
//   console.log('sss',result.json());
//     return result.json();
//   });
  // return this.http.get('http://localhost:3000/student').map(res => res.json());

  return this.http.get('http://localhost:3000/student');

}

}

