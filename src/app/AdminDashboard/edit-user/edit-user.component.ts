import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { AuthService } from 'src/app/services/auth.service';
import{cleanString}  from '../profile/profile.component'
import {passValidator} from '../../Login/login/login.component'


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user:any;
  registerForm: any;
  selectedFiles: any;
   currentFileUpload: any;
   progress: { percentage: number } = { percentage: 0 }
   Change:boolean=false;
   active:boolean=false;
 
 
   constructor(private adminService:AdminDashboardService,private formBuilder: FormBuilder,
     private auth:AuthService,private router:Router) {
    
   
  }
 
  get f() { return this.registerForm.controls; }
 
 
  ngDoCheck(){
 
   let k= JSON.stringify(this.adminService.user);
 
   let json= cleanString(k)
   this.user=JSON.parse(json)
   //console.log(this.user.userName);
   
  
  }
       
 
 
   ngOnInit(): void {
 
    
     this.registerForm = this.formBuilder.group({
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       email :['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
       userName: ['', Validators.required],
       password: ['', [Validators.required]],
       ConfirmPassword: ['', [passValidator,Validators.required]],
       dateNaissance:['', [Validators.required]],
       phoneNumber:['', [Validators.required]],
       lieu:['', [Validators.required]],
       isBlock:['', [Validators.required]],
     
     });
       }
   
  
     save(){
 
     //console.log(this.registerForm.value)
 
     if(this.user.id != null && this.registerForm.value != null ){
 
     this.adminService.updateUser(this.registerForm.value,this.user.id).subscribe(data=>{
       
       if(this.registerForm.value.isBlock =="active"){
 
          this.active=true
    
          this.adminService.blockUser(this.user.id).subscribe(); 
 
       }else{
 
         this.adminService.deblockUser(this.user.id).subscribe();
       }
      
 
       this.auth.setPhotoByClient(this.user.id,this.currentFileUpload.name).subscribe();
      // console.log(this.f.isBlock)
      
     })
 
   } else{
 
     return ;
   }
    //this.adminService.setdata(null);
    //this.router.navigate(['/dashborad/admin/list-users'])
    
 
   this.progress.percentage = 0;
   this.currentFileUpload = this.selectedFiles.item(0)
   console.log(this.currentFileUpload.name)
   this.auth.pushFileToStorage(this.currentFileUpload).subscribe();
   
   this.selectedFiles = undefined;
 
    }
 
 
 
    
   selectFile(event:any) {
     this.selectedFiles = event.target.files;
     console.log(event.target.files)
   }
   
  
}
