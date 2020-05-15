import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Country } from '../models/country';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class GetdataService {
 //api= "http://ec2-13-127-10-27.ap-south-1.compute.amazonaws.com:4502/bin/getCovidCasesDetails";
 api = 'http://localhost:4502/bin/getCovidCasesDetails';
 indStateApi = 'https://api.covid19india.org/state_district_wise.json';
 indStatUrl = 'https://covid19-india-adhikansh.herokuapp.com/states';
 countryApi = 'https://coronavirus-19-api.herokuapp.com/countries';
  constructor(private _http: HttpClient) { }

  //  httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'Basic ' + btoa('admin:admin'),
  //     'Access-Control-Allow-Origin': '*'
  //   })
  // };

  getSates() {
    return this._http.get(`${this.indStatUrl}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getAll(): Observable<Country>{
    return this._http.get<Country>(`${this.api}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert('Please check your internet connection!.');
    return throwError(errorMessage);
 }
}
