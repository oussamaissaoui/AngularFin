import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdServiceService } from '../ad-service.service';

@Component({
  selector: 'app-glass-prev',
  templateUrl: './glass-prev.component.html',
  styleUrls: ['./glass-prev.component.css']
})
export class GlassPrevComponent implements OnInit {

  annonces:any[];

  constructor(private serv: AdServiceService, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {

    this.serv.getMostViewed().subscribe(
      data => {
        console.log(data[0].id)
        this.annonces=data;
        console.log(this.annonces)
        for (var img of this.annonces) {

          console.log()
          
          
          if (img.imgdesc.length > 0) {
            console.log("desc" + img.imgdesc[0].data);
            let objectURL = 'data:image/jpeg;base64,' + img.imgdesc[0].data;
            img.imgdesc[0].data = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          
            console.log(img.imgdesc[0].data);
          
            console.log("URL" + objectURL);
          
          
          
          }
          }
      }
    )
  }
  
}
