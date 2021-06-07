import { Injectable,Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  


  constructor() {


   } 

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<unknown>>{


  // if (req.url !== "http://localhost:8085/authentification/" ) //houni dhaherli najem nhot requette eli nhebha 
  //   {
   const  TokenObj=JSON.parse(localStorage.getItem('token')!);

      console.log("Tokeeen genereeer :",TokenObj)
      
      if(TokenObj != null){

      console.log("tokeeen Interceptor  " +TokenObj.token)

      req = req.clone({
      setHeaders: {
      Authorization: `Bearer ${TokenObj.token}`
      
      }
      });
      
 //   }
 }
      return next.handle(req);

}
}