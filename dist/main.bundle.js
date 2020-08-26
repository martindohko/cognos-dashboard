webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.css":
/***/ (function(module, exports) {

module.exports = "header {\r\n  height: 48px;\r\n}\r\n\r\n.navbar-brand {\r\n  padding-left: 1em;\r\n}\r\n\r\n.navbar {\r\n  text-transform: none;\r\n}\r\n\r\n.navbar-logo{\r\n  width: 3em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <header class=\"navbar navbar-expand-md navbar-dark bg-dark\" role=\"banner\">\r\n    <img class=\"navbar-logo\" src=\"../assets/images/DDE_white_32.svg\" alt=\"hearder bar logo\"/>\r\n    <span class=\"navbar-brand\">IBM Cognos Dashboard Embedded</span>\r\n  </header>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavbarComponent; });
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

var AppNavbarComponent = /** @class */ (function () {
    function AppNavbarComponent() {
    }
    AppNavbarComponent.prototype.ngOnInit = function () {
    };
    AppNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/app-navbar/app-navbar.component.html"),
            styles: [__webpack_require__("./src/app/app-navbar/app-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dde_app_dde_app_component__ = __webpack_require__("./src/app/dde-app/dde-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dde_dashboard_dde_dashboard_component__ = __webpack_require__("./src/app/dde-dashboard/dde-dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dde_app_dde_app_component__["a" /* DDEAppComponent */],
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__dde_dashboard_dde_dashboard_component__["a" /* DdeDashboardComponent */],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instrumentation_analytics__ = __webpack_require__("./src/instrumentation/analytics.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(analyticsService) {
        this.analyticsService = analyticsService;
        this.cognos_url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].cognos_api_js;
        this.bluemix_analytics_url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].bluemix_analytics_js;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadCognosApi = new Promise(function (resolve) {
            _this.loadCognosApiScript();
            console.log('cognos script loaded');
        });
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].segment_key !== '${SEGMENT_KEY}') {
            this.loadScript('../instrumentation/pageTracking.js');
            this.analyticsService.setupSegment(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].segment_key);
            this.loadBluemixAnalyticsScript();
        }
    };
    AppComponent.prototype.loadCognosApiScript = function () {
        this.loadScript(this.cognos_url);
    };
    AppComponent.prototype.loadBluemixAnalyticsScript = function () {
        this.loadScript(this.bluemix_analytics_url);
    };
    AppComponent.prototype.loadScript = function (srcUrl) {
        var node = document.createElement('script');
        node.src = srcUrl;
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__instrumentation_analytics__["a" /* AnalyticsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_navbar_app_navbar_component__ = __webpack_require__("./src/app/app-navbar/app-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_accordion__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_tooltip__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dde_code_explorer_dde_code_explorer_component__ = __webpack_require__("./src/app/dde-code-explorer/dde-code-explorer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dde_menu_dde_menu_component__ = __webpack_require__("./src/app/dde-menu/dde-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dde_toaster_dde_toaster_component__ = __webpack_require__("./src/app/dde-toaster/dde-toaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_dde_api_service__ = __webpack_require__("./src/app/services/dde-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_encrypt_service__ = __webpack_require__("./src/app/services/encrypt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_dde_action_service__ = __webpack_require__("./src/app/services/dde-action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_code_snippets_repo_service__ = __webpack_require__("./src/app/services/code-snippets-repo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__instrumentation_analytics__ = __webpack_require__("./src/instrumentation/analytics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dde_dialog_dde_dialog_component__ = __webpack_require__("./src/app/dde-dialog/dde-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dde_references_dde_references_component__ = __webpack_require__("./src/app/dde-references/dde-references.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular_svg_icon__ = __webpack_require__("./node_modules/angular-svg-icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dde_code_snippet_dde_code_snippet_component__ = __webpack_require__("./src/app/dde-code-snippet/dde-code-snippet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dde_app_dde_app_component__ = __webpack_require__("./src/app/dde-app/dde-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dde_dashboard_dde_dashboard_component__ = __webpack_require__("./src/app/dde-dashboard/dde-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dde_dashboard_bar_dde_dashboard_bar_component__ = __webpack_require__("./src/app/dde-dashboard-bar/dde-dashboard-bar.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_navbar_app_navbar_component__["a" /* AppNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dde_code_explorer_dde_code_explorer_component__["a" /* DdeCodeExplorerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dde_menu_dde_menu_component__["a" /* DdeMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dde_toaster_dde_toaster_component__["a" /* DdeToasterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__dde_dialog_dde_dialog_component__["a" /* DdeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__dde_references_dde_references_component__["a" /* DdeReferencesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__dde_code_snippet_dde_code_snippet_component__["a" /* DdeCodeSnippetComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dde_app_dde_app_component__["a" /* DDEAppComponent */],
                __WEBPACK_IMPORTED_MODULE_25__dde_dashboard_dde_dashboard_component__["a" /* DdeDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_26__dde_dashboard_bar_dde_dashboard_bar_component__["a" /* DdeDashboardBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21_angular_svg_icon__["a" /* AngularSvgIconModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23__app_routing_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_dde_api_service__["a" /* DdeApiService */],
                __WEBPACK_IMPORTED_MODULE_15__services_encrypt_service__["a" /* EncryptService */],
                __WEBPACK_IMPORTED_MODULE_17__services_code_snippets_repo_service__["a" /* CodeSnippetsRepoService */],
                __WEBPACK_IMPORTED_MODULE_16__services_dde_action_service__["a" /* DdeActionService */],
                __WEBPACK_IMPORTED_MODULE_18__instrumentation_analytics__["a" /* AnalyticsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dde-app/dde-app.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n  height: 100%;\r\n}\r\n\r\n.grid-container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  text-align: center;\r\n  margin-top: 8em;\r\n}\r\n\r\n.grid-item {\r\n  padding: 10px;\r\n}\r\n\r\n.steps-icons {\r\n  width: 15em;\r\n}\r\n\r\n.empty-state-text{\r\n    margin-top: 28px;\r\n}\r\n\r\n.steps-copy {\r\n  font-family: \"Helv Neue Roman\", Arial, sans-serif;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: inline-block;\r\n}\r\n\r\ndde-toaster {\r\n  position: absolute;\r\n}\r\n\r\n.copy-button {\r\n  /* width: 95px; */\r\n}\r\n\r\n.explorer-bar {\r\n  background-color: #eaeaea;\r\n  height: 40px;\r\n  color: #343334;\r\n  border-right:2px solid #000;\r\n}\r\n\r\n.explorer-bar-max {\r\n  width: 50%;\r\n}\r\n\r\n.explorer-bar-min {\r\n  width: 9.1%;\r\n}\r\n\r\n.dashboard-bar-max {\r\n  width: 90.9%;\r\n}\r\n\r\n.dashboard-bar-min {\r\n  width: 50%;\r\n}\r\n\r\n.fa-columns {\r\n  font-size: 20px;\r\n  margin-top: 0.3em;\r\n  margin-left: 0.3em;\r\n  color: #000;\r\n}\r\n\r\n.fa-columns:hover {\r\n  color: #fff;\r\n}\r\n\r\n.side-panels {\r\n  height: 100%;\r\n  position: absolute;\r\n  z-index: 1;\r\n  overflow-x: hidden;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\n\r\n.side-panels-show {\r\n  width: 50%;\r\n}\r\n\r\n.side-panels-hide {\r\n  width: 0;\r\n}\r\n\r\n.dashboard-min {\r\n  -webkit-transition: margin-left .5s;\r\n  transition: margin-left .5s;\r\n  margin-left: 50%;\r\n}\r\n\r\n.dashboard-max {\r\n  -webkit-transition: margin-left .5s;\r\n  transition: margin-left .5s;\r\n  margin-left: 0;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .col-md-3 {\r\n    min-width: 320px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/dde-app/dde-app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <app-navbar></app-navbar>\r\n</header>\r\n\r\n<dde-dialog>\r\n</dde-dialog>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n      <div class=\"explorer-bar\" [ngClass]=\"explorerBarColSize\"  role=\"region\" aria-label=\"header buttons\">\r\n          <button (click)=showPanels() [ngClass]=\"buttonState\" class=\"button enabled float-left\">\r\n            <svg-icon class=\"show-hide-icon\" src=\"../assets/images/hide-sidepane.svg\"></svg-icon>\r\n            {{showHideText}}\r\n          </button>\r\n        <button [ngClass]=\"onDisableRunButton()\" [attr.aria-disabled]=\"isRunButtonDisabledAria()\" class=\"button float-right\" (click)=\"runCode()\" aria-label=\"Run\">\r\n          <svg-icon src=\"../assets/images/play_16.svg\"></svg-icon>\r\n            Run\r\n        </button>\r\n\r\n        <button id=\"copyButton\" class=\"button copy-button float-right\" [attr.aria-disabled]=\"isCopyButtonDisabledAria()\" [ngClass]=\"onDisableCopyButton()\">\r\n          <svg-icon src=\"../assets/images/copy_16.svg\"></svg-icon>\r\n            <span>Copy</span>\r\n        </button>\r\n      </div>\r\n\r\n      <dde-dashboard-bar [ngClass]=\"dashboardBarColSize\" [disableButtons]=\"disableDashboardBarButtons\"></dde-dashboard-bar>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div [ngClass]=\"showHideClass\" class=\"side-panels col-md-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 nav-bar navbar-expand-lg navbar-light bg-light\">\r\n              <dde-menu (codeToRun)=\"getCodeSnippet($event)\"></dde-menu>\r\n              <dde-references (isShowVideo)=showVideo()></dde-references>\r\n          </div>\r\n\r\n          <div class=\"col-md-6 bg-light\">\r\n            <dde-code-explorer [codeSnippet]=\"code_snippet\" (session)=\"sessionInfo($event)\" (apiId)=\"getAPIId($event)\"\r\n              (dashboardApi)=\"getDashboardApi($event)\" (response)=responseMessage($event)>\r\n            </dde-code-explorer>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div [ngClass]=\"dashboardColSize\" class=\"bg-light\">\r\n         <dde-toaster class=\"toaster\"></dde-toaster>\r\n         <div class=\"iframeContainer\" id=\"ddeDashboard\">\r\n           <div class=\"grid-container\">\r\n             <div class=\"grid-item\">\r\n               <img class=\"steps-icons\" src=\"../assets/images/dashboard_empty_state.svg\" alt=\"Dashboard empty state\"/>\r\n               <div class=\"empty-state-text\">\r\n                 Missing: Dashboard\r\n               </div>\r\n               <div class=\"steps-copy\">\r\n                 Follow the <svg-icon src=\"../assets/images/forward_16.svg\"></svg-icon> arrow to view a pre-configured dashboard.\r\n\r\n                 Then explore the dashboard using the interaction and support APIs.\r\n               </div>\r\n             </div>\r\n           </div>\r\n         </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dde-app/dde-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DDEAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__ = __webpack_require__("./src/model/code-snippet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_toaster__ = __webpack_require__("./src/model/toaster.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_code_snippets_repo_service__ = __webpack_require__("./src/app/services/code-snippets-repo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dde_toaster_dde_toaster_component__ = __webpack_require__("./src/app/dde-toaster/dde-toaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dde_menu_dde_menu_component__ = __webpack_require__("./src/app/dde-menu/dde-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dde_dialog_dde_dialog_component__ = __webpack_require__("./src/app/dde-dialog/dde-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dde_code_explorer_dde_code_explorer_component__ = __webpack_require__("./src/app/dde-code-explorer/dde-code-explorer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__instrumentation_analytics__ = __webpack_require__("./src/instrumentation/analytics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_resources_instrumentation_json__ = __webpack_require__("./src/assets/resources/instrumentation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_resources_instrumentation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__assets_resources_instrumentation_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DDEAppComponent = /** @class */ (function () {
    function DDEAppComponent(codeSnippetsRepoService, analyticsService) {
        this.codeSnippetsRepoService = codeSnippetsRepoService;
        this.analyticsService = analyticsService;
        this.title = 'app';
        this.apiId = '';
        this.dashboardApi = null;
        this.session = null;
        this.dashboardColSize = 'col-md-6 dashboard-min';
        this.dashboardBarColSize = 'dashboard-bar-min';
        this.explorerBarColSize = 'explorer-bar-max';
        this.showPanel = true;
        this.disableDashboardBarButtons = true;
        this.showHideClass = 'side-panels-show';
        this.buttonState = '';
        this.showHideText = 'Hide Panels';
    }
    DDEAppComponent.prototype.ngOnInit = function () {
        this.analyticsService.loadPage(__WEBPACK_IMPORTED_MODULE_10__assets_resources_instrumentation_json__["categoryValue"], __WEBPACK_IMPORTED_MODULE_10__assets_resources_instrumentation_json__["devPageName"]);
        if (!__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production) {
            console.log('Development Mode');
        }
        else {
            console.log('Production Mode');
        }
    };
    DDEAppComponent.prototype.showPanels = function () {
        this.showPanel = !this.showPanel;
        this.showHideText = this.showPanel ? 'Hide Panels' : 'Show Panels';
        this.buttonState = this.showPanel ? '' : 'button-selected';
        this.showHideClass = this.showPanel ? 'side-panels-show' : 'side-panels-hide';
        this.dashboardColSize = this.showPanel ? 'col-md-6 dashboard-min' : 'col-md-12 dashboard-max';
        this.explorerBarColSize = this.showPanel ? 'explorer-bar-max' : 'explorer-bar-min';
        this.dashboardBarColSize = this.showPanel ? 'dashboard-bar-min' : 'dashboard-bar-max';
    };
    DDEAppComponent.prototype.showVideo = function () {
        this.dialogComp.showModal(true);
    };
    DDEAppComponent.prototype.sessionInfo = function (event) {
        this.session = event;
        if (this.session !== null) {
            this.setToaster(__WEBPACK_IMPORTED_MODULE_10__assets_resources_instrumentation_json__["actions"].createdSession.message, 'success', true);
            this.menuComp.nextStep = __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].CreateAPIFramework;
        }
        else {
            this.setToaster(__WEBPACK_IMPORTED_MODULE_10__assets_resources_instrumentation_json__["errorMessage"], 'failure', true);
        }
    };
    DDEAppComponent.prototype.getAPIId = function (event) {
        this.apiId = event;
        if (this.apiId !== null && this.apiId !== '') {
            this.setToaster(__WEBPACK_IMPORTED_MODULE_10__assets_resources_instrumentation_json__["actions"].initializedSession.message, 'success', true);
            this.menuComp.nextStep = __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].CreateDashboard;
        }
        else {
            this.setToaster(__WEBPACK_IMPORTED_MODULE_10__assets_resources_instrumentation_json__["errorMessage"], 'failure', true);
        }
    };
    DDEAppComponent.prototype.getDashboardApi = function (event) {
        var _this = this;
        this.dashboardApi = event;
        if (this.dashboardApi.apiId !== '' && this.dashboardApi.apiId !== null) {
            this.menuComp.nextStep = __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].AddCSVSource;
            this.disableDashboardBarButtons = false;
            this.dashboardApi.on("addSource:clicked", function () {
                _this.menuComp.currentSelection = __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].AddCSVSource;
                _this.code_snippet = _this.codeSnippetsRepoService.getSnippet(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].AddCSVSource);
            });
        }
        else {
            this.setToaster(__WEBPACK_IMPORTED_MODULE_10__assets_resources_instrumentation_json__["errorMessage"], 'failure', true);
        }
    };
    DDEAppComponent.prototype.responseMessage = function (event) {
        this.setToaster(event, 'success', true);
    };
    // set the code snippt to what was fired over
    DDEAppComponent.prototype.getCodeSnippet = function (event) {
        this.code_snippet = event;
    };
    DDEAppComponent.prototype.setToaster = function (message, cssclass, showToaster) {
        this.toaster = new __WEBPACK_IMPORTED_MODULE_2__model_toaster__["a" /* Toaster */](message, cssclass, showToaster);
        this.toasterComp.showToaster(this.toaster);
    };
    DDEAppComponent.prototype.runCode = function () {
        this.codeExplorerComp.runCode();
    };
    DDEAppComponent.prototype.onDisableRunButton = function () {
        var disableButton = this.code_snippet ? this.code_snippet.disableRun : false;
        var classes = {
            disabled: disableButton,
            enabled: !disableButton
        };
        return classes;
    };
    DDEAppComponent.prototype.isRunButtonDisabledAria = function () {
        var disableButton = this.code_snippet ? this.code_snippet.disableRun : false;
        return disableButton;
    };
    DDEAppComponent.prototype.onDisableCopyButton = function () {
        var disableButton = this.code_snippet && this.code_snippet.selection === __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].None ?
            true : false;
        var classes = {
            disabled: disableButton,
            enabled: !disableButton
        };
        return classes;
    };
    DDEAppComponent.prototype.isCopyButtonDisabledAria = function () {
        var disableButton = this.code_snippet && this.code_snippet.selection === __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].None ?
            true : false;
        return disableButton;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__dde_toaster_dde_toaster_component__["a" /* DdeToasterComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__dde_toaster_dde_toaster_component__["a" /* DdeToasterComponent */])
    ], DDEAppComponent.prototype, "toasterComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__dde_menu_dde_menu_component__["a" /* DdeMenuComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__dde_menu_dde_menu_component__["a" /* DdeMenuComponent */])
    ], DDEAppComponent.prototype, "menuComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__dde_dialog_dde_dialog_component__["a" /* DdeDialogComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__dde_dialog_dde_dialog_component__["a" /* DdeDialogComponent */])
    ], DDEAppComponent.prototype, "dialogComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7__dde_code_explorer_dde_code_explorer_component__["a" /* DdeCodeExplorerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__dde_code_explorer_dde_code_explorer_component__["a" /* DdeCodeExplorerComponent */])
    ], DDEAppComponent.prototype, "codeExplorerComp", void 0);
    DDEAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dde-app',
            template: __webpack_require__("./src/app/dde-app/dde-app.component.html"),
            styles: [__webpack_require__("./src/app/dde-app/dde-app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_code_snippets_repo_service__["a" /* CodeSnippetsRepoService */], __WEBPACK_IMPORTED_MODULE_9__instrumentation_analytics__["a" /* AnalyticsService */]])
    ], DDEAppComponent);
    return DDEAppComponent;
}());



