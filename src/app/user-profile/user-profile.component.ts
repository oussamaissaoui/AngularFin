import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:String='User';
  tObj: any;
  varrzeb:any;
  annoncesByUser:any[];
  tokenObj= JSON.parse(localStorage.getItem('token'));
  
  
  Ancount:any;
  Appointcount:any;
  CommentCount:any;

  UserName:any;
  LocLoc:any;
  Email: any;
  picture: any;




  
  constructor(private auth:AuthService) { }

 
 
  showall(){


    let varr = jwtDecode(this.tokenObj.token);

    this.varrzeb=varr
    console.log('AAAAAAAAAAAASSSSSSSSSSSBBBBBBBBAAAAAAAA',varr)
    this.auth.getUserByUsername(this.varrzeb.sub).subscribe((data:any)=>{

      console.log("nikeommmmli kahbiiiiii ",data);
      this.annoncesByUser=data.ads;
      let Ancount = this.annoncesByUser.length;
      this.Ancount=Ancount;
      console.log(this.Ancount)


      let AppointByuser=data.appointment;
      let Appointcount = AppointByuser.length;
      this.Appointcount=Appointcount;
      console.log(this.Appointcount)


      let CommentByuser=data.comments;
      let CommentCount =  CommentByuser.length;
      this.CommentCount=CommentCount;
      console.log(this.CommentCount)

      this.UserName=data.userName;
      this.LocLoc=data.lieu;
      this.Email=data.email;
      this.picture=data.picture;

      
      console.log('9999999999999999999999999',this.annoncesByUser)
      console.log("77777777777777777",Ancount)

      
    
      
       
      //this.iduser=data.id;
    })

    
    
  }

  ngOnInit(): void {
    this.showall();
  }

}
