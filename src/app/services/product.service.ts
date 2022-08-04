import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  AddProduct(value: Partial<{ name: string | null; quantity: string | null; description: string | null; image: string | null; color: string | null; size: string | null; categories: string | null; price: string | null; }>) {
    throw new Error('Method not implemented.');
  }

  private apiLink:string = "http://localhost:4242/api/product/"
  constructor(private _http:HttpClient) { }
  add(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}add`, data)
  }
  myProducts(data:any):Observable<any>{
    return this._http.get(`${this.apiLink}myProducts`, data)
  }
  getSingle(data:any):Observable<any>{
    return this._http.get(`${this.apiLink}getSingle/:id`, data)
  }
  delProduct(data:any):Observable<any>{
    return this._http.delete(`${this.apiLink}delProduct`, data)
  }
  editProduct(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}editProduct`, data)
  }
}



