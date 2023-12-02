import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/layout/index/index.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SalaslistComponent } from './components/salas/salaslist/salaslist.component';
import { SalasdetailsComponent } from './components/salas/salasdetails/salasdetails.component';
import { AlunosdetailsComponent } from './components/alunos/alunosdetails/alunosdetails.component';
import { AlunoslistComponent } from './components/alunos/alunoslist/alunoslist.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    SalaslistComponent,
    SalasdetailsComponent,
    AlunosdetailsComponent,
    AlunoslistComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

provideHttpClient(withFetch())
