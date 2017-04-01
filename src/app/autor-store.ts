import { Injectable } from '@angular/core';
import Autor from './autor/autor';
import { List } from 'immutable';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AutorStore {
    private _autors: BehaviorSubject<List<Autor>> = new BehaviorSubject(List([]));
    public autors: Observable<List<Autor>> = this._autors.asObservable();

    add(autor: Autor) {
        this._autors.next(this._autors.getValue().push(autor));
    }
}
