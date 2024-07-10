import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent {
  descricao: string;

  constructor(private router: Router) {
    this.descricao = "A Intelix é uma lixeira inteligente projetada para revolucionar a gestão de resíduos, integrando tecnologia avançada para enfrentar os desafios ambientais contemporâneos. Equipada com sensores sofisticados, a Intelix detecta quando está cheia e envia alertas em tempo real para o usuário por meio de um aplicativo de smartphone, promovendo uma gestão de resíduos mais eficiente e proativa.";
  }

  lerMais() {
    this.router.navigate(['/outra-pagina']);
  }
}
