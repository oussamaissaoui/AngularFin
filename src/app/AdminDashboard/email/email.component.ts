import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  listEmail:Array<any>=[]
  email:any
  
 constructor(private adminService:AdminDashboardService) { }

 ngOnInit(): void {


   console.log("listaaaaaaaaaaa ",this.adminService.listEmail)

   this.listEmail=this.adminService.listEmail

 }

 search(){

   if(this.email == ''){
 
     this.ngOnInit();
   }else{
 
     this.listEmail=this.listEmail.filter(res=>{

 
       return res.From.address.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
     })
   }
 }


}
