webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tables_app_tables__ = __webpack_require__("../../../../../src/app/tables/app.tables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_table__ = __webpack_require__("../../../../../src/app/table/table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__propertyTable_editTable__ = __webpack_require__("../../../../../src/app/propertyTable/editTable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tables_editTableNamedialog_editTableNameDialog__ = __webpack_require__("../../../../../src/app/tables/editTableNamedialog/editTableNameDialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tables_addTableNameDialog_saveTableNameDialog__ = __webpack_require__("../../../../../src/app/tables/addTableNameDialog/saveTableNameDialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__table_editTablePropertyValueDialog_editTablePropertyValueDialog__ = __webpack_require__("../../../../../src/app/table/editTablePropertyValueDialog/editTablePropertyValueDialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__propertyTable_editTablePropertyDefinitionDialog_editTablePropertyDefinitionDialog__ = __webpack_require__("../../../../../src/app/propertyTable/editTablePropertyDefinitionDialog/editTablePropertyDefinitionDialog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tables_app_tables__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__table_table__["a" /* Table */],
                __WEBPACK_IMPORTED_MODULE_7__propertyTable_editTable__["a" /* PropertyTable */],
                __WEBPACK_IMPORTED_MODULE_8__tables_editTableNamedialog_editTableNameDialog__["a" /* EditTableNameDialog */],
                __WEBPACK_IMPORTED_MODULE_10__tables_addTableNameDialog_saveTableNameDialog__["a" /* SaveTableNameDialog */],
                __WEBPACK_IMPORTED_MODULE_11__table_editTablePropertyValueDialog_editTablePropertyValueDialog__["a" /* EditTablePropertValueDialog */],
                __WEBPACK_IMPORTED_MODULE_12__propertyTable_editTablePropertyDefinitionDialog_editTablePropertyDefinitionDialog__["a" /* EditTablePropertyDefinitionDialog */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatSelectModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__tables_editTableNamedialog_editTableNameDialog__["a" /* EditTableNameDialog */], __WEBPACK_IMPORTED_MODULE_10__tables_addTableNameDialog_saveTableNameDialog__["a" /* SaveTableNameDialog */], __WEBPACK_IMPORTED_MODULE_11__table_editTablePropertyValueDialog_editTablePropertyValueDialog__["a" /* EditTablePropertValueDialog */], __WEBPACK_IMPORTED_MODULE_12__propertyTable_editTablePropertyDefinitionDialog_editTablePropertyDefinitionDialog__["a" /* EditTablePropertyDefinitionDialog */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__tables_app_tables__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/constants/propDefFields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return propDefFields; });
var propDefFields = [{
        value: 1,
        viewValue: 'String'
    }, {
        value: 2,
        viewValue: 'Int'
    }, {
        value: 3,
        viewValue: 'Date'
    }, {
        value: 4,
        viewValue: 'Boolean'
    }
];


/***/ }),

/***/ "../../../../../src/app/constants/serverURL.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serverURL; });
var serverURL = '/api/';


/***/ }),

/***/ "../../../../../src/app/propertyTable/ediTable.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/propertyTable/editTable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editTablePropertyDefinitionDialog_editTablePropertyDefinitionDialog__ = __webpack_require__("../../../../../src/app/propertyTable/editTablePropertyDefinitionDialog/editTablePropertyDefinitionDialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_deepcopy__ = __webpack_require__("../../../../ts-deepcopy/dist/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_deepcopy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_deepcopy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_propDefFields__ = __webpack_require__("../../../../../src/app/constants/propDefFields.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PropertyTable = (function () {
    function PropertyTable(dialog, http) {
        this.dialog = dialog;
        this.http = http;
        this.element_data = [
            { name: "x", type: 1 },
            { name: "y", type: 2 },
            { name: "n", type: 3 } //using http
        ];
        this.displayedColumns = ['name', 'type', 'edit']; //using http and complicated function
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatTableDataSource */](this.element_data);
        http.get("", {}).subscribe(function (response) {
        });
    }
    PropertyTable.prototype.openEditDialog = function (tableName, element) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__editTablePropertyDefinitionDialog_editTablePropertyDefinitionDialog__["a" /* EditTablePropertyDefinitionDialog */], {
            width: '400px',
            data: { tableName: tableName, tablePropDefName: element.name, tablePropDefType: element.type }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The editTableNamedialog was closed');
        });
    };
    PropertyTable.prototype.ngOnInit = function () {
        this.propDefFields = __WEBPACK_IMPORTED_MODULE_4__constants_propDefFields__["a" /* propDefFields */];
    };
    PropertyTable.prototype.mapTypeToString = function (type) {
        var deepArrType = __WEBPACK_IMPORTED_MODULE_3_ts_deepcopy___default()(this.propDefFields);
        for (var _i = 0, deepArrType_1 = deepArrType; _i < deepArrType_1.length; _i++) {
            var tp = deepArrType_1[_i];
            if (tp.value == type) {
                return tp.viewValue;
            }
        }
        return "Invalid param";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], PropertyTable.prototype, "tableName", void 0);
    PropertyTable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-edit-table',
            template: __webpack_require__("../../../../../src/app/propertyTable/edittable.html"),
            styles: [__webpack_require__("../../../../../src/app/propertyTable/ediTable.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], PropertyTable);
    return PropertyTable;
}());



