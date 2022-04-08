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

  excluir(disciplina: string) {
    this.disciplinasService.excluir(disciplina);
  }
}
