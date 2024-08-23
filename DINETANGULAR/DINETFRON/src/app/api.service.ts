import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from './model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://localhost:7053/api/producto'
  constructor(private _http: HttpClient) { }

  public getAllProductos(nombre?: string, id?: string): Observable<IProducto[]> {
    nombre = nombre == undefined ? '' : nombre
    id = id == undefined ? '' : id
    return this._http.get<IProducto[]>(`${this.url}?nombre=${nombre}&id=${id}`)
  }
  public postNewProductos(prod: IProducto): Observable<boolean> {
    return this._http.post<boolean>(this.url, prod)
  }
}
