import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/Models/movie.model';
import MovieService from 'src/Services/movies.service';
import WatchedService from 'src/Services/watched.service';

@Component({
  selector: 'movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {
 movie: Movie;
 id: any;

  constructor(private service : MovieService,private watchedService: WatchedService ,private activatedRoute: ActivatedRoute, private router: Router) { 
    this.movie = new Movie("","",0,"",1900,false);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id= params["id"];
      this.service.getById(this.id).subscribe( response =>
        this.movie = response as Movie);
    });
    if(this.movie.name === ""){
      this.watchedService.getById(this.id).subscribe(response => {
        this.movie = response as Movie;
        console.log("Movie is null");
      });
    }
    

  }
 onClickHandler(){
  this.service.put(this.movie).subscribe((response)=> console.log(response));
  this.router.navigateByUrl("");
 }
}
