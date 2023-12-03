import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-alunoslist',
  templateUrl: './alunoslist.component.html',
  styleUrl: './alunoslist.component.scss'
})
export class AlunoslistComponent {

  @Input() modoLancamento = false;
  @Output() alunoRetorno = new EventEmitter<Aluno>();
 

}
