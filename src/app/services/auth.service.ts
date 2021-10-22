import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlBase: string = 'http://161.35.140.236:9005/api'



  constructor(private httpClient: HttpClient) { }

  iniciarSession(payload: any): Observable<any> {
    const url = `${this.urlBase}/auth/login`;
    return this.httpClient.post(url, payload);
  }

  obtenerPelicula(page: number, auth_token: string): Observable<any> {
    console.log("auth_token", auth_token)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    // const headers = new HttpHeaders()
    //   .set('content-type', 'application/json')
    //   .set('Access-Control-Allow-Origin', '*');
    const url = `${this.urlBase}/movies/now_playing?page=${page}`;
    return this.httpClient.get(url, { headers: headers });
  }


}