/***/ }),

/***/ "./src/app/dde-code-explorer/dde-code-explorer.component.css":
/***/ (function(module, exports) {

module.exports = ".divlarge {\r\n  height: 100%;\r\n}\r\n\r\n.divsmall {\r\n  height: 50%;\r\n}\r\n\r\n.code-block-div {\r\n  width:100%;\r\n\tbackground-color:#595859;\r\n  overflow: scroll;\r\n}\r\n\r\n.code-snippet {\r\n  margin-top: 1.5em;\r\n  width: 100%;\r\n}\r\n\r\n.secondary-panel {\r\n  margin-left: 20px;\r\n}\r\n\r\n.header {\r\n  padding: 15px 5px 5px 0;\r\n}\r\n\r\n.panel-info {\r\n  font-size: 0.75em;\r\n}\r\n\r\n.panel-link {\r\n  margin-top: 3em;\r\n  margin-left: -1em;\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n  .divlarge {\r\n    min-width: 320px;\r\n  }\r\n\r\n  .divsmall {\r\n    min-width: 320px;\r\n  }\r\n\r\n  .explorer-bar {\r\n    min-width: 320px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/dde-code-explorer/dde-code-explorer.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"setExplorerDiv()\">\r\n  <dde-code-snippet class=\"code-snippet\" [codeType]=\"codeSnippet?.selection\"></dde-code-snippet>\r\n</div>\r\n\r\n<div class=\"secondary-panel\" *ngIf=\"showSessionPanel()\">\r\n  <div class=\"header\">\r\n    <label for=\"session-info\">{{codeExplorer_resx.sessionInfo}}</label>\r\n  </div>\r\n\r\n  <div class=\"panel-info\">\r\n    <label for=\"session-code\">sessionCode</label>\r\n    <input readonly [ngModel]=\"sessionObject?.code\"/>\r\n  </div>\r\n\r\n  <div class=\"panel-info\">\r\n    <label for=\"session-id\">sessionId</label>\r\n    <input readonly [ngModel]=\"sessionObject?.id\"/>\r\n  </div>\r\n\r\n  <div class=\"panel-link\">\r\n    <a href=\"https://console.bluemix.net/docs/services/cognos-dashboard-embedded/dde_getting_started.html#step-3-creating-a-cognos-dashboard-embedded-session\" target=\"_blank\" (click)=validSessionLink($event)>\r\n      {{codeExplorer_resx.createValidSession}}\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"secondary-panel\" *ngIf=\"showSourcesDropDown()\">\r\n  <div class=\"header\">\r\n    <label for=\"source-config\">{{codeExplorer_resx.dataSourceConfig}}</label>\r\n  </div>\r\n\r\n  <div class=\"panel-info\">\r\n    <label for=\"datasource\">Data Source</label>\r\n    <select (change)=\"onSelect($event.target.value)\">\r\n      <option *ngFor=\"let dataSource of dataSources\" value={{dataSource.value}}>\r\n         {{dataSource.type}}\r\n      </option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"panel-link\">\r\n    <a href=\"https://console.bluemix.net/docs/services/cognos-dashboard-embedded/working_with_datasources.html#working-with-data-sources\" target=\"_blank\" (click)=workWithDatasource($event)>\r\n      {{codeExplorer_resx.workWithOwnDatasource}}\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"secondary-panel\" *ngIf=\"showDashboardModesDropDown()\">\r\n  <div class=\"header\">\r\n    <label for=\"dashboard-mode\">{{codeExplorer_resx.dashboardMode}}</label>\r\n  </div>\r\n\r\n  <div class=\"panel-info\">\r\n    <label for=\"mode\">Mode</label>\r\n    <select (change)=\"onSelectMode($event.target.value)\">\r\n      <option *ngFor=\"let mode of dashboardModes\" value={{mode.value}}>\r\n         {{mode.type}}\r\n      </option>\r\n    </select>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dde-code-explorer/dde-code-explorer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdeCodeExplorerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dde_api_service__ = __webpack_require__("./src/app/services/dde-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dde_action_service__ = __webpack_require__("./src/app/services/dde-action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__ = __webpack_require__("./src/model/code-snippet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_data_source__ = __webpack_require__("./src/model/data-source.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_code_snippets_repo_service__ = __webpack_require__("./src/app/services/code-snippets-repo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_dashboard_mode__ = __webpack_require__("./src/model/dashboard-mode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__instrumentation_analytics__ = __webpack_require__("./src/instrumentation/analytics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__ = __webpack_require__("./src/assets/resources/instrumentation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_resources_codeExplorer_json__ = __webpack_require__("./src/assets/resources/codeExplorer.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_resources_codeExplorer_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__assets_resources_codeExplorer_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};










var DdeCodeExplorerComponent = /** @class */ (function () {
    function DdeCodeExplorerComponent(ddeApiService, codeSnippetsRepoService, ddeActionService, analyticsService) {
        this.ddeApiService = ddeApiService;
        this.codeSnippetsRepoService = codeSnippetsRepoService;
        this.ddeActionService = ddeActionService;
        this.analyticsService = analyticsService;
        this.session = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.apiId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dashboardApi = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.response = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dataSources = [__WEBPACK_IMPORTED_MODULE_4__model_data_source__["c" /* CSVDataSource */], __WEBPACK_IMPORTED_MODULE_4__model_data_source__["d" /* ProtectedCSVDataSource */], __WEBPACK_IMPORTED_MODULE_4__model_data_source__["b" /* BikeShareWeatherCSVSource */], __WEBPACK_IMPORTED_MODULE_4__model_data_source__["a" /* BikeShareRidesDemographCSVSource */]];
        this.dashboardModes = [__WEBPACK_IMPORTED_MODULE_6__model_dashboard_mode__["b" /* EditMode */], __WEBPACK_IMPORTED_MODULE_6__model_dashboard_mode__["c" /* ViewMode */], __WEBPACK_IMPORTED_MODULE_6__model_dashboard_mode__["a" /* EditGroupMode */]];
        this.sessionObject = null;
        this.codeExplorer_resx = __WEBPACK_IMPORTED_MODULE_9__assets_resources_codeExplorer_json__;
    }
    DdeCodeExplorerComponent.prototype.ngOnInit = function () {
    };
    DdeCodeExplorerComponent.prototype.setExplorerDiv = function () {
        var classes = {
            divsmall: this.codeSnippet && this.codeSnippet.size === 'small',
            divlarge: !this.codeSnippet || this.codeSnippet.size === 'large'
        };
        return classes;
    };
    DdeCodeExplorerComponent.prototype.runCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataSource, actionResource, _a, _b, _c, _d, _e, _f, _g, e_1;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        dataSource = '';
                        actionResource = '';
                        _h.label = 1;
                    case 1:
                        _h.trys.push([1, 30, , 31]);
                        this.ddeActionService.previousAction = this.ddeActionService.currentAction;
                        this.ddeActionService.currentAction = this.codeSnippet.selection;
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CreateSession)) return [3 /*break*/, 3];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].createdSession;
                        _a = this;
                        return [4 /*yield*/, this.ddeApiService.createNewSession()];
                    case 2:
                        _a.sessionObject = _h.sent();
                        this.session.emit(this.sessionObject);
                        this.resetAllRunButtons();
                        this.analyticsService.setSession(this.sessionObject.id);
                        return [3 /*break*/, 29];
                    case 3:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CreateAPIFramework)) return [3 /*break*/, 5];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].initializedSession;
                        _c = (_b = this.apiId).emit;
                        return [4 /*yield*/, this.ddeApiService.createAndInitApiFramework()];
                    case 4:
                        _c.apply(_b, [_h.sent()]);
                        this.resetAllRunButtons();
                        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CreateDashboard);
                        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].OpenDashboard);
                        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].RegisterApiCallback);
                        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UnregisterApiCallback);
                        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CloseApiFramework);
                        return [3 /*break*/, 29];
                    case 5:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].RegisterApiCallback)) return [3 /*break*/, 6];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].registeredApiCallback;
                        this.ddeApiService.registerApiCallback();
                        this.response.emit(__WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].registeredApiCallback.message);
                        return [3 /*break*/, 29];
                    case 6:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UnregisterApiCallback)) return [3 /*break*/, 7];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].unregisteredApiCallback;
                        this.ddeApiService.unregisterApiCallback();
                        this.response.emit(__WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].unregisteredApiCallback.message);
                        return [3 /*break*/, 29];
                    case 7:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CloseApiFramework)) return [3 /*break*/, 8];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].closedAPIFramework;
                        this.ddeApiService.closeApiFramework();
                        this.response.emit(__WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].closedAPIFramework.message);
                        return [3 /*break*/, 29];
                    case 8:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CreateDashboard)) return [3 /*break*/, 10];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].createdNew;
                        _e = (_d = this.dashboardApi).emit;
                        return [4 /*yield*/, this.ddeApiService.createDashboard()];
                    case 9:
                        _e.apply(_d, [_h.sent()]);
                        this.enableDashboardInteractionRunButton();
                        return [3 /*break*/, 29];
                    case 10:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].OpenDashboard)) return [3 /*break*/, 12];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].opened;
                        _g = (_f = this.dashboardApi).emit;
                        return [4 /*yield*/, this.ddeApiService.openDashboard()];
                    case 11:
                        _g.apply(_f, [_h.sent()]);
                        this.enableDashboardInteractionRunButton();
                        return [3 /*break*/, 29];
                    case 12:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddCSVSource)) return [3 /*break*/, 14];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].addSource;
                        return [4 /*yield*/, this.ddeApiService.addCSVSampleSource()];
                    case 13:
                        dataSource = _h.sent();
                        this.ddeActionService.isAddingDataSourceLastUpdateToDashboard = true;
                        return [3 /*break*/, 29];
                    case 14:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddProtectedCSVSource)) return [3 /*break*/, 16];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].addSource;
                        return [4 /*yield*/, this.ddeApiService.addProtectedCSVSampleSource()];
                    case 15:
                        dataSource = _h.sent();
                        this.ddeActionService.isAddingDataSourceLastUpdateToDashboard = true;
                        return [3 /*break*/, 29];
                    case 16:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareRidesDemographCSVSource)) return [3 /*break*/, 18];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].addSource;
                        return [4 /*yield*/, this.ddeApiService.addBikeShareRidesDemographCSVSampleSource()];
                    case 17:
                        dataSource = _h.sent();
                        this.ddeActionService.isAddingDataSourceLastUpdateToDashboard = true;
                        return [3 /*break*/, 29];
                    case 18:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareWeatherCSVSource)) return [3 /*break*/, 20];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].addSource;
                        return [4 /*yield*/, this.ddeApiService.addBikeShareWeatherCSVSampleSource()];
                    case 19:
                        dataSource = _h.sent();
                        this.ddeActionService.isAddingDataSourceLastUpdateToDashboard = true;
                        return [3 /*break*/, 29];
                    case 20:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditMode)) return [3 /*break*/, 21];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].editMode;
                        this.ddeApiService.setDashboardMode_Edit();
                        this.ddeActionService.isAddingDataSourceLastUpdateToDashboard = false;
                        return [3 /*break*/, 29];
                    case 21:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardViewMode)) return [3 /*break*/, 22];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].viewMode;
                        this.ddeApiService.setDashboardMode_View();
                        this.ddeActionService.isAddingDataSourceLastUpdateToDashboard = false;
                        return [3 /*break*/, 29];
                    case 22:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditGroupMode)) return [3 /*break*/, 23];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].groupEditMode;
                        this.ddeApiService.setDashboardMode_EditGroup();
                        this.ddeActionService.isAddingDataSourceLastUpdateToDashboard = false;
                        return [3 /*break*/, 29];
                    case 23:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UndoLastAction)) return [3 /*break*/, 24];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].undo;
                        this.ddeApiService.undoLastAction();
                        return [3 /*break*/, 29];
                    case 24:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].RedoLastAction)) return [3 /*break*/, 25];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].redo;
                        this.ddeApiService.redoLastAction();
                        return [3 /*break*/, 29];
                    case 25:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].TogglePropertiesPane)) return [3 /*break*/, 26];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].toggleProperties;
                        this.ddeApiService.togglePropertiesPane();
                        return [3 /*break*/, 29];
                    case 26:
                        if (!(this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].GetDashboardSpec)) return [3 /*break*/, 28];
                        actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].getSpecs;
                        return [4 /*yield*/, this.ddeApiService.getDashboardSpec()];
                    case 27:
                        _h.sent();
                        this.response.emit(__WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].getSpecs.message);
                        return [3 /*break*/, 29];
                    case 28:
                        if (this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UpdateModuleDefinitions) {
                            actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].updateDataDefinition;
                            this.ddeApiService.updateModuleDefinitions();
                            this.response.emit(__WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].updateDataDefinition.message);
                        }
                        else if (this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].ClearDirtyState) {
                            actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].clearDirtyState;
                            this.ddeApiService.clearDirtyState();
                            this.response.emit(__WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].clearDirtyState.message);
                        }
                        else if (this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].RegisterCallback) {
                            actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].registerDashboardCallback;
                            this.ddeApiService.registerCallback();
                            this.response.emit(__WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].registerDashboardCallback.message);
                        }
                        else if (this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UnregisterCallback) {
                            actionResource = __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].unregisterDashboardCallback;
                            this.ddeApiService.unregisterCallback();
                            this.response.emit(__WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["actions"].unregisterDashboardCallback.message);
                        }
                        else {
                            throw new Error(__WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["invalidCodeSnippet"]);
                        }
                        _h.label = 29;
                    case 29:
                        this.createTraits(actionResource.processType, actionResource.name, true, dataSource, actionResource.message);
                        this.ddeActionService.hasActionChanged.next(true);
                        ;
                        return [3 /*break*/, 31];
                    case 30:
                        e_1 = _h.sent();
                        console.log(e_1);
                        this.session.emit(null);
                        this.apiId.emit('');
                        this.createTraits(actionResource.processType, actionResource.name, false, dataSource, e_1.message);
                        return [3 /*break*/, 31];
                    case 31: return [2 /*return*/];
                }
            });
        });
    };
    DdeCodeExplorerComponent.prototype.enableDashboardInteractionRunButton = function () {
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddCSVSource);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddProtectedCSVSource);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareRidesDemographCSVSource);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareWeatherCSVSource);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditMode);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardViewMode);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditGroupMode);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UndoLastAction);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].RedoLastAction);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].TogglePropertiesPane);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].GetDashboardSpec);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].ClearDirtyState);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UpdateModuleDefinitions);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].RegisterCallback);
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UnregisterCallback);
    };
    DdeCodeExplorerComponent.prototype.createTraits = function (processType, process, isSuccess, dataSource, resultValue) {
        var result = isSuccess ? 'success' : 'error';
        var traits;
        switch (this.codeSnippet.selection) {
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CreateSession:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CreateAPIFramework:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].OpenDashboard:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CreateDashboard:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].ClearDirtyState:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].RegisterCallback:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UnregisterCallback:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].RegisterApiCallback:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UnregisterApiCallback:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CloseApiFramework: {
                traits = { processType: processType, process: process, sessionId: this.analyticsService.sessionId, successFlag: result,
                    resultValue: resultValue, productTitle: __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["productTitle"], };
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UndoLastAction:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].RedoLastAction:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].TogglePropertiesPane:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditMode:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardViewMode:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditGroupMode: {
                traits = { processType: processType, process: process, sessionId: this.analyticsService.sessionId, successFlag: result,
                    resultValue: resultValue, productTitle: __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["productTitle"], /*version: environment.version,*/ uiElement: __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["runButton"] };
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddCSVSource:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddProtectedCSVSource:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareRidesDemographCSVSource:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareWeatherCSVSource:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareRidesDemographCSVSource:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareWeatherCSVSource:
            case __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].GetDashboardSpec: {
                traits = { processType: processType, process: process, sessionId: this.analyticsService.sessionId, successFlag: result,
                    resultValue: resultValue, productTitle: __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["productTitle"], /*version: environment.version,*/ customName1: 'dataSource',
                    customValue1: dataSource, uiElement: __WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["runButton"] };
                break;
            }
        }
        this.analyticsService.sendTrack(__WEBPACK_IMPORTED_MODULE_8__assets_resources_instrumentation_json__["ranProcessTrack"], traits);
    };
    DdeCodeExplorerComponent.prototype.enableRunButton = function (type) {
        var snippet = this.codeSnippetsRepoService.getSnippet(type);
        snippet.disableRun = false;
        this.codeSnippetsRepoService.setSnippet(type, snippet);
    };
    DdeCodeExplorerComponent.prototype.resetAllRunButtons = function () {
        this.codeSnippetsRepoService.disableRunButton();
        this.enableRunButton(__WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CreateAPIFramework);
    };
    DdeCodeExplorerComponent.prototype.onSelect = function (sourceValue) {
        for (var i = 0; i < this.dataSources.length; i++) {
            if (this.dataSources[i].value === sourceValue) {
                this.codeSnippet = this.codeSnippetsRepoService.getSnippet(sourceValue);
            }
        }
    };
    DdeCodeExplorerComponent.prototype.onSelectMode = function (modeValue) {
        for (var i = 0; i < this.dashboardModes.length; i++) {
            if (this.dashboardModes[i].value === modeValue) {
                this.codeSnippet = this.codeSnippetsRepoService.getSnippet(modeValue);
            }
        }
    };
    DdeCodeExplorerComponent.prototype.showSessionPanel = function () {
        return this.codeSnippet && (this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CreateAPIFramework);
    };
    DdeCodeExplorerComponent.prototype.showSourcesDropDown = function () {
        return this.codeSnippet && (this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddCSVSource ||
            this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddProtectedCSVSource ||
            this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareWeatherCSVSource ||
            this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareRidesDemographCSVSource);
    };
    DdeCodeExplorerComponent.prototype.showDashboardModesDropDown = function () {
        return this.codeSnippet && (this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardViewMode ||
            this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditMode ||
            this.codeSnippet.selection === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditGroupMode);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], DdeCodeExplorerComponent.prototype, "session", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], DdeCodeExplorerComponent.prototype, "apiId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], DdeCodeExplorerComponent.prototype, "dashboardApi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], DdeCodeExplorerComponent.prototype, "response", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["a" /* CodeSnippet */])
    ], DdeCodeExplorerComponent.prototype, "codeSnippet", void 0);
    DdeCodeExplorerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dde-code-explorer',
            template: __webpack_require__("./src/app/dde-code-explorer/dde-code-explorer.component.html"),
            styles: [__webpack_require__("./src/app/dde-code-explorer/dde-code-explorer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dde_api_service__["a" /* DdeApiService */], __WEBPACK_IMPORTED_MODULE_5__services_code_snippets_repo_service__["a" /* CodeSnippetsRepoService */],
            __WEBPACK_IMPORTED_MODULE_2__services_dde_action_service__["a" /* DdeActionService */], __WEBPACK_IMPORTED_MODULE_7__instrumentation_analytics__["a" /* AnalyticsService */]])
    ], DdeCodeExplorerComponent);
    return DdeCodeExplorerComponent;
}());



