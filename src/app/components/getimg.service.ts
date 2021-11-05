import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetimgService {

  constructor(private http:HttpClient) { }

  URL = 'http://127.0.0.1:8000'

  
  
  getImg():Observable<any>{
    return this.http.get(this.URL+'/api/imagen/');
  }
}
