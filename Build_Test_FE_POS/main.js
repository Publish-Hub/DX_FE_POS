"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.guard */ 98063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
// ──────────────────────────────────────────────────────
// LOGIN / PUBLIC ROUTES
// ──────────────────────────────────────────────────────
{
  path: 'login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_free-regular-svg-icons_index_mjs"), __webpack_require__.e("default-node_modules_ng-connection-service___ivy_ngcc___fesm2015_ng-connection-service_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_auth_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/login/login.module */ 28990)).then(m => m.LoginModule)
}, {
  path: 'CreatePassword',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_free-regular-svg-icons_index_mjs"), __webpack_require__.e("src_app_auth_create-pass_create-pass_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/create-pass/create-pass.module */ 94047)).then(m => m.CreatePassModule)
}, {
  path: 'forgot-password',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/forgot-password/forgot-password.module */ 66377)).then(m => m.ForgotPasswordModule)
}, {
  path: 'createPassword2',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_create-password_create-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/create-password/create-password.module */ 60511)).then(m => m.CreatePasswordModule)
}, {
  path: 'ResetPassword',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fortawesome_free-regular-svg-icons_index_mjs"), __webpack_require__.e("default-node_modules_ng-connection-service___ivy_ngcc___fesm2015_ng-connection-service_js"), __webpack_require__.e("src_app_auth_reset-password_reset-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/reset-password/reset-password.module */ 67870)).then(m => m.ResetPasswordModule)
},
// ──────────────────────────────────────────────────────
// PROTECTED APP AREA (requires token or SSO cookie)
// ──────────────────────────────────────────────────────
{
  path: '',
  canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard],
  canActivateChild: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authChildGuard],
  canMatch: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authMatchGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(m => m.DashboardModule)
}, {
  path: 'dashboard',
  canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard],
  canActivateChild: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authChildGuard],
  canMatch: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authMatchGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(m => m.DashboardModule)
},
// ──────────────────────────────────────────────────────
// WILDCARD / FALLBACK
// ──────────────────────────────────────────────────────
{
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_utility_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/utility-service.service */ 48766);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 17217);




class AppComponent {
  constructor(utilityServiceService, router) {
    this.utilityServiceService = utilityServiceService;
    this.router = router;
    this.broadcastChannel();
  }
  ngOnInit() {
    //if (!sessionStorage.getItem('token')) {
    //  console.log('aaaaaaaaaaaaaaaaaaaaaaaaa')
    //  return;
    //}
  }
  broadcastChannel() {
    let splittedArr = window.location.origin.split('.');
    let matchValue = '';
    if (splittedArr.length > 0) matchValue = `.${splittedArr[splittedArr.length - 2]}.${splittedArr[splittedArr.length - 1]}`;else matchValue = 'http://localhost:4200'; //Because i am running this project on port 4200
    const bc = new BroadcastChannel(matchValue);
    bc.onmessage = event => {
      console.log(event);
      if (event.data === `firstTab`) {
        bc.postMessage(`newTab`);
      }
      if (event.data === `newTab`) {
        alert('Application does not allow multiple tabs please close this tab ');
        window.open(window.location.origin, "_self");
        sessionStorage.removeItem('token');
      }
    };
    bc.postMessage(`firstTab`);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_utility_service_service__WEBPACK_IMPORTED_MODULE_0__.UtilityServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  consts: [["bdColor", "rgba(0, 0, 0, 0.7)", "template", "<i class='fa-solid fa-circle-notch fa-spin fa-3x primary-clr'></i>"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-spinner", 0)(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerComponent],
  encapsulation: 2
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/angular-jwt */ 67193);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-tel-input */ 79453);
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/httpservice.service */ 79345);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 74448);
/* harmony import */ var src_app_services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/header.service */ 36690);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_character_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/character.directive */ 31293);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _interceptors_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/jwt */ 52297);
/* harmony import */ var _interceptors_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/error */ 70810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);


























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [{
    provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__.JWT_OPTIONS,
    useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__.JWT_OPTIONS
  }, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__.JwtHelperService, _services_httpservice_service__WEBPACK_IMPORTED_MODULE_3__.HttpserviceService, src_app_services_header_service__WEBPACK_IMPORTED_MODULE_4__.HeaderService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
    useClass: _interceptors_jwt__WEBPACK_IMPORTED_MODULE_7__.JwtInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
    useClass: _interceptors_error__WEBPACK_IMPORTED_MODULE_8__.ErrorInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ng2_tel_input__WEBPACK_IMPORTED_MODULE_2__.Ng2TelInputModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule.forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginationModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _agm_core__WEBPACK_IMPORTED_MODULE_21__.AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAAQ7GPIxJs5PTBccmO9OZwBUy464p59bY',
    libraries: ['places']
  }), ng2_charts__WEBPACK_IMPORTED_MODULE_22__.NgChartsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _services_character_directive__WEBPACK_IMPORTED_MODULE_5__.CharacterDirective],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ng2_tel_input__WEBPACK_IMPORTED_MODULE_2__.Ng2TelInputModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_18__.PaginationModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _agm_core__WEBPACK_IMPORTED_MODULE_21__.AgmCoreModule, ng2_charts__WEBPACK_IMPORTED_MODULE_22__.NgChartsModule]
  });
})();

/***/ }),

/***/ 16518:
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared.service */ 69082);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token-storage.service */ 11573);







