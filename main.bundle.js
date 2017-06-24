webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/AddCustomer/addCustomer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddCustomerComponent = (function () {
    function AddCustomerComponent() {
    }
    return AddCustomerComponent;
}());
AddCustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/AddCustomer/addCustomer.html")
    })
], AddCustomerComponent);

//# sourceMappingURL=addCustomer.component.js.map

/***/ }),

/***/ "../../../../../src/app/AddCustomer/addCustomer.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"panel-title\">Admin - Add Customer</span>\r\n                        <!--<span class=\"panel-icon pull-right\">\r\n                           <a id=\"btnDownloadPdf\"  class=\"fa fa-file-pdf-o\" (click)=\"downloadPdf()\"></a>\r\n                            <a id=\"btnDownloadExcel\" class=\"fa fa-file-excel-o\" (click)=\"downloadExcel()\" ></a>\r\n                        </span>-->\r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">Add Customer</span>\r\n                                    </div>\r\n                                    <div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtFirstName\" class=\"col-lg-3 control-label\">First Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtFirstName\" class=\"form-control\" placeholder=\"First Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtLastName\" class=\"col-lg-3 control-label\">Last Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtLastName\" class=\"form-control\" placeholder=\"Last Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtEmailId\" class=\"col-lg-3 control-label\">Email ID</label>\r\n\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtEmailId\" class=\"form-control\" placeholder=\"Email ID...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtUserName\" class=\"col-lg-3 control-label\">User Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtUserName\" class=\"form-control\" placeholder=\"User Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-3 control-label\" for=\"txtCommnets\">Comments</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <textarea class=\"form-control textarea-grow\" id=\"txtCommnets\" rows=\"4\"></textarea>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-lg-8\">                                                    <div>\r\n                                                        <button type=\"submit\" class=\"btn btn-bordered btn-primary pull-right\">Register</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/AddCustomer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addCustomer_component__ = __webpack_require__("../../../../../src/app/AddCustomer/addCustomer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__addCustomer_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/AleDataUpload/aleDataUpload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AleDataUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AleDataUploadComponent = (function () {
    function AleDataUploadComponent() {
    }
    return AleDataUploadComponent;
}());
AleDataUploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/AleDataUpload/aleDataUpload.html")
    })
], AleDataUploadComponent);

//# sourceMappingURL=aleDataUpload.component.js.map

/***/ }),

/***/ "../../../../../src/app/AleDataUpload/aleDataUpload.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"panel-title\">ALE - Data Upload</span>                       \r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">ALE Data Upload</span>\r\n                                    </div>\r\n                                    <div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"fileAleUpload\" class=\"col-lg-3 control-label\">Select File : </label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"file\" id=\"fileAleUpload\" class=\"form-control\" placeholder=\"Upload File\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/AleDataUpload/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aleDataUpload_component__ = __webpack_require__("../../../../../src/app/AleDataUpload/aleDataUpload.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__aleDataUpload_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/ApplicableLargeEmployee/applicableLargeEmployee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicableLargeEmployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApplicableLargeEmployeeComponent = (function () {
    function ApplicableLargeEmployeeComponent() {
    }
    return ApplicableLargeEmployeeComponent;
}());
ApplicableLargeEmployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/ApplicableLargeEmployee/applicableLargeEmployee.html")
    })
], ApplicableLargeEmployeeComponent);

//# sourceMappingURL=applicableLargeEmployee.component.js.map

/***/ }),

/***/ "../../../../../src/app/ApplicableLargeEmployee/applicableLargeEmployee.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <!--<span class=\"panel-title\">Client Onboarding - Personall Information</span>                        -->\r\n                        <span class=\"panel-title\">ALE</span>\r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">Applicable Large Employee Form</span>\r\n                                    </div>\r\n                                    <div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtALEName\" class=\"col-lg-3 control-label\">ALE Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtALEName\" class=\"form-control\" placeholder=\"ALE Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtFEIN\" class=\"col-lg-3 control-label\"> FEIN</label>\r\n                                                <div class=\"col-lg-4\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtFEIN\" class=\"form-control\" placeholder=\"FEIN...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtAddress1\" class=\"col-lg-3 control-label\">Address 1</label>\r\n                                                <div class=\"col-lg-7\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtAddress1\" class=\"form-control\" placeholder=\"Address 1...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtAddress2\" class=\"col-lg-3 control-label\">Address 2</label>\r\n                                                <div class=\"col-lg-7\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtAddress2\" class=\"form-control\" placeholder=\"Address 2...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-2 control-label\" for=\"txtCity\">City</label>\r\n                                                <div class=\"col-lg-2\">\r\n                                                    <div>\r\n                                                        <input class=\"form-control\" id=\"txtCity\" placeholder=\"City...\" />\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <label class=\"col-lg-2 control-label\" for=\"txtState\">State</label>\r\n                                                <div class=\"col-lg-2\">\r\n                                                    <div>\r\n                                                        <input class=\"form-control\" id=\"txtState\" placeholder=\"State...\" />\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <label class=\"col-lg-2 control-label\" for=\"txtZip\">ZIP</label>\r\n                                                <div class=\"col-lg-2\">\r\n                                                    <div>\r\n                                                        <input class=\"form-control\" id=\"txtZip\" placeholder=\"ZIP...\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-2 control-label\" for=\"txtProvince\">Province</label>\r\n                                                <div class=\"col-lg-4\">\r\n                                                    <div>\r\n                                                        <input class=\"form-control\" id=\"txtProvince\" placeholder=\"Province...\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label class=\"col-lg-3 control-label\" for=\"ddlCountry\">Country</label>\r\n                                                <div class=\"col-lg-3\">\r\n                                                    <div>\r\n                                                        <select id=\"ddlCountry\">\r\n                                                            <option>United States</option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-lg-12\">\r\n                                                    <div class=\"panel panel-primary\">\r\n                                                        <div class=\"panel-body\">\r\n                                                            <fieldset>\r\n                                                                <legend>ACA Contact</legend>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"txtFirstName\" class=\"col-lg-3 control-label\">First Name</label>\r\n                                                                    <div class=\"col-lg-5\">\r\n                                                                        <div>\r\n                                                                            <input type=\"text\" id=\"txtFirstName\" class=\"form-control\" placeholder=\"First Name\">\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"txtLastName\" class=\"col-lg-3 control-label\">Last Name</label>\r\n                                                                    <div class=\"col-lg-5\">\r\n                                                                        <div>\r\n                                                                            <input type=\"text\" id=\"txtLastName\" class=\"form-control\" placeholder=\"Last Name\">\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"txtPhoneNo\" class=\"col-lg-3 control-label\">Phone No.</label>\r\n                                                                    <div class=\"col-lg-3\">\r\n                                                                        <div>\r\n                                                                            <input type=\"text\" id=\"txtPhoneNo\" class=\"form-control\" placeholder=\"Phone No\">\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </fieldset>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/ApplicableLargeEmployee/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__applicableLargeEmployee_component__ = __webpack_require__("../../../../../src/app/ApplicableLargeEmployee/applicableLargeEmployee.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__applicableLargeEmployee_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/ClientPayroll/clientPayroll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientPayrollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClientPayrollComponent = (function () {
    function ClientPayrollComponent() {
    }
    return ClientPayrollComponent;
}());
ClientPayrollComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/ClientPayroll/clientPayroll.html")
    })
], ClientPayrollComponent);

//# sourceMappingURL=clientPayroll.component.js.map

/***/ }),

/***/ "../../../../../src/app/ClientPayroll/clientPayroll.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"panel-title\">Client Onboarding - Payroll Information</span>                        \r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">Client Onboarding - Payroll Information page under Construction</span>\r\n                                    </div>\r\n                                    <!--<div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtFirstName\" class=\"col-lg-3 control-label\">First Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtFirstName\" class=\"form-control\" placeholder=\"First Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtLastName\" class=\"col-lg-3 control-label\">Last Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtLastName\" class=\"form-control\" placeholder=\"Last Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtEmailId\" class=\"col-lg-3 control-label\">Email ID</label>\r\n\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtEmailId\" class=\"form-control\" placeholder=\"Email ID...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtUserName\" class=\"col-lg-3 control-label\">User Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtUserName\" class=\"form-control\" placeholder=\"User Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-3 control-label\" for=\"txtCommnets\">Comments</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <textarea class=\"form-control textarea-grow\" id=\"txtCommnets\" rows=\"4\"></textarea>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-lg-8\">                                                    <div>\r\n                                                        <button type=\"submit\" class=\"btn btn-bordered btn-primary pull-right\">Register</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>-->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/ClientPayroll/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clientPayroll_component__ = __webpack_require__("../../../../../src/app/ClientPayroll/clientPayroll.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__clientPayroll_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/ControlGroup/controlGroup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ControlGroupComponent = (function () {
    function ControlGroupComponent() {
    }
    return ControlGroupComponent;
}());
ControlGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/ControlGroup/controlGroup.html")
    })
], ControlGroupComponent);

//# sourceMappingURL=controlGroup.component.js.map

/***/ }),

/***/ "../../../../../src/app/ControlGroup/controlGroup.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <!--<span class=\"panel-title\">Client Onboarding - Personall Information</span>                        -->\r\n                        <span class=\"panel-title\">Control Group</span>\r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">On Boarding Control Group Form</span>\r\n                                    </div>\r\n                                    <div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtControlGroup\" class=\"col-lg-5 control-label\">Control Group Name</label>\r\n                                                <div class=\"col-lg-6\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtControlGroup\" class=\"form-control\" placeholder=\"Control group Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtControlGroupEIN\" class=\"col-lg-5 control-label\">Control Group EIN</label>\r\n                                                <div class=\"col-lg-6\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtControlGroupEIN\" class=\"form-control\" placeholder=\"EIN...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtAcaCustomer\" class=\"col-lg-5 control-label\">Aca Custormer</label>\r\n\r\n                                                <div class=\"col-lg-6\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtAcaCustomer\" class=\"form-control\" placeholder=\"Aca Customer...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtMeasureStartDate\" class=\"col-lg-5 control-label\">Measure Start Date</label>\r\n                                                <div class=\"col-lg-6\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtMeasureStartDate\" class=\"form-control\" placeholder=\"Measure Start Date...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-5 control-label\" for=\"txtMeasureEndDate\">Measure End Date</label>\r\n                                                <div class=\"col-lg-6\">\r\n                                                    <div>\r\n                                                        <input class=\"form-control\" id=\"txtMeasureEndDate\" placeholder=\"Measure Start Date...\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-5 control-label\" for=\"txtMeasureEndDate1\">Measure End Date 1</label>\r\n                                                <div class=\"col-lg-6\">\r\n                                                    <div>\r\n                                                        <input class=\"form-control\" id=\"txtMeasureEndDate1\" placeholder=\"Measure Start Date 1...\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-5 control-label\" for=\"txtMeasureEndDate2\">Measure End Date 2</label>\r\n                                                <div class=\"col-lg-6\">\r\n                                                    <div>\r\n                                                        <input class=\"form-control\" id=\"txtMeasureEndDate2\" placeholder=\"Measure Start Date 2...\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-5 control-label\" for=\"txtMeasureEndDate3\">Measure End Date 3</label>\r\n                                                <div class=\"col-lg-6\">\r\n                                                    <div>\r\n                                                        <input class=\"form-control\" id=\"txtMeasureEndDate3\" placeholder=\"Measure Start Date 3...\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-5 control-label\" for=\"chkActive\">Active</label>\r\n                                                <div class=\"col-lg-6\">\r\n                                                    <div>\r\n                                                        <input  id=\"chkActive\" type=\"checkbox\" checked/>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <button type=\"submit\" class=\"btn btn-bordered btn-primary pull-right\">Save</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/ControlGroup/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controlGroup_component__ = __webpack_require__("../../../../../src/app/ControlGroup/controlGroup.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__controlGroup_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeBreakInServiceReport/employeeBreakInService.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employeeBreakInServiceReport_service__ = __webpack_require__("../../../../../src/app/EmployeeBreakInServiceReport/employeeBreakInServiceReport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_export_service__ = __webpack_require__("../../../../../src/app/shared/export.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeBreakInServiceReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeBreakInServiceReportComponent = (function () {
    function EmployeeBreakInServiceReportComponent(_employeeBreakInServiceReportService, _export) {
        this._employeeBreakInServiceReportService = _employeeBreakInServiceReportService;
        this._export = _export;
        this.rows = [];
        this.page = 1;
        this.itemsPerPage = 5;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.columns = [
            { title: 'Employee Name', className: 'va-m', name: 'employeeName' },
            { title: 'SSN', className: 'va-m', name: 'ssnNumber' },
            { title: 'Service Status', className: 'va-m', name: 'serviceStatus' },
            { title: 'Week Starting', className: 'va-m', name: 'weekStarting' },
            { title: 'Week Ending', className: 'va-m', name: 'weekEnding' },
            { title: 'Week Count', className: 'va-m', name: 'weekCount' },
        ];
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table', 'table-striped', 'table-bordered', 'table-hover']
        };
        this.employeeBeakInService = [];
    }
    EmployeeBreakInServiceReportComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
        this.dataLoaded = false;
        this.employeeBreakInServiceReports();
    };
    EmployeeBreakInServiceReportComponent.prototype.employeeBreakInServiceReports = function () {
        var _this = this;
        this._employeeBreakInServiceReportService.getEmployeeDemographicsReports().subscribe(function (empbreakinservice) {
            _this.employeeBeakInService = empbreakinservice;
            _this.onChangeTable(_this.config);
            _this.dataLoaded = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeBreakInServiceReportComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    EmployeeBreakInServiceReportComponent.prototype.downloadPdf = function () {
    };
    EmployeeBreakInServiceReportComponent.prototype.downloadExcel = function () {
        var tbl = document.getElementById('datatable');
        var btn = document.getElementById('btnDownloadExcel');
        if (tbl) {
            console.log(tbl.children[0]);
        }
        if (tbl && tbl.children.length > 0) {
            this._export.excelByTableElement(btn, tbl.children[0], 'Break In Service Report', 'EmployeeBreakInService');
        }
    };
    EmployeeBreakInServiceReportComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    EmployeeBreakInServiceReportComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.employeeBeakInService, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    EmployeeBreakInServiceReportComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    EmployeeBreakInServiceReportComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.employeeBeakInService; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    return EmployeeBreakInServiceReportComponent;
}());
EmployeeBreakInServiceReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/EmployeeBreakInServiceReport/employeeBreakInServiceReport.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__employeeBreakInServiceReport_service__["a" /* EmployeeBreakInServiceReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__employeeBreakInServiceReport_service__["a" /* EmployeeBreakInServiceReportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */]) === "function" && _b || Object])
], EmployeeBreakInServiceReportComponent);

var _a, _b;
//# sourceMappingURL=employeeBreakInService.component.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeBreakInServiceReport/employeeBreakInServiceDetail.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=employeeBreakInServiceDetail.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeBreakInServiceReport/employeeBreakInServiceReport.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\n<section id=\"content_wrapper\">\n\n    <!-- -------------- Topbar -------------- -->\n    <header id=\"topbar\" class=\"ph10\">\n        <div class=\"topbar-left\">\n            <div class=\"allcp-form theme-primary\">\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\n                    data-panel-title=\"false\">\n                    <div class=\"panel-heading\">\n                        <span class=\"panel-title\">Employee Break In Service Report</span>\n                        <span class=\"panel-icon pull-right\">\n                           <a id=\"btnDownloadPdf\"  class=\"fa fa-file-pdf-o\" (click)=\"downloadPdf()\"></a>\n                            <a id=\"btnDownloadExcel\" class=\"fa fa-file-excel-o\" (click)=\"downloadExcel()\" ></a>\n                        </span>\n                    </div>                   \n                    <div class=\"panel-body\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"row\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"form-horizontal\">\n                                            <div class=\"form-group\">\n                                                <label for=\"inputTableSearch\" class=\"col-sm-2 control-label\">Search</label>\n                                                <div class=\"col-sm-6\">\n                                                    <input type=\"text\" class=\"form-control\" id=\"inputTableSearch\" placeholder=\"Search\" *ngIf=\"config.filtering\" [ngTableFiltering]=\"config.filtering\"\n                                                        (tableChanged)=\"onChangeTable(config)\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"table-responsive over-x_table\">\n                                            <ng-table id=\"datatable\" ngclass=\"table table-striped table-bordered table-hover\" [config]=\"config\" (tableChanged)=\"onChangeTable(config)\"\n                                                (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n                                            </ng-table>\n                                            <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\"\n                                                [maxSize]=\"maxSize\" [boundaryLinks]=\"false\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\"\n                                                (numPages)=\"numPages = $event\">\n                                            </pagination>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <!-- -------------- /Topbar -------------- -->\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/EmployeeBreakInServiceReport/employeeBreakInServiceReport.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeBreakInServiceReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeBreakInServiceReportService = (function () {
    function EmployeeBreakInServiceReportService(_http) {
        this._http = _http;
        this._empBreakInServiceReportUrl = 'app/api/';
    }
    EmployeeBreakInServiceReportService.prototype.getEmployeeDemographicsReports = function () {
        var fileName = 'employeebreakinservice.json';
        return this._http.get(this._empBreakInServiceReportUrl + fileName)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    EmployeeBreakInServiceReportService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Failed in web api(Server error) ');
    };
    return EmployeeBreakInServiceReportService;
}());
EmployeeBreakInServiceReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EmployeeBreakInServiceReportService);

