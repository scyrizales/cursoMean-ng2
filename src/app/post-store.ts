import { Injectable } from '@angular/core';
import Post from './post/post';
import { List } from 'immutable';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PostStore {
    private _posts: BehaviorSubject<List<Post>> = new BehaviorSubject(List([]));
    public posts: Observable<List<Post>> = this._posts.asObservable();

    agregar(post: Post) {
        this._posts.next(this._posts.getValue().push(post));
    }
}
