import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { AuthService } from 'src/app/services/auth.service';
import{Location} from '@angular/common'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listNewUsers:Array<any>=[];
  p:number=1;
  idUser:number=0;
  stringJson:any;
  stringObject:any;

  
  constructor(private adminService:AdminDashboardService,
    private router:Router,private location:Location,private auth:AuthService) { }

  ngOnInit(): void {
  
    
    
    this.adminService.getAllUsers().subscribe((data:any)=>{

      this.listNewUsers=data;
  
      console.log(this.listNewUsers)
    })

   // renialiser geolocation data

  }

  getLocationProp(lieu:string){

      this.auth.getLongAndLat(lieu).subscribe(data=>{

  
        this.stringJson = JSON.stringify(data);
        this.stringObject=JSON.parse(this.stringJson);
        //console.log(this.stringObject.longitude);
        //console.log(this.stringObject.latitude);
  
       this.adminService.setdataGeo(this.stringObject)
    
      })
      this.router.navigate(['/dashborad/admin/geolocation'])
           
    }


  

  refresh(){

    this.router.navigateByUrl("/dashborad/admin/_users",{skipLocationChange:true}).then(()=>{

      this.router.navigate([decodeURI(this.location.path())]);
    })
  }


  getIdUserBeforeDelete(id:number){
      
    this.idUser=id;

  }

  deleteUserById(){
   
    this.adminService.deleteUserById(this.idUser).subscribe();
    this.refresh();
   
     }
   

  getUserById(id:number){

      console.log(id)

      this.adminService.getUserById(id).subscribe((data:any)=>{

      //console.log("hethaaa eli bech yethat profileeee  " +data)

      this.adminService.setdata(data);
    })

     }



}
