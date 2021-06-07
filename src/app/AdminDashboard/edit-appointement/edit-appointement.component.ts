import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';

@Component({
  selector: 'app-edit-appointement',
  templateUrl: './edit-appointement.component.html',
  styleUrls: ['./edit-appointement.component.css']
})
export class EditAppointementComponent implements OnInit {

  listUser:Array<any>=[];
  registerForm: any;
  Change:boolean=false;
  messageFaildAppointement:any;
  messageSuccesAppointement:any;
  userApp:any;
  dateAppointementConvert:any;
  appointement:any;
  userApptName:string='';

constructor(private adminService:AdminDashboardService,private formBuilder: FormBuilder,
  public datepipe: DatePipe) { }

  get f() { return this.registerForm.controls; }

  
 ngDoCheck(){

  let userApp= JSON.stringify(this.adminService.userApp);
  let app= JSON.stringify(this.adminService.appointement);

  let json= cleanString(userApp)
  let json1= cleanString(app)
  this.userApp=JSON.parse(json);
  this.appointement=JSON.parse(json1)
  //console.log(this.userApp);
  //console.log(this.appointement);


   for(let appt of this.userApp.appointment){

          if(appt.idAppointement == this.appointement.idAppointement){


            this.userApptName=this.userApp.firstName;
          }

   }

  
  function cleanString(str:any) {
    str = str.replace('"[', '[');
    str = str.replace(']"', ']');
    return str;
  }
  
 
 }
        
ngOnInit(): void {

  
  this.registerForm = this.formBuilder.group({

    purchased: ['', Validators.required],
    visibility: ['', Validators.required],
    state: ['', Validators.required],
    dateAppointement:['',[Validators.required]],
    justification:['', [Validators.required]],

  
  });
 

  this.adminService.getAllUsers().subscribe((data:any)=>{

    this.listUser=data;
  })
   
  

}

onSubmit(){

  //console.log(this.registerForm)
  
let date= this.datepipe.transform(this.registerForm.value.dateAppointement,"yyyy-MM-dd HH:mm:ss.S");

this.registerForm.value.dateAppointement=date;

//console.log(this.registerForm.value)

///console.log("saleeeeeeeeeem" +this.registerForm.value.purchased)
//console.log(this.appointement.idAppointement)

this.adminService.updateAppointement(this.registerForm.value,this.appointement.idAppointement)
.subscribe((data:any)=>{

  //console.log("yaml 3aaaaaaay  "+data.id);

  

  if(data == "Appointement updated with success"){

    this.messageSuccesAppointement=data;
     
  }else{

    //console.log("dataaaa "+data);
  this.messageFaildAppointement=data;
  }   
})



}

changeStatus(){

  this.messageSuccesAppointement=null;
  this.messageFaildAppointement=null;
  
}
}
