webpackJsonp(["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.browser.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export getBaseUrl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_module__ = __webpack_require__("./ClientApp/app/app.shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_app_component__ = __webpack_require__("./ClientApp/app/components/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__components_app_app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__app_shared_module__["a" /* AppModuleShared */]
            ],
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], AppModule);
    return AppModule;
}());

function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}


/***/ }),

/***/ "./ClientApp/app/app.shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleShared; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_app_app_component__ = __webpack_require__("./ClientApp/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navmenu_navmenu_component__ = __webpack_require__("./ClientApp/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("./ClientApp/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_fetchdata_fetchdata_component__ = __webpack_require__("./ClientApp/app/components/fetchdata/fetchdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_counter_counter_component__ = __webpack_require__("./ClientApp/app/components/counter/counter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_test_test_component__ = __webpack_require__("./ClientApp/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Admin_categories_categories_index_categories_index_component__ = __webpack_require__("./ClientApp/app/components/Admin/categories/categories-index/categories-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Admin_admin_dashboard_admin_dashboard_component__ = __webpack_require__("./ClientApp/app/components/Admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Admin_categories_categories_add_categories_add_component__ = __webpack_require__("./ClientApp/app/components/Admin/categories/categories-add/categories-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Admin_categories_categories_add_description_categories_add_description_component__ = __webpack_require__("./ClientApp/app/components/Admin/categories/categories-add-description/categories-add-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_components_accordion_accordion__ = __webpack_require__("./node_modules/primeng/components/accordion/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_components_accordion_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_components_accordion_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_components_panel_panel__ = __webpack_require__("./node_modules/primeng/components/panel/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_components_panel_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_primeng_components_panel_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_components_button_button__ = __webpack_require__("./node_modules/primeng/components/button/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_components_button_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_components_button_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_components_radioButton_radioButton__ = __webpack_require__("./node_modules/primeng/components/radioButton/radioButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_components_radioButton_radioButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_components_radioButton_radioButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_inputtext__ = __webpack_require__("./node_modules/primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_datascroller__ = __webpack_require__("./node_modules/primeng/datascroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_datascroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_datascroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_dataview__ = __webpack_require__("./node_modules/primeng/dataview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_dataview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_primeng_dataview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_dropdown__ = __webpack_require__("./node_modules/primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_fileupload__ = __webpack_require__("./node_modules/primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_primeng_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_primeng_autocomplete__ = __webpack_require__("./node_modules/primeng/autocomplete.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_primeng_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_primeng_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_primeng_card__ = __webpack_require__("./node_modules/primeng/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_primeng_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_primeng_card__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModuleShared = /** @class */ (function () {
    function AppModuleShared() {
    }
    AppModuleShared = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navmenu_navmenu_component__["a" /* NavMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_counter_counter_component__["a" /* CounterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_fetchdata_fetchdata_component__["a" /* FetchDataComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_Admin_categories_categories_index_categories_index_component__["a" /* CategoriesIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_Admin_categories_categories_add_categories_add_component__["a" /* CategoriesAddComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_Admin_categories_categories_add_description_categories_add_description_component__["a" /* CategoriesAddDescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_Admin_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_27_primeng_autocomplete__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_28_primeng_card__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_components_accordion_accordion__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_16_primeng_components_panel_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_17_primeng_components_button_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_24_primeng_dataview__["DataViewModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_26_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_primeng__["FieldsetModule"],
                __WEBPACK_IMPORTED_MODULE_25_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_23_primeng_datascroller__["DataScrollerModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_components_radioButton_radioButton__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
                    { path: 'counter', component: __WEBPACK_IMPORTED_MODULE_9__components_counter_counter_component__["a" /* CounterComponent */] },
                    { path: 'fetch-data', component: __WEBPACK_IMPORTED_MODULE_11__components_Admin_categories_categories_index_categories_index_component__["a" /* CategoriesIndexComponent */] },
                    {
                        path: 'Admin',
                        children: [
                            { path: '', redirectTo: 'Index', pathMatch: 'full' },
                            { path: 'Index', component: __WEBPACK_IMPORTED_MODULE_12__components_Admin_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */] },
                            {
                                path: 'Categories',
                                children: [
                                    { path: '', redirectTo: 'Index', pathMatch: 'full' },
                                    { path: 'Index', component: __WEBPACK_IMPORTED_MODULE_11__components_Admin_categories_categories_index_categories_index_component__["a" /* CategoriesIndexComponent */] },
                                    { path: 'Add', component: __WEBPACK_IMPORTED_MODULE_13__components_Admin_categories_categories_add_categories_add_component__["a" /* CategoriesAddComponent */] },
                                    { path: '**', redirectTo: 'Index', pathMatch: 'full' }
                                ]
                            },
                            { path: '**', redirectTo: 'Index' }
                        ]
                    },
                    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_10__components_test_test_component__["a" /* TestComponent */] },
                    { path: '**', redirectTo: 'home' }
                ])
            ]
        })
    ], AppModuleShared);
    return AppModuleShared;
}());



