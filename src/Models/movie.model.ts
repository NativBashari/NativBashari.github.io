export class Movie{
    id:any;
    name:string;
    description: string;
    rating: number;
    picture: string;
    year: number;
    wasWatched: boolean;
    constructor(name:string, description: string, rating: number, picture: string,year:number, wasWatched: boolean){
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.picture = picture;
        this.year = year; 
        this.wasWatched = wasWatched;
    }
}