/***/ }),

/***/ "../../../../../src/app/propertyTable/editTablePropertyDefinitionDialog/editTablePropertyDefinitionDealog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Поле в таблице \"{{tableName}}\" </h1>\r\n<div mat-dialog-content>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"тип\" [(value)] = \"tablePropDefType\">\r\n        <mat-option *ngFor=\"let field of propDefFields\" [value]=\"field.value\">\r\n          {{ field.viewValue }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n  <mat-input-container>\r\n    <input matInput [(ngModel)]=\"tablePropDefName\" placeholder=\"Имя\">\r\n  </mat-input-container>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onSaveClick()\">Сохранить</button>\r\n  <button mat-button (click)=\"onDeleteClick()\">Удалить</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/propertyTable/editTablePropertyDefinitionDialog/editTablePropertyDefinitionDialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTablePropertyDefinitionDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_propDefFields__ = __webpack_require__("../../../../../src/app/constants/propDefFields.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditTablePropertyDefinitionDialog = (function () {
    function EditTablePropertyDefinitionDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.tableName = this.data.tableName;
        this.tablePropDefName = this.data.tablePropDefName; //copy
        this.tablePropDefType = this.data.tablePropDefType; //copy
        this.propDefFields = __WEBPACK_IMPORTED_MODULE_2__constants_propDefFields__["a" /* propDefFields */];
    }
    EditTablePropertyDefinitionDialog.prototype.onSaveClick = function () {
        this.dialogRef.close();
    };
    EditTablePropertyDefinitionDialog.prototype.onDeleteClick = function () {
        this.dialogRef.close();
    };
    EditTablePropertyDefinitionDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-table-property-definition-dialog',
            template: __webpack_require__("../../../../../src/app/propertyTable/editTablePropertyDefinitionDialog/editTablePropertyDefinitionDealog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], EditTablePropertyDefinitionDialog);
    return EditTablePropertyDefinitionDialog;
}());



/***/ }),

/***/ "../../../../../src/app/propertyTable/edittable.html":
/***/ (function(module, exports) {

module.exports = "<h1>Поля таблицы \"{{tableName}}\"</h1>\r\n\r\n<mat-table [dataSource]=\"dataSource\">\r\n  <!--make forEach columns adding-->\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef>название</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.name}}</mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"type\">\r\n    <mat-header-cell *matHeaderCellDef>Тип</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{mapTypeToString(element.type)}}</mat-cell>\r\n  </ng-container>\r\n\r\n    <ng-container id=\"edit\"  matColumnDef=\"edit\">\r\n      <mat-header-cell id=\"edit-header-cell\" *matHeaderCellDef></mat-header-cell>\r\n      <mat-cell id=\"edit-cell\" *matCellDef=\"let element\">\r\n        <mat-icon  class=\"edit_pencil\" svgIcon=\"edit-pencil\" (click)=\"openEditDialog(tableName,element)\"></mat-icon>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n<!--<button>Add</button>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/table/addEditFieldToDataSource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addEditFieldToDataSource;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");

/**
 * Это костыль что б отрисовывался значек редактирования
 * и да это значит что с MatTableDataSource мы будем работать как просто с массивом,
 * и использовать интересные фишки нету времени
 * @param {Array<any>} data
 * @return {MatTableDataSource<any>}
 */
function addEditFieldToDataSource(data) {
    data.forEach(function (elem) {
        Object.defineProperty(elem, "edit", { value: "edit", enumerable: true, writable: false });
    });
    var dataSource = new __WEBPACK_IMPORTED_MODULE_0__angular_material__["m" /* MatTableDataSource */](data);
    return dataSource;
}


/***/ }),

