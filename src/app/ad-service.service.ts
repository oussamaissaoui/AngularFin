import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Ad } from './Ad';
import { Observable } from 'rxjs';
import { AdWithId } from './adWithId';

@Injectable({
  providedIn: 'root'
})
export class AdServiceService {
  status: string[] = ['TUNIS', 'MANNOUBA', 'ARIANA'];

  constructor(private http: HttpClient) { }

  URL:any='http://localhost:8087/Achat';
 
  getSpring(){
  
      return this.http.get<any>('http://localhost:8087/Achat/All');
  }
  
  getSpringId(id:number){
      return this.http.get('http://localhost:8087/Achat/findByid/'+id);
  }
  getMostViewed(){

    return this.http.get<any>(this.URL+'/MostViewed');

  }


  AjoutAd(ann:Ad,id:number){
    return this.http.post(this.URL+'/Add'+'/'+id,ann);

  }


  addImage(imgFile:File,idd):Observable<HttpEvent<{}>>{
            /*const headers = { 'content-type': 'image'} 
            return this.http.post("http://localhost:8090/image/upload/id",imgFile,{'headers':headers});*/
            //const formData = new FormData();

        //formData.append('file', imgFile, 'file');
        //const headers = new HttpHeaders({
          //'Content-Type': 'multipart/file;boundary=gc0p4Jq0M2Yt08jU534c0p'
        //});

        const data: FormData = new FormData();
            data.append('file', imgFile);
        //const options = { headers };
        const newRequest = new HttpRequest('POST', 'http://localhost:8087/image/upload1/'+idd, data, {
          reportProgress: true,
          responseType: 'text'
          });


        //return this.http.post(,imgFile,options);
        return this.http.request(newRequest);

  }

  deleteAnn (id:number){
    return this.http.delete(this.URL+'/delete/'+id)
  }

  

  UpdateAnn (id:number,Annnonce:AdWithId){

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Accept': 'application/json'})
  };
  let body = JSON.stringify(Annnonce);
    return this.http.put('http://localhost:8087/Achat/update/'+id, body,httpOptions)
  }

  SearchMultiCrit(surface:number,  nbrPieces:number, location:string, prixMin:number,prixMax:number){
    return this.http.get(this.URL+'/find/Main/'+surface+'/'+nbrPieces+'/'+location+'/'+prixMin+'/'+prixMax)
  }
}
