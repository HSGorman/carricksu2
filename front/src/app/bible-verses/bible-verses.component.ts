import { Component, OnInit } from '@angular/core';
import { BibleVersesService } from 'services/bibleverses.service';

@Component({
  selector: 'app-bible-verses',
  templateUrl: './bible-verses.component.html',
  styleUrls: ['./bible-verses.component.scss']
})
export class BibleVersesComponent implements OnInit {

  public verses: string[] = [];
  public imagePath = '';
  constructor(private service: BibleVersesService) { }

  ngOnInit() {
    this.service.getVerses()
    .subscribe(
      (data) => {
        this.verses = data;
      },
      error => {
        const err = error;
      }
    );
    this.imagePath = this.service.path;
  }

}
