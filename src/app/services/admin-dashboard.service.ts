import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

    user:any;
    geo:any;
    appointement:any;
    userApp:any;
    listnotif:Array<any>=[];
    listEmail:Array<any>=[];

  constructor(private http:HttpClient) { }

  url= "http://localhost:8087/";


  getAllUsers():Observable<any>{

    return this.http.get<any>(this.url +"getAllUsers" )
  }
   
  deleteUserById(id:number):Observable<any>{

    return this.http.delete<any>(this.url +"deleteUserById/"+id);
  }


  getUserById(id:any){

    return this.http.get(this.url +"getUserById/"+id);
  }


  setdata(data:any)
  {

  this.user=data;
  }

  setdataGeo(data:any)
  {

  this.geo=data;
  }

 
  updateUser(user:any,id:number){

    let url="http://localhost:8087/updateUser/"+ id;
    return this.http.put(url, user);
  }


  blockUser(id:number){

    return this.http.get(this.url+"blockedUser/"+id);
  }

  deblockUser(id:number){

    return this.http.get(this.url+"deblockedUser/"+id);
  }

    
   getAllAds(){

    return this.http.get(this.url+"getAllAds")
   }


   addAppointement(appointement:any,id:number){


    return this.http.post(this.url+"add-Appointment"+"/"+id,appointement,{responseType:'text' as 'json'});
    
   }
   

   getAppointement(idApp:number){

    return this.http.get(this.url+"getAppointement"+"/"+idApp);
   }

   setAppointement(data:any,data1:any){

    this.userApp=data;
    this.appointement=data1
   }

   getAllAppointement(){

    return this.http.get(this.url+"getallAppoitement");
   }



   
  updateAppointement(appointement:any,idApp:number){

    let url="http://localhost:8087/updateAppointment/"+ idApp;
    return this.http.put(url, appointement,{responseType:'text' as 'json'});
  }

  updateProfileUser(user:any,idUser:number){

    let url="http://localhost:8087/updateProfileUser/"+ idUser;
    return this.http.put(url, user,{responseType:'text' as 'json'});
  }


   isVisibility(id:any){

    return this.http.get(this.url+"isVisibility/"+id);

   }
  
   isNotVisibility(id:any){

    return this.http.get(this.url+"isNotVisibility/"+id);

   }

   
   isPurchased(id:any){

    return this.http.get(this.url+"isPurchased/"+id);

   }
  
   isNotPurchased(id:any){

    return this.http.get(this.url+"isNotPirchased/"+id);

   }

   getUserByEmail(email:string){

    return this.http.get(this.url+"getUsersByEmail/"+email);

   }

   
   isConnected(id:number){

    return this.http.get(this.url+"isConnected/"+id);
    
   }

   isDeconnected(id:number){
    return this.http.get(this.url+"isDonnected/"+id);

   }
 
   findIdByUserName(username:string){

    return this.http.get(this.url+"findIdByUserName/"+username);

   }
    
   deleteAppointementById(idapp:number){

    return this.http.delete(this.url+"deleteAppById/"+idapp);
   }


   addUserNotif(idUser:any){

   return this.http.get(this.url+"adduserNotif/"+idUser)

   }

   getUsersByNotifs(){

    return this.http.get(this.url+"getUserByNotification")
   }

   deleteNotifById(id:any){

    return this.http.delete<any>(this.url +"deleteNotifById/"+id)
   }


   deleteAdById(idAd:any){

     return this.http.delete(this.url + "deleteAdById/"+idAd)
   }


   getAllReclamationsByNotifAndUser(){

    return this.http.get(this.url+"getAllReclamationsByNotifAndUser");
   }


   getAdByDistanceSorting(id:any){

    return this.http.get(this.url+"getAdsByDistanceSorting/"+id);
   }


   getAllEmailReceived(){

    return this.http.get(this.url+"getAllEmailReceived")
   }



   setDataEmail(listEmail:any){


     this.listEmail=listEmail;

   }
}