/***/ "../../../../../src/app/table/editTablePropertyValueDialog/editTablePropertyValueDialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Запись  в таблице \"{{tableName}}\" </h1>\r\n<div mat-dialog-content>\r\n  <mat-input-container *ngFor=\"let field of fields\">\r\n    <input matInput  [(ngModel)]=\"elementDataObjChanged[field]\" placeholder=\"{{field}}\">\r\n  </mat-input-container>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onSaveClick()\" >Сохранить</button>\r\n  <button mat-button (click)=\"onDeleteClick()\">Удалить</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/table/editTablePropertyValueDialog/editTablePropertyValueDialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTablePropertValueDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_deepcopy__ = __webpack_require__("../../../../ts-deepcopy/dist/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_deepcopy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_deepcopy__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditTablePropertValueDialog = (function () {
    function EditTablePropertValueDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.tableName = this.data.tableName;
        this.fields = this.data.fields;
        this.elementDataObj = __WEBPACK_IMPORTED_MODULE_2_ts_deepcopy___default()(this.data.elementDataObj);
        this.elementDataObjChanged = __WEBPACK_IMPORTED_MODULE_2_ts_deepcopy___default()(this.elementDataObj); //add copy
    }
    EditTablePropertValueDialog.prototype.onSaveClick = function () {
        console.log(this.findDiff(this.elementDataObj, this.elementDataObjChanged));
        ;
        this.dialogRef.close();
    };
    EditTablePropertValueDialog.prototype.onDeleteClick = function () {
        this.dialogRef.close();
    };
    /**
     * @desc находид различия между параметрами и возвращает значения из elementObjChanged в виде полей обьекта, что б потом удчно отправить на сервер и обрадоваться
     * @param elementObj
     * @param elementObjChanged
     */
    EditTablePropertValueDialog.prototype.findDiff = function (elementObj, elementObjChanged) {
        var diffObject = {};
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (elementObj[field] !== elementObjChanged[field]) {
                Object.defineProperty(diffObject, field, { enumerable: true, value: elementObjChanged[field] });
            }
        }
        return diffObject;
    };
    EditTablePropertValueDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-table-property-value-dialog',
            template: __webpack_require__("../../../../../src/app/table/editTablePropertyValueDialog/editTablePropertyValueDialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], EditTablePropertValueDialog);
    return EditTablePropertValueDialog;
}());



/***/ }),