class AuthService {
  constructor(http, sharedService, tokenStore) {
    this.http = http;
    this.sharedService = sharedService;
    this.tokenStore = tokenStore;
    this.apiUrl = this.sharedService.getUrl;
    this.refreshUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.masterBaseUrl?.replace(/\/+$/, '')}/User/RefreshThirdPartyToken`;
    this._isRefreshing = false;
    this._tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
  }
  ResetPassword(body) {
    return this.http.post(`${this.apiUrl}User/ResetPassword`, body);
  }
  TestEmailLinkExpiration(body, userId) {
    return this.http.post(`${this.apiUrl}User/TestEmailLinkExpiration?userId=${userId}`, body);
  }
  ForgetPassword(body, email) {
    return this.http.post(`${this.apiUrl}User/SendResetPasswordLink?email=${email}`, body);
  }
  GetUserDetails(id) {
    return this.http.get(`${this.apiUrl}User/GetUSERDetails?userId=${id}`);
  }
  autoLoginLocal() {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bypassAuth && _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.staticAuth?.token) {
      const s = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.staticAuth;
      localStorage.setItem('token', s.token);
      localStorage.setItem('userid', String(s.UserID));
      localStorage.setItem('fullName', s.UserName);
      localStorage.setItem('role', JSON.stringify({
        name: 'Developer',
        roleId: 0
      }));
      localStorage.setItem('branch', JSON.stringify({
        branchId: 0,
        branchName: 'Local Dev'
      }));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
  }
  refreshToken(refreshToken) {
    this._isRefreshing = true;
    this._tokenSubject.next(null);
    const body = {
      RefreshToken: refreshToken
    };
    return this.http.post(this.refreshUrl, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
      if (!res?.Status || !res?.Data?.AccessToken) {
        throw new Error(res?.Message || res?.Error || 'Invalid refresh response');
      }
      // Save new cookies (MarkaziaAccessToken / MarkaziaRefreshToken)
      this.tokenStore.ssoAccessTokenSet(res.Data.AccessToken);
      if (res.Data.RefreshToken) {
        this.tokenStore.ssoRefreshTokenSet(res.Data.RefreshToken);
      }
      // Notify interceptors / guard waiting on new token
      this._tokenSubject.next(res.Data.AccessToken);
      return {
        accessToken: res.Data.AccessToken,
        refreshToken: res.Data.RefreshToken
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this._isRefreshing = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
      console.error('[AuthService.refreshToken] Error:', err);
      this._isRefreshing = false;
      this.tokenStore.signOut();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => err);
    }));
  }
  getRefreshState() {
    return {
      isRefreshing: this._isRefreshing,
      tokenSubject: this._tokenSubject.asObservable()
    };
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 43346:
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/services/collect.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectService": () => (/* binding */ CollectService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);



class CollectService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
    this.apiUrl2 = this.sharedService.getUrl2;
  }
  GetRegisterDetails(id) {
    return this.http.get(this.apiUrl + `Register/GetRegisterDetails?Id=${id}`, this.sharedService.getHeaders());
  }
  //RETURN ORDER START
  //SERIVCE ORDERS
  getReturnServiceOrderRefundDetails(id) {
    return this.http.get(this.apiUrl + `ServiceLayerReturnOrder/GetReturnOrderRefundDetails?OrderID=${id}`, this.sharedService.getHeaders());
  }
  getServicesReturnOrders(params) {
    return this.http.get(this.apiUrl + `ServiceLayerReturnOrder/GetServiceReturnOrders?${params}`, this.sharedService.getHeaders());
  }
  cashierRefundServiceOrder(payload) {
    return this.http.post(this.apiUrl + 'ServiceLayerReturnOrder/CashierRefundServiceOrder', payload, this.sharedService.getHeaders());
  }
  sendServiceReturnOrderToTreasury(payload) {
    return this.http.post(this.apiUrl + 'ServiceLayerReturnOrder/SendServiceReturnOrderToTreasury', payload, this.sharedService.getHeaders());
  }
  //DIRECT PAYMENT RETURN ORDERS
  getReturnDpOrderRefundDetails(id) {
    return this.http.get(this.apiUrl + `DirectPaymentReturnOrder/GetReturnOrderRefundDetails?OrderID=${id}`, this.sharedService.getHeaders());
  }
  getDpReturnOrders(params) {
    return this.http.get(this.apiUrl + `DirectPaymentReturnOrder/GetReturnOrders${params}`, this.sharedService.getHeaders());
  }
  rejectDpReturnOrder(payload) {
    return this.http.post(this.apiUrl + 'DirectPaymentReturnOrder/RejectReturnOrder', payload, this.sharedService.getHeaders());
  }
  dPCashierFullRefundOrder(payload) {
    return this.http.post(this.apiUrl + 'DirectPaymentReturnOrder/CashierFullRefundOrder', payload, this.sharedService.getHeaders());
  }
  dpSignInvoice(payload) {
    return this.http.post(this.apiUrl + 'DirectPaymentReturnOrder/SignRefundInvoice', payload, this.sharedService.getHeaders());
  }
  sendReturnDpOrderToTreasury(payload) {
    return this.http.post(this.apiUrl + 'DirectPaymentReturnOrder/SendReturnOrderToTreasury', payload, this.sharedService.getHeaders());
  }
  dpTreasuryFullRefundByCheque(payload) {
    return this.http.post(this.apiUrl + 'DirectPaymentReturnOrder/TreasuryFullRefundByCheque', payload, this.sharedService.getHeaders());
  }
  dpTreasuryFullRefundByBankTransfer(payload) {
    return this.http.post(this.apiUrl + 'DirectPaymentReturnOrder/TreasuryFullRefundByBankTransfer', payload, this.sharedService.getHeaders());
  }
  addFollowUp(payload) {
    return this.http.post(this.apiUrl + 'PromiseryNotes/AddFollowUp', payload, this.sharedService.getHeaders());
  }
  receivePNByCustomer(payload) {
    return this.http.post(this.apiUrl + 'PromiseryNotes/ReceivePNByCustomer', payload, this.sharedService.getHeaders());
  }
  serviceSignRefundInvoice(payload) {
    return this.http.post(this.apiUrl + 'ServiceLayerReturnOrder/SignRefundInvoice', payload, this.sharedService.getHeaders());
  }
  treasuryRefundServiceOrderByCheque(payload) {
    return this.http.post(this.apiUrl + 'ServiceLayerReturnOrder/TreasuryRefundServiceOrderByCheque', payload, this.sharedService.getHeaders());
  }
  treasuryServiceLayerOrderByBankTransfer(payload) {
    return this.http.post(this.apiUrl + 'ServiceLayerReturnOrder/TreasuryServiceLayerOrderByBankTransfer', payload, this.sharedService.getHeaders());
  }
  getServiceReturnOrderRefundDetails(id) {
    return this.http.get(this.apiUrl + `ServiceLayerReturnOrder/GetReturnOrderRefundDetails?OrderID=${id}`, this.sharedService.getHeaders());
  }
  rejectServicesReturnOrder(payload) {
    return this.http.post(this.apiUrl + 'ServiceLayerReturnOrder/RejectReturnOrder', payload, this.sharedService.getHeaders());
  }
  //SERIVCE ORDERS END
  rejectSparePartsReturnOrder(payload) {
    return this.http.post(this.apiUrl + 'SparePartsReturnOrder/RejectReturnOrder', payload, this.sharedService.getHeaders());
  }
  uploadCreditRefund(payload) {
    return this.http.post(this.apiUrl + 'SparePartsReturnOrder/UploadCreditRefund', payload, this.sharedService.getHeaders());
  }
  getSparePartsReturnOrders(params) {
    return this.http.get(this.apiUrl + `SparePartsReturnOrder/GetSparePartsReturnOrders?${params}`, this.sharedService.getHeaders());
  }
  getSparePartsReturnOrdersPrts(id) {
    return this.http.get(this.apiUrl + `SparePartsReturnOrder/GetDparePartsReturnOrdersPrts?sparePartsSalesOrderOpportunityId=${id}&PageNo=0&PageSize=6`, this.sharedService.getHeaders());
  }
  getSparePartsReturnOrdersPrtsV2(id) {
    return this.http.get(this.apiUrl + `SparePartsReturnOrder/GetDparePartsReturnOrdersPrtsV2?sparePartsSalesOrderOpportunityId=${id}&PageNo=0&PageSize=1000`, this.sharedService.getHeaders());
  }
  getReturnOrderRefundDetails(id) {
    return this.http.get(this.apiUrl + `SparePartsReturnOrder/GetReturnOrderRefundDetails?OrderID=${id}`, this.sharedService.getHeaders());
  }
  cashierFullRefundSparePartsOrder(payload) {
    return this.http.post(this.apiUrl + 'SparePartsReturnOrder/CashierFullRefundSparePartsOrder', payload, this.sharedService.getHeaders());
  }
  sendSparePartsReturnOrderToTreasury(payload) {
    return this.http.post(this.apiUrl + 'SparePartsReturnOrder/SendSparePartsReturnOrderToTreasury', payload, this.sharedService.getHeaders());
  }
  treasuryFullRefundSparePartsOrderByCheque(payload) {
    return this.http.post(this.apiUrl + 'SparePartsReturnOrder/TreasuryFullRefundSparePartsOrderByCheque', payload, this.sharedService.getHeaders());
  }
  treasuryFullRefundSparePartsOrderByBankTransfer(payload) {
    return this.http.post(this.apiUrl + 'SparePartsReturnOrder/TreasuryFullRefundSparePartsOrderByBankTransfer', payload, this.sharedService.getHeaders());
  }
  signRefundInvoice(payload) {
    return this.http.post(this.apiUrl + 'SparePartsReturnOrder/SignRefundInvoice', payload, this.sharedService.getHeaders());
  }
  collectZeroReturnOrder(payload) {
    return this.http.post(this.apiUrl + 'SparePartsReturnOrder/CollectZeroReturnOrder', payload, this.sharedService.getHeaders());
  }
  viewReturnOrderOrigionalInvoice(payload) {
    return this.http.post(this.apiUrl + 'Cashier/ViewReturnOrderOrigionalInvoice', payload, this.sharedService.getHeaders());
  }
  viewServiceLayerReturnOrderOrigionalInvoice(payload) {
    return this.http.post(this.apiUrl + 'Cashier/ViewServiceLayerReturnOrderOrigionalInvoice', payload, this.sharedService.getHeaders());
  }
  //RETURN END
  getBanks() {
    return this.http.get(this.apiUrl + `BankAccount/GetBanks?pageNo=0&status=2001&pageSize=1000`, this.sharedService.getHeaders());
  }
  getMarkaziaCustomers(search, isCreditCustomer) {
    return this.http.get(this.apiUrl + `Customer/GetMarkaziaCustomers?Search=${search}&CustomerCredit=${isCreditCustomer}&PageNo=0&PageSize=1000`, this.sharedService.getHeaders());
  }
  addMarkaziaCustomer(payload) {
    return this.http.post(this.apiUrl + 'Customer/AddMarkaziaCustomer', payload, this.sharedService.getHeaders());
  }
  getRegisterPaymentTypesForOrders(registerId, orderTypeId) {
    return this.http.get(this.apiUrl + `Register/GetRegisterPaymentTypesForOrders?RegisterId=${registerId}&OrderTypeId=${orderTypeId}&PageNo=0&PageSize=20`, this.sharedService.getHeaders());
  }
  getCustomerPaymentsOrderDetails(id) {
    return this.http.get(this.apiUrl + `CustomerPayment/GetCustomerPaymentsOrderDetails?orderId=${id}`, this.sharedService.getHeaders());
  }
  GetServicesSalesOrders(orderNo, status, id, searchText, vin, serviceAdvisorId, customerId, sort, pageNo) {
    let url = `SalesOrders/GetServicesSalesOrders?orderNo=${orderNo}&status=${status || ''}&BranchId=${id || 0}&Customer=${searchText}&Vin=${vin}&ServiceAdvisorId=${serviceAdvisorId}&sort=${sort}`;
    if (customerId > 0) {
      //IN CASE OF MULTI COLLECT 
      url += `&customerId=${customerId}&PageNo=0&PageSize=1000`;
    } else {
      url += `&PageNo=${pageNo - 1}&PageSize=6`;
    }
    return this.http.get(this.apiUrl + url, this.sharedService.getHeaders());
  }
  GetDirectPaymentSalesOrders(orderNo, status, id, searchText, vin, salesConsultantId, customerId, sort, pageNo) {
    let url = `SalesOrders/GetDirectPaymentSalesOrders?orderNo=${orderNo}&status=${status || ''}&BranchId=${id || 0}&Customer=${searchText}&Vin=${vin}&SalesConsultantId=${salesConsultantId}&sort=${sort}`;
    if (customerId > 0) {
      //IN CASE OF MULTI COLLECT 
      url += `&customerId=${customerId}&PageNo=0&PageSize=1000`;
    } else {
      url += `&PageNo=${pageNo - 1}&PageSize=6`;
    }
    return this.http.get(this.apiUrl + url, this.sharedService.getHeaders());
  }
  GetSparePartsSalesOrders(orderNo, status, id, searchText, vin, salesConsultantId, customerId, sort, pageNo) {
    let url = `SalesOrders/GetSparePartsSalesOrders?orderNo=${orderNo}&status=${status || ''}&BranchId=${id || 0}&Customer=${searchText}&Vin=${vin}&SalesConsultantId=${salesConsultantId}&sort=${sort}`;
    if (customerId > 0) {
      //IN CASE OF MULTI COLLECT 
      url += `&customerId=${customerId}&PageNo=0&PageSize=1000`;
    } else {
      url += `&PageNo=${pageNo - 1}&PageSize=6`;
    }
    return this.http.get(this.apiUrl + url, this.sharedService.getHeaders());
  }
  GetOtherRevenues(receiptNo, id, searchText, amount, sort, pageNo) {
    return this.http.get(this.apiUrl + `OtherRevenue/GetOtherRevenuesOrders?receiptNo=${receiptNo}&categoryId=${id}&Customer=${searchText}&amouunt=${amount}&sort=${sort}&PageNo=${pageNo - 1}&PageSize=6`, this.sharedService.getHeaders());
  }
  getCustomerPaymentsOrders(receiptNo, id, searchText, amount, sort, pageNo) {
    return this.http.get(this.apiUrl + `CustomerPayment/GetCustomerPaymentsOrders?receiptNo=${receiptNo}&Customer=${searchText}&CategoryId=${id}&Amouunt=${amount}&Sort=${sort}&PageNo=${pageNo - 1}&PageSize=6`, this.sharedService.getHeaders());
  }
  getInHouceFinancingSalesOrders(status, id, searchText, vin, salesConsultantId, inhouseCardNumber, customerId, sort, pageNo) {
    let url = `SalesOrders/GetInHouceFinancingSalesOrders?status=${status || ''}&BranchId=${id || 0}&Customer=${searchText}&Vin=${vin}&SalesConsultantId=${salesConsultantId}&InhouseCard=${inhouseCardNumber}&sort=${sort}`;
    if (customerId > 0) {
      //IN CASE OF MULTI COLLECT 
      url += `&customerId=${customerId}&PageNo=0&PageSize=1000`;
    } else {
      url += `&PageNo=${pageNo - 1}&PageSize=6`;
    }
    return this.http.get(this.apiUrl + url, this.sharedService.getHeaders());
  }
  getBanksUnderTakingSalesOrders(status, id, searchText, vin, salesConsultantId, bankCard, customerId, sort, pageNo) {
    let url = `SalesOrders/GetBanksUnderTakingSalesOrders?status=${status || ''}&BranchId=${id || 0}&SalesConsultantId=${salesConsultantId}&Customer=${searchText}&Vin=${vin}&BankCard=${bankCard}&Sort=${sort}`;
    if (customerId > 0) {
      //IN CASE OF MULTI COLLECT 
      url += `&customerId=${customerId}&PageNo=0&PageSize=1000`;
    } else {
      url += `&PageNo=${pageNo - 1}&PageSize=6`;
    }
    return this.http.get(this.apiUrl + url, this.sharedService.getHeaders());
  }
  getTransferFeesOrders(params) {
    return this.http.get(this.apiUrl + `TransferFeesOrder/GetTransferFeesOrders${params}`, this.sharedService.getHeaders());
  }
  getPNOrdersBooks(params) {
    return this.http.get(this.apiUrl + `PromiseryNotes/GetPNOrdersBooks${params}`, this.sharedService.getHeaders());
  }
  getPNOrdersBooksPNS(params) {
    return this.http.get(this.apiUrl + `PromiseryNotes/GetPNOrdersBooksPNS${params}`, this.sharedService.getHeaders());
  }
  getOrdersEarlySettlement(params) {
    return this.http.get(this.apiUrl + `PromiseryNotes/GetOrdersEarlySettlement${params}`, this.sharedService.getHeaders());
  }
  getOrdersEarlySettlementNotes(params) {
    return this.http.get(this.apiUrl + `PromiseryNotes/GetOrdersEarlySettlementNotes${params}`, this.sharedService.getHeaders());
  }
  uploadFile(payload) {
    return this.http.post(this.apiUrl + 'Upload/UpdateFile', payload, this.sharedService.getHeaders());
  }
  AddOtherRevenueOrders(payload) {
    return this.http.post(this.apiUrl + 'OtherRevenue/AddOtherRevenueOrders', payload, this.sharedService.getHeaders());
  }
  addOtherRevenueOrdersV2(payload) {
    return this.http.post(this.apiUrl + 'OtherRevenue/AddOtherRevenueOrdersV2', payload, this.sharedService.getHeaders());
  }
  addCustomerPaymentOrders(payload) {
    return this.http.post(this.apiUrl + 'CustomerPayment/AddCustomerPaymentOrders', payload, this.sharedService.getHeaders());
  }
  collectionOrderV2PNOrder(payload) {
    return this.http.post(this.apiUrl + 'Cashier/CollectionOrderV2PNOrder', payload, this.sharedService.getHeaders());
  }
  GetServicesSalesOrderDetails(id) {
    return this.http.get(this.apiUrl + `SalesOrders/GetServicesSalesOrderDetails?salesOrderId=${id}`, this.sharedService.getHeaders());
  }
  GetDirectPaymentSalesOrdersDetails(id) {
    return this.http.get(this.apiUrl + `SalesOrders/GetDirectPaymentSalesOrdersDetails?directPaymentSalesOrderOpportunityNo=${id}`, this.sharedService.getHeaders());
  }
  GetSparePartsSalesOrdersDetails(id) {
    return this.http.get(this.apiUrl + `SalesOrders/GetSparePartsSalesOrdersDetails?sparePartsSalesOrderOpportunityNo=${id}`, this.sharedService.getHeaders());
  }
  getBanksUnderTakingSalesOrdersDetails(id) {
    return this.http.get(this.apiUrl + `SalesOrders/GetBanksUnderTakingSalesOrdersDetails?banksUnderTakingSalesOrderOpportunityNo=${id}`, this.sharedService.getHeaders());
  }
  getInHouseFinancingSalesOrdersDetails(id) {
    return this.http.get(this.apiUrl + `SalesOrders/GetInHouseFinancingSalesOrdersDetails?OpportunityNo=${id}`, this.sharedService.getHeaders());
  }
  GetServicesSalesOrderSpareparts(id, pageNo) {
    return this.http.get(this.apiUrl + `SalesOrders/GetServicesSalesOrderSpareparts?servicesSalesOrderNo=${id}&PageNo=${pageNo}&PageSize=3`, this.sharedService.getHeaders());
  }
  GetServicesSalesOrderLabors(id, pageNo) {
    return this.http.get(this.apiUrl + `SalesOrders/GetServicesSalesOrderLabors?servicesSalesOrderNo=${id}&PageNo=${pageNo}&PageSize=3`, this.sharedService.getHeaders());
  }
  GetServicesSalesOrderSublets(id, pageNo) {
    return this.http.get(this.apiUrl + `SalesOrders/GetServicesSalesOrderSublets?servicesSalesOrderNo=${id}&PageNo=${pageNo}&PageSize=3`, this.sharedService.getHeaders());
  }
  GetSparePartsSalesOrderSpareparts(id, pageNo) {
    return this.http.get(this.apiUrl + `SalesOrders/GetSparePartsSalesOrderSpareparts?sparePartsSalesOrderOpportunityId=${id}&PageNo=${pageNo}&PageSize=3`, this.sharedService.getHeaders());
  }
  // Search=${searchText}&
  GetBranches(branchTypeId) {
    let url = 'Branches/GetBranches?Status=2001&sort=2&PageNo=0&PageSize=100';
    if (branchTypeId) {
      url += `&branchTypeId=${branchTypeId}`;
    }
    return this.http.get(this.apiUrl + url, this.sharedService.getHeaders());
  }
  GetCategories() {
    return this.http.get(this.apiUrl + `OtherRevenue/GetOtherRevenue?sort=1&PageNo=0&PageSize=100&status=2001`, this.sharedService.getHeaders());
  }
  getTerminalProviders() {
    return this.http.get(this.apiUrl + `TerminalProviders/GetProviders?status=2001&PageNo=0&PageSize=1000`, this.sharedService.getHeaders());
  }
  getCustomerPaymentCategories() {
    return this.http.get(this.apiUrl + `CustomerPayment/GetCustomerPayment?sort=1&PageNo=0&PageSize=1000&status=2001&registerId=${this.sharedService.getRegister?.registerObj?.id}`, this.sharedService.getHeaders());
  }
  getUsers(rolid) {
    return this.http.get(this.apiUrl + `User/GetUsers?sort=2&Status=2001&Invitation=2004&PageSize=1000&RoleId=${rolid}`, this.sharedService.getHeaders());
  }
  getLookupsById(id) {
    return this.http.get(this.apiUrl + `Lookups/GetLookups?lookupTypeId=${id}&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getBankAccounts(params) {
    return this.http.get(this.apiUrl + `BankAccount/GetBankAccounts${params}`, this.sharedService.getHeaders());
  }
  searchCustomers(searchTerm) {
    return this.http.get(`${this.apiUrl}Customer/GetCustomers?search=${searchTerm}`, this.sharedService.getHeaders());
  }
  customersList(searchTerm = '') {
    return this.http.get(`${this.apiUrl}Customer/GetCustomers?Search=${searchTerm}&Sort=1&PageNo=0&PageSize=10000`, this.sharedService.getHeaders());
  }
  CollectionOrder(role) {
    return this.http.post(this.apiUrl + 'Cashier/CollectionOrder', role, this.sharedService.getHeaders());
  }
  collectionOrderV2(data) {
    return this.http.post(this.apiUrl + 'Cashier/CollectionOrderV2', data, this.sharedService.getHeaders());
  }
  collectionOrderV3(data) {
    return this.http.post(this.apiUrl + 'Cashier/CollectionOrderV3', data, this.sharedService.getHeaders());
  }
  servicesOrdersCollection(data) {
    return this.http.post(this.apiUrl + 'Cashier/ServicesOrdersCollection', data, this.sharedService.getHeaders());
  }
  collectionOrderV2MultiCollect(data) {
    return this.http.post(this.apiUrl + 'Cashier/CollectionOrderV2MultiCollect', data, this.sharedService.getHeaders());
  }
  // Reverse API's Start
  collectionOrderV4(data) {
    return this.http.post(this.apiUrl + 'Cashier/CollectionOrderV4', data, this.sharedService.getHeaders());
  }
  servicesOrdersCollectionV2(data) {
    return this.http.post(this.apiUrl + 'Cashier/ServicesOrdersCollectionV2', data, this.sharedService.getHeaders());
  }
  reverseCollection(data) {
    return this.http.post(this.apiUrl + 'Cashier/ReverseCollection', data, this.sharedService.getHeaders());
  }
  refundReciptsForAllOrders(data) {
    return this.http.post(this.apiUrl + 'Cashier/RefundReciptsForAllOrders', data, this.sharedService.getHeaders());
  }
  // Reverse API's End
  uploadSignedInvoice(data) {
    return this.http.post(this.apiUrl + 'Cashier/UploadSignedInvoice', data, this.sharedService.getHeaders());
  }
  viewOrderOrigionalInvoice(data) {
    return this.http.post(this.apiUrl + 'Cashier/ViewOrderOrigionalInvoice', data, this.sharedService.getHeaders());
  }
  viewOrderOrigionalInvoiceServiceOrder(data) {
    return this.http.post(this.apiUrl + 'Cashier/ViewOrderOrigionalInvoiceServiceOrder', data, this.sharedService.getHeaders());
  }
  NeedModify(role) {
    return this.http.post(this.apiUrl + 'SalesOrders/NeedModify', role, this.sharedService.getHeaders());
  }
  cancelOrder(role) {
    return this.http.post(this.apiUrl + 'SalesOrders/CanceOrder', role, this.sharedService.getHeaders());
  }
  GetOtherRevenuesOrderDetails(oid) {
    return this.http.get(this.apiUrl + `OtherRevenue/GetOtherRevenuesOrderDetails?orderId=${oid}`, this.sharedService.getHeaders());
  }
  GetOtherRevenueCollectionPayments(cid) {
    return this.http.get(this.apiUrl + `Treasury/GetOtherRevenueCollectionPayments?CollectionId=${cid}`, this.sharedService.getHeaders());
  }
  getOtherRevenueCollectionDetails(cid) {
    return this.http.get(this.apiUrl + `Treasury/GetOtherRevenueCollectionDetails?CollectionId=${cid}`, this.sharedService.getHeaders());
  }
}
CollectService.ɵfac = function CollectService_Factory(t) {
  return new (t || CollectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
CollectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CollectService,
  factory: CollectService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 71891:
/*!**************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/bank-deposits/view-uploaded-file/view-uploaded-file.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewUploadedFileComponent": () => (/* binding */ ViewUploadedFileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function ViewUploadedFileComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.file, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ViewUploadedFileComponent_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "click to open pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r5.file, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ViewUploadedFileComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewUploadedFileComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewUploadedFileComponent_ng_container_1_ng_template_2_Template, 5, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fileType == "png" || ctx_r0.fileType == "jpeg" || ctx_r0.fileType == "jpg")("ngIfElse", _r4);
  }
}
function ViewUploadedFileComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No attachemnt...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ViewUploadedFileComponent {
  constructor(_activeModal) {
    this._activeModal = _activeModal;
    this.fileType = '';
  }
  ngOnInit() {
    this.getFileType(this.file);
  }
  getFileType(fileName) {
    this.fileType = fileName?.split('.').pop();
  }
}
ViewUploadedFileComponent.ɵfac = function ViewUploadedFileComponent_Factory(t) {
  return new (t || ViewUploadedFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
};
ViewUploadedFileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ViewUploadedFileComponent,
  selectors: [["app-view-uploaded-file"]],
  inputs: {
    file: "file"
  },
  decls: 8,
  vars: 2,
  consts: [[1, "modal-body", "p-2"], [4, "ngIf", "ngIfElse"], ["noFile", ""], [1, "flex-end"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-save", 3, "click"], ["pdf", ""], [1, "w-100", 3, "src"], [1, "d-flex", "justify-content-center", "flex-column", "align-items-center"], ["height", "80", "width", "80", "src", "assets/images/pdf.png", "alt", ""], ["target", "_blank", 1, "text-decoration-none", "text-capitalize", 3, "href"], [1, "primary-clr", "mx-0", "my-3"]],
  template: function ViewUploadedFileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewUploadedFileComponent_ng_container_1_Template, 4, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewUploadedFileComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewUploadedFileComponent_Template_button_click_6_listener() {
        return ctx._activeModal.close("Close click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.file)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 70810:
/*!***************************************!*\
  !*** ./src/app/interceptors/error.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/token-storage.service */ 11573);




class ErrorInterceptor {
  constructor(_tokenService) {
    this._tokenService = _tokenService;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      let errors = [];
      if (err.status === 401) {
        const isAuthUrl = request.url.includes('GetAccess') || request.url.includes('RefreshThirdPartyToken');
        if (isAuthUrl) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
        }
        this._tokenService.signOut();
        location.reload();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
      }
      if (err.status === 400) {
        if (err?.error?.errors?.[0]?.ErrorMessageEn || err?.error?.errors?.[0]?.errorMessageEn) {
          errors = err.error.errors;
        } else if (err?.error?.info?.info) {
          errors = [{
            errorMessageEn: err.error.info.info
          }];
        } else {
          errors = [{
            errorMessageEn: 'An unexpected error occurred'
          }];
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => errors);
    }));
  }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
  return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService));
};
ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ErrorInterceptor,
  factory: ErrorInterceptor.ɵfac
});