/***/ }),

/***/ "./src/app/dde-code-snippet/dde-code-snippet.component.css":
/***/ (function(module, exports) {

module.exports = "pre[class*=\"language-\"] {\r\n  border-radius: 0;\r\n  margin: 0;\r\n}\r\n\r\npre {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #343334;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.none-state {\r\n  color: #fff;\r\n  margin-top: 9.5em;\r\n  text-align: center;\r\n  font-family: \"Helv Neue Roman\", Arial, sans-serif;\r\n}\r\n\r\n.title {\r\n  font-family: \"Helv Neue Bold\", Arial, sans-serif;\r\n}\r\n\r\n.code-panel.title{\r\n  margin-top: -14px;\r\n  margin-bottom: -20px;\r\n}\r\n\r\n.no-code-text{\r\n  font-size: 1rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dde-code-snippet/dde-code-snippet.component.html":
/***/ (function(module, exports) {

module.exports = "<pre *ngIf=\"type === 'None'\">\r\n  <div class='none-state'>\r\n    <img class=\"steps-icons\" alt=\"Empty code snippet\" src=\"../assets/images/table_128.svg\"/>\r\n\r\n      <div class=\"code-panel title no-code-text\">Missing: API code</div>\r\n      <span class=\"no-code-text\">Select an API and the code will appear here.</span>\r\n      <span class=\"no-code-text\">You can Run or Copy the code.</span>\r\n\r\n  </div>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'CreateSession'\" class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    const response = await\r\n        this.http.post('/api/dde/session',\r\n          options).toPromise();\r\n\r\n      const data = response.json();\r\n      this.session.code = data.sessionCode;\r\n      this.session.id = data.sessionId;\r\n      this.session.keys = data.keys.map(\r\n        k => new SessionKey(k));\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'CreateAPIFramework'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.api = new CognosApi({{ '{' }}\r\n      cognosRootURL: '{{ cognos_url }}',\r\n      sessionCode: this.session.code,\r\n      initTimeout: 10000,\r\n      node: document.getElementById(\r\n        'ddeDashboard')\r\n    });\r\n\r\n    await this.api.initialize();\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'CreateDashboard'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI =\r\n      await this.api.dashboard.createNew();\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'OpenDashboard'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    await this.getDashboardSampleSpec();\r\n    this.dashboardAPI = await\r\n      this.api.dashboard.openDashboard({{ '{' }}\r\n        dashboardSpec: this.sample_db_spec\r\n    });\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'AddCSVSource'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.addSources([{{ '{' }}\r\n      module: sampleModule,\r\n      name: 'Sample CSV Source',\r\n      id: 'myUniqueId789'\r\n    }]);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'AddProtectedCSVSource'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.addSources([{{ '{' }}\r\n      module: encryptedSampleModule,\r\n      name: 'Sample Protected CSV Source',\r\n      id: 'myUniqueId987'\r\n    }]);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'AddBikeShareWeatherCSVSource'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.addSources([{{ '{' }}\r\n      module: sampleBikeShareWeatherModule,\r\n      name: 'Test Bike Share Weather Source',\r\n      id: 'myUniqueId111'\r\n    }]);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'AddBikeShareRidesDemographCSVSource'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.addSources([{{ '{' }}\r\n      module: sampleBikeShareRidesDemographModule,\r\n      name: 'Test Bike Share Rides Demographics Source',\r\n      id: 'myUniqueId222'\r\n    }]);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'DashboardEditMode'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.setMode(\r\n      this.dashboardAPI.MODES.EDIT);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'DashboardViewMode'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.setMode(\r\n      this.dashboardAPI.MODES.VIEW);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'DashboardEditGroupMode'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.setMode(\r\n      this.dashboardAPI.MODES.EDIT_GROUP);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'UndoLastAction'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.undo();\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'RedoLastAction'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.redo();\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'GetDashboardSpec'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    const spec = await\r\n      this.dashboardAPI.getSpec();\r\n    console.log(JSON.stringify(spec));\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'UpdateModuleDefinitions'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    await this.getDashboardSampleSpec();\r\n    var dbSpec = JSON.parse(JSON.stringify(this.sample_db_spec));\r\n\r\n    var getNewModulesCallback = function(ids) {{ '{' }}\r\n      var newModules = [];\r\n      ids.forEach(function(id) {{ '{' }}\r\n        newModules.push({{ '{' }}\r\n          id: id,\r\n          module: {{ '{' }}\r\n            newModuleDefinition: true\r\n          },\r\n          name: 'newModuleName',\r\n        });\r\n      });\r\n      return Promise.resolve(newModules);\r\n    };\r\n\r\n    // log the before\r\n    console.log(\"before update:\");\r\n    console.log(dbSpec.dataSources.sources);\r\n\r\n    // log the after\r\n    console.log(\"after update:\");\r\n    const newDBSpec = await this.api.updateModuleDefinitions(dbSpec, getNewModulesCallback);\r\n    console.log(newDBSpec.dataSources.sources);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'ClearDirtyState'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.clearDirty();\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'TogglePropertiesPane'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.toggleProperties();\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'RegisterCallback'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.on(this.dashboardAPI.EVENTS.DIRTY, this.onModified);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'UnregisterCallback'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.dashboardAPI.off(this.dashboardAPI.EVENTS.DIRTY, this.onModified);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'RegisterApiCallback'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.api.on(CognosApi.EVENTS.REQUEST_ERROR, this.onError);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'UnregisterApiCallback'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    this.api.off(CognosApi.EVENTS.REQUEST_ERROR, this.onError);\r\n  </code>\r\n</pre>\r\n\r\n<pre *ngIf=\"type === 'CloseApiFramework'\"  class=\"line-numbers\">\r\n  <code class=\"language-javascript\">\r\n    await this.api.close();\r\n  </code>\r\n</pre>\r\n"

/***/ }),

/***/ "./src/app/dde-code-snippet/dde-code-snippet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdeCodeSnippetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DdeCodeSnippetComponent = /** @class */ (function () {
    function DdeCodeSnippetComponent() {
        this.cognos_url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].cognos_root_url;
    }
    DdeCodeSnippetComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(DdeCodeSnippetComponent.prototype, "codeType", {
        set: function (codeType) {
            this.type = codeType;
            setTimeout(function () {
                Prism.highlightAll();
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DdeCodeSnippetComponent.prototype, "codeType", null);
    DdeCodeSnippetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dde-code-snippet',
            template: __webpack_require__("./src/app/dde-code-snippet/dde-code-snippet.component.html"),
            styles: [__webpack_require__("./src/app/dde-code-snippet/dde-code-snippet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DdeCodeSnippetComponent);
    return DdeCodeSnippetComponent;
}());



/***/ }),

/***/ "./src/app/dde-dashboard-bar/dde-dashboard-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".dashboard-bar {\r\n  background-color: #eaeaea;\r\n  height: 40px;\r\n  /* border-left:2px solid #000; */\r\n}\r\n\r\n.button-selected svg-icon {\r\n  fill: #d8d8d8;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dde-dashboard-bar/dde-dashboard-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-bar\">\r\n  <button class=\"button float-right dashboard-button\" [ngClass]=\"{'button-selected': isEditMode && toggleProperties}\" (click)=togglePropertiesPane() tooltip=\"Toggle properties pane\" placement=\"left\" aria-label=\"Toggle properties pane\" [attr.aria-disabled]=\"isTogglePropertiesPaneDisabled()\">\r\n    <svg-icon src=\"../assets/images/configure_32.svg\" [ngClass]=\"{'disabled': isTogglePropertiesPaneDisabled(), 'enabled': !isTogglePropertiesPaneDisabled()}\"></svg-icon>\r\n  </button>\r\n  <button class=\"button float-right dashboard-button\" (click)=redoLastAction() tooltip=\"Redo last change\" placement=\"left\" aria-label=\"Redo last change\" [attr.aria-disabled]=\"disableButtons\">\r\n    <svg-icon src=\"../assets/images/refresh_16.svg\" [ngClass]=\"onDisableButtons()\"></svg-icon>\r\n  </button>\r\n  <button class=\"button float-right dashboard-button\" (click)=undoLastAction() tooltip=\"Undo last change\" placement=\"left\" aria-label=\"Undo last change\" [attr.aria-disabled]=\"disableButtons\">\r\n    <svg-icon src=\"../assets/images/reset_16.svg\" [ngClass]=\"onDisableButtons()\"></svg-icon>\r\n  </button>\r\n  <button class=\"button float-right dashboard-button\" [ngClass]=\"{'button-selected': isEditMode && !disableButtons}\" (click)=editDashboard() tooltip=\"Edit dashboard mode\" placement=\"left\" aria-label=\"Edit dashboard mode\" [attr.aria-disabled]=\"disableButtons\">\r\n    <svg-icon src=\"../assets/images/edit_16.svg\" [ngClass]=\"onDisableButtons()\"></svg-icon>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dde-dashboard-bar/dde-dashboard-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdeDashboardBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dde_api_service__ = __webpack_require__("./src/app/services/dde-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dde_action_service__ = __webpack_require__("./src/app/services/dde-action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__ = __webpack_require__("./src/model/code-snippet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instrumentation_analytics__ = __webpack_require__("./src/instrumentation/analytics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__ = __webpack_require__("./src/assets/resources/instrumentation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DdeDashboardBarComponent = /** @class */ (function () {
    function DdeDashboardBarComponent(ddeApiService, ddeActionService, analyticsService) {
        this.ddeApiService = ddeApiService;
        this.ddeActionService = ddeActionService;
        this.analyticsService = analyticsService;
        this.isEditMode = false;
        this.toggleProperties = false;
    }
    DdeDashboardBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ddeActionService.hasActionChanged.subscribe(function () {
            _this.shouldReset();
            _this.toggleDashboardMode();
            _this.togglePropertiesMode();
        });
    };
    DdeDashboardBarComponent.prototype.isTogglePropertiesPaneDisabled = function () {
        return this.disableButtons || !this.isEditMode;
    };
    DdeDashboardBarComponent.prototype.onDisableButtons = function () {
        var classes = {
            disabled: this.disableButtons,
            enabled: !this.disableButtons
        };
        return classes;
    };
    DdeDashboardBarComponent.prototype.undoLastAction = function () {
        this.traits = { processType: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].undo.processType, process: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].undo.name,
            sessionId: this.analyticsService.sessionId, successFlag: 'success', resultValue: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].undo.message, productTitle: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["productTitle"],
            /*version: environment.version,*/ uiElement: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actionButton"] };
        this.ddeApiService.undoLastAction();
        this.ddeActionService.previousAction = this.ddeActionService.currentAction;
        this.ddeActionService.currentAction = __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].UndoLastAction;
        this.toggleDashboardMode();
        this.analyticsService.sendTrack(__WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["ranProcessTrack"], this.traits);
    };
    DdeDashboardBarComponent.prototype.redoLastAction = function () {
        this.traits = { processType: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].redo.processType, process: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].redo.name,
            sessionId: this.analyticsService.sessionId, successFlag: 'success', resultValue: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].redo.message, productTitle: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["productTitle"],
            /*version: environment.version,*/ uiElement: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actionButton"] };
        this.ddeApiService.redoLastAction();
        this.ddeActionService.previousAction = this.ddeActionService.currentAction;
        this.ddeActionService.currentAction = __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].RedoLastAction;
        this.toggleDashboardMode();
        this.analyticsService.sendTrack(__WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["ranProcessTrack"], this.traits);
    };
    DdeDashboardBarComponent.prototype.togglePropertiesPane = function () {
        this.traits = { processType: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].toggleProperties.processType, process: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].toggleProperties.name,
            sessionId: this.analyticsService.sessionId, successFlag: 'success', resultValue: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].toggleProperties.message, productTitle: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["productTitle"],
            /*version: environment.version,*/ uiElement: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actionButton"] };
        this.ddeActionService.previousAction = this.ddeActionService.currentAction;
        this.ddeActionService.currentAction = __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].TogglePropertiesPane;
        this.ddeApiService.togglePropertiesPane();
        this.togglePropertiesMode();
        this.analyticsService.sendTrack(__WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["ranProcessTrack"], this.traits);
    };
    DdeDashboardBarComponent.prototype.editDashboard = function () {
        this.ddeActionService.previousAction = this.ddeActionService.currentAction;
        this.ddeActionService.isAddingDataSourceLastUpdateToDashboard = false;
        if (this.isEditMode) {
            this.traits = { processType: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].viewMode.processType, process: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].viewMode.name,
                sessionId: this.analyticsService.sessionId, successFlag: 'success', resultValue: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].viewMode.message, productTitle: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["productTitle"],
                /*version: environment.version,*/ uiElement: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actionButton"] };
            this.ddeActionService.currentAction = __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardViewMode;
            this.ddeApiService.setDashboardMode_View();
            this.toggleProperties = false;
            this.analyticsService.sendTrack(__WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["ranProcessTrack"], this.traits);
        }
        else {
            this.traits = { processType: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].editMode.processType, process: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].editMode.name,
                sessionId: this.analyticsService.sessionId, successFlag: 'success', resultValue: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actions"].editMode.message, productTitle: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["productTitle"],
                /*version: environment.version,*/ uiElement: __WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["actionButton"] };
            this.ddeActionService.currentAction = __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditMode;
            this.ddeApiService.setDashboardMode_Edit();
            this.analyticsService.sendTrack(__WEBPACK_IMPORTED_MODULE_5__assets_resources_instrumentation_json__["ranProcessTrack"], this.traits);
        }
        this.toggleDashboardMode();
    };
    DdeDashboardBarComponent.prototype.toggleDashboardMode = function () {
        if (this.ddeActionService.shouldToggleEditButton()) {
            this.isEditMode = !this.isEditMode;
        }
    };
    DdeDashboardBarComponent.prototype.togglePropertiesMode = function () {
        if (this.ddeActionService.shouldTogglePropertiesPane() && !this.isTogglePropertiesPaneDisabled()) {
            this.toggleProperties = !this.toggleProperties;
        }
    };
    DdeDashboardBarComponent.prototype.shouldReset = function () {
        if (this.ddeActionService.currentAction === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].CreateDashboard) {
            this.isEditMode = true;
            this.toggleProperties = false;
        }
        if (this.ddeActionService.currentAction === __WEBPACK_IMPORTED_MODULE_3__model_code_snippet__["b" /* CodeSnippetEnum */].OpenDashboard) {
            this.isEditMode = false;
            this.toggleProperties = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DdeDashboardBarComponent.prototype, "disableButtons", void 0);
    DdeDashboardBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dde-dashboard-bar',
            template: __webpack_require__("./src/app/dde-dashboard-bar/dde-dashboard-bar.component.html"),
            styles: [__webpack_require__("./src/app/dde-dashboard-bar/dde-dashboard-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dde_api_service__["a" /* DdeApiService */], __WEBPACK_IMPORTED_MODULE_2__services_dde_action_service__["a" /* DdeActionService */],
            __WEBPACK_IMPORTED_MODULE_4__instrumentation_analytics__["a" /* AnalyticsService */]])
    ], DdeDashboardBarComponent);
    return DdeDashboardBarComponent;
}());



