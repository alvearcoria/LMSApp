import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VimeoService {
  private apiUrl = 'https://api.vimeo.com';
  private accessToken = '8bc16aa3721a9409e46bb66a02ef51ae'; // Reemplaza con tu token de acceso

  constructor(private http: HttpClient) { }

  getVideos(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });

    return this.http.get(`${this.apiUrl}/me/videos`, { headers });
  }
}

