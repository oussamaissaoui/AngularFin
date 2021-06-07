import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdminLayoutComponent } from './AdminDashboard/admin-layout/admin-layout.component';
import { HomeTiltSelectionCardComponent } from './home-tilt-selection-card/home-tilt-selection-card.component';
import { HomeComponent } from './home/home.component';
import { MapCompPrincComponent } from './map-comp-princ/map-comp-princ.component';
import { GuardGuard } from './services/guard.guard';
import { THREElandComponent } from './threeland/threeland.component';
import { MyAnnoncesComponent } from './User-board/my-annonces/my-annonces.component';
import { AppointementsComponent } from './User-board/side-nav-bar/appointements/appointements.component';
import { CommentsComponent } from './User-board/side-nav-bar/comments/comments.component';
import { MyAdsComponent } from './User-board/side-nav-bar/my-ads/my-ads.component';
import { SideNavBarComponent } from './User-board/side-nav-bar/side-nav-bar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  
  {path:'', component:THREElandComponent},
  {path:'home', component:HomeComponent},
  {path:'AdList', component:AdListComponent},
  {path:'three', component:THREElandComponent},
  {path:'UserProfile', component:UserProfileComponent, children:[
    {path: '',
    pathMatch: 'full',
    redirectTo: 'MyProf'},
    {path:'MyAnn', component:MyAnnoncesComponent},
    {path:'MyProf', component:MyAdsComponent ,canActivate:[GuardGuard]},
    {path:'MyComment', component:CommentsComponent},
    {path:'MyAppointments', component:AppointementsComponent}
    
  ]},
  {path:'Side', component:SideNavBarComponent},
  {path:'card', component:HomeTiltSelectionCardComponent},
  {path:'mapp', component:MapCompPrincComponent},


  {path: 'login' ,loadChildren:()=>import("../app/Login/login.module")
.then(m=>m.LoginModule)},

{
  path: 'dashborad',
  component: AdminLayoutComponent,   // hatina children alkhter fama router outlet fi composant adminlayout
  children: [
      {
    path: 'admin',loadChildren:()=>import("./AdminDashboard/admin-module")
    .then(m=>m.AdminModule)
}]}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
