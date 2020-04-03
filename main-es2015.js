(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width,minimum-scale=1.0,maximum-scale=1.0\"/>\n    </head>\n    <body>\n<app-header></app-header>\n<router-outlet></router-outlet>\n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"rowcolumns\">\n      \n     <div class=\"chat-container\" *ngFor=\"let item of list\">\n         <!-- <div class=\"row\">\n            <a href=\"#\">{{item.name}}</a>\n        \n            <p>{{item.message}}</p>\n         </div> -->\n\n         <div class=\"row\">\n            <div class=\"col-xs-6 col-sm-3\">\n                <p class=\"para\" class=\"rounded-pill\">{{item.name}}</p>\n            </div>\n            <div class=\"col-xs-6 col-sm-9\">\n                <p class=\"rounded-pill\">{{item.message}}</p>\n            </div>\n        </div>\n        \n      </div>\n      <input type=\"text\" name=\"firstName\"  #firstName=\"ngModel\" id=\"message\" autocomplete=\"off\" placeholder=\"Chat here...\" (keyup.enter)=\"chatsend($event.target.value)\" [(ngModel)]=\"msgVal\" />\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbot/chat-dialog/chat-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatbot/chat-dialog/chat-dialog.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic\">\n<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css\">\n<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.css\">\n\n<!-- <div id=\"chat-message-list\" class=\"chat\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n      <div class=\"container\">\n      <ng-container *ngFor=\"let message of messages | async\">\n          <div class=\"message\" [ngClass]=\"{'message-row other-message':message.sentBy==='bot',\n                                              'message-row you-message':message.sentBy==='user'}\">\n               <div class=\"message-content\">\n               <div *ngIf=\"message.sentBy==='bot'\">\n                <img src=\"../../../assets/images/chatbot.jpg\" style=\"border-radius: 50%;width: 400px;\">\n              </div>\n                  <div class=\"message-text\">\n                    {{message.content}}\n                  </div>\n                </div>                           \n          </div>\n      \n      </ng-container>\n      \n      </div>\n  </div>\n  <div class=\"container\">\n    <label for=\"nameField\">Your message</label>\n    <input id=\"content\" [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\" type=\"text\"><br>\n    <button (click)=\"sendMessage()\">Send</button>\n  </div> -->\n\n\n\n\n\n\n\n\n\n  <!-- <div id=\"chat-message-list\">\n    <div #scrollMe style=\"overflow: scroll; height: 400px;\">\n    <ng-container *ngFor=\"let message of messages | async\">\n        <div class=\"message\" [ngClass]=\"{'message-row other-message':message.sentBy==='bot',\n                                            'message-row you-message':message.sentBy==='user'}\">\n             <div class=\"message-content\">\n             <div *ngIf=\"message.sentBy==='bot'\">\n              <img src=\"../../../assets/images/chatbot.jpg\" style=\"border-radius: 50%;width: 400px;\">\n            </div>\n                <div class=\"message-text\">\n                  {{message.content}}\n                </div>\n              </div>                           \n        </div>\n    \n    </ng-container>\n    <label for=\"nameField\">Your message</label>\n  <input id=\"content\" [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\" type=\"text\"><br>\n  <button (click)=\"sendMessage()\">Send</button>\n</div>\n    \n</div> -->\n\n\n\n\n\n\n\n\n\n    \n    <div #scrollMe style=\"overflow-y: scroll; height: 350px;\">\n    <ng-container *ngFor=\"let message of messages | async\">\n        <div class=\"message\" [ngClass]=\"{'message-row other-message':message.sentBy==='bot',\n                                            'message-row you-message':message.sentBy==='user'}\">\n             <div class=\"message-content\">\n             <div *ngIf=\"message.sentBy==='bot'\">\n              <img src=\"../../../assets/images/chatbot.jpg\" style=\"border-radius: 50%;width: 400px;\">\n            </div>\n                <div class=\"message-text\">\n                  {{message.content}}\n                </div>\n              </div>                           \n        </div>\n        \n    </ng-container>\n        <label for=\"nameField\">Your message</label>\n        <input id=\"content\" [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\" type=\"text\"><br>\n        <button (click)=\"sendMessage()\">Send</button>\n    \n</div>\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \n  <!-- <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n       <mat-card-subtitle>Info-Buzz Chat-Bot</mat-card-subtitle>\n    </mat-card-header>\n    \n   <mat-card-content>\n      \n        <div id=\"chat-message-list\">\n            <div class=\"container\">\n                <ng-container *ngFor=\"let message of messages | async\">\n                    <div class=\"message\" [ngClass]=\"{'message-row other-message':message.sentBy==='bot',\n                                                        'message-row you-message':message.sentBy==='user'}\">\n                        <div class=\"message-content\">\n                        <div *ngIf=\"message.sentBy==='bot'\">\n                        <img src=\"../../../assets/images/chatbot.jpg\" style=\"border-radius: 50%;width: 400px;\">\n                        </div>\n                            <div class=\"message-text\">\n                            {{message.content}}\n                            </div>\n                        </div>                           \n                    </div>\n                \n                </ng-container>\n            </div>\n        </div>\n\n\n    </mat-card-content>\n    <label for=\"nameField\">Your message</label>\n      <input [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\" type=\"text\"><br>\n      <button (click)=\"sendMessage()\">Send</button>\n  </mat-card> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-list/employee-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-list/employee-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-hover\">\n    <thead>\n        <th>Name</th>\n        <th>Postion</th>\n        <th>Mobile</th>\n        <th></th>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let emp of list\">\n            <td (click)=\"onEdit(emp)\">{{emp.empCode}}-{{emp.fullName}}</td>\n            <td (click)=\"onEdit(emp)\">{{emp.position}}</td>\n            <td (click)=\"onEdit(emp)\">{{emp.mobile}}</td>\n            <td><a class=\"btn text-danger\" (click)=\"onDelete(emp.id)\"><i class=\"fa fa-trash\"></i></a></td>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-lists/employee-lists.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-lists/employee-lists.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"mat-elevation-z8\">\n   <table mat-table [dataSource]=\"dataSource\" style=\"width: 90%;\">\n\n    \n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> Id </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container>\n  \n  \n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.fullName}} </td>\n    </ng-container>\n  \n    \n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Mobile </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.mobile}} </td>\n    </ng-container>\n  \n    \n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Position </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>  -->\n   <div class=\"container\">\n      <mat-toolbar>\n          <span class=\"fill-space\"></span>\n          <span>List of Employess</span>\n          <span class=\"fill-space\"></span>\n      </mat-toolbar>\n  </div>\n  <div class=\"row\">\n    \n    <div class=\"container\">\n      <mat-form-field style=\"width: 80%;\">\n        <input matInput [(ngModel)]=\"searchkey\" placeholder=\"search\" autocomplete=\"off\" (keyup)=\"applyFilter()\">\n        <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"searchkey\" (click)=\"searchclear()\"><mat-icon>close</mat-icon></button>          \n      </mat-form-field>\n  </div>\n</div>\n  <div class=\"container\" style=\"width:100%;\">\n  <div class=\"mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Id </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.empCode}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"uid\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header style=\"display: none;\"> uId </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" style=\"display: none;\"> {{element.id}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"imageUrl\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header style=\"display: none;\"> imgurl </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" style=\"display: none;\"> {{element.imageUrl}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"email\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header style=\"display: none;\"> email </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" style=\"display: none;\"> {{element.email}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"fullName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> fullName </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.fullName}} </mat-cell>\n          </ng-container>\n        \n          \n          <ng-container matColumnDef=\"mobile\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.mobile}} </mat-cell>\n          </ng-container>\n        \n          \n          <ng-container matColumnDef=\"position\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Position </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <button mat-icon-button (click)=\"onEdit(row)\"><mat-icon>visibility</mat-icon></button>\n                    <button mat-icon-button color=\"warn\"><mat-icon>sms</mat-icon></button>\n                </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"loading\">\n               <mat-footer-cell *matFooterCellDef colspan=\"6\">\n                 <mat-spinner *ngIf=\"showSpinner\"></mat-spinner>\n               </mat-footer-cell>\n           </ng-container>\n        \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          <mat-footer-row *matFooterRowDef=\"['loading']\"></mat-footer-row>\n\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n  </div>\n</div>\n<!-- <button (click)=\"onAdd()\" type=\"button\" class=\"btn btn-success\" id=\"fixedbutton\">Chat with us</button> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-profile/employee-profile.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-profile/employee-profile.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>Employee Info!</p>\n<div *ngIf=\"recievedRow\">\n    <div class=\"form-row\">\n        <div class=\"form-group col-md-3\">\n            Name\n       </div>\n       <div class=\"form-group col-md-5\">\n        <input name=\"fullName\"  class=\"form-control\"   value=\"{{recievedRow.name}}\" disabled>\n       </div>\n    </div>\n<div class=\"form-group\">\n    <input name=\"fullName\"  class=\"form-control\"   value=\"{{recievedRow.name}}\" disabled>\n</div>\n<div class=\"form-group\">\n    <input name=\"fullName\"  class=\"form-control\"   value=\"{{recievedRow.name}}\" disabled> \n</div>\n<div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n        <input name=\"empCode\" class=\"form-control\"  value=\"{{recievedRow.name}}\" disabled>\n        \n    </div>\n    <div class=\"form-group col-md-6\">\n        <input name=\"empCode\" class=\"form-control\"  value=\"{{recievedRow.name}}\" disabled>\n        \n    </div>\n</div>\n<div class=\"form-group\">\n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-lg btn-block btn-info\">submit</button>\n</div>\n</div>\n -->\n <div class=\"form-row\">\n <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{recievedRow.name}}</mat-card-title>\n      <mat-card-subtitle>Profile</mat-card-subtitle>\n    </mat-card-header>\n    <!-- <img mat-card-image src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbNpnfOB2P-cWuGoTIJrSTnbyugR0faFv03_bE0rX_i7RDz3I7g&s\" alt=\"Photo of a Shiba Inu\"> -->\n    <img mat-card-image [src]=\"imgsrc\" alt=\"Photo of a Shiba Inu\" style=\"width: 400px;height: 300px;\">\n    <mat-card-content>\n      <p>\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, ad expedita a, id laudantium quis amet temporibus mollitia ea atque veniam odio neque doloribus quidem dicta maxime error magnam consectetur?\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>Mail</button>\n      <button mat-button>Contact</button>\n    </mat-card-actions>\n  </mat-card>\n  <mat-card class=\"example-card1\" style=\"margin-left: 1rem;width: 600px;\">\n    <mat-card-header>\n      <mat-card-title style=\"margin-left: 5rem;\">Info</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <div *ngIf=\"recievedRow\">\n            <div class=\"row\">\n                <div class=\"col-xs-6 col-sm-3\">\n                    <label class=\"control-label\"><h5>Name</h5></label>\n                </div>\n                <div class=\"col-xs-6 col-sm-8\">\n                    <div id=\"name\"><h5>{{recievedRow.name}}</h5></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-6 col-sm-3\">\n                    <label class=\"control-label\"><h5>EmpID</h5></label>\n                </div>\n                <div class=\"col-xs-6 col-sm-8\">\n                    <div id=\"name\"><h5>{{recievedRow.empCode}}</h5></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-6 col-sm-3\">\n                    <label class=\"control-label\"><h5>Position</h5></label>\n                </div>\n                <div class=\"col-xs-6 col-sm-8\">\n                    <div id=\"name\"><h5>{{recievedRow.position}}</h5></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-6 col-sm-3\">\n                    <label class=\"control-label\"><h5>Mobile</h5></label>\n                </div>\n                <div class=\"col-xs-6 col-sm-8\">\n                    <div id=\"name\"><h5>{{recievedRow.mobile}}</h5></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-6 col-sm-3\">\n                    <label class=\"control-label\"><h5>Email</h5></label>\n                </div>\n                <div class=\"col-xs-6 col-sm-8\">\n                    <div id=\"name\"><h5>{{recievedRow.email}}</h5></div>\n                </div>\n            </div>\n        \n        </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee/employee.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee/employee.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6\" style=\"float: left;\">\n<h1 class=\"display-4\">Employee Register</h1>\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=onSubmit(form)>\n<input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.formData.id\">\n<div class=\"form-group\">\n    <input name=\"fullName\" #fullName=\"ngModel\" [(ngModel)]=\"service.formData.fullName\" class=\"form-control\" placeholder=\"FullName\" required>\n     <div *ngIf=\"fullName.invalid && fullName.touched\" class=\"validation-error\">FullName is required</div>\n</div>\n<div class=\"form-group\">\n    <input name=\"position\" #position=\"ngModel\" [(ngModel)]=\"service.formData.position\" class=\"form-control\" placeholder=\"position\" required>\n    <div *ngIf=\"position.invalid && position.touched\" class=\"validation-error\">position is required</div>\n</div>\n<div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n        <input name=\"empCode\" #empCode=\"ngModel\" [(ngModel)]=\"service.formData.empCode\" class=\"form-control\" placeholder=\"empCode\" required>\n        <div *ngIf=\"empCode.invalid && empCode.touched\" class=\"validation-error\">empCode is required</div>\n    </div>\n    <div class=\"form-group col-md-6\">\n        <input name=\"mobile\" #mobile=\"ngModel\" [(ngModel)]=\"service.formData.mobile\" class=\"form-control\" placeholder=\"mobile\" required>\n        <div *ngIf=\"mobile.invalid && mobile.touched\" class=\"validation-error\">mobile is required</div>\n    </div>\n</div>\n<div class=\"form-group\">\n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-lg btn-block btn-info\">submit</button>\n</div>\n</form>\n</div>\n<div class=\"card\" style=\"width: 25rem;\">\n    <div class=\"card-body\">\n  \n    <form [formGroup]=\"formTemplate\" (submit)=\"uploadpic(formTemplate.value)\">\n        <div class=\"text-center\">\n            <img [src]=\"imgsrc\" width=\"350px\" height=\"250px\" (click)=\"fileuploader.click()\">\n        </div>\n        <div class=\"form-group\">\n            <label>select pic to upload</label>\n            <input type=\"file\" accept=\"image/*\" class=\"form-control\" formControlName=\"imageUrl\" #fileuploader (change)=\"showpreview($event)\">\n            <div class=\"text-danger\" *ngIf=\"issubmitted && formControls.imageUrl.errors?.required\">This field is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\">upload</button>\n        </div>\n    </form>\n    \n\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-5\">\n        <app-employee></app-employee>\n    </div>\n    <div class=\"col-md-7\">\n        <app-employee-list></app-employee-list>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/footer/footer.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/footer/footer.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"page-footer font-small blue\">\n\n<div class=\"row\">\n    <div class=\"col-md-7\">\n        <div class=\"footer-copyright text-right py-3\">© 2020 Copyright:\n        <a href=\"https://mdbootstrap.com/\"> MDBootstrap.com</a>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"chat\">\n            <button (click)=\"onAdd()\" type=\"button\" id=\"fixedbutton\"><img src=\"../../../assets/images/chat with us.png\" /></button>\n        </div>\n    </div>\n</div>\n  \n  </footer>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/header/header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/header/header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width,minimum-scale=1.0,maximum-scale=1.0\"/>\n    </head>\n    <body>\n      <div>\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"container\" style=\"position: relative;\">\n        <a class=\"navbar-brand\" href=\"#\">Info-Buzz</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\"><a *ngIf=\"isloggedin()\" class=\"nav-link\" routerLink=\"main\">List</a></li>\n\n        <li><a *ngIf=\"!isloggedin()\" routerLink=\"sign-in\" class=\"nav-link\" type=\"button\">sign-in</a></li>\n\n        <!-- <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"sign-in\">sign In</a></li> -->\n        <li><a *ngIf=\"isloggedin()\" (click)=\"Logout()\" type=\"button\" class=\"nav-link\">Logout</a></li>\n        <li><a *ngIf=\"isloggedin()\"  (click)=\"profile()\" type=\"button\" class=\"nav-link\">Profile</a></li>\n        <li><a *ngIf=\"isloggedin()\" routerLink=\"chats\" type=\"button\" class=\"nav-link\">Chats</a></li>\n        <li class=\"nav-item\"><a *ngIf=\"!isloggedin()\" class=\"nav-link\" routerLink=\"sign-up\" type=\"button\">Sign Up</a></li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" type=\"button\" routerLink=\"profile\">Profile</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n    </div>\n  </nav>\n  \n<!-- <div class=\"chat\">\n    <button type=\"button\" id=\"fixedbutton\"><img src=\"../../../assets/images/chat with us.png\" /></button>\n</div> -->\n<!-- <div id=\"mySidenav\" class=\"sidenav\">\n  <a href=\"#\">About</a>\n</div> -->\n<button (click)=\"onAdd()\" type=\"button\" class=\"btn btn-success\" id=\"fixedbutton\" matTooltip=\"Chat with Us\">Chat with us</button>\n</div>\n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/profile/profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/profile/profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6\" style=\"float: left;\">\n    <h1 class=\"display-4\">Profile</h1>\n    <form #form=\"ngForm\" autocomplete=\"off\" (submit)=onSubmit(form)>\n    <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.formData.id\">\n    <div class=\"form-row\">\n        <div class=\"form-group col-md-3\">\n            <label>FullName:</label>\n        </div>\n        <div class=\"form-group col-md-9\">\n            <input name=\"fullName\" #fullName=\"ngModel\" [(ngModel)]=\"service.formData.fullName\" class=\"form-control\" placeholder=\"FullName\" required [disabled]=\"!formcomplete\">\n            <div *ngIf=\"fullName.invalid && fullName.touched\" class=\"validation-error\">FullName is required</div>\n        </div>    \n    </div>\n    <div class=\"form-row\">\n        <div class=\"form-group col-md-3\">\n            <label>Email:</label>\n        </div>\n        <div class=\"form-group col-md-9\">\n        <input name=\"email\" #email=\"ngModel\" [(ngModel)]=\"service.formData.email\" class=\"form-control\" placeholder=\"email\" required [disabled]=\"!formcomplete\">\n         <div *ngIf=\"email.invalid && email.touched\" class=\"validation-error\">email is required</div>\n        </div>\n    </div>\n    <div class=\"form-row\">\n        <div class=\"form-group col-md-3\">\n            <label>Position:</label>\n        </div>\n        <div class=\"form-group col-md-9\">\n        <input name=\"position\" #position=\"ngModel\" [(ngModel)]=\"service.formData.position\" class=\"form-control\" placeholder=\"position\"  [disabled]=\"!formcomplete\">\n        <div *ngIf=\"position.invalid && position.touched\" class=\"validation-error\">position is required</div>\n        </div>\n    </div>\n    <div class=\"form-row\">\n        <div class=\"form-group col-md-3\">\n            <label>Empcode:</label>\n        </div>\n        <div class=\"form-group col-md-9\">\n            <input name=\"empCode\" #empCode=\"ngModel\" [(ngModel)]=\"service.formData.empCode\" class=\"form-control\" placeholder=\"empCode\" required [disabled]=\"!formcomplete\">\n            <div *ngIf=\"empCode.invalid && empCode.touched\" class=\"validation-error\">empCode is required</div>\n        </div>\n    </div>\n    <div class=\"form-row\">\n        <div class=\"form-group col-md-3\">\n            <label>Mobile:</label>\n        </div>\n        <div class=\"form-group col-md-9\">\n            <input name=\"mobile\" #mobile=\"ngModel\" [(ngModel)]=\"service.formData.mobile\" class=\"form-control\" placeholder=\"mobile\" required [disabled]=\"!formcomplete\">\n            <div *ngIf=\"mobile.invalid && mobile.touched\" class=\"validation-error\">mobile is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"formcomplete\">\n        <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-lg btn-block btn-info\">submit</button>\n    </div>\n    </form>\n    <div class=\"form-group\">\n        <a *ngIf=\"!formcomplete\" class=\"btn btn-success\" (click)=\"Editform()\" type=\"button\">Edit</a>\n    </div>\n    </div>\n    <div class=\"card\" style=\"width: 25rem;\">\n        <div class=\"card-body\">\n      \n        <form [formGroup]=\"formTemplate\" (submit)=\"uploadpic(formTemplate.value)\">\n            <div class=\"text-center\" *ngIf=\"formcomplete\">\n                <img [src]=\"imgsrc\" width=\"350px\" height=\"250px\" (click)=\"fileuploader.click()\">\n            </div>\n            <div class=\"text-center\" *ngIf=\"!formcomplete\">\n                <img [src]=\"service.formData.imageUrl\" width=\"350px\" height=\"250px\">\n            </div>\n            <div class=\"form-group\" *ngIf=\"formcomplete\">\n                <label>select pic to upload</label>\n                <input type=\"file\" accept=\"image/*\" class=\"form-control\" formControlName=\"imageUrl\" #fileuploader (change)=\"showpreview($event)\">\n                <div class=\"text-danger\" *ngIf=\"issubmitted && formControls.imageUrl.errors?.required\">This field is required</div>\n            </div>\n            <div class=\"form-group\" *ngIf=\"formcomplete\">\n                <div class=\"row\">\n                    <div>\n                        <button type=\"submit\" class=\"btn btn-success\">upload</button>\n                    </div>\n                    <div *ngIf=\"!tickstatus\">\n                        <i class=\"material-icons\">{{ showSpinner ? 'check_circle':'cancel'}}</i>\n                    </div>\n                    <div>\n                        <mat-spinner *ngIf=\"showSpinner\"></mat-spinner>\n                   </div>\n                </div>\n            </div>\n        </form>\n        \n    \n    </div>\n    </div>\n<!-- <div class=\"form-row\">\n    <mat-card class=\"example-card\">\n       <mat-card-header>\n         <div mat-card-avatar class=\"example-header-image\"></div>\n         <mat-card-title>{{emp.name}}</mat-card-title>\n         <mat-card-subtitle>Profile</mat-card-subtitle>\n       </mat-card-header>\n       <img mat-card-image src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbNpnfOB2P-cWuGoTIJrSTnbyugR0faFv03_bE0rX_i7RDz3I7g&s\" alt=\"Photo of a Shiba Inu\">\n       <mat-card-content>\n         <p>\n           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, ad expedita a, id laudantium quis amet temporibus mollitia ea atque veniam odio neque doloribus quidem dicta maxime error magnam consectetur?\n         </p>\n       </mat-card-content>\n       <mat-card-actions>\n         <button mat-button>Mail</button>\n         <button mat-button>Contact</button>\n       </mat-card-actions>\n     </mat-card>\n     <mat-card class=\"example-card\" style=\"margin-left: 3rem;width: 600px;\">\n       <mat-card-header>\n         <mat-card-title style=\"margin-left: 5rem;\">Info</mat-card-title>\n       </mat-card-header>\n       <mat-card-content>\n           <div *ngIf=\"invoiceArray\">\n               <div class=\"row\">\n                   <div class=\"col-xs-6 col-sm-4\">\n                       <label class=\"control-label\"><h5>Name :</h5></label>\n                   </div>\n                   <div class=\"col-xs-6 col-sm-8\">\n                       <div id=\"name\"><h5>{{invoiceArray.email}}</h5></div>\n                   </div>\n               </div>\n               <div class=\"row\">\n                   <div class=\"col-xs-6 col-sm-4\">\n                       <label class=\"control-label\"><h5>EmpID   :</h5></label>\n                   </div>\n                   <div class=\"col-xs-6 col-sm-8\">\n                       <div id=\"name\"><h5>{{invoiceArray.empCode}}</h5></div>\n                   </div>\n               </div>\n               <div class=\"row\">\n                   <div class=\"col-xs-6 col-sm-4\">\n                       <label class=\"control-label\"><h5>Position :</h5></label>\n                   </div>\n                   <div class=\"col-xs-6 col-sm-8\">\n                       <div id=\"name\"><h5>{{invoiceArray.position}}</h5></div>\n                   </div>\n               </div>\n               <div class=\"row\">\n                   <div class=\"col-xs-6 col-sm-4\">\n                       <label class=\"control-label\"><h5>Mobile :</h5></label>\n                   </div>\n                   <div class=\"col-xs-6 col-sm-8\">\n                       <div id=\"name\"><h5>{{invoiceArray.mobile}}</h5></div>\n                   </div>\n               </div>\n               <div class=\"row\">\n                   <div class=\"col-xs-6 col-sm-3\">\n                       <label class=\"control-label\"><h5>Email :</h5></label>\n                   </div>\n                   <div class=\"col-xs-6 col-sm-9\">\n                       <div id=\"name\"><h5>{{invoiceArray.name}}+{{invoiceArray.empCode}}@wipro.com</h5></div>\n                   </div>\n               </div>\n           \n           </div>\n       </mat-card-content>\n     </mat-card>\n   </div>  -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/sign-in/sign-in.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/sign-in/sign-in.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\">\n    <div class=\"row\">\n     <div class=\"col-sm-5 mx-auto mt-5 text-center\"> \n    <div class=\"card bg-light\" style=\"width: 28rem;\">\n    <div class=\"card-header\">\n    Login\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"form-group\">\n                        <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n                    </div>\n                 </div>\n        </div>\n        <div class=\"row\">\n                 <div class=\"col-12\">\n                    <div class=\"form-group\">\n                        <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                        \n                    </div>\n                 </div>\n                          \n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n            </div>\n            <a style=\"margin-left: 9rem;\" (click)=\"resetpassword()\" type=\"button\" class=\"nav-link\">Forgot Password</a>\n        </div>\n    </div>\n    </div>\n    </div>\n    </div>\n    </div>   -->\n\n\n\n\n    <div class=\"container p-3\">\n        <div class=\"offset-3 col-6\">\n          <div class=\"card\">\n            <div class=\"card-header  font-weight-bold\">\n              Login\n            </div>\n            <div class=\"card card-body\" style=\"padding:30px;\">\n                \n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <div class=\"form-group\">\n                            <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n                        </div>\n                     </div>\n            </div>\n            <div class=\"row\">\n                     <div class=\"col-12\">\n                        <div class=\"form-group\">\n                            <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required (keyup.enter)=\"login()\">\n                            \n                        </div>\n                     </div>\n                              \n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <button [disabled]=\"!(email&&password)\" class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <a (click)=\"resetpassword()\" type=\"button\" class=\"nav-link\">Forgot Password</a>\n                </div>\n                \n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"spinner\" style=\"margin-left: 600px;\">\n           <mat-spinner *ngIf=\"showSpinner\"></mat-spinner>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/sign-up/sign-up.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/sign-up/sign-up.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\">\n    <div class=\"row\">\n     <div class=\"col-sm-5 mx-auto mt-5 text-center\"> \n    <div class=\"card bg-light\" style=\"width: 28rem;\">\n    <div class=\"card-header\">\n    SignUp\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"form-group\">\n                        <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n                    </div>\n                 </div>\n        </div>\n        <div class=\"row\">\n                 <div class=\"col-12\">\n                    <div class=\"form-group\">\n                        <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                        \n                    </div>\n                 </div>\n                          \n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <button class=\"btn btn-primary\" (click)=\"signup()\">SignUp</button>\n            </div>\n        </div>\n    </div>\n    </div>\n    </div>\n    </div>\n    </div> \n--> \n    <!--new signup form-->\n    \n    <div class=\"container p-3\">\n        <div class=\"offset-3 col-6\">\n          <div class=\"card\">\n            <div class=\"card-header  font-weight-bold\">\n              Sign Up Form\n            </div>\n            <div class=\"card card-body\" style=\"padding: 1px 15px 1px 15px;\">\n              <form [formGroup]=\"frmSignup\" (submit)=\"submit()\" autocomplete=\"off\">\n                <div class=\"form-group\">\n                  <label for=\"email\" [ngClass]=\"frmSignup.controls['email'].invalid ? 'text' : ''\">Email Address</label>\n                  <input style=\"border:3px solid rgb(139, 121, 241);\" id=\"email\" formControlName=\"email\" type=\"email\" class=\"form-control\" [ngClass]=\"frmSignup.controls['email'].invalid ? 'is-invalid' : ''\">\n                  <label class=\"text\" *ngIf=\"frmSignup.controls['email'].hasError('required')\">\n                    Email is Required!\n                  </label>\n                  <label class=\"text\" *ngIf=\"frmSignup.controls['email'].hasError('email')\">\n                    Enter a valid email address!\n                  </label>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"password\" [ngClass]=\"frmSignup.controls['password'].invalid ? 'text' : ''\">Password:</label>\n                  <input style=\"border:3px solid rgb(139, 121, 241);\" id=\"password\" formControlName=\"password\" type=\"password\" class=\"form-control\" [ngClass]=\"frmSignup.controls['password'].invalid ? 'is-invalid' : ''\">\n                  <!-- <label class=\"text-danger col\" *ngIf=\"frmSignup.controls['password'].hasError('required')\">\n                    Password is Required!\n                  </label> -->\n                  <label class=\"col\" [ngClass]=\"frmSignup.controls['password'].hasError('required') || frmSignup.controls['password'].hasError('minlength')  ? 'text' : 'text-success'\">\n                    <i class=\"material-icons\">{{ frmSignup.controls['password'].hasError('required') ||\n                      frmSignup.controls['password'].hasError('minlength') ? 'cancel' :\n                      'check_circle' }}</i>\n                    Must be at least 8 characters!\n                  </label>\n                  <label class=\"col\" [ngClass]=\"frmSignup.controls['password'].hasError('required') || frmSignup.controls['password'].hasError('hasNumber')  ? 'text' : 'text-success'\">\n                    <i class=\"material-icons\">{{ frmSignup.controls['password'].hasError('required') ||\n                      frmSignup.controls['password'].hasError('hasNumber') ? 'cancel' :\n                      'check_circle' }}</i>\n                    Must contain at least 1 number!\n                  </label>\n                  <label class=\"col\" [ngClass]=\"frmSignup.controls['password'].hasError('required') || frmSignup.controls['password'].hasError('hasCapitalCase')  ? 'text' : 'text-success'\">\n                    <i class=\"material-icons\">{{ frmSignup.controls['password'].hasError('required') ||\n                      frmSignup.controls['password'].hasError('hasCapitalCase') ? 'cancel' :\n                      'check_circle' }}</i>\n                    Must contain at least 1 in Capital Case!\n                  </label>\n                  <label class=\"col\" [ngClass]=\"frmSignup.controls['password'].hasError('required') || frmSignup.controls['password'].hasError('hasSmallCase')  ? 'text' : 'text-success'\">\n                    <i class=\"material-icons\">{{ frmSignup.controls['password'].hasError('required') ||\n                      frmSignup.controls['password'].hasError('hasSmallCase') ? 'cancel' :\n                      'check_circle' }}</i>\n                    Must contain at least 1 Letter in Small Case!\n                  </label>\n                  <label class=\"col\" [ngClass]=\"frmSignup.controls['password'].hasError('required') || frmSignup.controls['password'].hasError('hasSpecialCharacters') ? 'text' : 'text-success'\">\n                    <i class=\"material-icons\">{{ frmSignup.controls['password'].hasError('required') ||\n                      frmSignup.controls['password'].hasError('hasSpecialCharacters') ? 'cancel' :\n                      'check_circle' }}</i>\n                    Must contain at least 1 Special Character!\n                  </label>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"confirmPassword\" [ngClass]=\"frmSignup.controls['confirmPassword'].invalid ? 'text' : ''\">Confirm\n                    Password:</label>\n                  <input style=\"border:3px solid rgb(139, 121, 241);\" id=\"confirmPassword\" formControlName=\"confirmPassword\" type=\"password\" class=\"form-control\"\n                    [ngClass]=\"frmSignup.controls['confirmPassword'].invalid ? 'is-invalid' : ''\">\n                  <label class=\"text\" *ngIf=\"frmSignup.controls['confirmPassword'].hasError('required')\">\n                    Password is Required!\n                  </label>\n                  <label class=\"textr\" *ngIf=\"frmSignup.controls['confirmPassword'].hasError('NoPassswordMatch')\">\n                    Password do not match\n                  </label>\n                </div>\n                <div class=\"form-group\">\n                  <button [disabled]=\"frmSignup.invalid\" type=\"submit\" class=\"btn btn-primary btn-block font-weight-bold\">Sign\n                    up</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _employees_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/sign-in/sign-in.component */ "./src/app/employees/sign-in/sign-in.component.ts");
/* harmony import */ var _employees_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees/sign-up/sign-up.component */ "./src/app/employees/sign-up/sign-up.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _employees_employee_lists_employee_lists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employees/employee-lists/employee-lists.component */ "./src/app/employees/employee-lists/employee-lists.component.ts");
/* harmony import */ var _employees_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employees/profile/profile.component */ "./src/app/employees/profile/profile.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _shared_isloggedinauth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/isloggedinauth.guard */ "./src/app/shared/isloggedinauth.guard.ts");










const routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    //{ path: 'mains', component:EmployeeListComponent,canActivate:[AuthGuard]},
    { path: 'main', component: _employees_employee_lists_employee_lists_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeListsComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    //{ path: 'main', component:EmployeeComponent,canActivate:[AuthGuard]},
    { path: 'sign-in', component: _employees_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], canActivate: [_shared_isloggedinauth_guard__WEBPACK_IMPORTED_MODULE_9__["IsloggedinauthGuard"]] },
    { path: 'sign-up', component: _employees_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], canActivate: [_shared_isloggedinauth_guard__WEBPACK_IMPORTED_MODULE_9__["IsloggedinauthGuard"]] },
    { path: 'profile', component: _employees_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'profile/edit', component: _employees_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'chats', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AngularFirebase';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees/employee/employee.component */ "./src/app/employees/employee/employee.component.ts");
/* harmony import */ var _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employees/employee-list/employee-list.component */ "./src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _employees_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./employees/header/header.component */ "./src/app/employees/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _employees_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./employees/sign-in/sign-in.component */ "./src/app/employees/sign-in/sign-in.component.ts");
/* harmony import */ var _employees_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./employees/sign-up/sign-up.component */ "./src/app/employees/sign-up/sign-up.component.ts");
/* harmony import */ var _employees_employee_lists_employee_lists_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./employees/employee-lists/employee-lists.component */ "./src/app/employees/employee-lists/employee-lists.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _app_material_material_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _employees_employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./employees/employee-profile/employee-profile.component */ "./src/app/employees/employee-profile/employee-profile.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _employees_profile_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./employees/profile/profile.component */ "./src/app/employees/profile/profile.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _shared_isloggedinauth_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/isloggedinauth.guard */ "./src/app/shared/isloggedinauth.guard.ts");
/* harmony import */ var _chatbot_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./chatbot/chat-dialog/chat-dialog.component */ "./src/app/chatbot/chat-dialog/chat-dialog.component.ts");
/* harmony import */ var _chatbot_chat_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./chatbot/chat.service */ "./src/app/chatbot/chat.service.ts");
/* harmony import */ var _employees_footer_footer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./employees/footer/footer.component */ "./src/app/employees/footer/footer.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");








































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__["EmployeesComponent"],
            _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeComponent"],
            _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeListComponent"],
            _employees_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
            _employees_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_19__["SignInComponent"],
            _employees_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_20__["SignUpComponent"],
            _employees_employee_lists_employee_lists_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeListsComponent"],
            _employees_employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_29__["EmployeeProfileComponent"],
            _employees_profile_profile_component__WEBPACK_IMPORTED_MODULE_32__["ProfileComponent"],
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_33__["ChatComponent"],
            _chatbot_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ChatDialogComponent"],
            _employees_footer_footer_component__WEBPACK_IMPORTED_MODULE_37__["FooterComponent"]
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
            _chatbot_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ChatDialogComponent"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
            _app_material_material_module__WEBPACK_IMPORTED_MODULE_27__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_31__["AngularFireStorageModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
        ],
        providers: [_shared_employee_service__WEBPACK_IMPORTED_MODULE_12__["EmployeeService"], _shared_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _shared_isloggedinauth_guard__WEBPACK_IMPORTED_MODULE_34__["IsloggedinauthGuard"], _chatbot_chat_service__WEBPACK_IMPORTED_MODULE_36__["ChatService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [_employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeComponent"], _employees_employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_29__["EmployeeProfileComponent"], _chatbot_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ChatDialogComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input#message {\r\n    background:none;\r\n    border:none;\r\n    border-bottom: 1px solid #4C4C4C;\r\n    outline:none;\r\n    box-shadow:none;\r\n    color:black;\r\n    font-size:1.6em;\r\n    font-weight:300;\r\n    margin-bottom: 3em;\r\n    padding:1.2em 0;\r\n    margin-left: 20px;\r\n}\r\n.rowcolumns\r\n{\r\n    margin-left: 7px;\r\n    margin-right: 7px;\r\n}\r\n.chat-container {\r\n    width:99%;\r\n   \r\n}\r\n.chat-container:nth-child(4) {\r\n    opacity: .8;\r\n}\r\n.chat-container:nth-child(3) {\r\n    opacity: .6;\r\n}\r\n.chat-container:nth-child(2) {\r\n    opacity: .4;\r\n}\r\n.chat-container a {\r\n    text-transform: uppercase;\r\n    font-weight:bold;\r\n    background:#c6b3e4;\r\n    color:#f3060618;\r\n    font-size:.8em;\r\n    letter-spacing:1px;\r\n    padding:1em;\r\n    \r\n}\r\n.para\r\n{\r\n    background:#ece6e7;\r\n    color:rgb(14, 13, 13);\r\n    padding: 8px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    margin: 5px 0 5px 0;\r\n     \r\n}\r\n.chat-container p {\r\n    background:#f7f4fc;\r\n    color:rgb(10, 10, 10);\r\n    padding: 8px;\r\n    margin: 5px 0 5px 0;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksU0FBUzs7QUFFYjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjs7QUFFdkIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0I21lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRDNEM0QztcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGJveC1zaGFkb3c6bm9uZTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOjEuNmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG4gICAgcGFkZGluZzoxLjJlbSAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnJvd2NvbHVtbnNcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbi5jaGF0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDo5OSU7XHJcbiAgIFxyXG59XHJcbi5jaGF0LWNvbnRhaW5lcjpudGgtY2hpbGQoNCkge1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbn1cclxuLmNoYXQtY29udGFpbmVyOm50aC1jaGlsZCgzKSB7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxufVxyXG4uY2hhdC1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcclxuICAgIG9wYWNpdHk6IC40O1xyXG59XHJcblxyXG4uY2hhdC1jb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGJhY2tncm91bmQ6I2M2YjNlNDtcclxuICAgIGNvbG9yOiNmMzA2MDYxODtcclxuICAgIGZvbnQtc2l6ZTouOGVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6MXB4O1xyXG4gICAgcGFkZGluZzoxZW07XHJcbiAgICBcclxufVxyXG4ucGFyYVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiNlY2U2ZTc7XHJcbiAgICBjb2xvcjpyZ2IoMTQsIDEzLCAxMyk7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxuICAgICBcclxufVxyXG4uY2hhdC1jb250YWluZXIgcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiNmN2Y0ZmM7XHJcbiAgICBjb2xvcjpyZ2IoMTAsIDEwLCAxMCk7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW46IDVweCAwIDVweCAwO1xyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






let ChatComponent = class ChatComponent {
    constructor(af, afauth, service, fr, empservice) {
        this.af = af;
        this.afauth = afauth;
        this.service = service;
        this.fr = fr;
        this.empservice = empservice;
        this.msgVal = '';
        this.af.collection('messages').valueChanges().subscribe(values => this.count = (values.length + 1).toString());
        this.items = af.collection('messages');
        this.name = this.afauth.auth.currentUser.email;
    }
    chatsend(chatmsg) {
        ///console.log("length of chats is "+this.count);
        const timestamp = firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp;
        let data = {};
        this.empservice.getemployeebyid().then(val => {
            if (val.fullName.trim) {
                this.empname = val.email.substring(0, val.email.indexOf('@'));
            }
            else {
                this.empname = val.fullName;
            }
        });
        data['name'] = this.empname;
        data['message'] = chatmsg;
        data['createdAt'] = timestamp();
        this.af.collection('messages').doc(this.count).set(data);
        //this.items.add({message:chatmsg,name:this.afauth.auth.currentUser.email});
        this.msgVal = '';
    }
    ngOnInit() {
        //console.log("in chat page");
        this.service.getmessages().subscribe(actionArray => {
            this.list = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
        this.searchElement.nativeElement.focus();
    }
};
ChatComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"] },
    { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firstName', { static: false })
], ChatComponent.prototype, "searchElement", void 0);
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")).default]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/chatbot/chat-dialog/chat-dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/chatbot/chat-dialog/chat-dialog.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".from{\r\n    background: red;\r\n}\r\n.to\r\n{\r\n    background: blue;\r\n}\r\n#chat-message-list\r\n{\r\n    grid-area: chat-message-list;\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    padding: 0 20px;\r\n    \r\n    \r\n}\r\n.chat-message-list\r\n{\r\n    grid-area: chat-message-list;\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    padding: 0 20px;\r\n    \r\n}\r\n.message-row\r\n{\r\n    display: grid;\r\n    grid-template-columns: 70%;\r\n    margin-bottom: 20px;\r\n}\r\n.message-content\r\n{\r\n    display: grid;\r\n}\r\n.you-message\r\n{\r\n    justify-content: end;\r\n    \r\n}\r\n.you-message .message-content\r\n{\r\n    justify-items: end;\r\n}\r\n.other-message\r\n{\r\n    justify-items: start;\r\n}\r\n.other-message .message-content\r\n{\r\n    grid-template-columns: 48px 1fr;\r\n    grid-column-gap: 5px;\r\n}\r\n.message-row img\r\n{\r\n    grid-row: span 2;\r\n}\r\n.message-text\r\n{\r\n    padding: 9px 14px;\r\n    font-size: 1.6rem;\r\n    margin-bottom: 5px;\r\n}\r\n.you-message .message-text\r\n{\r\n    background: blue;\r\n    color: white;\r\n    border: 1px solid blue;\r\n    border-radius: 14px 14px 0 14px;\r\n}\r\n.other-message .message-text\r\n{\r\n    background:#eee;\r\n    color: #111;\r\n    border: 1px solid #ddd;\r\n    border-radius: 14px 14px 14px 0;\r\n}\r\n.example-card {\r\n    max-width: 800px;\r\n  }\r\n.example-card1 {\r\n    max-width: 480px;\r\n  }\r\n.example-header-image {\r\n    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdveeR6eieylg70Zs1akLz84U46kCm62Zmcu3WkbTSAEbOeVLH&s');\r\n    background-size: cover;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jaGF0LWRpYWxvZy9jaGF0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7OztBQUduQjtBQUNBOztJQUVJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7O0FBRW5CO0FBQ0E7O0lBRUksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksb0JBQW9COztBQUV4QjtBQUNBOztJQUVJLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLG9CQUFvQjtBQUN4QjtBQUNBOztJQUVJLCtCQUErQjtJQUMvQixvQkFBb0I7QUFDeEI7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQztBQUNBOztJQUVJLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQztBQUlBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLG1JQUFtSTtJQUNuSSxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NoYXQtZGlhbG9nL2NoYXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJvbXtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxufVxyXG4udG9cclxue1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcclxufVxyXG5cclxuI2NoYXQtbWVzc2FnZS1saXN0XHJcbntcclxuICAgIGdyaWQtYXJlYTogY2hhdC1tZXNzYWdlLWxpc3Q7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4uY2hhdC1tZXNzYWdlLWxpc3Rcclxue1xyXG4gICAgZ3JpZC1hcmVhOiBjaGF0LW1lc3NhZ2UtbGlzdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBcclxufVxyXG4ubWVzc2FnZS1yb3dcclxue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubWVzc2FnZS1jb250ZW50XHJcbntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuLnlvdS1tZXNzYWdlXHJcbntcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgXHJcbn1cclxuLnlvdS1tZXNzYWdlIC5tZXNzYWdlLWNvbnRlbnRcclxue1xyXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xyXG59XHJcbi5vdGhlci1tZXNzYWdlXHJcbntcclxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xyXG59XHJcbi5vdGhlci1tZXNzYWdlIC5tZXNzYWdlLWNvbnRlbnRcclxue1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDFmcjtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogNXB4O1xyXG59XHJcbi5tZXNzYWdlLXJvdyBpbWdcclxue1xyXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcclxufVxyXG5cclxuLm1lc3NhZ2UtdGV4dFxyXG57XHJcbiAgICBwYWRkaW5nOiA5cHggMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi55b3UtbWVzc2FnZSAubWVzc2FnZS10ZXh0XHJcbntcclxuICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweCAxNHB4IDAgMTRweDtcclxufVxyXG4ub3RoZXItbWVzc2FnZSAubWVzc2FnZS10ZXh0XHJcbntcclxuICAgIGJhY2tncm91bmQ6I2VlZTtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMTRweCAxNHB4IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIH1cclxuICAuZXhhbXBsZS1jYXJkMSB7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NRZHZlZVI2ZWlleWxnNzBaczFha0x6ODRVNDZrQ202MlptY3UzV2tiVFNBRWJPZVZMSCZzJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/chatbot/chat-dialog/chat-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/chatbot/chat-dialog/chat-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: ChatDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDialogComponent", function() { return ChatDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chatbot_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chatbot/chat.service */ "./src/app/chatbot/chat.service.ts");
/* harmony import */ var rxjs_add_operator_scan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/scan */ "./node_modules/rxjs-compat/_esm2015/add/operator/scan.js");




let ChatDialogComponent = class ChatDialogComponent {
    constructor(chat) {
        this.chat = chat;
    }
    ngOnInit() {
        //this.chat.talk();
        this.messages = this.chat.conversation.asObservable()
            .scan((acc, val) => acc.concat(val));
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    sendMessage() {
        this.chat.converse(this.formValue);
        this.formValue = '';
        this.scrollToBottom();
    }
};
ChatDialogComponent.ctorParameters = () => [
    { type: _chatbot_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', { static: false })
], ChatDialogComponent.prototype, "myScrollContainer", void 0);
ChatDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbot/chat-dialog/chat-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-dialog.component.css */ "./src/app/chatbot/chat-dialog/chat-dialog.component.css")).default]
    })
], ChatDialogComponent);



