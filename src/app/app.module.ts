import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchBoxComponent } from './search-box/search-box.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import {Ng5SliderModule} from 'ng5-slider';

import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import { StickyDirective } from './sticky.directive';
import { GlassPrevComponent } from './glass-prev/glass-prev.component';
import { OverCarousselComponent } from './over-caroussel/over-caroussel.component';
import { SearchBoxNewComponent } from './search-box-new/search-box-new.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import {AdServiceService} from './ad-service.service'



import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';


import {RouterModule} from '@angular/router';


import { NgxImageZoomModule } from 'ngx-image-zoom';


import {MatStepperModule} from '@angular/material/stepper';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SideNavBarComponent } from './User-board/side-nav-bar/side-nav-bar.component';
import { MyAdsComponent } from './User-board/side-nav-bar/my-ads/my-ads.component';
import { MyMessagesComponent } from './User-board/my-messages/my-messages.component';
import { MyAnnoncesComponent } from './User-board/my-annonces/my-annonces.component';

import { AgmCoreModule } from '@agm/core';
import { HomeTiltSelectionCardComponent } from './home-tilt-selection-card/home-tilt-selection-card.component';
import { MapCompPrincComponent } from './map-comp-princ/map-comp-princ.component';
import { DatePipe } from '@angular/common';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NetworkInterceptor } from './services/network.interceptor';
import { LoginComponent } from './Login/login/login.component';

import {Ng2OrderModule} from 'ng2-order-pipe'
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import {NgxPaginationModule} from 'ngx-pagination';

import {AngularFireModule } from '@angular/fire'
import {AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import  { RecaptchaModule }  from  'ng-recaptcha';
import{AdminModule} from '../app/AdminDashboard/admin-module'
import{ForgetPasswordComponent} from './Login/forget-password/forget-password.component'
import{LoginModule} from "../app/Login/login.module";
import { AdminLayoutComponent } from './AdminDashboard/admin-layout/admin-layout.component';
import { NavBarAdminComponent } from './AdminDashboard/nav-bar-admin/nav-bar-admin.component';
import { SideBarAdminComponent } from './AdminDashboard/side-bar-admin/side-bar-admin.component';
import { DashboardComponent } from './AdminDashboard/dashboard/dashboard.component';
import { UsersComponent } from './AdminDashboard/users/users.component';
import { AppointementComponent } from './AdminDashboard/appointement/appointement.component';
import { ListUsersComponent } from './AdminDashboard/list-users/list-users.component';
import { AnnonceComponent } from './AdminDashboard/annonce/annonce.component';
import { EmailComponent } from './AdminDashboard/email/email.component';
import { AddUserComponent } from './AdminDashboard/add-user/add-user.component';
import { EditAppointementComponent } from './AdminDashboard/edit-appointement/edit-appointement.component';
import { EditNotificationsComponent } from './AdminDashboard/edit-notifications/edit-notifications.component';
import { EditProfileComponent } from './AdminDashboard/edit-profile/edit-profile.component';
import { EditUserComponent } from './AdminDashboard/edit-user/edit-user.component';
import { GeolocalisationComponent } from './AdminDashboard/geolocalisation/geolocalisation.component';
import { ProfileComponent } from './AdminDashboard/profile/profile.component';
import { CommentsComponent } from './User-board/side-nav-bar/comments/comments.component'


import {TableModule} from 'primeng/table';
import { AppointementsComponent } from './User-board/side-nav-bar/appointements/appointements.component';
import { THREElandComponent } from './threeland/threeland.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    HeaderComponent,
    StickyDirective,
    GlassPrevComponent,
    OverCarousselComponent,
    SearchBoxNewComponent,
    AdListComponent,
    HomeComponent,
    NavbarComponent,
    UserProfileComponent,
    SideNavBarComponent,
    MyAdsComponent,
    MyMessagesComponent,
    MyAnnoncesComponent,
    HomeTiltSelectionCardComponent,
    MapCompPrincComponent,
    LoginComponent,
    ForgetPasswordComponent,
    AdminLayoutComponent,
    NavBarAdminComponent,
    SideBarAdminComponent,
    DashboardComponent,
    UsersComponent,
    AppointementComponent,
    ListUsersComponent,
    AnnonceComponent,
    EmailComponent,
    AddUserComponent,
    EditAppointementComponent,
    EditNotificationsComponent,
    EditProfileComponent,
    EditUserComponent,
    GeolocalisationComponent,
    ProfileComponent,
    CommentsComponent,
    AppointementsComponent,
    THREElandComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatSelectModule,
    

    Ng5SliderModule,

    MatInputModule,
    MatToolbarModule,

    HttpClientModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    DataViewModule,

    RouterModule,

    NgxImageZoomModule,

    MatStepperModule,

    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDzNPcdzRAOiSo2UQvd0LnN9CPIOO2TRdo',
     //libraries:['places']
    }),

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDHeGazB2SRCtIWpSeUO-8i1NIliqLgFCY",
      authDomain: "daritn-736ea.firebaseapp.com",
      projectId: "daritn-736ea",
      storageBucket: "daritn-736ea.appspot.com",
      messagingSenderId: "725180440277",
      appId: "1:725180440277:web:bf39915f872400a95b4c5c",
      measurementId: "G-YB8THXE4FB"
    }),
    AngularFirestoreModule,

Ng2OrderModule,
Ng2SearchPipeModule,
NgxPaginationModule,

AngularFireModule ,
AngularFirestoreModule ,
 AngularFireAuthModule ,
 NgxQRCodeModule ,
 RecaptchaModule,
 LoginModule,
 AdminModule,

 TableModule



    
  ],
  providers: [AdServiceService,
    DatePipe,

    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:NetworkInterceptor,
    multi:true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
