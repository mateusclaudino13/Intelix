import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  email: any;

  constructor(private router: Router) { }

  login() {


    // Após o login bem-sucedido, navegue para a página de dashboard
    this.router.navigate(['/dashboard']);
  }
}
