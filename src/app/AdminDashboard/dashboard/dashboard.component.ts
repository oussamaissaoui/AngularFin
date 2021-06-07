import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import * as Chart from 'chart.js';
import jwtDecode from 'jwt-decode';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  tokenObj:any=JSON.parse(localStorage.getItem('token')!);

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  valueFacebook = 'https://www.facebook.com/';
  valueGoogle = 'https://mail.google.com/';


  listNewUsers:Array<any>=[];
  listNewUsersFilter:Array<any>=[];
  statusUser:any;
  verifeyStatusUser:boolean=false;
  listStatusUser:Array<any>=[];
  userName:any;
  id:any;
  verifeyTokenFacebookFirebase:boolean=false;
  userFacebookFromFirebase:any;
  userGoogleFromFirebase:any;
  verifeyTokenGoogle:boolean=false;
  listAppointement:Array<any>=[];
  listNewAppoitementFilter:Array<any>=[];

 constructor(private adminService:AdminDashboardService,private router:Router) { }


search(){

 if(this.userName == ''){

   this.ngOnInit();
 }else{

   this.listStatusUser=this.listStatusUser.filter(res=>{

     return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
   })
 }
}


 ngOnInit(): void {


  
   this.adminService.getAllUsers().subscribe((data:any)=>{

     this.listAppointement=data;
   
     this.listAppointement.filter((e,i)=>{


       if(i<6){

         this.listNewAppoitementFilter.push(e);
       }
       return this.listNewUsersFilter;
         
      })


   
   });
 
   
  
   

   this.adminService.isDeconnected(this.id).subscribe();

   this.adminService.getAllUsers().subscribe((data:any)=>{  // pour users status lezemhom koll

       this.listStatusUser=data;

   })


 this.adminService.getAllUsers().subscribe((data:any)=>{

     this.listNewUsers=data;
      
      this.listNewUsers.filter((e,i)=>{
          
       if(i<4){

         this.listNewUsersFilter.push(e);
       }
       return this.listNewUsersFilter;
         
      })
   
 })


   var chart:any = new Chart('bar', {
     type: 'bar',
     options: {
       responsive: true,
       title: {
         display: true,
         text: 'Combo Bar and line Chart'
       },
     },
     data: {
       labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
       datasets: [
         {
           type: 'line',
           label: 'My First dataset',
           data: [10, 50,12,80,35,80,90,76],
           backgroundColor: 'rgba(255,0,255,0.4)',
           borderColor: 'rgba(255,0,255,0.4)',
           fill: false,
         },
     
         {
           type: 'bar',
           label: 'My Second dataset',
           data: [10, 50,12,80,35,80,90,76],
           backgroundColor: 'rgba(0,0,255,0.4)',
           borderColor: 'rgba(0,0,255,0.4)',
           fill: false,
         }
       ]
     }
   });

   var chart1 = new Chart('line', {
     type: 'bar',
     options: {
       responsive: true,
       title: {
         display: true,
         text: 'Combo Bar and line Chart'
       },
     },
     data: {
       labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
       datasets: [
         {
           type: 'bar',
           label: 'My First dataset',
           data: [10, 50,12,80,35,80,90,76],
           backgroundColor: 'rgba(255, 99, 132, 0.2)',
           borderColor: 'rgba(75, 192, 192, 0.2)',
           fill: false,
         },
     
         {
           type: 'bar',
           label: 'My Second dataset',
           data: [10, 50,12,80,35,25,90,76],
           backgroundColor: 'rgba(0,0,255,0.4)',
           borderColor: 'rgba(0,0,255,0.4)',
           fill: false,
         }
       ]
     }
   });
 
  
   const decode:any=jwtDecode(this.tokenObj.token);  //pour utilisateur connecter nivai firebase database non relationelle
   
   if(decode.firebase.sign_in_provider == "facebook.com" ){  // hethy partie user firebaaaaase
       
     this.verifeyTokenFacebookFirebase=true;
    this.userFacebookFromFirebase=decode;
   

   }else if(decode.firebase.sign_in_provider == "google.com" ){

          this.userGoogleFromFirebase=decode;
          this.verifeyTokenGoogle=true;
   }else{
         
     this.verifeyTokenFacebookFirebase=false;
     this.verifeyTokenGoogle=false;

   }
   
}
}