/***/ }),

/***/ "./src/app/dde-dashboard/dde-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".col-md-12 {\r\n  padding: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dde-dashboard/dde-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <app-navbar></app-navbar>\r\n</header>\r\n\r\n<dde-dialog>\r\n</dde-dialog>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <dde-dashboard-bar class=\"col-md-12\" [disableButtons]=\"disableDashboardBarButtons\"></dde-dashboard-bar>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n       <dde-toaster class=\"toaster\"></dde-toaster>\r\n       <div class=\"iframeContainer\" id=\"ddeDashboard\">\r\n       </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dde-dashboard/dde-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdeDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dde_api_service__ = __webpack_require__("./src/app/services/dde-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instrumentation_analytics__ = __webpack_require__("./src/instrumentation/analytics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_resources_instrumentation_json__ = __webpack_require__("./src/assets/resources/instrumentation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_resources_instrumentation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_resources_instrumentation_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_toaster__ = __webpack_require__("./src/model/toaster.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dde_toaster_dde_toaster_component__ = __webpack_require__("./src/app/dde-toaster/dde-toaster.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};






var DdeDashboardComponent = /** @class */ (function () {
    function DdeDashboardComponent(ddeApiService, analyticsService) {
        this.ddeApiService = ddeApiService;
        this.analyticsService = analyticsService;
        this.disableDashboardBarButtons = true;
    }
    DdeDashboardComponent.prototype.ngAfterViewInit = function () {
        this.loadDasboard();
        this.analyticsService.loadPage(__WEBPACK_IMPORTED_MODULE_3__assets_resources_instrumentation_json__["categoryValue"], __WEBPACK_IMPORTED_MODULE_3__assets_resources_instrumentation_json__["endUserPageName"]);
    };
    DdeDashboardComponent.prototype.loadDasboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.ddeApiService.createNewSession()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.ddeApiService.createAndInitApiFramework()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.ddeApiService.openDashboard()];
                    case 3:
                        _a.sent();
                        this.disableDashboardBarButtons = false;
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.toasterComp.showToaster(new __WEBPACK_IMPORTED_MODULE_4__model_toaster__["a" /* Toaster */](__WEBPACK_IMPORTED_MODULE_3__assets_resources_instrumentation_json__["errorMessage"], 'error', true));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__dde_toaster_dde_toaster_component__["a" /* DdeToasterComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__dde_toaster_dde_toaster_component__["a" /* DdeToasterComponent */])
    ], DdeDashboardComponent.prototype, "toasterComp", void 0);
    DdeDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dde-dashboard',
            template: __webpack_require__("./src/app/dde-dashboard/dde-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dde-dashboard/dde-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dde_api_service__["a" /* DdeApiService */], __WEBPACK_IMPORTED_MODULE_2__instrumentation_analytics__["a" /* AnalyticsService */]])
    ], DdeDashboardComponent);
    return DdeDashboardComponent;
}());



