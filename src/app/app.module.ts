import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddVitalsComponent } from './add-vitals/add-vitals.component';
import { ShowVitalsComponent } from './show-vitals/show-vitals.component';
import { LoginMasterComponent } from './login-master/login-master.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ReactiveFormsModule, FormsModule, ControlContainer } from '@angular/forms';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { NotfoundComponent } from './notfound/notfound.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PeekVitalComponent } from './peek-vital/peek-vital.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddVitalsComponent,
    ShowVitalsComponent,
    LoginMasterComponent,
    ContactPageComponent,
    NotfoundComponent,
    PeekVitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
