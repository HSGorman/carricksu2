import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BibleVersesService {
  public path = 'http://localhost:5000/api/Verses';

  constructor(private httpClient: HttpClient) {
    this.path = environment.backendHost + '/api/Verses';
  }
  getVerses() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
        })
      };
    return this.httpClient.get<string[]>(this.path, httpOptions);
  }
}