/***/ }),

/***/ "./ClientApp/app/components/Admin/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./ClientApp/app/components/Admin/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Admin Dashboard Component</h1>"

/***/ }),

/***/ "./ClientApp/app/components/Admin/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboardComponent = /** @class */ (function () {
    /** AdminDashboard ctor */
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-dashboard',
            template: __webpack_require__("./ClientApp/app/components/Admin/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/Admin/admin-dashboard/admin-dashboard.component.css")]
        })
        /** AdminDashboard component*/
        ,
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/Admin/categories/categories-add-description/categories-add-description.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./ClientApp/app/components/Admin/categories/categories-add-description/categories-add-description.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <p-card [style]=\"{width: '500px'}\" styleClass=\"ui-card-shadow\">\r\n            <p-header>\r\n                <div style=\"text-align:center\">\r\n                    <h4><b>Description</b></h4>\r\n                    <p-button label=\"Delete\" (onClick)=\"DeleteLanguage($event, selectedLanguage)\" [hidden]=\"hideDeleteButton()\"></p-button>\r\n                </div>\r\n            </p-header>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    Language\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <p-autoComplete [(ngModel)]=\"selectedLanguage\" [suggestions]=\"filteredLanguages\" (completeMethod)=\"filterLanguages($event)\" [size]=\"30\"\r\n                                    [minLength]=\"1\" placeholder=\"Language Name\" field=\"Name\" [dropdown]=\"true\" (onSelect)=\"setLanguage($event)\" [forceSelection]=\"true\">\r\n                        <ng-template let-selectedLanguage pTemplate=\"item\">\r\n                            <div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\">\r\n                                <div style=\"font-size:18px;float:none;margin:10px 10px 0 0\">\r\n                                    {{ selectedLanguage!.Name }}\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-autoComplete>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    Name\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <span class=\"ui-float-label\">\r\n                        <input id=\"categoryName\" type=\"text\" size=\"36\" pInputText (change)=\"getName($event, Language)\">\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    Description 1\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <textarea pInputTextarea [cols]=\"37\" [rows]=\"6\" type=\"text\" (change)=\"getDescription1($event, Language)\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    Description 2\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <textarea pInputTextarea [cols]=\"37\" [rows]=\"6\" type=\"text\" (change)=\"getDescription2($event, Language)\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    Description 3\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <textarea pInputTextarea [cols]=\"37\" [rows]=\"6\" type=\"text\" (change)=\"getDescription3($event, Language)\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n        </p-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/Admin/categories/categories-add-description/categories-add-description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesAddDescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesAddDescriptionComponent = /** @class */ (function () {
    /** categories-add-description ctor */
    function CategoriesAddDescriptionComponent() {
        this.onUpdateEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDeleteLanguage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onUpdateLanguage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.newCategory = {};
    }
    CategoriesAddDescriptionComponent.prototype.ngOnInit = function () {
    };
    CategoriesAddDescriptionComponent.prototype.DeleteLanguage = function (event, language) {
        this.onDeleteLanguage.emit(language);
    };
    CategoriesAddDescriptionComponent.prototype.filterLanguages = function (event) {
        this.filteredLanguages = [];
        for (var i = 0; i < this.languages.length; i++) {
            var language = this.languages[i];
            if (language.Name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredLanguages.push(language);
            }
        }
    };
    CategoriesAddDescriptionComponent.prototype.setLanguage = function (event) {
        var lang = this.selectedLanguage;
        this.selectedLanguage = event;
        if (this.newCategory.Names != null && this.newCategory.Names != undefined) {
            this.newCategory.Names[0].Language = event;
        }
        if (this.newCategory.Descriptions != null && this.newCategory.Descriptions != undefined) {
            this.newCategory.Descriptions[0].Language = event;
        }
        this.onUpdateLanguage.emit({ e: event, id: lang.LanguageID });
    };
    CategoriesAddDescriptionComponent.prototype.hideDeleteButton = function () {
        if (+this.numLanguagesSelected < 2) {
            return true;
        }
        return false;
    };
    CategoriesAddDescriptionComponent.prototype.getName = function (event) {
        if (this.newCategory.Names == null || this.newCategory.Names == undefined) {
            this.newCategory.Names = [];
        }
        else if (this.newCategory.Names.length > 0) {
            this.newCategory.Names.pop();
        }
        var catName = { Name: event.target.value, Language: this.selectedLanguage };
        this.newCategory.Names.push(catName);
        this.onUpdateEvent.emit(this.newCategory);
    };
    CategoriesAddDescriptionComponent.prototype.getDescription1 = function (event) {
        if (this.newCategory.Descriptions == null || this.newCategory.Descriptions == undefined) {
            this.newCategory.Descriptions = [];
            var catDesc = { Description1: event.target.value, Language: this.selectedLanguage };
            this.newCategory.Descriptions.push(catDesc);
        }
        else if (this.newCategory.Descriptions.length > 0) {
            this.newCategory.Descriptions[0].Description1 = event.target.value;
        }
        this.onUpdateEvent.emit(this.newCategory);
    };
    CategoriesAddDescriptionComponent.prototype.getDescription2 = function (event) {
        if (this.newCategory.Descriptions == null || this.newCategory.Descriptions == undefined) {
            this.newCategory.Descriptions = [];
            var catDesc = { Description2: event.target.value, Language: this.selectedLanguage };
            this.newCategory.Descriptions.push(catDesc);
        }
        else if (this.newCategory.Descriptions.length > 0) {
            this.newCategory.Descriptions[0].Description2 = event.target.value;
        }
        this.onUpdateEvent.emit(this.newCategory);
    };
    CategoriesAddDescriptionComponent.prototype.getDescription3 = function (event, language) {
        if (this.newCategory.Descriptions == null || this.newCategory.Descriptions == undefined) {
            this.newCategory.Descriptions = [];
            var catDesc = { Description3: event.target.value, Language: this.selectedLanguage };
            this.newCategory.Descriptions.push(catDesc);
        }
        else if (this.newCategory.Descriptions.length > 0) {
            this.newCategory.Descriptions[0].Description3 = event.target.value;
        }
        this.onUpdateEvent.emit(this.newCategory);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CategoriesAddDescriptionComponent.prototype, "languages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CategoriesAddDescriptionComponent.prototype, "selectedLanguage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CategoriesAddDescriptionComponent.prototype, "numLanguagesSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CategoriesAddDescriptionComponent.prototype, "onUpdateEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CategoriesAddDescriptionComponent.prototype, "onDeleteLanguage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CategoriesAddDescriptionComponent.prototype, "onUpdateLanguage", void 0);
    CategoriesAddDescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'categories-add-description',
            template: __webpack_require__("./ClientApp/app/components/Admin/categories/categories-add-description/categories-add-description.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/Admin/categories/categories-add-description/categories-add-description.component.css")]
        })
        /** categories-add-description component*/
        ,
        __metadata("design:paramtypes", [])
    ], CategoriesAddDescriptionComponent);
    return CategoriesAddDescriptionComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/Admin/categories/categories-add/categories-add.component.css":