/***/ }),

/***/ "./src/app/chatbot/chat.service.ts":
/*!*****************************************!*\
  !*** ./src/app/chatbot/chat.service.ts ***!
  \*****************************************/
/*! exports provided: Message, ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api-ai-javascript/es6/ApiAiClient */ "./node_modules/api-ai-javascript/es6/ApiAiClient.js");





let Message = class Message {
    constructor(content, sentBy) {
        this.content = content;
        this.sentBy = sentBy;
    }
};
Message.ctorParameters = () => [
    { type: String },
    { type: String }
];
Message = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Message);

class ChatService {
    constructor() {
        this.token = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dialogflow.angularBot;
        this.client = new api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_4__["ApiAiClient"]({ accessToken: this.token });
        this.conversation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    update(msg) {
        this.conversation.next([msg]);
    }
    converse(msg) {
        const userMessage = new Message(msg, 'user');
        this.update(userMessage);
        return this.client.textRequest(msg)
            .then(res => {
            const speech = res.result.fulfillment.speech;
            const botMessage = new Message(speech, 'bot');
            this.update(botMessage);
        });
    }
    talk() {
        this.client.textRequest('Who are you!').then(res => console.log(res));
    }
}


/***/ }),

/***/ "./src/app/custom-validators.ts":
/*!**************************************!*\
  !*** ./src/app/custom-validators.ts ***!
  \**************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CustomValidators {
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    }
    static passwordMatchValidator(control) {
        const password = control.get('password').value; // get password from our password form control
        const confirmPassword = control.get('confirmPassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    }
}


/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let EmployeeListComponent = class EmployeeListComponent {
    constructor(service, firestore, toaster) {
        this.service = service;
        this.firestore = firestore;
        this.toaster = toaster;
    }
    ngOnInit() {
        this.service.getEmployees().subscribe(actionArray => {
            this.list = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    }
    onEdit(emp) {
        this.service.formData = Object.assign({}, emp);
    }
    onDelete(id) {
        if (confirm("Are you sure to delete this record?")) {
            this.firestore.doc('employees/' + id).delete();
            this.toaster.warning('deleted successfully', 'Emp Register');
        }
    }
};
EmployeeListComponent.ctorParameters = () => [
    { type: src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-list/employee-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employees/employee-list/employee-list.component.css")).default]
    })
], EmployeeListComponent);



/***/ }),

