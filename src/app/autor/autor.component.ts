import { Component, OnInit } from '@angular/core';
import Autor from './autor'

@Component({
  selector: 'autor-manager',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  autores: Autor[] = [];
  nuevoAutor: Autor = { nombre: '', web: '' };
  constructor() { }

  ngOnInit() {
  }

  agregar() {
    this.autores.push({
      nombre: this.nuevoAutor.nombre,
      web: this.nuevoAutor.web
    });
    this.nuevoAutor = { nombre: '', web: '' };
  }

}
