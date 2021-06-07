import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider, SearchControl,MapBoxProvider } from 'leaflet-geosearch';

import'leaflet-search';
import { AdServiceService } from '../ad-service.service';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-map-comp-princ',
  templateUrl: './map-comp-princ.component.html',
  styleUrls: ['./map-comp-princ.component.css']
})
export class MapCompPrincComponent implements OnInit {
  
  
   

  provider = new OpenStreetMapProvider();
  provider2 = new MapBoxProvider();

   searchControl =  GeoSearchControl({
    provider: this.provider,
    //style: 'bar',
    showMarker: true,
    showPopup: false,
    autoClose: true,
    retainZoomLevel: false,
    animateZoom: true,
    keepResult: false,
    searchLabel: 'search'
  });

 // searchControl = new GeoSearchControl();
 

//  searchControl = GeoSearchControl(this.provider);





  //@ViewChild("buttonsubmitx") buttonsubmitx : ElementRef;
  @ViewChild("content") ModalContent : ElementRef;
  private map;
   a="asfur";


   products2: any[];


   finall:{};

   latLong :any[];

   
   lg=2;

   ServiceId:number;
   ModalServData:any;


   myThumbnail="../../assets/5";

  
   
 constructor(private productService: AdServiceService,private sanitizer: DomSanitizer,
  private router: Router ,private primengConfig: PrimeNGConfig, private modalService: NgbModal) { }

  DataFin: any=[];
  lt:any;