/***/ }),

/***/ 52297:
/*!*************************************!*\
  !*** ./src/app/interceptors/jwt.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _shared_routes_apiUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/routes/apiUrl */ 15411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ 11573);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/services/auth.service */ 16518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);










class JwtInterceptor {
  constructor(tokenStore, authService, router, handler) {
    this.tokenStore = tokenStore;
    this.authService = authService;
    this.router = router;
    this.getAccessEndpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.masterBaseUrl.replace(/\/+$/, '')}/${_shared_routes_apiUrl__WEBPACK_IMPORTED_MODULE_1__.ApiUrls.User.GetAccess.replace(/^\/+/, '')}`;
    this.refreshEndpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.masterBaseUrl.replace(/\/+$/, '')}/${_shared_routes_apiUrl__WEBPACK_IMPORTED_MODULE_1__.ApiUrls.User.RefreshThirdPartyToken.replace(/^\/+/, '')}`;
    this.rawHttp = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient(handler);
  }
  isTokenEndpoint(url) {
    return url.startsWith(this.getAccessEndpoint) || url.startsWith(this.refreshEndpoint);
  }
  intercept(req, next) {
    const localToken = this.tokenStore.token;
    const ssoAccess = this.tokenStore.ssoAccessToken;
    const inSsoMode = this.tokenStore.isSingleSignOnMode;
    const tokenToUse = this.isTokenEndpoint(req.url) ? ssoAccess || localToken || null : localToken || ssoAccess || null;
    const authedReq = tokenToUse ? this.addAuth(req, tokenToUse) : req;
    return next.handle(authedReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
        const body = event.body;
        if (event.url?.startsWith(this.getAccessEndpoint) && body?.Status === true) {
          this.saveUserFromGetAccess(body);
        }
        if (body?.Status === false && (body?.Error === 'Token has expired' || body?.Message === 'Token has expired')) {
          const ssoRefresh = this.tokenStore.ssoRefreshToken;
          if (inSsoMode && ssoRefresh) {
            return this.refreshAndRetry(req, next, ssoRefresh);
          }
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(event);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
      return this.handleError(err, authedReq, next);
    }));
  }
  saveUserFromGetAccess(res) {
    const d = res?.Data;
    if (!d) return;
    const id = d.EmployeeID && d.EmployeeID !== 0 ? d.EmployeeID : d.ID && d.ID !== 0 ? d.ID : d.MarkaziaUserID ?? null;
    const fullName = [d.FirstName, d.SecondName, d.ThirdName, d.LastName].filter(Boolean).join(' ') || d.Email || '';
    this.tokenStore.saveUser({
      nameid: id,
      UserID: id,
      EmployeeID: d.EmployeeID ?? d.ID ?? null,
      EmpNo: d.EmpNo ?? null,
      Email: d.Email ?? '',
      fullName,
      userPortals: []
    });
    this.tokenStore.saveEmployeeInfo(res);
  }
  handleError(err, req, next) {
    if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse && err.status === 401) {
      const message = err?.error?.Message || err?.error?.Error || err?.message || '';
      const expired = /expired|invalid/i.test(message);
      if (expired) {
        const refreshToken = this.tokenStore.ssoRefreshToken;
        if (refreshToken) {
          return this.refreshAndRetry(req, next, refreshToken);
        }
      }
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => err);
  }
  refreshAndRetry(req, next, refreshToken) {
    const {
      isRefreshing,
      tokenSubject
    } = this.authService.getRefreshState();
    if (!isRefreshing) {
      return this.authService.refreshToken(refreshToken).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(({
        accessToken
      }) => {
        const retried = this.addAuth(req, accessToken);
        return next.handle(retried);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(e => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => e)));
    }
    return tokenSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(t => !!t), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(t => next.handle(this.addAuth(req, t))));
  }
  /**
   * Dynamically attach correct header for local or SSO authentication
   * - Uses "HubAuthorization" in SSO mode
   * - Uses "Authorization" in normal mode
   */
  addAuth(req, token) {
    const headerName = this.tokenStore.isSingleSignOnMode ? 'HubAuthorization' : 'Authorization';
    return req.clone({
      setHeaders: {
        [headerName]: `Bearer ${token}`
      }
    });
  }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
  return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpBackend));
};
JwtInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
  token: JwtInterceptor,
  factory: JwtInterceptor.ɵfac
});

/***/ }),

/***/ 98063:
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authChildGuard": () => (/* binding */ authChildGuard),
/* harmony export */   "authGuard": () => (/* binding */ authGuard),
/* harmony export */   "authMatchGuard": () => (/* binding */ authMatchGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-storage.service */ 11573);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.service */ 69082);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/services/auth.service */ 16518);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ 6858);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _shared_routes_apiUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/routes/apiUrl */ 15411);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ 67193);












