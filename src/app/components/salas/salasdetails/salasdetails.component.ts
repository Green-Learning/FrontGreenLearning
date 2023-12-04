import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Sala } from '../../../models/sala';
import { SalasService } from '../../../services/salas.service';
import { Aluno } from '../../../models/aluno';
import { ProfessorService } from '../../../services/professor.service';
import { Professor } from '../../../models/professor';
import { log } from 'console';

@Component({
  selector: 'app-salasdetails',
  templateUrl: './salasdetails.component.html',
  styleUrl: './salasdetails.component.scss'
})
export class SalasdetailsComponent {

  @Input() sala: Sala = new Sala();
  @Output() retorno = new EventEmitter<Sala>();
  @Output() retornoAlunos = new EventEmitter<Aluno[]>();

  salaSerive = inject(SalasService);
  professorService = inject(ProfessorService);

  constructor() {

    const userId = localStorage.getItem('id');
    console.log(userId);
}

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ
    const userId = localStorage.getItem('id');
    const professor: Professor = new Professor();
    professor.id = Number(userId);
    this.sala.professor = professor;

    // this.sala.alunos.forEach(aluno => {
    //   aluno.sala = this.sala;
    // });

    this.salaSerive.save(this.sala).subscribe({
      next: sala => { // QUANDO DÁ CERTO
        this.retorno.emit(sala);
      },
      error: erro => { // QUANDO DÁ ERRO

        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }
}
