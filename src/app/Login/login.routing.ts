import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';



export const routes: Routes = [

{path: '' ,component:LoginComponent},
{path: 'forgetPassword', component:ForgetPasswordComponent},
//{path: 'changerPassword', component:ChangerPasswordComponent},


];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }