import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnzoDisciplinasServiceService } from '../enzo-disciplinas-service.service';

@Component({
  selector: 'app-enzo-detalhes',
  templateUrl: './enzo-detalhes.component.html',
  styleUrls: ['./enzo-detalhes.component.css'],
})
export class EnzoDetalhesComponent implements OnInit {
  disciplina: any;

  constructor(
    public disciplinasService: EnzoDisciplinasServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.disciplina = this.disciplinasService.get(params.get('codigo'));
    });
  }
}
