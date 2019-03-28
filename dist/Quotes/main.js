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

module.exports = "<app-quote></app-quote>"

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
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote */ "./src/app/quote.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Quotes";
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](1, 'The sun is a star.', 'A.B Clark', "Z.G"),
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__["QuoteComponent"],
                _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailsComponent"],
                _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_7__["QuoteFormComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Upvote{\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS1kZXRhaWxzL3F1b3RlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5VcHZvdGV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{quote.author}} \n</p>\n\n    <div class=\"label\">\n        Votes\n    </div>\n\n      <div class=\"votes-value\">\n          {{ votes }}\n      </div> \n\n     <ul id=\"vote\">\n        <li class=\"item\">\n        <a href (click)=\"likeVote()\" class=\"upvote\">Upvote</a>\n        </li>\n        <br>\n        <li class=\"item\">\n          <a href (click)=\"dislikeVote()\" class=\"downvote\">Downvote</a>\n        </li>\n   \n     </ul>\n\n"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
        this.vote = 0;
        this.votes = 0;
    }
    QuoteDetailsComponent.prototype.likeVote = function () {
        this.votes += 1;
        return false;
    };
    QuoteDetailsComponent.prototype.dislikeVote = function () {
        this.votes -= 1;
        return false;
    };
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"])
    ], QuoteDetailsComponent.prototype, "quote", void 0);
    QuoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-details',
            template: __webpack_require__(/*! ./quote-details.component.html */ "./src/app/quote-details/quote-details.component.html"),
            styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWZvcm0vcXVvdGUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <div class=\"row\">\n\n      <form (ngSubmit)='submitQuote()' #goalForm='ngForm'>\n          <div class=\"form-group\">\n\n            Display: {{newQuote.name  }} {{newQuote.author}}\n            <br>\n            <br>\n              <label for=\"name\">Quote</label>\n              <br>\n              <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"newQuote.name\" name=\"name\" #name=\"ngModel\" required>\n              <br>\n              \n          \n\n          <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n              <p> Type a Quote </p>              \n          </div>  \n              \n          </div>\n          <div class=\"form-group\">\n\n              <label for=\"author\">Author</label>\n              <br>\n              <input type=\"text\" required class=\"form-control\" id=\"author\" [(ngModel)]=\"newQuote.author\" name=\"name\" required>\n             <br>\n\n              <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n                  <p> Enter the name of the Author</p>              \n              </div>  \n\n          </div>\n          <div class=\"form-group\">\n\n              <label for=\"submitted\">Submitted by</label>\n              <br>\n              <input type=\"text\" required class=\"form-control\" id=\"submitted\" [(ngModel)]=\"newQuote.submitted\" name=\"name\" required>\n             <br>\n\n              <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n                  <p> Enter the name of the Submitter.</p>              \n              </div>  \n              <br>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success btn-lg\">Submit Quote!</button>\n      </form>\n\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](0, "", "", "");
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QuoteFormComponent.prototype.submitQuote = function () {
        this.addQuote.emit(this.newQuote);
    };
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuoteFormComponent.prototype, "addQuote", void 0);
    QuoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-form',
            template: __webpack_require__(/*! ./quote-form.component.html */ "./src/app/quote-form/quote-form.component.html"),
            styles: [__webpack_require__(/*! ./quote-form.component.css */ "./src/app/quote-form/quote-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());

// import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
// import { Quote } from '../quote';
// @Component({
//   selector: 'app-quote-form',
//   templateUrl: './quote-form.component.html',
//   styleUrls: ['./quote-form.component.css']
// })
// export class QuoteFormComponent implements OnInit {
//   newQuote=new Quote ()
//   @Output() addQuote =new EventEmitter<Quote>();
//   constructor() { }
//   ngOnInit() {
//   }
// }


/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(id, name, author, submitted) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.submitted = submitted;
        this.showAuthor = false;
    }
    return Quote;
}());



/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    color: crimson;\n    text-align: center;\n}\np{\n    color: crimson;\n}\nh3{\n    text-align: center;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxREFBcUQ7SUFDckQsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGNvbG9yOiBjcmltc29uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnB7XG4gICAgY29sb3I6IGNyaW1zb247XG59XG5cbmgze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59Il19 */"

/***/ }),

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Quotes</h1>\n<div class=\"container\">\n<h3>{{date | date:'shortDate'}}</h3>\n<h3>{{date | date:'shortTime'}}</h3>\n<h3>{{5.678 | number:'3.1-2'}}</h3>\n\n     <div class=\"quote\">\n        <app-quote-form (addQuote)=\"addNewQuote($event)\"></app-quote-form>\n    </div>\n\n<div class=\"Author\" *ngFor=\"let quote of quotes;let i = 'index'\">\n        <ul>\n                <li >{{quote.name}}</li> \n                <button (click)='toogleDetails(i)'>Show Author</button>\n\n                <app-quote-details *ngIf=\"quote.showAuthor\" [quote]='quote'></app-quote-details>    \n        </ul>\n</div>\n</div>\n\n\n\n\n\n        \n\n    \n\n\n"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](1, 'Success is not final, failure is not fatal: it is the courage to continue that counts.', 'Winston Churchill', "-"),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](2, 'Our greatest glory is not in never falling, but in rising every time we fall.', 'Confucius', '-'),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](3, 'All our dreams can come true, if we have the courage to pursue them.', 'Walt Disney', '-'),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](4, 'Everything you’ve ever wanted is on the other side of fear.', 'George Addair', '-'),
        ];
        this.date = new Date();
    }
    QuoteComponent.prototype.addNewQuote = function (quote) {
        var quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        this.quotes.unshift(quote);
    };
    QuoteComponent.prototype.toogleDetails = function (index) {
        this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    };
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
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

module.exports = __webpack_require__(/*! /home/python-kid/Documents/Quotes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map