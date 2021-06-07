import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { AuthService } from 'src/app/services/auth.service';
import{passValidator} from '../../../Login/login/login.component'
@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {
  tokenObj= JSON.parse(localStorage.getItem('token'));

  varrzeb:any;
  userConnected:any;
  registerForm: any;
  idUser:any;

  constructor(private auth:AuthService,private formBuilder: FormBuilder,
    private adminService:AdminDashboardService) { }

  
    get f() { return this.registerForm.controls; }



  ngOnInit(): void {

    let varr = jwtDecode(this.tokenObj.token);
 
    this.varrzeb=varr;

    this.auth.getUserByUsername(this.varrzeb.sub).subscribe((data:any)=>{

      console.log("nikeommmmli kahbiiiiii ",data);

      
      this.userConnected=data;

      this.idUser=data.id;

     
    })


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
      isBlock:[false, [Validators.required]],
    
    });
      }

      update(){

        console.log("asbaaa liiiik oussemaaaaaaaaaaa ",this.registerForm)


        this.adminService.updateProfileUser(this.registerForm.value,this.idUser).subscribe(data=>{

          console.log("nike el projeeeeeeet ",data)
        })
      }



}
