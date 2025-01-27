import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const baseUrl = 'https://localhost:7282/api/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}/getproducts`);
  }

  get(id: any): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/getproducts/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/addproduct`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  findByTitle(title: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?title=${title}`);
  }
}
