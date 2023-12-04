import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { AlunoslistComponent } from './components/alunos/alunoslist/alunoslist.component';
import { SalaslistComponent } from './components/salas/salaslist/salaslist.component';
import { routeGuardGuard } from './guards/route-guard.guard';
import { Fase1Component } from './components/jogo/fase1/fase1.component';
import { MenuComponent } from './components/jogo/menu/menu.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    // path: "", component: IndexComponent, canActivate: [routeGuardGuard], children: [
      path: 'professor', component: IndexComponent, children: [
      // { path: "alunos", component: AlunoslistComponent },
      { path: 'salas', component: SalaslistComponent },
      {path: 'menuJogo', component: MenuComponent},
      {path: 'fase1', component: Fase1Component},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
