
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://inclubtest.com:2053/api/token';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      tap(response => {
        if (response.access_Token) {
          localStorage.setItem('token', response.access_Token);
        }
      })
    );
  }
}
