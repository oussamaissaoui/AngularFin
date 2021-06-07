import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { AuthService } from 'src/app/services/auth.service';
import{cleanString}  from '../profile/profile.component'


declare const L: any;


@Component({
  selector: 'app-geolocalisation',
  templateUrl: './geolocalisation.component.html',
  styleUrls: ['./geolocalisation.component.css']
})
export class GeolocalisationComponent implements OnInit {
 geo:any;

  constructor(private adminService:AdminDashboardService,
    private router:Router,private auth:AuthService) { }


  ngOnDestroy(){

  }

  ngDoCheck(){


    let location= JSON.stringify(this.adminService.geo);
    let json= cleanString(location)
    this.geo=JSON.parse(json)
    //console.log(this.geo);
    
  
    if (!navigator.geolocation) {
     // console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [this.geo.latitude, this.geo.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(latLong, 13);
    
    

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">GoogleMap</a>  <a href="https://creativecommons.org/licenses/by-sa/2.0/"></a>,  <a href="https://www.mapbox.com/"></a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(mymap);

      let marker = L.marker(latLong).addTo(mymap);

      marker.bindPopup('<b>Hi</b>').openPopup();

      let popup = L.popup()
        .setLatLng(latLong)
        .setContent('I am here')
        .openOn(mymap);
    });
    this.watchPosition();

  }
  ngOnInit() {
   
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
}

