import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BibleVersesService } from 'services/bibleverses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bible-verse',
  templateUrl: './bible-verse.component.html',
  styleUrls: ['./bible-verse.component.scss']
})
export class BibleVerseComponent implements OnInit, AfterViewInit {

  drawingCanvas: CanvasRenderingContext2D;
  bibleVerseImage: HTMLElement;

  spin = false;
  wobble = false;
  shrink = false;
  verse = 'Psalm4610.jpg';
  path = '123';

  constructor(private service: BibleVersesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.verse = this.route.snapshot.params['verse'];
    setTimeout(() => {
      this.normalVerse();
    }, 4000);
    this.path = this.service.path;
  }

  ngAfterViewInit() {
  }

  normalVerse() {
    this.spin = false;
    this.wobble = false;
    this.shrink = false;
  }

  spinVerse() {
    this.normalVerse();
    this.spin = !this.spin;
  }

  wobbleVerse() {
    this.normalVerse();
    this.wobble = !this.wobble;
  }

  shrinkVerse() {
    this.normalVerse();
    this.shrink = !this.shrink;
  }
}
