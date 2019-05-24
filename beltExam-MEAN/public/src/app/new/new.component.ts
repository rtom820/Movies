import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newMovie: any;
  newReview: any;
  errorBoolean: boolean; //false
  errorMessage: "";
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newMovie = { name: "", reviews: [] } 
    this.newReview = { name:"", rating: null, comment: ""}
  }
  // onSubmit() {
  //   if(this.newMovie.name.length < 3) {
  //     this.errorBoolean = true;
  //   } else {
  //     this.newMovie.reviews.push(this.newReview);
  //     let observable = this._httpService.addMovie(this.newMovie);
  //     observable.subscribe(data => {
  //       console.log(data);
  //       //display error messages to html. Change error messages in the CONTROLLERS as needed
  //       if (data['errorMsg']) {
  //         this.errorMessage = data['errorMsg'];
  //       } else {
  //         this._router.navigate(['/p']);
  //       }
  //     })
  //   }
  // }

  // front-end validation
  onSubmit() {
    if (this.newMovie.name.length < 3) {
      this.errorBoolean = true;
    } else {
      //this will create the object with an initial review
      this.newMovie.reviews.push(this.newReview);
      let observable = this._httpService.addMovie(this.newMovie);
      observable.subscribe(data => {
        console.log(data);
        this._router.navigate(['/movie'])
      })
    }
  }


}