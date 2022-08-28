import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "src/Models/movie.model";

@Injectable()
class WatchedService{
   constructor( private client: HttpClient){
   }

   get(){
    return this.client.get("http://localhost:3000/watched");
   }
   getById(id:any){
    return this.client.get("http://localhost:3000/watched/"+ id);
   }
   post(movie: Movie){
    return this.client.post("http://localhost:3000/watched",movie);
   }
   delete(id:any){
    return this.client.delete("http://localhost:3000/watched/" +id);
   }
   put(movie:Movie){
    return this.client.put("http://localhost:3000/watched/"+ movie.id, movie);
   }
}
export default WatchedService;