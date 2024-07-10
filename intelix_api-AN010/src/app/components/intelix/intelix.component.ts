import { Component } from '@angular/core';

@Component({
  selector: 'app-intelix',
  templateUrl: './intelix.component.html',
  styleUrls: ['./intelix.component.css']
})
export class IntelixComponent {

  creators = [
    { name: 'Luar Lima Sant’Anna', role: 'Desenvolvedor API', image: 'luar.jpg' },
    { name: 'Pablo Estevan', role: 'Desenvolvedor UI/UX', image: 'pablo.jpg' },
    { name: 'Mateus Padilha', role: 'Front-End', image: 'mateus.jpg' },
    { name: 'Sofia Guimarões', role: 'Front-End', image: 'sofia.jpg' },
    { name: 'Maicon Borges', role: 'Desenvolvedor API', image: 'maicon.jpg' },
    { name: 'Victor Santos', role: 'Desenvolvedor UI/UX', image: 'victor.jpg' },
  ];
}