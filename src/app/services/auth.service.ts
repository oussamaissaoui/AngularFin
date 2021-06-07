import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { HttpRequest, HttpEvent} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   user:Observable<any>
   

   url= "http://localhost:8087/authentification/";
   url1="http://localhost:8087/debloquer-Compte/"


   

   
   

  constructor(private ofauth:AngularFireAuth,private http:HttpClient) {

     this.user=ofauth.user;  
                                     //pour verifier user existe ou non bech najem ndhaher eli nheb fel navbar 

   }


   

  signUp(email:any,password:any){
    
    return this.ofauth.createUserWithEmailAndPassword(email,password);

  }

  login(email:any,password:any){

    

    return this.ofauth.signInWithEmailAndPassword(email,password);


  }

  logout(){

    return this.ofauth.signOut();

  }


  Authentification(email:String,password:String):Observable<any> {

    return this.http.post(this.url+email+"/"+password,{email,password},{responseType:'text' as 'json'});
  }



  DebloquerCompte(email:string){
 
    
    return this.http.post(this.url1+email,{email},{responseType:'text' as 'json'});
  }

  AddUser(user:any,password:any){

    return this.http.post<any>("http://localhost:8087/add-user/"+password,user)
    
  }


  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', 'http://localhost:8087/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  setPhotoByClient(idUser:any,photo:any){

    return this.http.post("http://localhost:8087/setPhoto/"+idUser+"/"+photo ,{responseType:'text' as 'json'}
  );
  }


  ForgetPassword(email:any){

    return this.http.post("http://localhost:8087/forget-Password/"+email,{email},{responseType:'text' as 'json'})


  }

  
  getUserByUsername(username:any){

    return this.http.get("http://localhost:8087/getUser/"+username)


  }

  changerPassword(username:any,oldPassword:any,password:any,newPassword:any){

      return this.http.post<any>("http://localhost:8087/changer-Password/"+username+"/"
      +oldPassword+"/"+password +"/"+newPassword,
      {username,oldPassword,password,newPassword},{responseType:'text' as 'json'}) 
      // ken jeni erreur parse wala failure raw lezem nhot kima haka 
  }
 

    getLongAndLat(city:any){

      return  this.http.post("http://localhost:8087/GeoIPTest/"+city ,city);

    }

    loggedIn(){

      return !! localStorage.getItem('token');
    }

}
