import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { LabelType, Options } from 'ng5-slider';
import { AdServiceService } from '../ad-service.service';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-box-new',
  templateUrl: './search-box-new.component.html',
  styleUrls: ['./search-box-new.component.css']
})
export class SearchBoxNewComponent implements OnInit {

  firstFormGroup:FormGroup;
  

  regions: any[]=[
   
    {value: 'ARIANA', viewValue: 'ARIANA'},
    {value: 'BEN_AROUS', viewValue: ' BEN_AROUS'},
    {value: 'BIZERTE', viewValue: 'BIZERTE'},
    {value: 'BEJA', viewValue: 'BEJA'},
    {value: 'GABES', viewValue: 'GABES'},
    {value: 'GAFSA', viewValue: 'GAFSA'},
    {value: 'KAIROUAN', viewValue: 'KAIROUAN'},
    {value: 'KASSERINE', viewValue: 'KASSERINE'},
    {value: 'KEBILLI', viewValue: 'KEBILLI'},
    {value: 'KEF', viewValue: 'KEF'},
    {value: 'MEHDIA', viewValue: 'MEHDIA'},
    {value: 'MONASTIR', viewValue: 'MONASTIR'},
    {value: 'MEDNINE', viewValue: 'MEDNINE'},
    {value: 'MANNOUBA', viewValue: 'MANNOUBA'},
    {value: 'NABEUL', viewValue: 'NABEUL'},
    {value: 'SFAX', viewValue: 'SFAX'},
    {value: 'SIDI_BOUZID', viewValue: 'SIDI_BOUZID'},
    {value: 'SILIANA', viewValue: 'SILIANA'},
    {value: 'SOUSSE', viewValue: 'SOUSSE'},
    {value: 'TATAOUINE', viewValue: 'TATAOUINE'},
    {value: 'TOZEUR', viewValue: 'TOZEUR'},
    {value: 'TUNIS', viewValue: 'TUNIS'},
    {value: 'ZAGHOUAN', viewValue: 'ZAGHOUAN'}
  ]; 
   //original config https://stackblitz.com/edit/ng5-slider-customised-range-slider-example-r6xpgg?file=src%2Fapp%2Fapp.component.ts
  //multi Silder Config****************
  minValue: number = 300000;
  maxValue: number = 590000;

  roomInter:number;
  surfInter:number;
  regionInter:string;

  annonces:any;

  
  
  options: Options = {
    floor: 50000,
    ceil: 900000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        
        default:
          return "M.Tnd " + value;
      }
    }
  };
  
  
  constructor(private fb:FormBuilder, private serv:AdServiceService,private modalService: NgbModal,private sanitizer:DomSanitizer) { }

  Req(){

    this.serv.SearchMultiCrit(this.surfInter,this.roomInter,this.regionInter,this.minValue,this.maxValue).subscribe(
      data=>{
        console.log(data)
        this.annonces=data;
        //this.anno=data;
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
      );

  }

  open(content) {

    this.modalService.open(content, {
      centered: true,
      size: 'xl',
      //  windowClass: 'custom-class' IMPORTANT !!!! encapsulation: ViewEncapsulation.None or NGdeep + css custom
      // https://stackoverflow.com/questions/53178873/ngbmodal-custom-class-styling 
    });}

  onSubmit() {
    console.log(this.firstFormGroup.value);
   this.regionInter=this.firstFormGroup.value.Region;
   this.surfInter=this.firstFormGroup.value.Surface;
   this.roomInter=this.firstFormGroup.value.RoomsNumber;

   console.log(this.regionInter, this.surfInter, this.roomInter)


    
  
    console.log(this.minValue)
    console.log(this.maxValue)
    console.log("hiiiiii")
  }

  ngOnInit(): void {
    this.firstFormGroup=this.fb.group({
      RoomsNumber:'',
      Surface:'',
      Region:''
    })
  }

}
