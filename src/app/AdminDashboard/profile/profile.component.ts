import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';

export function cleanString(str:any) {
  str = str.replace('"[', '[');
  str = str.replace(']"', ']');
  return str;
}



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;

  constructor(private adminService:AdminDashboardService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){

    let k= JSON.stringify(this.adminService.user);
  
    let json= cleanString(k)
    this.user=JSON.parse(json)
    //console.log(this.user);
   
   
   }
}
