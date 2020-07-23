import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowVitalsComponent } from './show-vitals/show-vitals.component';
import { AuthenticationGuard } from './helpers/authentication.guard';
import { LoginMasterComponent } from './login-master/login-master.component';
import { LoginGuard } from './helpers/login.guard';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:'home', component: ShowVitalsComponent, canActivate:[AuthenticationGuard]},
  {path:'login', component: LoginMasterComponent, canActivate:[LoginGuard]},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
