import { Component } from '@angular/core';

@Component({
  selector: 'app-criadores',
  templateUrl: './criadores.component.html',
  styleUrls: ['./criadores.component.css']
})
export class CriadoresComponent {
  creators = [
    { name: 'Luar Lima Sant’Anna', role: 'Desenvolvedor API', image: 'assets/luar.png' },
    { name: 'Sofia Guimarães', role: 'Front-End', image: 'assets/sofia.png' },
    { name: 'Mateus Padilha', role: 'Front-End', image: 'assets/mateus.png' },
    { name: 'Pablo Estevan', role: 'Desenvolvedor UI/UX', image: 'assets/pablo.png' },
    { name: 'Maicon Borges', role: 'Desenvolvedor API', image: 'assets/maicon.png' },
    { name: 'Victor Santos', role: 'Desenvolvedor UI/UX', image: 'assets/victor.png' },
  ];
}
