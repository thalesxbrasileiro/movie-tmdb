import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegresService {

  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  createUser(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, { email, password });
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }
  
}