var _a;
//# sourceMappingURL=employeeBreakInServiceReport.service.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeBreakInServiceReport/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employeeBreakInService_component__ = __webpack_require__("../../../../../src/app/EmployeeBreakInServiceReport/employeeBreakInService.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__employeeBreakInService_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employeeBreakInServiceReport_service__ = __webpack_require__("../../../../../src/app/EmployeeBreakInServiceReport/employeeBreakInServiceReport.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__employeeBreakInServiceReport_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__ = __webpack_require__("../../../../../src/app/EmployeeBreakInServiceReport/employeeBreakInServiceDetail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeBreakInServiceDetail__["EmployeeSummaryReportService"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeDemographicsReport/employeeDemographicDetail.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=employeeDemographicDetail.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeDemographicsReport/employeeDemographicReport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employeeDemographicReport_service__ = __webpack_require__("../../../../../src/app/EmployeeDemographicsReport/employeeDemographicReport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_export_service__ = __webpack_require__("../../../../../src/app/shared/export.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDemographicReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeDemographicReportComponent = (function () {
    function EmployeeDemographicReportComponent(_employeeDemographicReportService, _export) {
        this._employeeDemographicReportService = _employeeDemographicReportService;
        this._export = _export;
        this.rows = [];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.columns = [
            { title: 'Parent Company', className: 'va-m', name: 'parentCompany' },
            { title: 'Prodcution Company', className: 'va-m', name: 'productionCompany' },
            { title: 'Show Name', className: 'va-m', name: 'showName' },
            { title: 'Pay Roll Company', className: 'va-m', name: 'payRollCompany' },
            { title: 'Employee Name', className: 'va-m', name: 'employeeName' },
            { title: 'Union Status', className: 'va-m', name: 'unionStatus' },
            { title: 'SSN', className: 'va-m', name: 'ssnNumber' },
            { title: 'ACA Employment Basis', className: 'va-m', name: 'acaEmploymentBasis' },
            { title: 'Schedule Code', className: 'va-m', name: 'scheduleCode' },
            { title: 'Pay Rate', className: 'va-m', name: 'payRate' },
            { title: 'Job Description', className: 'va-m', name: 'jobDescription' },
            { title: 'Gender', className: 'va-m', name: 'gender' },
            { title: 'Date of Birth', className: 'va-m', name: 'dateOfBirth' },
            { title: 'Email', className: 'va-m', name: 'email' },
            { title: 'Address', className: 'va-m', name: 'address' }
        ];
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table', 'table-striped', 'table-bordered', 'table-hover']
        };
        this.employeeDemographicDetails = [];
    }
    EmployeeDemographicReportComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
        this.dataLoaded = false;
        this.employeeDemographicsReports();
    };
    EmployeeDemographicReportComponent.prototype.employeeDemographicsReports = function () {
        var _this = this;
        this._employeeDemographicReportService.getEmployeeDemographicsReports().subscribe(function (empDemographics) {
            _this.employeeDemographicDetails = empDemographics;
            _this.onChangeTable(_this.config);
            _this.dataLoaded = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeDemographicReportComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    EmployeeDemographicReportComponent.prototype.downloadPdf = function () {
    };
    EmployeeDemographicReportComponent.prototype.downloadExcel = function () {
        var tbl = document.getElementById('datatable');
        var btn = document.getElementById('btnDownloadExcel');
        if (tbl) {
            console.log(tbl.children[0]);
        }
        if (tbl && tbl.children.length > 0) {
            this._export.excelByTableElement(btn, tbl.children[0], 'Employee Demographic Report');
        }
    };
    EmployeeDemographicReportComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    EmployeeDemographicReportComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.employeeDemographicDetails, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    EmployeeDemographicReportComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    EmployeeDemographicReportComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.employeeDemographicDetails; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    return EmployeeDemographicReportComponent;
}());
EmployeeDemographicReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/EmployeeDemographicsReport/employeeDemographicReport.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__employeeDemographicReport_service__["a" /* EmployeeDemographicReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__employeeDemographicReport_service__["a" /* EmployeeDemographicReportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */]) === "function" && _b || Object])
], EmployeeDemographicReportComponent);

var _a, _b;
//# sourceMappingURL=employeeDemographicReport.component.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeDemographicsReport/employeeDemographicReport.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\n<section id=\"content_wrapper\">\n\n    <!-- -------------- Topbar -------------- -->\n    <header id=\"topbar\" class=\"ph10\">\n        <div class=\"topbar-left\">\n            <div class=\"allcp-form theme-primary\">\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\n                    data-panel-title=\"false\">\n                    <div class=\"panel-heading\">\n                        <span class=\"panel-title\">Employee Demographics Report</span>\n                        <span class=\"panel-icon pull-right\">\n                           <a id=\"btnDownloadPdf\"  class=\"fa fa-file-pdf-o\" (click)=\"downloadPdf()\"></a>\n                            <a id=\"btnDownloadExcel\" class=\"fa fa-file-excel-o\" (click)=\"downloadExcel()\" ></a>\n                        </span>\n                    </div>                   \n                    <div class=\"panel-body\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"row\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"form-horizontal\">\n                                            <div class=\"form-group\">\n                                                <label for=\"inputTableSearch\" class=\"col-sm-2 control-label\">Search</label>\n                                                <div class=\"col-sm-6\">\n                                                    <input type=\"text\" class=\"form-control\" id=\"inputTableSearch\" placeholder=\"Search\" *ngIf=\"config.filtering\" [ngTableFiltering]=\"config.filtering\"\n                                                        (tableChanged)=\"onChangeTable(config)\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"table-responsive over-x_table\">\n                                            <ng-table id=\"datatable\" ngclass=\"table table-striped table-bordered table-hover\" [config]=\"config\" (tableChanged)=\"onChangeTable(config)\"\n                                                (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n                                            </ng-table>\n                                            <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\"\n                                                [maxSize]=\"maxSize\" [boundaryLinks]=\"false\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\"\n                                                (numPages)=\"numPages = $event\">\n                                            </pagination>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <!-- -------------- /Topbar -------------- -->\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/EmployeeDemographicsReport/employeeDemographicReport.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDemographicReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeDemographicReportService = (function () {
    function EmployeeDemographicReportService(_http) {
        this._http = _http;
        this._empDemographicsReportUrl = 'app/api/';
    }
    EmployeeDemographicReportService.prototype.getEmployeeDemographicsReports = function () {
        var fileName = 'employeedemographic.json';
        return this._http.get(this._empDemographicsReportUrl + fileName)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    EmployeeDemographicReportService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Failed in web api(Server error) ');
    };
    return EmployeeDemographicReportService;
}());
EmployeeDemographicReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EmployeeDemographicReportService);

var _a;
//# sourceMappingURL=employeeDemographicReport.service.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeDemographicsReport/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employeeDemographicReport_component__ = __webpack_require__("../../../../../src/app/EmployeeDemographicsReport/employeeDemographicReport.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__employeeDemographicReport_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employeeDemographicReport_service__ = __webpack_require__("../../../../../src/app/EmployeeDemographicsReport/employeeDemographicReport.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__employeeDemographicReport_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__ = __webpack_require__("../../../../../src/app/EmployeeDemographicsReport/employeeDemographicDetail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeDemographicDetail__["EmployeeSummaryReportService"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeEligibilityReport/empeligibleworkdetail.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=empeligibleworkdetail.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeEligibilityReport/employeeEligibilityReport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employeeEligibilityReport_service__ = __webpack_require__("../../../../../src/app/EmployeeEligibilityReport/employeeEligibilityReport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_export_service__ = __webpack_require__("../../../../../src/app/shared/export.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeEligibilityReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeEligibilityReportComponent = (function () {
    function EmployeeEligibilityReportComponent(_employeeEligibilityReportService, _export) {
        this._employeeEligibilityReportService = _employeeEligibilityReportService;
        this._export = _export;
        this.rows = [];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.columns = [
            { title: 'Employee Name', className: 'va-m', name: 'employeeName' },
            { title: 'Union Status', className: 'va-m', name: 'unionStatus' },
            { title: 'SSN', className: 'va-m', name: 'ssnNumber' },
            { title: 'Most Recent Show', className: 'va-m', name: 'mostRecentShow' },
            { title: 'Most Recent Job Title', className: 'va-m', name: 'mostRecentJobTitle' },
            { title: 'Avg Weekly Hours', className: 'va-m', name: 'averageWeeklyHours' },
            { title: 'Total Hours', className: 'va-m', name: 'totalHours' },
            { title: 'Standard Measured Eligibility', className: 'va-m', name: 'standardMeasuredEligibility' },
            { title: 'Benefits Effective', className: 'va-m', name: 'benefitsEffective' },
        ];
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table', 'table-striped', 'table-bordered', 'table-hover']
        };
        this.empDetails = [];
    }
    EmployeeEligibilityReportComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
        this.dataLoaded = false;
        this.employeeEligibleReportsData();
    };
    EmployeeEligibilityReportComponent.prototype.employeeEligibleReportsData = function () {
        var _this = this;
        this._employeeEligibilityReportService.getEmployeeEligibleReports().subscribe(function (empdetails) {
            _this.empDetails = empdetails;
            _this.onChangeTable(_this.config);
            _this.dataLoaded = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeEligibilityReportComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    EmployeeEligibilityReportComponent.prototype.downloadPdf = function () {
    };
    EmployeeEligibilityReportComponent.prototype.downloadExcel = function () {
        var tbl = document.getElementById('datatable');
        var btn = document.getElementById('btnDownloadExcel');
        if (tbl) {
            console.log(tbl.children[0]);
        }
        if (tbl && tbl.children.length > 0) {
            this._export.excelByTableElement(btn, tbl.children[0], 'Employee Eligibility Report');
        }
    };
    EmployeeEligibilityReportComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    EmployeeEligibilityReportComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.empDetails, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    EmployeeEligibilityReportComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    EmployeeEligibilityReportComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.empDetails; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    return EmployeeEligibilityReportComponent;
}());
EmployeeEligibilityReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/EmployeeEligibilityReport/employeeEligibilityReport.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__employeeEligibilityReport_service__["a" /* EmployeeEligibilityReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__employeeEligibilityReport_service__["a" /* EmployeeEligibilityReportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */]) === "function" && _b || Object])
], EmployeeEligibilityReportComponent);

var _a, _b;
//# sourceMappingURL=employeeEligibilityReport.component.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeEligibilityReport/employeeEligibilityReport.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\n<section id=\"content_wrapper\">\n\n    <!-- -------------- Topbar -------------- -->\n    <header id=\"topbar\" class=\"ph10\">\n        <div class=\"topbar-left\">\n            <div class=\"allcp-form theme-primary\">\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\n                    data-panel-title=\"false\">\n                    <div class=\"panel-heading\">\n                        <span class=\"panel-title\">Employee Eligibility Report</span>\n                        <span class=\"panel-icon pull-right\">\n                           <a id=\"btnDownloadPdf\"  class=\"fa fa-file-pdf-o\" (click)=\"downloadPdf()\"></a>\n                            <a id=\"btnDownloadExcel\" class=\"fa fa-file-excel-o\" (click)=\"downloadExcel()\" ></a>\n                        </span>\n                    </div>                   \n                    <div class=\"panel-body\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"row\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"form-horizontal\">\n                                            <div class=\"form-group\">\n                                                <label for=\"inputTableSearch\" class=\"col-sm-2 control-label\">Search</label>\n                                                <div class=\"col-sm-6\">\n                                                    <input type=\"text\" class=\"form-control\" id=\"inputTableSearch\" placeholder=\"Search\" *ngIf=\"config.filtering\" [ngTableFiltering]=\"config.filtering\"\n                                                        (tableChanged)=\"onChangeTable(config)\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"table-responsive over-x_table\">\n                                            <ng-table id=\"datatable\" ngclass=\"table table-striped table-bordered table-hover\" [config]=\"config\" (tableChanged)=\"onChangeTable(config)\"\n                                                (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n                                            </ng-table>\n                                            <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\"\n                                                [maxSize]=\"maxSize\" [boundaryLinks]=\"false\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\"\n                                                (numPages)=\"numPages = $event\">\n                                            </pagination>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <!-- -------------- /Topbar -------------- -->\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/EmployeeEligibilityReport/employeeEligibilityReport.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeEligibilityReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CONFIGURATION } from '../app.config';
var EmployeeEligibilityReportService = (function () {
    function EmployeeEligibilityReportService(_http) {
        this._http = _http;
        this._empEligibleReportUrl = 'app/api/';
    }
    EmployeeEligibilityReportService.prototype.getEmployeeEligibleReports = function () {
        var fileName = 'empeligibility.json';
        return this._http.get(this._empEligibleReportUrl + fileName)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    EmployeeEligibilityReportService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Failed in web api(Server error) ');
    };
    return EmployeeEligibilityReportService;
}());
EmployeeEligibilityReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EmployeeEligibilityReportService);

var _a;
//# sourceMappingURL=employeeEligibilityReport.service.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeEligibilityReport/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employeeEligibilityReport_component__ = __webpack_require__("../../../../../src/app/EmployeeEligibilityReport/employeeEligibilityReport.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__employeeEligibilityReport_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employeeEligibilityReport_service__ = __webpack_require__("../../../../../src/app/EmployeeEligibilityReport/employeeEligibilityReport.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__employeeEligibilityReport_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__ = __webpack_require__("../../../../../src/app/EmployeeEligibilityReport/empeligibleworkdetail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__empeligibleworkdetail__["EmployeeSummaryReportService"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeSummaryReport/employeeSummaryDetail.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=employeeSummaryDetail.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeSummaryReport/employeeSummaryReport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employeeSummaryReport_service__ = __webpack_require__("../../../../../src/app/EmployeeSummaryReport/employeeSummaryReport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_export_service__ = __webpack_require__("../../../../../src/app/shared/export.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeSummaryReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeSummaryReportComponent = (function () {
    function EmployeeSummaryReportComponent(_employeeSummaryReportService, _export) {
        this._employeeSummaryReportService = _employeeSummaryReportService;
        this._export = _export;
        this.empDetails = [];
        this.rows = [];
        this.columns = [
            { title: 'Employee Name', className: 'va-m', name: 'employeeName' },
            { title: 'Union Status', className: 'va-m', name: 'unionStatus' },
            { title: 'SSN', className: 'va-m', name: 'ssnNumber' },
            { title: 'Most Recent Show', className: 'va-m', name: 'mostRecentShow' },
            { title: 'Most Recent Job Title', className: 'va-m', name: 'mostRecentJobTitle' },
            { title: 'ACA Empl Basis', className: 'va-m', name: 'acaEmployeeBasis' },
            { title: 'ACA Start Date', className: 'va-m', name: 'acaStartDate' },
            { title: 'Last Paid Week Ending', className: 'va-m', name: 'lastPaidWeekEnding' },
            { title: 'Full Time Benefits Effective', className: 'va-m', name: 'fullTimeBenefitsEffective' },
            { title: 'Applicable Periods', className: 'va-m', name: 'applicablePeriods' },
            { title: 'Standard Meas Period', className: 'va-m', name: 'standardMeasurementPeriod' },
            { title: 'Avg Weekly Hours', className: 'va-m', name: 'standardAverageWeeklyHours' },
            { title: 'Total Hours', className: 'va-m', name: 'standardTotalHours' },
            { title: 'Standard Measured Eligibility', className: 'va-m', name: 'standardMeasuredEligibility' },
            { title: 'Standard Benefits Effective', className: 'va-m', name: 'standardBenefitsEffective' },
            { title: 'Standard Stability Period', className: 'va-m', name: 'standardStabilityPeriod' },
            { title: 'Intial Meas Period', className: 'va-m', name: 'initialMeasurementPeriod' },
            { title: 'Avg Weekly Hours', className: 'va-m', name: 'initialAverageWeeklyHours' },
            { title: 'Total Hours', className: 'va-m', name: 'initialTotalHours' },
            { title: 'Intially Measure Eligibility', className: 'va-m', name: 'initialMeasureEligibility' },
            { title: 'Intially Benefits Effective', className: 'va-m', name: 'initialBenefitsEffective' },
            { title: 'Intially Stability Period', className: 'va-m', name: 'initialStabilityPeriod' }
        ];
        this.page = 1;
        this.itemsPerPage = 4;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table', 'table-striped', 'table-bordered', 'table-hover']
        };
    }
    EmployeeSummaryReportComponent.prototype.ngOnInit = function () {
        this.reportRunDate = '2/3/2015 12:00:00 AM';
        this.planStartDate = '1/1/2016 12:00:00 AM';
        this.measurmentPeriod = '11 Months';
        this.newHireMeasurmentPeriod = '';
        this.adminstrativePeriod = '30 days';
        this.companyName = ' BIG FISH ENTERTAINMENT LLC';
        this.employeeEligibleReportsData();
    };
    EmployeeSummaryReportComponent.prototype.employeeEligibleReportsData = function () {
        var _this = this;
        this._employeeSummaryReportService.getEmployeeSummaryReports().subscribe(function (empdetails) {
            _this.empDetails = empdetails;
            _this.onChangeTable(_this.config);
            _this.dataLoaded = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeSummaryReportComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    EmployeeSummaryReportComponent.prototype.downloadPdf = function () {
    };
    EmployeeSummaryReportComponent.prototype.downloadExcel = function () {
        var tbl = document.getElementById('datatable');
        var btn = document.getElementById('btnDownloadExcel');
        if (tbl) {
            console.log(tbl.children[0]);
        }
        if (tbl && tbl.children.length > 0) {
            this._export.excelByTableElement(btn, tbl.children[0], 'Employee Eligibility Report');
        }
    };
    EmployeeSummaryReportComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    EmployeeSummaryReportComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.empDetails, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    EmployeeSummaryReportComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    EmployeeSummaryReportComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.empDetails; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    return EmployeeSummaryReportComponent;
}());
EmployeeSummaryReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/EmployeeSummaryReport/employeeSummaryReport.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__employeeSummaryReport_service__["a" /* EmployeeSummaryReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__employeeSummaryReport_service__["a" /* EmployeeSummaryReportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */]) === "function" && _b || Object])
], EmployeeSummaryReportComponent);

var _a, _b;
//# sourceMappingURL=employeeSummaryReport.component.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeSummaryReport/employeeSummaryReport.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"panel-title\">ACA Consolidated Eligibility Benefits Report - Standard & Initial Mode</span>\r\n                        <span class=\"panel-icon pull-right\">\r\n                           <a id=\"btnDownloadPdf\"  class=\"fa fa-file-pdf-o\" (click)=\"downloadPdf()\"></a>\r\n                            <a id=\"btnDownloadExcel\" class=\"fa fa-file-excel-o\" (click)=\"downloadExcel()\" ></a>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"form-horizontal\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\"><label class=\"col-sm-5\">{{companyName}}</label></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"lblReportRunDate\" class=\"col-sm-5 control-label\">Report Run Date: </label>\r\n                                        <label name=\"lblReportRunDate\" class=\"col-sm-6 control-label\">{{reportRunDate}}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"lblPlanStartDate\" class=\"col-sm-5 control-label\">Plan Start Date: </label>\r\n                                        <label name=\"lblPlanStartDate\" class=\"col-sm-6 control-label\">{{planStartDate}}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"lblMeasurementPeriod\" class=\"col-sm-5 control-label\">Measurement Period: </label>\r\n                                        <label name=\"lblMeasurementPeriod\" class=\"col-sm-5 control-label\">{{measurmentPeriod}}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"lblAdminstrativePeriod\" class=\"col-sm-5 control-label\">Administrative Period:</label>\r\n                                        <label name=\"lblAdminstrativePeriod\" class=\"col-sm-5 control-label\">{{adminstrativePeriod}}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                           <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"lblNewHireMeasurementPeriod\" class=\"col-sm-5 control-label\">New Hire Measurement Period: </label>\r\n                                    <label name=\"lblNewHireMeasurementPeriod\" class=\"col-sm-5 control-label\">{{newHireMeasurmentPeriod}}</label>\r\n                                </div>\r\n                            </div>\r\n                           </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"lblPlanStartDate\" class=\"col-sm-5 control-label\">ACA Employment Basis: </label>\r\n                                        <label name=\"lblPlanStartDate\" class=\"col-sm-5 control-label\">Any</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n    <!-- -------------- Content -------------- -->\r\n    <section id=\"content\" class=\"table-layout animated fadeIn\" ng-show=\"dataLoaded\">\r\n        <div class=\"panel panel-visible p20\" id=\"spy3\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-title hidden-xs\">\r\n                    Report Details\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body pn\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-horizontal\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"inputTableSearch\" class=\"col-sm-2 control-label\">Search</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"inputTableSearch\" placeholder=\"Search\" *ngIf=\"config.filtering\" [ngTableFiltering]=\"config.filtering\"\r\n                                        (tableChanged)=\"onChangeTable(config)\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"table-responsive over-x_table\">\r\n                            <ng-table id=\"datatable\" ngclass=\"table table-striped table-bordered table-hover\" [config]=\"config\" (tableChanged)=\"onChangeTable(config)\"\r\n                                (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\r\n                            </ng-table>\r\n                            <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\"\r\n                                [maxSize]=\"maxSize\" [boundaryLinks]=\"false\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\"\r\n                                (numPages)=\"numPages = $event\">\r\n                            </pagination>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- -------------- /Content -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/EmployeeSummaryReport/employeeSummaryReport.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeSummaryReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeSummaryReportService = (function () {
    function EmployeeSummaryReportService(_http) {
        this._http = _http;
        this._employeeSummaryReportUrl = 'app/api/';
    }
    EmployeeSummaryReportService.prototype.getEmployeeSummaryReports = function () {
        var fileName = 'employeeSummary.json';
        return this._http.get(this._employeeSummaryReportUrl + fileName)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    EmployeeSummaryReportService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Failed in web api(Server error) ');
    };
    return EmployeeSummaryReportService;
}());
EmployeeSummaryReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EmployeeSummaryReportService);

