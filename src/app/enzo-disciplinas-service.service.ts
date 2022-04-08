import { Injectable } from '@angular/core';

@Injectable()
export class EnzoDisciplinasServiceService {
  disciplinasCursadas: disciplina[] = [
    {
      codigo: 'ISD002A',
      nome: 'Arquitetura Orientada a Serviços',
      diaDaSemana: 'Quarta-feira',
      horario: '19:00 - 22:30',
      ementa:
        'Construção de aplicações por meio da utilização de arquitetura orientada a serviços – SOA (Service-Oriented Architecture) e das principais tecnologias Web Services',
    },
    {
      codigo: 'ISW014A',
      nome: 'Projeto de Encontrabilidade',
      diaDaSemana: 'Segunda-feira',
      horario: '19:00 - 22:30',
      ementa:
        'Teoria Geral. Marcação para encontrabilidade. Microformatos. Conteúdo. Rede Social. Estratégias Server-Side. Como evitar armadilhas de encontrabilidade. Pesquisas. Análises',
    },
    {
      codigo: 'ITE004A',
      nome: 'Tópicos Especiais em Sistemas para Internet II',
      diaDaSemana: 'Sexta-feira',
      horario: '19:00 - 22:30',
      ementa:
        'Apresentar tecnologias ainda não estudadas ou aprofundar algum tema já visto definido pela coordenadoria do curso em cada unidade. Objetivos específicos. Estudar e aplicar tecnologias de uso corrente na região na qual o curso de insere ou de interesse para o desenvolvimento profissional dos estudantes ou desenvolver temas que aprofundem algum conhecimento já estudado',
    },
    {
      codigo: 'TTG401A',
      nome: 'Projeto de Trabalho de Graduação em Sistemas para Internet I',
      diaDaSemana: 'Sábado',
      horario: '11:30 - 12:30',
      ementa:
        'Conceito de portfólio no âmbito da educação superior. Planejamento e organização de portfólios',
    },
  ];

  constructor() {}

  excluir(disciplina: string) {
    this.disciplinasCursadas = this.disciplinasCursadas.filter(
      (d) => d.codigo !== disciplina
    );
  }

  get(disciplina: string) {
    return this.disciplinasCursadas.find((d) => d.codigo == disciplina);
  }

  cadastrar(disciplina: disciplina) {
    this.disciplinasCursadas.push(disciplina);
  }
}

interface disciplina {
  codigo: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;
}
