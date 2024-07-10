import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-depoimentos',
  templateUrl: './cards-depoimentos.component.html',
  styleUrls: ['./cards-depoimentos.component.css']
})
export class CardsDepoimentosComponent {
  depoimentos = [
    {
      nome: 'Ricardo Fernandes',
      subnome: 'Engenheiro Civil',
      texto: '"A instalação das lixeiras InteLIX na nossa cidade foi um divisor de  águas! A coleta de lixo se tornou muito mais eficiente, sem os atrasos  que costumávamos ter.”',
      estrelas: 4,
      imagemUrl: 'https://picsum.photos/200/200?random=1'
    },
    {
      nome: 'Amanda Costa',
      subnome: 'Nutricionista',
      texto: '"As lixeiras InteLIX transformaram a gestão de resíduos na nossa cidade.  Antes, era comum ver lixo transbordando nas lixeiras, mas agora, com a  coleta otimizada, isso não acontece mais.”',
      estrelas: 3.5,
      imagemUrl: 'https://picsum.photos/200/200?random=2'
    },
    {
      nome: 'Juliana Martins',
      subnome: 'Servidora Pública',
      texto: '"Trabalhar com as lixeiras InteLIX revolucionou nossa rotina. Com  alertas inteligentes, planejamos rotas de coleta de forma eficiente. Orgulhosa de fazer parte  desse avanço!"',
      estrelas: 3,
      imagemUrl: 'https://picsum.photos/200/200?random=3'
    }

  ];
}