var _a;
//# sourceMappingURL=employeeSummaryReport.service.js.map

/***/ }),

/***/ "../../../../../src/app/EmployeeSummaryReport/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employeeSummaryReport_component__ = __webpack_require__("../../../../../src/app/EmployeeSummaryReport/employeeSummaryReport.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__employeeSummaryReport_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employeeSummaryReport_service__ = __webpack_require__("../../../../../src/app/EmployeeSummaryReport/employeeSummaryReport.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__employeeSummaryReport_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__ = __webpack_require__("../../../../../src/app/EmployeeSummaryReport/employeeSummaryDetail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__employeeSummaryDetail__["EmployeeBreakInServiceReportService"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/ErCoverageReport/erCoverageReport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__erCoverageReport_service__ = __webpack_require__("../../../../../src/app/ErCoverageReport/erCoverageReport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_export_service__ = __webpack_require__("../../../../../src/app/shared/export.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErCoverageReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErCoverageReportComponent = (function () {
    function ErCoverageReportComponent(_erCoverageReportService, _export) {
        this._erCoverageReportService = _erCoverageReportService;
        this._export = _export;
        this.annulaizedMonthly = '0';
        this.workerDetails = [];
        this.rows = [];
        this.page = 1;
        this.itemsPerPage = 50;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.columns = [
            { title: 'Control Group', className: 'va-m', name: 'controlGroup' },
            { title: 'Year', className: 'va-m', name: 'workYear' },
            { title: 'Month', className: 'va-m', name: 'workMonth' },
            { title: 'Worker pool FTE Status', className: 'va-m', name: 'workerPoolFteStatus' },
            { title: 'First Name', className: 'hidden-xs va-m', name: 'firstName' },
            { title: 'Last Name', className: 'va-m', name: 'lastName' },
            { title: 'Worked Hours', className: 'va-m', name: 'workedHours' },
            { title: 'Worker Pool FTE Count', className: 'va-m', name: 'workerPoolFteCount' },
        ];
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table', 'table-striped', 'table-bordered', 'table-hover']
        };
    }
    ErCoverageReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._erCoverageReportService.getReportData().subscribe(function (data) {
            _this.Years = data.WorkYears;
            _this.ControlGroups = data.ControlGroups;
        }, function (error) { return _this.errorMessage = error; });
        this.selectedYear = '-1';
        this.selectedHireMonth = '-1';
        this.selectedControlGroup = '-1';
        this.annulaizedMonthly = '0';
        this.onChangeTable(this.config);
        this.dataLoaded = false;
    };
    ErCoverageReportComponent.prototype.annualizedMonthlyReportData = function () {
        var _this = this;
        this.dataLoaded = false;
        var filterCriteria = this.getFilterValues();
        filterCriteria.annulaizedMonthly = this.annulaizedMonthly;
        this._erCoverageReportService.getAnnulaizedMonthlyWorkersReportData(filterCriteria).subscribe(function (workdetails) {
            _this.workerDetails = workdetails;
            _this.onChangeTable(_this.config);
            _this.dataLoaded = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    ErCoverageReportComponent.prototype.getFilterValues = function () {
        var year = this.selectedYear;
        if (year === '-1') {
            year = "''";
        }
        var cg = this.selectedControlGroup;
        if (cg === 'All' || cg === '-1') {
            cg = "''";
        }
        var filterCriteria = {
            selectedYear: year, selectedControlGroup: cg
        };
        return filterCriteria;
    };
    ErCoverageReportComponent.prototype.Search = function () {
        var _this = this;
        var filterCriteria = this.getFilterValues();
        this.annulaizedMonthly = '0';
        this._erCoverageReportService.getAnnulaizedMonthlyWorkers(filterCriteria)
            .subscribe(function (counts) {
            if (counts === undefined || counts == null) {
                return;
            }
            counts.forEach(function (element) {
                _this.annulaizedMonthly = element.ANNUALIZED_MONTHLY_COUNT;
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    ErCoverageReportComponent.prototype.downloadPdf = function () {
    };
    ErCoverageReportComponent.prototype.downloadExcel = function () {
        var tbl = document.getElementById('datatable');
        var btn = document.getElementById('btnDownloadExcel');
        if (tbl) {
            console.log(tbl.children[0]);
        }
        if (tbl && tbl.children.length > 0) {
            this._export.excelByTableElement(btn, tbl.children[0], 'New Hire Part Time Report');
        }
    };
    ErCoverageReportComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    ErCoverageReportComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.workerDetails; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    ErCoverageReportComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    ErCoverageReportComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    ErCoverageReportComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.workerDetails, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    return ErCoverageReportComponent;
}());
ErCoverageReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/ErCoverageReport/erCoverageReport.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__erCoverageReport_service__["a" /* ErCoverageReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__erCoverageReport_service__["a" /* ErCoverageReportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */]) === "function" && _b || Object])
], ErCoverageReportComponent);

var _a, _b;
//# sourceMappingURL=erCoverageReport.component.js.map

/***/ }),

/***/ "../../../../../src/app/ErCoverageReport/erCoverageReport.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\n<section id=\"content_wrapper\">\n\n    <!-- -------------- Topbar -------------- -->\n    <header id=\"topbar\" class=\"ph10\">\n        <div class=\"topbar-left\">\n            <div class=\"allcp-form theme-primary\">\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\n                    data-panel-title=\"false\">\n                    <div class=\"panel-heading\">\n                        <span class=\"panel-title\">ER Coverage Report</span>\n                        <span class=\"panel-icon pull-right\">\n                           <a id=\"btnDownloadPdf\"  class=\"fa fa-file-pdf-o\" (click)=\"downloadPdf()\"></a>\n                            <a id=\"btnDownloadExcel\" class=\"fa fa-file-excel-o\" (click)=\"downloadExcel()\" ></a>\n                        </span>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"ddlYear\" class=\"col-sm-5 control-label\"><i class=\"fa fa-calendar\"></i> Year</label>\n                                        <div class=\"col-sm-7\">\n                                            <label class=\"field select\">\n                                                <select id=\"ddlYear\" name=\"ddlYear\" [(ngModel)]=\"selectedYear\" aria-placeholder=\"Select year\">\n                                                    <option value=\"-1\">Select Year</option>\n                                                    <option *ngFor=\"let year of Years\" value={{year}}>\n                                                        {{year}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                               \n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"ddlcontrolgroup\" class=\"col-sm-5 control-label\"><i class=\"fa fa-group\"></i> Control Group</label>\n                                        <div class=\"col-sm-7\">\n                                            <label class=\"field select\">\n                                                <select id=\"ddlcontrolgroup\" name=\"ddlcontrolgroup\" [(ngModel)]=\"selectedControlGroup\">\n                                                    <option value=\"-1\">All</option>\n                                                    <option *ngFor=\"let group of ControlGroups\" value={{group}}>\n                                                        {{group}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                        </div>                                        \n                                    </div>\n                                </div>  \n                                <div class=\"col-sm-3\">\n                                            <button class=\"btn btn-primary\" type=\"button\" (click)=\"Search()\">Filter</button>\n                                 </div>                             \n                            </div>\n                            \n                            <hr class=\"short\" />\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <h6>Summary</h6>\n                                    <div class=\"summaryBlock clearfix\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-6\">\n                                                <div class=\"btn-group\">\n                                                    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"annualizedMonthlyReportData()\">\n                                                        Annualized Monthly\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"annualizedMonthlyReportData()\" >\n                                                        {{annulaizedMonthly}}\n                                                    </button>\n                                                </div>\n                                            </div>                                            \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <!-- -------------- /Topbar -------------- -->\n    <!-- -------------- Content -------------- -->\n    <section id=\"content\" class=\"table-layout animated fadeIn\" *ngIf=\"dataLoaded\">\n        <div class=\"panel panel-visible p20\" id=\"spy3\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title hidden-xs\">\n                    Report Details\n                </div>\n            </div>\n            <div class=\"panel-body pn\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"form-group\">\n                                <label for=\"inputTableSearch\" class=\"col-sm-2 control-label\">Search</label>\n                                <div class=\"col-sm-6\">\n                                    <input type=\"text\" class=\"form-control\" id=\"inputTableSearch\" placeholder=\"Search\" *ngIf=\"config.filtering\" [ngTableFiltering]=\"config.filtering\"\n                                        (tableChanged)=\"onChangeTable(config)\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"table-responsive over-x_table\">\n                            <ng-table id=\"datatable\" ngclass=\"table table-striped table-bordered table-hover\" [config]=\"config\" (tableChanged)=\"onChangeTable(config)\"\n                                (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n                            </ng-table>\n                            <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\"\n                                [maxSize]=\"maxSize\" [boundaryLinks]=\"false\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\"\n                                (numPages)=\"numPages = $event\">\n                            </pagination>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- -------------- /Content -------------- -->\n</section>"

/***/ }),

/***/ "../../../../../src/app/ErCoverageReport/erCoverageReport.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErCoverageReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErCoverageReportService = (function () {
    function ErCoverageReportService(_http) {
        this._http = _http;
        // private _erCoverageReportUrl = 'app/api/';
        this._erCoverageReportUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* CONFIGURATION */].baseServiceUrl;
    }
    ErCoverageReportService.prototype.getReportData = function () {
        return this._http.get(this._erCoverageReportUrl + 'erCoverageReport/getERCoverageReferenceData')
            .map(function (response) { return response.json().erCoverageReferanceDataVO; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ErCoverageReportService.prototype.getAnnulaizedMonthlyWorkers = function (filterCriteria) {
        var fileName = "erCoverageReport/getAnnualizedMonthlyCount?WorkYear=" + filterCriteria.selectedYear
            + "&ControlGroup=" + filterCriteria.selectedControlGroup;
        return this._http.get(this._erCoverageReportUrl + fileName)
            .map(function (response) { return response.json().annualizedMonthlyCountVO; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
        //  return { annulaizedMonthly: "26" };
    };
    ErCoverageReportService.prototype.getAnnulaizedMonthlyWorkersReportData = function (filterCriteria) {
        var fileName = "erCoverageReport/getReportsByAnnualizedMonthlyCount?WorkYear=" + filterCriteria.selectedYear
            + "&ControlGroup=" + filterCriteria.selectedControlGroup
            + "";
        return this._http.get(this._erCoverageReportUrl + fileName)
            .map(function (response) { return response.json().reportsByAnnualizedMonthlyCountVO; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ErCoverageReportService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Failed in web api(Server error) ');
    };
    return ErCoverageReportService;
}());
ErCoverageReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ErCoverageReportService);

var _a;
//# sourceMappingURL=erCoverageReport.service.js.map

/***/ }),

/***/ "../../../../../src/app/ErCoverageReport/erCoverageWorkDetail.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=erCoverageWorkDetail.js.map

/***/ }),

/***/ "../../../../../src/app/ErCoverageReport/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__erCoverageReport_component__ = __webpack_require__("../../../../../src/app/ErCoverageReport/erCoverageReport.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__erCoverageReport_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__erCoverageReport_service__ = __webpack_require__("../../../../../src/app/ErCoverageReport/erCoverageReport.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__erCoverageReport_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__ = __webpack_require__("../../../../../src/app/ErCoverageReport/erCoverageWorkDetail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__erCoverageWorkDetail__["EmployeeSummaryReportService"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/InsuranceDataUpload/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__insuranceDataUpload_component__ = __webpack_require__("../../../../../src/app/InsuranceDataUpload/insuranceDataUpload.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__insuranceDataUpload_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/InsuranceDataUpload/insuranceDataUpload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceDataUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { EmployeeBreakInServiceReportService } from './employeeBreakInServiceReport.service';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
// import { ExportToExcelService } from '../shared/export.service';
var InsuranceDataUploadComponent = (function () {
    function InsuranceDataUploadComponent() {
    }
    return InsuranceDataUploadComponent;
}());
InsuranceDataUploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/InsuranceDataUpload/insuranceDataUpload.html")
    })
], InsuranceDataUploadComponent);

//# sourceMappingURL=insuranceDataUpload.component.js.map

/***/ }),

/***/ "../../../../../src/app/InsuranceDataUpload/insuranceDataUpload.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"panel-title\">Insurance - Data Upload</span>                       \r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">Insurance Data Upload</span>\r\n                                    </div>\r\n                                    <div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"fileInsuDataUpload\" class=\"col-lg-3 control-label\">Select File : </label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"file\" id=\"fileInsuDataUpload\" class=\"form-control\" placeholder=\"Upload File\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/ListCustomer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listCustomer_component__ = __webpack_require__("../../../../../src/app/ListCustomer/listCustomer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__listCustomer_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/ListCustomer/listCustomer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { EmployeeBreakInServiceReportService } from './employeeBreakInServiceReport.service';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
// import { ExportToExcelService } from '../shared/export.service';
var ListCustomerComponent = (function () {
    function ListCustomerComponent() {
    }
    return ListCustomerComponent;
}());
ListCustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/ListCustomer/listCustomer.html")
    })
], ListCustomerComponent);

//# sourceMappingURL=listCustomer.component.js.map

/***/ }),

/***/ "../../../../../src/app/ListCustomer/listCustomer.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"panel-title\">List Customers</span>                        \r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">List Customers page under Construction</span>\r\n                                    </div>\r\n                                    <!--<div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtFirstName\" class=\"col-lg-3 control-label\">First Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtFirstName\" class=\"form-control\" placeholder=\"First Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtLastName\" class=\"col-lg-3 control-label\">Last Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtLastName\" class=\"form-control\" placeholder=\"Last Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtEmailId\" class=\"col-lg-3 control-label\">Email ID</label>\r\n\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtEmailId\" class=\"form-control\" placeholder=\"Email ID...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtUserName\" class=\"col-lg-3 control-label\">User Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtUserName\" class=\"form-control\" placeholder=\"User Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-3 control-label\" for=\"txtCommnets\">Comments</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <textarea class=\"form-control textarea-grow\" id=\"txtCommnets\" rows=\"4\"></textarea>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-lg-8\">                                                    <div>\r\n                                                        <button type=\"submit\" class=\"btn btn-bordered btn-primary pull-right\">Register</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>-->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/OnBoardingCustomerInformation/OnboardingCustomerInformation.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"panel-title\">Client Onboarding - Customer Information</span>                        \r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">Customer Information page under Construction</span>\r\n                                    </div>\r\n                                    <!--<div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtFirstName\" class=\"col-lg-3 control-label\">First Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtFirstName\" class=\"form-control\" placeholder=\"First Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtLastName\" class=\"col-lg-3 control-label\">Last Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtLastName\" class=\"form-control\" placeholder=\"Last Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtEmailId\" class=\"col-lg-3 control-label\">Email ID</label>\r\n\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtEmailId\" class=\"form-control\" placeholder=\"Email ID...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtUserName\" class=\"col-lg-3 control-label\">User Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtUserName\" class=\"form-control\" placeholder=\"User Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-3 control-label\" for=\"txtCommnets\">Comments</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <textarea class=\"form-control textarea-grow\" id=\"txtCommnets\" rows=\"4\"></textarea>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-lg-8\">                                                    <div>\r\n                                                        <button type=\"submit\" class=\"btn btn-bordered btn-primary pull-right\">Register</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>-->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/OnBoardingCustomerInformation/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__onboardingCustomerInformation_component__ = __webpack_require__("../../../../../src/app/OnBoardingCustomerInformation/onboardingCustomerInformation.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__onboardingCustomerInformation_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/OnBoardingCustomerInformation/onboardingCustomerInformation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingCustomerInformationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { EmployeeBreakInServiceReportService } from './employeeBreakInServiceReport.service';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
// import { ExportToExcelService } from '../shared/export.service';
var OnboardingCustomerInformationComponent = (function () {
    function OnboardingCustomerInformationComponent() {
    }
    return OnboardingCustomerInformationComponent;
}());
OnboardingCustomerInformationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/OnBoardingCustomerInformation/OnboardingCustomerInformation.html")
    })
], OnboardingCustomerInformationComponent);

//# sourceMappingURL=onboardingCustomerInformation.component.js.map

/***/ }),

/***/ "../../../../../src/app/OnBoardingPersonalInformation/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__onboardingPersonalInformation_component__ = __webpack_require__("../../../../../src/app/OnBoardingPersonalInformation/onboardingPersonalInformation.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__onboardingPersonalInformation_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/OnBoardingPersonalInformation/onboardingPersonalInformation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPersonalInformationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { EmployeeBreakInServiceReportService } from './employeeBreakInServiceReport.service';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
// import { ExportToExcelService } from '../shared/export.service';
var OnboardingPersonalInformationComponent = (function () {
    function OnboardingPersonalInformationComponent() {
    }
    return OnboardingPersonalInformationComponent;
}());
OnboardingPersonalInformationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/OnBoardingPersonalInformation/onboardingPersonalInformation.html")
    })
], OnboardingPersonalInformationComponent);

//# sourceMappingURL=onboardingPersonalInformation.component.js.map

/***/ }),