/***/ "./src/app/employees/employee-lists/employee-lists.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/employees/employee-lists/employee-lists.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#fixedbutton {\r\n    position: fixed;\r\n    bottom: 0px;\r\n    right: 1px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlLWxpc3RzL2VtcGxveWVlLWxpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS1saXN0cy9lbXBsb3llZS1saXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZpeGVkYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDFweDsgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/employees/employee-lists/employee-lists.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/employees/employee-lists/employee-lists.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeeListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListsComponent", function() { return EmployeeListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../employee-profile/employee-profile.component */ "./src/app/employees/employee-profile/employee-profile.component.ts");
/* harmony import */ var src_app_chatbot_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/chatbot/chat-dialog/chat-dialog.component */ "./src/app/chatbot/chat-dialog/chat-dialog.component.ts");










let EmployeeListsComponent = class EmployeeListsComponent {
    constructor(service, afauth, dialog) {
        this.service = service;
        this.afauth = afauth;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'fullName', 'mobile', 'position', 'actions', 'uid', 'imageUrl'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.showSpinner = false;
    }
    ngOnInit() {
        this.showSpinner = true;
        this.service.getEmployees().subscribe(actionArray => {
            let array = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](array);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.showSpinner = false;
        });
    }
    searchclear() {
        this.searchkey = '';
        this.applyFilter();
    }
    applyFilter() {
        this.dataSource.filter = this.searchkey.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onAdd() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        dialogConfig.height = "50%";
        dialogConfig.position = {
            bottom: '20px',
            right: '5px'
        };
        this.dialog.open(src_app_chatbot_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ChatDialogComponent"], dialogConfig);
    }
    onEdit(emp) {
        // const dialogConfig=new MatDialogConfig();
        // dialogConfig.disableClose=false;
        // dialogConfig.autoFocus=true;
        // dialogConfig.width="70%";
        // this.dialog.open(EmployeeComponent,dialogConfig);
        const dialogRef = this.dialog.open(_employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeProfileComponent"], {
            width: '70%',
            data: {
                name: emp.fullName,
                empCode: emp.empCode,
                mobile: emp.mobile,
                position: emp.position,
                imageUrl: emp.imageUrl,
                uid: emp.id,
                email: emp.email
            }
        });
    }
};
EmployeeListsComponent.ctorParameters = () => [
    { type: src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], EmployeeListsComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], EmployeeListsComponent.prototype, "paginator", void 0);
EmployeeListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-employee-lists',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-lists/employee-lists.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-lists.component.css */ "./src/app/employees/employee-lists/employee-lists.component.css")).default]
    })
], EmployeeListsComponent);



/***/ }),

/***/ "./src/app/employees/employee-profile/employee-profile.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/employees/employee-profile/employee-profile.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n    max-width: 400px;\r\n  }\r\n  .example-card1 {\r\n    max-width: 480px;\r\n  }\r\n  .example-header-image {\r\n    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdveeR6eieylg70Zs1akLz84U46kCm62Zmcu3WkbTSAEbOeVLH&s');\r\n    background-size: cover;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlLXByb2ZpbGUvZW1wbG95ZWUtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLG1JQUFtSTtJQUNuSSxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZXMvZW1wbG95ZWUtcHJvZmlsZS9lbXBsb3llZS1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNhcmQxIHtcclxuICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1FkdmVlUjZlaWV5bGc3MFpzMWFrTHo4NFU0NmtDbTYyWm1jdTNXa2JUU0FFYk9lVkxIJnMnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/employees/employee-profile/employee-profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/employees/employee-profile/employee-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmployeeProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeProfileComponent", function() { return EmployeeProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let EmployeeProfileComponent = class EmployeeProfileComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.recievedRow = data;
        this.imgsrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbNpnfOB2P-cWuGoTIJrSTnbyugR0faFv03_bE0rX_i7RDz3I7g&s";
        if (data.imageUrl != null) {
            this.imgsrc = this.recievedRow.imageUrl;
        }
    }
    ngOnInit() {
    }
};
EmployeeProfileComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
EmployeeProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee-profile/employee-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-profile.component.css */ "./src/app/employees/employee-profile/employee-profile.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], EmployeeProfileComponent);



