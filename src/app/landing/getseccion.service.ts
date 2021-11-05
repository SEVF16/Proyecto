import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetseccionService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    })
  };
  // Api1 --- 8000
  // Api2 --- 7000
  // Api3 --- 6000
  // Api4 --- 5000
  URL = 'http://127.0.0.1:7000'
  
  getSeccion():Observable<any>{
    return this.http.get(this.URL+'/api/seccion/');
  }
  constructor(private http:HttpClient){}
}