/***/ }),

/***/ "./src/app/dde-dialog/dde-dialog.component.css":
/***/ (function(module, exports) {

module.exports = "video {\r\n  width: 100%;\r\n}\r\n\r\n.checkbox {\r\n  display: inline;\r\n  width: 2%;\r\n}\r\n\r\n.modal-title {\r\n  font-size: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dde-dialog/dde-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" role=\"dialog\" aria-hidden=\"true\" aria-label=\"Intro video pop up window\" [config]=\"{'backdrop':'static', 'keyboard': false}\" >\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"modal-title pull-left\">{{dialog_resx.dashboardingExp}}</div>\r\n          <button (click)=\"hideModal()\" class=\"button\" aria-label=\"Close Intro Video\">\r\n            <svg-icon class=\"close-image\" src=\"../assets/images/close_16.svg\"></svg-icon>\r\n          </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <video #ddeVideo autoplay controls class=\"embed-responsive-item\">\r\n          <source src=\"../../assets/video/CDE.mp4\" type=\"video/mp4\">\r\n          <track kind=\"captions\" srclang=\"en\" src=\"../assets/video/videoCaptions.vtt\">\r\n        </video>\r\n        <input class=\"checkbox\" type=\"checkbox\" (change)=toogleVideo($event) role=\"checkbox\" [attr.aria-checked]=\"isCheckboxChecked ? 'true' : 'false'\" aria-label=\"Do not display again\">\r\n        {{dialog_resx.doNotDisplayAgain}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dde-dialog/dde-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instrumentation_analytics__ = __webpack_require__("./src/instrumentation/analytics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_resources_dialog_json__ = __webpack_require__("./src/assets/resources/dialog.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_resources_dialog_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_resources_dialog_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_resources_instrumentation_json__ = __webpack_require__("./src/assets/resources/instrumentation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_resources_instrumentation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_resources_instrumentation_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DdeDialogComponent = /** @class */ (function () {
    function DdeDialogComponent(analyticsService) {
        this.analyticsService = analyticsService;
        this.isCheckboxChecked = false;
        this.dialog_resx = __WEBPACK_IMPORTED_MODULE_3__assets_resources_dialog_json__;
    }
    DdeDialogComponent.prototype.ngAfterViewInit = function () {
        if (JSON.parse(localStorage.getItem('showVideo')) ||
            JSON.parse(localStorage.getItem('showVideo')) === null)
            this.showModal(false);
        else
            this.hideModal();
    };
    DdeDialogComponent.prototype.showModal = function (shouldTrack) {
        var totalTime = '0:' + Math.floor(this.ddeVideo.nativeElement.duration);
        this.ddeVideo.nativeElement.load();
        this.lgModal.show();
        if (shouldTrack) {
            this.traits = { productTitle: __WEBPACK_IMPORTED_MODULE_4__assets_resources_instrumentation_json__["productTitle"], sessionId: this.analyticsService.sessionId,
                totalLength: totalTime, position: '0:00', customName1: 'doNotDisplayAgain', customValue1: this.isCheckboxChecked };
            this.analyticsService.sendTrack(__WEBPACK_IMPORTED_MODULE_4__assets_resources_instrumentation_json__["videoPlaybackStarted"], this.traits);
        }
    };
    DdeDialogComponent.prototype.toogleVideo = function (event) {
        var showVideo = event.target.checked ? 'false' : 'true';
        localStorage.setItem('showVideo', showVideo);
        this.isCheckboxChecked = event.target.checked;
    };
    DdeDialogComponent.prototype.hideModal = function () {
        this.lgModal.hide();
        this.ddeVideo.nativeElement.pause();
        if (!Number.isNaN(this.ddeVideo.nativeElement.duration)) {
            var timeElasped = '0:' + Math.floor(this.ddeVideo.nativeElement.currentTime);
            var totalTime = '0:' + Math.floor(this.ddeVideo.nativeElement.duration);
            this.traits = { productTitle: __WEBPACK_IMPORTED_MODULE_4__assets_resources_instrumentation_json__["productTitle"], sessionId: this.analyticsService.sessionId,
                totalLength: totalTime, position: timeElasped, customName1: 'doNotDisplayAgain', customValue1: this.isCheckboxChecked };
            this.analyticsService.sendTrack(__WEBPACK_IMPORTED_MODULE_4__assets_resources_instrumentation_json__["videoPlaybackCompleted"], this.traits);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('lgModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], DdeDialogComponent.prototype, "lgModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('ddeVideo'),
        __metadata("design:type", Object)
    ], DdeDialogComponent.prototype, "ddeVideo", void 0);
    DdeDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dde-dialog',
            template: __webpack_require__("./src/app/dde-dialog/dde-dialog.component.html"),
            styles: [__webpack_require__("./src/app/dde-dialog/dde-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__instrumentation_analytics__["a" /* AnalyticsService */]])
    ], DdeDialogComponent);
    return DdeDialogComponent;
}());



/***/ }),

/***/ "./src/app/dde-menu/dde-menu.component.css":
/***/ (function(module, exports) {

module.exports = ".current-selection {\r\n  border-left:2px solid #1f57a4 !important;\r\n  background: rgba(21, 87, 164, 0.1) !important;\r\n}\r\n\r\n.info-icon {\r\n  width: 14px;\r\n  float: right;\r\n  margin-right: 1em;\r\n}\r\n\r\n.nav-link {\r\n  cursor: pointer;\r\n  padding-left: 3em !important;\r\n  border: none;\r\n  background: transparent;\r\n  width: 100%;\r\n  text-align: left;\r\n  letter-spacing: inherit;\r\n}\r\n\r\n.nav-link:hover {\r\n  background: rgba(0, 0, 0, 0.05);\r\n  color: #000 !important;\r\n}\r\n\r\n.navbar-brand {\r\n  color: #000 !important;\r\n  border: none;\r\n  background: transparent;\r\n  text-align: left;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  letter-spacing: inherit;\r\n  white-space: normal;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dde-menu/dde-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ngxAccordionCustomContainer list-group text-md-left\" role=\"region\" aria-label=\"API list\">\r\n  <accordion [closeOthers]=true class=\"ngxAccordionCustom\">\r\n    <accordion-group [isOpen]=\"isFirstOpen\" panelClass=\"bg-light\">\r\n      <button accordion-heading class=\"navbar-brand\" [attr.tabindex]=\"0\">\r\n        {{menu_resx.setUpAPI}}\r\n      </button>\r\n      <div class=\"col-md-12\">\r\n           <div class=\"row\">\r\n             <ul class=\"navbar-nav mr-auto\">\r\n               <li>\r\n                 <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.CreateSession}\" (click)='getCodeSnippet(enumType.CreateSession)'>\r\n                   <svg-icon class=\"faa-horizontal animated\" src=\"../assets/images/forward_16.svg\" *ngIf=\"nextStepToProcess() === enumType.CreateSession\"></svg-icon>\r\n                     <span>{{menu_resx.createSession}}</span>\r\n                   <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                      tooltip={{menu_resx.sessionTooltip}}></svg-icon>\r\n                 </button>\r\n                 <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.CreateAPIFramework}\" href=\"#\" (click)='getCodeSnippet(enumType.CreateAPIFramework)'>\r\n                   <svg-icon class=\"faa-horizontal animated\" src=\"../assets/images/forward_16.svg\" *ngIf=\"nextStepToProcess() === enumType.CreateAPIFramework\"></svg-icon>\r\n                      <span>{{menu_resx.initAPI}}</span>\r\n                   <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                      tooltip={{menu_resx.initAPITooltip}}></svg-icon>\r\n                 </button>\r\n                 <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.RegisterApiCallback}\" href=\"#\" (click)='getCodeSnippet(enumType.RegisterApiCallback)'>\r\n                   <span>{{menu_resx.registerAPI}}</span>\r\n                   <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                      tooltip={{menu_resx.registerAPITooltip}}></svg-icon>\r\n                 </button>\r\n                 <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.UnregisterApiCallback}\" href=\"#\" (click)='getCodeSnippet(enumType.UnregisterApiCallback)'>\r\n                   <span>{{menu_resx.unregisterAPI}}</span>\r\n                   <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                      tooltip={{menu_resx.unregisterAPITooltip}}></svg-icon>\r\n                 </button>\r\n                 <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.CloseApiFramework}\" href=\"#\" (click)='getCodeSnippet(enumType.CloseApiFramework)'>\r\n                   <span>{{menu_resx.closeAPI}}</span>\r\n                 </button>\r\n               </li>\r\n             </ul>\r\n           </div>\r\n      </div>\r\n    </accordion-group>\r\n\r\n    <accordion-group [isOpen]=\"nextStepToProcess() === 'CreateDashboard'\" panelClass=\"bg-light\">\r\n      <button accordion-heading class=\"navbar-brand\">\r\n        {{menu_resx.openCreateDashbaord}}\r\n      </button>\r\n\r\n      <div class=\"col-md-12\">\r\n           <div class=\"row\">\r\n             <ul class=\"navbar-nav mr-auto\">\r\n               <li>\r\n                 <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.OpenDashboard}\" href=\"#\" (click)='getCodeSnippet(enumType.OpenDashboard)'>\r\n                   <svg-icon class=\"faa-horizontal animated\" src=\"../assets/images/forward_16.svg\" *ngIf=\"nextStepToProcess() === enumType.CreateDashboard\"></svg-icon>\r\n                    <span>{{menu_resx.openDashboard}}</span>\r\n                   <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                      tooltip={{menu_resx.openDashboardTooltip}}></svg-icon>\r\n                 </button>\r\n                 <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.CreateDashboard}\" href=\"#\" (click)='getCodeSnippet(enumType.CreateDashboard)'>\r\n                   <span>{{menu_resx.createDashboard}}</span>\r\n                   <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                      tooltip={{menu_resx.createDashboardTooltip}}></svg-icon>\r\n                 </button>\r\n               </li>\r\n             </ul>\r\n           </div>\r\n      </div>\r\n    </accordion-group>\r\n\r\n    <accordion-group [isOpen]=\"nextStepToProcess() === 'AddCSVSource'\" panelClass=\"bg-light\">\r\n      <button accordion-heading class=\"navbar-brand\">\r\n        {{menu_resx.dashboardInteraction}}\r\n      </button>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <ul class=\"navbar-nav\">\r\n            <li>\r\n              <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.AddCSVSource}\" href=\"#\" (click)='getCodeSnippet(enumType.AddCSVSource)'>\r\n                <span>{{menu_resx.addSource}}</span>\r\n                <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                   tooltip={{menu_resx.addSourceTooltip}}></svg-icon>\r\n              </button>\r\n              <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.DashboardEditMode}\" href=\"#\" (click)='getCodeSnippet(enumType.DashboardEditMode)'>\r\n                <span>{{menu_resx.setMode}}</span>\r\n                <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                   tooltip={{menu_resx.setModeTooltip}}></svg-icon>\r\n              </button>\r\n              <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.UndoLastAction}\" href=\"#\" (click)='getCodeSnippet(enumType.UndoLastAction)'>\r\n                <span>{{menu_resx.undoLastChange}}</span>\r\n              </button>\r\n              <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.RedoLastAction}\" href=\"#\" (click)='getCodeSnippet(enumType.RedoLastAction)'>\r\n                <span>{{menu_resx.redoLastChange}}</span>\r\n              </button>\r\n              <button  class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.TogglePropertiesPane}\" href=\"#\" (click)='getCodeSnippet(enumType.TogglePropertiesPane)'>\r\n                <span>{{menu_resx.toggleProperties}}</span>\r\n                <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                   tooltip={{menu_resx.toggleTooltip}}></svg-icon>\r\n              </button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </accordion-group>\r\n\r\n    <accordion-group panelClass=\"bg-light\">\r\n      <button accordion-heading class=\"navbar-brand\">\r\n        {{menu_resx.supportAPI}}\r\n      </button>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <ul class=\"navbar-nav\">\r\n            <li>\r\n              <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.GetDashboardSpec}\" href=\"#\" (click)='getCodeSnippet(enumType.GetDashboardSpec)'>\r\n                <span>{{menu_resx.getDashboardSpecs}}</span>\r\n                <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                   tooltip={{menu_resx.getDashboardSpecTooltip}}></svg-icon>\r\n              </button>\r\n              <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.ClearDirtyState}\" href=\"#\" (click)='getCodeSnippet(enumType.ClearDirtyState)'>\r\n                <span>{{menu_resx.clearDirtyState}}</span>\r\n                <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                   tooltip={{menu_resx.clearDirtyTooltip}}></svg-icon>\r\n              </button>\r\n              <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.UpdateModuleDefinitions}\" href=\"#\" (click)='getCodeSnippet(enumType.UpdateModuleDefinitions)'>\r\n                <span>{{menu_resx.updateDataDefinition}}</span>\r\n                <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                   tooltip={{menu_resx.updateDataDefinitionTooltip}}></svg-icon>\r\n              </button>\r\n              <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.RegisterCallback}\" href=\"#\" (click)='getCodeSnippet(enumType.RegisterCallback)'>\r\n                <span>{{menu_resx.registerDashboard}}</span>\r\n                <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                   tooltip={{menu_resx.registerDashboardTooltip}}></svg-icon>\r\n              </button>\r\n              <button class=\"nav-link\" [ngClass]=\"{'current-selection': currentSelection === enumType.UnregisterCallback}\" href=\"#\" (click)='getCodeSnippet(enumType.UnregisterCallback)'>\r\n                <span>{{menu_resx.unregisterDashboard}}</span>\r\n                <svg-icon class=\"info-icon\" src=\"../assets/images/get-information_16.svg\" placement=\"left\"\r\n                   tooltip={{menu_resx.unregisterDashboardTooltip}}></svg-icon>\r\n              </button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </accordion-group>\r\n  </accordion>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dde-menu/dde-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export contentHeaders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdeMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_code_snippet__ = __webpack_require__("./src/model/code-snippet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_code_snippets_repo_service__ = __webpack_require__("./src/app/services/code-snippets-repo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dde_api_service__ = __webpack_require__("./src/app/services/dde-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_resources_menu_json__ = __webpack_require__("./src/assets/resources/menu.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_resources_menu_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_resources_menu_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
var DdeMenuComponent = /** @class */ (function () {
    function DdeMenuComponent(http, ddeApiService, codeSnippetsRepoService) {
        this.http = http;
        this.ddeApiService = ddeApiService;
        this.codeSnippetsRepoService = codeSnippetsRepoService;
        this.moduleDefinitionUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.codeToRun = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.menu_resx = __WEBPACK_IMPORTED_MODULE_5__assets_resources_menu_json__;
        this.enumType = __WEBPACK_IMPORTED_MODULE_2__model_code_snippet__["b" /* CodeSnippetEnum */];
        this.collapsed = true;
        this.isFirstOpen = true;
    }
    DdeMenuComponent.prototype.ngOnInit = function () {
        this.nextStep = __WEBPACK_IMPORTED_MODULE_2__model_code_snippet__["b" /* CodeSnippetEnum */].CreateSession;
        this.getCodeSnippet(__WEBPACK_IMPORTED_MODULE_2__model_code_snippet__["b" /* CodeSnippetEnum */].None);
    };
    DdeMenuComponent.prototype.nextStepToProcess = function () {
        return this.nextStep;
    };
    DdeMenuComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    DdeMenuComponent.prototype.getCodeSnippet = function (codeSnippetEnum) {
        this.currentSelection = codeSnippetEnum;
        this.codeToRun.emit(this.codeSnippetsRepoService.getSnippet(this.currentSelection));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], DdeMenuComponent.prototype, "moduleDefinitionUpdated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DdeMenuComponent.prototype, "codeToRun", void 0);
    DdeMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dde-menu',
            template: __webpack_require__("./src/app/dde-menu/dde-menu.component.html"),
            styles: [__webpack_require__("./src/app/dde-menu/dde-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__services_dde_api_service__["a" /* DdeApiService */],
            __WEBPACK_IMPORTED_MODULE_3__services_code_snippets_repo_service__["a" /* CodeSnippetsRepoService */]])
    ], DdeMenuComponent);
    return DdeMenuComponent;
}());



/***/ }),

/***/ "./src/app/dde-references/dde-references.component.css":
/***/ (function(module, exports) {

module.exports = ".references {\r\n  background-color: #f6f6f6;\r\n  padding: 0.7em 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dde-references/dde-references.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"references\" role=\"region\" aria-label=\"Helpful links\">\r\n  <a href=\"https://console.bluemix.net/catalog/services/ibm-cognos-dashboard-embedded\" target=\"_blank\">\r\n  {{ref_resx.createInstance}}\r\n  </a>\r\n  <a href=\"https://console.bluemix.net/docs/services/cognos-dashboard-embedded/dde_getting_started.html#getting-started-tutorial-cognos-dashboard-embedded\" target=\"_blank\">\r\n    {{ref_resx.gettingStartedDocs}}\r\n  </a>\r\n  <a href=\"https://developer.ibm.com/data/cognos-dashboard/\" target=\"_blank\">\r\n    {{ref_resx.devWorksCommunity}}\r\n  </a>\r\n  <a href=\"https://github.com/IBM/cognos-dashboard-demo\" target=\"_blank\">\r\n    {{ref_resx.viewGithubRepo}}\r\n  </a>\r\n  <a href=\"#\" (click)=\"showVideo($event)\">\r\n    {{ref_resx.watchVideo}}\r\n  </a>\r\n  <a href=\"https://www.ibm.com/legal/\" target=\"_blank\">\r\n    {{ref_resx.termsOfUse}}\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dde-references/dde-references.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdeReferencesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instrumentation_analytics__ = __webpack_require__("./src/instrumentation/analytics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_resources_references_json__ = __webpack_require__("./src/assets/resources/references.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_resources_references_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_resources_references_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DdeReferencesComponent = /** @class */ (function () {
    function DdeReferencesComponent(analyticsService) {
        this.analyticsService = analyticsService;
        this.isShowVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.ref_resx = __WEBPACK_IMPORTED_MODULE_2__assets_resources_references_json__;
    }
    DdeReferencesComponent.prototype.ngOnInit = function () {
    };
    DdeReferencesComponent.prototype.showVideo = function (event) {
        this.isShowVideo.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], DdeReferencesComponent.prototype, "isShowVideo", void 0);
    DdeReferencesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dde-references',
            template: __webpack_require__("./src/app/dde-references/dde-references.component.html"),
            styles: [__webpack_require__("./src/app/dde-references/dde-references.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__instrumentation_analytics__["a" /* AnalyticsService */]])
    ], DdeReferencesComponent);
    return DdeReferencesComponent;
}());



/***/ }),

