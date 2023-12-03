import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pontos } from '../../../models/jogo/pontos';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JogoService } from '../../../services/jogo.service';
import { Sala } from '../../../models/sala';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-salvar-jogo',
  templateUrl: './salvar-jogo.component.html',
  styleUrl: './salvar-jogo.component.scss'
})
export class SalvarJogoComponent {

  @Input() desabilitaCampo!: boolean;
  @Input() score!: number;
  @Input() aluno: Aluno = new Aluno();

  @Output() retorno = new EventEmitter<Pontos>();

  pontos: Pontos = new Pontos();



  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  jogoService = inject(JogoService);

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ
    this.jogoService.save(this.pontos).subscribe({
      next: pedido => { // QUANDO DÁ CERTO
        this.retorno.emit(this.pontos);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  //modal para abrir a lista de alunos e selecionar um aluno.
  abrirModal(modal : any){
    this.modalRef = this.modalService.open(modal, {size:"lg"});
  }

  recebeAluno(aluno: Aluno){
    this.pontos.aluno = aluno;
    this.modalRef.dismiss();
  }



}