/***/ "../../../../../src/app/table/table.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table/table.html":
/***/ (function(module, exports) {

module.exports = "<h1>Таблица \"{{tableName}}\"</h1>\r\n\r\n<mat-table [dataSource]=\"dataSource\">\r\n  <!--make forEach columns adding-->\r\n  <div *ngFor=\"let columnName of userColumns\">\r\n    <ng-container matColumnDef={{columnName}}>\r\n      <mat-header-cell *matHeaderCellDef> {{columnName}}</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element[columnName]}}</mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n    <ng-container id=\"edit\"  matColumnDef=\"edit\">\r\n      <mat-header-cell id=\"edit-header-cell\" *matHeaderCellDef></mat-header-cell>\r\n      <mat-cell id=\"edit-cell\" *matCellDef=\"let element\">\r\n        <mat-icon  id=\"edit_pencil\" svgIcon=\"edit-pencil\" (click)=\"openEditDialog(tableName, element)\"></mat-icon>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n<!--<button>Add</button>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/table/table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addEditFieldToDataSource__ = __webpack_require__("../../../../../src/app/table/addEditFieldToDataSource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editTablePropertyValueDialog_editTablePropertyValueDialog__ = __webpack_require__("../../../../../src/app/table/editTablePropertyValueDialog/editTablePropertyValueDialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_dom_ajax__ = __webpack_require__("../../../../rxjs/_esm5/observable/dom/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_serverURL__ = __webpack_require__("../../../../../src/app/constants/serverURL.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_deepcopy__ = __webpack_require__("../../../../ts-deepcopy/dist/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_deepcopy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ts_deepcopy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Table = (function () {
    function Table(dialog, http) {
        this.dialog = dialog;
        this.http = http;
        this.element_data = [
            { id: 2, name: "n1" },
            { id: 1, name: "n2" },
            { id: 3, name: "n3" },
            { id: 4, name: "n4" } //using http
        ];
        this.userColumns = ["id", "name"]; //столбцы полученные с базы данных
        this.displayedColumns = this.userColumns.concat("edit"); //using http and complicated function
        this.dataSource = Object(__WEBPACK_IMPORTED_MODULE_2__addEditFieldToDataSource__["a" /* addEditFieldToDataSource */])(this.element_data);
    }
    Table.prototype.openEditDialog = function (tableName, element) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__editTablePropertyValueDialog_editTablePropertyValueDialog__["a" /* EditTablePropertValueDialog */], {
            width: '400px',
            data: { tableName: tableName, elementDataObj: element, fields: this.userColumns }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //this.updateData();
            console.log('The editTableNamedialog was closed');
        });
    };
    Table.prototype.ngOnInit = function () {
        //this.updateData();
        this.editObserver.subscribe(function (_) {
            //this.updateData()
        });
    };
    Table.prototype.updateData = function () {
        var _this = this;
        console.log("updating table");
        if (!(this.tableName && this.tableName !== "no table")) {
            return;
        }
        Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_dom_ajax__["a" /* ajax */])({
            url: __WEBPACK_IMPORTED_MODULE_6__constants_serverURL__["a" /* serverURL */] + ("property_definition/tableName/" + this.tableName),
            method: 'get'
        }).subscribe(function (resp) {
            console.log(resp);
            if (resp.status == 200) {
                var columns = resp.response;
                _this.userColumns = [];
                _this.element_data = [];
                columns.forEach(function (col) {
                    _this.userColumns.push(col.name);
                });
                _this.getRowsIdByTableId(_this.tableId).then(function (idArr) {
                    idArr.forEach(function (entityDefID) {
                        _this.getRowByEntityDefinitionId(entityDefID).then(function (row) {
                            var ceilArr = row;
                            var elemData = {};
                            var promecies = [];
                            __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(ceilArr).map(function (ceil) {
                                return new Promise(function (resolve) {
                                    if (ceil['propertyId'] && ceil['name']) {
                                        _this.getPropNameById(ceil['propertyId']).then(function (colName) {
                                            Object.defineProperty(elemData, colName, { value: ceil['name'], enumerable: true });
                                            resolve();
                                        });
                                    }
                                });
                            }).toArray().subscribe(function (arr) {
                                Promise.all(promecies).then(function (_) {
                                    _this.element_data.push(elemData);
                                });
                            });
                        });
                    });
                });
                _this.displayedColumns = __WEBPACK_IMPORTED_MODULE_7_ts_deepcopy___default()(_this.userColumns);
                _this.displayedColumns.push('edit');
                console.log(_this.displayedColumns);
            }
            else {
                console.log("bad request");
            }
        });
    };
    Table.prototype.getPropNameById = function (propId) {
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_dom_ajax__["a" /* ajax */])({
                url: __WEBPACK_IMPORTED_MODULE_6__constants_serverURL__["a" /* serverURL */] + ("property_definition/id/" + propId),
                method: 'get'
            }).subscribe(function (resp) {
                if (resp.status == 200) {
                    var propDefObj = resp.response;
                    resolve(propDefObj.name);
                }
            });
        });
    };
    Table.prototype.getRowsIdByTableId = function (id) {
        return new Promise(function (resolve, reject) {
            var retArr = [];
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_dom_ajax__["a" /* ajax */])({
                url: __WEBPACK_IMPORTED_MODULE_6__constants_serverURL__["a" /* serverURL */] + ("entity_value/entity_id/" + id),
                method: 'get'
            }).subscribe(function (resp) {
                if (resp.status == 200) {
                    var propertyValues = resp.response;
                    propertyValues.forEach(function (propVal) {
                        retArr.push(propVal.id);
                    });
                    resolve(retArr);
                }
            });
        });
    };
    Table.prototype.getRowByEntityDefinitionId = function (entityValId) {
        return new Promise(function (resolve, reject) {
            var retArr = [];
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_dom_ajax__["a" /* ajax */])({
                url: __WEBPACK_IMPORTED_MODULE_6__constants_serverURL__["a" /* serverURL */] + ("property_value/entity_id/" + entityValId),
                method: 'get'
            }).subscribe(function (resp) {
                if (resp.status == 200) {
                    var propertyValues = resp.response;
                    propertyValues.forEach(function (propVal) {
                        retArr.push(propVal);
                    });
                    resolve(retArr);
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "tableName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "tableId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */])
    ], Table.prototype, "editObserver", void 0);
    Table = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-table',
            template: __webpack_require__("../../../../../src/app/table/table.html"),
            styles: [__webpack_require__("../../../../../src/app/table/table.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], Table);
    return Table;
}());



/***/ }),

