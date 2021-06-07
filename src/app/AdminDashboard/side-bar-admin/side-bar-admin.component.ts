import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-bar-admin',
  templateUrl: './side-bar-admin.component.html',
  styleUrls: ['./side-bar-admin.component.css']
})
export class SideBarAdminComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

    /*this.addJsToElement().onload = () => {
      console.log('le script marche ');
  
      }*/

  }

    
  /*addJsToElement(): HTMLScriptElement {

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text= `
  $(document).ready(function($) {
	
    // Variables declarations
    var $wrapper = $('.main-wrapper');
    var $pageWrapper = $('.page-wrapper');
    var $slimScrolls = $('.slimscroll');
    var $sidebarOverlay = $('.sidebar-overlay');
    
    // Sidebar
    var Sidemenu = function() {
      this.$menuItem = $('#sidebar-menu a');
    };
  
    function init() {
      var $this = Sidemenu;
      $('#sidebar-menu a').on('click', function(e) {
        if($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if(!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
    }
    // Sidebar Initiate
    init();


}
`


this.renderer.appendChild(document.body, script);
  
return script;
  }*/
}