/***/ }),

/***/ "./src/app/employees/employee/employee.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/employees/employee/employee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/image.service */ "./src/app/shared/image.service.ts");










let EmployeeComponent = class EmployeeComponent {
    constructor(service, firestore, toastr, afAuth, storage, imgservice) {
        this.service = service;
        this.firestore = firestore;
        this.toastr = toastr;
        this.afAuth = afAuth;
        this.storage = storage;
        this.imgservice = imgservice;
        this.selectedimage = null;
        this.formTemplate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    ngOnInit() {
        this.resetForm();
        let uid = this.afAuth.auth.currentUser.uid;
        this.uploadformreset();
        this.imgservice.getImageDetailList();
    }
    resetForm(form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            id: null,
            fullName: '',
            position: '',
            empCode: '',
            mobile: '',
            email: '',
            imageUrl: '',
        };
    }
    onSubmit(form) {
        let data = Object.assign({}, form.value);
        delete data.id;
        if (form.value.id == null)
            this.firestore.collection('employees').add(data);
        else
            this.firestore.doc('employees/' + form.value.id).update(data);
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Emp Reg');
    }
    populateforms(emp) {
        this.service.formData.email = emp.email;
        this.service.formData.empCode = emp.empCode;
        this.service.formData.fullName = emp.fullName;
        this.service.formData.mobile = emp.mobile;
        this.service.formData.id = emp.id;
        this.service.formData.position = emp.position;
    }
    showpreview(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => this.imgsrc = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.selectedimage = event.target.files[0];
        }
        else {
            this.imgsrc = '/assets/img/clickheretoupload.jpeg';
            this.selectedimage = null;
        }
    }
    uploadpic(formValue) {
        this.issubmitted = true;
        if (this.formTemplate.valid) {
            var filePath = 'images/' + this.afAuth.auth.currentUser.uid;
            const fileRef = this.storage.ref(filePath);
            this.storage.upload(filePath, this.selectedimage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    formValue['imageUrl'] = url;
                    formValue['uid'] = this.afAuth.auth.currentUser.uid;
                    this.firestore.collection('imagedetails').add(formValue);
                    this.uploadformreset();
                });
            })).subscribe();
            //console.log(filePath);
        }
    }
    get formControls() {
        return this.formTemplate['controls'];
    }
    uploadformreset() {
        this.formTemplate.reset();
        this.formTemplate.setValue({
            imageUrl: ''
        });
        this.imgsrc = '/assets/img/clickheretoupload.jpeg';
        this.selectedimage = null;
        this.issubmitted = false;
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
    { type: src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"] }
];
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employee/employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.css */ "./src/app/employees/employee/employee.component.css")).default]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmployeesComponent = class EmployeesComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employees',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")).default]
    })
], EmployeesComponent);



/***/ }),

/***/ "./src/app/employees/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/employees/footer/footer.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\r\n    clear: both;\r\n    position: relative;\r\n   left: 0;\r\n   bottom: 0;\r\n   width: 100%;\r\n   background-color: rgb(34, 32, 32);\r\n   color: white;\r\n   \r\n     \r\n}\r\n.chat img\r\n{\r\n width: 35px;\r\n height: 40px;\r\n position: relative;\r\n}\r\n.chat{\r\n    padding-top: 5px;\r\n    margin-left: 490px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7R0FDbkIsT0FBTztHQUNQLFNBQVM7R0FDVCxXQUFXO0dBQ1gsaUNBQWlDO0dBQ2pDLFlBQVk7OztBQUdmO0FBQ0E7O0NBRUMsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBsZWZ0OiAwO1xyXG4gICBib3R0b206IDA7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDMyLCAzMik7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgXHJcbiAgICAgXHJcbn1cclxuLmNoYXQgaW1nXHJcbntcclxuIHdpZHRoOiAzNXB4O1xyXG4gaGVpZ2h0OiA0MHB4O1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jaGF0e1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0OTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/employees/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/employees/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_chatbot_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/chatbot/chat-dialog/chat-dialog.component */ "./src/app/chatbot/chat-dialog/chat-dialog.component.ts");




let FooterComponent = class FooterComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    onAdd() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        dialogConfig.height = "50%";
        dialogConfig.position = {
            bottom: '20px',
            right: '5px'
        };
        this.dialog.open(src_app_chatbot_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChatDialogComponent"], dialogConfig);
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/employees/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/employees/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/employees/header/header.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav\r\n{\r\n  background: red;\r\n  width: 50px;\r\n  float: right;\r\n  margin-top: 250px;\r\n  \r\n}\r\n#fixedbutton {\r\n    position: fixed;\r\n    bottom: 0px;\r\n    right: 1px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7O0FBRW5CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdlxyXG57XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAyNTBweDtcclxuICBcclxufVxyXG4jZml4ZWRidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMXB4OyBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/employees/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/employees/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_chatbot_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/chatbot/chat-dialog/chat-dialog.component */ "./src/app/chatbot/chat-dialog/chat-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let HeaderComponent = class HeaderComponent {
    constructor(auth, dialog, router) {
        this.auth = auth;
        this.dialog = dialog;
        this.router = router;
    }
    ngOnInit() {
    }
    isloggedin() {
        let user = sessionStorage.getItem('token');
        return !(user === null);
    }
    Logout() {
        this.auth.Logout();
        this.router.navigate(['sign-in']);
    }
    profile() {
        this.router.navigate(['profile']);
    }
    onAdd() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        dialogConfig.height = "50%";
        dialogConfig.position = {
            bottom: '20px',
            right: '5px'
        };
        this.dialog.open(src_app_chatbot_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ChatDialogComponent"], dialogConfig);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/employees/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/employees/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employees/profile/profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n    max-width: 450px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdveeR6eieylg70Zs1akLz84U46kCm62Zmcu3WkbTSAEbOeVLH&s');\r\n    background-size: cover;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUlBQW1JO0lBQ25JLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUWR2ZWVSNmVpZXlsZzcwWnMxYWtMejg0VTQ2a0NtNjJabWN1M1drYlRTQUViT2VWTEgmcycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/employees/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employees/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/image.service */ "./src/app/shared/image.service.ts");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/finalize */ "./node_modules/rxjs/internal/operators/finalize.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











let ProfileComponent = class ProfileComponent {
    constructor(service, firestore, afAuth, imgservice, storage, toaster, router) {
        this.service = service;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.imgservice = imgservice;
        this.storage = storage;
        this.toaster = toaster;
        this.router = router;
        this.selectedimage = null;
        this.showSpinner = false;
        this.tickstatus = true;
        this.formTemplate = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
    }
    ngOnInit() {
        this.resetForm();
        this.getemployeebyid().then(data => {
            //console.log(data);
            let emp = data;
            this.service.formData = Object.assign({}, emp);
        });
        this.uploadformreset();
        this.imgservice.getImageDetailList();
        if (this.service.formData.imageUrl != null) {
            this.formcomplete = true;
        }
        else {
            this.formcomplete = false;
        }
    }
    onSubmit(form) {
        //console.log('in the form')
        //console.log(this.finalimaageurl);
        //console.log(this.afAuth.auth.currentUser.uid)
        let data = Object.assign({}, form.value);
        //console.log("data fileds:"+data);
        delete data.id;
        // if(form.value.id==null)
        //   this.firestore.collection('employees').add(data);
        // else
        form.value.id = this.afAuth.auth.currentUser.uid;
        if (this.finalimaageurl != null) {
            data.imageUrl = this.finalimaageurl;
            this.service.formData.imageUrl = this.finalimaageurl;
        }
        else {
            data.imageUrl = this.service.formData.imageUrl;
        }
        this.firestore.doc('employees/' + form.value.id).update(data);
        this.toaster.success('Updated successfully', 'Emp Update');
        this.formcomplete = false;
        this.router.navigate(['profile']);
    }
    Editform() {
        this.formcomplete = true;
        this.uploadformreset();
    }
    resetForm(form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            id: null,
            fullName: '',
            position: '',
            empCode: '',
            mobile: '',
            email: '',
            imageUrl: '',
        };
    }
    getemployeebyid() {
        return this.firestore.collection('employees').doc(this.afAuth.auth.currentUser.uid).ref.get()
            .then(function (doc) {
            return doc.data();
        });
        ;
    }
    onEdit(emp) {
        this.service.formData = Object.assign({}, emp);
    }
    showpreview(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => this.imgsrc = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.selectedimage = event.target.files[0];
            this.tickstatus = false;
        }
        else {
            this.imgsrc = '/assets/img/clickheretoupload.jpeg';
            this.selectedimage = null;
        }
    }
    uploadpic(formValue) {
        this.showSpinner = true;
        this.issubmitted = true;
        if (this.formTemplate.valid) {
            var filePath = 'images/' + this.afAuth.auth.currentUser.uid;
            const fileRef = this.storage.ref(filePath);
            this.storage.upload(filePath, this.selectedimage).snapshotChanges().pipe(Object(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    formValue['imageUrl'] = url;
                    formValue['uid'] = this.afAuth.auth.currentUser.uid;
                    this.finalimaageurl = url;
                    this.service.formData.imageUrl = url;
                    //this.firestore.collection('imagedetails').add(formValue);
                    this.uploadformreset();
                });
            })).subscribe();
            var options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-right",
                //"positionClass":"toast-bottom-full-width",
                "preventDuplicates": false,
                "showDuration": 200,
                "hideDuration": 2000,
                "timeOut": 2000,
                "extendedTimeOut": 3000,
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
            this.toaster.success('Photo updated successfully', 'Upload', options);
            ////console.log(filePath);
        }
    }
    get formControls() {
        return this.formTemplate['controls'];
    }
    uploadformreset() {
        this.showSpinner = false;
        this.tickstatus = true;
        this.formTemplate.reset();
        this.formTemplate.setValue({
            imageUrl: ''
        });
        if (this.service.formData.imageUrl == null) {
            this.imgsrc = '/assets/img/clickheretoupload.jpeg';
        }
        else {
            this.imgsrc = this.service.formData.imageUrl.toString();
        }
        this.selectedimage = null;
        this.issubmitted = false;
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/employees/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/employees/sign-in/sign-in.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employees/sign-in/sign-in.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/employees/sign-in/sign-in.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employees/sign-in/sign-in.component.ts ***!
  \********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignInComponent = class SignInComponent {
    constructor(auth, afauth, router) {
        this.auth = auth;
        this.afauth = afauth;
        this.router = router;
        this.showSpinner = true;
        this.spinner = false;
    }
    ngOnInit() {
        if (sessionStorage.getItem('token')) {
            //console.log("after login");
            this.navigate();
        }
    }
    navigate() {
        this.router.navigate(['main']);
    }
    login() {
        this.spinner = true;
        this.auth.login(this.email, this.password);
        //this.email=this.password='';
    }
    resetpassword() {
        if (!this.email) {
            alert('Please fill your email');
        }
        else {
            this.auth.resetpassword(this.email);
        }
    }
};
SignInComponent.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/sign-in/sign-in.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.css */ "./src/app/employees/sign-in/sign-in.component.css")).default]
    })
], SignInComponent);



