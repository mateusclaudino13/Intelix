import { Component, OnInit } from '@angular/core';
import { IntelixService } from 'src/app/services/intelix.service';
import { Estado } from 'src/app/models/estado';

@Component({
  selector: 'app-intelix-card',
  templateUrl: './intelix-card.component.html',
  styleUrls: ['./intelix-card.component.css']
})
export class IntelixCardComponent implements OnInit {
  estados: Estado | null = null; 

  constructor(private readonly intelixService: IntelixService) {}

  ngOnInit() {
    this.intelixService.getEstado().subscribe(
      (data: Estado) => {
        this.estados = data;
        // Ordenar os estados pelo código (cod) em ordem crescente
        this.estados.data.sort((a, b) => a.estado.cod - b.estado.cod);
        
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  // Função para determinar a classe com base no estado do container
  determinarClasseContainer(estado: any): string {
    return estado.container ? 'cheio' : 'vazio';
  }
}