/***/ (function(module, exports) {

module.exports = ".top-buffer{\r\n    margin-top:20px;\r\n}\r\n\r\n.cardStyle {\r\n    margin-left:0px;\r\n    padding-left:0px;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/Admin/categories/categories-add/categories-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5 top-buffer\">\r\n            <p-card [style]=\"{width: '1100px'}\" styleClass=\"ui-card-shadow\">\r\n                <p-header>\r\n                    <div style=\"text-align:center\"><h3><b> New Category </b></h3></div>\r\n                </p-header>\r\n                \r\n                <div class=\"row\">\r\n                    <div style=\"text-align:center\">\r\n                        <button pButton type=\"button\" (click)=\"AddLanguage($event, Language)\" label=\"Add Language\" ng-show=\"selectedLanguages!.length < Languages!.length\" style=\"margin-right:50px;\"></button>\r\n                        <button pButton type=\"button\" (click)=\"saveCategory($event)\" label=\"Save\" class=\"ui-button-success\" style=\"margin-right:50px;\"></button>\r\n                        <button pButton type=\"button\" (click)=\"cancel()\" label=\"Cancel\" class=\"ui-button-danger\" style=\"margin-right:50px;\"></button>\r\n                    </div>\r\n                </div>\r\n            </p-card>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"row-fluid\">\r\n        <div class=\"col-md-5 top-buffer\">\r\n            <p-card [style]=\"{width:'500px'}\" styleClass=\"ui-card-shadow\">\r\n                <p-header>\r\n                    <div style=\"text-align:center\"><h4><b>Parent</b></h4></div>\r\n                </p-header>\r\n\r\n                <div style=\"text-align:center\">\r\n                    <p-autoComplete [(ngModel)]=\"parentCategory\" [suggestions]=\"filteredCategories\" (completeMethod)=\"filterParent($event)\" [size]=\"20\"\r\n                                    [minLength]=\"1\" placeholder=\"Category Name\" [dropdown]=\"true\" field=\"DisplayName\" forceSelection=\"true\" (onSelect)=\"setParent($event)\">\r\n                        <ng-template let-parentCategory pTemplate=\"item\">\r\n                            <div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\">\r\n                                <img src=\"\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\" />\r\n                                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">\r\n                                    {{ getCategoryName(parentCategory) }}\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-autoComplete>\r\n                </div>\r\n            </p-card>\r\n        </div>\r\n\r\n        <div class=\"col-md-5 top-buffer\">\r\n            <p-card [style]=\"{width: '500px'}\" styleClass=\"ui-card-shadow\">\r\n                <p-header>\r\n                    <div style=\"text-align:center\"><h4><b>Images</b></h4></div>\r\n                </p-header>\r\n\r\n                <p-growl [value]=\"uploadedFilesMsgs\"></p-growl>\r\n                <p-fileUpload name=\"demo[]\" url=\"API/Admin/Categories/UploadPictures\" (onUpload)=\"onUpload($event)\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"10000000000\">\r\n                    <ng-template pTemplate=\"content\">\r\n                        <ul *ngIf=\"uploadedFiles.length\">\r\n                            <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\r\n                        </ul>\r\n                    </ng-template>\r\n                </p-fileUpload>\r\n            </p-card>\r\n        </div>\r\n\r\n        <div *ngFor=\"let Language of selectedLanguages\" class=\"col-md-5 top-buffer\">\r\n            <categories-add-description [languages]=\"getAvailableLanguages(Language)\" [selectedLanguage]=\"Language\" [numLanguagesSelected]=\"selectedLanguages!.length\" \r\n                                        (onUpdateEvent)=\"onUpdate($event)\" (onDeleteLanguage)=\"DeleteLanguage($event)\" (onUpdateLanguage)=\"UpdateLanguage($event)\">\r\n\r\n            </categories-add-description>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/Admin/categories/categories-add/categories-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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



var CategoriesAddComponent = /** @class */ (function () {
    /** categories-add ctor */
    function CategoriesAddComponent(activatedRoute, router, http, baseUrl) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.baseUrl = baseUrl;
        this.selectedLanguages = [];
        this.newCategory = {};
        this.uploadedFiles = [];
        this.uploadURL = "";
    }
    CategoriesAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        var categoryURL = this.baseUrl + "API/Admin/Categories/Index";
        this.uploadURL = this.baseUrl + "API/Admin/Categories/UploadPictures";
        this.http.get(categoryURL).subscribe(function (result) {
            console.log(result);
            _this.existingCategories = result;
            //this.parentSelectItems = this.existingCategories.map(x => { return { value: x!.Names![0].Name, label: x!.Names![0].Name } });
        }, function (error) { return console.error(error); });
        var languageURL = this.baseUrl + "API/Common/Languages/GetAll";
        this.http.get(languageURL).subscribe(function (result) {
            _this.languages = result;
            for (var i = 0; i < result.length; i++) {
                if (result[i].Name == "English") {
                    _this.languageID = result[i].LanguageID;
                    break;
                }
            }
            if (_this.languageID > 0) {
                _this.selectedLanguages.push(_this.languages[_this.languageID]);
                _this.languageID++;
            }
            //this.languagesSelectItems = this.languages.map(x => { return { label: x!.Name, value: x!.Name } });
        }, function (error) { return console.error(error); });
    };
    CategoriesAddComponent.prototype.AddLanguage = function (event) {
        this.selectedLanguages.push(this.languages[this.languageID]);
        //this.selectedLanguage!.push(this.languages![this.languageID]);
        this.languageID++;
    };
    CategoriesAddComponent.prototype.DeleteLanguage = function (event) {
        var index = -1;
        for (var i = 0; i < this.selectedLanguages.length; i++) {
            if (this.selectedLanguages[i].LanguageID == event.LanguageID) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            this.selectedLanguages.splice(index, 1);
        }
        index = -1;
        if (this.newCategory.Names != undefined && this.newCategory.Names.length > 0) {
            for (var i = 0; i < this.newCategory.Names.length; i++) {
                if (this.newCategory.Names[i].Language.LanguageID == event.LanguageID) {
                    index = i;
                    break;
                }
            }
        }
        if (index > 0) {
            this.newCategory.Names.splice(index, 1);
        }
        index = -1;
        if (this.newCategory.Descriptions != undefined && this.newCategory.Descriptions.length > 0) {
            for (var i = 0; i < this.newCategory.Descriptions.length; i++) {
                if (this.newCategory.Descriptions[i].Language.LanguageID == event.LanguageID) {
                    index = i;
                    break;
                }
            }
        }
        if (index > 0) {
            this.newCategory.Descriptions.splice(index, 1);
        }
    };
    CategoriesAddComponent.prototype.getAvailableLanguages = function (language) {
        var availLangs = [];
        for (var j = 0; j < this.languages.length; j++) {
            for (var i = 0; i < this.selectedLanguages.length; i++) {
                if (this.languages[j].LanguageID != this.selectedLanguages[i].LanguageID) {
                    availLangs.push(this.languages[j]);
                    break;
                }
            }
        }
        return availLangs;
    };
    CategoriesAddComponent.prototype.setParent = function (event) {
        this.newCategory.Parent = this.parentCategory;
    };
    CategoriesAddComponent.prototype.UpdateLanguage = function (event) {
        var index = -1;
        for (var i = 0; i < this.selectedLanguages.length; i++) {
            if (this.selectedLanguages[i].LanguageID == event.id) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            this.selectedLanguages[index] = event.e;
        }
    };
    CategoriesAddComponent.prototype.onUpdate = function (category) {
        //Name
        if (this.newCategory.Names == null && category.Names != null) {
            this.newCategory.Names = [];
            this.newCategory.Names.push(category.Names[0]);
        }
        else if (this.newCategory.Names != null && category.Names != null) {
            var nameExists = false;
            for (var i = 0; i < this.newCategory.Names.length; i++) {
                if (this.newCategory.Names[i].Language.LanguageID == category.Names[0].Language.LanguageID) {
                    this.newCategory.Names[i] = category.Names[0];
                    nameExists = true;
                }
            }
            if (!nameExists) {
                this.newCategory.Names.push(category.Names[0]);
            }
        }
        //Descriptions
        if (this.newCategory.Descriptions == null && category.Descriptions != null) {
            this.newCategory.Descriptions = [];
            this.newCategory.Descriptions.push(category.Descriptions[0]);
        }
        else if (this.newCategory.Descriptions != null && category.Descriptions != null) {
            var descExists = false;
            for (var i = 0; i < this.newCategory.Descriptions.length; i++) {
                if (this.newCategory.Descriptions[i].Language.LanguageID == category.Descriptions[0].Language.LanguageID) {
                    descExists = true;
                    this.newCategory.Descriptions[i] = category.Descriptions[0];
                }
            }
            if (!descExists) {
                this.newCategory.Descriptions.push(category.Descriptions[0]);
            }
        }
    };
    CategoriesAddComponent.prototype.nameContainsLanguage = function (language) {
        for (var i = 0; i < this.newCategory.Names.length; i++) {
            if (this.newCategory.Names[i].Language.Name == language.Name) {
                return true;
            }
        }
        return false;
    };
    CategoriesAddComponent.prototype.saveCategory = function (event) {
        var url = this.baseUrl + "API/Admin/Categories/Create";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json');
        console.log(JSON.stringify(this.newCategory));
        return this.http.put(url, JSON.stringify(this.newCategory), { headers: headers }).subscribe(function (res) { return console.log(res); });
    };
    CategoriesAddComponent.prototype.DescContainsLanguage = function (language) {
        for (var i = 0; i < this.newCategory.Descriptions.length; i++) {
            if (this.newCategory.Descriptions[i].Language.Name == language.Name) {
                return true;
            }
        }
        return false;
    };
    CategoriesAddComponent.prototype.getCategoryName = function (category) {
        if (category != undefined) {
            for (var i = 0; i < category.Names.length; i++) {
                if (category.Names[i].Language != null && category.Names[i].Language.Name == "English") {
                    category.DisplayName = category.Names[i].Name;
                    return category.Names[i].Name;
                }
            }
        }
        return "N/A";
    };
    CategoriesAddComponent.prototype.filterParent = function (event) {
        this.filteredCategories = [];
        for (var i = 0; i < this.existingCategories.length; i++) {
            var category = this.existingCategories[i];
            for (var j = 0; category.Names != null && j < category.Names.length; j++) {
                if (category.Names[j].Name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                    this.filteredCategories.push(category);
                }
            }
        }
    };
    CategoriesAddComponent.prototype.onUpload = function (event) {
        this.newCategory.Images = [];
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
            this.newCategory.Images.push({ Path1: "Assets/Images/Categories/" + file.name });
        }
        this.uploadedFilesMsgs = [];
        this.uploadedFilesMsgs.push({ severity: 'info', summary: 'Files Uploaded', detail: '' });
        console.log(this.newCategory);
    };
    CategoriesAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'categories-add',
            template: __webpack_require__("./ClientApp/app/components/Admin/categories/categories-add/categories-add.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/Admin/categories/categories-add/categories-add.component.css")]
        })
        /** categories-add component*/
        ,
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String])
    ], CategoriesAddComponent);
    return CategoriesAddComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/Admin/categories/categories-index/categories-index.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./ClientApp/app/components/Admin/categories/categories-index/categories-index.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataView #dv [value]=\"categories\" [paginator]=\"true\" [rows]=\"20\" paginatorPosition=\"both\" filterBy=\"brand\"\r\n            [sortField]=\"sortField\" [sortOrder]=\"sortOrder\">\r\n    <p-header>\r\n        <div class=\"ui-helper-clearfix\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange($event)\" [autoWidth]=\"false\" [style]=\"{'min-width':'15em'}\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-6 ui-md-4 filter-container\">\r\n                    <div style=\"position:relative\">\r\n                        <input type=\"search\" pInputText placeholder=\"Search by name\" (keyup)=\"dv.filter($event.target.value)\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6 ui-md-4\" style=\"text-align:right\">\r\n                    <p-dataViewLayoutOptions></p-dataViewLayoutOptions>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </p-header>\r\n    <ng-template let-category pTemplate=\"listItem\">\r\n        <div class=\"ui-g\" style=\"padding: 2em;border-bottom: 1px solid #d9d9d9\">\r\n            <div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\">\r\n                <img src=\"{{category.Images[0].Path1}}\" width=\"60\">\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-8 category-details\">\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-2 ui-sm-6\">ID: </div>\r\n                    <div class=\"ui-g-10 ui-sm-6\"><b>{{category.CategoryID}}</b></div>\r\n\r\n                    \r\n                    <div class=\"ui-g-2 ui-sm-6\" *ngIf=\"category.Parent != null\">Parent: </div>\r\n                    <div class=\"ui-g-10 ui-sm-6\" *ngIf=\"category.Parent != null\"><b>{{ category.Parent.Names[0].Name }}</b></div>\r\n\r\n                    <div class=\"ui-g-2 ui-sm-6\">Name: </div>\r\n                    <div class=\"ui-g-10 ui-sm-6\"><b>{{category.Names[0].Name}}</b></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-1 search-icon\">\r\n                <button pButton type=\"button\" icon=\"fa-search\" (click)=\"selectCategory($event, category)\"></button>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template let-category pTemplate=\"gridItem\">\r\n        <div style=\"padding:.5em\" class=\"ui-g-12 ui-md-3\">\r\n            <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\r\n                <img src=\"{{category.Images[0].Path1}}\" width=\"60\">\r\n                <div class=\"category-detail\">{{category.Name}}</div>\r\n                <hr class=\"ui-widget-content\" style=\"border-top:0\">\r\n                <button pButton type=\"button\" icon=\"fa-search\" (click)=\"selectCategory($event, category)\" style=\"margin-top:0\"></button>\r\n            </p-panel>\r\n        </div>\r\n    </ng-template>\r\n</p-dataView>\r\n\r\n<p-dialog header=\"Category Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"225\" (onAfterHide)=\"onDialogHide()\">\r\n    <div class=\"ui-g\" *ngIf=\"selectedCategory\">\r\n        <div class=\"ui-g-12\" style=\"text-align:center\">\r\n            <img src=\"{{selectedCategory.Images[0].Path1}}\">\r\n        </div>\r\n        <div class=\"ui-g-4\">Vin: </div>\r\n        <div class=\"ui-g-8\">{{selectedCategory.Name}}</div>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./ClientApp/app/components/Admin/categories/categories-index/categories-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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



var CategoriesIndexComponent = /** @class */ (function () {
    function CategoriesIndexComponent(activatedRoute, router, http, baseUrl) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.baseUrl = baseUrl;
        var url = this.baseUrl + "API/Admin/Categories/Index";
        this.http.get(url).subscribe(function (result) {
            _this.categories = result;
            console.log(_this.categories);
        }, function (error) { return console.error(error); });
    }
    CategoriesIndexComponent.prototype.ngOnInit = function () {
    };
    CategoriesIndexComponent.prototype.selectCategory = function (event, category) {
        this.selectedCategory = category;
        this.displayDialog = true;
        event.preventDefault();
    };
    CategoriesIndexComponent.prototype.onSortChange = function (event) {
        var value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    };
    CategoriesIndexComponent.prototype.onDialogHide = function () {
        this.selectedCategory = null;
    };
    CategoriesIndexComponent.prototype.loadData = function (event) {
        return true;
    };
    CategoriesIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-categories-index',
            template: __webpack_require__("./ClientApp/app/components/Admin/categories/categories-index/categories-index.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/Admin/categories/categories-index/categories-index.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String])
    ], CategoriesIndexComponent);
    return CategoriesIndexComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app',
            template: __webpack_require__("./ClientApp/app/components/app/app.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/counter/counter.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/components/counter/counter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.currentCount = 0;
    }
    CounterComponent.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    CounterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'counter',
            template: __webpack_require__("./ClientApp/app/components/counter/counter.component.html")
        })
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/fetchdata/fetchdata.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"forecasts\">\r\n    <thead>\r\n        <tr>\r\n            <th>Date</th>\r\n            <th>Temp. (C)</th>\r\n            <th>Temp. (F)</th>\r\n            <th>Summary</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let forecast of forecasts\">\r\n            <td>{{ forecast.dateFormatted }}</td>\r\n            <td>{{ forecast.temperatureC }}</td>\r\n            <td>{{ forecast.temperatureF }}</td>\r\n            <td>{{ forecast.summary }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/fetchdata/fetchdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FetchDataComponent = /** @class */ (function () {
    function FetchDataComponent() {
    }
    FetchDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fetchdata',
            template: __webpack_require__("./ClientApp/app/components/fetchdata/fetchdata.component.html")
        })
    ], FetchDataComponent);
    return FetchDataComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n    <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\r\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\r\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\r\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular app will be rebuilt and a new instance injected into the page.</li>\r\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\r\n</ul>\r\n<p>Test1</p>"

