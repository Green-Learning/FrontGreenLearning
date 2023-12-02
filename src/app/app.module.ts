import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/layout/index/index.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SalaslistComponent } from './salas/salaslist/salaslist.component';
import { SalasdetailsComponent } from './salas/salasdetails/salasdetails.component';
import { AlunosdetailsComponent } from './alunos/alunosdetails/alunosdetails.component';
import { AlunoslistComponent } from './alunos/alunoslist/alunoslist.component';
import { LoginComponent } from './sistema/login/login.component';

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
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
