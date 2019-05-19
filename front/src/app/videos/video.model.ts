import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

export class VideoModel {
  private _safeUrl: SafeResourceUrl;
  public get safeUrl(): SafeResourceUrl {
    return this._safeUrl;
  }
  public set safeUrl(v: SafeResourceUrl) {
    this._safeUrl = v;
  }

  constructor(public videoName: string, public url: string, private sanitizer: DomSanitizer) {
    this._safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
