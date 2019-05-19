import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ngModule';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { VideosComponent } from './videos/videos.component';
import { BibleVersesComponent } from './bible-verses/bible-verses.component';
import { ParentinfoComponent } from './parentinfo/parentinfo.component';
import { ClassdojoComponent } from './classdojo/classdojo.component';
import { BibleVerseComponent } from './bible-verse/bible-verse.component';
import { WondersurfComponent } from './wondersurf/wondersurf.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    VideosComponent,
    BibleVersesComponent,
    ParentinfoComponent,
    ClassdojoComponent,
    BibleVerseComponent,
    WondersurfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
