import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Sala } from '../../../models/sala';
import { SalasService } from '../../../services/salas.service';

@Component({
  selector: 'app-salasdetails',
  templateUrl: './salasdetails.component.html',
  styleUrl: './salasdetails.component.scss'
})
export class SalasdetailsComponent {

  @Input() sala: Sala = new Sala();
  @Output() retorno = new EventEmitter<Sala>();

  saborService = inject(SalasService);

  constructor() {

  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.saborService.save(this.sala).subscribe({
      next: produto => { // QUANDO DÁ CERTO
        this.retorno.emit(produto);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }
}
