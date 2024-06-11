import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CategoryService {
  url = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  
  getAll() {
    return this.httpClient.get(`${this.url}/categories/home`)
  }

  
}