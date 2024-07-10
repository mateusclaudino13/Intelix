import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-artigos',
  templateUrl: './cards-artigos.component.html',
  styleUrls: ['./cards-artigos.component.css']
})
export class CardsArtigosComponent {
  articles = [
    {
      author: 'Mateus C',
      date: '01 de Janeiro de 2024',
      title: 'O Futuro da Gestão de Resíduos: Lixeiras Inteligentes',
      text: 'Como a Intelix Está Transformando Nossas Cidades',
      image: 'https://s2-galileu.glbimg.com/dBi8moZvCnR6YlD26NJUihGjbpA=/0x0:1920x1256/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/F/p/hYU1FdSi2fnfCAAGgcNg/2020-02-28-garbage-2729608-1920.jpeg'
    },
    {
      author: 'Sofia G',
      date: '15 de Fevereiro de 2024',
      title: 'Como a Tecnologia Está Resolvendo o Problema do Lixo nas Cidades',
      text: 'Benefícios da Lixeira Inteligente Intelix para a Sociedade',
      image: 'https://www.produzindocerto.com.br/wp-content/uploads/2020/09/lixo.jpg'
    },
    {
      author: 'Maicon B',
      date: '30 de Março de 2024',
      title: 'Os Benefícios Ambientais das Lixeiras Inteligentes',
      text: 'Tecnologia a Serviço do Meio Ambiente: O Impacto Sustentável da Intelix',
      image: 'https://ohoje.com/public/imagens/fotos/amp/2021/07/SmartBin-2.png'
    }
  ];
}
