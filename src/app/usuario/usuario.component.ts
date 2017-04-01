import { Component, OnInit } from '@angular/core';
import { Usuario } from './../usuario';
import { UsuarioStore } from './../usuario-store';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  nuevoUsuario: Usuario = new Usuario();
  constructor(private usuarioStore: UsuarioStore) { }

  ngOnInit() {
  }

  agregar() {
    this.usuarioStore.agregar({
      ...this.nuevoUsuario
    });
    this.nuevoUsuario = new Usuario();
  }

}
