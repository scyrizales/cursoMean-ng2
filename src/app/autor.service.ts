import { Injectable } from '@angular/core';
import Autor from './autor/autor';

@Injectable()
export class AutorService {
  autors: Autor[] = [];
  constructor() { }
  get() {
    return this.autors;
  }
  add(autor: Autor) {
    this.autors.push(autor);
  }
}
