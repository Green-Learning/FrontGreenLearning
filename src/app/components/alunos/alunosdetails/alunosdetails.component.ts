import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-alunosdetails',
  templateUrl: './alunosdetails.component.html',
  styleUrl: './alunosdetails.component.scss'
})
export class AlunosdetailsComponent {

  @Input() aluno: Aluno = new Aluno();
  @Input() indice!: number
  @Output() retorno = new EventEmitter<Aluno>();



  salvar() {
    this.aluno.id = this.indice;
    this.retorno.emit(this.aluno);
  }

}