/***/ }),

/***/ "./ClientApp/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("./ClientApp/app/components/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/navmenu/navmenu.component.css":
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/components/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Angular5Core2V3</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/counter']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/fetch-data']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/test']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Test\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nav-menu',
            template: __webpack_require__("./ClientApp/app/components/navmenu/navmenu.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/navmenu/navmenu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/test/test.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"first\">Basic</h3>\r\n<div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\r\n    <div class=\"ui-g-12\"><p-radioButton name=\"group1\" value=\"Option 1\" label=\"Option 1\" [(ngModel)]=\"val1\" inputId=\"opt1\"></p-radioButton></div>\r\n    <div class=\"ui-g-12\"><p-radioButton name=\"group1\" value=\"Option 2\" label=\"Option 2\" [(ngModel)]=\"val1\" inputId=\"opt2\"></p-radioButton></div>\r\n    <div class=\"ui-g-12\"><p-radioButton name=\"group1\" value=\"Option 3\" label=\"Option 3\" [(ngModel)]=\"val1\" inputId=\"opt3\"></p-radioButton></div>\r\n</div>\r\nSelected Value = {{val1||'none'}}\r\n\r\n<h3>Preselection</h3>\r\n<div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\r\n    <div class=\"ui-g-12\"><p-radioButton name=\"group2\" value=\"Option 1\" label=\"Option 1\" [(ngModel)]=\"val2\" inputId=\"preopt1\"></p-radioButton></div>\r\n    <div class=\"ui-g-12\"><p-radioButton name=\"group2\" value=\"Option 2\" label=\"Option 2\" [(ngModel)]=\"val2\" inputId=\"preopt2\"></p-radioButton></div>\r\n    <div class=\"ui-g-12\"><p-radioButton name=\"group2\" value=\"Option 3\" label=\"Option 3\" [(ngModel)]=\"val2\" inputId=\"preopt3\"></p-radioButton></div>\r\n</div>\r\nSelected Value = {{val2||'none'}}"

/***/ }),

/***/ "./ClientApp/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

__webpack_require__("./node_modules/primeng/resources/themes/omega/theme.css");
__webpack_require__("./node_modules/primeng/resources/primeng.min.css");
__webpack_require__("./node_modules/font-awesome/css/font-awesome.min.css");
var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.val2 = 'Option 2';
    }
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'test',
            template: __webpack_require__("./ClientApp/app/components/test/test.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/test/test.component.css")]
        })
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: null,
    loginUrl: "/Login"
};


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_browser_module__ = __webpack_require__("./ClientApp/app/app.browser.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./ClientApp/environments/environment.ts");
// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_browser_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map