/***/ "./src/app/dde-toaster/dde-toaster.component.css":
/***/ (function(module, exports) {

module.exports = ".toaster {\r\n  background-color: #fff;\r\n  position: relative;\r\n  -webkit-box-shadow: 0 0 20px rgba(0,0,0,.7);\r\n          box-shadow: 0 0 20px rgba(0,0,0,.7);\r\n  width: 600px;\r\n  padding: 10px 10px 10px 10px;\r\n  text-align: center;\r\n  margin-left: 100px;\r\n}\r\n\r\n.toaster-message {\r\n  padding-left: 10px;\r\n  color: #000;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dde-toaster/dde-toaster.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"toaster?.showToaster\" class=\"toaster\" role=\"alert\">\r\n  <svg-icon *ngIf=\"toaster?.type === 'success'\" class=\"success-image\" src=\"../assets/images/confirm_16.svg\"></svg-icon>\r\n  <svg-icon *ngIf=\"toaster?.type === 'failure'\" class=\"error-image\" src=\"../assets/images/error_16.svg\"></svg-icon>\r\n  <svg-icon *ngIf=\"toaster?.type === 'warning'\" class=\"warning-image\" src=\"../assets/images/warn_32.svg\"></svg-icon>\r\n  <span class=\"toaster-message\" [innerHTML]=\"toaster?.message\"></span>\r\n  <svg-icon class=\"close-image\" src=\"../assets/images/close_16.svg\" (click)=\"hideToaster()\"></svg-icon>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dde-toaster/dde-toaster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdeToasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/timer.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DdeToasterComponent = /** @class */ (function () {
    function DdeToasterComponent() {
    }
    DdeToasterComponent.prototype.ngOnInit = function () {
    };
    DdeToasterComponent.prototype.showToaster = function (toaster) {
        var _this = this;
        this.toaster = toaster;
        if (this.timerSub !== undefined) {
            this.unsubscribeTimer();
        }
        this.timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].timer(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].toaster_timer);
        this.timerSub = this.timer.subscribe(function () {
            _this.hideToaster();
        });
    };
    DdeToasterComponent.prototype.hideToaster = function () {
        this.unsubscribeTimer();
        this.toaster.showToaster = false;
    };
    DdeToasterComponent.prototype.unsubscribeTimer = function () {
        this.timerSub.unsubscribe();
    };
    DdeToasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dde-toaster',
            template: __webpack_require__("./src/app/dde-toaster/dde-toaster.component.html"),
            styles: [__webpack_require__("./src/app/dde-toaster/dde-toaster.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DdeToasterComponent);
    return DdeToasterComponent;
}());



/***/ }),

/***/ "./src/app/services/code-snippets-repo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeSnippetsRepoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__ = __webpack_require__("./src/model/code-snippet.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeSnippetsRepoService = /** @class */ (function () {
    function CodeSnippetsRepoService() {
        this.snippets = new Map();
        // Add snippets as key-value pairs
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].None, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].None, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].CreateSession, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].CreateSession, 'large', false));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].CreateAPIFramework, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].CreateAPIFramework, 'small', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].CreateDashboard, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].CreateDashboard, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].OpenDashboard, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].OpenDashboard, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].AddCSVSource, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].AddCSVSource, 'small', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].AddProtectedCSVSource, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].AddProtectedCSVSource, 'small', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareWeatherCSVSource, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareWeatherCSVSource, 'small', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareRidesDemographCSVSource, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareRidesDemographCSVSource, 'small', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditMode, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditMode, 'small', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardViewMode, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardViewMode, 'small', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditGroupMode, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditGroupMode, 'small', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].UndoLastAction, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].UndoLastAction, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].RedoLastAction, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].RedoLastAction, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].GetDashboardSpec, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].GetDashboardSpec, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].UpdateModuleDefinitions, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].UpdateModuleDefinitions, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].ClearDirtyState, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].ClearDirtyState, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].TogglePropertiesPane, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].TogglePropertiesPane, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].RegisterCallback, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].RegisterCallback, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].UnregisterCallback, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].UnregisterCallback, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].RegisterApiCallback, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].RegisterApiCallback, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].UnregisterApiCallback, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].UnregisterApiCallback, 'large', true));
        this.snippets.set(__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].CloseApiFramework, new __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["a" /* CodeSnippet */](__WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].CloseApiFramework, 'large', true));
    }
    CodeSnippetsRepoService.prototype.getSnippet = function (name) {
        return this.snippets.get(name);
    };
    CodeSnippetsRepoService.prototype.setSnippet = function (name, codeSnippet) {
        if (this.snippets.has(name)) {
            this.snippets.set(name, codeSnippet);
        }
    };
    CodeSnippetsRepoService.prototype.disableRunButton = function () {
        this.snippets.forEach(function (codeSnippet, key, snippets) {
            if (key !== __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].CreateSession) {
                codeSnippet.disableRun = true;
                snippets.set(key, codeSnippet);
            }
        });
    };
    CodeSnippetsRepoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CodeSnippetsRepoService);
    return CodeSnippetsRepoService;
}());



/***/ }),

/***/ "./src/app/services/dde-action.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdeActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__ = __webpack_require__("./src/model/code-snippet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DdeActionService = /** @class */ (function () {
    function DdeActionService() {
        this.hasActionChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.isAddingDataSourceLastUpdateToDashboard = false;
    }
    DdeActionService.prototype.shouldToggleEditButton = function () {
        return (!this.isAddingDataSourceLastUpdateToDashboard &&
            ((this.currentAction === __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].TogglePropertiesPane &&
                this.previousAction === __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].UndoLastAction) ||
                (this.currentAction === __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].TogglePropertiesPane &&
                    this.previousAction === __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].RedoLastAction) ||
                (this.currentAction === __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardEditMode ||
                    this.currentAction === __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].DashboardViewMode ||
                    this.currentAction === __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].UndoLastAction ||
                    this.currentAction === __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].RedoLastAction)));
    };
    DdeActionService.prototype.shouldTogglePropertiesPane = function () {
        return this.currentAction === __WEBPACK_IMPORTED_MODULE_1__model_code_snippet__["b" /* CodeSnippetEnum */].TogglePropertiesPane;
    };
    DdeActionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DdeActionService);
    return DdeActionService;
}());



/***/ }),

