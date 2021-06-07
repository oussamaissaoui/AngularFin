import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import{Location} from '@angular/common'

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointementComponent implements OnInit {

  userName:string="";
  listAppointement:Array<any>=[];
  p:number=1;
  idAppointement:any;

  constructor(private adminService:AdminDashboardService,private router:Router
    ,private location:Location) { }

  getIdApp(idApp:number){

    this.idAppointement=idApp;

    //console.log("iddddddddddddddddddddddddddddddddddddd ",this.idAppointement)
       
  }
  
  refresh(){

    this.router.navigateByUrl("/dashborad/admin/list_users",{skipLocationChange:true}).then(()=>{

      this.router.navigate([decodeURI(this.location.path())]);
    });
  }


  deleteAppById(){
   
    this.adminService.deleteAppointementById(this.idAppointement).subscribe();
    this.refresh();
   
     }

     
  search(){

    if(this.userName == ''){
  
      this.ngOnInit();
    }else{
  
      this.listAppointement=this.listAppointement.filter(res=>{
  
        return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
      })
    }
  }

  getAppByUser(user:any,app:any){

    this.adminService.setAppointement(user,app);

  }

  ngOnInit(): void {

    

    this.adminService.getAllUsers().subscribe((data:any)=>{

      this.listAppointement=data;

     // console.log(this.listAppointement)
    });
  
    
   

  }


}
