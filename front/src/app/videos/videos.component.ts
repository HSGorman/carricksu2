import { Component, OnInit, SecurityContext } from '@angular/core';
import { VideoService } from '../../services/video-service';
import { VideoModel } from './video.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.sass']
})
export class VideosComponent implements OnInit {
  public videos: VideoModel[] = [];

  constructor(private service: VideoService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.service.getVideos()
    .subscribe(
      (data) => {
        data.map(a => {
          a.safeUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(a.url);
        });
        this.videos = data;
      },
      error => {
        const err = error;
      }
    );
  }

}