/***/ "../../../../../src/app/OnBoardingPersonalInformation/onboardingPersonalInformation.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <!--<span class=\"panel-title\">Client Onboarding - Personall Information</span>                        -->\r\n                        <span class=\"panel-title\">Under Construction</span>                        \r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">Page under Construction</span>\r\n                                    </div>\r\n                                    <!--<div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtFirstName\" class=\"col-lg-3 control-label\">First Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtFirstName\" class=\"form-control\" placeholder=\"First Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtLastName\" class=\"col-lg-3 control-label\">Last Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtLastName\" class=\"form-control\" placeholder=\"Last Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtEmailId\" class=\"col-lg-3 control-label\">Email ID</label>\r\n\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtEmailId\" class=\"form-control\" placeholder=\"Email ID...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"txtUserName\" class=\"col-lg-3 control-label\">User Name</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"text\" id=\"txtUserName\" class=\"form-control\" placeholder=\"User Name...\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-lg-3 control-label\" for=\"txtCommnets\">Comments</label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <textarea class=\"form-control textarea-grow\" id=\"txtCommnets\" rows=\"4\"></textarea>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <div class=\"col-lg-8\">                                                    <div>\r\n                                                        <button type=\"submit\" class=\"btn btn-bordered btn-primary pull-right\">Register</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>-->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/OneZeroNineFiveDataUpload/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__oneZeroNineFiveDataUpload_component__ = __webpack_require__("../../../../../src/app/OneZeroNineFiveDataUpload/oneZeroNineFiveDataUpload.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__oneZeroNineFiveDataUpload_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/OneZeroNineFiveDataUpload/oneZeroNineFiveDataUpload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneZeroNineFiveDataUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { EmployeeBreakInServiceReportService } from './employeeBreakInServiceReport.service';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
// import { ExportToExcelService } from '../shared/export.service';
var OneZeroNineFiveDataUploadComponent = (function () {
    function OneZeroNineFiveDataUploadComponent() {
    }
    return OneZeroNineFiveDataUploadComponent;
}());
OneZeroNineFiveDataUploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/OneZeroNineFiveDataUpload/oneZeroNineFiveDataUpload.html")
    })
], OneZeroNineFiveDataUploadComponent);

//# sourceMappingURL=oneZeroNineFiveDataUpload.component.js.map

/***/ }),

/***/ "../../../../../src/app/OneZeroNineFiveDataUpload/oneZeroNineFiveDataUpload.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"panel-title\">1095 - Data Upload</span>                       \r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">1095 Data Upload</span>\r\n                                    </div>\r\n                                    <div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"fileAleUpload\" class=\"col-lg-3 control-label\">Select File : </label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"file\" id=\"fileAleUpload\" class=\"form-control\" placeholder=\"Upload File\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/OneZeroNineFourDataUpload/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__oneZeroNineFourDataUpload_component__ = __webpack_require__("../../../../../src/app/OneZeroNineFourDataUpload/oneZeroNineFourDataUpload.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__oneZeroNineFourDataUpload_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/OneZeroNineFourDataUpload/oneZeroNineFourDataUpload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneZeroNineFourDataUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { EmployeeBreakInServiceReportService } from './employeeBreakInServiceReport.service';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
// import { ExportToExcelService } from '../shared/export.service';
var OneZeroNineFourDataUploadComponent = (function () {
    function OneZeroNineFourDataUploadComponent() {
    }
    return OneZeroNineFourDataUploadComponent;
}());
OneZeroNineFourDataUploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/OneZeroNineFourDataUpload/oneZeroNineFourDataUpload.html")
    })
], OneZeroNineFourDataUploadComponent);

//# sourceMappingURL=oneZeroNineFourDataUpload.component.js.map

/***/ }),

/***/ "../../../../../src/app/OneZeroNineFourDataUpload/oneZeroNineFourDataUpload.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"panel-title\">1094 Data Upload</span>                       \r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">1094 - Data Upload</span>\r\n                                    </div>\r\n                                    <div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"file1094Upload\" class=\"col-lg-3 control-label\">Select File : </label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"file\" id=\"file1094Upload\" class=\"form-control\" placeholder=\"Upload File\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/PayrollDataActivityReport/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payrollDataActivityReport_component__ = __webpack_require__("../../../../../src/app/PayrollDataActivityReport/payrollDataActivityReport.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__payrollDataActivityReport_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payrollDataActivityReport_service__ = __webpack_require__("../../../../../src/app/PayrollDataActivityReport/payrollDataActivityReport.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__payrollDataActivityReport_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/PayrollDataActivityReport/payrollDataActivityReport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payrollDataActivityReport_service__ = __webpack_require__("../../../../../src/app/PayrollDataActivityReport/payrollDataActivityReport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_export_service__ = __webpack_require__("../../../../../src/app/shared/export.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayrollDataActivityReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayrollDataActivityReportComponent = (function () {
    function PayrollDataActivityReportComponent(_pdareportsrv, _export) {
        this._pdareportsrv = _pdareportsrv;
        this._export = _export;
        this.workDetails = [];
        this.rows = [];
        this.columns = [
            { title: 'SSN', className: 'hidden-xs va-m', name: 'ssnNumber' },
            { title: 'First Name', className: 'hidden-xs va-m', name: 'firstName' },
            { title: 'Last Name', className: 'hidden-xs va-m', name: 'lastName' },
            { title: 'EIN', className: 'va-m', name: 'ein' },
            { title: 'Production Company', className: 'va-m', name: 'productionCompany' },
            { title: 'Hire Date', className: 'va-m', name: 'hireDate' },
            { title: 'Last Worked Date', className: 'va-m', name: 'lastDateWorked' },
            { title: 'Project', className: 'va-m', name: 'project' },
            { title: 'ClientID', className: 'va-m', name: 'clientId' },
            { title: 'Source', className: 'va-m', name: 'source' },
            { title: 'Employment Status', className: 'va-m', name: 'employmentStatus' },
            { title: 'Union Hours', className: 'va-m', name: 'unionHours' },
            { title: 'Jan', className: 'va-m', name: 'jan' },
            { title: 'Feb', className: 'va-m', name: 'feb' },
            { title: 'Mar', className: 'va-m', name: 'mar' },
            { title: 'Apr', className: 'va-m', name: 'apr' },
            { title: 'May', className: 'va-m', name: 'may' },
            { title: 'Jun', className: 'va-m', name: 'jun' },
            { title: 'Jul', className: 'va-m', name: 'jul' },
            { title: 'Aug', className: 'va-m', name: 'aug' },
            { title: 'Sep', className: 'va-m', name: 'sep' },
            { title: 'Oct', className: 'va-m', name: 'oct' },
            { title: 'Nov', className: 'va-m', name: 'nov' },
            { title: 'Dec', className: 'va-m', name: 'dec' }
        ];
        this.page = 1;
        this.itemsPerPage = 50;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table', 'table-striped', 'table-bordered', 'table-hover']
        };
    }
    PayrollDataActivityReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controlGroupControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.yearControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('-1');
        this.pdaReportForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({
            controlGroup: this.controlGroupControl,
            yearControl: this.yearControl
        });
        this._pdareportsrv.getReportData().subscribe(function (data) {
            _this.ControlGroups = data.ControlGroups;
            _this.Years = data.WorkYears;
        }, function (error) { return _this.errorMessage = error; });
        this.count13Weeks = '0';
        this.count26Weeks = '0';
        this.count47Weeks = '0';
        this.count52Weeks = '0';
        this.onChangeTable(this.config);
        this.dataLoaded = false;
    };
    PayrollDataActivityReportComponent.prototype.getFilterValues = function () {
        var cg = this.controlGroupControl.value;
        if (cg === undefined || cg === "All" || cg === "") {
            cg = "''";
            ;
        }
        var year = this.yearControl.value;
        if (year === undefined || year === '' || year === '-1') {
            year = "''";
            ;
        }
        var filterCriteria = {
            selectedYear: year,
            selectedControlGroup: cg
        };
        return filterCriteria;
    };
    PayrollDataActivityReportComponent.prototype.Search = function (formValues) {
        var _this = this;
        this.dataLoaded = false;
        var filterCriteria = this.getFilterValues();
        this._pdareportsrv.getPayrollDataActivityReportData(filterCriteria).subscribe(function (workdetails) {
            _this.workDetails = workdetails;
            _this.onChangeTable(_this.config);
            _this.dataLoaded = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    PayrollDataActivityReportComponent.prototype.downloadPdf = function () {
    };
    PayrollDataActivityReportComponent.prototype.downloadExcel = function () {
        var tbl = document.getElementById('datatable');
        var btn = document.getElementById('btnDownloadExcel');
        if (tbl) {
            console.log(tbl.children[0]);
        }
        if (tbl && tbl.children.length > 0) {
            this._export.excelByTableElement(btn, tbl.children[0], 'New Hire Part Time Report');
        }
    };
    // Validations
    PayrollDataActivityReportComponent.prototype.validateControlGroups = function () {
        return this.controlGroupControl.valid || this.controlGroupControl.untouched;
    };
    PayrollDataActivityReportComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    PayrollDataActivityReportComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.workDetails; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    PayrollDataActivityReportComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    PayrollDataActivityReportComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    PayrollDataActivityReportComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.workDetails, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    return PayrollDataActivityReportComponent;
}());
PayrollDataActivityReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/PayrollDataActivityReport/payrollDataActivityReport.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__payrollDataActivityReport_service__["a" /* PayrollDataActivityReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__payrollDataActivityReport_service__["a" /* PayrollDataActivityReportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_export_service__["a" /* ExportToExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_export_service__["a" /* ExportToExcelService */]) === "function" && _b || Object])
], PayrollDataActivityReportComponent);

var _a, _b;
//# sourceMappingURL=payrollDataActivityReport.component.js.map

/***/ }),

/***/ "../../../../../src/app/PayrollDataActivityReport/payrollDataActivityReport.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\n<section id=\"content_wrapper\">\n\n    <!-- -------------- Topbar -------------- -->\n    <header id=\"topbar\" class=\"ph10\">\n        <div class=\"topbar-left\">\n            <div class=\"allcp-form theme-primary\">\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\n                    data-panel-title=\"false\">\n                    <div class=\"panel-heading\">\n                        <span class=\"panel-title\">Payroll Data Activity Report</span>\n                        <span class=\"panel-icon pull-right\">\n                            <a id=\"btnDownloadPdf\"  class=\"fa fa-file-pdf-o\" (click)=\"downloadPdf()\"></a>\n                            <a id=\"btnDownloadExcel\" class=\"fa fa-file-excel-o\" (click)=\"downloadExcel()\" ></a>\n                        </span>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"form-horizontal\">\n                            <form novalidate [formGroup]=\"pdaReportForm\" (ngSubmit)=\"Search(pdaReportForm.value)\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"form-group\">\n                                            <label for=\"inputEmail3\" class=\"col-sm-5 control-label\"><i class=\"fa fa-calendar\"></i> Year</label>\n                                            <div class=\"col-sm-7\">\n                                                <label class=\"field select\">\n                                                <select id=\"selYear\" name=\"country\" formControlName=\"yearControl\" aria-placeholder=\"Select year\">\n                                                    <option value=\"-1\">Select Year</option>\n                                                    <option *ngFor=\"let year of Years\" value={{year}}>\n                                                        {{year}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"form-group\">\n                                            <label for=\"inputEmail3\" class=\"col-sm-5 control-label\"><i class=\"fa fa-group\"></i> Control Group</label>\n                                            <div class=\"col-sm-7\">\n                                                <label class=\"field select\">\n                                                <select id=\"selcontrolgroup\" name=\"controlgroup\" formControlName=\"controlGroup\" [ngClass]=\"{'error':!validateControlGroups()}\">\n                                                    <option selected disabled value=\"\">All</option>\n                                                    <option *ngFor=\"let group of ControlGroups\" value={{group}}>\n                                                        {{group}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                                <em *ngIf=\"!validateControlGroups()\">Please select valid Control Group</em>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"form-group\">\n                                            <div class=\"col-sm-2\">\n                                                <button class=\"btn btn-primary\" type=\"submit\">Filter</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>                           \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <!-- -------------- /Topbar -------------- -->\n    <!-- -------------- Content -------------- -->\n    <section id=\"content\" class=\"table-layout animated fadeIn\" *ngIf=\"dataLoaded\">\n        <div class=\"panel panel-visible p20\" id=\"spy3\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title hidden-xs\">\n                    Report Details\n                </div>\n            </div>\n            <div class=\"panel-body pn\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"form-group\">\n                                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Search</label>\n                                <div class=\"col-sm-6\">\n                                    <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Search\" *ngIf=\"config.filtering\" [ngTableFiltering]=\"config.filtering\"\n                                        (tableChanged)=\"onChangeTable(config)\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"table-responsive over-x_table\">\n                            <ng-table id=\"datatable\" ngclass=\"table table-striped table-bordered table-hover\" [config]=\"config\" (tableChanged)=\"onChangeTable(config)\"\n                                (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n                            </ng-table>\n                            <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\"\n                                [maxSize]=\"maxSize\" [boundaryLinks]=\"false\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\"\n                                (numPages)=\"numPages = $event\">\n                            </pagination>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- -------------- /Content -------------- -->\n</section>"

/***/ }),

/***/ "../../../../../src/app/PayrollDataActivityReport/payrollDataActivityReport.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayrollDataActivityReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayrollDataActivityReportService = (function () {
    function PayrollDataActivityReportService(_http) {
        this._http = _http;
        this._pdaReportUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* CONFIGURATION */].baseServiceUrl;
    }
    PayrollDataActivityReportService.prototype.getReportData = function () {
        return this._http.get(this._pdaReportUrl + 'payrollDataActivityReport/getPayrollReferenceData')
            .map(function (response) { return response.json().payrollRefDataVO; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    PayrollDataActivityReportService.prototype.getPayrollDataActivityReportData = function (filterCriteria) {
        var fileName = "payrollDataActivityReport/getReportsForPayrollDataActivity?WorkYear=" + filterCriteria.selectedYear
            + "&ControlGroup=" + filterCriteria.selectedControlGroup;
        return this._http.get(this._pdaReportUrl + fileName)
            .map(function (response) { return response.json().reportsForPayrollDataActivity; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    PayrollDataActivityReportService.prototype.getYears = function () { return ['2016', '2017', '2018']; };
    PayrollDataActivityReportService.prototype.getControlGroups = function () { return ['Revolution', 'Cast & Crew']; };
    PayrollDataActivityReportService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return PayrollDataActivityReportService;
}());
PayrollDataActivityReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PayrollDataActivityReportService);

var _a;
//# sourceMappingURL=payrollDataActivityReport.service.js.map

/***/ }),

/***/ "../../../../../src/app/PayrollDataUpload/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payrollDataUpload_component__ = __webpack_require__("../../../../../src/app/PayrollDataUpload/payrollDataUpload.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__payrollDataUpload_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/PayrollDataUpload/payrollDataUpload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayrollDataUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { EmployeeBreakInServiceReportService } from './employeeBreakInServiceReport.service';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
// import { ExportToExcelService } from '../shared/export.service';
var PayrollDataUploadComponent = (function () {
    function PayrollDataUploadComponent() {
    }
    return PayrollDataUploadComponent;
}());
PayrollDataUploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/PayrollDataUpload/payrollDataUpload.html")
    })
], PayrollDataUploadComponent);

//# sourceMappingURL=payrollDataUpload.component.js.map

/***/ }),

