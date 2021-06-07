import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(private loader: LoadingService) {}

  intercept(request: HttpRequest <unknown>, next: HttpHandler):Observable<HttpEvent<unknown>> {
    
    if (request.url.includes("http://localhost:8087/authentification/") ) 
    {
    this.loader.show();
    }
    return next.handle(request).pipe(
      finalize(() => {

        
        setTimeout(()=>{
          this.loader.hide();
        },600);
       
      })
    );
  }

}
