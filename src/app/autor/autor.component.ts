import { Component } from '@angular/core';
import Autor from './autor'
import { AutorService } from './../autor.service';
import { AutorStore } from './../autor-store';
import { List } from 'immutable';

@Component({
  selector: 'autor-manager',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent {
  nuevoAutor: Autor = { nombre: '', web: '' };
  constructor(private autorStore: AutorStore) { }

  agregar() {
    this.autorStore.add({
      nombre: this.nuevoAutor.nombre,
      web: this.nuevoAutor.web
    });
    this.nuevoAutor = { nombre: '', web: '' };
  }

}
