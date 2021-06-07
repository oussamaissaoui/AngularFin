import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  tokenObj= JSON.parse(localStorage.getItem('token'));
  comments:any[];
  varrzeb: any;
  

  constructor(private auth:AuthService) { }

  showall(){


    let varr = jwtDecode(this.tokenObj.token);

    this.varrzeb=varr
    console.log('AAAAAAAAAAAASSSSSSSSSSSBBBBBBBBAAAAAAAA',varr)
    this.auth.getUserByUsername(this.varrzeb.sub).subscribe((data:any)=>{

      console.log("nikeommmmli kahbiiiiii ",data);

      this.comments=data.comments;
      

      
    
      
       
      //this.iduser=data.id;
    })

    
    
  }

  ngOnInit(): void {
    this.showall();
  }

}
