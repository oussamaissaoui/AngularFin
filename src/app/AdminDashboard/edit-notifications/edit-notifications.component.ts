import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import{Location} from '@angular/common'

@Component({
  selector: 'app-edit-notifications',
  templateUrl: './edit-notifications.component.html',
  styleUrls: ['./edit-notifications.component.css']
})
export class EditNotificationsComponent implements OnInit {

 
  userNameNotif:string='';
  pictureNotif:string='';
  listNotif:Array<any>=[];

  constructor(private adminService:AdminDashboardService,private router:Router
    ,private location:Location) { }

  ngOnInit(): void {

 
    this.adminService.getUsersByNotifs().subscribe((data:any)=>{

      console.log(data);

      this.listNotif=data;
    })

   
  }

  refresh(){

    this.router.navigateByUrl("/dashborad/admin/list_users",{skipLocationChange:true}).then(()=>{

      this.router.navigate([decodeURI(this.location.path())]);
    });
  }
 
   deleteNotifById(id:number){


    
    this.adminService.getUserById(id).subscribe((user:any)=>{

      user.notifications.map((e:any)=>{

        this.adminService.deleteNotifById(e.idnotif).subscribe(); 

      });
    });
 
    this.refresh();
      
   }
   

}
