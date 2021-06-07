import { Component, ElementRef, OnInit, ViewChild,AfterViewInit, ViewChildren, QueryList, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { AdServiceService } from '../ad-service.service';


@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit,AfterViewInit {
  products2: any[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;
  sortKey: string;
  details: any;
  imgtodisp:any="../../assets/4.jpg";

  myThumbnail:any;
  myFullresImage:any;


  imm:any[];

  lat:any;
  lng :any;

  com1:any
  //@ViewChild("abs",{static: true}) name : ElementRef;
  //@ViewChildren(TemplateRef) templates: QueryList<any>;
  //@ViewChild("come") name2 : ElementRef;

  constructor(private productService: AdServiceService,
    private primengConfig: PrimeNGConfig, private sanitizer: DomSanitizer,
     private modalService: NgbModal) { }
 
 
     ngAfterViewInit(): void {
    


  }
  
     /**************************************************************************** */
    

    /**************************************************************************** */



  open(content) {

    this.modalService.open(content, {
      centered: true,
      size: 'xl',
      //  windowClass: 'custom-class' IMPORTANT !!!! encapsulation: ViewEncapsulation.None or NGdeep + css custom
      // https://stackoverflow.com/questions/53178873/ngbmodal-custom-class-styling 
    });
    
  }
  
  btndetails(products2) {
    this.details = products2;
    let a1=products2.adresse.gpsLatitude;
    this.lat= parseFloat(a1) ;
    let a2=products2.adresse.gpsLongitude;
    this.lng=parseFloat(a2) ;;
    console.log(a1)
    console.log(a2)
    console.log(this.lat, this.lng)
    console.log('DETAILS UNITAIRe' + this.details.date)
    this.myThumbnail=products2.imgdesc[0].data;
    this.myFullresImage=products2.imgmulti[0].imageUrl;
    
  }

  showimg1(){
    this.myThumbnail=this.myFullresImage;
    //this.myFullresImage="../../assets/1.jpg"

  }
  showimg0(){
    this.myThumbnail=this.myFullresImage;
    //this.myFullresImage="../../assets/4.jpg"

  }
  add(){

  //    console.log('asssssssssssssbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaa',this.name)
    //console.log(this.templates._results.ElementRef)

   }

ngOnInit(): void {




//// spring get test 

this.productService.getSpring().subscribe(data => {
this.products2 = data.content;

console.log(data);
//console.log(this.name)





for (var img of this.products2) {

console.log()


if (img.imgdesc.length > 0) {
  console.log("desc" + img.imgdesc[0].data);
  let objectURL = 'data:image/jpeg;base64,' + img.imgdesc[0].data;
  img.imgdesc[0].data = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  

  console.log(img.imgdesc[0].data);

  console.log("URL" + objectURL);



}
}








console.log(this.products2);

console.log(data);





})



this.sortOptions = [
{ label: 'Price High to Low', value: '!prixEstim' },
{ label: 'Price Low to High', value: 'prixEstim' }
];

this.primengConfig.ripple = true;

}

onSortChange(event: { value: any; }) {
let value = event.value;

if (value.indexOf('!') === 0) {
this.sortOrder = -1;
this.sortField = value.substring(1, value.length);
}
else {
this.sortOrder = 1;
this.sortField = value;
}


}






}
