import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {
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
  URL = 'http://127.0.0.1:8000'
  URL2 = 'http://127.0.0.1:9000'
  
  
  getImg():Observable<any>{
    return this.http.get(this.URL+'/api/imagen/');
  }


  getInfo():Observable<any>{
    return this.http.get(this.URL2+'/api/informacion/');
    
  }
  constructor(private http:HttpClient){}
}
