import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  public API_ADDRESS = "https://open.oapi.vn/location/";

  constructor(private http: HttpClient) { }

  getCity(page: number = 0, size: number = 63, query: string = ""): Observable<any> {
    const url = `${this.API_ADDRESS}provinces?page=${page}&size=${size}&query=${query}`;
    return this.http.get<any>(url);
  }

  getDistrict(provinceId: number, page: number = 0, size: number = 63, query: string = ""): Observable<any> {
    const url = `${this.API_ADDRESS}districts?page=${page}&size=${size}&provinceId=${provinceId}&query=${query}`;
    return this.http.get<any>(url);
  }

  getWards(districtId: number, page: number = 0, size: number = 63, query: string = ""): Observable<any> {
    const url = `${this.API_ADDRESS}wards?page=${page}&size=${size}&districtId=${districtId}&query=${query}`;
    return this.http.get<any>(url);
  }
}
