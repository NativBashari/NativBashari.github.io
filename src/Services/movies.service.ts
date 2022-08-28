import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "../Models/movie.model";



@Injectable()
class MovieService{
    movies: Movie[];
    constructor(private client: HttpClient){
        this.movies = []
    }
    get(){
        return this.client.get("http://localhost:3000/movies");
    }
    getById(id:number){
        return this.client.get("http://localhost:3000/movies/"+ id);
    }
    post(movie: Movie){
        return this.client.post("http://localhost:3000/movies", movie);
    }
    delete(id:any){
        return this.client.delete("http://localhost:3000/movies/"+id);
    }
    put(movie: Movie){
        return this.client.put("http://localhost:3000/movies/"+ movie.id, movie);
    }
}
export default MovieService;