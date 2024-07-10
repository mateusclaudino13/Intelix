import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experienciaItens = [
    {
      icon: 'assets/ICON1.png',
      title: 'Criadores Capacitados',
      text: 'Todos capacitados na área de Desenvolvimento de Sistemas, buscando...'
    },
    {
      icon: 'assets/ICON2.png',
      title: 'Otimização de Processos',
      text: 'Com o uso da InteLIX, os sistemas de coleta passam a ser otimizad...'
    },
    {
      icon: 'assets/ICON3.png',
      title: 'Segurança',
      text: 'Possuí uma trava exclusiva para que apenas servidores púb...'
    },
    {
      icon: 'assets/ICON4.png',
      title: 'Inovação',
      text: 'Contamos com o uso de um sensor para medir a % de capacidade resta...'
    }
  ];
}
