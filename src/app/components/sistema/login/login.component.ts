import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showError: boolean = false;
  login: User = new User();
  roteador = inject(Router);
  loginService = inject(UserService);

  constructor() {
    let token = localStorage.getItem('token');
    if (token) {
      this.roteador.navigate(['/salas']);
    }

  }

  logar() {
    
    this.loginService.login(this.login).subscribe({
      next: user => { // QUANDO DÁ CERTO
        this.loginService.addToken(user.token);
        this.roteador.navigate(['/salas']);
      },
      error: erro => { // QUANDO DÁ ERRO
        this.showError = true
        console.error(erro);

      }
    });


  }


}
