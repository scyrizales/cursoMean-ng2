import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import { AutorComponent } from './autor/autor.component';
import { PostComponent } from './post/post.component';

import { AutorService } from './autor.service';
import { PostService } from './post.service';
import { AutorStore } from './autor-store';
import { PostStore } from './post-store';
import { UsuarioStore } from './usuario-store';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    AutorComponent,
    PostComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'posts',
        component: PostComponent
      },
      {
        path: 'autors',
        component: AutorComponent
      },
      {
        path: 'usuarios',
        component: UsuarioComponent
      },
      {
        path: '',
        redirectTo: '/autors',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    AutorService,
    PostService,
    AutorStore,
    PostStore,
    UsuarioStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
