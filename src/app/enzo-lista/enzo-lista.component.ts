import { Component, OnInit } from '@angular/core';
import { EnzoDisciplinasServiceService } from '../enzo-disciplinas-service.service';

@Component({
  selector: 'app-enzo-lista',
  templateUrl: './enzo-lista.component.html',
  styleUrls: ['./enzo-lista.component.css'],
})
export class EnzoListaComponent implements OnInit {
  constructor(public disciplinasService: EnzoDisciplinasServiceService) {}

  ngOnInit() {}

  codigo: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;

  excluir(disciplina: string) {
    this.disciplinasService.excluir(disciplina);
  }

  cadastrar() {
    this.codigo = this.codigo.replace(' ', '').toUpperCase();

    if (
      !this.codigo ||
      !this.nome ||
      !this.diaDaSemana ||
      !this.horario ||
      !this.ementa
    ) {
      alert('Preencha todos os campos');
      return;
    }

    this.disciplinasService.cadastrar({
      codigo: this.codigo,
      nome: this.nome,
      diaDaSemana: this.diaDaSemana,
      horario: this.horario,
      ementa: this.ementa,
    });
  }
}
