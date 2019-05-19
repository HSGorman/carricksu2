import { Component } from '@angular/core';
import { NgMaterialModule } from './ngModule';
import { MatToolbar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  title = 'Carrick SU';
  home() {
    this.router.navigate(['/']);
  }
  bible() {
    this.router.navigate(['/bibleVerses']);
  }
  video() {
    this.router.navigate(['/videos']);
  }
  quiz() {
    this.router.navigate(['/quiz']);
  }
  parentinfo() {
    this.router.navigate(['/parentinfo']);
  }
  classdojo() {
    window.location.href='https://www.classdojo.com';
  }
  wondersurf() {
    window.location.href='https://www.wondersurf.com';
  }
}
