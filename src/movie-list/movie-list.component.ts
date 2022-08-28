import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import WatchedService from 'src/Services/watched.service';
import { Movie } from '../Models/movie.model';
import MovieService from '../Services/movies.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  watched: Movie[];
  selectedSorting: any = 0;

  constructor(private service: MovieService, private watchedService: WatchedService, private router: Router) {
    this.movies=[];
    this.watched=[];
   }

  ngOnInit(): void {
    this.service.get().subscribe((response) => {
      this.movies = response as Movie[];
    })
    this.watchedService.get().subscribe(response =>{
      this.watched = response as Movie[];
    })
  }
  addNewItemHandler(movie: any){
    this.service.movies.push(movie);
  }
deleteItemHandler(movie:any){
  if(!movie.isWatched){
    this.service.get().subscribe(data =>
      this.movies = data as Movie[]);
  }
  else{
    this.watchedService.get().subscribe(data =>
      this.watched = data as Movie[]);
  }    
}
refreshList(){
this.router.navigate([''])
  .then(() => {
    window.location.reload();
  });
console.log("RefreshList is done");
}
routeToNew(){
  this.router.navigateByUrl("/new");
}

sortBy(){
  if(this.selectedSorting == 0) return;
  if(this.selectedSorting == 1){
    this.movies.sort((a,b)=> a.year - b.year);
    this.watched.sort((a,b) => a.year - b.year);
  }
  else{
    this.movies.sort((a,b)=> {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if(nameA< nameB) return -1;
      else if(nameA > nameB) return 1;
      else return 0;
    });
    this.watched.sort((a,b) => {
      const nameA = a.name.toUpperCase();
      const nameB= b.name.toUpperCase();
      if(nameA< nameB) return -1;
      if(nameA > nameB) return 1;
      else return 0;
    })
  }
  
}
}
