import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IWorkDetails } from './workdetail';
import { Observable } from 'rxjs/Observable';

import { CONFIGURATION } from '../app.config';



@Injectable()
export class PayrollDataActivityReportService {
    private _pdaReportUrl = CONFIGURATION.baseServiceUrl;
    constructor(private _http: Http) {

    }

    getReportData(): Observable<any> {
        return this._http.get(this._pdaReportUrl + 'payrollDataActivityReport/getPayrollReferenceData')
            .map((response: Response) => response.json().payrollRefDataVO)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPayrollDataActivityReportData(filterCriteria: any): Observable<IWorkDetails[]> {

        let fileName: string = "payrollDataActivityReport/getReportsForPayrollDataActivity?WorkYear=" + filterCriteria.selectedYear
            + "&ControlGroup=" + filterCriteria.selectedControlGroup;
        return this._http.get(this._pdaReportUrl + fileName)
            .map((response: Response) => <IWorkDetails[]>response.json().reportsForPayrollDataActivity)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getYears() { return ['2016', '2017', '2018']; }

    getControlGroups() { return ['Revolution', 'Cast & Crew']; }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}