/***/ "../../../../../src/app/PayrollDataUpload/payrollDataUpload.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\r\n<section id=\"content_wrapper\">\r\n    <!-- -------------- Topbar -------------- -->\r\n    <header id=\"topbar\" class=\"ph10\">\r\n        <div class=\"topbar-left\">\r\n            <div class=\"allcp-form theme-primary\">\r\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\r\n                    data-panel-title=\"false\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"panel-title\">Payroll Data Upload</span>                       \r\n                    </div>\r\n                    <!-- -------------- Content -------------- -->\r\n                    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <!-- -------------- Standard Fields -------------- -->\r\n                                <div class=\"panel\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <span class=\"panel-title\">Payroll Data Upload</span>\r\n                                    </div>\r\n                                    <div class=\"panel-body\">\r\n                                        <form class=\"form-horizontal\" role=\"form\">\r\n                                            <!--<div class=\"section\">\r\n                                            <label class=\"field prepend-icon append-button file\">\r\n                                                    <span class=\"button\">Choose File</span>\r\n                                                    <input type=\"file\" class=\"gui-file\" name=\"filePayrollDataUpload\" id=\"filePayrollDataUpload\">\r\n                                                    <input type=\"text\" class=\"gui-input\" id=\"upldPayrollDataUpload\"\r\n                                                           placeholder=\"Select File\">\r\n                                                    <label class=\"field-icon\">\r\n                                                        <i class=\"fa fa-cloud-upload\"></i>\r\n                                                    </label>\r\n                                                </label>\r\n                                            </div>-->\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"filePayrollDataUpload\" class=\"col-lg-3 control-label\">Select File : </label>\r\n                                                <div class=\"col-lg-8\">\r\n                                                    <div>\r\n                                                        <input type=\"file\" class=\"gui-file\" id=\"filePayrollDataUpload\" class=\"form-control\" placeholder=\"Upload File\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <!-- -------------- /Content -------------- -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <!-- -------------- /Topbar -------------- -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet name=\"header\"></router-outlet>\n<router-outlet name=\"sidebar\"></router-outlet>\n<router-outlet></router-outlet>\n<!--<router-outlet name=\"footer\"></router-outlet>-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIGURATION; });
var CONFIGURATION = {
    'baseServiceUrl': 'http://localhost:8080/NHNFTReportWebAPI/rest/',
    'reportingroute': 'reporting',
    'dashboard': 'dashboard',
    'nftreport': 'nhftreport',
    'enftreport': 'enftreport',
    'ogreport': 'ogreport',
    'pdareport': 'pdareport',
    'ercreport': 'ercreport',
    'empsummary': 'empsummary',
    'empeligilbility': 'empeligilbility',
    'empdemographics': 'empdemographics',
    'empbreakinservice': 'empbreakinservice',
    'addcustomer': 'addcustomer',
    'listcustomer': 'listcustomer',
    'onboardingcustomerinformation': 'onboardingcustomerinformation',
    'clientpayroll': 'clientpayroll',
    'onboardingpersonalinformation': 'onboardingpersonalinformation',
    'uploaddata': 'uploaddata',
    'aledataupload': 'aledataupload',
    'payrolldataupload': 'payrolldataupload',
    'insurancedataupload': 'insurancedataupload',
    'onezeroninefourdataupload': 'onezeroninefourdataupload',
    'onezeroninefivedataupload': 'onezeroninefivedataupload',
    'controlgroup': 'controlgroup',
    'ale': 'ale'
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rxjs_extension__ = __webpack_require__("../../../../../src/app/rxjs-extension.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_table__ = __webpack_require__("../../../../ng2-table/ng2-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__ = __webpack_require__("../../../../ng2-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__index__ = __webpack_require__("../../../../../src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* APPROUTES */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_7_ng2_table__["Ng2TableModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["b" /* TabsModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__index__["DashboardComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["SideNavComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["TopNavComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["ENFTReportComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["OnGoingReportComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["NewHireFullTimeComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["PayrollDataActivityReportComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["AddCustomerComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["ListCustomerComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["OnboardingCustomerInformationComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["ClientPayrollComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["OnboardingPersonalInformationComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["AleDataUploadComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["ControlGroupComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["ApplicableLargeEmployeeComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["ErCoverageReportComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["EmployeeEligibilityReportComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["EmployeeDemographicReportComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["EmployeeBreakInServiceReportComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["EmployeeSummaryReportComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["InsuranceDataUploadComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["OneZeroNineFourDataUploadComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["OneZeroNineFiveDataUploadComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["PayrollDataUploadComponent"],
            __WEBPACK_IMPORTED_MODULE_11__index__["LoginComponent"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__index__["ENFTReportService"],
            __WEBPACK_IMPORTED_MODULE_11__index__["OnGoingReportService"],
            __WEBPACK_IMPORTED_MODULE_10__shared_index__["a" /* ExportToExcelService */],
            __WEBPACK_IMPORTED_MODULE_11__index__["NewHireFullTimeService"],
            __WEBPACK_IMPORTED_MODULE_11__index__["ErCoverageReportService"],
            __WEBPACK_IMPORTED_MODULE_11__index__["EmployeeEligibilityReportService"],
            __WEBPACK_IMPORTED_MODULE_11__index__["EmployeeDemographicReportService"],
            __WEBPACK_IMPORTED_MODULE_11__index__["EmployeeBreakInServiceReportService"],
            __WEBPACK_IMPORTED_MODULE_11__index__["PayrollDataActivityReportService"],
            __WEBPACK_IMPORTED_MODULE_11__index__["EmployeeSummaryReportService"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPROUTES; });

var APPROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__index__["LoginComponent"] },
    { path: 'reporting', component: __WEBPACK_IMPORTED_MODULE_0__index__["AppComponent"] },
    {
        path: 'reporting', children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_0__index__["DashboardComponent"] },
            { path: 'enftreport', component: __WEBPACK_IMPORTED_MODULE_0__index__["ENFTReportComponent"] },
            { path: 'ogreport', component: __WEBPACK_IMPORTED_MODULE_0__index__["OnGoingReportComponent"] },
            { path: 'nhftreport', component: __WEBPACK_IMPORTED_MODULE_0__index__["NewHireFullTimeComponent"] },
            { path: 'pdareport', component: __WEBPACK_IMPORTED_MODULE_0__index__["PayrollDataActivityReportComponent"] },
            { path: 'ercreport', component: __WEBPACK_IMPORTED_MODULE_0__index__["ErCoverageReportComponent"] },
            { path: 'empeligilbility', component: __WEBPACK_IMPORTED_MODULE_0__index__["EmployeeEligibilityReportComponent"] },
            { path: 'empdemographics', component: __WEBPACK_IMPORTED_MODULE_0__index__["EmployeeDemographicReportComponent"] },
            { path: 'empbreakinservice', component: __WEBPACK_IMPORTED_MODULE_0__index__["EmployeeBreakInServiceReportComponent"] },
            { path: 'addcustomer', component: __WEBPACK_IMPORTED_MODULE_0__index__["AddCustomerComponent"] },
            { path: 'listcustomer', component: __WEBPACK_IMPORTED_MODULE_0__index__["ListCustomerComponent"] },
            { path: 'onboardingcustomerinformation', component: __WEBPACK_IMPORTED_MODULE_0__index__["OnboardingCustomerInformationComponent"] },
            { path: 'clientpayroll', component: __WEBPACK_IMPORTED_MODULE_0__index__["ClientPayrollComponent"] },
            { path: 'onboardingpersonalinformation', component: __WEBPACK_IMPORTED_MODULE_0__index__["OnboardingPersonalInformationComponent"] },
            { path: 'uploaddata', component: __WEBPACK_IMPORTED_MODULE_0__index__["AleDataUploadComponent"] },
            { path: 'empsummary', component: __WEBPACK_IMPORTED_MODULE_0__index__["EmployeeSummaryReportComponent"] },
            { path: 'controlgroup', component: __WEBPACK_IMPORTED_MODULE_0__index__["ControlGroupComponent"] },
            { path: 'ale', component: __WEBPACK_IMPORTED_MODULE_0__index__["ApplicableLargeEmployeeComponent"] },
            { path: 'aledataupload', component: __WEBPACK_IMPORTED_MODULE_0__index__["AleDataUploadComponent"] },
            { path: 'payrolldataupload', component: __WEBPACK_IMPORTED_MODULE_0__index__["PayrollDataUploadComponent"] },
            { path: 'onezeroninefourdataupload', component: __WEBPACK_IMPORTED_MODULE_0__index__["OneZeroNineFourDataUploadComponent"] },
            { path: 'onezeroninefivedataupload', component: __WEBPACK_IMPORTED_MODULE_0__index__["OneZeroNineFiveDataUploadComponent"] },
            { path: 'insurancedataupload', component: __WEBPACK_IMPORTED_MODULE_0__index__["InsuranceDataUploadComponent"] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__index__["TopNavComponent"], outlet: 'header' },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__index__["SideNavComponent"], outlet: 'sidebar' }
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.html")
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\n<section id=\"content_wrapper\">\n\n    <!-- -------------- Topbar -------------- -->\n    <header id=\"topbar\" class=\"ph10\">\n        <div class=\"topbar-left\">\n            <div class=\"allcp-form theme-primary\">\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\n                    data-panel-title=\"false\">\n                    <div class=\"panel-heading\">\n                        <span class=\"panel-title\"><h1>Welcome Sipra Soft </h1></span>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                </div>\n\n                                <div class=\"col-sm-3\">\n                                </div>\n\n                                <div class=\"col-sm-3\">\n                                </div>\n\n                                <div class=\"col-sm-3\">\n\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <!-- -------------- /Topbar -------------- -->\n\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/dashboard/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/enftreport/enftreport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enftreport_service__ = __webpack_require__("../../../../../src/app/enftreport/enftreport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_export_service__ = __webpack_require__("../../../../../src/app/shared/export.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENFTReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ENFTReportComponent = (function () {
    function ENFTReportComponent(_enftreport, _export) {
        this._enftreport = _enftreport;
        this._export = _export;
        this.workDetails = [];
        this.rows = [];
        this.columns = [
            { title: 'Control Group', className: 'va-m', name: 'controlGroup' },
            { title: 'Latest Production Company', className: 'va-m', name: 'mostRecentProductionCompany' },
            { title: 'Most Recent Show', className: 'va-m', name: 'mostRecentProject' },
            { title: 'SSN Number', className: 'hidden-xs va-m', name: 'ssnNumber' },
            { title: 'First Name', className: 'hidden-xs va-m', name: 'firstName' },
            { title: 'Last Name', className: 'va-m', name: 'lastName' },
            { title: 'Last Worked Date', className: 'va-m', name: 'lastWorkedDate' },
            { title: 'Hire Date', className: 'va-m', name: 'hireDate' },
            { title: 'Union Type', className: 'va-m', name: 'unionType' },
            { title: 'Payroll Source', className: 'va-m', name: 'payrollSource' },
            { title: 'Average Hours', className: 'va-m', name: 'avgHours' },
            { title: 'Total Hours', className: 'va-m', name: 'totalHours' }
        ];
        this.page = 1;
        this.itemsPerPage = 50;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table', 'table-striped', 'table-bordered', 'table-hover']
        };
    }
    ENFTReportComponent.prototype.ngOnInit = function () {
        // throw new Error('Method not implemented.');
        var _this = this;
        this._enftreport.getReportData().subscribe(function (data) {
            _this.Years = data.WorkYear;
            _this.Months = data.WorkMonth;
            _this.ControlGroups = data.ControlGroup;
            _this.TypeOfHours = data.UnionType;
            _this.NonFullTimeCatgeories = data.EmployeeType;
        }, function (error) { return _this.errorMessage = error; });
        this.AvgWeeklyHrsThr = '30';
        this.selectedYear = '-1';
        this.selectedHireMonth = '-1';
        this.selectedControlGroup = '-1';
        this.selectedTypeOfHours = '-1';
        this.count13Weeks = '0';
        this.count26Weeks = '0';
        this.count47Weeks = '0';
        this.count52Weeks = '0';
        this.onChangeTable(this.config);
        this.dataLoaded = false;
    };
    ENFTReportComponent.prototype.getFilterValues = function () {
        var year = this.selectedYear;
        if (year === '-1') {
            year = "''";
        }
        var month = this.selectedHireMonth;
        if (month === '-1') {
            month = "''";
        }
        var cg = this.selectedControlGroup;
        if (cg === 'All' || cg === '-1') {
            cg = "''";
            ;
        }
        var emptype = this.selectedTypeOfHours;
        if (emptype === '-1') {
            emptype = "''";
            ;
        }
        var cat = this.selectedNonFullTimeCatgeories;
        if (cat === undefined || cat.length === 0) {
            cat = ["''"];
        }
        var filterCriteria = {
            selectedYear: year, selectedHireMonth: month, selectedControlGroup: cg,
            selectedTypeOfHours: emptype, selectedNonFullTimeCatgeories: cat,
            avgWeeklyThreshold: this.AvgWeeklyHrsThr,
            reportCount: 13
        };
        return filterCriteria;
    };
    ENFTReportComponent.prototype.Search = function () {
        var _this = this;
        this.dataLoaded = false;
        var filterCriteria = this.getFilterValues();
        this.count13Weeks = '0';
        this.count26Weeks = '0';
        this.count47Weeks = '0';
        this.count52Weeks = '0';
        this._enftreport.getWeeklyCounts(filterCriteria)
            .subscribe(function (counts) {
            if (counts === undefined || counts == null || (counts != null && counts.reportCountByWeek == null)) {
                return;
            }
            counts.reportCountByWeek.forEach(function (element) {
                switch (element.WEEKS_WORKED) {
                    case '13':
                        _this.count13Weeks = element.WEEKS_WORKED_COUNT;
                        break;
                    case '26':
                        _this.count26Weeks = element.WEEKS_WORKED_COUNT;
                        break;
                    case '47':
                        _this.count47Weeks = element.WEEKS_WORKED_COUNT;
                        break;
                    case '52':
                        _this.count52Weeks = element.WEEKS_WORKED_COUNT;
                        break;
                }
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    ENFTReportComponent.prototype.getWeekData = function (weekCount) {
        var _this = this;
        var filterCriteria = this.getFilterValues();
        filterCriteria.reportCount = weekCount;
        this._enftreport.getWeekReportData(filterCriteria).subscribe(function (workdetails) {
            _this.workDetails = workdetails;
            _this.onChangeTable(_this.config);
            _this.dataLoaded = true;
        }, function (error) { return _this.errorMessage = error; });
        // this._enftreport.getWeekReportData(weekCount);
    };
    ENFTReportComponent.prototype.downloadPdf = function () {
    };
    ENFTReportComponent.prototype.downloadExcel = function () {
        var tbl = document.getElementById('datatable');
        var btn = document.getElementById('btnDownloadExcel');
        if (tbl) {
            console.log(tbl.children[0]);
        }
        if (tbl && tbl.children.length > 0) {
            this._export.excelByTableElement(btn, tbl.children[0], 'New Hire Part Time Report');
        }
    };
    ENFTReportComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    ENFTReportComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.workDetails; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    ENFTReportComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    ENFTReportComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    ENFTReportComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.workDetails, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    return ENFTReportComponent;
}());
ENFTReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/enftreport/enftreport.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__enftreport_service__["a" /* ENFTReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__enftreport_service__["a" /* ENFTReportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */]) === "function" && _b || Object])
], ENFTReportComponent);

var _a, _b;
//# sourceMappingURL=enftreport.component.js.map

/***/ }),

/***/ "../../../../../src/app/enftreport/enftreport.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\n<section id=\"content_wrapper\">\n\n    <!-- -------------- Topbar -------------- -->\n    <header id=\"topbar\" class=\"ph10\">\n        <div class=\"topbar-left\">\n            <div class=\"allcp-form theme-primary\">\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\n                     data-panel-title=\"false\">\n                    <div class=\"panel-heading\">\n                        <span class=\"panel-title\">Eligibility Non Full Time Report</span>\n                        <span class=\"panel-icon pull-right\">\n                            <a id=\"btnDownloadPdf\"  class=\"fa fa-file-pdf-o\" (click)=\"downloadPdf()\"></a>\n                            <a id=\"btnDownloadExcel\" class=\"fa fa-file-excel-o\" (click)=\"downloadExcel()\" ></a>\n                        </span>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-3\">\n\n\n                                    <div class=\"form-group\">\n                                        <label for=\"inputEmail3\" class=\"col-sm-5 control-label\"><i class=\"fa fa-calendar\"></i> Year</label>\n                                        <div class=\"col-sm-7\">\n\n                                            <label class=\"field select\">\n                                                <select id=\"selYear\" name=\"country\" [(ngModel)]=\"selectedYear\" aria-placeholder=\"Select year\">\n                                                    <option value=\"-1\">Select Year</option>\n                                                    <option *ngFor=\"let year of Years\" value={{year}}>\n                                                        {{year}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n\n                                        </div>\n                                    </div>\n\n                                </div>\n                                <div class=\"col-sm-3\">\n\n\n                                    <div class=\"form-group\">\n                                        <label for=\"inputEmail3\" class=\"col-sm-5 control-label\"><i class=\"fa fa-calendar\"></i> Hire Month</label>\n                                        <div class=\"col-sm-7\">\n                                            <label class=\"field select\">\n                                                <select id=\"selmonth\" name=\"month\" [(ngModel)]=\"selectedHireMonth\">\n                                                    <option value=\"-1\">Select Month</option>\n                                                    <option *ngFor=\"let month of Months\" value={{month}}>\n                                                        {{month}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                        </div>\n                                    </div>\n\n\n\n                                </div>\n                                <div class=\"col-sm-3\">\n\n\n                                    <div class=\"form-group\">\n                                        <label for=\"inputEmail3\" class=\"col-sm-5 control-label\"><i class=\"fa fa-group\"></i> Control Group</label>\n                                        <div class=\"col-sm-7\">\n                                            <label class=\"field select\">\n                                                <select id=\"selcontrolgroup\" name=\"controlgroup\" [(ngModel)]=\"selectedControlGroup\">\n                                                    <option value=\"-1\">All</option>\n                                                    <option *ngFor=\"let group of ControlGroups\" value={{group}}>\n                                                        {{group}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-sm-3\">\n\n\n                                    <div class=\"form-group\">\n                                        <label for=\"inputPassword3\" class=\"col-sm-8 control-label\"><i class=\"fa fa-clock-o\"></i> Avg. Weekly Hours Tresshold</label>\n                                        <div class=\"col-sm-4\">\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"AvgWeeklyHrsThr\" id=\"inputPassword3\">\n                                        </div>\n                                    </div>\n\n\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"inputPassword3\" class=\"col-sm-5 control-label\"><i class=\"fa fa-dashboard\"></i> Type of Hours</label>\n                                        <div class=\"col-sm-7\">\n                                            <label class=\"field select\">\n                                                <select id=\"selTypeofHours\" name=\"typeofHours\" [(ngModel)]=\"selectedTypeOfHours\">\n                                                    <option value=\"-1\">All</option>\n                                                    <option *ngFor=\"let hour of TypeOfHours\" value={{hour}}>\n                                                        {{hour}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-8\">\n\n                                    <div class=\"form-group\">\n                                        <label for=\"inputPassword3\" class=\"col-sm-3 control-label\"><i class=\"fa fa-user\"></i> Non Full Time Categories</label>\n                                        <div class=\"col-sm-7\">\n                                            <select class=\"select2-multiple form-control select-primary\" multiple=\"multiple\" [(ngModel)]=\"selectedNonFullTimeCatgeories\">\n                                                <option *ngFor=\"let category of NonFullTimeCatgeories\" value={{category}}>\n                                                    {{category}}\n                                                </option>\n                                            </select>\n\n                                        </div>\n                                        <div class=\"col-sm-2\">\n                                            <button class=\"btn btn-primary\" type=\"button\" (click)=\"Search()\">Filter</button>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                            </div>\n                            <hr class=\"short\" />\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <h6>Summary</h6>\n                                    <div class=\"summaryBlock clearfix\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-3\">\n\n                                                <div class=\"btn-group\">\n                                                    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"getWeekData(13)\">\n                                                        13 Weeks\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-success btn-lg\"  (click)=\"getWeekData(13)\">\n                                                        {{count13Weeks}}\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <div class=\"btn-group\">\n                                                    <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"getWeekData(26)\">\n                                                        26 Weeks\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-primary btn-lg\"  (click)=\"getWeekData(26)\">\n                                                        {{count26Weeks}}\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <div class=\"btn-group\">\n                                                    <button type=\"button\" class=\"btn btn-info btn-lg\" (click)=\"getWeekData(47)\">\n                                                        47 Weeks\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-info btn-lg\"  (click)=\"getWeekData(47)\">\n                                                        {{count47Weeks}}\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <div class=\"btn-group\">\n                                                    <button type=\"button\" class=\"btn btn-warning btn-lg\" (click)=\"getWeekData(52)\">\n                                                        52 Weeks\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-warning btn-lg\"  (click)=\"getWeekData(52)\">\n                                                        {{count52Weeks}}\n                                                    </button>\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <!-- -------------- /Topbar -------------- -->\n    <!-- -------------- Content -------------- -->\n    <section id=\"content\" class=\"table-layout animated fadeIn\" *ngIf=\"dataLoaded\">\n        <div class=\"panel panel-visible p20\" id=\"spy3\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title hidden-xs\">\n                    Report Details\n                </div>\n            </div>\n            <div class=\"panel-body pn\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"form-group\">\n                                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Search</label>\n                                <div class=\"col-sm-6\">\n                                    <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Search\" *ngIf=\"config.filtering\" [ngTableFiltering]=\"config.filtering\"\n                                           (tableChanged)=\"onChangeTable(config)\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"table-responsive over-x_table\">\n                            <ng-table id=\"datatable\" ngclass=\"table table-striped table-bordered table-hover\" [config]=\"config\" (tableChanged)=\"onChangeTable(config)\" (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n                            </ng-table>\n                            <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\"\n                                        [maxSize]=\"maxSize\" [boundaryLinks]=\"false\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\"\n                                        (numPages)=\"numPages = $event\">\n                            </pagination>                         \n\n                        </div>                        \n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- -------------- /Content -------------- -->\n</section>"

/***/ }),

/***/ "../../../../../src/app/enftreport/enftreport.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENFTReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ENFTReportService = (function () {
    function ENFTReportService(_http) {
        this._http = _http;
        this._enftreportUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* CONFIGURATION */].baseServiceUrl;
    }
    ENFTReportService.prototype.getReportData = function () {
        return this._http.get(this._enftreportUrl + 'newHiresNonFullTime/getNewHireNonFullTImeReferenceData')
            .map(function (response) { return response.json().EligibilityNewHiresNonFullTimeReferenceData; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ENFTReportService.prototype.getYears = function () { return this.data.WorkYear; };
    ENFTReportService.prototype.getMonths = function () { return this.data.WorkMonth; };
    ENFTReportService.prototype.getControlGroups = function () { return this.data.ControlGroup; };
    ENFTReportService.prototype.getTypeOfHours = function () { return this.data.UnionType; };
    ENFTReportService.prototype.getNonFullTimeCategories = function () { return this.data.EmployeeType; };
    ENFTReportService.prototype.getWeeklyCounts = function (filterCriteria) {
        var fileName = "newHiresNonFullTime/getReportCountByWeek?WorkYear=" + filterCriteria.selectedYear
            + "&WorkMonth=" + filterCriteria.selectedHireMonth
            + "&ControlGroup=" + filterCriteria.selectedControlGroup
            + "&UnionType=" + filterCriteria.selectedTypeOfHours
            + "&EmployeeType=" + filterCriteria.selectedNonFullTimeCatgeories + "";
        return this._http.get(this._enftreportUrl + fileName)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
        // return { count13Weeks: "3", count26Weeks: "4", count47Weeks: "5", count52Weeks: "6" };
    };
    ENFTReportService.prototype.getWeekReportData = function (filterCriteria) {
        var fileName = "newHiresNonFullTime/getReportsByWeeksCount?WorkYear=" + filterCriteria.selectedYear
            + "&WorkMonth=" + filterCriteria.selectedHireMonth
            + "&ControlGroup=" + filterCriteria.selectedControlGroup
            + "&UnionType=" + filterCriteria.selectedTypeOfHours
            + "&EmployeeType=" + filterCriteria.selectedNonFullTimeCatgeories + "&ReportOfWeek=" + filterCriteria.reportCount;
        return this._http.get(this._enftreportUrl + fileName)
            .map(function (response) { return response.json().reportByWeekCount; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ENFTReportService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return ENFTReportService;
}());
ENFTReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ENFTReportService);

var _a;
//# sourceMappingURL=enftreport.service.js.map

/***/ }),

/***/ "../../../../../src/app/enftreport/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enftreport_component__ = __webpack_require__("../../../../../src/app/enftreport/enftreport.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__enftreport_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enftreport_service__ = __webpack_require__("../../../../../src/app/enftreport/enftreport.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workdetail__ = __webpack_require__("../../../../../src/app/enftreport/workdetail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workdetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__workdetail__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "OnGoingReportComponent")) __webpack_require__.d(__webpack_exports__, "OnGoingReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["OnGoingReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "PayrollDataActivityReportComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataActivityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["PayrollDataActivityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "OnGoingReportService")) __webpack_require__.d(__webpack_exports__, "OnGoingReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["OnGoingReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "PayrollDataActivityReportService")) __webpack_require__.d(__webpack_exports__, "PayrollDataActivityReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["PayrollDataActivityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__workdetail__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__workdetail__["EmployeeSummaryReportService"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/enftreport/workdetail.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=workdetail.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enftreport_index__ = __webpack_require__("../../../../../src/app/enftreport/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "OnGoingReportComponent")) __webpack_require__.d(__webpack_exports__, "OnGoingReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["OnGoingReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "PayrollDataActivityReportComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataActivityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["PayrollDataActivityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "OnGoingReportService")) __webpack_require__.d(__webpack_exports__, "OnGoingReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["OnGoingReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "PayrollDataActivityReportService")) __webpack_require__.d(__webpack_exports__, "PayrollDataActivityReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["PayrollDataActivityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__enftreport_index__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_1__enftreport_index__["EmployeeSummaryReportService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ongoingreport_index__ = __webpack_require__("../../../../../src/app/ongoingreport/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "OnGoingReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__ongoingreport_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "OnGoingReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__ongoingreport_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__ = __webpack_require__("../../../../../src/app/nhftreport/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "PayrollDataActivityReportComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataActivityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["PayrollDataActivityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "PayrollDataActivityReportService")) __webpack_require__.d(__webpack_exports__, "PayrollDataActivityReportService", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["PayrollDataActivityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__nhftreport_index__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_3__nhftreport_index__["EmployeeSummaryReportService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PayrollDataActivityReport_index__ = __webpack_require__("../../../../../src/app/PayrollDataActivityReport/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "PayrollDataActivityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__PayrollDataActivityReport_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "PayrollDataActivityReportService", function() { return __WEBPACK_IMPORTED_MODULE_4__PayrollDataActivityReport_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__ = __webpack_require__("../../../../../src/app/ErCoverageReport/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_5__ErCoverageReport_index__["EmployeeSummaryReportService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__ = __webpack_require__("../../../../../src/app/EmployeeEligibilityReport/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_6__EmployeeEligibilityReport_index__["EmployeeSummaryReportService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__ = __webpack_require__("../../../../../src/app/EmployeeDemographicsReport/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_7__EmployeeDemographicsReport_index__["EmployeeSummaryReportService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__ = __webpack_require__("../../../../../src/app/EmployeeBreakInServiceReport/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_8__EmployeeBreakInServiceReport_index__["EmployeeSummaryReportService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ControlGroup_index__ = __webpack_require__("../../../../../src/app/ControlGroup/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_9__ControlGroup_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ApplicableLargeEmployee_index__ = __webpack_require__("../../../../../src/app/ApplicableLargeEmployee/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_10__ApplicableLargeEmployee_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AddCustomer_index__ = __webpack_require__("../../../../../src/app/AddCustomer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_11__AddCustomer_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ListCustomer_index__ = __webpack_require__("../../../../../src/app/ListCustomer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_12__ListCustomer_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__OnBoardingPersonalInformation_index__ = __webpack_require__("../../../../../src/app/OnBoardingPersonalInformation/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_13__OnBoardingPersonalInformation_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__OnBoardingCustomerInformation_index__ = __webpack_require__("../../../../../src/app/OnBoardingCustomerInformation/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__OnBoardingCustomerInformation_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ClientPayroll_index__ = __webpack_require__("../../../../../src/app/ClientPayroll/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_15__ClientPayroll_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__AleDataUpload_index__ = __webpack_require__("../../../../../src/app/AleDataUpload/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_16__AleDataUpload_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__ = __webpack_require__("../../../../../src/app/EmployeeSummaryReport/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "NewHireFullTimeComponent")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["NewHireFullTimeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "NewHireFullTimeService")) __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["NewHireFullTimeService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_17__EmployeeSummaryReport_index__["EmployeeSummaryReportService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__PayrollDataUpload_index__ = __webpack_require__("../../../../../src/app/PayrollDataUpload/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_18__PayrollDataUpload_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__InsuranceDataUpload_index__ = __webpack_require__("../../../../../src/app/InsuranceDataUpload/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_19__InsuranceDataUpload_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__OneZeroNineFourDataUpload_index__ = __webpack_require__("../../../../../src/app/OneZeroNineFourDataUpload/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_20__OneZeroNineFourDataUpload_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__OneZeroNineFiveDataUpload_index__ = __webpack_require__("../../../../../src/app/OneZeroNineFiveDataUpload/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_21__OneZeroNineFiveDataUpload_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__layout_index__ = __webpack_require__("../../../../../src/app/layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_22__layout_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_index__ = __webpack_require__("../../../../../src/app/dashboard/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_23__dashboard_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_24__login_index__["a"]; });

























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidenav_component__ = __webpack_require__("../../../../../src/app/layout/sidenav.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sidenav_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topnav_component__ = __webpack_require__("../../../../../src/app/layout/topnav.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__topnav_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SideNavComponent = (function () {
    function SideNavComponent() {
        this.route = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].reportingroute;
        this.dashboard = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].dashboard;
        this.nftreport = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].nftreport;
        this.enftreport = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].enftreport;
        this.ogreport = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].ogreport;
        this.pdareport = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].pdareport;
        this.ercreport = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].ercreport;
        this.empsummary = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].empsummary;
        this.empeligilbility = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].empeligilbility;
        this.empdemographics = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].empdemographics;
        this.empbreakinservice = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].empbreakinservice;
        this.addcustomer = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].addcustomer;
        this.listcustomer = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].listcustomer;
        this.onboardingcustomerinformation = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].onboardingcustomerinformation;
        this.clientpayroll = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].clientpayroll;
        this.onboardingpersonalinformation = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].onboardingpersonalinformation;
        this.uploaddata = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].uploaddata;
        this.aledataupload = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].aledataupload;
        this.payrolldataupload = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].payrolldataupload;
        this.insurancedataupload = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].insurancedataupload;
        this.onezeroninefourdataupload = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].onezeroninefourdataupload;
        this.onezeroninefivedataupload = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].onezeroninefivedataupload;
        this.controlgroup = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].controlgroup;
        this.ale = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* CONFIGURATION */].ale;
    }
    return SideNavComponent;
}());
SideNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidenav',
        template: __webpack_require__("../../../../../src/app/layout/sidenav.html")
    })
], SideNavComponent);

