import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

 
  tokenObj:any=JSON.parse(localStorage.getItem('token')!);

  listNewUsers:Array<any>=[];
  listNewUsersFilter:Array<any>=[];
  statusUser:any;
  verifeyStatusUser:boolean=false;
  listStatusUser:Array<any>=[];
  userName:any;
  id:any;
  listNotifs:Array<any>=[];

 constructor(private adminService:AdminDashboardService,private router:Router) { }

  ngOnInit(): void {
  }

  @HostListener('click')  doSomething(){
  
    if(this.tokenObj.token != null || this.tokenObj.token != undefined){
      
      const decode:any=jwtDecode(this.tokenObj.token);  
      const date= new Date(0);
     const tokenexp=date.setUTCSeconds(decode.exp);
    
     this.adminService.findIdByUserName(decode.sub).subscribe((data:any)=>{ //recuper id de user selon nom extraire de son token

  if(tokenexp.valueOf()-10000  <= new Date().valueOf()){ // waket mlezmouch youslo date d'expiration token
    
  
    this.adminService.isDeconnected(data).subscribe(()=>{ 
     
     this.adminService.getUserById(data).subscribe((user:any)=>{

      user.notifications.map((e:any)=>{

        console.log(e.idnotif)
       
          this.adminService.deleteNotifById(e.idnotif).subscribe();  //lorsque lutilisateur deconnecter notif tetfasakh automatique
            
             
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
      });
   
      alert("Token est totalement expirer date inferieur!!")
      
      localStorage.removeItem('token');    // j ai refait ca bech le faite eli malkaach notif yokhrej zeda maylawejech bech ifasakh notif
      this.router.navigate(['/login']);
    })
   });


}


}); 

console.log( tokenexp.valueOf()-5000);
console.log("daye expiration "+  tokenexp.valueOf());
console.log("Date actuelle  :" +  new Date().valueOf());
    
    }
    }

}
