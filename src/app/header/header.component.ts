import { Component, HostListener, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSticky: boolean = false;

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      this.isSticky = window.pageYOffset >= 90;
    }

  constructor(config: NgbCarouselConfig) { 
    config.interval = 6000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    
  
  }

}
