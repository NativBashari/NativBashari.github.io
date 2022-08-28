import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import MovieService from 'src/Services/movies.service';
import WatchedService from 'src/Services/watched.service';
import { Movie } from '../Models/movie.model';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
@Input() movie: any;
@Output() ondelete: EventEmitter<any> = new EventEmitter<any>;
@Output() onWatchedChanged: EventEmitter<any> = new EventEmitter<any>;
fakeArray: number[];
  constructor(private service: MovieService, private router: Router, private WatchedService: WatchedService) {
      this.fakeArray = []
     
   }

  ngOnInit(): void {
    for(let i = 0; i< this.movie.rating; i++){
      this.fakeArray.push(0);
    }
  }

  deleteItem(){
    if(!this.movie.isWatched){
      this.service.delete(this.movie.id).subscribe((response)=> {
        this.ondelete.emit(this.movie);
      }); 
  }
    else{
      this.WatchedService.delete(this.movie.id).subscribe(response =>{
        this.ondelete.emit(this.movie);
      });
    }
  
}
  
  openEditor(id: string){
    this.router.navigateByUrl(`/edit/${id}`);
    console.log(id);
  }
  isWatched(){
    if(!this.movie.isWatched){
      this.movie.isWatched = true;
      this.service.delete(this.movie.id).subscribe(()=>
      this.WatchedService.post(this.movie).subscribe(()=>
      this.onWatchedChanged.emit())
      );
    }
    else{
      this.movie.isWatched = false;
      this.WatchedService.delete(this.movie.id).subscribe(() =>{
        this.service.post(this.movie).subscribe(()=>
        this.onWatchedChanged.emit())
      });       
    }
    
   
  }
}
