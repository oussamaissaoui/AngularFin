import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-appointements',
  templateUrl: './appointements.component.html',
  styleUrls: ['./appointements.component.css']
})
export class AppointementsComponent implements OnInit {
  tokenObj= JSON.parse(localStorage.getItem('token'));
  appt:any[];
  varrzeb: any;

  constructor(private auth:AuthService) { }
  showall(){


    let varr = jwtDecode(this.tokenObj.token);

    this.varrzeb=varr
    console.log('AAAAAAAAAAAASSSSSSSSSSSBBBBBBBBAAAAAAAA',varr)
    this.auth.getUserByUsername(this.varrzeb.sub).subscribe((data:any)=>{

      console.log("nikeommmmli kahbiiiiii ",data);

      this.appt=data.appointment;
      

      
    
      
       
      //this.iduser=data.id;
    })

    
    
  }


  ngOnInit(): void {

    this.showall();
  }

}
