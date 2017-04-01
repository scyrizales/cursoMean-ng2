import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { List } from 'immutable';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UsuarioStore {
    private _usuarios:BehaviorSubject<List<Usuario>> = 
        new BehaviorSubject(List([]));
    public usuarios:Observable<List<Usuario>> = this._usuarios.asObservable();

    agregar(usuario: Usuario) {
        this._usuarios.next(this._usuarios.getValue().push(usuario));
    }
}
