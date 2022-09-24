import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ObtenerApiService {

  constructor(public _http: HttpClient) { }

  obtenerData<T> (url : string){
    url = 'https://jsonplaceholder.typicode.com/posts';
    return this._http.get<T[]>(url);
  }
}