/***/ "../../../../../src/app/tables/addTableNameDialog/saveTableNameDialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Добавление таблицы </h1>\r\n<div mat-dialog-content>\r\n  <p>имя таблицы:</p>\r\n  <mat-input-container>\r\n    <input matInput  [(ngModel)]=\"tableName\" placeholder=\"Имя таблицы\">\r\n  </mat-input-container>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onSaveClick()\" >Сохранить</button>\r\n  <button mat-button (click)=\"onDeleteClick()\">Закрыть</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tables/addTableNameDialog/saveTableNameDialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveTableNameDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveTableNameDialog = (function () {
    function SaveTableNameDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    SaveTableNameDialog.prototype.onSaveClick = function () {
        this.dialogRef.close();
    };
    SaveTableNameDialog.prototype.onCloseClick = function () {
        this.dialogRef.close();
    };
    SaveTableNameDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'save-table-name-dialog',
            template: __webpack_require__("../../../../../src/app/tables/addTableNameDialog/saveTableNameDialog.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */]])
    ], SaveTableNameDialog);
    return SaveTableNameDialog;
}());



/***/ }),

/***/ "../../../../../src/app/tables/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tables-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -ms-flex-preferred-size: 100%;\r\n      flex-basis: 100%;\r\n}\r\n\r\n.tables {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n\r\n}\r\n#table_header{\r\n  -ms-flex-preferred-size: 70%;\r\n      flex-basis: 70%;\r\n}\r\n#gearCl {\r\n  -ms-flex-preferred-size: 10%;\r\n      flex-basis: 10%;\r\n}\r\n\r\n#endEdBut{\r\n  -ms-flex-preferred-size: 100%;\r\n      flex-basis: 100%;\r\n  margin-top: 50px;\r\n}\r\n\r\n#edit_gear {\r\n  padding: 23px 0 0 10px;\r\n\r\n}\r\n\r\napp-table {\r\n  -webkit-box-flex: 3;\r\n      -ms-flex-positive: 3;\r\n          flex-grow: 3;\r\n}\r\n\r\napp-edit-table {\r\n  -webkit-box-flex: 3;\r\n      -ms-flex-positive: 3;\r\n          flex-grow: 3;\r\n}\r\n\r\nul{\r\n  -ms-flex-preferred-size: 100%;\r\n      flex-basis: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tables/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Редактор таблиц\r\n  </h1>\r\n</div>\r\n\r\n<div class=\"tables-container\">\r\n\r\n  <div class=\"tables\">\r\n      <div id=\"table_header\"><h2 >Таблицы:</h2></div>\r\n\r\n      <div id=\"gearCl\">\r\n        <mat-icon *ngIf=\"!isEditingMode\" id=\"edit_gear\" (click)=\"toggleEditingMode()\" svgIcon=\"edit-icon\"></mat-icon>\r\n      </div>\r\n    <ul>\r\n      <li *ngFor=\"let table of tables\">\r\n        <a (click)=\"aClick(table.name, table.id)\" href=\"#\">{{table.name}}</a>\r\n        <mat-icon  *ngIf = \"isEditingMode\" id=\"edit_pencil\" svgIcon=\"edit-pencil\" (click)=\"openEditDialog(table.name)\"></mat-icon>\r\n      </li>\r\n      <button *ngIf = \"isEditingMode\" (click)=\"openSaveDoalog()\">Add</button>\r\n    </ul>\r\n\r\n    <button id=\"endEdBut\" (click)=\"finishEditing()\" *ngIf = \"isEditingMode\">Закончит редактирование</button>\r\n  </div>\r\n\r\n  <app-table *ngIf=\"!isEditingMode\" [tableName]=\"tableName\" [tableId]=\"tableId\" [editObserver]=\"updateSubject.asObservable()\"></app-table>\r\n  <app-edit-table *ngIf=\"isEditingMode\" [tableName]=\"tableName\"></app-edit-table>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/tables/app.tables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_TableClass__ = __webpack_require__("../../../../../src/app/tables/classes/TableClass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editTableNamedialog_editTableNameDialog__ = __webpack_require__("../../../../../src/app/tables/editTableNamedialog/editTableNameDialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addTableNameDialog_saveTableNameDialog__ = __webpack_require__("../../../../../src/app/tables/addTableNameDialog/saveTableNameDialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_dom_ajax__ = __webpack_require__("../../../../rxjs/_esm5/observable/dom/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_serverURL__ = __webpack_require__("../../../../../src/app/constants/serverURL.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = (function () {
    function AppComponent(iconRegistry, sanitizer, dialog) {
        this.dialog = dialog;
        this.isEditingMode = false;
        this.updateSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.tableName = "no table"; //actual using table name using http
        this.tableId = 0;
        this.tables = [new __WEBPACK_IMPORTED_MODULE_4__classes_TableClass__["a" /* TableClass */]("no table")]; //get via http
        iconRegistry
            .addSvgIcon('edit-icon', sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-icon.svg'))
            .addSvgIcon('edit-pencil', sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-pencil.svg'));
    }
    AppComponent.prototype.toggleEditingMode = function () {
        this.isEditingMode = !this.isEditingMode;
    };
    AppComponent.prototype.openEditDialog = function (tableName) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__editTableNamedialog_editTableNameDialog__["a" /* EditTableNameDialog */], {
            width: '400px',
            data: { tableName: tableName }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The editTableNamedialog was closed');
        });
    };
    AppComponent.prototype.openSaveDoalog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__addTableNameDialog_saveTableNameDialog__["a" /* SaveTableNameDialog */], {
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The saveTableNameDialog was closed');
        });
    };
    AppComponent.prototype.setTable = function (name) {
        this.tableName = name;
    };
    AppComponent.prototype.finishEditing = function () {
        this.isEditingMode = false;
    };
    AppComponent.prototype.aClick = function (name, id) {
        this.tableName = name;
        this.tableId = id;
        this.updateSubject.next(true);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tables = [];
        Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_dom_ajax__["a" /* ajax */])({
            url: __WEBPACK_IMPORTED_MODULE_8__constants_serverURL__["a" /* serverURL */] + "entity_definition",
            method: 'get'
        }).subscribe(function (resp) {
            if (resp.status == 200) {
                _this.tables = [];
                var tables = resp.response;
                tables.forEach(function (table) {
                    var tableClass = new __WEBPACK_IMPORTED_MODULE_4__classes_TableClass__["a" /* TableClass */](table.name, table.id);
                    _this.tables.push(tableClass);
                });
                console.log(_this.tables);
            }
            else {
                console.log("error getting");
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/tables/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tables/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tables/classes/TableClass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableClass; });
var TableClass = (function () {
    function TableClass(name, id) {
        this.name = name;
        this.id = id;
    }
    return TableClass;
}());



/***/ }),

/***/ "../../../../../src/app/tables/editTableNamedialog/editTableNameDialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Редактирование таблицы \"{{data.tableName}}\"</h1>\r\n<div mat-dialog-content>\r\n  <p>имя таблицы:</p>\r\n  <mat-input-container>\r\n    <input matInput  [(ngModel)]=\"tableName\" placeholder=\"Имя таблицы\">\r\n  </mat-input-container>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onSaveClick()\" >Сохранить</button>\r\n  <button mat-button (click)=\"onDeleClick()\">Удалить</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tables/editTableNamedialog/editTableNameDialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTableNameDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditTableNameDialog = (function () {
    function EditTableNameDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.tableName = this.data.tableName;
    }
    EditTableNameDialog.prototype.onDeleClick = function () {
        this.dialogRef.close();
    };
    EditTableNameDialog.prototype.onSaveClick = function () {
        this.dialogRef.close();
    };
    EditTableNameDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-table-name-dialog',
            template: __webpack_require__("../../../../../src/app/tables/editTableNamedialog/editTableNameDialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], EditTableNameDialog);
    return EditTableNameDialog;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map