/***/ }),

/***/ "./src/app/employees/sign-up/sign-up.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employees/sign-up/sign-up.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-invalid {\r\n    border-left: solid 5px rgb(19, 18, 18);\r\n  }\r\n  \r\n  .material-icons {\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1pbnZhbGlkIHtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggcmdiKDE5LCAxOCwgMTgpO1xyXG4gIH1cclxuICBcclxuICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/employees/sign-up/sign-up.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employees/sign-up/sign-up.component.ts ***!
  \********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/custom-validators */ "./src/app/custom-validators.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let SignUpComponent = class SignUpComponent {
    constructor(auth, firestore, fb, afauth, router) {
        this.auth = auth;
        this.firestore = firestore;
        this.fb = fb;
        this.afauth = afauth;
        this.router = router;
        this.frmSignup = this.createSignupForm();
    }
    createSignupForm() {
        return this.fb.group({
            email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
            ],
            password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    // check whether the entered password has a number
                    src_app_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].patternValidator(/\d/, {
                        hasNumber: true
                    }),
                    // check whether the entered password has upper case letter
                    src_app_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].patternValidator(/[A-Z]/, {
                        hasCapitalCase: true
                    }),
                    // check whether the entered password has a lower case letter
                    src_app_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].patternValidator(/[a-z]/, {
                        hasSmallCase: true
                    }),
                    // check whether the entered password has a special character
                    src_app_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
                        hasSpecialCharacters: true
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)
                ])
            ],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        }, {
            // check whether our password and confirm password match
            validator: src_app_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].passwordMatchValidator
        });
    }
    submit() {
        // do signup or something
        //console.log(this.frmSignup.value);
        //console.log(this.frmSignup.controls.email.value);
        this.auth.signup(this.frmSignup.controls.email.value, this.frmSignup.controls.password.value);
    }
    ngOnInit() {
        if (sessionStorage.getItem('token')) {
            this.router.navigate(['main']);
        }
    }
    signup() {
        this.auth.signup(this.email, this.password);
        this.email = this.password = '';
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/sign-up/sign-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.css */ "./src/app/employees/sign-up/sign-up.component.css")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");