//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidenav.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Sidebar  -------------- -->\n<aside id=\"sidebar_left\" class=\"nano nano-light affix\">\n\n    <!-- -------------- Sidebar Left Wrapper  -------------- -->\n    <div class=\"sidebar-left-content nano-content\">\n        <!-- -------------- Sidebar Header -------------- -->\n        <header class=\"sidebar-header\">\n            <!-- -------------- Sidebar - Author -------------- -->\n            <!-- -------------- Sidebar - Author Menu  -------------- -->\n            <div class=\"sidebar-widget menu-widget\">\n                <div class=\"row text-center mbn\">\n                    <div class=\"col-xs-2 pln prn\">\n                        <a [routerLink]=\"['/',route,dashboard]\" class=\"text-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Dashboard\">\n                                <span class=\"fa fa-dashboard\"></span>\n                            </a>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-2 pln prn\">\n                        <a href=\"charts-highcharts.html\" class=\"text-info\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Stats\">\n                                <span class=\"fa fa-bar-chart-o\"></span>\n                            </a>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-2 pln prn\">\n                        <a href=\"sales-stats-products.html\" class=\"text-system\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Orders\">\n                                <span class=\"fa fa-info-circle\"></span>\n                            </a>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-2 pln prn\">\n                        <a href=\"sales-stats-purchases.html\" class=\"text-warning\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Invoices\">\n                                <span class=\"fa fa-file\"></span>\n                            </a>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-2 pln prn\">\n                        <a href=\"basic-profile.html\" class=\"text-alert\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Users\">\n                                <span class=\"fa fa-users\"></span>\n                            </a>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-2 pln prn\">\n                        <a href=\"management-tools-dock.html\" class=\"text-danger\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Settings\">\n                                <span class=\"fa fa-cogs\"></span>\n                            </a>\n                    </div>\n                </div>\n            </div>\n\n        </header>\n        <!-- -------------- /Sidebar Header -------------- -->\n\n        <!-- -------------- Sidebar Menu  -------------- -->\n        <ul class=\"nav sidebar-menu\">\n            <li class=\"sidebar-label pt30\">Menu</li>\n\n            <li>\n                <a class=\"accordion-toggle menu-open\" href=\"#\">\n                        <span class=\"fa fa-tasks\"></span>\n                        <span class=\"sidebar-title\">User Management</span>\n                        <span class=\"caret\"></span>\n                    </a>\n                <ul class=\"nav sub-nav\">\n                    <li class=\"active\">\n                        <a [routerLink]=\"['/',route,addcustomer]\">\n                                <span class=\"fa fa-file-text-o\"></span> Add Customer </a>\n                    </li>\n                    <li class=\"active\">\n                        <a [routerLink]=\"['/',route,listcustomer]\">\n                                <span class=\"fa fa-file-text-o\"></span> List Customers </a>\n                    </li>\n                </ul>\n            </li>\n\n            <li>\n                <a class=\"accordion-toggle\" href=\"#\">\n                        <span class=\"fa fa-dashboard\"></span>\n                        <span class=\"sidebar-title\">On Boarding</span>\n                        <span class=\"caret\"></span>\n                    </a>\n                <ul class=\"nav sub-nav\">\n                    <li class=\"active\">\n                        <a [routerLink]=\"['/',route,onboardingcustomerinformation]\">\n                                <span class=\"fa fa-file-text-o\"></span> Client Onboarding </a>\n                    </li>\n                    <li class=\"active\">\n                        <a [routerLink]=\"['/',route,controlgroup]\">\n                                <span class=\"fa fa-file-text-o\"></span> Control Group </a>\n                    </li>\n                    <li class=\"active\">\n                        <a [routerLink]=\"['/',route,ale]\">\n                                <span class=\"fa fa-file-text-o\"></span> ALE </a>\n                    </li>\n                </ul>\n            </li>\n\n\n            <li class=\"sidebar-label pt25\">Data Related</li>\n            <li>\n                <a class=\"accordion-toggle\" href=\"#\">\n                          <span class=\"fa fa-share-square-o\"></span>\n                        <span class=\"sidebar-title\">Data Upload</span>\n                        <span class=\"caret\"></span>\n                    </a>\n                <ul class=\"nav sub-nav\">\n                    <li>\n                        <a [routerLink]=\"['/',route,aledataupload]\" routerLinkActive=\"active\">\n                                <span class=\"fa fa-file-text-o\"></span> ALE Data </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/',route,payrolldataupload]\" routerLinkActive=\"active\">\n                                <span class=\"fa fa-file-text-o\"></span> Payroll Data </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/',route,insurancedataupload]\" routerLinkActive=\"active\">\n                                <span class=\"fa fa-file-text-o\"></span> Insurance Data </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/',route,onezeroninefourdataupload]\" routerLinkActive=\"active\">\n                                <span class=\"fa fa-file-text-o\"></span> 1094 </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/',route,onezeroninefivedataupload]\" routerLinkActive=\"active\">\n                                <span class=\"fa fa-file-text-o\"></span> 1095 </a>\n                    </li>\n                </ul>\n            </li>\n\n\n\n\n\n\n\n            <li>\n\n                <a class=\"accordion-toggle\" href=\"#\">\n                        <span class=\"fa fa-desktop\"></span>\n                        <span class=\"sidebar-title\">Data View</span>\n                        <span class=\"caret\"></span>\n                    </a>\n                <ul class=\"nav sub-nav\">\n                    <li class=\"active\">\n                        <a [routerLink]=\"['/',route,onboardingcustomerinformation]\">\n                                <span class=\"fa fa-file-text-o\"></span> Payroll Data </a>\n                    </li>\n                    <li class=\"active\">\n                        <a [routerLink]=\"['/',route,onboardingcustomerinformation]\">\n                                <span class=\"fa fa-file-text-o\"></span> Insurance Data </a>\n                    </li>\n                    <li class=\"active\">\n                        <a [routerLink]=\"['/',route,onboardingcustomerinformation]\">\n                                <span class=\"fa fa-file-text-o\"></span> 1094 </a>\n                    </li>\n                    <li class=\"active\">\n                        <a [routerLink]=\"['/',route,onboardingcustomerinformation]\">\n                                <span class=\"fa fa-file-text-o\"></span> 1095 </a>\n                    </li>\n                </ul>\n\n\n\n            </li>\n            <li class=\"sidebar-label pt25\">Eligibility</li>\n\n            <li>\n                <a class=\"accordion-toggle\" href=\"#\">\n                        <span class=\"fa fa-wrench\"></span>\n                        <span class=\"sidebar-title\">Data Portal</span>\n                        <span class=\"caret\"></span>\n                    </a>\n                <ul class=\"nav sub-nav\">\n                    <li>\n                        <a [routerLink]=\"['/',route,empsummary]\" routerLinkActive=\"active\">\n                                <span class=\"glyphicon glyphicon-equalizer\"></span> Employee Summary </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/',route,empeligilbility]\" routerLinkActive=\"active\">\n                                <span class=\"glyphicon glyphicon-book\"></span> Eligible </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/',route,empdemographics]\" routerLinkActive=\"active\">\n                                <span class=\"glyphicon glyphicon-modal-window\"></span> Demographics </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/',route,empbreakinservice]\" routerLinkActive=\"active\">\n                                <span class=\"glyphicon glyphicon-equalizer\"></span> Break In Service </a>\n                    </li>\n\n                    <li>\n                        <a [routerLink]=\"['/',route,nftreport]\" routerLinkActive=\"active\">\n                                <span class=\"glyphicon glyphicon-book\"></span> New Hire Full Time </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/',route,enftreport]\" routerLinkActive=\"active\">\n                                <span class=\"glyphicon glyphicon-modal-window\"></span> New Hire Part Time </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/',route,ogreport]\" routerLinkActive=\"active\">\n                                <span class=\"glyphicon glyphicon-equalizer\"></span> On Going </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/',route,ercreport]\" routerLinkActive=\"active\">\n                                <span class=\"glyphicon glyphicon-equalizer\"></span> Employee Coverage </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/',route,pdareport]\" routerLinkActive=\"active\">\n                                <span class=\"glyphicon glyphicon-equalizer\"></span> Payroll Activity Report </a>\n                    </li>\n                </ul>\n            </li>\n\n            <li class=\"sidebar-label pt25\">IRS</li>\n\n            <li>\n                <a class=\"accordion-toggle\" href=\"#\">\n                        <span class=\"fa fa-check-square-o\"></span>\n                        <span class=\"sidebar-title\">Submission</span>\n                        <span class=\"caret\"></span>\n                    </a>\n                <ul class=\"nav sub-nav\">\n                    <li>\n                        <a>\n                                <span class=\"glyphicon glyphicon-shopping-cart\"></span> 1094 </a>\n                    </li>\n                    <li>\n                        <a>\n                                <span class=\"glyphicon glyphicon-calendar\"></span> AIR Submission 1094/1095 </a>\n                    </li>\n\n                </ul>\n            </li>\n\n\n        </ul>\n        <!-- -------------- /Sidebar Menu  -------------- -->\n\n        <!-- -------------- Sidebar Hide Button -------------- -->\n        <div class=\"sidebar-toggler\">\n            <a href=\"#\">\n                    <span class=\"fa fa-arrow-circle-o-left\"></span>\n                </a>\n        </div>\n        <!-- -------------- /Sidebar Hide Button -------------- -->\n\n    </div>\n    <!-- -------------- /Sidebar Left Wrapper  -------------- -->\n\n</aside>"

/***/ }),

/***/ "../../../../../src/app/layout/topnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopNavComponent = (function () {
    function TopNavComponent() {
    }
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnav',
        template: __webpack_require__("../../../../../src/app/layout/topnav.html")
    })
], TopNavComponent);