const PORTAL_ID = '9001'; // POS Portal ID
const SESSION_FLAG_CLICK = `portalClick:${PORTAL_ID}`;
const SESSION_FLAG_USER = `ssoUserSaved`;
const DEV_BYPASS = false;
const authGuard = (route, state) => handleAuthGuard(route, state.url);
const authChildGuard = (route, state) => handleAuthGuard(route, state.url);
const authMatchGuard = (route, segments) => {
  const url = '/' + segments.map(s => s.path).join('/');
  return handleAuthGuard({
    queryParams: {}
  }, url);
};
function handleAuthGuard(route, url) {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
  const http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient);
  const sharedService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService);
  const httpService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService);
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService);
  const tokenStore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService);
  const jwtHelper = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__.JwtHelperService);
  const urlToken = route.queryParams['token'];
  const localToken = sharedService.getToken;
  const ssoAccess = tokenStore.ssoAccessToken;
  const ssoRefresh = tokenStore.ssoRefreshToken;
  const inSSOMode = tokenStore.isSingleSignOnMode;
  const getAccessEndpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.masterBaseUrl.replace(/\/+$/, '')}/${_shared_routes_apiUrl__WEBPACK_IMPORTED_MODULE_5__.ApiUrls.User.GetAccess.replace(/^\/+/, '')}`;
  // pass if local development mode
  if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.bypassAuth && src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.staticAuth?.token) {
    return true;
  }
  // If ?token= provided normal login flow (redirect from portal)
  if (urlToken) {
    localStorage.setItem('redirectUrl', route.queryParams['redirectUrl'] || '/');
    tokenStore.saveToken(urlToken);
    try {
      const payload = jwtHelper.decodeToken(urlToken);
      tokenStore.saveUser(payload);
    } catch {
      router.navigate(['/unauthorized']);
      return false;
    }
    return validateAccessToken(tokenStore, http, authService, router, getAccessEndpoint);
  }
  // If SSO cookies exist → auto validate
  if (inSSOMode && ssoAccess && ssoRefresh) {
    ensureSsoUserSaved(tokenStore, jwtHelper);
    ensurePortalClickIfSso(tokenStore, httpService);
    return validateAccessToken(tokenStore, http, authService, router, getAccessEndpoint);
  }
  // Normal local token
  if (localToken && localToken !== 'undefined') {
    return true;
  }
  // in case no token found, redirect to portal login
  return redirectToPortal(router);
}
// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────
function validateAccessToken(tokenStore, http, authService, router, getAccessEndpoint) {
  const token = tokenStore.ssoAccessToken || tokenStore.token;
  if (!token) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(false);
  }
  return http.post(getAccessEndpoint, {
    token
  }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(res => {
    if (res?.Status === false) {
      throw new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse({
        error: res,
        status: 401
      });
    }
    return true;
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(err => {
    if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse && tokenStore.isSingleSignOnMode) {
      const refreshToken = tokenStore.ssoRefreshToken;
      if (!refreshToken) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(false);
      }
      return refreshAndRetry(authService, tokenStore, router);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(() => err);
  }));
}
function refreshAndRetry(authService, tokenStore, router) {
  const {
    isRefreshing,
    tokenSubject
  } = authService.getRefreshState();
  if (!isRefreshing) {
    const refreshToken = tokenStore.ssoRefreshToken;
    return authService.refreshToken(refreshToken).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => {
      router.navigate(['/login']);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(false);
    }));
  }
  return tokenSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(t => t !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => true));
}
function ensureSsoUserSaved(tokenStore, jwtHelper) {
  if (DEV_BYPASS || !tokenStore.isSingleSignOnMode || sessionStorage.getItem(SESSION_FLAG_USER) === '1') {
    return;
  }
  const token = tokenStore.ssoAccessToken;
  if (!token) {
    return;
  }
  const decoded = jwtHelper.decodeToken(token);
  if (!decoded) {
    return;
  }
  const id = decoded.nameid ?? decoded.UserID ?? decoded.sid ?? decoded.sub ?? decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'] ?? decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] ?? null;
  const user = {
    nameid: id,
    UserID: id,
    fullName: decoded.unique_name ?? decoded.name ?? '',
    userPortals: decoded.userPortals ?? []
  };
  tokenStore.saveUser(user);
  sessionStorage.setItem(SESSION_FLAG_USER, '1');
}
function ensurePortalClickIfSso(tokenStore, httpService) {
  if (sessionStorage.getItem(SESSION_FLAG_CLICK) === '1') return;
  const userId = tokenStore.currentUserId;
  if (!userId) return;
  const fd = new FormData();
  fd.append('UserID', String(userId));
  fd.append('PortalID', PORTAL_ID);
  httpService.post(_shared_routes_apiUrl__WEBPACK_IMPORTED_MODULE_5__.ApiUrls.User.ClickPortal, fd, 'master').subscribe({
    next: () => sessionStorage.setItem(SESSION_FLAG_CLICK, '1')
  });
}
function redirectToPortal(router) {
  const host = window.location.host;
  if (host.includes('dxpos.markaziaapis.com')) {
    window.location.href = 'https://portal.markaziahub.com';
  } else if (host.includes('dxtestpos.markaziaapis.com')) {
    window.location.href = 'https://dxtestportal.markaziahub.com';
  } else if (host.includes('dxdevpos.markaziaapis.com')) {
    window.location.href = 'https://dxdevportal.markaziahub.com';
  } else {
    router.navigate(['/login']);
  }
  return false;
}

/***/ }),

/***/ 31293:
/*!*************************************************!*\
  !*** ./src/app/services/character.directive.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterDirective": () => (/* binding */ CharacterDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CharacterDirective {
  constructor(el) {
    this.el = el;
  }
  onKeyDown(event) {
    let e = event;
    //	8 -  for backspace
    //	9 -  for tab
    //	13 - for enter
    //	27 - for escape
    //	46 - for delete
    //
    if ([8, 9, 13, 27, 46].indexOf(e.keyCode) !== -1 ||
    // Allow: Ctrl+A
    e.keyCode === 65 && (e.ctrlKey || e.metaKey) ||
    // Allow: Ctrl+C
    e.keyCode === 67 && (e.ctrlKey || e.metaKey) ||
    // Allow: Ctrl+V
    e.keyCode === 86 && (e.ctrlKey || e.metaKey) ||
    // Allow: Ctrl+X
    e.keyCode === 88 && (e.ctrlKey || e.metaKey) ||
    // Allow: home, end, left, right
    e.keyCode >= 35 && e.keyCode <= 39) {
      // let it happen, don't do anything
      return;
    }
    if (e.keyCode != 32 && (e.keyCode < 65 || e.keyCode > 93)) {
      e.preventDefault();
    }
  }
  onKeyup(event) {
    this.validateFields(event);
  }
  blockPaste(event) {
    this.validateFields(event);
  }
  validateFields(event) {
    setTimeout(() => {
      this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^a-zA-Zء-ي]/g, ' ');
      event.preventDefault();
    }, 100);
  }
}
CharacterDirective.ɵfac = function CharacterDirective_Factory(t) {
  return new (t || CharacterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
CharacterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CharacterDirective,
  selectors: [["", "OnlyCharacter", ""]],
  hostBindings: function CharacterDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CharacterDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keyup", function CharacterDirective_keyup_HostBindingHandler($event) {
        return ctx.onKeyup($event);
      })("paste", function CharacterDirective_paste_HostBindingHandler($event) {
        return ctx.blockPaste($event);
      });
    }
  },
  inputs: {
    validationFieldsType: "validationFieldsType"
  }
});

/***/ }),

/***/ 5620:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var C_Users_Momen_alShouha_Desktop_Projects_DX_FE_POS_DX_FE_POSNew_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 67193);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);







class CommonService {
  constructor(router, sanitizer, _decimalPipe, _datePipe) {
    this.router = router;
    this.sanitizer = sanitizer;
    this._decimalPipe = _decimalPipe;
    this._datePipe = _datePipe;
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']; //'application/pdf'
    this.fileToBase64 = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Momen_alShouha_Desktop_Projects_DX_FE_POS_DX_FE_POSNew_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            if (file.type !== 'application/pdf') {
              resolve({
                fileType: file.type,
                base64: reader.result,
                file,
                fileName: file.name
              });
            } else {
              resolve({
                fileType: file.type,
                file,
                fileName: file.name
              });
            }
          };
          reader.onerror = e => reject(e);
        });
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  transformDate(date, format = 'yyyy-MM-dd') {
    return this._datePipe.transform(date, format);
  }
  formatDateToISO(date) {
    if (!date) return null;
    const newDate = new Date(date);
    // Create a new Date object with the local time (ignoring time zone conversion)
    const localDate = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000);
    return localDate.toISOString().split('T')[0];
  }
  convertFormGroupToFormData(formGroup, preventAppendingControls) {
    // preventAppendingControls param sometime you don't need to append control to formdata then you need to pass that control name in that param;
    const formData = new FormData();
    Object.keys(formGroup.controls).forEach(controlName => {
      let isExists = preventAppendingControls?.includes(controlName);
      if (!isExists) {
        const control = formGroup.get(controlName);
        formData.append(controlName, control.getRawValue());
      }
    });
    return formData;
  }
  trim(value) {
    for (var key in value) {
      if (value[key] && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(value[key])) {
        value[key] = value[key].trim();
      } else if (value[key] === null) {
        value[key] = '';
      }
    }
    return value;
  }
  getMonthEndDate() {
    var today = new Date();
    var endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return endOfMonth;
  }
  getMonthStartDate() {
    var today = new Date();
    var startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return startOfMonth;
  }
  NavigateToRouteWithQueryString(routeName, queryParams) {
    if (queryParams == undefined || queryParams == null) this.router.navigate([routeName]);else this.router.navigate([routeName], queryParams);
  }
  decodeToken(token) {
    const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService();
    return helper.decodeToken(token);
  }
  NavigateToRoute(routeName, params) {
    if (params == undefined || params == null) this.router.navigate([routeName]);else this.router.navigate([routeName, params]);
  }
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  charOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 47 && charCode < 58) {
      return false;
    }
    return true;
  }
  omitSpecialChar(event) {
    var k;
    k = event.charCode;
    return k > 64 && k < 91 || k > 96 && k < 123 || k == 8 || k == 32 || k <= 48 && k >= 57;
  }
  stringToTime(time24) {
    if (time24) {
      var ts = time24;
      var H = +ts.substr(0, 2);
      var h = H % 12 || 12;
      h = h < 10 ? "0" + h : h; // leading 0 at the left for 1 digit hours
      var ampm = H < 12 ? " AM" : " PM";
      ts = h + ts.substr(2, 3) + ampm;
      return ts;
    }
  }
  transform(base64Image) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64Image);
  }
  transformDecimal(num, digitInfo = '2.3-3') {
    return this._decimalPipe.transform(num, digitInfo);
  }
  checkInvalidImageFormat(data, returnObj = false) {
    let invalidError = '';
    let invalidExtentions = false;
    let files;
    let getFiles = data.map(x => {
      return x.file;
    });
    if (getFiles[0] !== undefined) {
      files = getFiles;
    } else {
      files = data;
    }
    for (let file of files) {
      if (!this.fileTypes.includes(file.type)) {
        invalidExtentions = true;
        invalidError = 'This file not support, supported formates: JPEG, JPG, PNG, PDF';
        break;
      }
    }
    if (returnObj) {
      return {
        invalidExtentions,
        invalidError
      };
    } else {
      return invalidExtentions;
    }
  }
  roundValue(data, control) {
    if (Array.isArray(data)) {
      return data.map(x => {
        let value = {
          ...x,
          [control]: +x[control].toFixed(3)
        };
        return value;
      });
    } else {
      let value = {
        ...data,
        [control]: +data[control].toFixed(3)
      };
      return value;
    }
  }
  remove(data, control) {
    if (Array.isArray(data)) {
      return data.map(x => {
        let value = {
          ...x,
          [control]: +x[control].toFixed(3)
        };
        return value;
      });
    } else {
      let value = {
        ...data,
        [control]: +data[control].toFixed(3)
      };
      return value;
    }
  }
  replaceValue(value, splitBy, joinBy) {
    return value.split(',').join(joinBy);
  }
  downloadInvoices(data) {
    this.isArray = Array.isArray(data.invoices);
    if (this.isArray) {
      data.invoices.forEach(x => {
        this.iterateData(x);
      });
    } else {
      this.iterateData(data);
    }
  }
  iterateData(data) {
    if (this.isArray) {
      this.downloadURI(data);
    } else {
      for (let key in data) {
        let item = data[key];
        if (item) {
          setTimeout(() => {
            this.downloadURI(item);
          }, 500);
        }
      }
    }
  }
  downloadURI(uri) {
    //let name = uri.split('/').pop();
    var link = document.createElement("a");
    link.setAttribute('target', '_blank');
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
CommonService.ɵfac = function CommonService_Factory(t) {
  return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe));
};
CommonService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CommonService,
  factory: CommonService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 36690:
/*!********************************************!*\
  !*** ./src/app/services/header.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderService": () => (/* binding */ HeaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class HeaderService {
  constructor() {
    this.title = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('Title');
  }
  setTitle(title) {
    this.title.next(title);
    // console.log('title', title);
  }
}

HeaderService.ɵfac = function HeaderService_Factory(t) {
  return new (t || HeaderService)();
};
HeaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: HeaderService,
  factory: HeaderService.ɵfac
});

/***/ }),

/***/ 6858:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _shared_routes_appRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/routes/appRoutes */ 53870);
/* harmony import */ var _shared_routes_apiUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/routes/apiUrl */ 15411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ 5620);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ 69082);










class HttpService {
  constructor(http, _spinnerService, _helperService, _sharedService) {
    this.http = http;
    this._spinnerService = _spinnerService;
    this._helperService = _helperService;
    this._sharedService = _sharedService;
    this.appRoutes = _shared_routes_appRoutes__WEBPACK_IMPORTED_MODULE_1__.AppRoutes;
    this.apiUrl = _shared_routes_apiUrl__WEBPACK_IMPORTED_MODULE_2__.ApiUrls;
  }
  /**
   * Automatically chooses the correct API base
   */
  resolveBaseUrl(apiBaseUrl) {
    switch (apiBaseUrl) {
      case 'admin':
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl2;
      case 'master':
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.masterBaseUrl;
      case 'cm':
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cmBaseUrl;
      default:
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
  }
  /**
   * GET request
   */
  get(api, apiBaseUrl) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': '*'
    });
    const baseUrl = this.resolveBaseUrl(apiBaseUrl);
    return this.http.get(baseUrl + api, {
      headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => typeof response === 'string' ? this.JsonParseData(response) : response));
  }
  /**
   * POST request
   */
  post(api, data, apiBaseUrl) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      ...(!(data instanceof FormData) && {
        'Content-Type': 'application/json; charset=utf-8'
      }),
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': '*'
    });
    const baseUrl = this.resolveBaseUrl(apiBaseUrl);
    const requestData = data instanceof FormData ? data : JSON.stringify(data);
    return this.http.post(baseUrl + api, requestData, {
      headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => typeof response === 'string' ? this.JsonParseData(response) : response));
  }
  JsonParseData(data) {
    let result = data;
    try {
      result = JSON.parse(data);
    } catch (e) {
      console.log('[HttpService] JSON parse failed:', e);
    }
    return result;
  }
}
HttpService.ɵfac = function HttpService_Factory(t) {
  return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService));
};
HttpService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: HttpService,
  factory: HttpService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 79345:
/*!*************************************************!*\
  !*** ./src/app/services/httpservice.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpserviceService": () => (/* binding */ HttpserviceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.service */ 69082);





class HttpserviceService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    // public serverName="https://markaziaposdev.azurewebsites.net/POSAPI/";
    this.serverName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl2;
    this.token = '';
    //this.token = sessionStorage.getItem('token') || '';
  }

  GetUserMenuNew(portalId) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', this.sharedService.getToken);
    return this.http.get(this.serverName + `api/User/GetUserMenuNew?portalId=${portalId}`, {
      headers: headers
    });
  }
  login(detail) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverName + 'Login', detail, {
      headers: headers
    });
  }
  GetLookupsById(id) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', this.sharedService.getToken);
    return this.http.get(this.serverName + 'api/Lookups/GetLookups?lookupTypeId=' + id, {
      headers: headers
    });
  }
  GetUsers() {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', this.sharedService.getToken);
    return this.http.get(this.serverName + 'api/User/GetUsers', {
      headers: headers
    });
  }
  GetBranchesById(id, sort, Search, pageSize, pageNo) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', sessionStorage.getItem('token') || '');
    return this.http.get(this.serverName + 'api/Branches/GetBranches?BranchTypeId=' + id + '&sort=' + sort + '&Search=' + Search + '&PageNo=' + pageNo + '&PageSize=' + pageSize, {
      headers: headers
    });
  }
  AddBranch(details) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', sessionStorage.getItem('token') || '');
    return this.http.post(this.serverName + 'api/Branches/AddBranch', details, {
      headers: headers
    });
  }
}
HttpserviceService.ɵfac = function HttpserviceService_Factory(t) {
  return new (t || HttpserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService));
};
HttpserviceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: HttpserviceService,
  factory: HttpserviceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 69082:
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class SharedService {
  constructor() {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bypassAuth && _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.staticAuth?.token) {
      const existingToken = localStorage.getItem('token');
      if (!existingToken) {
        console.log('%c[LOCAL DEV MODE]', 'color: #00b894; font-weight: bold;', 'Injecting static credentials from environment.local.development.ts');
        // Inject static token and mock user details
        localStorage.setItem('token', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.staticAuth.token);
        localStorage.setItem('userid', String(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.staticAuth.UserID));
        localStorage.setItem('fullName', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.staticAuth.UserName);
        localStorage.setItem('city', 'Local Environment');
        localStorage.setItem('role', JSON.stringify({
          roleId: 0,
          name: 'Developer'
        }));
        localStorage.setItem('branch', JSON.stringify({
          branchId: 0,
          branchName: 'Local Dev Branch',
          city: 'Local City'
        }));
        localStorage.setItem('permissions', JSON.stringify([{
          id: 1,
          name: 'All Access (Local Dev)',
          permissionSubCategories: []
        }]));
      } else {
        console.log('%c[LOCAL DEV MODE]', 'color: #0984e3; font-weight: bold;', 'Static credentials already initialized.');
      }
    }
  }
  getHeaders() {
    return {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Bearer ' + this.getToken)
    };
  }
  get getToken() {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }
  get getFullname() {
    return localStorage.getItem('fullName') || sessionStorage.getItem('fullName');
  }
  get getUserId() {
    return localStorage.getItem('userid');
  }
  get getCity() {
    return localStorage.getItem('city') || sessionStorage.getItem('city');
  }
  get getUrl() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  get getUrl2() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl2;
  }
  get IsFoundIPAddress() {
    return localStorage.getItem('IsFoundIPAddress');
  }
  get getBranch() {
    const branch = JSON.parse(localStorage.getItem('branch'));
    return branch;
  }
  get getRole() {
    const role = JSON.parse(localStorage.getItem('role'));
    return role;
  }
  get getRegister() {
    const register = JSON.parse(localStorage.getItem('register'));
    return register;
  }
  get getPermissions() {
    const permissions = JSON.parse(localStorage.getItem('permissions'));
    return permissions;
  }
  get checkIfSessionClose() {
    const session = localStorage.getItem('closeSession');
    return session;
  }
  get getCasherPermissions() {
    const isSelected = this.getPermissions[1]?.permissionSubCategories?.[2]?.permissionItems?.[0]?.selected;
    return isSelected;
  }
  get getOpenCloseRegesterPermissions() {
    const isSelected = this.getPermissions[1]?.permissionSubCategories?.[2]?.permissionItems?.[0]?.selected;
    return isSelected;
  }
  get getCollectPermissions() {
    const isSelected = this.getPermissions[1]?.permissionSubCategories?.[3]?.permissionItems?.[0]?.selected;
    return isSelected;
  }
  get timeRegister() {
    return localStorage.getItem('timeRegister');
  }
}
SharedService.ɵfac = function SharedService_Factory(t) {
  return new (t || SharedService)();
};
SharedService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SharedService,
  factory: SharedService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 11573:
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenStorageService": () => (/* binding */ TokenStorageService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


const TOKEN_KEY = 'token';
const USER_KEY = 'currentUser';
class TokenStorageService {
  constructor() {}
  get devBypass() {
    return !!(!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production && src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bypassAuth && src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.staticAuth?.token);
  }
  writeCookieToken(name, value) {
    if (typeof document === 'undefined') return;
    const parts = [];
    if (value) {
      const json = `{"value":"${value}"}`;
      parts.push(`${name}=${json}`);
      parts.push('Max-Age=86400');
    } else {
      parts.push(`${name}=`);
      parts.push('expires=Thu, 01 Jan 1970 00:00:00 GMT', 'Max-Age=0');
    }
    parts.push('Path=/');
    parts.push('SameSite=Lax');
    const hostname = location.hostname;
    if (hostname.includes('markaziahub')) {
      parts.push('Domain=.markaziahub.com');
    }
    if (location.protocol === 'https:') {
      parts.push('Secure');
    }
    document.cookie = parts.join('; ');
  }
  readCookieToken(name) {
    if (typeof document === 'undefined' || !document.cookie) return null;
    const prefix = name + '=';
    const found = document.cookie.split('; ').find(c => c.startsWith(prefix));
    if (!found) return null;
    const raw = found.substring(prefix.length);
    try {
      const obj = JSON.parse(raw);
      if (typeof obj?.value === 'string' && obj.value.trim()) return obj.value;
    } catch {}
    try {
      const decoded = decodeURIComponent(raw);
      const obj = JSON.parse(decoded);
      if (typeof obj?.value === 'string' && obj.value.trim()) return obj.value;
    } catch {}
    return null;
  }
  deleteCookieToken(name) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
  }
  get ssoAccessToken() {
    if (this.devBypass) return null;
    return this.readCookieToken('MarkaziaAccessToken');
  }
  get ssoRefreshToken() {
    if (this.devBypass) return null;
    return this.readCookieToken('MarkaziaRefreshToken');
  }
  ssoAccessTokenSet(token) {
    this.writeCookieToken('MarkaziaAccessToken', token);
  }
  ssoRefreshTokenSet(token) {
    this.writeCookieToken('MarkaziaRefreshToken', token);
  }
  get isSingleSignOnMode() {
    if (this.devBypass) return false;
    const localToken = this.readTokenFromStorage();
    const ssoAccess = this.ssoAccessToken;
    const ssoRefresh = this.ssoRefreshToken;
    return !localToken && !!ssoAccess && !!ssoRefresh;
  }
  get effectiveAccessToken() {
    if (this.devBypass) {
      return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.staticAuth.token;
    }
    return this.readTokenFromStorage() || this.ssoAccessToken || '';
  }
  saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  get token() {
    if (this.devBypass) {
      return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.staticAuth.token;
    }
    return this.readTokenFromStorage();
  }
  readTokenFromStorage() {
    return localStorage.getItem(TOKEN_KEY) || '';
  }
  signOut() {
    localStorage.clear();
    this.writeCookieToken('MarkaziaAccessToken', null);
    this.writeCookieToken('MarkaziaRefreshToken', null);
  }
  saveUser(user) {
    try {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch {}
  }
  get getUser() {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  get currentUserId() {
    const u = this.getUser || {};
    return u?.nameid ?? u?.UserID ?? null;
  }
  saveEmployeeInfo(data) {
    if (!data) return;
    try {
      localStorage.setItem('employeeData', JSON.stringify(data));
    } catch (err) {
      console.error('Error saving employee info', err);
    }
  }
  get firstName() {
    const user = this.getUser;
    if (user?.FirstName) return user.FirstName;
    if (!user?.fullName) return '';
    return user.fullName.split(' ')[0] || '';
  }
  get lastName() {
    const user = this.getUser;
    if (user?.LastName) return user.LastName || user.SecondName || '';
    if (!user?.fullName) return '';
    const parts = user.fullName.split(' ');
    return parts.length > 1 ? parts.slice(1).join(' ') : '';
  }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
  return new (t || TokenStorageService)();
};
TokenStorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TokenStorageService,
  factory: TokenStorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 48766:
/*!*****************************************************!*\
  !*** ./src/app/services/utility-service.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityServiceService": () => (/* binding */ UtilityServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 94817);


class UtilityServiceService {
  constructor(toastr) {
    this.toastr = toastr;
  }
  isLogged() {
    if (typeof Storage !== 'undefined') {
      if (sessionStorage.getItem('id')) {
        return Promise.resolve(true);
      } else {
        // this._router.navigateByUrl('/dashboard');
      }
    }
    return Promise.resolve(false);
  }
  showError(error) {
    var data = error.json();
    if (data.Data == null || data.Data == false) {
      this.toastr.warning('Server Response...', data.Error == null ? 'Something wrong...' : data.Error.MessageEn);
    } else {
      this.toastr.warning('Server Response...', data.Error.MessageEn);
    }
  }
}
UtilityServiceService.ɵfac = function UtilityServiceService_Factory(t) {
  return new (t || UtilityServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
};
UtilityServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: UtilityServiceService,
  factory: UtilityServiceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 87192:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmModalComponent": () => (/* binding */ ConfirmModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);




function ConfirmModalComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function ConfirmModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 12);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.data == null ? null : ctx_r2.data.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
class ConfirmModalComponent {
  constructor(_activeModel) {
    this._activeModel = _activeModel;
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  confirm(value) {
    if (value) this.eventData.emit(value);else this.eventData.emit(value);
    this._activeModel.dismiss();
  }
}
ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) {
  return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
};
ConfirmModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfirmModalComponent,
  selectors: [["app-confirm-modal"]],
  inputs: {
    data: "data"
  },
  outputs: {
    eventData: "eventData"
  },
  decls: 15,
  vars: 5,
  consts: [[1, "row"], [1, "col-12"], [1, "modal-header", "border-0"], ["ngbAutoFocus", "", 1, "font-20", "fw-600", "mb-0"], [1, "modal-body"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "modal-footer", "border-0"], [1, "btns-group", "gap-2", "mx-0"], ["type", "button", 1, "btn", "btn-save", 3, "click"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "mb-0", "fw-500"], [1, "mb-0", "fs-16", "fw-500", 3, "innerHTML"]],
  template: function ConfirmModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConfirmModalComponent_ng_container_6_Template, 3, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConfirmModalComponent_ng_template_7_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_11_listener() {
        return ctx.confirm(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_13_listener() {
        return ctx.confirm(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.data == null ? null : ctx.data.headingText) || "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.data == null ? null : ctx.data.body))("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.data == null ? null : ctx.data.confirmText) || "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.data == null ? null : ctx.data.cancelText) || "No");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 41746:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/download-invoices/download-invoices.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadInvoicesComponent": () => (/* binding */ DownloadInvoicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function DownloadInvoicesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.data == null ? null : ctx_r0.data.message, " ");
  }
}
class DownloadInvoicesComponent {
  constructor(_activeModal, _modalService, _commonService) {
    this._activeModal = _activeModal;
    this._modalService = _modalService;
    this._commonService = _commonService;
  }
  ngOnChanges() {
    console.log();
  }
  ngOnInit() {}
  redirectTo() {
    if (this.data.redirectUrl) {
      this._commonService.NavigateToRoute(this.data?.redirectUrl);
    }
  }
  downloadInvoices() {
    let isArray = Array.isArray(this.data.invoices);
    if (isArray) {
      this.data.invoices.forEach(x => {
        this.iterateData(x);
      });
    } else {
      this.iterateData(this.data.invoices);
    }
    setTimeout(() => {
      this._modalService.dismissAll();
    }, 3000);
  }
  iterateData(data) {
    for (let key in data) {
      let item = data[key];
      if (item) {
        setTimeout(() => {
          this.downloadURI(item);
        }, 500);
      }
    }
  }
  downloadURI(uri) {
    let name = uri.split('/').pop();
    var link = document.createElement("a");
    link.setAttribute('target', '_blank');
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
DownloadInvoicesComponent.ɵfac = function DownloadInvoicesComponent_Factory(t) {
  return new (t || DownloadInvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
};
DownloadInvoicesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DownloadInvoicesComponent,
  selectors: [["app-download-invoices"]],
  inputs: {
    data: "data"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 8,
  vars: 2,
  consts: [[1, "modal-body"], [1, "d-flex", "flex-column", "align-items-center", "gap-2", "text-center", "p-3"], [4, "ngIf"], [1, "btns-group", "m-0", "gap-2"], [1, "btn", "btn-save", 3, "click"], [1, "btn", "btn", "btn-cancel", 3, "click"], [1, "green-clr", "fa-regular", "fa-circle-check", "fa-2x"], [1, "m-0", "mb-2"]],
  template: function DownloadInvoicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DownloadInvoicesComponent_ng_container_2_Template, 4, 1, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadInvoicesComponent_Template_button_click_4_listener() {
        return ctx.downloadInvoices();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownloadInvoicesComponent_Template_button_click_6_listener() {
        ctx._activeModal.close("yes");
        return ctx.redirectTo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.buttonName) && (ctx.data == null ? null : ctx.data.buttonName) || "View Invoice", "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 68866:
/*!************************************************************!*\
  !*** ./src/app/shared/components/labor/labor.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaborComponent": () => (/* binding */ LaborComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dashboard_modules_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dashboard/modules/cashier/collect/services/collect.service */ 43346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service */ 69082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);






function LaborComponent_div_0_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.jobCode ? item_r4.jobCode : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.description ? item_r4.description : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.jobQty ? item_r4.jobQty : "0", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.discount ? item_r4.discount : "0", " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 7, item_r4 == null ? null : item_r4.net, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.tax ? item_r4.tax : "0", " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 10, item_r4 == null ? null : item_r4.totalPrice, "2.3-3"), " JOD");
  }
}
function LaborComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " No Order To Collect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0) {
  return {
    active: a0
  };
};
function LaborComponent_div_0_li_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LaborComponent_div_0_li_41_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const page_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.setPage(page_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r3.pageNo === page_r5))("disabled", ctx_r3.pageNo === page_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", page_r5 + 1, " ");
  }
}
function LaborComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Labor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "div", 5)(11, "table", 6)(12, "thead")(13, "tr")(14, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Job code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Job qty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Net ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Tax ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Total price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, LaborComponent_div_0_tr_29_Template, 17, 13, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, LaborComponent_div_0_div_30_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 1)(32, "div", 10)(33, "div", 11)(34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Total Price Labor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 13)(40, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, LaborComponent_div_0_li_41_Template, 3, 5, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total No. ", ctx_r0.totalRecordCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.labors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.labors == null ? null : ctx_r0.labors.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](38, 6, ctx_r0.totaAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", (ctx_r0.labors == null ? null : ctx_r0.labors.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.pages);
  }
}
class LaborComponent {
  constructor(collectService, router, route, sharedService) {
    this.collectService = collectService;
    this.router = router;
    this.route = route;
    this.sharedService = sharedService;
    this.items = [1, 2];
    this.pageNo = 0;
  }
  ngOnInit() {
    this.detaisId = this.route.snapshot.params['id'];
    // this.detaisId = 62;
    if (this.detaisId) {
      this.GetServicesSalesOrderLabors();
    }
  }
  GetServicesSalesOrderLabors() {
    return this.collectService.GetServicesSalesOrderLabors(this.detaisId, this.pageNo).subscribe(response => {
      if (response) {
        this.labors = response.data;
        this.totaAmount = response.info.totaAmount;
        this.totalRecordCount = response.info?.totalRecordCount;
        // this.totalRecords = response.info?.totalRecordsCount;
        this.pagin = Math.ceil(this.totalRecordCount / 3);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
      }
    });
  }
  setPage(page) {
    this.pageNo = page;
    this.GetServicesSalesOrderLabors();
  }
}
LaborComponent.ɵfac = function LaborComponent_Factory(t) {
  return new (t || LaborComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_modules_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService));
};
LaborComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LaborComponent,
  selectors: [["app-labor"]],
  decls: 1,
  vars: 1,
  consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "card-collect"], [1, "top-details"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "col-sm-6"], [1, "total-card"], [1, "total"], [1, "col-md-6", 3, "hidden"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "not-found"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
  template: function LaborComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LaborComponent_div_0_Template, 42, 9, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.labors == null ? null : ctx.labors.length) != 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: [".not-found[_ngcontent-%COMP%] {\n  padding: 5%;\n  text-align: center;\n}\n.not-found[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #c9c9d1;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGFib3IvbGFib3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZCB7XHJcbiAgcGFkZGluZzogNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGg0IHtcclxuICAgIGNvbG9yOiAjYzljOWQxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 28424:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class LoadingComponent {}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
  return new (t || LoadingComponent)();
};
LoadingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoadingComponent,
  selectors: [["app-loading"]],
  decls: 2,
  vars: 0,
  consts: [[1, "loading"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function LoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n}\n.loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 46px;\n  color: #dc3545;\n}\n.loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRUo7QUFBRTtFQUNFLFlBQUE7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogNDZweDtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 86260:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/modal-message/modal-message.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalMessageComponent": () => (/* binding */ ModalMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);






function ModalMessageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.message, "");
  }
}
function ModalMessageComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalMessageComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3._commonService.downloadInvoices({
        invoices: ctx_r3.data == null ? null : ctx_r3.data.receipt
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "View Receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ModalMessageComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.message);
  }
}
function ModalMessageComponent_div_3_ng_template_2_h5_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r9.ErrorMessageEn || item_r9.errorMessageEn, " ");
  }
}
function ModalMessageComponent_div_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModalMessageComponent_div_3_ng_template_2_h5_0_Template, 3, 1, "h5", 11);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.messageError);
  }
}
function ModalMessageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalMessageComponent_div_3_ng_container_1_Template, 4, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalMessageComponent_div_3_ng_template_2_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8)(5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalMessageComponent_div_3_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.message)("ngIfElse", _r6);
  }
}
class ModalMessageComponent {
  constructor(router, modalService, activeModal, _commonService) {
    this.router = router;
    this.modalService = modalService;
    this.activeModal = activeModal;
    this._commonService = _commonService;
    this.loadPageData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    //console.log(this.type, this.message, this.messageError);
    if (this.type && this.type == 'success') {
      setTimeout(() => {
        if (this.routeName) {
          this.router.navigateByUrl(this.routeName);
        }
        this.toLoadData();
        if (!this.dismissOnlyActive) this.modalService.dismissAll();else this.activeModal.dismiss();
      }, 5000);
    } else if (this.type && this.type == 'error') {}
  }
  toLoadData() {
    this.loadPageData.emit();
  }
}
ModalMessageComponent.ɵfac = function ModalMessageComponent_Factory(t) {
  return new (t || ModalMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
};
ModalMessageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ModalMessageComponent,
  selectors: [["app-modal-message"]],
  inputs: {
    name: "name",
    type: "type",
    message: "message",
    messageError: "messageError",
    routeName: "routeName",
    data: "data",
    dismissOnlyActive: "dismissOnlyActive",
    errors: "errors"
  },
  outputs: {
    loadPageData: "loadPageData"
  },
  decls: 4,
  vars: 3,
  consts: [["class", "message", 4, "ngIf"], [1, "p-3", "d-flex", "justify-content-center"], ["type", "button", "class", "redBtn", 3, "click", 4, "ngIf"], [1, "message"], [1, "fa-regular", "fa-circle-check"], ["type", "button", 1, "redBtn", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "btns-group", "my-2", "text-center"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "fa-regular", "fa-circle-xmark"], [4, "ngFor", "ngForOf"]],
  template: function ModalMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModalMessageComponent_div_0_Template, 4, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalMessageComponent_button_2_Template, 2, 0, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModalMessageComponent_div_3_Template, 7, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == "success");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.receipt);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == "error");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".message[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.message[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  color: #1b212d;\n  margin: 0px;\n  padding: 20px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-check[_ngcontent-%COMP%] {\n  color: #25BB00;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-xmark[_ngcontent-%COMP%] {\n  color: #DC3545;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n\n.btns-group[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwtbWVzc2FnZS9tb2RhbC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFFSjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBR0E7RUFDRSx1QkFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzFiMjEyZDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgLmZhLWNpcmNsZS1jaGVja3tcclxuICAgIGNvbG9yOiAjMjVCQjAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbjogMnB4IDEwcHggNXB4O1xyXG4gIH1cclxuICAuZmEtY2lyY2xlLXhtYXJre1xyXG4gICAgY29sb3I6ICNEQzM1NDU7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luOiAycHggMTBweCA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmJ0bnMtZ3JvdXAge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 78787:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/no-ip-address/no-ip-address.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoIpAddressComponent": () => (/* binding */ NoIpAddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class NoIpAddressComponent {}
NoIpAddressComponent.ɵfac = function NoIpAddressComponent_Factory(t) {
  return new (t || NoIpAddressComponent)();
};
NoIpAddressComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NoIpAddressComponent,
  selectors: [["app-no-ip-address"]],
  decls: 3,
  vars: 0,
  consts: [[1, "ipadress"]],
  template: function NoIpAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your IP address is not connected to this register ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".ipadress[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm8taXAtYWRkcmVzcy9uby1pcC1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmlwYWRyZXNze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2MHB4IDMwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 59442:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class NotFoundComponent {}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || NotFoundComponent)();
};
NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NotFoundComponent,
  selectors: [["app-not-found"]],
  decls: 3,
  vars: 0,
  consts: [[1, "not-found"]],
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No data to display ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".not-found[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10%;\n}\n.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c9c9d1;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWZvdW5kIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTAlO1xyXG4gIHAge1xyXG4gICAgY29sb3I6ICNjOWM5ZDE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2125:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/pagination/pager.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagerService": () => (/* binding */ PagerService)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class PagerService {
  constructor() {}
  getPager(totalItems, currentPage = 1, pageSize = 10) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage, endPage;
    // if (totalPages <= 10) {
    //     // less than 10 total pages so show all
    //     startPage = 1;
    //     endPage = totalPages;
    // } else {
    //     // more than 10 total pages so calculate start and end pages
    //     if (currentPage <= 6) {
    //         startPage = 1;
    //         endPage = 10;
    //     } else if (currentPage + 4 >= totalPages) {
    //         startPage = totalPages - 9;
    //         endPage = totalPages;
    //     } else {
    //         startPage = currentPage - 5;
    //         endPage = currentPage + 4;
    //     }
    // }
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage;
        endPage = currentPage + 10;
      }
    }
    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    let pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(startPage, endPage + 1);
    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
PagerService.ɵfac = function PagerService_Factory(t) {
  return new (t || PagerService)();
};
PagerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PagerService,
  factory: PagerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 23556:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pager.service */ 2125);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);






const _c0 = function (a0) {
  return {
    active: a0
  };
};
function PaginationComponent_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_div_3_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const page_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.pagingClickBtn(page_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.pager.currentPage === page_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r2, " ");
  }
}
function PaginationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationComponent_div_3_button_1_Template, 2, 4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.pager.pages);
  }
}
class PaginationComponent {
  uploadComplete() {
    this.GetSources.emit();
  }
  pagingClickBtn(btnIndex) {
    if (btnIndex > 0 && this.GlobalPageIndex != btnIndex) {
      this.GlobalPageIndex = btnIndex;
      this.pageNumber = btnIndex;
      this.alert = this.pageNumber.toString();
      //alert(this.pageNumber);
      this.uploadComplete();
    }
  }
  PageSizeClick() {
    this.pageSize = this.ddlPageSize;
    this.uploadComplete();
  }
  constructor(http, _router, pagerService) {
    this.http = http;
    this._router = _router;
    this.pagerService = pagerService;
    this.csvSettings = {
      fieldSeparator: '   ',
      quoteStrings: '',
      decimalseparator: '.',
      showLabels: true,
      showTitle: false,
      useBom: false
    };
    this.pageSizeArr = [];
    this.pageNumber = 1;
    this.pageSize = 10;
    this.GetSources = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.pager = {};
    this.ddlPageSize = 10;
    this.alert = "No Value Alert";
    this.GlobalPageIndex = 0;
    this.ddlPageSize = 10;
  }
  ngOnInit() {
    this.pageNumber = 0;
    this.pageSize = 10;
  }
  setPage(page, getData) {
    if (page < 1 || page > this.pager.totalPages && page > this.EventsCount) {
      this.pager = this.pagerService.getPager(0);
      this.alert = "0";
      return;
    }
    this.pageNumber = page;
    //Double check Sources List count
    if (this.EventsCount) {
      if (this.EventsCount > 0) {
        //this.EventsCount = this.eventObj[0].count;
        this.pager = this.pagerService.getPager(this.EventsCount, page, this.ddlPageSize);
      }
    }
    //this.SourcesList
    if (this.EventsCount) {
      this.alert = this.EventsCount.toString();
    } else {
      this.alert = "No Events Count";
    }
  }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
  return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pager_service__WEBPACK_IMPORTED_MODULE_0__.PagerService));
};
PaginationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PaginationComponent,
  selectors: [["app-pagination"]],
  outputs: {
    pageNumber: "pageNumber",
    pageSize: "pageSize",
    GetSources: "GetSources"
  },
  decls: 4,
  vars: 1,
  consts: [[1, "row"], [1, "col-md-12"], ["aria-label", "Page navigation example"], ["class", "pagination pg-blue", "class", "pagination", 4, "ngIf"], [1, "pagination"], ["class", "btn btn-link", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-link", 3, "ngClass", "click"]],
  template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nav", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PaginationComponent_div_3_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".page-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  padding: 5px;\n  height: 30px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0px;\n  padding: 0px;\n  margin: 0;\n  width: auto;\n  background-color: #fff;\n  color: #fff;\n  border: 0px solid #d9b2e0;\n  justify-content: end;\n}\n.pagination[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  border: 2px solid #bdbdbd;\n  border-radius: 10px !important;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  color: #313131;\n  text-align: center;\n  margin: 2px 5px;\n  width: 40px;\n  text-decoration: none;\n}\n.pagination[_ngcontent-%COMP%]   .btn-link.active[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  border: 2px solid #dc3545;\n  box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.14);\n  border-radius: 10px !important;\n}\n\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #777;\n  background-color: transparent;\n  outline: 0;\n  border-radius: 0px;\n  border: 1px solid #ddd;\n}\n\n.page-item.active[_ngcontent-%COMP%] {\n  background-color: #454e7d;\n}\n.page-item.active[_ngcontent-%COMP%]   a.page-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n  box-shadow: none;\n  background-color: #454e7d;\n  border: 1px solid #454e7d;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFBRjtBQUNFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjtBQURFO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFHSiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucGFnZS1pdGVte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogIDA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjZDliMmUwO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIC5idG4tbGluayB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJweCA1cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmJ0bi1saW5rLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGMzNTQ1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDdweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5wYWdpbmF0aW9uIC5wYWdlLWl0ZW0gLnBhZ2UtbGluayB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuLnBhZ2UtaXRlbS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTRlN2Q7XHJcbiAgYS5wYWdlLWxpbmsge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZTdkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NGU3ZDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 77876:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/response-modal/response-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponseModalComponent": () => (/* binding */ ResponseModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);





function ResponseModalComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
function ResponseModalComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
  }
}
class ResponseModalComponent {
  constructor(router, modalService, activeModal) {
    this.router = router;
    this.modalService = modalService;
    this.activeModal = activeModal;
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    if (this.type == 'success') {
      setTimeout(() => {
        if (this.routeName) {
          this.router.navigateByUrl(this.routeName);
        }
        this.toLoadData();
        this.activeModal.dismiss();
      }, 3000);
    }
  }
  toLoadData() {
    this.eventData.emit();
  }
}
ResponseModalComponent.ɵfac = function ResponseModalComponent_Factory(t) {
  return new (t || ResponseModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal));
};
ResponseModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ResponseModalComponent,
  selectors: [["app-response-modal"]],
  inputs: {
    type: "type",
    message: "message",
    routeName: "routeName",
    errors: "errors"
  },
  outputs: {
    eventData: "eventData"
  },
  decls: 6,
  vars: 2,
  consts: [["ngbAutoFocus", "", 1, "p-2", "px-3"], [1, "d-flex", "justify-content-end"], ["type", "button", "aria-label", "Close", 1, "btn-close", "text-end", "font-14", 3, "click"], [1, "mb-3"], [4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2"], [1, "icon"], [1, "fa-regular", "fa-circle-check", "green-clr"], [1, "m-0"], [1, "fa-regular", "fa-circle-xmark", "text-danger"]],
  template: function ResponseModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResponseModalComponent_Template_button_click_2_listener() {
        return ctx.activeModal.close("Cross click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResponseModalComponent_ng_container_4_Template, 6, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResponseModalComponent_ng_container_5_Template, 6, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "success");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "error");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".icon[_ngcontent-%COMP%] {\n  height: 25px;\n}\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzcG9uc2UtbW9kYWwvcmVzcG9uc2UtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICBoZWlnaHQ6IDI1cHg7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 53823:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/saving-loader/saving-loader.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavingLoaderComponent": () => (/* binding */ SavingLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SavingLoaderComponent {
  constructor() {
    this.text = '';
  }
}
SavingLoaderComponent.ɵfac = function SavingLoaderComponent_Factory(t) {
  return new (t || SavingLoaderComponent)();
};
SavingLoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SavingLoaderComponent,
  selectors: [["saving-loader"]],
  inputs: {
    text: "text"
  },
  decls: 3,
  vars: 1,
  consts: [["type", "button", "disabled", "", 1, "btn", "btn-save", "d-flex", "align-items-center", "gap-2"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function SavingLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text && ctx.text || "Saving", "");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 98988:
/*!************************************************************!*\
  !*** ./src/app/shared/components/spare/spare.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpareComponent": () => (/* binding */ SpareComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dashboard_modules_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dashboard/modules/cashier/collect/services/collect.service */ 43346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service */ 69082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);






function SpareComponent_div_0_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.partNo ? item_r4.partNo : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.description ? item_r4.description : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.qty ? item_r4.qty : "0", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 8, item_r4.unitPrice, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.discount ? item_r4.discount : "0", " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 11, item_r4 == null ? null : item_r4.net, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.tax ? item_r4.tax : "0", " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 14, item_r4 == null ? null : item_r4.totalPrice, "2.3-3"), " JOD ");
  }
}
function SpareComponent_div_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " No Order To Collect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0) {
  return {
    active: a0
  };
};
function SpareComponent_div_0_li_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SpareComponent_div_0_li_43_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const page_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.setPage(page_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r3.pageNo === page_r5))("disabled", ctx_r3.pageNo === page_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", page_r5 + 1, " ");
  }
}
function SpareComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Spare Parts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "div", 5)(11, "table", 6)(12, "thead")(13, "tr")(14, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Part No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Qty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Unit price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Net ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Tax ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Total price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, SpareComponent_div_0_tr_31_Template, 20, 17, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, SpareComponent_div_0_div_32_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 1)(34, "div", 10)(35, "div", 11)(36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " Total Price For Spare Parts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 13)(42, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, SpareComponent_div_0_li_43_Template, 3, 5, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total No. ", ctx_r0.totalRecordCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.Spareparts);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.Spareparts == null ? null : ctx_r0.Spareparts.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](40, 6, ctx_r0.totaAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", (ctx_r0.Spareparts == null ? null : ctx_r0.Spareparts.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.pages);
  }
}
class SpareComponent {
  constructor(collectService, router, route, sharedService) {
    this.collectService = collectService;
    this.router = router;
    this.route = route;
    this.sharedService = sharedService;
    this.items = [1, 2];
    this.pageNo = 0;
  }
  ngOnInit() {
    this.detaisId = this.route.snapshot.params['id'];
    // this.detaisId = 62;
    if (this.detaisId) {
      this.GetServicesSalesOrderSpareparts();
    }
  }
  GetServicesSalesOrderSpareparts() {
    return this.collectService.GetServicesSalesOrderSpareparts(this.detaisId, this.pageNo).subscribe(response => {
      if (response) {
        this.Spareparts = response.data;
        this.totaAmount = response.info.totaAmount;
        this.totalRecordCount = response.info?.totalRecordCount;
        // this.totalRecords = response.info?.totalRecordsCount;
        this.pagin = Math.ceil(this.totalRecordCount / 3);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
      }
    });
  }
  setPage(page) {
    this.pageNo = page;
    this.GetServicesSalesOrderSpareparts();
  }
}
SpareComponent.ɵfac = function SpareComponent_Factory(t) {
  return new (t || SpareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_modules_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService));
};
SpareComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SpareComponent,
  selectors: [["app-spare"]],
  decls: 1,
  vars: 1,
  consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "card-collect"], [1, "top-details"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "col-sm-6"], [1, "total-card"], [1, "total"], [1, "col-md-6", 3, "hidden"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "not-found"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
  template: function SpareComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SpareComponent_div_0_Template, 44, 9, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.Spareparts == null ? null : ctx.Spareparts.length) != 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: [".not-found[_ngcontent-%COMP%] {\n  padding: 5%;\n  text-align: center;\n}\n.not-found[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #c9c9d1;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3BhcmUvc3BhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZCB7XHJcbiAgcGFkZGluZzogNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGg0IHtcclxuICAgIGNvbG9yOiAjYzljOWQxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 33980:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/sublet/sublet.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubletComponent": () => (/* binding */ SubletComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dashboard_modules_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dashboard/modules/cashier/collect/services/collect.service */ 43346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service */ 69082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);






function SubletComponent_div_0_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.subletCode ? item_r4.subletCode : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.subletDescription ? item_r4.subletDescription : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r4.jobQty ? item_r4.jobQty : "0", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 5, item_r4 == null ? null : item_r4.unitPrice, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 8, item_r4 == null ? null : item_r4.totalPrice, "2.3-3"), " JOD ");
  }
}
function SubletComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " No Order To Collect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0) {
  return {
    active: a0
  };
};
function SubletComponent_div_0_li_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubletComponent_div_0_li_37_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const page_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.setPage(page_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r3.pageNo === page_r5))("disabled", ctx_r3.pageNo === page_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", page_r5 + 1, " ");
  }
}
function SubletComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Sublet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "div", 5)(11, "table", 6)(12, "thead")(13, "tr")(14, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Sublet code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Sublet Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Job Qty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Unit price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Total price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, SubletComponent_div_0_tr_25_Template, 13, 11, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, SubletComponent_div_0_div_26_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 1)(28, "div", 10)(29, "div", 11)(30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Total Price for sublet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 13)(36, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, SubletComponent_div_0_li_37_Template, 3, 5, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total No. ", ctx_r0.totalRecordCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.sublets);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.sublets == null ? null : ctx_r0.sublets.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](34, 6, ctx_r0.totaAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", (ctx_r0.sublets == null ? null : ctx_r0.sublets.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.pages);
  }
}
class SubletComponent {
  constructor(collectService, router, route, sharedService) {
    this.collectService = collectService;
    this.router = router;
    this.route = route;
    this.sharedService = sharedService;
    this.items = [1, 2];
    this.pageNo = 0;
  }
  ngOnInit() {
    this.detaisId = this.route.snapshot.params['id'];
    // this.detaisId = 62;
    if (this.detaisId) {
      this.GetServicesSalesOrderSublets();
    }
  }
  GetServicesSalesOrderSublets() {
    return this.collectService.GetServicesSalesOrderSublets(this.detaisId, this.pageNo).subscribe(response => {
      if (response) {
        this.sublets = response.data;
        this.totaAmount = response.info.totaAmount;
        this.totalRecordCount = response.info?.totalRecordCount;
        // this.totalRecords = response.info?.totalRecordsCount;
        this.pagin = Math.ceil(this.totalRecordCount / 3);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
      }
    });
  }
  setPage(page) {
    this.pageNo = page;
    this.GetServicesSalesOrderSublets();
  }
}
SubletComponent.ɵfac = function SubletComponent_Factory(t) {
  return new (t || SubletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_modules_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService));
};
SubletComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SubletComponent,
  selectors: [["app-sublet"]],
  decls: 1,
  vars: 1,
  consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "card-collect"], [1, "top-details"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "col-sm-6"], [1, "total-card"], [1, "total"], [1, "col-md-6", 3, "hidden"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "not-found"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
  template: function SubletComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SubletComponent_div_0_Template, 38, 9, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.sublets == null ? null : ctx.sublets.length) != 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: [".not-found[_ngcontent-%COMP%] {\n  padding: 5%;\n  text-align: center;\n}\n.not-found[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #c9c9d1;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3VibGV0L3N1YmxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWZvdW5kIHtcclxuICBwYWRkaW5nOiA1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaDQge1xyXG4gICAgY29sb3I6ICNjOWM5ZDE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 49973:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/table-advanced/table-advanced.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableAdvancedComponent": () => (/* binding */ TableAdvancedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _table_advanced_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-advanced.directives */ 85746);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ 47364);









function TableAdvancedComponent_ng_container_0_ng_container_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total No. of records ", ctx_r9.total, "");
  }
}
function TableAdvancedComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TableAdvancedComponent_ng_container_0_ng_container_1_p_2_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r3.config == null ? null : ctx_r3.config.hideTotalRecord));
  }
}
function TableAdvancedComponent_ng_container_0_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function TableAdvancedComponent_ng_container_0_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Records ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ngb-pagination", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function TableAdvancedComponent_ng_container_0_ng_container_2_div_3_Template_ngb_pagination_pageChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r11.page * ctx_r11.limit - (ctx_r11.limit - 1), " - ", ctx_r11.tempData.length === ctx_r11.limit ? ctx_r11.page * ctx_r11.limit : ctx_r11.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.total, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collectionSize", ctx_r11.total)("page", ctx_r11.page)("pageSize", ctx_r11.limit)("maxSize", 3)("ellipses", true);
  }
}
function TableAdvancedComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TableAdvancedComponent_ng_container_0_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TableAdvancedComponent_ng_container_0_ng_container_2_div_3_Template, 10, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r4.tableStyle == null ? null : ctx_r4.tableStyle.otherStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.config.paging && ctx_r4.tempData.length && ctx_r4.total > ctx_r4.limit);
  }
}
function TableAdvancedComponent_ng_container_0_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function TableAdvancedComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scrolled", function TableAdvancedComponent_ng_container_0_ng_template_3_Template_div_scrolled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableAdvancedComponent_ng_container_0_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r6.tableStyle == null ? null : ctx_r6.tableStyle.otherStyle)("infiniteScrollDistance", (ctx_r6.config.infiniteScroll == null ? null : ctx_r6.config.infiniteScroll.infiniteScrollDistance) || 2)("infiniteScrollThrottle", (ctx_r6.config.infiniteScroll == null ? null : ctx_r6.config.infiniteScroll.infiniteScrollThrottle) || 500)("scrollWindow", (ctx_r6.config.infiniteScroll == null ? null : ctx_r6.config.infiniteScroll.scrollWindow) || false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r7);
  }
}
function TableAdvancedComponent_ng_container_0_ng_template_5_th_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th")(1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TableAdvancedComponent_ng_container_0_ng_template_5_th_3_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.multiSelect = $event);
    })("change", function TableAdvancedComponent_ng_container_0_ng_template_5_th_3_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.toggleMultiSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r17.multiSelect);
  }
}
const _c0 = function (a0) {
  return {
    active: a0
  };
};
function TableAdvancedComponent_ng_container_0_ng_template_5_th_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 22)(2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r25.sort.direction === "asc" && ctx_r25.isSortColumnMatch(column_r24)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx_r25.sort.direction === "desc" && ctx_r25.isSortColumnMatch(column_r24)));
  }
}
const _c1 = function (a0) {
  return {
    "cursor-default": a0
  };
};
function TableAdvancedComponent_ng_container_0_ng_template_5_th_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TableAdvancedComponent_ng_container_0_ng_template_5_th_4_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const column_r24 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.onSort(column_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TableAdvancedComponent_ng_container_0_ng_template_5_th_4_ng_container_3_Template, 3, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r24 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", (ctx_r18.tempData == null ? null : ctx_r18.tempData.length) == 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, !column_r24.canSort || !ctx_r18.tempData.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", column_r24.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r24.canSort && (ctx_r18.tempData == null ? null : ctx_r18.tempData.length));
  }
}
function TableAdvancedComponent_ng_container_0_ng_template_5_tr_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td")(2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TableAdvancedComponent_ng_container_0_ng_template_5_tr_6_ng_container_1_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r29.isChecked = $event);
    })("change", function TableAdvancedComponent_ng_container_0_ng_template_5_tr_6_ng_container_1_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.handleSelectionChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r29.isChecked);
  }
}
function TableAdvancedComponent_ng_container_0_ng_template_5_tr_6_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
const _c2 = function (a0, a1, a2, a3) {
  return {
    $implicit: a0,
    row: a1,
    column: a2,
    index: a3
  };
};
function TableAdvancedComponent_ng_container_0_ng_template_5_tr_6_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableAdvancedComponent_ng_container_0_ng_template_5_tr_6_td_2_ng_container_1_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r38 = ctx.$implicit;
    const idx_r39 = ctx.index;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const item_r29 = ctx_r41.$implicit;
    const i_r30 = ctx_r41.index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r32.columnTemplates[column_r38.key] || _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](2, _c2, ctx_r32.getItemValue(item_r29, column_r38.key, idx_r39), item_r29, ctx_r32.getColumnByKey(column_r38.key), i_r30));
  }
}
function TableAdvancedComponent_ng_container_0_ng_template_5_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TableAdvancedComponent_ng_container_0_ng_template_5_tr_6_Template_tr_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);
      const item_r29 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r42.handleRowClick($event, item_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableAdvancedComponent_ng_container_0_ng_template_5_tr_6_ng_container_1_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TableAdvancedComponent_ng_container_0_ng_template_5_tr_6_td_2_Template, 2, 7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.config == null ? null : ctx_r19.config.multiSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r19.columns);
  }
}
const _c3 = function (a0) {
  return {
    height: a0
  };
};
function TableAdvancedComponent_ng_container_0_ng_template_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No data to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c3, (ctx_r20.config.infiniteScroll == null ? null : ctx_r20.config.infiniteScroll.isScroll) && "70%" || "300px"));
  }
}
function TableAdvancedComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 15)(1, "thead")(2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TableAdvancedComponent_ng_container_0_ng_template_5_th_3_Template, 2, 1, "th", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TableAdvancedComponent_ng_container_0_ng_template_5_th_4_Template, 4, 6, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TableAdvancedComponent_ng_container_0_ng_template_5_tr_6_Template, 3, 2, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TableAdvancedComponent_ng_container_0_ng_template_5_div_7_Template, 3, 3, "div", 18);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.config == null ? null : ctx_r8.config.multiSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.tempData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r8.config.isLoading && !(ctx_r8.tempData == null ? null : ctx_r8.tempData.length));
  }
}
function TableAdvancedComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableAdvancedComponent_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TableAdvancedComponent_ng_container_0_ng_container_2_Template, 4, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TableAdvancedComponent_ng_container_0_ng_template_3_Template, 2, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TableAdvancedComponent_ng_container_0_ng_template_5_Template, 8, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r0.config == null ? null : ctx_r0.config.hideTotalRecord));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r0.config.infiniteScroll == null ? null : ctx_r0.config.infiniteScroll.isScroll))("ngIfElse", _r5);
  }
}
function TableAdvancedComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](value_r44);
  }
}
class TableAdvancedComponent {
  constructor(_datePipe, _decimalPipe) {
    this._datePipe = _datePipe;
    this._decimalPipe = _decimalPipe;
    this.config = {};
    this.loading = false;
    this.page = 1;
    this.pageCount = 1;
    this.limit = 6;
    this.total = 0;
    this.columns = [];
    this.sort = {
      column: null,
      direction: false
    };
    this.data = [];
    this.pageUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.sortUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.multiSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.scrollUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.tempData = [];
    this.faArrowUpLong = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowUpLong;
    this.faArrowDownLong = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowDownLong;
    this.selectedItems = [];
    this.multiSelect = false;
  }
  ngOnInit() {
    this.applyStyle();
    if (this.config.initSort) {
      this.sort = this.config.initSort;
    }
  }
  handleRowClick(eventData, item) {
    this.eventData.emit({
      isTableRowClicked: true,
      eventData,
      item
    });
  }
  toggleMultiSelection(event) {
    let checked = event.target.checked;
    if (checked) {
      this.tempData = this.tempData.map(item => {
        return {
          ...item,
          isChecked: true
        };
      });
      this.selectedItems = this.tempData;
      this.multiSelected.emit({
        selectedItems: this.selectedItems
      });
    } else {
      this.tempData = this.tempData.map(item => {
        return {
          ...item,
          isChecked: false
        };
      });
      this.selectedItems = [];
      this.multiSelected.emit({
        selectedItems: []
      });
    }
  }
  handleSelectionChange() {
    let selectedItems = this.tempData.filter(x => x.isChecked);
    this.selectedItems = selectedItems;
    this.multiSelected.emit({
      selectedItems
    });
  }
  ngAfterContentInit() {
    this.columnTemplates = this.templateColumnRefs.reduce((acc, cur) => {
      acc[cur.name] = cur.template;
      return acc;
    }, {});
  }
  ngOnChanges(changes) {
    if (changes['data']) {
      this.tempData = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(this.data || []);
    }
  }
  isSortColumnMatch(column) {
    return this.sort?.column === column.key;
  }
  onSort(column) {
    if (!column.canSort || !this.tempData.length) {
      return;
    }
    if (this.isSortColumnMatch(column)) {
      if (this.sort.direction === 'asc') {
        this.sort.direction = 'desc';
        this.sort.column = column.key;
      } else if (this.sort.direction === 'desc') {
        this.sort.direction = false;
        this.sort.column = null;
      } else {
        this.sort.direction = 'asc';
        this.sort.column = column.key;
      }
    } else {
      this.sort.direction = 'asc';
      this.sort.column = column.key;
    }
    this.sortUpdated.emit(this.sort);
  }
  onPageChange(page) {
    this.pageUpdated.emit(page);
  }
  getItemValue(item, key, columnIndex) {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(item, key)) {
      return this.columns[columnIndex].placeholder;
    } else {
      if (this.columns[columnIndex].dateFormat) {
        return this._datePipe.transform(item[key], this.columns[columnIndex].dateFormat);
      } else if (this.columns[columnIndex].currency?.decimalFormat) {
        let value = this._decimalPipe.transform(item[key], this.columns[columnIndex].currency.decimalFormat) + this.columns[columnIndex].currency.appendText;
        return value;
      } else {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(item, key);
      }
    }
  }
  getColumnByKey(key) {
    return this.columns.find(s => s.key === key);
  }
  applyStyle() {
    this.tableStyle = {};
    for (let key in this.config.style) {
      if (key == 'header') {
        this.tableStyle[key] = {};
        for (let prop in this.config.style[key]) {
          if (this.config.style[key][prop]) this.tableStyle[key][prop] = this.config.style[key][prop];
        }
      } else if (key == 'row') {
        this.tableStyle[key] = {};
        for (let prop in this.config.style[key]) {
          if (this.config.style[key][prop]) this.tableStyle[key][prop] = this.config.style[key][prop];
        }
      } else if (key == 'otherStyle') {
        this.tableStyle[key] = {};
        for (let prop in this.config.style[key]) {
          if (this.config.style[key][prop]) this.tableStyle[key][prop] = this.config.style[key][prop];
        }
      }
    }
  }
  onScroll() {
    this.scrollUpdate.emit({
      scrolled: true
    });
  }
}
TableAdvancedComponent.ɵfac = function TableAdvancedComponent_Factory(t) {
  return new (t || TableAdvancedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe));
};
TableAdvancedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TableAdvancedComponent,
  selectors: [["table-advanced"]],
  contentQueries: function TableAdvancedComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _table_advanced_directives__WEBPACK_IMPORTED_MODULE_1__.TableAdvancedColumnDirective, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.templateColumnRefs = _t);
    }
  },
  inputs: {
    config: "config",
    loading: "loading",
    page: "page",
    pageCount: "pageCount",
    limit: "limit",
    total: "total",
    columns: "columns",
    sort: "sort",
    data: "data"
  },
  outputs: {
    pageUpdated: "pageUpdated",
    sortUpdated: "sortUpdated",
    eventData: "eventData",
    multiSelected: "multiSelected",
    scrollUpdate: "scrollUpdate"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 1,
  consts: [[4, "ngIf"], ["columnDefaultTemplate", ""], [4, "ngIf", "ngIfElse"], ["infiniteScrollTemplate", ""], ["contentTemplate", ""], [1, "d-flex", "align-items-center", "justify-content-end", "gap-5", "mb-3"], ["class", "light-gray fw-500 mb-0", 4, "ngIf"], [1, "light-gray", "fw-500", "mb-0"], [1, "card-table", "table-responsive", 3, "ngStyle"], [4, "ngTemplateOutlet"], ["class", "d-flex justify-content-between align-items-center", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "showing", "mb-4"], ["aria-label", "Default pagination", 3, "collectionSize", "page", "pageSize", "maxSize", "ellipses", "pageChange"], ["infiniteScroll", "", 1, "card-table", "table-responsive", "overflow-y-auto", "scroll-container", 3, "ngStyle", "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], [1, "table"], ["scope", "col", 4, "ngFor", "ngForOf"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "no-data d-flex align-items-center justify-content-center flex-column", 3, "ngStyle", 4, "ngIf"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange", "change"], ["scope", "col"], [1, "btn", 3, "disabled", "ngClass", "click"], [1, "fa-solid", "fa-arrow-up-long", 3, "ngClass"], [1, "fa-solid", "fa-arrow-down-long", 3, "ngClass"], [3, "click"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "no-data", "d-flex", "align-items-center", "justify-content-center", "flex-column", 3, "ngStyle"], [1, "cell-default"]],
  template: function TableAdvancedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TableAdvancedComponent_ng_container_0_Template, 7, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableAdvancedComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.columns == null ? null : ctx.columns.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.InfiniteScrollDirective],
  styles: ["[_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 15px !important;\n}\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  border-collapse: collapse;\n  border-style: hidden;\n  width: 100%;\n  max-width: 100%;\n}\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], [_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--dark-gray);\n  border: none;\n  background: none;\n  padding: 0;\n}\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px 0px 20px 15px;\n  font-weight: 400;\n  color: var(--dark-gray);\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  height: 15px !important;\n  width: 15px !important;\n}\n[_nghost-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  height: 300px;\n}\n[_nghost-%COMP%]   .scroll-container[_ngcontent-%COMP%] {\n  height: 560px;\n  \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUtYWR2YW5jZWQvdGFibGUtYWR2YW5jZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR007RUFDRSxVQUFBO0FBRlI7QUFNSTtFQUNFLDZCQUFBO0FBSk47QUFTSTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUE47QUFTTTtFQUNFLG1CQUFBO0FBUFI7QUFVTTtFQUNFLDBCQUFBO0FBUlI7QUFXUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQVRWO0FBYU07RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBWFI7QUFnQkU7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FBZEo7QUFpQkU7RUFDRSxhQUFBO0FBZko7QUFrQkU7RUFDRSxhQUFBO0VBQ0o7Ozs7O1FBQUE7QUFYQSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB0YWJsZSB7XHJcbiAgICB0aCB7XHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBCZWxvdyBjb2RlIGlzIGZvciBNYXJrYXppYSBWb2N1aGVyIEN1c3RvbSBDU1NcclxuICAuY3VzdG9tLXRhYmxlIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgdGgsIHRkIHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcblxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubm8tZGF0YSB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNjcm9sbC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA1NjBweDtcclxuLypcclxuICAgIHRoIHtcclxuICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfSovXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 85746:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/table-advanced/table-advanced.directives.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickStopPropagation": () => (/* binding */ ClickStopPropagation),
/* harmony export */   "TableAdvancedColumnDirective": () => (/* binding */ TableAdvancedColumnDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TableAdvancedColumnDirective {
  constructor(template) {
    this.template = template;
  }
}
TableAdvancedColumnDirective.ɵfac = function TableAdvancedColumnDirective_Factory(t) {
  return new (t || TableAdvancedColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
TableAdvancedColumnDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: TableAdvancedColumnDirective,
  selectors: [["ng-template", "libTableAdvancedColumn", ""]],
  inputs: {
    name: ["libTableAdvancedColumn", "name"]
  }
});
class ClickStopPropagation {
  onClick(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
ClickStopPropagation.ɵfac = function ClickStopPropagation_Factory(t) {
  return new (t || ClickStopPropagation)();
};
ClickStopPropagation.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ClickStopPropagation,
  selectors: [["", "libClickStopPropagation", ""]],
  hostBindings: function ClickStopPropagation_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickStopPropagation_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});

/***/ }),

/***/ 67711:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/validation-error/validation-error.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationErrorComponent": () => (/* binding */ ValidationErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


function ValidationErrorComponent_ng_container_0_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMessages[key_r3]);
  }
}
function ValidationErrorComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidationErrorComponent_ng_container_0_ng_container_1_span_1_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.validationKeys);
  }
}
function ValidationErrorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidationErrorComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.control.invalid && (ctx_r0.control.dirty || ctx_r0.control.touched));
  }
}
class ValidationErrorComponent {
  get validationKeys() {
    let control = this.control;
    if (control && control.errors) {
      return Object.keys(control.errors);
    }
    return [];
  }
}
ValidationErrorComponent.ɵfac = function ValidationErrorComponent_Factory(t) {
  return new (t || ValidationErrorComponent)();
};
ValidationErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ValidationErrorComponent,
  selectors: [["validation-error"]],
  inputs: {
    control: "control",
    errorMessages: "errorMessages"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "validation-error d-block", 4, "ngFor", "ngForOf"], [1, "validation-error", "d-block"]],
  template: function ValidationErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValidationErrorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control == null ? null : ctx.control.errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 67761:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/view-file/view-file.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewFileComponent": () => (/* binding */ ViewFileComponent)
/* harmony export */ });
/* harmony import */ var _dashboard_modules_main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dashboard/modules/main-fund/bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);



class ViewFileComponent {
  constructor(_modalService) {
    this._modalService = _modalService;
  }
  ngOnInit() {
    //this.fileName = this.getFileType(this.file);
  }
  fileAction(action) {
    if (action == 'view') this.openFileModal();
  }
  openFileModal() {
    this._modalService.open(_dashboard_modules_main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewUploadedFileComponent).componentInstance.file = this.file;
  }
  getFileType(fileName) {
    return fileName?.split('/').pop();
  }
}
ViewFileComponent.ɵfac = function ViewFileComponent_Factory(t) {
  return new (t || ViewFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
ViewFileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ViewFileComponent,
  selectors: [["view-file"]],
  inputs: {
    file: "file",
    data: "data"
  },
  decls: 8,
  vars: 1,
  consts: [[1, "file-item"], [1, "d-flex", "gap-3", "align-items-center", "justify-content-between"], [1, "m-0", "green-clr"], [1, "d-flex", "gap-2", "align-items-center"], [1, "fas", "fa-eye", "cursor-pointer", "gray-500", 3, "click"], ["target", "_blank", 3, "href"], [1, "fas", "fa-download", "green-clr"]],
  template: function ViewFileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Attachment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewFileComponent_Template_i_click_5_listener() {
        return ctx.fileAction("view");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.file, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
  },
  styles: [".file-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid var(--green);\n  background: white;\n  max-width: 100%;\n}\n.file-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  line-height: 1;\n  color: green;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmlldy1maWxlL3ZpZXctZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXgtd2lkdGg6MTAwJTtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 29327:
/*!*************************************************************!*\
  !*** ./src/app/shared/directive/alphabet-only.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphabetOnlyDirective": () => (/* binding */ AlphabetOnlyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class AlphabetOnlyDirective {
  onInputChange(event) {
    if (!new RegExp('[^A-Za-zء-ي ]').test(event.key)) {
      return true;
    }
    event.preventDefault();
    return false;
  }
  onPaste(event) {
    event.preventDefault();
    const input = event.target;
    input.value = '';
  }
}
AlphabetOnlyDirective.ɵfac = function AlphabetOnlyDirective_Factory(t) {
  return new (t || AlphabetOnlyDirective)();
};
AlphabetOnlyDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AlphabetOnlyDirective,
  selectors: [["", "alphabetOnly", ""]],
  hostBindings: function AlphabetOnlyDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AlphabetOnlyDirective_keypress_HostBindingHandler($event) {
        return ctx.onInputChange($event);
      })("paste", function AlphabetOnlyDirective_paste_HostBindingHandler($event) {
        return ctx.onPaste($event);
      });
    }
  }
});

/***/ }),

/***/ 80145:
/*!*********************************************************!*\
  !*** ./src/app/shared/directive/character.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterDirective": () => (/* binding */ CharacterDirective),
/* harmony export */   "validateField": () => (/* binding */ validateField)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CharacterDirective {
  constructor(el) {
    this.el = el;
  }
  onKeyDown(event) {
    let e = event;
    /*
            8 -  for backspace
            9 -  for tab
            13 - for enter
            27 - for escape
            46 - for delete
        */
    if ([8, 9, 13, 27, 46].indexOf(e.keyCode) !== -1 ||
    // Allow: Ctrl+A
    e.keyCode === 65 && (e.ctrlKey || e.metaKey) ||
    // Allow: Ctrl+C
    e.keyCode === 67 && (e.ctrlKey || e.metaKey) ||
    // Allow: Ctrl+V
    e.keyCode === 86 && (e.ctrlKey || e.metaKey) ||
    // Allow: Ctrl+X
    e.keyCode === 88 && (e.ctrlKey || e.metaKey) ||
    // Allow: home, end, left, right
    e.keyCode >= 35 && e.keyCode <= 39) {
      // let it happen, don't do anything
      return;
    }
    // if (e.keyCode != 32 && ((e.keyCode < 65 || e.keyCode > 93))) {
    //   e.preventDefault();
    // }
  }

  onKeyup(event) {
    this.validateFields(event);
  }
  blockPaste(event) {
    this.validateFields(event);
  }
  validateFields(event) {
    this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-zء-ي ]/g, '');
    event.preventDefault();
  }
}
CharacterDirective.ɵfac = function CharacterDirective_Factory(t) {
  return new (t || CharacterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
CharacterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CharacterDirective,
  selectors: [["", "OnlyCharacter", ""]],
  hostBindings: function CharacterDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CharacterDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("keyup", function CharacterDirective_keyup_HostBindingHandler($event) {
        return ctx.onKeyup($event);
      })("paste", function CharacterDirective_paste_HostBindingHandler($event) {
        return ctx.blockPaste($event);
      });
    }
  },
  inputs: {
    validationFieldsType: "validationFieldsType"
  }
});
function validateField(value) {
  return value.replace(/[^A-Za-zء-ي ]/g, '');
}

/***/ }),

/***/ 75745:
/*!************************************************************!*\
  !*** ./src/app/shared/directive/check-amount.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckAmountDirective": () => (/* binding */ CheckAmountDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CheckAmountDirective {
  constructor(el) {
    this.el = el;
  }
  onKeyDown(event) {
    // console.log(event);
    // console.log(event.key);
    const initalValue = this.el.nativeElement.value;
    // initalValue === 0 ||
    // if (+initalValue === 0) {
    //   this.el.nativeElement.value = '';
    // }
    const val = initalValue;
    // initalValue === '0' ||
    // (initalValue === '00' &&
    if (val === '0' && event.key === '0'
    // (+initalValue === 0 && initalValue.length === 1 && event.key === '0')
    ) {
      event.preventDefault();
    }
    if (event.code === 'Minus') {
      event.preventDefault();
    }
  }
}
CheckAmountDirective.ɵfac = function CheckAmountDirective_Factory(t) {
  return new (t || CheckAmountDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
CheckAmountDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CheckAmountDirective,
  selectors: [["", "appCheckAmount", ""]],
  hostBindings: function CheckAmountDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CheckAmountDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  }
});

/***/ }),

/***/ 55134:
/*!**************************************************************!*\
  !*** ./src/app/shared/directive/decimal-number.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecimalNumberDirective": () => (/* binding */ DecimalNumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DecimalNumberDirective {
  constructor(el) {
    this.el = el;
    //private regex: RegExp = new RegExp(/^\d*\,?\d{0,2}$/g);
    //private regex: RegExp = new RegExp(/^\d{0,40}\b\.?\d{0,3}$/g);
    this.regex = new RegExp(/^\d*\.?\d{0,50}$/g);
    this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
  }
  onKeyDown(event) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current = this.el.nativeElement.value;
    const next = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
  setInputFocusOut() {
    let value = +this.el.nativeElement.value;
    if (value > 0) {
      this.el.nativeElement.value = value.toFixed(3);
    }
  }
}
DecimalNumberDirective.ɵfac = function DecimalNumberDirective_Factory(t) {
  return new (t || DecimalNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
DecimalNumberDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DecimalNumberDirective,
  selectors: [["", "appDecimalNumber", ""]],
  hostBindings: function DecimalNumberDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DecimalNumberDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("blur", function DecimalNumberDirective_blur_HostBindingHandler() {
        return ctx.setInputFocusOut();
      });
    }
  }
});

/***/ }),

/***/ 96603:
/*!*************************************************************!*\
  !*** ./src/app/shared/directive/drag-and-drop.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragAndDropDirective": () => (/* binding */ DragAndDropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 34497);



class DragAndDropDirective {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.files = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.enter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.background = '';
    this.border = '';
  }
  onDragEnter(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.enter.emit();
  }
  onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#d9e4f0';
    this.border = '2px dashed #226BC0';
  }
  onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.leave.emit();
    this.background = '';
    this.border = '';
  }
  onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '';
    this.border = '';
    let files = [];
    for (let i = 0; i < evt.dataTransfer.files.length; i++) {
      const file = evt.dataTransfer.files[i];
      const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      files.push({
        file,
        url
      });
    }
    if (files.length > 0) {
      this.files.emit(files);
    }
  }
}
DragAndDropDirective.ɵfac = function DragAndDropDirective_Factory(t) {
  return new (t || DragAndDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer));
};
DragAndDropDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DragAndDropDirective,
  selectors: [["", "appImageDrag", ""]],
  hostVars: 4,
  hostBindings: function DragAndDropDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragenter", function DragAndDropDirective_dragenter_HostBindingHandler($event) {
        return ctx.onDragEnter($event);
      })("dragover", function DragAndDropDirective_dragover_HostBindingHandler($event) {
        return ctx.onDragOver($event);
      })("dragleave", function DragAndDropDirective_dragleave_HostBindingHandler($event) {
        return ctx.onDragLeave($event);
      })("drop", function DragAndDropDirective_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background)("border", ctx.border);
    }
  },
  outputs: {
    files: "files",
    enter: "enter",
    leave: "leave"
  }
});

/***/ }),

/***/ 82757:
/*!************************************************************!*\
  !*** ./src/app/shared/directive/numbers-only.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberDirective": () => (/* binding */ NumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class NumberDirective {
  //constructor(private _el: ElementRef) { }
  //@HostListener('input', ['$event']) onInputChange(event) {
  //  const initalValue = this._el.nativeElement.value;
  //  this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
  //  if ( initalValue !== this._el.nativeElement.value) {
  //    event.stopPropagation();
  //  }
  //}
  onInputChange(event) {
    if (new RegExp('[0-9]').test(event.key)) {
      return true;
    }
    event.preventDefault();
    return false;
  }
}
NumberDirective.ɵfac = function NumberDirective_Factory(t) {
  return new (t || NumberDirective)();
};
NumberDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NumberDirective,
  selectors: [["input", "numbersOnly", ""]],
  hostBindings: function NumberDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function NumberDirective_keypress_HostBindingHandler($event) {
        return ctx.onInputChange($event);
      });
    }
  }
});

/***/ }),

/***/ 17046:
/*!*************************************************************!*\
  !*** ./src/app/shared/directive/prevent-minus.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreventMinusDirective": () => (/* binding */ PreventMinusDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class PreventMinusDirective {
  constructor(el) {
    this.el = el;
  }
  onKeyDown(event) {
    // console.log(event);
    // console.log(event.key);
    const initalValue = this.el.nativeElement.value;
    console.log(initalValue);
    // initalValue === 0 ||
    if (+initalValue === 0) {
      this.el.nativeElement.value = '';
    }
    if (initalValue.length === 0 && event.key === '0' || +initalValue === 0 && initalValue.length === 1 && event.key === '0') {
      event.preventDefault();
    }
    if (event.code === 'Minus') {
      event.preventDefault();
    }
  }
}
PreventMinusDirective.ɵfac = function PreventMinusDirective_Factory(t) {
  return new (t || PreventMinusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
PreventMinusDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: PreventMinusDirective,
  selectors: [["", "appPreventMinus", ""]],
  hostBindings: function PreventMinusDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PreventMinusDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  }
});

/***/ }),

/***/ 67116:
/*!************************************************************!*\
  !*** ./src/app/shared/directive/round-number.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundNumberDirective": () => (/* binding */ RoundNumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class RoundNumberDirective {
  constructor(el) {
    this.el = el;
  }
  setInputFocusOut() {
    let value = +this.el.nativeElement.value;
    if (value > 0) {
      this.el.nativeElement.value = value.toFixed(3);
    }
  }
}
RoundNumberDirective.ɵfac = function RoundNumberDirective_Factory(t) {
  return new (t || RoundNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
RoundNumberDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: RoundNumberDirective,
  selectors: [["", "roundNumber", ""]],
  hostBindings: function RoundNumberDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function RoundNumberDirective_blur_HostBindingHandler() {
        return ctx.setInputFocusOut();
      });
    }
  }
});

/***/ }),

/***/ 15411:
/*!*****************************************!*\
  !*** ./src/app/shared/routes/apiUrl.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiUrls": () => (/* binding */ ApiUrls)
/* harmony export */ });
const ApiUrls = {
  Lookup: {
    GetLookups: "Lookup/GetLookups",
    GetAdminLookup: "Lookups/GetLookups",
    AddLookup: "Lookup/AddLookup",
    EditLookup: "Lookup/EditLookup",
    DeleteLookup: "Lookup/DeleteLookup"
  },
  PNsFollowUpControler: {
    AddPNNoteFollowUp: 'PNsFollowUpControler/AddPNNoteFollowUp'
  },
  POSMachine: {
    SendCreditCardRequest: 'POSMachine/send-credit-card-request',
    GetTerminalProviderMachine: 'TerminalProviders/GetTerminalProviderMachine'
  },
  Treasury: {
    GetRefundedOrders: 'Treasury/GetRefundedOrders'
  },
  Regenerate: {
    RegenerateOrderOrigionalInvoiceServiceOrder: 'Cashier/RegenerateOrderOrigionalInvoiceServiceOrder',
    RegenerateOrigionalReceiptServiceOrder: 'Cashier/RegenerateOrigionalReceiptServiceOrder',
    RegenerateOrigionalReceiptDirectPayment: 'Cashier/RegenerateOrigionalReceiptDirectPayment',
    RegenerateOrigionalInvoiceSpareParts: 'Cashier/RegenerateOrigionalInvoiceSpareParts',
    RegenerateOrigionalReceiptSpareParts: 'Cashier/RegenerateOrigionalReceiptSpareParts',
    RegenerateORReceipt: 'Cashier/RegenerateORReceipt',
    RegenerateOrigionalReceiptCustomer: 'Cashier/RegenerateOrigionalReceiptCustomer',
    RegenerateCashierFullRefundOrder: 'DirectPaymentReturnOrder/RegenerateCashierFullRefundOrder',
    RegenerateCashierRefundServiceOrder: 'ServiceLayerReturnOrder/RegenerateCashierRefundServiceOrder',
    RegenerateSparePartReturnOrderInvoice: 'SparePartsReturnOrder/RegenerateSparePartReturnOrderInvoice'
  },
  User: {
    GetAccess: '/User/GetAccess',
    RefreshThirdPartyToken: '/User/RefreshThirdPartyToken',
    ClickPortal: "User/ClickPortal"
  }
};

/***/ }),

/***/ 53870:
/*!********************************************!*\
  !*** ./src/app/shared/routes/appRoutes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
const AppRoutes = {};

/***/ }),

/***/ 16488:
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedRoutingModule": () => (/* binding */ SharedRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.component */ 96688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _shared_component__WEBPACK_IMPORTED_MODULE_0__.SharedComponent
}];
class SharedRoutingModule {}
SharedRoutingModule.ɵfac = function SharedRoutingModule_Factory(t) {
  return new (t || SharedRoutingModule)();
};
SharedRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SharedRoutingModule
});
SharedRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 96688:
/*!********************************************!*\
  !*** ./src/app/shared/shared.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponent": () => (/* binding */ SharedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SharedComponent {}
SharedComponent.ɵfac = function SharedComponent_Factory(t) {
  return new (t || SharedComponent)();
};
SharedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SharedComponent,
  selectors: [["app-shared"]],
  decls: 2,
  vars: 0,
  template: function SharedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shared works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-routing.module */ 16488);
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.component */ 96688);
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-tel-input */ 79453);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 74448);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loading/loading.component */ 28424);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 59442);
/* harmony import */ var _components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/decimal-number.directive */ 55134);
/* harmony import */ var _directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/numbers-only.directive */ 82757);
/* harmony import */ var _directive_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directive/alphabet-only.directive */ 29327);
/* harmony import */ var _directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directive/drag-and-drop.directive */ 96603);
/* harmony import */ var _directive_character_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directive/character.directive */ 80145);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pagination/pagination.component */ 23556);
/* harmony import */ var _directive_prevent_minus_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directive/prevent-minus.directive */ 17046);
/* harmony import */ var _directive_check_amount_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directive/check-amount.directive */ 75745);
/* harmony import */ var _components_no_ip_address_no_ip_address_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/no-ip-address/no-ip-address.component */ 78787);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 82184);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 10082);
/* harmony import */ var _directive_round_number_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directive/round-number.directive */ 67116);
/* harmony import */ var _components_download_invoices_download_invoices_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/download-invoices/download-invoices.component */ 41746);
/* harmony import */ var _components_saving_loader_saving_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/saving-loader/saving-loader.component */ 53823);
/* harmony import */ var _components_sublet_sublet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sublet/sublet.component */ 33980);
/* harmony import */ var _components_labor_labor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/labor/labor.component */ 68866);
/* harmony import */ var _components_spare_spare_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/spare/spare.component */ 98988);
/* harmony import */ var _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/confirm-modal/confirm-modal.component */ 87192);
/* harmony import */ var _components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/view-file/view-file.component */ 67761);
/* harmony import */ var _components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/table-advanced/table-advanced.component */ 49973);
/* harmony import */ var _components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/table-advanced/table-advanced.directives */ 85746);
/* harmony import */ var _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/validation-error/validation-error.component */ 67711);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-infinite-scroll */ 47364);
/* harmony import */ var _components_response_modal_response_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/response-modal/response-modal.component */ 77876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 22560);















































class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _shared_routing_module__WEBPACK_IMPORTED_MODULE_0__.SharedRoutingModule, ng2_tel_input__WEBPACK_IMPORTED_MODULE_2__.Ng2TelInputModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_31__.ToastrModule.forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_32__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__.FontAwesomeModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_34__.PaginationModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_35__.NgSelectModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__.NgbModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_37__.InfiniteScrollModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_38__.BsDatepickerModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_39__.BsDropdownModule.forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_40__.TabsModule.forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_41__.AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAAQ7GPIxJs5PTBccmO9OZwBUy464p59bY',
    libraries: ['places']
  }), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_40__.TabsModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_39__.BsDropdownModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_38__.BsDatepickerModule, ng2_tel_input__WEBPACK_IMPORTED_MODULE_2__.Ng2TelInputModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_31__.ToastrModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_32__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__.FontAwesomeModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_34__.PaginationModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_35__.NgSelectModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__.NgbModule, _agm_core__WEBPACK_IMPORTED_MODULE_41__.AgmCoreModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_37__.InfiniteScrollModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_shared_component__WEBPACK_IMPORTED_MODULE_1__.SharedComponent, _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent, _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent, _components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_5__.ModalMessageComponent, _components_spare_spare_component__WEBPACK_IMPORTED_MODULE_20__.SpareComponent, _components_labor_labor_component__WEBPACK_IMPORTED_MODULE_19__.LaborComponent, _components_sublet_sublet_component__WEBPACK_IMPORTED_MODULE_18__.SubletComponent, _directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_6__.DecimalNumberDirective, _directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_7__.NumberDirective, _directive_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_8__.AlphabetOnlyDirective, _directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_9__.DragAndDropDirective, _directive_character_directive__WEBPACK_IMPORTED_MODULE_10__.CharacterDirective, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__.PaginationComponent, _directive_prevent_minus_directive__WEBPACK_IMPORTED_MODULE_12__.PreventMinusDirective, _directive_check_amount_directive__WEBPACK_IMPORTED_MODULE_13__.CheckAmountDirective, _directive_round_number_directive__WEBPACK_IMPORTED_MODULE_15__.RoundNumberDirective, _components_no_ip_address_no_ip_address_component__WEBPACK_IMPORTED_MODULE_14__.NoIpAddressComponent, _components_download_invoices_download_invoices_component__WEBPACK_IMPORTED_MODULE_16__.DownloadInvoicesComponent, _components_saving_loader_saving_loader_component__WEBPACK_IMPORTED_MODULE_17__.SavingLoaderComponent, _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_21__.ConfirmModalComponent, _components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_22__.ViewFileComponent, _components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_23__.TableAdvancedComponent, _components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_24__.TableAdvancedColumnDirective, _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_25__.ValidationErrorComponent, _components_response_modal_response_modal_component__WEBPACK_IMPORTED_MODULE_26__.ResponseModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _shared_routing_module__WEBPACK_IMPORTED_MODULE_0__.SharedRoutingModule, ng2_tel_input__WEBPACK_IMPORTED_MODULE_2__.Ng2TelInputModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_31__.ToastrModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_32__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__.FontAwesomeModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_34__.PaginationModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_35__.NgSelectModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__.NgbModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_37__.InfiniteScrollModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_38__.BsDatepickerModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_39__.BsDropdownModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_40__.TabsModule, _agm_core__WEBPACK_IMPORTED_MODULE_41__.AgmCoreModule],
    exports: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_40__.TabsModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_39__.BsDropdownModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_38__.BsDatepickerModule, ng2_tel_input__WEBPACK_IMPORTED_MODULE_2__.Ng2TelInputModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_31__.ToastrModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_32__.NgxSpinnerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__.FontAwesomeModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_34__.PaginationModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_35__.NgSelectModule, _components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_23__.TableAdvancedComponent, _components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_24__.TableAdvancedColumnDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__.NgbModule, _agm_core__WEBPACK_IMPORTED_MODULE_41__.AgmCoreModule, _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent, _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent, _components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_5__.ModalMessageComponent, _directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_6__.DecimalNumberDirective, _directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_7__.NumberDirective, _directive_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_8__.AlphabetOnlyDirective, _directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_9__.DragAndDropDirective, _directive_character_directive__WEBPACK_IMPORTED_MODULE_10__.CharacterDirective, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__.PaginationComponent, _directive_prevent_minus_directive__WEBPACK_IMPORTED_MODULE_12__.PreventMinusDirective, _directive_check_amount_directive__WEBPACK_IMPORTED_MODULE_13__.CheckAmountDirective, _directive_round_number_directive__WEBPACK_IMPORTED_MODULE_15__.RoundNumberDirective, _components_no_ip_address_no_ip_address_component__WEBPACK_IMPORTED_MODULE_14__.NoIpAddressComponent, _components_saving_loader_saving_loader_component__WEBPACK_IMPORTED_MODULE_17__.SavingLoaderComponent, _components_spare_spare_component__WEBPACK_IMPORTED_MODULE_20__.SpareComponent, _components_labor_labor_component__WEBPACK_IMPORTED_MODULE_19__.LaborComponent, _components_sublet_sublet_component__WEBPACK_IMPORTED_MODULE_18__.SubletComponent, _components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_22__.ViewFileComponent, _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_25__.ValidationErrorComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_37__.InfiniteScrollModule, _components_response_modal_response_modal_component__WEBPACK_IMPORTED_MODULE_26__.ResponseModalComponent]
  });
})();

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  bypassAuth: false,
  //apiUrl: 'https://pos-dx-be-dev.azurewebsites.net/api/',  //dev
  //apiUrl2: 'https://admin-dx-be-dev.azurewebsites.net/api/' //dev
  // apiUrl: 'http://posstagebe.markaziatest.com/api/',//staging
  // apiUrl2: 'http://adminstagebe.markaziatest.com/api/', //staging
  // masterBaseUrl: 'http://masterstagebe.markaziatest.com/api/', //staging
  // cmBaseUrl: 'http://cmstagebe.markaziatest.com/api/', //staging
  ChathubUrl: 'https://dxdevpos.markaziaapis.com/ChatHub',
  apiUrl: 'https://dxdevpos.markaziaapis.com/api/',
  apiUrl2: 'https://dxdevadminfinance.markaziaapis.com/api/',
  masterBaseUrl: 'https://dxdevmaster.markaziaapis.com/api/',
  cmBaseUrl: 'https://dxdevpns.markaziaapis.com/api/',
  portalPageUrl: 'https://dxdevportal.markaziahub.com/',
  markaziaHubUrl: 'https://dev.markaziahub.com/'
  //apiUrl: 'https://posbe.markaziasystem.com/api/',  //live
  //apiUrl2: 'https://adminbe.markaziasystem.com/api/', //live
  //masterBaseUrl: 'https://markaziamasterbe.markaziasystem.com/api/',//live
  //cmBaseUrl: 'http://cmstagebe.markaziatest.com/api/',//live
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/// <reference types="@angular/localize" />

//<reference types="@angular/localize" />



if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(96344), __webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map