let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isloggedin() && (this.authService.afAuth.auth.currentUser.uid)) {
            return true;
        }
        else {
            this.router.navigate(['sign-in']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");






let AuthService = class AuthService {
    constructor(afAuth, router, toaster, firestore) {
        this.afAuth = afAuth;
        this.router = router;
        this.toaster = toaster;
        this.firestore = firestore;
        this.showSpinner = false;
    }
    signup(email, password) {
        var options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-center-center",
            //"positionClass":"toast-bottom-full-width",
            "preventDuplicates": false,
            "showDuration": 600,
            "hideDuration": 5000,
            "timeOut": 7000,
            "extendedTimeOut": 8000,
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(value => {
            this.toaster.success('Registered Successfully, you need to verify your email before login, check your email inbox/spam/promotions folders', 'Emp.Register', options);
            //this.toaster.show('You need to verify the email!...','Verify Email',options);
            this.updatetable(email);
            this.SendVerificationMail();
            this.router.navigate(['sign-in']);
        }).catch(err => {
            const errorCode = err.code;
            const errorMessage = err.message;
            if (errorCode === 'auth/email-already-in-use') {
                // Call function X to sign user in instead
                this.toaster.warning('This email ID already used by someone else!..', 'Error', options);
                this.router.navigate(['sign-up']);
                return;
            }
            this.toaster.warning('something went wrong!..', 'Error', options);
            this.router.navigate(['sign-up']);
        });
    }
    updatetable(email) {
        let data = {};
        data['empCode'] = '';
        data['fullName'] = '';
        data['mobile'] = '';
        data['position'] = '';
        data['email'] = email;
        data['imageUrl'] = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUSEA8VFhMVEhUVFRMYFRUVEBIRFxUWFhUXFhUYHSggGB0lGxUWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisZFRkrKzctKysrKzcrKzIrKy03LTcrKys3Kzc3LS0rKysrKysrKysrKystKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EAEAQAAIBAgMEBggEAwcFAAAAAAABAgMRBCExBRJBURMiMmFxgQYUUpGhscHRQlNiknLh8BUWIzSCorJEY2R0wv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+4AAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMZTS+3E58RilDtSUe7WfuA6WzHpVwz8MyGrbWX4IX75Z/A5Ku0KktZteGXyCVY3UfsvzaS+Zh6xzcP3/yKtKTerbPAVavWOTh+/wDkZqo+V/BpoqR6nbRgq29KuN14r6mUXfQrFLHVI6Tfnn8zqo7W9uCffHJgTwOPDYyM+zK79l5S/mdMZrTjyCswAAAAAAAAAAAAAAAAAAAPJOwHporV1FXbtHnz8FxNONxigry14R4vvfcQOJxMqjvJ+C4LwCOzFbVbuqfVXtfjfnwI5u+bPAEAAAAAAAAAAAO7C7TlHKfWj39peDOEAWjDYlTV4u64+1HxR0J3KlRqyg7xdmT2Axyqd0uMeD70FSAPIyuehQAAAAAAAAAAAAAZxY7FqCu9fwrm+b7jdiKqim5dla9/JFaxWIdSTk/JcEuQRjVqubcpO7ZgAEAAAAAA58XjqdFXqTUe7i/BLMjfSHbXQLchnUa8oLn4lLq1ZTblKTberebYVcZ+lNFaKb77JfNm7D+kdCbs5OL/AFKy96KKAR9QhJNXTTT4rNHp8+2TtaeHlk7wv1oPR+HJl7wmJjVgpwd017uaYG4ABA9jJp3Ts1xPABYNnY3pF+tar2lzXeSEXfNFSpVHBqUXZosWExKklJaN2a9mf2YXHYAAoAAAAAAAAY1JWX9amRy4yvuRcvZWX8T0/rvAitsYi76NPKOr5yI09bvmzwMgAAGuvXjTi5TklFatmwoW3tqOvUdn/hxdorg/1PxAl8X6WJO1Knf9UnZe5HND0tqXzpQa7rpldAWNuKrupOU5ayd39jUCd2JsqO66+IypJZJ/i7/D5gQQLBtbZkKlNYjCrq260Fw5u3C3FFfChY/Q3GWnKk3lJby7pLX4fIrh7GTWadn8QPqAPnWF2pWpO8KsvBu8X5Mt+w9tRxCs1u1FquDXNBIlgAEDs2biNyVpdmWT+jOMAWyhLWL1jk+9cGbSMwOIvGM3qnuT8H2X77e9kmGgAAAAAAABsg9tVcox59d+ehM1tLc7L36lb2nU3qsnydvdkE1ygAIA8k7ZvQpe2vSCdVuNKTjTWV1lKfe3wXcBZts4pQo1LSW9uNJXV7vLQ+ehgKAHfsfZksROyyis5S5Lku8K6NgbJ6Z79TKlHNt5KVuF+XMbe2t00tyGVKOUVpvW4tfI37f2nG3q9DKnHJtfia4eHzIECS2JtV4eeecJdqP1XedO39lKH+NRzpSzy0i39CEJrYG1VTvSq50p5Z6Rb+gEKCU25sp4eV4505dl8u5kWAN2DxDpTjOOsWn4rivcaQB9QhPeSa0aTXgz0rPo3txyao1fCEvDSL+5ZgyAADv2RK8pU3pOLXmtCcwlTeim9dH/ABLJ/FFYw9TdlGXJpljwrtOpHvU14SWfxTC46gAFAAAAAGuo814t+STKnN3bfN3LTieL/RP6FVCaAAIivSes4YeVtZNR8m8/gUM+gekOGdWhNLVWkv8AS7v4XPn4XAABQu8cDL1aMMLKKUleU23d3WdrLUpBnGpJaSa8G0ETk/RSqk3vwyV/xfYgCyeiU2+mu2+otW37RW0FCcw/oxVnGMlOFpJNa3s/IgyyekE2sPhrNrq8Hb8MQiUwezpRoypYmUZU0smm7xXmuHApDMpVZPWTfi3YwCgAA9jJp3TzWa8UfTMNU34Rl7UU/ej5rQpOclGKu5NJeZ9Lo092KiuCS9ysE1mAAgWHDT69N+1R+Ks/qyvE3hX/AJd9018AuJYABQAAAABoxWj/AIJ/QqpbaqzXfde9fyKnJWyCa8AAQKxtr0bcm50LZ5uGmf6fsWcAfOJ7OrRdnRn+1mPqNX8qf7WfSQFr5t6jV/Kn+1j1Gr+VP9rPpIBVU9FaE4dNvQlG8Fa6avrzKyj6hUjdNc00VT+6Evz1+1/cCtFm27RlPD4fdi5WjnZN/hXI8/uhL89ftf3LPhKW5CML33YpX52VgPnfqNX8qf7WPUav5U/2s+kgFfNvUav5U/2s20NlVpu0aMvFqy97PogBULsLYSodebTqf7Yru5vvJoAIAAATWH/6f/W/gQpPUY9ejH2aTb80kFSYACgAAAADCrpfk0/v8CtbRp7tSS77+TzLPJXyZBbapdmfduvxQTUYAAgAAIqjtZyddbi/wU7Z9q19eWh07LxvTUo1GlFyvlfk7EJhnaWOvyf/ANHFUjfD4RXavUkrrJ2ckgq17QxXR0p1I2bir91/IbPxPSUoVJWW9FN8l7ysun0XrlKDe4oJpN3s7r7mUF0jwdGd+jdO7V2t59b7fEC23/rgeKSejuVLC4mMaFWnVUpxVfchG7Tb4K/LL4mOCnOi8TFR3LUt5QUt5QeWj8wie2jtJ0qlKEVFqpLdb4rNcvEkWyl0cLGDwk023UleWd03vIm/SinaNOqtadSLf8La+tgJm/eFJapqxTcRUfRVaibSrYndv/21f7/A3yh0NTE0ad+j9Xct27dpbqz+L94Fr3lzQ3lzX8yoJ9TBZ/jf/NHVsvCKpiq0pN2p1d5JPJybeb93xAswAAAADOjDeklzaRP4frV5vhGMYL5si9kQ67k9IRcn9CV2RHqOT1nJyfm8gruAAUAAAAADjx9DfjKPF9ZfxI7DCosstdUBUQd21sPuy3l2ZZ+EuKOEMgAAi8dsGlWm5tyi32t12UvHI4/SHBZYenCD3VO2SfVj1VqtPEnK9aMIuU5KMVq3oc8NqUXB1FVW4nZvPJvS6A0UNiU4QqQTk+k7Um0528bHtbYtOUIQvJdGrQmmlNedjrWMg5RjvrelHeiuLjrc1LatGyfSxs5OKedt5aoDRLYVLouizSUt7ev19/ncywuxadOUpXnJzhuy3nfeXF6XudOEx1Otfo5qVtbcDmeJaxEk60dxU79HbrJ6uV7aAaKPo7Sg4tSneEt6N5Ky42tbQ2+kNR9E4Rpucqj3FbRPW79xtjtig2kq0etpn8+Rsw20aVRScKiaj2nyXMDRS2TD1eNCaukldrXf1bXm2e4PY9OkpdqTmt2UpO8nHSxtwu06VV7tOopPlxt3X1Mau1qMJOMqsU46rkBx0fRylFxalUvGSkryVlZ3ta2h3YTZ8aU6k4t3qO8rtWWryy7z3FbRpUknOolvZrm1zsdFOaklKLTTV01o0BkAAAB07Pw/STz7Kzk+FgOuFNxpRgu3Wl7of18ybpwUUktErLwRH4BdJOVV6Lqw8FqySDQAAAAAAAAAAObF0FNOL0fH2ZcGVqtScJOMlmi2tXODaOC6RfqXZftLkwivA9lFp2as1wPAiC9LexSv2OlW9yt3/E4egVWri407bjprTs76s1a3emWitRjNOM4pxeqeaMMNhYUlu04KK5Ja+IFNpV3aGI4U1Tpf7JX+h0YrDblDCRa7VS8u/es/kyz/ANn0txw6KO43dxtk3zM62EhPd3oJ7rvG/wCFrSwENsmCjjMQoqysslkuHDzNWJ/zlX/1pf8AFE/DDQjKU1FKUu1Li/E8lhIOTm4Lecd1y4uPICmdDH1ag91Xddpu2bV9GSEayoV8XJQVo011fwu+7w5Zk/8A2fS3VHoo7sXeKtkpc0Z+p096Utxb01aTt2lyYFXwk3LE4ebnBuUb2glFQTTtF24nFUcPV6ilbpun49u3Hy1LjR2bRg040opxd00s02Q+0tm1a8nFYenBOedW63pRWmWoVyYveeItemr0IqLqX3N1xV7d+pP7Cwzp0Yxcoytezi7xs27WZuxGAp1ElOmpbqsrrNeZuo0owSjFJRWiWiCMwAB7GLbSSzei7yWdHdSoQfWlnUlyjy/r6mFCl0CUmr1ZZQjyvxZJYDC7ibk7zlnJ9/IK6KVNRSjHRKyMwAoAAAAAAAAAAB5KNz0AR2PwKqd0+EuEu595BVabi7SVmi2yjfJnJi8MpK0ldcGu3H7oJFaB2YnZ8o9aPWjzX1RxhAAAAAAAAAAAADpwuBnUzStHjJ5L+YHPGLbsldvhxJOlRVCzkt6q+zBZ272ZULR6mHW9L8VV9leH9e8kMHglDrN703rJ6+QVjgsG0+kqO9R+6K5I7QAoAAAAAAAAAAAAAAAAAANU6PGL3XzWj8VxOHFYOL7cLP24ZrzjqSYArs9lyedOUZrudn7jkqUJR7UWvIs9XCxlm4581lL3o1vDzXZqvwklJe/JhFYBYZ0J8aVKX+1/FGl4fnhF5TQIhATXQf8Aie+aNkaU/wAOGpx8Wn8gRCU6UpdmLfgjrhsues2oLm2vkSnQVpa1YxXKMfqz2OzIXvNym/1Nv4AR9KNKLtTi6s/DqI7Fg51M60rL8uOUfNkhCCSskkuSVkZBWFKmoq0UkuSMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z';
        this.firestore.collection('employees').doc(this.afAuth.auth.currentUser.uid).set(data);
    }
    login(email, password) {
        var options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-center-center",
            //"positionClass":"toast-bottom-full-width",
            "preventDuplicates": false,
            "showDuration": 500,
            "hideDuration": 4000,
            "timeOut": 6000,
            "extendedTimeOut": 1000,
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        this.afAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
            if (value.user.emailVerified == true) {
                sessionStorage.setItem('token', value.user.uid);
                this.toaster.success('Login Successfully', 'Emp.Login');
                this.router.navigate(['main']);
            }
            else {
                this.toaster.warning('Your email is not verified, please verify', 'Email Verify', options);
                this.SendVerificationMail();
                this.router.navigate(['sign-in']);
            }
        }).catch(err => {
            const errorCode = err.code;
            const errorMessage = err.message;
            //console.log("login error"+errorCode); 
            if (errorCode === 'auth/user-not-found') {
                // Call function X to sign user in instead
                this.toaster.warning('Account does not exist, Please Register!..', 'Error', options);
                this.router.navigate(['sign-up']);
                return;
            }
            this.toaster.warning('something went wrong!..', 'Error', options);
            this.router.navigate(['sign-up']);
        });
    }
    Logout() {
        this.afAuth.auth.signOut();
        this.toaster.success('You are logged out!..', 'Emp.Logout');
        sessionStorage.removeItem('token');
        this.router.navigate(['sign-in']);
    }
    isloggedin() {
        let user = sessionStorage.getItem('token');
        return !(user === null);
    }
    isuserlogged() {
        let users = '';
        if (this.afAuth.auth.currentUser.uid) {
            return !(users === null);
        }
        users = sessionStorage.getItem('token');
        return !(users === null);
    }
    // send_verification()
    // {
    //   var user_verify=this.afAuth.auth.currentUser;
    //   user_verify.sendEmailVerification().then(
    //     value => {
    //         this.toaster.show('Verification Email Sent... please verify','Email Verification');
    //     }
    //   ).catch(
    //     err => 
    //     {
    //         this.toaster.warning('Your email address is incorrect','Error');
    //     }
    //   )
    // }
    SendVerificationMail() {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(() => {
            this.router.navigate(['sign-in']);
        });
    }
    resetpassword(email) {
        var options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-center-center",
            //"positionClass":"toast-bottom-full-width",
            "preventDuplicates": false,
            "showDuration": 500,
            "hideDuration": 5000,
            "timeOut": 7000,
            "extendedTimeOut": 1000,
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        return this.afAuth.auth.sendPasswordResetEmail(email)
            .then(() => {
            this.toaster.success('Password reset link is sent to your email, please check!..', 'Reset Password', options);
            this.router.navigate(['sign-in']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/shared/employee.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/employee.service.ts ***!
  \********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");




let EmployeeService = class EmployeeService {
    constructor(firestore, afauth) {
        this.firestore = firestore;
        this.afauth = afauth;
    }
    getEmployees() {
        return this.firestore.collection('employees').snapshotChanges();
    }
    getmessages() {
        //return this.firestore.collection('messages').snapshotChanges();
        return this.firestore.collection('messages', ref => ref.orderBy('createdAt').limitToLast(10)).snapshotChanges();
    }
    getEmployeesbyid() {
        return this.firestore.collection('employees').doc('3OU7Hd92dwd9zBCS7Lanl82645k2').snapshotChanges();
    }
    getemployeebyid() {
        return this.firestore.collection('employees').doc(this.afauth.auth.currentUser.uid).ref.get()
            .then(function (doc) {
            return doc.data();
        });
        ;
    }
    populateform(emp) {
        this.formData.email = emp.email;
        this.formData.empCode = emp.empCode;
        this.formData.fullName = emp.fullName;
        this.formData.mobile = emp.mobile;
        this.formData.id = emp.id;
        this.formData.position = emp.position;
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/shared/image.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/image.service.ts ***!
  \*****************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");



let ImageService = class ImageService {
    constructor(firebase) {
        this.firebase = firebase;
    }
    getImageDetailList() {
        this.imageDetailList = this.firebase.list('imageDetails');
    }
    insertImageDetails(imageDetails) {
        this.imageDetailList.push(imageDetails);
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImageService);



/***/ }),

/***/ "./src/app/shared/isloggedinauth.guard.ts":
/*!************************************************!*\
  !*** ./src/app/shared/isloggedinauth.guard.ts ***!
  \************************************************/
/*! exports provided: IsloggedinauthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsloggedinauthGuard", function() { return IsloggedinauthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth.service.ts");




let IsloggedinauthGuard = class IsloggedinauthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!sessionStorage.getItem('token')) {
            console.log("no token inside if");
            return true;
            //this.router.navigate([''])
        }
        else {
            console.log("having token inside else");
            this.router.navigate(['main']);
            return true;
        }
    }
};
IsloggedinauthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsloggedinauthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], IsloggedinauthGuard);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyCjh4KTLPG2GYG7sUo-0OoY9TY3z1YD9s4",
        authDomain: "firestorecrud-943ff.firebaseapp.com",
        databaseURL: "https://firestorecrud-943ff.firebaseio.com",
        projectId: "firestorecrud-943ff",
        storageBucket: "firestorecrud-943ff.appspot.com",
        messagingSenderId: "775350250893",
        appId: "1:775350250893:web:36846fce61af4ee62261c4",
        measurementId: "G-BZ0P1Y3J22"
    },
    dialogflow: {
        angularBot: '0eeee0a64b1847c897b62713b7b3f19d'
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\AngularFireBase5 - Copy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map