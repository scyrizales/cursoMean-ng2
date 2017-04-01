import { Component } from '@angular/core';
import Post from './post';
import { PostStore } from './../post-store';

@Component({
  selector: 'post-manager',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  newPost: Post = { titulo: '', fecha: '', cuerpo: '' };
  showAutorManager: boolean = false;
  constructor(private postStore: PostStore) { }

  agregar() {
    this.postStore.agregar({
      ...this.newPost
    });
    this.newPost = { titulo: '', fecha: '', cuerpo: '' };
  }
  toggleAutores() {
    this.showAutorManager = !this.showAutorManager;
  }
}
