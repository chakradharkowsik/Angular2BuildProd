"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var app_config_1 = require("../app.config");
var EmployeeBreakInServiceReportService = (function () {
    function EmployeeBreakInServiceReportService(_http) {
        this._http = _http;
        this._empBreakInServiceReportUrl = app_config_1.CONFIGURATION.baseServiceUrl + 'breakinreportservice/';
    }
    EmployeeBreakInServiceReportService.prototype.getReportData = function () {
        return this._http.get(this._empBreakInServiceReportUrl + 'getBreakInReportReferenceData')
            .map(function (response) { return response.json().breakInReferanceData; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    EmployeeBreakInServiceReportService.prototype.getEmployeeBreakInServiceReports = function (filterCriteria) {
        var fileName = 'getBreakInServiceReportData?WorkYear=' + filterCriteria.selectedYear
            + '&ControlGroup=' + filterCriteria.selectedControlGroup;
        return this._http.get(this._empBreakInServiceReportUrl + fileName)
            .map(function (response) { return response.json().breakInReportData; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    EmployeeBreakInServiceReportService.prototype.downloadExcelReport = function (filterCriteria) {
        var fileName = 'processBreakInServiceReportExcelUpload?WorkYear=' + filterCriteria.selectedYear
            + '&ControlGroup=' + filterCriteria.selectedControlGroup;
        window.open(this._empBreakInServiceReportUrl + fileName, '_bank');
    };
    EmployeeBreakInServiceReportService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Failed in web api(Server error) ');
    };
    return EmployeeBreakInServiceReportService;
}());
EmployeeBreakInServiceReportService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeBreakInServiceReportService);
exports.EmployeeBreakInServiceReportService = EmployeeBreakInServiceReportService;
//# sourceMappingURL=employeeBreakInServiceReport.service.js.map