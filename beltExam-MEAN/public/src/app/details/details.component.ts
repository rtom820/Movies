import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  newReview: any;
  shownMovie: any;
  listOfMovies: [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newReview = { name: "", rating: null, comment: ""}
    this.shownMovie = { name: "", reviews:[{ rating: null, comment: ""}] }
    this.getShownMovie();
  }
  getShownMovie(){
    let observable = this._httpService.getMovie(this._route.snapshot.params.id)
    observable.subscribe(data => {
      this.shownMovie = data['data'];
      console.log(this.shownMovie);
      //get avg rating
      var sum = 0;
      if (this.shownMovie[0].reviews.length > 0 ){
        for (var i = 0; i < this.shownMovie[0].reviews.length; i++){
          sum += this.shownMovie[0].reviews[i].rating;
        }
          this.shownMovie.avg = sum / (this.shownMovie[0].reviews.length);
          this.shownMovie.sortedreviews = this.shownMovie[0].reviews.sort(this._httpService.dynamicSort("-rating")) // sort by descending rating
      }
    })
  }
  getMoviesList(){
    let observable = this._httpService.getMovies();
    observable.subscribe(data => {
      // this.listOfMovies = data['data']; // regular retrieval
      this.listOfMovies = data['data'].sort(this._httpService.dynamicSort("name")); //sort by name
    })
  }
  onSubmit(){
    let observable = this._httpService.addReview(this._route.snapshot.params.id, this.newReview);
    observable.subscribe(data => {
      this.newReview = { name: "", rating: null, comment: ""};
      this.getShownMovie();
    })
  }

  onDelete() {
    let observable = this._httpService.deleteMovie(this._route.snapshot.params.id);
    observable.subscribe(data => {
      this.getMoviesList();
      this._router.navigate(['/movie'])
    })
  }

  onDeleteReview(review){
    let observable = this._httpService.deleteReview(this._route.snapshot.params.id, review._id)
    observable.subscribe(data=> {
      this.getShownMovie();
    })
  }
}