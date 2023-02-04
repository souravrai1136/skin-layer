import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'data/laptop.json';
  constructor(private http: HttpClient) {}

  public getLaptop() {
    return this.http.get<any>(this.url);
  }
}
