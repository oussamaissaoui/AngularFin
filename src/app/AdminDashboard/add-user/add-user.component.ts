import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { AuthService } from 'src/app/services/auth.service';


export function passValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
          const passValue = passControl.value;
          if (passValue !== cnfpassValue || passValue === '') {
              return {
                  isError: true
              }; } } }

  return null;
}




@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  registerForm: any;
  Change:boolean=false;
  messageRegisterSuccess:any;
  messageRegisterFailed:any;
  verifey:boolean=false;
  active:boolean=false;


  constructor(private formBuilder: FormBuilder ,private auth:AuthService,
    private adminService:AdminDashboardService) { }

  get f() { return this.registerForm.controls; }

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

      addUser(){

        this.Change=true;
          this.auth.AddUser(this.registerForm.value,this.f.password.value).subscribe(data=>{
              
           // console.log(data)
          Object.keys(data).map((Obj:any)=>{ // map nekhedh key
           
            if(Obj != "Password have 8 caracter upper lower and number" &&
              Obj != "Username exits deja dans la base de donner" &&
              Obj != "Email exits deja dans la base de donner" ){
         

                Object.values(data).map((Obj:any)=>{
                
            if(this.registerForm.value.isBlock =="active"){

              this.active=true
         
               this.adminService.blockUser(Obj.id).subscribe(); 
      
            }else{
      
              this.adminService.deblockUser(Obj.id).subscribe();
            }
           
          });

                this.verifey=true;
                 this.messageRegisterSuccess=Obj;
           
              }else{
                 this.verifey=true;
      
                 this.messageRegisterFailed=Obj;
              }
       
      });   
          });
      
     
      
      }

      changeStatus(){

        this.messageRegisterFailed=null;
        this.messageRegisterSuccess=null;
        this.registerForm.reset();
      }


}
