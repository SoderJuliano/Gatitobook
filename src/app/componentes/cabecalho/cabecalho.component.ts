import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  template: `
    <header class="sticky-top">
      <nav class="navbar navbar-light bg-white">  
        <a class="navbar-brand">Gatito Book</a>
        <div *ngIf="user$ | async as user">
          <div *ngIf="user.name; else login">
          <i class="fa fa-user-circle mr-1">
            <a href="" class="mr-1">{{user.name}}</a>
            <a href="" (click)="logout()">Logout</a>
          </i>
          </div>
         
        </div>
      </nav>
      <ng-template #login>
        <span class="navbar-text">
          <a [routerLink]="['']">Login</a>
        </span>
      </ng-template>
    </header>
  `,
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  user$ = this.usuarioService.returnaUsuario()
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  logout(){
    this.usuarioService.logout()
    this.router.navigate([''])
  }

}
