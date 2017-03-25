import { Component, OnInit } from '@angular/core';
import Post from './post';

@Component({
  selector: 'post-manager',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  newPost: Post = { titulo: '', fecha: '', cuerpo: '' };
  showAutorManager: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  agregar() {
    this.posts.push({
      ...this.newPost
    });
    this.newPost = { titulo: '', fecha: '', cuerpo: '' };
  }
  toggleAutores() {
    this.showAutorManager = !this.showAutorManager;
  }
}
