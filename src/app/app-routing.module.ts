import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { SalaslistComponent } from './salas/salaslist/salaslist.component';
import { LoginComponent } from './sistema/login/login.component';
import { AlunoslistComponent } from './alunos/alunoslist/alunoslist.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: 'full' },
  {
    path: "", component: IndexComponent, children: [
      { path: "alunos", component: AlunoslistComponent },
      { path: "salas", component: SalaslistComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