  detect(i:number,content?){
  
    //for (var i=1;i<9;i++){
    let r='bout'+i;
    console.log(r)
   let buttonSubmit = L.DomUtil.get(r);
   
      
    L.DomEvent.addListener(buttonSubmit, 'click', (ee) => {
      console.log(buttonSubmit.id)
      let x=buttonSubmit.id.substring(4);
      let z = parseInt(x);
      this.ServiceId=z;
      //alert(z)
      //this.router.navigateByUrl('/AdList');
      //+++++++++++++++++++++++++++++++++++++++++++++++++++

      this.modalService.open(this.ModalContent, {
        centered: true,
        size: 'xl',
       
      });

      //********************************************** */
            this.productService.getSpringId(z).subscribe(data=>{
              this.ModalServData=data;
              console.log("daaaaaaat",this.ModalServData)
              this.myThumbnail=this.ModalServData.imgmulti[0].imageUrl;
            });
      });

      

    //}
  }
/*
  onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
    //this.theMarker= new L.marker(e.latlng);
    //let marker3= L.marker(e.latling).addTo(this.map);

    
}*/
  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition(position=>
    {
      const coordes = position.coords;
      const latLong = [coordes.latitude, coordes.longitude];

      console.log(position.coords.latitude)
      
      this.lt=position.coords.latitude;
      this.lg=position.coords.longitude;
      /////////////////////////////
      

    }
    );

   
    

    
     
         
}
      
    
  

      ngAfterViewInit(): void { 

        

        
       
       const nl=36.924783;
       const ng=10.225182;

       //console.log(this.lt)
          //////////////
         // console.log(
           // `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
          //);
    

          this.map = L.map('map', {
            center:  [nl,ng],
            zoom: 12
          });

          


        
          const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib3Vzc2FtYWlzc2FvdWkiLCJhIjoiY2trMmdzdjRmMTFkeDJubzVzMW9tNjEydiJ9.7d8xdjQkW2eS6DDuQyeVnw',
          {
            attribution:
              '',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token',
          });
      
          tiles.addTo(this.map);

        
            /*
          for (var i = 0; i < 1; i++) {
           let marker = new L.marker([36.924783+i,10.225182+i]).addTo(this.map);
              
              
          };*/

          L.control.scale().addTo(this.map);

         

          //console.log(this.searchControl)
          

         // const latLong2 = [36.924783,10.225182];
    
          let Marker = new L.marker([36.89,10.22619]).addTo(this.map);
          let marker2= L.marker([36.89,10.22519]).addTo(this.map);
          //const popup2 = L.popup().setContent('<button id="buttonsubmit" type="button" >Add Marker</button>');

          
          let zero = L.marker([3.924783,10.225195]).bindPopup('This is Littleton, CO.'),
          first    = L.marker([3.924783,10.24]).bindPopup('This is Denver, CO.'),
          second    = L.marker([3.924783,10.26]).bindPopup('This is Aurora, CO.'),
          third    = L.marker([3.924783,10.28]).bindPopup('This is Golden, CO.');
      
          let cities = L.layerGroup([zero, first]).addTo(this.map);
          let cities2 = L.layerGroup([second, third]).addTo(this.map);


          




          let mapboxUrl='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib3Vzc2FtYWlzc2FvdWkiLCJhIjoiY2trMmdzdjRmMTFkeDJubzVzMW9tNjEydiJ9.7d8xdjQkW2eS6DDuQyeVnw';
          var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1}),
          streets   = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {id: 'MapID', tileSize: 512, zoomOffset: -1});
      
          var baseMaps = {
            "Maps": grayscale,
            "Streets": streets
            
        };
        
        var overlayMaps = {
            "Cities": cities,
            "Cities2": cities2
            

        };

        L.control.layers(baseMaps, overlayMaps).addTo(this.map);
 //******************************************************************************************************************** */      
 
 
 var data = [
  {"loc":[41.575330,13.102411], "title":"aquamarine"},
  {"loc":[41.575730,13.002411], "title":"black"},
  {"loc":[41.807149,13.162994], "title":"blue"},
  {"loc":[41.507149,13.172994], "title":"chocolate"},
  {"loc":[41.847149,14.132994], "title":"coral"},
  {"loc":[41.219190,13.062145], "title":"cyan"},
  {"loc":[41.344190,13.242145], "title":"darkblue"},	
  {"loc":[41.679190,13.122145], "title":"darkred"},
  {"loc":[41.329190,13.192145], "title":"darkgray"},
  {"loc":[41.379290,13.122545], "title":"dodgerblue"},
  {"loc":[41.409190,13.362145], "title":"gray"},
  {"loc":[41.794008,12.583884], "title":"green"},	
  {"loc":[41.805008,12.982884], "title":"greenyellow"},
  {"loc":[41.536175,13.273590], "title":"red"},
  {"loc":[41.516175,13.373590], "title":"rosybrown"},
  {"loc":[41.506175,13.173590], "title":"royalblue"},
  {"loc":[41.836175,13.673590], "title":"salmon"},
  {"loc":[41.796175,13.570590], "title":"seagreen"},
  {"loc":[41.436175,13.573590], "title":"seashell"},
  {"loc":[41.336175,13.973590], "title":"silver"},
  {"loc":[41.236175,13.273590], "title":"skyblue"},
  {"loc":[41.546175,13.473590], "title":"yellow"},
  {"loc":[41.239190,13.032145], "title":"white"}
];

/*
var dataAn=[];
var dataAn2=[{}];

for (var img of this.products2){
  let interlat= img.adresse.gpsLatitude;
  let interlong= img.adresse.gpsLongitude;
  let loc=[interlat,interlong]
  let title=img.title;
  let fin = {loc,title};
dataAn.push(fin); 
};

this.DataFin=dataAn;
*/
//console.log(this.products2[0].adresse.gpsLatitude)


//this.products2.forEach(val=>dataAn2.push(Object.assign({}, val.adresse.gpsLatitude,img.adresse.gpsLongitude)));
//console.log(dataAn2);

