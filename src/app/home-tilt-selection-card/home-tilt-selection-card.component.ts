import { Component, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-home-tilt-selection-card',
  templateUrl: './home-tilt-selection-card.component.html',
  styleUrls: ['./home-tilt-selection-card.component.css']
})
export class HomeTiltSelectionCardComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  addJsToElement(): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src='https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js';
    
    script.text= ``;
    this.renderer.appendChild(document.body, script);
    
    return script;
  }

  ngOnInit(): void {
    this.addJsToElement().onload = () => {
      console.log('le script marche ');
  
}
  }

}
