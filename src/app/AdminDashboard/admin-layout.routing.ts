import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AppointementComponent } from './appointement/appointement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditAppointementComponent } from './edit-appointement/edit-appointement.component';
import { EditNotificationsComponent } from './edit-notifications/edit-notifications.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EmailComponent } from './email/email.component';
import { GeolocalisationComponent } from './geolocalisation/geolocalisation.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';






export const routes: Routes = [

  

  {path:'', component:DashboardComponent},
  {path:"users", component:UsersComponent},
  {path:"list-users", component:ListUsersComponent},
  {path:"annonce", component:AnnonceComponent},
  {path:"appointement", component:AppointementComponent},
  {path:"mail", component:EmailComponent},
  {path:"add-users", component:AddUserComponent},
  {path:"profile", component:ProfileComponent},
  {path:"users", component:UsersComponent},
  {path:"appointement", component:AppointementComponent},
  {path:"edit-users", component:EditUserComponent},
  {path:"profile", component:ProfileComponent},
  {path:"edit-profile", component:EditProfileComponent},
  {path:"edit-notification", component:EditNotificationsComponent},
  {path:"geolocation", component:GeolocalisationComponent},
  {path:"edit-appointement", component:EditAppointementComponent},

  /*{path:"profile", component:ProfileComponent},
  {path:"appointement", component:AppointementComponent},
  {path:"users", component:UsersComponent},
  {path:"edit-profile", component:EditProfileComponent},
  {path:"list-users", component:ListUsersComponent},
  {path:"appointement", component:AppointementComponent},
  {path:"edit-users", component:EditUsersComponent},
  {path:"add-users", component:AddUsersComponent},
  {path:"list-users", component:ListUsersComponent},
  {path:"profile", component:ProfileComponent},
  {path:"edit-profile", component:EditProfileComponent},
  {path:"edit-notification", component:EditNotificationsComponent},
  {path:"chat", component:ChatComponent},
  {path:"mail", component:MailComponent},
  {path:"edit-appointement", component:EditAppointementComponent},
  {path:"geolocation", component:GeolocalisationComponent},
  {path:"annonce", component:AnnonceComponent}*/
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
