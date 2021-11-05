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
  // Api1 --- 8000 Imagen
  // Api2 --- 7000 Ramos
  // Api3 --- 9000 Descr
  // Api4 --- 10000 Numero de contacto 
  URL = 'http://127.0.0.1:8000'
  URL2 = 'http://127.0.0.1:9000'
  URL3 = 'http://127.0.0.1:10000'
  
  
  getImg():Observable<any>{
    return this.http.get(this.URL+'/api/imagen/');
  }


  getInfo():Observable<any>{
    return this.http.get(this.URL2+'/api/informacion/');
    
  }

  getNum():Observable<any>{
    return this.http.get(this.URL3+'/api/numero/');
    
  }
  constructor(private http:HttpClient){}
}
