import { Injectable } from '@angular/core';
import Autor from './autor/autor';
import { List } from 'immutable';

@Injectable()
export class AutorService {
  autors: List<Autor> = List([]);
  constructor() { }
  get() {
    return this.autors;
  }
  add(autor: Autor) {
    let _autors = this.autors.toArray();
    _autors.push(autor);
    this.autors = List(_autors);
  }
}
