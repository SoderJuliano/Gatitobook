import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { switchMap, map, first } from 'rxjs/operators';
import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(
    private novoUsuarioService: NovoUsuarioService
  ) { }

  usuarioJaExiste(){
    return (controle: AbstractControl) => {
      return controle.valueChanges.pipe(
        switchMap((nomeUsuario) =>this.novoUsuarioService.vereficaUsuarioExistente(nomeUsuario))
      ),
      map((usuarioExiste) =>usuarioExiste ? {usuarioExistente:true} : null),
      first()
    }
  }
}