//# sourceMappingURL=topnav.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/topnav.html":
/***/ (function(module, exports) {

module.exports = "  <!-- -------------- Header  -------------- -->\n    <header class=\"navbar navbar-fixed-top bg-dark\">\n        <div class=\"navbar-logo-wrapper\">\n            <a class=\"navbar-logo-text\" [routerLink]=\"['\\dashboard']\">\n                    <b>ACA Solutions</b>\n                </a>\n            <span id=\"sidebar_left_toggle\" class=\"ad ad-lines\"></span>\n        </div>\n\n        <h3 class=\"text-white pull-left\"></h3>\n\n\n`\n        <ul class=\"nav navbar-nav navbar-right\">\n\n            <li class=\"dropdown dropdown-fuse\">\n                <a href=\"#\" class=\"dropdown-toggle fw600\" data-toggle=\"dropdown\">\n                        Welcome <span class=\"hidden-xs\">\n                            <span>Vidyadhar Teketi</span> </span>\n                        <span class=\"fa fa-caret-down hidden-xs mr15\"></span>\n                        <img src=\"assets/img/pages/clipart2.png\" alt=\"avatar\" class=\"mw55\">\n                    </a>\n                <ul class=\"dropdown-menu list-group keep-dropdown w250\" role=\"menu\">\n\n\n                    <li class=\"list-group-item\">\n                        <a href=\"#\" class=\"animated animated-short fadeInUp\">\n                                <span class=\"fa fa-bell\"></span> Notifications\n                            </a>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <a href=\"#\" class=\"animated animated-short fadeInUp\">\n                                <span class=\"fa fa-cogs\"></span> Settings\n                            </a>\n                    </li>\n                    <li class=\"dropdown-footer text-center\">\n                        <a href=\"#\" class=\"btn btn-primary btn-sm btn-bordered\">\n                                <span class=\"fa fa-power-off pr5\"></span> Logout\n                            </a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n\n\n    </header>\n    <!-- -------------- /Header  -------------- -->\n\n<!-- -------------- Topbar Menu Wrapper -------------- -->\n            <div id=\"topbar-dropmenu-wrapper\">\n                <div class=\"topbar-menu row\">\n                    <div class=\"col-xs-4 col-sm-2\">\n                        <a href=\"#\" class=\"service-box bg-danger\">\n                        <span class=\"fa fa-music\"></span>\n                        <span class=\"service-title\">Audio</span>\n                    </a>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-2\">\n                        <a href=\"#\" class=\"service-box bg-success\">\n                        <span class=\"fa fa-picture-o\"></span>\n                        <span class=\"service-title\">Images</span>\n                    </a>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-2\">\n                        <a href=\"#\" class=\"service-box bg-primary\">\n                        <span class=\"fa fa-video-camera\"></span>\n                        <span class=\"service-title\">Videos</span>\n                    </a>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-2\">\n                        <a href=\"#\" class=\"service-box bg-alert\">\n                        <span class=\"fa fa-envelope\"></span>\n                        <span class=\"service-title\">Messages</span>\n                    </a>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-2\">\n                        <a href=\"#\" class=\"service-box bg-system\">\n                        <span class=\"fa fa-cog\"></span>\n                        <span class=\"service-title\">Settings</span>\n                    </a>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-2\">\n                        <a href=\"#\" class=\"service-box bg-dark\">\n                        <span class=\"fa fa-user\"></span>\n                        <span class=\"service-title\">Users</span>\n                    </a>\n                    </div>\n                </div>\n            </div>\n            <!-- -------------- /Topbar Menu Wrapper -------------- -->"

/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = (function () {
    function LoginComponent() {
        this.route = 'aca';
        this.dashboard = 'dashboard';
    }
    LoginComponent.prototype.login = function () {
        console.log('login/submitted');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/login/login.html"),
    })
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n    <!-- -------------- Meta and Title -------------- -->\n     <meta charset=\"utf-8\">\n    <title>ACA Solutions</title>\n    <meta name=\"keywords\" content=\"ACA Solutions\"/>\n    <meta name=\"description\" content=\"ACA Solutions\">\n    <meta name=\"author\" content=\"Vidyadhar\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n    <!-- -------------- Fonts -------------- -->\n    <link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'>\n    <link href='https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic' rel='stylesheet'\n          type='text/css'>\n\n    <!-- -------------- CSS - theme -------------- -->\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/skin/default_skin/css/theme.css\">\n\n    <!-- -------------- CSS - allcp forms -------------- -->\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/allcp/forms/css/forms.css\">\n\n    <!-- -------------- Favicon -------------- -->\n    <link rel=\"shortcut icon\" href=\"../../assets/img/favicon.ico\">\n\n    <!-- -------------- IE8 HTML5 support  -------------- -->\n    <!--[if lt IE 9]>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js\"></script>\n    <![endif]-->\n</head>\n\n<body class=\"utility-page sb-l-c sb-r-c\">\n\n<!-- -------------- Body Wrap  -------------- -->\n<div id=\"main\" class=\"animated fadeIn\">\n\n    <!-- -------------- Main Wrapper -------------- -->\n    <section id=\"content_wrapper\">\n\n        \n\t\t\n        <!-- -------------- Content -------------- -->\n        <section id=\"content\">\n\n            <!-- -------------- Login Form -------------- -->\n            <div class=\"allcp-form theme-primary mw320\" id=\"login\">\n              \n\t\t\t  <div class=\"panel mw320\">\n\n                    <form method=\"post\" action=\"/\" id=\"form-login\">\n                        <div class=\"panel-body pn mv10\">\n\n                            <div class=\"section\">\n                                <label for=\"username\" class=\"field prepend-icon\">\n                                    <input type=\"text\" name=\"username\" id=\"username\" class=\"gui-input\"\n                                           placeholder=\"Username\">\n                                    <label for=\"username\" class=\"field-icon\">\n                                        <i class=\"fa fa-user\"></i>\n                                    </label>\n                                </label>\n                            </div>\n                            <!-- -------------- /section -------------- -->\n\n                            <div class=\"section\">\n                                <label for=\"password\" class=\"field prepend-icon\">\n                                    <input type=\"text\" name=\"password\" id=\"password\" class=\"gui-input\"\n                                           placeholder=\"Password\">\n                                    <label for=\"password\" class=\"field-icon\">\n                                        <i class=\"fa fa-lock\"></i>\n                                    </label>\n                                </label>\n                            </div>\n                            <!-- -------------- /section -------------- -->\n\n                            <div class=\"section\">\n                                <div class=\"bs-component pull-left pt5\">\n                                    <div class=\"radio-custom radio-primary mb5 lh25\">\n                                        <input type=\"radio\" id=\"remember\" name=\"remember\">\n                                        <label for=\"remember\">Remember me</label>\n                                    </div>\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-bordered btn-primary pull-right\">Log in</button>\n                            </div>\n                            <div style=\"display: none\">\n                                <a [routerLink]=\"['/reporting/dashboard']\">Dashboard</a>\n                            </div>\n                            <!-- -------------- /section -------------- -->\n\n                        </div>\n                        <!-- -------------- /Form -------------- -->\n                    </form>\n                </div>\n                <!-- -------------- /Panel -------------- -->\n            </div>\n            <!-- -------------- /Spec Form -------------- -->\n\n        </section>\n        <!-- -------------- /Content -------------- -->\n\n    </section>\n    <!-- -------------- /Main Wrapper -------------- -->\n\n</div>\n<!-- -------------- /Body Wrap  -------------- -->\n\n<!-- -------------- Scripts -------------- -->\n\n<!-- -------------- jQuery -------------- -->\n<script src=\"../../assets/js/jquery/jquery-1.11.3.min.js\"></script>\n<script src=\"../../assets/js/jquery/jquery_ui/jquery-ui.min.js\"></script>\n\n<!-- -------------- CanvasBG JS -------------- -->\n<script src=\"../../assets/js/plugins/canvasbg/canvasbg.js\"></script>\n\n<!-- -------------- Theme Scripts -------------- -->\n<script src=\"../../assets/js/utility/utility.js\"></script>\n<script src=\"../../assets/js/demo/demo.js\"></script>\n<script src=\"../../assets/js/main.js\"></script>\n\n<!-- -------------- Page JS -------------- -->\n<script type=\"text/javascript\">\n    jQuery(document).ready(function () {\n\n        \"use strict\";\n\n        // Init Theme Core\n        Core.init();\n\n        // Init Demo JS\n        Demo.init();\n\n        // Init CanvasBG\n        CanvasBG.init({\n            Loc: {\n                x: window.innerWidth / 5,\n                y: window.innerHeight / 10\n            }\n        });\n\n    });\n</script>\n\n<!-- -------------- /Scripts -------------- -->\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/nhftreport/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nhftreport_component__ = __webpack_require__("../../../../../src/app/nhftreport/nhftreport.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NewHireFullTimeComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__nhftreport_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nhftreport_service__ = __webpack_require__("../../../../../src/app/nhftreport/nhftreport.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NewHireFullTimeService", function() { return __WEBPACK_IMPORTED_MODULE_1__nhftreport_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__ = __webpack_require__("../../../../../src/app/nhftreport/nhftworkdetail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "DashboardComponent")) __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["DashboardComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "SideNavComponent")) __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["SideNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "TopNavComponent")) __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["TopNavComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "ENFTReportComponent")) __webpack_require__.d(__webpack_exports__, "ENFTReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["ENFTReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "PayrollDataActivityReportComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataActivityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["PayrollDataActivityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "AddCustomerComponent")) __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["AddCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "ListCustomerComponent")) __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["ListCustomerComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "OnboardingCustomerInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingCustomerInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["OnboardingCustomerInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "ClientPayrollComponent")) __webpack_require__.d(__webpack_exports__, "ClientPayrollComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["ClientPayrollComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "OnboardingPersonalInformationComponent")) __webpack_require__.d(__webpack_exports__, "OnboardingPersonalInformationComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["OnboardingPersonalInformationComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "AleDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "AleDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["AleDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "ControlGroupComponent")) __webpack_require__.d(__webpack_exports__, "ControlGroupComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["ControlGroupComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "ApplicableLargeEmployeeComponent")) __webpack_require__.d(__webpack_exports__, "ApplicableLargeEmployeeComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["ApplicableLargeEmployeeComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "ErCoverageReportComponent")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["ErCoverageReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "EmployeeEligibilityReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["EmployeeEligibilityReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "EmployeeDemographicReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["EmployeeDemographicReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "EmployeeBreakInServiceReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["EmployeeBreakInServiceReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "EmployeeSummaryReportComponent")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["EmployeeSummaryReportComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "InsuranceDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "InsuranceDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["InsuranceDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "OneZeroNineFourDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFourDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["OneZeroNineFourDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "OneZeroNineFiveDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "OneZeroNineFiveDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["OneZeroNineFiveDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "PayrollDataUploadComponent")) __webpack_require__.d(__webpack_exports__, "PayrollDataUploadComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["PayrollDataUploadComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "LoginComponent")) __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["LoginComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "ENFTReportService")) __webpack_require__.d(__webpack_exports__, "ENFTReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["ENFTReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "ErCoverageReportService")) __webpack_require__.d(__webpack_exports__, "ErCoverageReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["ErCoverageReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "EmployeeEligibilityReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeEligibilityReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["EmployeeEligibilityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "EmployeeDemographicReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeDemographicReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["EmployeeDemographicReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "EmployeeBreakInServiceReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeBreakInServiceReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["EmployeeBreakInServiceReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "PayrollDataActivityReportService")) __webpack_require__.d(__webpack_exports__, "PayrollDataActivityReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["PayrollDataActivityReportService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__, "EmployeeSummaryReportService")) __webpack_require__.d(__webpack_exports__, "EmployeeSummaryReportService", function() { return __WEBPACK_IMPORTED_MODULE_2__nhftworkdetail__["EmployeeSummaryReportService"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/nhftreport/nhftreport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nhftreport_service__ = __webpack_require__("../../../../../src/app/nhftreport/nhftreport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_export_service__ = __webpack_require__("../../../../../src/app/shared/export.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewHireFullTimeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewHireFullTimeComponent = (function () {
    function NewHireFullTimeComponent(_newHireFullTimeService, _export) {
        this._newHireFullTimeService = _newHireFullTimeService;
        this._export = _export;
        this.eligibleFullTimeWorkers = '0';
        this.workerDetails = [];
        this.rows = [];
        this.page = 1;
        this.itemsPerPage = 50;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.columns = [
            { title: 'Control Group', className: 'va-m', name: 'controlGroup' },
            { title: 'Latest Production Company', className: 'va-m', name: 'mostRecentProductionCompany' },
            { title: 'Most Recent Show', className: 'va-m', name: 'mostRecentProject' },
            { title: 'SSN Number', className: 'hidden-xs va-m', name: 'ssnNumber' },
            { title: 'First Name', className: 'hidden-xs va-m', name: 'firstName' },
            { title: 'Last Name', className: 'va-m', name: 'lastName' },
            { title: 'Last Worked Date', className: 'va-m', name: 'lastWorkedDate' },
            { title: 'Hire Date', className: 'va-m', name: 'hireDate' },
            { title: 'Union Type', className: 'va-m', name: 'unionType' },
            { title: 'Payroll Source', className: 'va-m', name: 'payrollSource' },
            { title: 'Average Hours', className: 'va-m', name: 'avgHours' },
            { title: 'Total Hours', className: 'va-m', name: 'totalHours' },
        ];
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table', 'table-striped', 'table-bordered', 'table-hover']
        };
    }
    NewHireFullTimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._newHireFullTimeService.getReportData().subscribe(function (data) {
            _this.Years = data.WorkYear;
            _this.Months = data.WorkMonth;
            _this.ControlGroups = data.ControlGroup;
        }, function (error) { return _this.errorMessage = error; });
        this.selectedYear = '-1';
        this.selectedHireMonth = '-1';
        this.selectedControlGroup = '-1';
        this.eligibleFullTimeWorkers = '0';
        this.onChangeTable(this.config);
        this.dataLoaded = false;
    };
    NewHireFullTimeComponent.prototype.eligibleFullTimeReportData = function () {
        var _this = this;
        var filterCriteria = this.getFilterValues();
        filterCriteria.acaEligibleCount = this.eligibleFullTimeWorkers;
        this._newHireFullTimeService.getEligibleFullTimeReportData(filterCriteria).subscribe(function (workdetails) {
            _this.workerDetails = workdetails;
            _this.onChangeTable(_this.config);
            _this.dataLoaded = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    NewHireFullTimeComponent.prototype.getFilterValues = function () {
        var year = this.selectedYear;
        if (year === '-1') {
            year = "''";
        }
        var month = this.selectedHireMonth;
        if (month === '-1') {
            month = "''";
        }
        var cg = this.selectedControlGroup;
        if (cg === "All" || cg === '-1') {
            cg = "''";
            ;
        }
        var filterCriteria = {
            selectedYear: year, selectedHireMonth: month, selectedControlGroup: cg
        };
        return filterCriteria;
    };
    NewHireFullTimeComponent.prototype.Search = function () {
        var _this = this;
        this.dataLoaded = false;
        var filterCriteria = this.getFilterValues();
        this.eligibleFullTimeWorkers = '0';
        this._newHireFullTimeService.getEligibleFullTimeWorkers(filterCriteria)
            .subscribe(function (counts) {
            if (counts === undefined || counts == null) {
                return;
            }
            counts.forEach(function (element) {
                _this.eligibleFullTimeWorkers = element.acaEligibleCount;
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    NewHireFullTimeComponent.prototype.downloadPdf = function () {
    };
    NewHireFullTimeComponent.prototype.downloadExcel = function () {
        var tbl = document.getElementById('datatable');
        var btn = document.getElementById('btnDownloadExcel');
        if (tbl) {
            console.log(tbl.children[0]);
        }
        if (tbl && tbl.children.length > 0) {
            this._export.excelByTableElement(btn, tbl.children[0], 'New Hire Part Time Report');
        }
    };
    NewHireFullTimeComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    NewHireFullTimeComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.workerDetails; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    NewHireFullTimeComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    NewHireFullTimeComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    NewHireFullTimeComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.workerDetails, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    return NewHireFullTimeComponent;
}());
NewHireFullTimeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nhftreport',
        template: __webpack_require__("../../../../../src/app/nhftreport/nhftreport.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nhftreport_service__["a" /* NewHireFullTimeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nhftreport_service__["a" /* NewHireFullTimeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_export_service__["a" /* ExportToExcelService */]) === "function" && _b || Object])
], NewHireFullTimeComponent);

var _a, _b;
//# sourceMappingURL=nhftreport.component.js.map

/***/ }),

/***/ "../../../../../src/app/nhftreport/nhftreport.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\n<section id=\"content_wrapper\">\n\n    <!-- -------------- Topbar -------------- -->\n    <header id=\"topbar\" class=\"ph10\">\n        <div class=\"topbar-left\">\n            <div class=\"allcp-form theme-primary\">\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\n                    data-panel-title=\"false\">\n                    <div class=\"panel-heading\">\n                        <span class=\"panel-title\">New Hire Full Time Report</span>\n                        <span class=\"panel-icon pull-right\">\n                           <a id=\"btnDownloadPdf\"  class=\"fa fa-file-pdf-o\" (click)=\"downloadPdf()\"></a>\n                            <a id=\"btnDownloadExcel\" class=\"fa fa-file-excel-o\" (click)=\"downloadExcel()\" ></a>\n                        </span>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"ddlYear\" class=\"col-sm-5 control-label\"><i class=\"fa fa-calendar\"></i> Year</label>\n                                        <div class=\"col-sm-7\">\n                                            <label class=\"field select\">\n                                                <select id=\"ddlYear\" name=\"ddlYear\" [(ngModel)]=\"selectedYear\" aria-placeholder=\"Select year\">\n                                                    <option value=\"-1\">Select Year</option>\n                                                    <option *ngFor=\"let year of Years\" value={{year}}>\n                                                        {{year}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"ddlmonth\" class=\"col-sm-5 control-label\"><i class=\"fa fa-calendar\"></i> Hire Month</label>\n                                        <div class=\"col-sm-7\">\n                                            <label class=\"field select\">\n                                                <select id=\"ddlmonth\" name=\"ddlmonth\" [(ngModel)]=\"selectedHireMonth\">\n                                                    <option value=\"-1\">Select Month</option>\n                                                    <option *ngFor=\"let month of Months\" value={{month}}>\n                                                        {{month}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"ddlcontrolgroup\" class=\"col-sm-5 control-label\"><i class=\"fa fa-group\"></i> Control Group</label>\n                                        <div class=\"col-sm-7\">\n                                            <label class=\"field select\">\n                                                <select id=\"ddlcontrolgroup\" name=\"ddlcontrolgroup\" [(ngModel)]=\"selectedControlGroup\">\n                                                    <option value=\"-1\">All</option>\n                                                    <option *ngFor=\"let group of ControlGroups\" value={{group}}>\n                                                        {{group}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                        </div>\n                                        \n                                    </div>\n\n                                </div>  \n                                <div class=\"col-sm-3\">\n                                            <button class=\"btn btn-primary\" type=\"button\" (click)=\"Search()\">Filter</button>\n                                 </div>                             \n                            </div>\n                            \n                            <hr class=\"short\" />\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <h6>Summary</h6>\n                                    <div class=\"summaryBlock clearfix\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-6\">\n                                                <div class=\"btn-group\">\n                                                    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"eligibleFullTimeReportData()\">\n                                                        ACA Eligible Full Time\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"eligibleFullTimeReportData()\">\n                                                        {{eligibleFullTimeWorkers}}\n                                                    </button>\n                                                </div>\n                                            </div>                                            \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <!-- -------------- /Topbar -------------- -->\n    <!-- -------------- Content -------------- -->\n    <section id=\"content\" class=\"table-layout animated fadeIn\" *ngIf=\"dataLoaded\">\n        <div class=\"panel panel-visible p20\" id=\"spy3\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title hidden-xs\">\n                    Report Details\n                </div>\n            </div>\n            <div class=\"panel-body pn\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"form-group\">\n                                <label for=\"inputTableSearch\" class=\"col-sm-2 control-label\">Search</label>\n                                <div class=\"col-sm-6\">\n                                    <input type=\"text\" class=\"form-control\" id=\"inputTableSearch\" placeholder=\"Search\" *ngIf=\"config.filtering\" [ngTableFiltering]=\"config.filtering\"\n                                        (tableChanged)=\"onChangeTable(config)\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"table-responsive over-x_table\">\n                            <ng-table id=\"datatable\" ngclass=\"table table-striped table-bordered table-hover\" [config]=\"config\" (tableChanged)=\"onChangeTable(config)\"\n                                (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n                            </ng-table>\n                            <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\"\n                                [maxSize]=\"maxSize\" [boundaryLinks]=\"false\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\"\n                                (numPages)=\"numPages = $event\">\n                            </pagination>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- -------------- /Content -------------- -->\n</section>"

/***/ }),

/***/ "../../../../../src/app/nhftreport/nhftreport.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewHireFullTimeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewHireFullTimeService = (function () {
    function NewHireFullTimeService(_http) {
        this._http = _http;
        this._nhftreportUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* CONFIGURATION */].baseServiceUrl;
    }
    NewHireFullTimeService.prototype.getReportData = function () {
        return this._http.get(this._nhftreportUrl + 'newHiresFullTime/getNewHireFullTimeReferenceData')
            .map(function (response) { return response.json().EligibilityNewHiresFullTimeReferenceData; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    NewHireFullTimeService.prototype.getEligibleFullTimeWorkers = function (filterCriteria) {
        var fileName = "newHiresFullTime/getACAEligibleCount?WorkYear=" + filterCriteria.selectedYear
            + "&WorkMonth=" + filterCriteria.selectedHireMonth
            + "&ControlGroup=" + filterCriteria.selectedControlGroup;
        return this._http.get(this._nhftreportUrl + fileName)
            .map(function (response) { return response.json().summaryCountForNewHireFullTimeVO; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
        // return { eftworkers: "26" }; 
    };
    NewHireFullTimeService.prototype.getEligibleFullTimeReportData = function (filterCriteria) {
        var fileName = "newHiresFullTime/getReportByACAEligibleCount?WorkYear=" + filterCriteria.selectedYear
            + "&WorkMonth=" + filterCriteria.selectedHireMonth
            + "&ControlGroup=" + filterCriteria.selectedControlGroup;
        return this._http.get(this._nhftreportUrl + fileName)
            .map(function (response) { return response.json().reportByACAEligibleCount; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    NewHireFullTimeService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Failed in web api(Server error) ');
    };
    return NewHireFullTimeService;
}());
NewHireFullTimeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NewHireFullTimeService);

var _a;
//# sourceMappingURL=nhftreport.service.js.map

/***/ }),

/***/ "../../../../../src/app/nhftreport/nhftworkdetail.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=nhftworkdetail.js.map

/***/ }),

/***/ "../../../../../src/app/ongoingreport/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ogreport_component__ = __webpack_require__("../../../../../src/app/ongoingreport/ogreport.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ogreport_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ogreport_service__ = __webpack_require__("../../../../../src/app/ongoingreport/ogreport.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ogreport_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/ongoingreport/ogreport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ogreport_service__ = __webpack_require__("../../../../../src/app/ongoingreport/ogreport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_export_service__ = __webpack_require__("../../../../../src/app/shared/export.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnGoingReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OnGoingReportComponent = (function () {
    function OnGoingReportComponent(_ogreportsrv, _export) {
        this._ogreportsrv = _ogreportsrv;
        this._export = _export;
        this.workDetails = [];
        this.rows = [];
        this.columns = [
            { title: 'Control Group', className: 'va-m', name: 'controlGroup' },
            { title: 'Latest Production Company', className: 'va-m', name: 'mostRecentProductionCompany' },
            { title: 'Most Recent Show', className: 'va-m', name: 'mostRecentProject' },
            { title: 'SSN Number', className: 'hidden-xs va-m', name: 'ssnNumber' },
            { title: 'First Name', className: 'hidden-xs va-m', name: 'firstName' },
            { title: 'Last Name', className: 'va-m', name: 'lastName' },
            { title: 'Last Worked Date', className: 'va-m', name: 'lastWorkedDate' },
            { title: 'Hire Date', className: 'va-m', name: 'hireDate' },
            { title: 'Union/Non-Union', className: 'va-m', name: 'unionType' },
            { title: 'Weeks Since Last Worked', className: 'va-m', name: 'weeksSinceLastWorked' },
            { title: 'Average Hours-SMP', className: 'va-m', name: 'avgHours' },
            { title: 'Total Hours', className: 'va-m', name: 'totalHours' },
            { title: 'Employee Type', className: 'va-m', name: 'employeeType' }
        ];
        this.page = 1;
        this.itemsPerPage = 50;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table', 'table-striped', 'table-bordered', 'table-hover']
        };
    }
    OnGoingReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controlGroupControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.typeOfHoursControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.measurementEndDateControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.avgWeeklyThresholdControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('30', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.ogReportForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({
            controlGroup: this.controlGroupControl,
            typeOfHour: this.typeOfHoursControl,
            avgWeeklyHoursThreshold: this.avgWeeklyThresholdControl,
            measurementEndDate: this.measurementEndDateControl
        });
        this._ogreportsrv.getReportData().subscribe(function (data) {
            _this.measurementEndDates = data.measurementDate;
            _this.controlGroups = data.ControlGroup;
            _this.typeOfHours = data.typeOfHours;
        }, function (error) { return _this.errorMessage = error; });
        this.count13Weeks = '0';
        this.count26Weeks = '0';
        this.count47Weeks = '0';
        this.count52Weeks = '0';
        this.onChangeTable(this.config);
        this.dataLoaded = false;
    };
    OnGoingReportComponent.prototype.getFilterValues = function () {
        var measurementDate = this.measurementEndDateControl.value;
        if (measurementDate === undefined || measurementDate === '') {
            measurementDate = "''";
        }
        var cg = this.controlGroupControl.value;
        if (cg === undefined || cg === "All" || cg === '') {
            cg = "''";
            ;
        }
        var emptype = this.typeOfHoursControl.value;
        if (emptype === undefined || emptype === '') {
            emptype = "''";
            ;
        }
        var cat = this.avgWeeklyThresholdControl.value;
        if (cat === undefined || cat === '') {
            cat = "''";
        }
        var filterCriteria = {
            selectedMeasuredDate: measurementDate,
            selectedControlGroup: cg,
            selectedTypeOfHours: emptype,
            avgWeeklyThreshold: cat,
            reportCount: 13
        };
        return filterCriteria;
    };
    OnGoingReportComponent.prototype.Search = function (formValues) {
        var _this = this;
        this.dataLoaded = false;
        var filterCriteria = this.getFilterValues();
        this.count13Weeks = '0';
        this.count26Weeks = '0';
        this.count47Weeks = '0';
        this.count52Weeks = '0';
        this._ogreportsrv.getOnGoingReportDataCount(filterCriteria).subscribe(function (counts) {
            if (counts === undefined || counts == null || (counts != null && counts.onGoingCountByWeeks == null)) {
                return;
            }
            counts.onGoingCountByWeeks.forEach(function (element) {
                switch (element.WEEKS_WORKED) {
                    case '13':
                        _this.count13Weeks = element.WEEKS_WORKED_COUNT;
                        break;
                    case '26':
                        _this.count26Weeks = element.WEEKS_WORKED_COUNT;
                        break;
                    case '47':
                        _this.count47Weeks = element.WEEKS_WORKED_COUNT;
                        break;
                    case '52':
                        _this.count52Weeks = element.WEEKS_WORKED_COUNT;
                        break;
                }
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    OnGoingReportComponent.prototype.getWeekData = function (weekCount) {
        var _this = this;
        var filterCriteria = this.getFilterValues();
        filterCriteria.reportCount = weekCount;
        this._ogreportsrv.getOnGoingReportData(filterCriteria).subscribe(function (workdetails) {
            _this.workDetails = workdetails;
            _this.onChangeTable(_this.config);
            _this.dataLoaded = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    OnGoingReportComponent.prototype.downloadPdf = function () {
    };
    OnGoingReportComponent.prototype.downloadExcel = function () {
        var tbl = document.getElementById('datatable');
        var btn = document.getElementById('btnDownloadExcel');
        if (tbl) {
            console.log(tbl.children[0]);
        }
        if (tbl && tbl.children.length > 0) {
            this._export.excelByTableElement(btn, tbl.children[0], 'New Hire Part Time Report');
        }
    };
    // Validations
    OnGoingReportComponent.prototype.validateControlGroups = function () {
        return this.controlGroupControl.valid || this.controlGroupControl.untouched;
    };
    OnGoingReportComponent.prototype.validateMeasurementEndDate = function () {
        return this.measurementEndDateControl.valid || this.measurementEndDateControl.untouched;
    };
    OnGoingReportComponent.prototype.validateAvgThreashold = function () {
        return this.avgWeeklyThresholdControl.valid || this.avgWeeklyThresholdControl.untouched;
    };
    OnGoingReportComponent.prototype.validateTypeOfHour = function () {
        return this.typeOfHoursControl.valid || this.typeOfHoursControl.untouched;
    };
    OnGoingReportComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    OnGoingReportComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.workDetails; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    OnGoingReportComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    OnGoingReportComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    OnGoingReportComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.workDetails, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    return OnGoingReportComponent;
}());
OnGoingReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/ongoingreport/ogreport.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ogreport_service__["a" /* OnGoingReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ogreport_service__["a" /* OnGoingReportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_export_service__["a" /* ExportToExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_export_service__["a" /* ExportToExcelService */]) === "function" && _b || Object])
], OnGoingReportComponent);

var _a, _b;
//# sourceMappingURL=ogreport.component.js.map

/***/ }),

/***/ "../../../../../src/app/ongoingreport/ogreport.html":
/***/ (function(module, exports) {

module.exports = "<!-- -------------- Main Wrapper -------------- -->\n<section id=\"content_wrapper\">\n\n    <!-- -------------- Topbar -------------- -->\n    <header id=\"topbar\" class=\"ph10\">\n        <div class=\"topbar-left\">\n            <div class=\"allcp-form theme-primary\">\n                <div class=\"panel panel-primary\" id=\"p2\" data-panel-color=\"false\" data-panel-fullscreen=\"false\" data-panel-remove=\"false\"\n                    data-panel-title=\"false\">\n                    <div class=\"panel-heading\">\n                        <span class=\"panel-title\">Eligibility Report Ongoing</span>\n                        <span class=\"panel-icon pull-right\">\n                            <a id=\"btnDownloadPdf\"  class=\"fa fa-file-pdf-o\" (click)=\"downloadPdf()\"></a>\n                            <a id=\"btnDownloadExcel\" class=\"fa fa-file-excel-o\" (click)=\"downloadExcel()\" ></a>\n                        </span>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"form-horizontal\">\n                            <form novalidate [formGroup]=\"ogReportForm\" (ngSubmit)=\"Search(ogReportForm.value)\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-3\">\n\n                                        <div class=\"form-group\">\n                                            <label for=\"inputEmail3\" class=\"col-sm-5 control-label\"><i class=\"fa fa-group\"></i> Control Group</label>\n                                            <div class=\"col-sm-7\">\n                                                <label class=\"field select\">\n                                                <select id=\"selcontrolgroup\" name=\"controlgroup\" formControlName=\"controlGroup\" [ngClass]=\"{'error':!validateControlGroups()}\">\n                                                    <option selected disabled value=\"\">All</option>\n                                                    <option *ngFor=\"let group of controlGroups\" value={{group}}>\n                                                        {{group}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                            <em *ngIf=\"!validateControlGroups()\" >Please select valid Control Group</em>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-sm-5\">\n\n\n                                        <div class=\"form-group\">\n                                            <label for=\"inputEmail3\" class=\"col-sm-7 control-label\"><i class=\"fa fa-calendar\"></i> Measurement End Date</label>\n                                            <div class=\"col-sm-5\">\n                                                <label class=\"field select\">\n                                                <select id=\"seldate\" name=\"date\" formControlName=\"measurementEndDate\">\n                                                    <option selected disabled value=\"\">Select Date</option>\n                                                    <option *ngFor=\"let date of measurementEndDates\" value={{date}}>\n                                                        {{date}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                            </div>\n                                        </div>\n\n\n\n                                    </div>\n\n                                    <div class=\"col-sm-3\">\n\n\n                                        <div class=\"form-group\">\n                                            <label for=\"inputPassword3\" class=\"col-sm-8 control-label\"><i class=\"fa fa-clock-o\"></i> Avg. Weekly Hours Tresshold</label>\n                                            <div class=\"col-sm-4\">\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"avgWeeklyHoursThreshold\" id=\"inputPassword3\">\n                                            </div>\n                                        </div>\n\n\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"form-group\">\n                                            <label for=\"inputPassword3\" class=\"col-sm-5 control-label\"><i class=\"fa fa-dashboard\"></i> Type of Hours</label>\n                                            <div class=\"col-sm-7\">\n                                                <label class=\"field select\">\n                                                <select id=\"selTypeofHours\" name=\"typeofHours\" formControlName=\"typeOfHour\">\n                                                    <option selected disabled value=\"\">All</option>\n                                                    <option *ngFor=\"let hour of typeOfHours\" value={{hour}}>\n                                                        {{hour}}\n                                                    </option>\n                                                </select>\n                                                <i class=\"arrow\"></i>\n                                            </label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-8\">\n\n                                        <div class=\"form-group\">\n                                            <div class=\"col-sm-2\">\n                                                <button class=\"btn btn-primary\" type=\"submit\">Filter</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                            <hr class=\"short\" />\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <h6>Summary</h6>\n                                    <div class=\"summaryBlock clearfix\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-3\">\n\n                                                <div class=\"btn-group\">\n                                                    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"getWeekData(13)\">\n                                                        13 Weeks\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"getWeekData(13)\">\n                                                        {{count13Weeks}}\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <div class=\"btn-group\">\n                                                    <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"getWeekData(26)\">\n                                                        26 Weeks\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"getWeekData(26)\">\n                                                        {{count26Weeks}}\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <div class=\"btn-group\">\n                                                    <button type=\"button\" class=\"btn btn-info btn-lg\" (click)=\"getWeekData(47)\">\n                                                        47 Weeks\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-info btn-lg\" (click)=\"getWeekData(47)\">\n                                                        {{count47Weeks}}\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-3\">\n                                                <div class=\"btn-group\">\n                                                    <button type=\"button\" class=\"btn btn-warning btn-lg\" (click)=\"getWeekData(52)\">\n                                                        52 Weeks\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-warning btn-lg\" (click)=\"getWeekData(52)\">\n                                                        {{count52Weeks}}\n                                                    </button>\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <!-- -------------- /Topbar -------------- -->\n    <!-- -------------- Content -------------- -->\n    <section id=\"content\" class=\"table-layout animated fadeIn\" *ngIf=\"dataLoaded\">\n        <div class=\"panel panel-visible p20\" id=\"spy3\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title hidden-xs\">\n                    Report Details\n                </div>\n            </div>\n            <div class=\"panel-body pn\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"form-horizontal\">\n                            <div class=\"form-group\">\n                                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Search</label>\n                                <div class=\"col-sm-6\">\n                                    <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Search\" *ngIf=\"config.filtering\" [ngTableFiltering]=\"config.filtering\"\n                                        (tableChanged)=\"onChangeTable(config)\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"table-responsive over-x_table\">\n                            <ng-table id=\"datatable\" ngclass=\"table table-striped table-bordered table-hover\" [config]=\"config\" (tableChanged)=\"onChangeTable(config)\"\n                                (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n                            </ng-table>\n                            <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\"\n                                [maxSize]=\"maxSize\" [boundaryLinks]=\"false\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\"\n                                (numPages)=\"numPages = $event\">\n                            </pagination>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- -------------- /Content -------------- -->\n</section>"

/***/ }),

/***/ "../../../../../src/app/ongoingreport/ogreport.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnGoingReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OnGoingReportService = (function () {
    function OnGoingReportService(_http) {
        this._http = _http;
        this._onGoingReportUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* CONFIGURATION */].baseServiceUrl;
    }
    OnGoingReportService.prototype.getReportData = function () {
        return this._http.get(this._onGoingReportUrl + 'eligibilityReportOngoing/getOnGoingReportReferenceData')
            .map(function (response) { return response.json().eligibilityReportOngoingVO; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    OnGoingReportService.prototype.getOnGoingReportDataCount = function (filterCriteria) {
        var fileName = "eligibilityReportOngoing/getOnGoingCountByWeeks?MeasurementEndDate=" + filterCriteria.selectedMeasuredDate
            + "&AvgWeeklyHours=" + filterCriteria.avgWeeklyThreshold
            + "&ControlGroup=" + filterCriteria.selectedControlGroup
            + "&UnionType=" + filterCriteria.selectedTypeOfHours;
        return this._http.get(this._onGoingReportUrl + fileName)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    OnGoingReportService.prototype.getOnGoingReportData = function (filterCriteria) {
        var fileName = "eligibilityReportOngoing/getOnGoingReportsByWeeksCount?MeasurementEndDate="
            + filterCriteria.selectedMeasuredDate
            + "&AvgWeeklyHours=" + filterCriteria.avgWeeklyThreshold
            + "&ControlGroup=" + filterCriteria.selectedControlGroup
            + "&UnionType=" + filterCriteria.selectedTypeOfHours
            + "&ReportOfWeek=" + filterCriteria.reportCount;
        return this._http.get(this._onGoingReportUrl + fileName)
            .map(function (response) { return response.json().onGoingReportsByWeekCount; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    OnGoingReportService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return OnGoingReportService;
}());
OnGoingReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OnGoingReportService);

var _a;
//# sourceMappingURL=ogreport.service.js.map

/***/ }),

/***/ "../../../../../src/app/rxjs-extension.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);




//# sourceMappingURL=rxjs-extension.js.map

/***/ }),

/***/ "../../../../../src/app/shared/export.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportToExcelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExportToExcelService = (function () {
    function ExportToExcelService() {
    }
    ExportToExcelService.prototype.excel = function (anchor, table, sheetName, excelName) {
        if (excelName === void 0) { excelName = 'export'; }
        ExcellentExport.excel(anchor, table, sheetName, excelName);
    };
    ExportToExcelService.prototype.excelByTableElement = function (anchor, table, sheetName, excelName) {
        if (excelName === void 0) { excelName = 'export'; }
        ExcellentExport.excelByTableElement(anchor, table, sheetName, excelName);
    };
    ExportToExcelService.prototype.csvByTableElement = function (anchor, table, sheetName, excelName) {
        if (excelName === void 0) { excelName = 'export'; }
        ExcellentExport.csvByTableElement(anchor, table, sheetName, excelName);
    };
    return ExportToExcelService;
}());
ExportToExcelService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ExportToExcelService);

//# sourceMappingURL=export.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__export_service__ = __webpack_require__("../../../../../src/app/shared/export.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__export_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

window['$'] = window['jQuery'] = __WEBPACK_IMPORTED_MODULE_0_jquery__;




if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map