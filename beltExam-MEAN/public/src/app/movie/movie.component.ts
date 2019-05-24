import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  listOfMovies: any;
  selectedMovie: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getMoviesList();
  }
  getMoviesList(){
    let observable = this._httpService.getMovies();
    observable.subscribe(data => {
      // this.listOfMovies = data['data']; // regular retrieval
      this.listOfMovies = data['data'].sort(this._httpService.dynamicSort("name")); //sort by name
      for(let movie of this.listOfMovies){
        var sum = 0
        for (var i = 0; i < movie.reviews.length; i++){
          sum += movie.reviews[i].rating;
        }
        movie.avg = sum / movie.reviews.length
      }
    })
  }
  onShow(movie) {
    this._router.navigate(['/movie/details/' + movie._id ])
  }
  onEdit(movie) {
    this._router.navigate(['/movie/edit/' + movie._id ])
  }
  onDelete(movie) {
    let observable = this._httpService.deleteMovie(movie._id);
    observable.subscribe(data => {
      this.getMoviesList();
    })
  }
  onSelect(movie){
    this.selectedMovie = movie;
  }
  ReceivedReviewMessage(event){
    if(event == true){
      this.selectedMovie = null;
    }
  }
}