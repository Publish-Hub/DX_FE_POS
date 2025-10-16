"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_auth_login_login_module_ts"],{

/***/ 14272:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_log_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/log.guard */ 21991);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 78146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
  canActivate: [_services_log_guard__WEBPACK_IMPORTED_MODULE_0__.LogGuard]
}];
class LoginRoutingModule {}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) {
  return new (t || LoginRoutingModule)();
};
LoginRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LoginRoutingModule
});
LoginRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 78146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 2898);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_services_utility_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utility-service.service */ 48766);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/httpservice.service */ 79345);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/header.service */ 36690);
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-connection-service */ 84083);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/general.service */ 21864);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);

















function LoginComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26)(1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Please wait.................loading your permissions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Please Enter Email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LoginComponent_div_17_span_1_Template, 3, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.itemForm.controls["identity"].errors);
  }
}
function LoginComponent_fa_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_fa_icon_24_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r2.faEye);
  }
}
function LoginComponent_fa_icon_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_fa_icon_25_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r3.faEyeSlash);
  }
}
function LoginComponent_div_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Please Enter Password .");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LoginComponent_div_26_span_1_Template, 3, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.itemForm.controls["password"].errors);
  }
}
function LoginComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r5.errorMessage, " ");
  }
}
function LoginComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function LoginComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(toastr, utlilitySerivce, spinner, router, formBuilder, httpserviceService, headerService, connectionService, _generalService, _commonService, _activeRoute) {
    this.toastr = toastr;
    this.utlilitySerivce = utlilitySerivce;
    this.spinner = spinner;
    this.router = router;
    this.formBuilder = formBuilder;
    this.httpserviceService = httpserviceService;
    this.headerService = headerService;
    this.connectionService = connectionService;
    this._generalService = _generalService;
    this._commonService = _commonService;
    this._activeRoute = _activeRoute;
    this.formModel = {};
    this.faUser = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faUser;
    this.faEye = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEye;
    this.faEyeSlash = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEyeSlash;
    this.IsshowPassword = false;
    this.userInfo = {};
    this.isLoading = false;
    this.rememberMe = false;
    this.isRemembered = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.status = 'ONLINE';
    this.isConnected = true;
    this.token = '';
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected.hasNetworkConnection;
      this.status = this.isConnected ? 'ONLINE' : 'OFFLINE';
    });
    this.itemForm = this.formBuilder.group({
      identity: [this.formModel.identity, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      password: [this.formModel.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      rememberMe: [this.formModel.rememberMe]
    });
  }
  ngOnInit() {
    this.checkRememberMe();
    this.handleTokenFlow();
  }
  /**
   * 🟢 Handles all token scenarios:
   * - SSO mode (token in URL)
   * - Already logged-in user (token in session/local)
   * - Missing token → redirect to portal login page
   */
  handleTokenFlow() {
    this._activeRoute.queryParams.subscribe(params => {
      const token = params['token'];
      const redirectUrl = params['redirectUrl'];
      // 🟢 CASE 1: SSO mode (token in URL)
      if (token) {
        console.log('%c[SSO] Token detected in URL', 'color:#00b894');
        localStorage.setItem('redirectUrl', redirectUrl || '');
        sessionStorage.setItem('token', token);
        const decoded = this._commonService.decodeToken(token);
        if (!decoded) {
          this.toastr.error('Invalid SSO token');
          return;
        }
        if (decoded?.Register2) {
          try {
            this.register2 = JSON.parse(decoded.Register2);
          } catch {}
        }
        const userId = +decoded.nameid || +decoded.UserID || +decoded.EmployeeID || 0;
        if (userId > 0) {
          this.getUserDetails(userId);
          this.getUserPermissions(userId);
        } else {
          this.toastr.warning('No valid user ID found in token');
        }
        return;
      }
      // 🟡 CASE 2: Check if token exists in session/localStorage
      const existingToken = sessionStorage.getItem('token') || localStorage.getItem('token');
      if (existingToken) {
        console.log('%c[SESSION] Existing token found, continue', 'color:#0984e3');
        return; // Already logged in, do nothing
      }
      // 🔴 CASE 3: No token → redirect to portal login page
      console.warn('[LOGIN] No token found anywhere. Redirecting to portal login...');
      const redirectTo = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.portalPageUrl}login`;
      window.location.href = redirectTo;
    });
  }
  getUserPermissions(userId) {
    this._generalService.getUserPermissions(userId).subscribe(response => {
      if (response?.data) {
        localStorage.setItem('permissions', JSON.stringify(response.data));
      }
    });
  }
  getUserDetails(userId) {
    this._generalService.GetUserDetails(userId).subscribe(response => {
      this.userData = response.data;
      localStorage.setItem('fullName', this.userData.fullName);
      localStorage.setItem('city', this.userData.city);
      localStorage.setItem('userid', this.userData.userId);
      localStorage.setItem('role', JSON.stringify(this.userData.role));
      localStorage.setItem('branch', JSON.stringify(this.userData.branch));
      if (this.register2) {
        const register = {
          registerObj: {
            id: this.register2.Id,
            registersName: this.register2.RegistersName,
            registeBranch: {
              branchId: this.register2.RegisteBranch.BranchId,
              branchName: this.register2.RegisteBranch.BranchName,
              city: this.register2.RegisteBranch.City
            }
          }
        };
        localStorage.setItem('register', JSON.stringify(register));
      }
      this.getUserMenu();
    });
  }
  getUserMenu() {
    this._generalService.GetUserMenuNew(17001).subscribe(response => {
      const userMenu = response?.data?.menu?.[0]?.items || [];
      if (userMenu.length) {
        const firstClickable = userMenu.find(m => m.canClick);
        this._commonService.NavigateToRoute(firstClickable?.url || 'no-menu');
      } else {
        this._commonService.NavigateToRoute('no-menu');
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  checkRememberMe() {
    const isRemember = localStorage.getItem('rememberMe');
    if (isRemember !== null) {
      this.itemForm.controls['identity'].setValue(localStorage.getItem('identity'));
      this.itemForm.controls['password'].setValue(localStorage.getItem('password'));
      this.formModel.identity = localStorage.getItem('identity');
      this.formModel.password = localStorage.getItem('password');
      this.formModel.rememberMe = true;
      this.rememberMe = true;
      this.isRemembered = true;
    }
  }
  showPassword() {
    this.IsshowPassword = !this.IsshowPassword;
  }
  // Existing manual login logic unchanged
  onLogin() {
    if (this.itemForm.valid) {
      if (this.status === 'ONLINE') {
        this.userInfo = {};
        this.isLoading = true;
        this.httpserviceService.login(this.itemForm.value).subscribe(response => {
          this.userInfo = response;
          this.userData = response.data;
          if (this.userData) {
            this.isLoading = false;
            localStorage.setItem('fullName', this.userData.fullName);
            localStorage.setItem('city', this.userData.city);
            localStorage.setItem('userid', this.userData.id);
            localStorage.setItem('role', JSON.stringify(this.userData.role));
            localStorage.setItem('branch', JSON.stringify(this.userData.branch));
            localStorage.setItem('register', JSON.stringify(this.userData.register));
            localStorage.setItem('permissions', JSON.stringify(this.userData.permissions));
            if (this.rememberMe) {
              localStorage.setItem('identity', this.itemForm.value.identity);
              localStorage.setItem('password', this.itemForm.value.password);
              localStorage.setItem('rememberMe', this.rememberMe.toString());
              localStorage.setItem('token', this.userData.token);
            } else {
              sessionStorage.setItem('token', this.userData.token);
            }
            this.getUserMenu();
          } else {
            this.errorMessage = this.userInfo.Errors?.[0]?.ErrorMessageEn;
            this.isLoading = false;
          }
        }, error => {
          this.isLoading = false;
          this.spinner.hide();
          this.errorMessage = error.error.errors?.[0]?.ErrorMessageEn;
        });
      } else {
        this.errorMessage = 'Please check your connection, Network error';
      }
    } else {
      this.itemForm.markAllAsTouched();
    }
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_utility_service_service__WEBPACK_IMPORTED_MODULE_1__.UtilityServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_2__.HttpserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_connection_service__WEBPACK_IMPORTED_MODULE_13__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 41,
  vars: 13,
  consts: [[1, "page-login", "d-flex", "align-items-center", "justify-content-center"], [1, "d-block", "fa-solid", "fa-circle-notch", "fa-spin", "primary-clr", "me-4", 2, "font-size", "80px"], ["class", "d-flex flex-column gap-2", 4, "ngIf"], [1, "container-fluid", "px-0", "mx-0", "d-none"], [1, "row", "px-0", "mx-0"], [1, "col-md-6", "col-sm-12", "px-0", "mx-0"], [1, "card-login"], ["src", "assets/images/markazia.png", "alt", "logo"], [1, "log-text"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "identity", "placeholder", "example@markazia.jo", 1, "form-control", 3, "ngModel"], ["class", "ng-dirty", 4, "ngIf"], ["formControlName", "password", 1, "form-control", 3, "type", "ngModel"], [1, "passicon"], ["class", "custom-search-botton", 3, "icon", "click", 4, "ngIf"], [1, "form-group", "rememberme"], [1, "form-check"], ["type", "checkbox", "formControlName", "rememberMe", "name", "rememberbtn", "id", "rememberMe", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "rememberMe", 1, "form-check-label"], ["routerLink", "/forgot-password", 1, "forgetpass"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["type", "submit", "class", "btn btn-login", 4, "ngIf"], ["type", "button", "class", "btn btn-login", 4, "ngIf"], [1, "bg-image"], ["src", "assets/images/loginLogo.png", "alt", ""], [1, "d-flex", "flex-column", "gap-2"], [1, "fw-600", "m-0"], [1, "ng-dirty"], [4, "ngIf"], [1, "error"], [1, "custom-search-botton", 3, "icon", "click"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-login"], ["type", "button", 1, "btn", "btn-login"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 3, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8)(9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Please fill your detail to access your account.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "form", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10)(13, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 10)(19, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, LoginComponent_fa_icon_24_Template, 1, 1, "fa-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, LoginComponent_fa_icon_25_Template, 1, 1, "fa-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 16)(28, "div", 17)(29, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_29_listener($event) {
        return ctx.rememberMe = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " Remember Me ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Forget your password ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, LoginComponent_div_34_Template, 2, 1, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, LoginComponent_button_36_Template, 2, 0, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, LoginComponent_button_37_Template, 2, 0, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 5)(39, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.token);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.itemForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.formModel.identity);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.itemForm.controls["identity"].invalid && (ctx.itemForm.controls["identity"].dirty || ctx.itemForm.controls["identity"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.IsshowPassword ? "text" : "password")("ngModel", ctx.formModel.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.IsshowPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.IsshowPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.itemForm.controls["password"].invalid && (ctx.itemForm.controls["password"].dirty || ctx.itemForm.controls["password"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.rememberMe);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 28990:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 14272);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 78146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-connection-service */ 84083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);







class LoginModule {}
LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};
LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ng_connection_service__WEBPACK_IMPORTED_MODULE_6__.ConnectionServiceModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ng_connection_service__WEBPACK_IMPORTED_MODULE_6__.ConnectionServiceModule]
  });
})();

/***/ }),

/***/ 21991:
/*!***************************************!*\
  !*** ./src/app/services/log.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogGuard": () => (/* binding */ LogGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.service */ 69082);



class LogGuard {
  constructor(router, sharedService) {
    this.router = router;
    this.sharedService = sharedService;
    this.isLog = false;
    console.log(this.sharedService.getToken ? true : false);
    this.isLog = this.sharedService.getToken ? true : false;
  }
  canActivate(route, state) {
    // return true;
    if (this.sharedService.getToken) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
LogGuard.ɵfac = function LogGuard_Factory(t) {
  return new (t || LogGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
LogGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LogGuard,
  factory: LogGuard.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_module_ts.js.map