var markersLayer = new L.LayerGroup();	//layer contain searched elements
	this.map.addLayer(markersLayer); 

  this.map.addControl( new L.Control.Search({layer: markersLayer}) );

  this.productService.getSpring().subscribe(data => {
    this.products2 = data.content;
    console.log(this.products2);

    let dataAn=[];
let dataAn2=[{}];

    
      for (var i of this.products2 ){
        let interlat= i.adresse.gpsLatitude;
        let interlong= i.adresse.gpsLongitude;
        let loc=[interlat,interlong]
        let title=i.title;
        let fin = {loc,title};
       
      dataAn.push(fin); 

      this.DataFin.push(fin);
      
      };
      
      //this.DataFin=dataAn;
      console.log(this.DataFin)

      for(let i in this.DataFin) {
        var title = this.DataFin[i].title,	//value searched
          loc = this.DataFin[i].loc,		//position found
          marker = new L.Marker(new L.latLng(loc), {title: title} );//se property searched
        marker.bindPopup('title: '+ title );
        markersLayer.addLayer(marker);
      };


      for (var i of this.products2 ){
        if (i.imgdesc.length > 0) {
         
          let objectURL = 'data:image/jpeg;base64,' + i.imgdesc[0].data;
          i.imgdesc[0].data = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          
          console.log(i.imgdesc[0].data)
        };


      const contt='<button id="bout'+i.id+'"> Go to Ad </button>'
      const contt2='<h6>'+i.title+'</h6>'
      console.log(i.imgmulti[0].imageUrl)
      const img='<img src="'+i.imgmulti[0].imageUrl+'"style="width:80px;height:60px;">'
      let popup = L.popup({
        closeOnClick:false,
        autoClose:false,maxWidth:80,maxHeight:135
    })
      .setLatLng([i.adresse.gpsLatitude,i.adresse.gpsLongitude] )
      .setContent(contt2 + contt+img)
      
      
      .openOn(this.map);
      console.log(contt)
      
    }
    
    
    var circle = L.circle([36.924783,10.225195], {
      color: '',
      fillColor: '#f003',
      fillOpacity: 0.15,
      radius: 5000
  }).addTo(this.map);

  for (i=1;i<9;i++){
    this.detect(i);
  };
 
  

    });

  //console.log(this.DataFin)



  
  
 


        //let searchLayer =cities;
        
       
       
          //navbar Search Global
        //this.map.addControl(new L.Control.Search({layer: searchLayer,propertyName: 'name'}));
        //console.log(searchLayer)



    //***************************************************************************************************************** */    
        /*
          L.Control.Watermark = L.Control.extend({
          onAdd: function(map) {
              var img = L.DomUtil.create('h2');
      
              img.src = '../../assets/home-for-sale-sign-transparent-background.png';
              img.style.width = '100px';
      
              return img;
          },
      
          onRemove: function(map) {
               
          }
      });
      
      L.control.watermark = function(opts) {
          return new L.Control.Watermark(opts);
      }*/
     // L.control.watermark({ position: 'bottomright' }).addTo(this.map);


     
     //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Search Global
    // this.map.addControl(this.searchControl);


      //this.map.addControl(this.searchControl);
      
     // let  search = GeoSearchControl(a);
      //this.map.addControl(search);

      

   


          /*
          var controlSearch = new L.Control.Search({
            position:'topright',
            layer: cities,
            initial: false,
            zoom: 12,
            marker: false
          });
          
          this.map.addControl( controlSearch );
          

          L.control.search({
            layer: cities,
            initial: false,
            propertyName: 'name' // Specify which property is searched into.
          })
          .addTo(this.map);*/

          //this.map.addControl( L.Control.Search({layer: cities}) );

          

          
         
          
        
         
    
      
          
         
          //this.theMarker.bindPopup(popup);
          
         

        
        
    
         
        this.map.once('click', e=>{
          let marker3= L.marker(e.latlng).addTo(this.map);
          console.log(e.latlng.lat);

          this.map.panTo(e.latlng);
         // alert("You clicked the map at " + e.latlng);
        });
        //this.detect();
        
          
          
    
    
        
    
        /*  *************************************************************multi markers****************
         makeCapitalMarkers(map: L.map): void {
        this.http.get(this.capitals).subscribe((res: any) => {
          for (const c of res.features) {
            const lon = c.geometry.coordinates[0];
            const lat = c.geometry.coordinates[1];
            const marker = L.marker([lat, lon]);
    
            marker.addTo(map);
          }
        });
      }
        */

     

    
        
      }

     

     

}
