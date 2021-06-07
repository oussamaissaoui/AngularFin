import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { AuthService } from 'src/app/services/auth.service';
import{Location} from '@angular/common'


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  tokenObj:any=JSON.parse(localStorage.getItem('token')!);



  listAds:Array<any>=[];
  idAd:number=0;
  p:number=1;
  userName:string='';
  listSortingAdsDistance:Array<any>=[];
  verifeySorting:boolean=false;

  constructor(private adminService:AdminDashboardService,private router:Router,private location:Location,
    private auth:AuthService) { }


  sortingByDistanceDown(){

      this.verifeySorting=false;
  }

  sortingByDistanceUp(){

    const decode:any=jwtDecode(this.tokenObj.token);

    this.auth.getUserByUsername(decode.sub).subscribe((data:any)=>{   //choisir utilisateur connecter eli howa admin pour filtrer les annonces a travers son id by distace

    //console.log("hethaaa tebaaaa3 distance decode  ",decode)

    this.adminService.getAdByDistanceSorting(data.id).subscribe((data:any)=>{
 
     this.listSortingAdsDistance=data;
  
     this.verifeySorting=true;
      
     console.log("distanccccccccccccccccccccce ",this.listSortingAdsDistance)
      
    })
    //console.log("hrthaa user zabour ",data)
  })
  }
    
  search(){

    if(this.userName == ''){
  
      this.ngOnInit();
    }else{
  
      this.listAds=this.listAds.filter(res=>{
  
        return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
      })
    }
  }


  ngOnInit(): void {

    
    this.adminService.getAllUsers().subscribe((data:any)=>{

      this.listAds=data;

      console.log("annnnnnnnoonce  ",this.listAds)
    });
  
  }

  getIdAd(id:number){
 
    this.idAd=id;
      
     console.log("iddddddddddddddd",id)
  }

    

    refresh(){

      this.router.navigateByUrl("/dashborad/admin/list_users",{skipLocationChange:true}).then(()=>{
  
        this.router.navigate([decodeURI(this.location.path())]);
      });
    }
    
  
     deleteAdById(){

      this.adminService.deleteAdById(this.idAd).subscribe();

      this.refresh();
     }
   

}
