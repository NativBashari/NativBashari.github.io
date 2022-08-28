import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import MovieService from 'src/Services/movies.service';
import { AddItemComponent } from '../movie-list/add-item/add-item.component';
import { MovieEditorComponent } from '../movie-item/movie-editor/movie-editor.component';
import {HttpClientModule} from '@angular/common/http'
import { routing } from './routes';
import { AboutComponent } from '../about/about.component';
import WatchedService from 'src/Services/watched.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieListComponent,
    AddItemComponent,
    MovieEditorComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing  
  ],
  providers: [MovieService, WatchedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
