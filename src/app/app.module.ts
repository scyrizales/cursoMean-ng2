import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import { AutorComponent } from './autor/autor.component';
import { PostComponent } from './post/post.component';

import { AutorService } from './autor.service';

@NgModule({
  declarations: [
    AppComponent,
    AutorComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
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
        path: '',
        redirectTo: '/autors',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    AutorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
