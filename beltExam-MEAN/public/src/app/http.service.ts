import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }
  getMovies(){
    return this._http.get("/movies");
  }
  getMovie(movie_id){ //can get all reviewren of one movie through this route
    return this._http.get("/movies/" + movie_id);
  }
  addMovie(newMovie){
    return this._http.post("/movies/new", newMovie);
  }
  addReview(movie_id, newReview){
    return this._http.put("/reviews/new/" + movie_id, newReview);
  }
  editMovie(movie_id, editedMovie){
    return this._http.put("/movies/edit/" + movie_id, editedMovie);
  }
  //edit review route ?
  deleteMovie(movie_id){
    return this._http.delete("/movies/remove/" + movie_id);
  }
  deleteReview(movie_id, review_id){
    return this._http.get("/reviews/remove/" + movie_id +"/"+ review_id);
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }
}