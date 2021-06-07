import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdServiceService } from 'src/app/ad-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdWithId } from 'src/app/adWithId';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-annonces',
  templateUrl: './my-annonces.component.html',
  styleUrls: ['./my-annonces.component.css']
})
export class MyAnnoncesComponent implements OnInit {
  
  
   tokenObj= JSON.parse(localStorage.getItem('token'));
   

  annonces:any[];
  annoncesByUser:any[];
  deleteIdd:number;
  updateIdd:any;
  varrzeb:any

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;

  Ad1:AdWithId = new AdWithId();


  constructor(private serv: AdServiceService, private sanitizer:DomSanitizer, private _router:Router,
    config: NgbModalConfig, private modalService: NgbModal,private _formBuilder: FormBuilder, private auth:AuthService) { 
      config.backdrop = 'static';
    config.keyboard = false;
    }

 updateAnnonce(){

 }

  open(content, id:number) {
    this.deleteIdd=id;
    console.log(this.deleteIdd)
    this.modalService.open(content, {
      centered: true,
      size: 'l',
      //  windowClass: 'custom-class' IMPORTANT !!!! encapsulation: ViewEncapsulation.None or NGdeep + css custom
      // https://stackoverflow.com/questions/53178873/ngbmodal-custom-class-styling 
    });
  }
  open2(content2, updateAd:any) {
    this.updateIdd=updateAd;
    console.log(this.updateIdd.autresCriteres.balcon)
    
    this.firstFormGroup = this._formBuilder.group({
      TitleCtrl:updateAd.title,
      DescriptionCtrl:updateAd.description,
      TypeCtrl:'Sell',
      PhoneCtrl:updateAd.phoneNumber,
      StreetCtrl:updateAd.adresse.rue,
      CityCtrl:updateAd.adresse.location,
      PostalCtrl:updateAd.adresse.codePostal,
      RePhoneCtrl:updateAd.adresse.numTel,
      AdTypeCtrl:'Sell',

      RoomCtrl:updateAd.nbrPieces,
      SurfaceCtrl:updateAd.surface,
      PriceCtrl:updateAd.prix,

      TerrasseCtrl:updateAd.autresCriteres.terrasse,
      BalconCtrl:updateAd.autresCriteres.balcon,
      AssenceurCtrl:updateAd.autresCriteres.assenceur,
      GarageCtrl:updateAd.autresCriteres.garage,
      VueMerCtrl:updateAd.autresCriteres.vueMer,
      ParkingCtrl:updateAd.autresCriteres.parking,
      CaveCtrl:updateAd.autresCriteres.cave,
      PiscineCtrl:updateAd.autresCriteres.piscine

      
     // DescriptionCtrl: ['', Validators.required]
    });
    
    
    /*
    this.firstFormGroup.value.TitleCtrl = updateAd.title;
    this.firstFormGroup.value.DescriptionCtrl=this.updateIdd.description;
    this.firstFormGroup.value.TypeCtrl='Sell';
    this.firstFormGroup.value.PhoneCtrl=this.updateIdd.phoneNumber;
    this.firstFormGroup.value.StreetCtrl=this.updateIdd.adresse.rue;
    this.firstFormGroup.value.CityCtrl=this.updateIdd.adresse.location;
    this.firstFormGroup.value.PostalCtrl=this.updateIdd.adresse.codePostal;
    this.firstFormGroup.value.RePhoneCtrl=this.updateIdd.adresse.numTel;
    

    this.firstFormGroup.value.RoomCtrl=this.updateIdd.nbrPieces;
    this.firstFormGroup.value.SurfaceCtrl=this.updateIdd.surface;
    this.firstFormGroup.value.PriceCtrl=this.updateIdd.prix;

    this.firstFormGroup.value.TerrasseCtrl=true;
    this.firstFormGroup.value.BalconCtrl=true;
    this.firstFormGroup.value.AssenceurCtrl=true;
    this.firstFormGroup.value.GarageCtrl=true;
    this.firstFormGroup.value.VueMerCtrl=true;
    this.firstFormGroup.value.ParkingCtrl=true;
    this.firstFormGroup.value.CaveCtrl=true;
    this.firstFormGroup.value.PiscineCtrl=false;*/

    console.log(this.firstFormGroup.value.TitleCtrl)
    this.modalService.open(content2, {
      centered: true,
      size: 'xl',
      scrollable:true
    });
    

   
  }
 
 
  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
        console.log(currentUrl);
        this.ngOnInit();
    });
  }
  deleteAnn(id: number){
    this.serv.deleteAnn(id).subscribe(
      
      (data)=>{
      console.log(data)
      
    
    }),
    err=>{
      console.log('error');
      

    }

  }
  

  showall(){

    let varr = jwtDecode(this.tokenObj.token);

    this.varrzeb=varr
    console.log('AAAAAAAAAAAASSSSSSSSSSSBBBBBBBBAAAAAAAA',varr)
    this.auth.getUserByUsername(this.varrzeb.sub).subscribe((data:any)=>{

      console.log("nikeommmmli kahbiiiiii ",data.ads);
      this.annoncesByUser=data.ads;
      console.log('9999999999999999999999999',this.annoncesByUser)

      for (var img of this.annoncesByUser) {

        console.log()
        
        
        if (img.imgdesc.length > 0) {
          console.log("desc" + img.imgdesc[0].data);
          let objectURL = 'data:image/jpeg;base64,' + img.imgdesc[0].data;
          img.imgdesc[0].data = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        
          console.log(img.imgdesc[0].data);
        
          console.log("URL" + objectURL);
        
        
        
        }
        }
    
      
       
      //this.iduser=data.id;
    })

    /*
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

      
    )*/
 
    
  }

  
  test(){
    
    console.log(this.firstFormGroup.value.TitleCtrl)
    this.Ad1.id=this.updateIdd.id;
    this.Ad1.title=this.firstFormGroup.value.TitleCtrl;
    this.Ad1.phoneNumber=this.firstFormGroup.value.PhoneCtrl;
    this.Ad1.description=this.firstFormGroup.value.DescriptionCtrl;
    this.Ad1.surface=this.firstFormGroup.value.SurfaceCtrl;
    this.Ad1.nbrPieces=this.firstFormGroup.value.RoomCtrl;
    this.Ad1.prix=this.firstFormGroup.value.PriceCtrl;
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
      terrasse:this.firstFormGroup.value.TerrasseCtrl,
            balcon:this.firstFormGroup.value.BalconCtrl,
            assenceur:this.firstFormGroup.value.AssenceurCtrl,
            cave:this.firstFormGroup.value.CaveCtrl,
            piscine:this.firstFormGroup.value.PiscineCtrl,
            vueMer:this.firstFormGroup.value.VueMerCtrl,
            parking:this.firstFormGroup.value.ParkingCtrl,
            garage:this.firstFormGroup.value.GarageCtrl
    }

    console.log(this.Ad1);

    this.serv.UpdateAnn(this.updateIdd.id,this.Ad1).subscribe(dt=>{
      console.log(dt);
    })
  }
  clickFunction() {

    alert("Your Ad has been Updated successfully!");

  }

  clickFunctionDelete() {

    alert("Your Ad has been Deleted successfully!");

  }

  ngOnInit(): void {
    
    

    this.showall();


  // console.log(this.Ad1.id)
   
    
  }

}
