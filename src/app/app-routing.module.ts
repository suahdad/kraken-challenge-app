import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowVitalsComponent } from './show-vitals/show-vitals.component';
import { AuthenticationGuard } from './helpers/authentication.guard';
import { LoginMasterComponent } from './login-master/login-master.component';


const routes: Routes = [
  {path:'', component: ShowVitalsComponent, canActivate:[AuthenticationGuard]},
  {path:'login', component: LoginMasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
