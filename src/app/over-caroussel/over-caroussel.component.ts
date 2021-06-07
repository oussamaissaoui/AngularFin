import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-over-caroussel',
  templateUrl: './over-caroussel.component.html',
  styleUrls: ['./over-caroussel.component.css']
})
export class OverCarousselComponent implements OnInit {

  Elemen:any;
  button:any; 
  
  

  constructor(private ref:ElementRef, private rend: Renderer2) { }

  @HostListener('window:scroll', ['$hi']) 
  doSomething() {
   
    let redd = window.scrollY;
  if (window.pageYOffset<780){
  this.rend.setStyle(this.Elemen,'margin-top', redd* 1.3+'px');
  this.rend.setStyle(this.button,'margin-top', redd* 1.2+'px');
  //console.log(this.rend)
}

  };

  
  ngOnInit(): void {
   

   let tex: HTMLElement = this.ref.nativeElement.querySelector('h2') as HTMLElement;
   let btton: HTMLElement = this.ref.nativeElement.querySelector('button') as HTMLElement
   this.Elemen=tex;
   this.button=btton;
  
    
  }

  

  
 


}

