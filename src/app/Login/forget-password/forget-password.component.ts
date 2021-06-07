import { Component, OnInit,Renderer2,Input } from '@angular/core';
import { FormBuilder, Validators ,AbstractControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

export function passValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
          const passValue = passControl.value;
          if (passValue !== cnfpassValue || passValue === '') {
              return {
                  isError: true
              };
          }
          
      }
  }

  return null;
}


@Component({
  selector: 'app-forget',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  submitted:boolean = false;
  Change:boolean=false;
  registerForm: any;
  LoginForm:any;
  errorMessage:string='';
  messagePassword:string="";
  verifey:boolean=false;
  messageLogin:any;
  messageForgetFailed:any;
  messageForgetSuccess:any;
  messageDebloqueUser:any;
  retrieveForgetPassword:boolean=false;
  messageChangeFailed:any;
  messageChangeSuccess:any;
 
 

  constructor(private renderer: Renderer2, private auth:AuthService,  private formBuilder: FormBuilder ) { }

  get f() { return this.registerForm.controls; }
  get M() { return this.LoginForm.controls; }

  ngOnInit(): void {

    this.addJsToElement().onload = () => {
      console.log('le script marche ');

  
}


this.LoginForm = this.formBuilder.group({
  email: ['', Validators.required],


});


this.registerForm = this.formBuilder.group({

  userName :['',Validators.required],
  Oldpassword :['',Validators.required],
  password :['',Validators.required],
  newPassword :['',[passValidator,Validators.required]],
 

});
  }



  addJsToElement(): HTMLScriptElement {

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text= `document.getElementById('btn').addEventListener('click', function()
    {
        document.querySelector('.cont').classList.toggle('s-signup')
        
    });
    
    document.querySelector('#open-popup').addEventListener('click', function()
    {
        document.querySelector('.popup').classList.toggle('active')
    });
 
    document.querySelector('#open-popup-register').addEventListener('click', function()
    {
        document.querySelector('.popup').classList.toggle('active')
    });
    document.querySelector('.popup .close-btn').addEventListener('click', function()
    {
        document.querySelector('.popup').classList.toggle('active')

     
    });
    
    `;



  this.renderer.appendChild(document.body, script);
  
  return script;
}




forgetPassword(){
    
  this.submitted=true;

  if(this.M.email.value != null ){

  this.auth.ForgetPassword(this.M.email.value).subscribe(data=>{
       
    if(data != "invalid email" && data != "This compte n'existe pas you can create an accompte"){
      
      this.verifey=true;
      this.messageForgetSuccess=data;

   }else{
      this.verifey=true;
      this.messageForgetFailed=data;
   }
})
  }else{

    return ;
  }
}

changePassword(){
    
  this.Change=true;

  if(this.f.userName.value != null){

  this.auth.getUserByUsername(this.f.userName.value).subscribe((user:any)=>{

    console.log(user)
    console.log(user.userName)

   this.auth.changerPassword(user.userName,this.f.Oldpassword.value,
    this.f.password.value,this.f.newPassword.value).subscribe(data=>{

        if(data != "Password have 8 caracter upper lower and number" && 
        data != "Password not the same" && data !="Password incorrect" && 
        data != "Username does not exist" ){

          this.verifey=true;
          this.messageChangeSuccess=data;
        }else{
          this.verifey=true;

          this.messageChangeFailed=data;
        }
    })
  })

}else{

  return;
}

}




  clearInput(){   // fama chwaya mechekeel
 this.registerForm.reset();
 this.LoginForm.reset();
 this.messageDebloqueUser=null;
  }


  changeStatusOfVerifey(){

    this.verifey=false;
    this.messageForgetFailed=null;
    this.messageForgetSuccess=null;      ///ya une difference entre null et ""(chaine vide)
    this.messageChangeFailed=null;
    this.messageChangeSuccess=null;

     
  }

  gotoForgetPassword(){

    this.retrieveForgetPassword=true;

  }

}
























