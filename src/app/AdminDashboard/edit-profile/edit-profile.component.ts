import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { AuthService } from 'src/app/services/auth.service';
import{cleanString}  from '../profile/profile.component'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user:any;
  registerForm: any;
  selectedFiles: any;
  currentFileUpload: any;
 progress: { percentage: number } = { percentage: 0 }
 Change:boolean=false;

constructor(private adminService:AdminDashboardService,private formBuilder: FormBuilder,
 private router:Router,private auth:AuthService) { }


 get f() { return this.registerForm.controls; }

ngOnInit(): void {

 this.registerForm = this.formBuilder.group({
   firstName: ['', Validators.required],
   lastName: ['', Validators.required],
   email :['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
   dateNaissance:['', [Validators.required]],
   phoneNumber:['', [Validators.required]],
   lieu:['', [Validators.required]],
   isBlock:['', [Validators.required]],
 
 });
}

ngDoCheck(){

 let k= JSON.stringify(this.adminService.user);

 let json= cleanString(k)
 this.user=JSON.parse(json)

}

Save(){

 if(this.user.id != null && this.registerForm.value != null ){

 this.adminService.updateProfileUser(this.registerForm.value,this.user.id).subscribe(()=>{
 

   this.auth.setPhotoByClient(this.user.id,this.currentFileUpload.name).subscribe();
   
    });

    this.router.navigate(['/dashborad/admin/users'])

} else{

 return ;

}
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