/***/ "./src/app/services/dde-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdeApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_session__ = __webpack_require__("./src/model/session.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encrypt_service__ = __webpack_require__("./src/app/services/encrypt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};





var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
var DdeApiService = /** @class */ (function () {
    function DdeApiService(http, encryptService) {
        this.http = http;
        this.encryptService = encryptService;
        this.api = null;
    }
    DdeApiService.prototype.createNewSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.session = new __WEBPACK_IMPORTED_MODULE_2__model_session__["a" /* Session */]();
                        if (this.api != null) {
                            console.log("there was already an api object");
                        }
                        options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: contentHeaders });
                        return [4 /*yield*/, this.http.post('/api/dde/session', options).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        console.log(data);
                        this.session.code = data.sessionCode;
                        this.session.id = data.sessionId;
                        this.session.keys = data.keys.map(function (k) { return new __WEBPACK_IMPORTED_MODULE_2__model_session__["b" /* SessionKey */](k); });
                        return [2 /*return*/, this.session];
                }
            });
        });
    };
    // initTimeout: initialization timeout (ms). Default 30000 ms.
    // initTimeout allows for whatever latency you expect form your browser making the init() call to getting/loading DDE in the iFrame.
    DdeApiService.prototype.createAndInitApiFramework = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("in create and init api framework");
                        // Create an instance of the CognosApi
                        this.api = new CognosApi({
                            cognosRootURL: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].cognos_root_url,
                            sessionCode: this.session.code,
                            initTimeout: 10000,
                            node: document.getElementById('ddeDashboard')
                        });
                        this.api._node.hidden = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.api.initialize()];
                    case 2:
                        _a.sent();
                        console.log('API created successfully.');
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log('Unable to initialize API instance: ' + e_1.message);
                        throw e_1;
                    case 4:
                        console.log(this.api.dashboard);
                        return [2 /*return*/, this.api.apiId];
                }
            });
        });
    };
    DdeApiService.prototype.createDashboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.dashboard.createNew()];
                    case 1:
                        _a.dashboardAPI = _b.sent();
                        console.log('Dashboard created successfully.');
                        console.log(this.dashboardAPI);
                        this.dashboardAPI.state = 'Create';
                        return [2 /*return*/, this.dashboardAPI];
                }
            });
        });
    };
    DdeApiService.prototype.getDashboardSampleSpec = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fileName, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileName = 'dashboardSpec.json';
                        // return if it was already fetched from before
                        if (this.sample_db_spec != null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.http.get('/assets/data/' + fileName).toPromise()];
                    case 1:
                        response = _a.sent();
                        this.sample_db_spec = response.json();
                        return [2 /*return*/, fileName];
                }
            });
        });
    };
    DdeApiService.prototype.openDashboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getDashboardSampleSpec()];
                    case 1:
                        _b.sent();
                        console.log("got dashboard: " + this.sample_db_spec);
                        _a = this;
                        return [4 /*yield*/, this.api.dashboard.openDashboard({
                                dashboardSpec: this.sample_db_spec
                            })];
                    case 2:
                        _a.dashboardAPI = _b.sent();
                        this.dashboardAPI.state = 'Open';
                        console.log('Dashboard opened successfully.');
                        console.log(this.dashboardAPI);
                        return [2 /*return*/, this.dashboardAPI];
                }
            });
        });
    };
    DdeApiService.prototype.getCSVSampleModuleJson = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(url).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    DdeApiService.prototype.getCSVSampleModule = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.csv_sample_module == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.getCSVSampleModuleJson('/assets/data/' + fileName)];
                    case 1:
                        _a.csv_sample_module = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.csv_sample_module];
                }
            });
        });
    };
    DdeApiService.prototype.getBikeShareWeatherCSVSampleModule = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.bike_share_weather_csv_sample_module == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.getCSVSampleModuleJson('/assets/data/' + fileName)];
                    case 1:
                        _a.bike_share_weather_csv_sample_module = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.bike_share_weather_csv_sample_module];
                }
            });
        });
    };
    DdeApiService.prototype.getBikeShareRidesDemographCSVSampleModule = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.bike_share_rides_demograph_csv_sample_module == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.getCSVSampleModuleJson('/assets/data/' + fileName)];
                    case 1:
                        _a.bike_share_rides_demograph_csv_sample_module = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.bike_share_rides_demograph_csv_sample_module];
                }
            });
        });
    };
    DdeApiService.prototype.addCSVSampleSource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filename, sampleModule;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filename = 'ddeCSVSampleModule.json';
                        return [4 /*yield*/, this.getCSVSampleModule(filename)];
                    case 1:
                        sampleModule = _a.sent();
                        this.dashboardAPI.addSources([{
                                module: sampleModule,
                                name: 'Test CSV Source',
                                id: 'myUniqueId789'
                            }]);
                        return [2 /*return*/, filename];
                }
            });
        });
    };
    DdeApiService.prototype.addProtectedCSVSampleSource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fileName, sampleModule, encryptedSampleModule;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileName = 'ddeCSVSampleModule.json';
                        return [4 /*yield*/, this.getCSVSampleModule(fileName)];
                    case 1:
                        sampleModule = _a.sent();
                        this.encryptService.setKey(this.session.keys[0]);
                        encryptedSampleModule = this.encryptService.encryptModuleInfo(sampleModule);
                        console.log("protected CSV sample module: " + encryptedSampleModule);
                        this.dashboardAPI.addSources([{
                                module: encryptedSampleModule,
                                name: 'Protected CSV Source',
                                id: 'myUniqueId987'
                            }]);
                        return [2 /*return*/, fileName];
                }
            });
        });
    };
    DdeApiService.prototype.addBikeShareWeatherCSVSampleSource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fileName, sampleBikeShareWeatherModule;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileName = 'bikeShareWeatherSampleModule.json';
                        return [4 /*yield*/, this.getBikeShareWeatherCSVSampleModule(fileName)];
                    case 1:
                        sampleBikeShareWeatherModule = _a.sent();
                        this.dashboardAPI.addSources([{
                                module: sampleBikeShareWeatherModule,
                                name: 'Test Bike Share Weather Source',
                                id: 'myUniqueId111'
                            }]);
                        return [2 /*return*/, fileName];
                }
            });
        });
    };
    DdeApiService.prototype.addBikeShareRidesDemographCSVSampleSource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fileName, sampleBikeShareRidesDemographModule;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileName = 'bikeShareRidesDemographicsSampleModule.json';
                        return [4 /*yield*/, this.getBikeShareRidesDemographCSVSampleModule(fileName)];
                    case 1:
                        sampleBikeShareRidesDemographModule = _a.sent();
                        this.dashboardAPI.addSources([{
                                module: sampleBikeShareRidesDemographModule,
                                name: 'Test Bike Share Rides Demographics Source',
                                id: 'myUniqueId222'
                            }]);
                        return [2 /*return*/, fileName];
                }
            });
        });
    };
    /**
    Available modes
    dashboardAPI.MODES.EDIT (authoring mode)
    dashboardAPI.MODES.VIEW (consumption mode)
    dashboardAPI.MODES.EDIT_GROUP (event group mode)
    */
    DdeApiService.prototype.setDashboardMode_Edit = function () {
        this.dashboardAPI.setMode(this.dashboardAPI.MODES.EDIT);
    };
    DdeApiService.prototype.setDashboardMode_View = function () {
        this.dashboardAPI.setMode(this.dashboardAPI.MODES.VIEW);
    };
    DdeApiService.prototype.setDashboardMode_EditGroup = function () {
        this.dashboardAPI.setMode(this.dashboardAPI.MODES.EDIT_GROUP);
    };
    DdeApiService.prototype.undoLastAction = function () {
        this.dashboardAPI.undo();
    };
    DdeApiService.prototype.redoLastAction = function () {
        this.dashboardAPI.redo();
    };
    DdeApiService.prototype.togglePropertiesPane = function () {
        this.dashboardAPI.toggleProperties();
    };
    DdeApiService.prototype.getDashboardSpec = function () {
        return __awaiter(this, void 0, void 0, function () {
            var spec;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dashboardAPI.getSpec()];
                    case 1:
                        spec = _a.sent();
                        console.log(JSON.stringify(spec));
                        return [2 /*return*/];
                }
            });
        });
    };
    DdeApiService.prototype.updateModuleDefinitions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dbSpec, getNewModulesCallback, newDBSpec;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDashboardSampleSpec()];
                    case 1:
                        _a.sent();
                        dbSpec = JSON.parse(JSON.stringify(this.sample_db_spec));
                        getNewModulesCallback = function (ids) {
                            var newModules = [];
                            ids.forEach(function (id) {
                                newModules.push({
                                    id: id,
                                    module: {
                                        newModuleDefinition: true
                                    },
                                    name: 'newModuleName',
                                });
                            });
                            return Promise.resolve(newModules);
                        };
                        // log the before
                        console.log("before update:");
                        console.log(dbSpec.dataSources.sources);
                        // log the after
                        console.log("after update:");
                        return [4 /*yield*/, this.api.updateModuleDefinitions(dbSpec, getNewModulesCallback)];
                    case 2:
                        newDBSpec = _a.sent();
                        console.log(newDBSpec.dataSources.sources);
                        return [2 /*return*/];
                }
            });
        });
    };
    // update the boolean that is used for the onDirty events
    DdeApiService.prototype.clearDirtyState = function () {
        this.dashboardAPI.clearDirty();
    };
    // handle the event when the dashboard is modified
    DdeApiService.prototype.onModified = function (event) {
        // if not dirty, JSON.stringify(event) would be {"value":false}
        if (event != null && event.value == true) {
            console.log('dashboard has been modified: ');
        }
        console.log(JSON.stringify(event));
    };
    DdeApiService.prototype.registerCallback = function () {
        this.dashboardAPI.on(this.dashboardAPI.EVENTS.DIRTY, this.onModified);
        console.log("DIRTY event callback registered.");
    };
    DdeApiService.prototype.unregisterCallback = function () {
        this.dashboardAPI.off(this.dashboardAPI.EVENTS.DIRTY, this.onModified);
        console.log("DIRTY event callback unregistered.");
    };
    // handle the event when the api returns an error
    DdeApiService.prototype.onError = function (event) {
        console.log('onError:' + JSON.stringify(event));
    };
    DdeApiService.prototype.registerApiCallback = function () {
        this.api.on(CognosApi.EVENTS.REQUEST_ERROR, this.onError);
        console.log("REQUEST_ERROR event callback registered.");
    };
    DdeApiService.prototype.unregisterApiCallback = function () {
        this.api.off(CognosApi.EVENTS.REQUEST_ERROR, this.onError);
        console.log("REQUEST_ERROR event callback unregistered.");
    };
    DdeApiService.prototype.closeApiFramework = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.close()];
                    case 1:
                        _a.sent();
                        console.log('API closed successfully.');
                        return [2 /*return*/];
                }
            });
        });
    };
    DdeApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__encrypt_service__["a" /* EncryptService */]])
    ], DdeApiService);
    return DdeApiService;
}());



/***/ }),

/***/ "./src/app/services/encrypt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncryptService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsrsasign__ = __webpack_require__("./node_modules/jsrsasign/lib/jsrsasign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsrsasign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsrsasign__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncryptService = /** @class */ (function () {
    function EncryptService() {
        // useSimpleModule is false if and only if window.location.href = "...&simple=false..."
        // useSimpleModule is true if no "simple" or if "simple=true" or if "simple=anything"
        // for now, set useSimpleModule to true
        var useSimpleModule = true;
        this.validPropertiesToEncrypt = useSimpleModule ? ['source.jdbc.schema', 'source.user', 'source.password', 'source.jdbc.jdbcUrl', 'source.srcUrl.sourceUrl'] : ['dataSource.0.schema', 'dataSource.0.user', 'dataSource.0.password', 'dataSource.0.jdbc.jdbcUrl', 'dataSource.0.csvUrl'];
        console.log("validPropertiesToEncrypt:");
        console.log(this.validPropertiesToEncrypt);
    }
    EncryptService.prototype.setKey = function (key) {
        this.key = key;
    };
    EncryptService.prototype.encryptModuleInfo = function (module) {
        var sampleProtectedModule = JSON.parse(JSON.stringify(module));
        return this.encryptObject(sampleProtectedModule, null);
    };
    EncryptService.prototype.encryptObject = function (obj, name) {
        var self = this;
        Object.keys(obj).forEach(function (key) {
            var fullKey = name ? name + '.' + key : key;
            if (typeof obj[key] === 'object') {
                // encrypt the child object
                self.encryptObject(obj[key], fullKey);
            }
            else if (self.validPropertiesToEncrypt.indexOf(fullKey) !== -1) {
                obj[key] = self.encryptValue(obj[key]);
            }
        });
        return obj;
    };
    EncryptService.prototype.encryptValue = function (value) {
        var keyObj = __WEBPACK_IMPORTED_MODULE_1_jsrsasign__["KEYUTIL"].getKey(this.key); //this.session.keys[0]);//sessionObj.keys[0]);
        var hex = __WEBPACK_IMPORTED_MODULE_1_jsrsasign__["KJUR"].crypto.Cipher.encrypt(value, keyObj);
        return '{enc}' + Object(__WEBPACK_IMPORTED_MODULE_1_jsrsasign__["hextob64"])(hex);
    };
    EncryptService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EncryptService);
    return EncryptService;
}());



/***/ }),

/***/ "./src/assets/resources/codeExplorer.json":
/***/ (function(module, exports) {

module.exports = {"sessionInfo":"Session Information","createValidSession":"Learn more about creating a valid session","dataSourceConfig":"Data source configuration","workWithOwnDatasource":"Learn how to work with your own datasource","dashboardMode":"Dashboard Mode"}

/***/ }),

/***/ "./src/assets/resources/dialog.json":
/***/ (function(module, exports) {

module.exports = {"dashboardingExp":"Dashboarding Experience","doNotDisplayAgain":"Do not display again"}

/***/ }),

