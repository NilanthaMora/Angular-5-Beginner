import { Component, OnInit } from '@angular/core';
import {MyService} from '../service.service';
// import {Http,Headers} from "@angular/http";
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   image: any[]=[];

  constructor(
    private sss:MyService,
    public http:Http
  ) { }

  ngOnInit() {
    // var aa=this.sss.getStudents()
    // console.log('yyy',aa);  //
    // this.http.get('http://localhost:3000/student').subscribe((res)=>{
    //   res.json
    // });
   var images=this.sss.getStudents().subscribe((res)=>{
      console.log(res.json());
    });

    }

}
