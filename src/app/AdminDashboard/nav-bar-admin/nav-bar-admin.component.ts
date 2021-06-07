import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit {

  
  tokenObj:any=JSON.parse(localStorage.getItem('token')!);
  user:any;
  listNotif:Array<any>=[];
  incrementNumberNotif:number=0;
  userFromFacebook:any;

  constructor(private renderer: Renderer2,private auth:AuthService,private adminService:AdminDashboardService
    ,private router:Router) { }

  ngOnInit(): void {

    /*his.adminService.getAllReclamationsByNotifAndUser().subscribe(data=>{

   
      Object.keys(data).map((key:any)=>{ // map nekhedh key

       
      Object.values(data).map((value:any)=>{ // map nekhedh key
       
      
        let ObjectLists={"userName":key,"picture":value};

         this.listReclamationNotif.push(ObjectLists);

 
        });
     });
     this.incrementNumberNotif=this.listReclamationNotif.length;
     console.log("lissssssssssssssssssssss", this.listReclamationNotif)

      });*/


    this.adminService.getUsersByNotifs().subscribe((data:any)=>{   // afficher user registred by notification added

      console.log(data)

      this.listNotif=data;
      this.incrementNumberNotif=this.listNotif.length;
    })

      
      const decode:any=jwtDecode(this.tokenObj.token);  // si on veut afficher utilisateur de facebook from firebase
      console.log(decode.name)

      this.userFromFacebook=decode;

      if(decode.sub != null || decode.sub!= undefined){
      this.auth.getUserByUsername(decode.sub).subscribe(data=>{

      console.log("ahawqaa username mtaaa useeeer",data);
      this.user=data;
      
     });
  
      }

    this.addJsToElement().onload = () => {
      console.log('le script marche ');
  
      }

  }





  getUserById(id:number){

    console.log(id)

    this.adminService.getUserById(id).subscribe(data=>{

      console.log("ahaaaawa userrrrrrr" ,data)

    this.adminService.setdata(data);
  })

   }


    logout(id:number){


      this.adminService.isDeconnected(id).subscribe(()=>{ 
  
          this.adminService.getUserById(id).subscribe((user:any)=>{

      user.notifications.map((e:any)=>{


        this.adminService.deleteNotifById(e.idnotif).subscribe();  //lorsque lutilisateur deconnecter notif tetfasakh automatique
            
             
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        
        });
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      });

    });
      }

    

    addJsToElement(): HTMLScriptElement {

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text= `$(document).ready(function($) {
	
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
      

      
      // Page wrapper height
      var pHeight = $(window).height();
      $pageWrapper.css('min-height', pHeight);
      $(window).resize(function() {
        var prHeight = $(window).height();
        $pageWrapper.css('min-height', prHeight);
      });
      
     
      // Mobile Menu
      $(document).on('click', '#open_msg_box', function() {
        $wrapper.toggleClass('open-msg-box');
        return false;
      });
      
    
      
    });
    
    `;



  this.renderer.appendChild(document.body, script);
  
  return script;
}


}
