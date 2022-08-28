import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/Models/movie.model';
import MovieService from 'src/Services/movies.service';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
movie: Movie;
@Output() onadd: EventEmitter<any> = new EventEmitter<any>();
constructor(private service: MovieService, private router: Router) { 
  this.movie = new Movie("","",0,"",0,false);
  this.service = service;
}
  ngOnInit(): void {
  }
  addNewItem(){
    this.service.post(this.movie).
    subscribe((response) => {
      this.onadd.emit(response);
      this.movie = new Movie("","",0,"",0,false);
      this.router.navigateByUrl("");
    })    
  }
  checkImageString(){
    if(this.movie.picture.endsWith(".png"||".jpeg" ||".jpg")) return false;
    else return true;
  }

}
