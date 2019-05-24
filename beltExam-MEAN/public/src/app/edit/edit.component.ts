import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editingMovie: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.editingMovie = {name: "", reviews: []}
    this.getSpecificMovie();

  }
  getSpecificMovie(){
    let observable = this._httpService.getMovie(this._route.snapshot.params.id);
    observable.subscribe(data => {
      this.editingMovie = data['data'][0];
    })
  }
  onSubmit(){
    let observable = this._httpService.editMovie(this._route.snapshot.params.id, this.editingMovie);
    observable.subscribe(data =>{
      this.editingMovie = data['data'][0];
      this._router.navigate(['/movie'])
    })
  }
}
