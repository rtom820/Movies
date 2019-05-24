(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");








//update routes dependent on wireframe
var routes = [
    // {path:'', pathMatch:'full', redirectTo:'home'},
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    // {path: 'movie/new', component:NewComponent},
    { path: 'movie/details/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
    { path: 'movie/edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
    { path: 'movie', component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__["MovieComponent"] },
    { path: 'review', component: _review_review_component__WEBPACK_IMPORTED_MODULE_7__["ReviewComponent"] },
    //catch all
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<h1>Movie Ratings</h1>\n<hr>\n<button type=\"button\" class=\"btn btn-warning\" [routerLink] = \"['/home']\">Home</button>\n<button type=\"button\" class=\"btn btn-info\" [routerLink] = \"['/movie']\">All Movies</button>\n<button type=\"button\" class=\"btn btn-secondary\" [routerLink] = \"['/movie/new']\" disabled>Create New Movie</button>\n<hr>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_8__["ReviewComponent"],
                _movie_movie_component__WEBPACK_IMPORTED_MODULE_9__["MovieComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_11__["NewComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_13__["DetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{shownMovie[0].name}}</h1>\n<h2>Average: {{shownMovie.avg.toFixed(2)}}</h2>\n<button type=\"button\" class=\"btn btn-danger\" (click) = \"onDelete()\">Delete Movie</button>\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Reviewer</th>\n      <th>Rating</th>\n      <th>Comment</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let review of shownMovie[0].reviews\">\n      <td>{{review.name}}</td>\n      <td>{{review.rating}} Stars</td>\n      <td>{{review.comment}}</td>\n      <td>\n        <button type=\"button\" class=\"btn btn-danger\" (click) = \"onDeleteReview(review)\">Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Write a review</h3>\n<p *ngIf=\"newReview.name.length >= 1 && newReview.name.length < 3\" class=\"text-danger\">Reviewer name must be at least 3 characters</p>\n<p *ngIf=\"newReview.comment.length >= 1 && newReview.comment.length < 3\" class=\"text-danger\">Comment must be at least 3 characters</p>\n<form (submit)=\"onSubmit()\">\n  <div class=\"form-group row\"> \n    <label class=\"col-sm-2 col-form-label\">Reviewer:</label>\n    <div class=\"col-sm-5\"><input type=\"text\" name=\"newReview.name\" [(ngModel)]=\"newReview.name\" class=\"form-control\"/></div>\n  </div>\n\n  <div class=\"form-group row\"> \n    <label class=\"col-sm-2 col-form-label\">Rating:</label>\n    <div class=\"col-sm-2\"><select name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\" class=\"form-control\">\n      <option value=\"1\">1 Stars</option>\n      <option value=\"2\">2 Stars</option>\n      <option value=\"3\">3 Stars</option>\n      <option value=\"4\">4 Stars</option>\n      <option value=\"5\">5 Stars</option>\n    </select></div>\n  </div>\n  <div class=\"form-group row\"> \n    <label class=\"col-sm-2 col-form-label\">Comment</label>\n    <div class=\"col-sm-6\"><textarea name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\" class=\"form-control\"></textarea></div>\n  </div>\n  <button type=\"submit\" [disabled]=\"newReview.name.length < 3 || newReview.comment.length < 3 || newReview.rating < 1 || newReview.rating > 5\" class=\"btn btn-success\">Submit</button>\n  <button [routerLink] = \"['/movie']\" class=\"btn btn-outline-danger\">Cancel</button>\n</form>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.newReview = { name: "", rating: null, comment: "" };
        this.shownMovie = { name: "", reviews: [{ rating: null, comment: "" }] };
        this.getShownMovie();
    };
    DetailsComponent.prototype.getShownMovie = function () {
        var _this = this;
        var observable = this._httpService.getMovie(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.shownMovie = data['data'];
            console.log(_this.shownMovie);
            //get avg rating
            var sum = 0;
            if (_this.shownMovie[0].reviews.length > 0) {
                for (var i = 0; i < _this.shownMovie[0].reviews.length; i++) {
                    sum += _this.shownMovie[0].reviews[i].rating;
                }
                _this.shownMovie.avg = sum / (_this.shownMovie[0].reviews.length);
                _this.shownMovie.sortedreviews = _this.shownMovie[0].reviews.sort(_this._httpService.dynamicSort("-rating")); // sort by descending rating
            }
        });
    };
    DetailsComponent.prototype.getMoviesList = function () {
        var _this = this;
        var observable = this._httpService.getMovies();
        observable.subscribe(function (data) {
            // this.listOfMovies = data['data']; // regular retrieval
            _this.listOfMovies = data['data'].sort(_this._httpService.dynamicSort("name")); //sort by name
        });
    };
    DetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        var observable = this._httpService.addReview(this._route.snapshot.params.id, this.newReview);
        observable.subscribe(function (data) {
            _this.newReview = { name: "", rating: null, comment: "" };
            _this.getShownMovie();
        });
    };
    DetailsComponent.prototype.onDelete = function () {
        var _this = this;
        var observable = this._httpService.deleteMovie(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.getMoviesList();
            _this._router.navigate(['/movie']);
        });
    };
    DetailsComponent.prototype.onDeleteReview = function (review) {
        var _this = this;
        var observable = this._httpService.deleteReview(this._route.snapshot.params.id, review._id);
        observable.subscribe(function (data) {
            _this.getShownMovie();
        });
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit()\">\n    <!-- <p>{{editingMovie | json}}</p> -->\n    <p *ngIf=\"editingMovie.name.length >= 1 && editingMovie.name.length < 3\" class=\"text-danger\">Title must be at least 3 characters</p>\n    \n    <div class=\"form-group row\"> \n      <label class=\"col-sm-2 col-form-label\">Movie Title:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" name=\"editingMovie.name\" [(ngModel)] = \"editingMovie.name\" [value]=\"editingMovie.name\" class=\"form-control\"> \n      </div>\n    </div>\n    <button type=\"submit\" [disabled]=\"editingMovie.name.length < 3 \" class=\"btn btn-success\">Submit</button>\n  </form>\n  <button [routerLink] = \"['/movie']\" class=\"btn btn-danger\">Cancel</button>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.editingMovie = { name: "", reviews: [] };
        this.getSpecificMovie();
    };
    EditComponent.prototype.getSpecificMovie = function () {
        var _this = this;
        var observable = this._httpService.getMovie(this._route.snapshot.params.id);
        observable.subscribe(function (data) {
            _this.editingMovie = data['data'][0];
        });
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        var observable = this._httpService.editMovie(this._route.snapshot.params.id, this.editingMovie);
        observable.subscribe(function (data) {
            _this.editingMovie = data['data'][0];
            _this._router.navigate(['/movie']);
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._router.navigate(['/movie']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getMovies = function () {
        return this._http.get("/movies");
    };
    HttpService.prototype.getMovie = function (movie_id) {
        return this._http.get("/movies/" + movie_id);
    };
    HttpService.prototype.addMovie = function (newMovie) {
        return this._http.post("/movies/new", newMovie);
    };
    HttpService.prototype.addReview = function (movie_id, newReview) {
        return this._http.put("/reviews/new/" + movie_id, newReview);
    };
    HttpService.prototype.editMovie = function (movie_id, editedMovie) {
        return this._http.put("/movies/edit/" + movie_id, editedMovie);
    };
    //edit review route ?
    HttpService.prototype.deleteMovie = function (movie_id) {
        return this._http.delete("/movies/remove/" + movie_id);
    };
    HttpService.prototype.deleteReview = function (movie_id, review_id) {
        return this._http.get("/reviews/remove/" + movie_id + "/" + review_id);
    };
    HttpService.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/movie/movie.component.css":
/*!*******************************************!*\
  !*** ./src/app/movie/movie.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Movie</th>\n        <th scope=\"col\">Avg. Rating</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let movie of listOfMovies\">\n        <th>{{movie.name}}</th>\n        <td>{{movie.avg.toFixed(2)}}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-info\" (click) = \"onShow(movie)\">Show Details</button>\n          <button type=\"button\" class=\"btn btn-info\" (click) = \"onEdit(movie)\">Edit</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <app-new></app-new>\n"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MovieComponent = /** @class */ (function () {
    function MovieComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    MovieComponent.prototype.ngOnInit = function () {
        this.getMoviesList();
    };
    MovieComponent.prototype.getMoviesList = function () {
        var _this = this;
        var observable = this._httpService.getMovies();
        observable.subscribe(function (data) {
            // this.listOfMovies = data['data']; // regular retrieval
            _this.listOfMovies = data['data'].sort(_this._httpService.dynamicSort("name")); //sort by name
            for (var _i = 0, _a = _this.listOfMovies; _i < _a.length; _i++) {
                var movie = _a[_i];
                var sum = 0;
                for (var i = 0; i < movie.reviews.length; i++) {
                    sum += movie.reviews[i].rating;
                }
                movie.avg = sum / movie.reviews.length;
            }
        });
    };
    MovieComponent.prototype.onShow = function (movie) {
        this._router.navigate(['/movie/details/' + movie._id]);
    };
    MovieComponent.prototype.onEdit = function (movie) {
        this._router.navigate(['/movie/edit/' + movie._id]);
    };
    MovieComponent.prototype.onDelete = function (movie) {
        var _this = this;
        var observable = this._httpService.deleteMovie(movie._id);
        observable.subscribe(function (data) {
            _this.getMoviesList();
        });
    };
    MovieComponent.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
    };
    MovieComponent.prototype.ReceivedReviewMessage = function (event) {
        if (event == true) {
            this.selectedMovie = null;
        }
    };
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/movie/movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"newMovie.name.length >= 1 && newMovie.name.length < 3\" class=\"text-danger\">Title must be at least 3 characters</p>\n<p *ngIf=\"newReview.name.length >= 1 && newReview.name.length < 3\" class=\"text-danger\">Reviewer name must be at least 3 characters</p>\n<p *ngIf=\"newReview.comment.length >= 1 && newReview.comment.length < 3\" class=\"text-danger\">Comment must be at least 3 characters</p>\n\n<form (submit)=\"onSubmit()\">\n  <div class=\"form-group row\"> \n    <label class=\"col-sm-2 col-form-label\">Movie Title:</label>\n    <div class=\"col-sm-5\"><input type=\"text\" name=\"newMovie.name\" [(ngModel)] = \"newMovie.name\" class=\"form-control\"/></div>\n  </div>\n\n  <div class=\"form-group row\"> \n    <label class=\"col-sm-2 col-form-label\">Reviewer:</label>\n    <div class=\"col-sm-5\"><input type=\"text\" name=\"newReview.name\" [(ngModel)]=\"newReview.name\" class=\"form-control\"/></div>\n  </div>\n\n  <div class=\"form-group row\"> \n    <label class=\"col-sm-2 col-form-label\">Rating:</label>\n    <div class=\"col-sm-2\"><select name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\" class=\"form-control\">\n      <option value=\"1\">1 Stars</option>\n      <option value=\"2\">2 Stars</option>\n      <option value=\"3\">3 Stars</option>\n      <option value=\"4\">4 Stars</option>\n      <option value=\"5\">5 Stars</option>\n    </select></div>\n  </div>\n  <div class=\"form-group row\"> \n    <label class=\"col-sm-2 col-form-label\">Comment</label>\n    <div class=\"col-sm-6\"><textarea name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\" class=\"form-control\"></textarea></div>\n  </div>\n  <button type=\"submit\" [disabled]=\"newMovie.name.length < 3 || newReview.name.length < 3 || newReview.comment.length < 3 || newReview.rating < 1 || newReview.rating > 5\" class=\"btn btn-success\">Submit</button>\n  <button [routerLink] = \"['/movie']\" class=\"btn btn-outline-danger\">Cancel</button>\n</form>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newMovie = { name: "", reviews: [] };
        this.newReview = { name: "", rating: null, comment: "" };
    };
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
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.newMovie.name.length < 3) {
            this.errorBoolean = true;
        }
        else {
            //this will create the object with an initial review
            this.newMovie.reviews.push(this.newReview);
            var observable = this._httpService.addMovie(this.newMovie);
            observable.subscribe(function (data) {
                console.log(data);
                _this._router.navigate(['/movie']);
            });
        }
    };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/review/review.component.html":
/*!**********************************************!*\
  !*** ./src/app/review/review.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{reviewVariable.name}}</p>\n<div *ngFor=\"let x of reviewVariable.reviews\">\n  <p>{{x.name}}</p>\n  <p>{{x.comment}}</p>\n  <p>{{x.rating}}</p>\n</div>\n<button (click)=\"sendBackToParent()\">Go back</button>"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
        this.reviewOutputVariable = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent.prototype.sendBackToParent = function () {
        this.reviewOutputVariable.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReviewComponent.prototype, "reviewVariable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReviewComponent.prototype, "reviewOutputVariable", void 0);
    ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Ryan/Desktop/CodingDojo/MEAN_stack/beltExam-MEAN/movieReviews/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map