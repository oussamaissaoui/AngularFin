import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit,AfterViewInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ad } from '../Ad';
import { AdServiceService } from '../ad-service.service';
import * as L from 'leaflet';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isSticky: boolean = false;


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  LocationFormGroup:FormGroup;

  isEditable = false;
  isLinear=false;

  firstFBdata:any;

  imageFile:File;
  imageInter:any;

  Ad1: Ad = new Ad();

  idAnnAjout:number;

  newNum:number;
  private map;
  //('',0,'',0,0,0,{rue:'',id:11,numTel:0,codePostal:0,location:"TUNIS",gpsLatitude:0,gpsLongitude:0 })

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      this.isSticky = window.pageYOffset >= 90;
    }

    //************************************************************************************************************************ */
    tokenObj= JSON.parse(localStorage.getItem('token'));

    varrzeb:any;
    iduser:any;

    //************************************************************************************************************************

  constructor(config: NgbCarouselConfig, private sel:ElementRef,private modalService: NgbModal,
    private _formBuilder: FormBuilder, private Servv: AdServiceService, private router:Router, @Inject(DOCUMENT) private _document: Document,
    private auth:AuthService) { 
    config.interval = 6000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    ///////////////////////////////////// MODAL ADD WITh FORM CONTROL
  
  }
  
  open(content) {

    this.modalService.open(content, {
      centered: true,
      size: 'xl',
      //  windowClass: 'custom-class' IMPORTANT !!!! encapsulation: ViewEncapsulation.None or NGdeep + css custom
      // https://stackoverflow.com/questions/53178873/ngbmodal-custom-class-styling 
    });
    console.log('tneeeeeeeeeeekkkkkkkkkkkknaaaaaa',this.varrzeb)

  }
  reloadCurrentRoute() {
   // location.reload()
   window.location.reload();
  
  }

  ajouterAnn(){
    
    this.Ad1.title=this.firstFormGroup.value.TitleCtrl;
    this.Ad1.phoneNumber=this.firstFormGroup.value.PhoneCtrl;
    this.Ad1.description=this.firstFormGroup.value.DescriptionCtrl;
    this.Ad1.surface=this.secondFormGroup.value.SurfaceCtrl;
    this.Ad1.nbrPieces=this.secondFormGroup.value.RoomCtrl;
    this.Ad1.prix=this.secondFormGroup.value.PriceCtrl;
    this.Ad1.favorite=false;
    this.Ad1.adresse={rue:this.firstFormGroup.value.StreetCtrl,
      id:200,
      numTel:this.firstFormGroup.value.RePhoneCtrl,
      codePostal:this.firstFormGroup.value.PostalCtrl,
      location:this.firstFormGroup.value.CityCtrl,
      gpsLatitude:44.44,//this.firstFormGroup.value.RePhoneCtrl,
      gpsLongitude:55.55};//this.firstFormGroup.value.RePhoneCtrl};
    
    this.Ad1.autresCriteres={
      id:200,
      terrasse:this.secondFormGroup.value.TerrasseCtrl,
            balcon:this.secondFormGroup.value.BalconCtrl,
            assenceur:this.secondFormGroup.value.AssenceurCtrl,
            cave:this.secondFormGroup.value.CaveCtrl,
            piscine:this.secondFormGroup.value.PiscineCtrl,
            vueMer:this.secondFormGroup.value.VueMerCtrl,
            parking:this.secondFormGroup.value.ParkingCtrl,
            garage:this.secondFormGroup.value.GarageCtrl
    }

    this.Servv.AjoutAd(this.Ad1,this.iduser).subscribe((data:any)=>{
      //console.log(data.id);
      console.log(data)
      this.idAnnAjout=data.id;
      console.log(this.idAnnAjout)
     
      this.Servv.addImage(this.imageFile,data.id).subscribe(img=>console.log(img));
      
      //this.Servv.getSpring().subscribe(dat=>console.log(dat));
      this.Servv.getSpring().subscribe(dat=>console.log(dat));
    this.ngOnInit;
  
      
    }

    

    
    )
    

   
  }

  clickImg(){
    //var uploadImageData = new FormData();
    //uploadImageData.append('file', this.imageFile,this.imageFile.name);
                                                       
    //console.log(uploadImageData);
   
      console.log(this.Ad1)
  }

  ngOnInit(): void {

    let varr = jwtDecode(this.tokenObj.token);
    this.varrzeb=varr;
    console.log('AAAAAAAAAAAASSSSSSSSSSSBBBBBBBBAAAAAAAA',varr)

    this.auth.getUserByUsername(this.varrzeb.sub).subscribe((data:any)=>{

      console.log("nikeommmmli kahbiiiiii ",data)
      this.iduser=data.id;
    })

    this.firstFormGroup = this._formBuilder.group({
      TitleCtrl:'',
      DescriptionCtrl:'',
      TypeCtrl:'',
      PhoneCtrl:'',
      StreetCtrl:'',
      CityCtrl:'',
      PostalCtrl:'',
      RePhoneCtrl:''
     // DescriptionCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      RoomCtrl:'',
      SurfaceCtrl:'',
      PriceCtrl:'',

      TerrasseCtrl:'',
      BalconCtrl:'',
      AssenceurCtrl:'',
      GarageCtrl:'',
      VueMerCtrl:'',
      ParkingCtrl:'',
      CaveCtrl:'',
      PiscineCtrl:''
    });

    this.thirdFormGroup = this._formBuilder.group({
      ImageCtrl:''
    })

    this.LocationFormGroup=this._formBuilder.group({
      LatLongCtrl:''
    });
 
    this.Servv.getSpring().subscribe(dat=>console.log(dat));

    /*******************************************************/
  }

  AddFirstCtrl(){
    console.log(this.firstFormGroup.value.TitleCtrl)
  }

  AddSecondCtrl(){
    console.log(this.secondFormGroup.value)
  }

  AddThirdCtrl(){
    console.log(this.thirdFormGroup)
  }

  OnSelectFile(event){
    console.log(event)
    this.imageInter=event.target;
    this.imageFile=event.target.files[0];
    console.log(this.imageFile.name)
    /*
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.imageFile, this.imageFile.name);
    console.log(uploadImageData)*/

    var reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload= (_event)=>{
      this.imageInter=reader.result;
}

  }

  ngAfterViewInit(): void { 

   // this.map = L.map('mapid').setView([51.505, -0.09], 13);
  }


}
