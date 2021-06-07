import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import{Location} from '@angular/common'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

 
  listNewUsers:Array<any>=[];
  listNewUsersFilter:Array<any>=[];
  idUser:number=0;
   userName:any;
   p:number=1;

  constructor(private adminService:AdminDashboardService,
    private router:Router,private location:Location) { }

  getIdUser(i:any){

   // console.log("iddddd "+i)
    this.idUser=i;
      
    ///bech nekhedh l'id naamel getuserbyid wensetiiih fi data mawjoud f service/////pour edit
    
    this.adminService.getUserById(i).subscribe(data=>{

      console.log(data)

      this.adminService.setdata(data);
    })

     
  }

  refresh(){

    this.router.navigateByUrl("/dashborad/admin/list-users",{skipLocationChange:true}).then(()=>{

      this.router.navigate([decodeURI(this.location.path())]);
    });
  }

 
 deleteUserById(){
   
 this.adminService.deleteUserById(this.idUser).subscribe();
 this.refresh();

  }

 

  ngOnInit(): void {

    this.adminService.getAllUsers().subscribe((data:any)=>{

      this.listNewUsers=data;
  
      console.log(this.listNewUsers)
    })

}

search(){

  if(this.userName == ''){

    this.ngOnInit();
  }else{

    this.listNewUsers=this.listNewUsers.filter(res=>{

      return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
    })
  }
}

}