/***/ "./src/assets/resources/instrumentation.json":
/***/ (function(module, exports) {

module.exports = {"actions":{"createdSession":{"name":"createdSession","message":"Session created successfully. Next, create and initialize the API framework.","processType":"API Framework"},"initializedSession":{"name":"initializedSession","message":"API created successfully. You can now create or open a dashboard.","processType":"API Framework"},"registeredApiCallback":{"name":"registeredApiCallback","message":"API Callback registered successfully. See console for details.","processType":"API Framework"},"unregisteredApiCallback":{"name":"unregisteredApiCallback","message":"API Callback unregistered successfully. See console for details.","processType":"API Framework"},"closedAPIFramework":{"name":"closedAPIFramework","message":"API Framework closed successfully. See console for details.","processType":"API Framework"},"opened":{"name":"openedDashboard","message":"Successfully opened a dashboard.","processType":"Dashboard Factory"},"createdNew":{"name":"createdNewDashboard","message":"Successfully created a new dashboard.","processType":"Dashboard Factory"},"addSource":{"name":"addSource","message":"Successfully added a source","processType":"Dashboard API"},"editMode":{"name":"editMode","message":"Successfully changed modes","processType":"Dashboard API"},"viewMode":{"name":"viewMode","message":"Successfully changed modes","processType":"Dashboard API"},"groupEditMode":{"name":"groupEditMode","message":"Successfully changed modes","processType":"Dashboard API"},"undo":{"name":"undo","message":"Successfully called undo","processType":"Dashboard API"},"redo":{"name":"redo","message":"Successfully called redo","processType":"Dashboard API"},"toggleProperties":{"name":"Toggle Properties","message":"Successfully toggled properties pane","processType":"Dashboard API"},"getSpecs":{"name":"gotDashboardSpecs","message":"Dashboard spec retrieved successfully. See console for details.","processType":"Support API"},"clearDirtyState":{"name":"clearedDirtyState","message":"Dirty State cleared successfully. See console for details.","processType":"Support API"},"updateDataDefinition":{"name":"updatedDataSourceDefinitions","message":"Module Definitions updated successfully. See console for details.","processType":"Support API"},"registerDashboardCallback":{"name":"registerDashboardCallback","message":"Dashboard callback registered successfully. See console for details.","processType":"Support API"},"unregisterDashboardCallback":{"name":"unregisterDashboardCallback","message":"Dashboard callback unregistered successfully. See console for details.","processType":"Support API"},"clickedHelpResource":{"name":"clickedHelpResource","message":"Successfully clicked a help resource link","processType":"Documentation"}},"documents":{"createInstance":"Create Your Own Instance","gettingStartedDocs":"Getting Started Docs","video":"Overview Video","devworks":"DevWorks Community","github":"Github Demo","termsOfUse":"Terms of Use","workWithDatasource":"Work with Your Own Datasource","creatingValidSession":"Creating a valid session"},"errorMessage":"An error has occured. Please check the console log for more details.","invalidCodeSnippet":"Invalid code snippet selection","runButton":"Run Button","actionButton":"Action Button","devPageName":"DDE Dev Experience","endUserPageName":"DDE End-User Experience","categoryValue":"Offering Interface","productTitle":"Cognos Dashboard Embedded","ranProcessTrack":"Ran Process","videoPlaybackCompleted":"Video Playback Completed","videoPlaybackStarted":"Video Playback Started"}

/***/ }),

/***/ "./src/assets/resources/menu.json":
/***/ (function(module, exports) {

module.exports = {"setUpAPI":"1. Set the API framework","createSession":"Create a session","initAPI":"Initialize the API framework","registerAPI":"Register callback to API event","unregisterAPI":"Unregister callback to API event","closeAPI":"Close the API framework","openCreateDashbaord":"2. Open or create dashboard","openDashboard":"Open dashboard","createDashboard":"Create dashboard","dashboardInteraction":"3. Dashboard interactions","addSource":"Add data source","setMode":"Set dashboard mode","undoLastChange":"Undo last change","redoLastChange":"Redo last change","toggleProperties":"Toggle properties pane","supportAPI":"4. Support APIs","getDashboardSpecs":"Get dashboard specification","clearDirtyState":"Clear dashboard dirty state","updateDataDefinition":"Update data source definition","registerDashboard":"Register callback to dashboard event","unregisterDashboard":"Unregister callback to dashboard event","sessionTooltip":"A session is an authorized 60 minute window where unlimited dashboard interactions can take place","initAPITooltip":"Initialization needs to occur within 60 seconds of session creation.","registerAPITooltip":"Provides the ability for your application to handle an error in the framework.","unregisterAPITooltip":"Removes the callback for handling errors.","openDashboardTooltip":"Dashboards that have been previously saved by your application can be loaded by this API.","createDashboardTooltip":"Select from a variety of blank templates to construct a dashboard from your data sources.","addSourceTooltip":"Required when you create a new dashboard and can be used to add more data to an existing dashboard.","setModeTooltip":"View / Edit mode allows your users a different level of access to a dashboard.","toggleTooltip":"Customize a dashboards look and feel by accessing the properties pane.","getDashboardSpecTooltip":"Generates the dashboard specification that can be saved and later used to open the dashboard.","clearDirtyTooltip":"Clear this state in order to help keep track of the need to save dashboards.","updateDataDefinitionTooltip":"If your data source has changed since the last time your dashboard was opened, update the data source.","registerDashboardTooltip":"Provides the ability for your application to react to an add data button click and a change to a dirty state.","unregisterDashboardTooltip":"Removes the callback from events add data button click and change to a dirty state."}

/***/ }),

/***/ "./src/assets/resources/references.json":
/***/ (function(module, exports) {

module.exports = {"createInstance":"Create your instance","gettingStartedDocs":"Getting started documentation","devWorksCommunity":"Join the DevWorks Community","watchVideo":"Watch end-user experience","termsOfUse":"Terms of use","viewGithubRepo":"View demo on Github"}

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    cognos_api_js: 'https://ddetest-us-south.analytics.ibm.com/daas/CognosApi.js',
    //cognos_root_url: 'https://ddetest-us-south.analytics.ibm.com/daas/',
    cognos_root_url: 'https://dde-us-south.analytics.ibm.com/daas/',
    //For proxy mode
    //cognos_api_js: 'http://localhost:3000/daas/CognosApi.js',
    //cognos_root_url: 'http://localhost:3000/daas/',
    toaster_timer: 5000,
    segment_key: "${SEGMENT_KEY}",
    version: '1.0.0',
    bluemix_analytics_js: 'https://console.cdn.stage1.s-bluemix.net/analytics/build/bluemix-analytics.min.js'
};


/***/ }),

/***/ "./src/instrumentation/analytics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__segment__ = __webpack_require__("./src/instrumentation/segment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};


var AnalyticsService = /** @class */ (function () {
    function AnalyticsService() {
    }
    AnalyticsService.prototype.setupSegment = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__segment__["b" /* setUp */]({
                            'segment_key': key,
                            'coremetrics': false,
                            'optimizely': false,
                            'googleAddServices': false,
                            'addRoll': false,
                            'fullStory': false,
                            'autoPageView': false,
                            'skipIdentify': false
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnalyticsService.prototype.setSession = function (sessionId) {
        this.sessionId = sessionId;
    };
    AnalyticsService.prototype.loadPage = function (category, name) {
        __WEBPACK_IMPORTED_MODULE_1__segment__["a" /* page */](category, name);
    };
    AnalyticsService.prototype.sendTrack = function (eventName, traits) {
        __WEBPACK_IMPORTED_MODULE_1__segment__["c" /* track */](eventName, traits);
    };
    AnalyticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ "./src/instrumentation/segment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = setUp;
/* harmony export (immutable) */ __webpack_exports__["a"] = page;
/* harmony export (immutable) */ __webpack_exports__["c"] = track;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
function setUp(options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            window._analytics = options;
            return [2 /*return*/];
        });
    });
}
function page(name, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, waitForBluemixAnalyticsLoad()];
                case 1:
                    _a.sent();
                    if (window.bluemixAnalytics) {
                        window.bluemixAnalytics.pageEvent(name, options);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function track(name, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, waitForBluemixAnalyticsLoad()];
                case 1:
                    _a.sent();
                    if (window.bluemixAnalytics) {
                        window.bluemixAnalytics.trackEvent(name, options);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function sleep(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
        });
    });
}
function waitForBluemixAnalyticsLoad() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep(100)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (window.bluemixAnalytics === undefined) return [3 /*break*/, 0];
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/model/code-snippet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CodeSnippetEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeSnippet; });
var CodeSnippetEnum;
(function (CodeSnippetEnum) {
    CodeSnippetEnum["None"] = "None";
    CodeSnippetEnum["CreateSession"] = "CreateSession";
    CodeSnippetEnum["CreateAPIFramework"] = "CreateAPIFramework";
    CodeSnippetEnum["CreateDashboard"] = "CreateDashboard";
    CodeSnippetEnum["OpenDashboard"] = "OpenDashboard";
    CodeSnippetEnum["AddCSVSource"] = "AddCSVSource";
    CodeSnippetEnum["AddProtectedCSVSource"] = "AddProtectedCSVSource";
    CodeSnippetEnum["AddBikeShareWeatherCSVSource"] = "AddBikeShareWeatherCSVSource";
    CodeSnippetEnum["AddBikeShareRidesDemographCSVSource"] = "AddBikeShareRidesDemographCSVSource";
    CodeSnippetEnum["DashboardEditMode"] = "DashboardEditMode";
    CodeSnippetEnum["DashboardViewMode"] = "DashboardViewMode";
    CodeSnippetEnum["DashboardEditGroupMode"] = "DashboardEditGroupMode";
    CodeSnippetEnum["UndoLastAction"] = "UndoLastAction";
    CodeSnippetEnum["RedoLastAction"] = "RedoLastAction";
    CodeSnippetEnum["TogglePropertiesPane"] = "TogglePropertiesPane";
    CodeSnippetEnum["GetDashboardSpec"] = "GetDashboardSpec";
    CodeSnippetEnum["UpdateModuleDefinitions"] = "UpdateModuleDefinitions";
    CodeSnippetEnum["ClearDirtyState"] = "ClearDirtyState";
    CodeSnippetEnum["RegisterCallback"] = "RegisterCallback";
    CodeSnippetEnum["UnregisterCallback"] = "UnregisterCallback";
    CodeSnippetEnum["RegisterApiCallback"] = "RegisterApiCallback";
    CodeSnippetEnum["UnregisterApiCallback"] = "UnregisterApiCallback";
    CodeSnippetEnum["CloseApiFramework"] = "CloseApiFramework";
})(CodeSnippetEnum || (CodeSnippetEnum = {}));
var CodeSnippet = /** @class */ (function () {
    function CodeSnippet(selection, size, disableRun) {
        this.selection = selection;
        this.size = size;
        this.disableRun = disableRun;
    }
    return CodeSnippet;
}());



/***/ }),

/***/ "./src/model/dashboard-mode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DashboardMode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ViewMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGroupMode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code_snippet__ = __webpack_require__("./src/model/code-snippet.ts");

var DashboardMode = /** @class */ (function () {
    function DashboardMode(type, value) {
        this.type = type;
        this.value = value;
    }
    return DashboardMode;
}());

var EditMode = new DashboardMode('Edit', __WEBPACK_IMPORTED_MODULE_0__code_snippet__["b" /* CodeSnippetEnum */].DashboardEditMode);
var ViewMode = new DashboardMode('View', __WEBPACK_IMPORTED_MODULE_0__code_snippet__["b" /* CodeSnippetEnum */].DashboardViewMode);
var EditGroupMode = new DashboardMode('EditGroup', __WEBPACK_IMPORTED_MODULE_0__code_snippet__["b" /* CodeSnippetEnum */].DashboardEditGroupMode);


/***/ }),

/***/ "./src/model/data-source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataSources */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CSVDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProtectedCSVDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BikeShareWeatherCSVSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeShareRidesDemographCSVSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code_snippet__ = __webpack_require__("./src/model/code-snippet.ts");

var DataSources = /** @class */ (function () {
    function DataSources(type, value) {
        this.type = type;
        this.value = value;
    }
    return DataSources;
}());

var CSVDataSource = new DataSources('Sample CSV', __WEBPACK_IMPORTED_MODULE_0__code_snippet__["b" /* CodeSnippetEnum */].AddCSVSource);
var ProtectedCSVDataSource = new DataSources('Sample Protected CSV', __WEBPACK_IMPORTED_MODULE_0__code_snippet__["b" /* CodeSnippetEnum */].AddProtectedCSVSource);
var BikeShareWeatherCSVSource = new DataSources('Bike Share Weather CSV', __WEBPACK_IMPORTED_MODULE_0__code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareWeatherCSVSource);
var BikeShareRidesDemographCSVSource = new DataSources('Bike Share Rides Demographics CSV', __WEBPACK_IMPORTED_MODULE_0__code_snippet__["b" /* CodeSnippetEnum */].AddBikeShareRidesDemographCSVSource);
//export const DB2DataSource = new DataSources('DB2', CodeSnippetEnum.AddDB2Source);
//export const ProtectedDB2DataSource = new DataSources('Protected DB2', CodeSnippetEnum.AddProtectedDB2Source);


/***/ }),

/***/ "./src/model/session.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SessionKey; });
var Session = /** @class */ (function () {
    function Session() {
    }
    return Session;
}());

var SessionKey = /** @class */ (function () {
    function SessionKey(key) {
        this.alg = key.alg;
        this.e = key.e;
        this.kid = key.kid;
        this.kty = key.kty;
        this.n = key.n;
        this.use = key.use;
    }
    return SessionKey;
}());



/***/ }),

/***/ "./src/model/toaster.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toaster; });
var Toaster = /** @class */ (function () {
    function Toaster(message, type, showToaster) {
        this.message = message;
        this.type = type;
        this.showToaster = showToaster;
    }
    return Toaster;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map