import { Component, OnInit } from '@angular/core';
import Autor from './autor'
import { AutorService } from './../autor.service';

@Component({
  selector: 'autor-manager',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  autores: Autor[] = [];
  nuevoAutor: Autor = { nombre: '', web: '' };
  constructor(private autorService: AutorService) { }

  ngOnInit() {
    this.autores = this.autorService.get();
  }

  agregar() {
    this.autorService.add({
      nombre: this.nuevoAutor.nombre,
      web: this.nuevoAutor.web
    });
    this.autores = this.autorService.get();
    this.nuevoAutor = { nombre: '', web: '' };
  }

}
