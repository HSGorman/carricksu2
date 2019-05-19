import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VideoModel } from 'app/videos/video.model';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public path = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {
    this.path = environment.backendHost + '/api/Video';
  }
  getVideos(): Observable<VideoModel[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
        })
      };
    return this.httpClient.get<VideoModel[]>(this.path, httpOptions);
  }
}
