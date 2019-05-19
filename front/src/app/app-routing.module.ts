import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { BibleVersesComponent } from './bible-verses/bible-verses.component';
import { BibleVerseComponent } from './bible-verse/bible-verse.component';
import { VideosComponent } from './videos/videos.component';
import { ParentinfoComponent } from './parentinfo/parentinfo.component';
import { ClassdojoComponent } from './classdojo/classdojo.component';
import { WondersurfComponent } from './wondersurf/wondersurf.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'bibleVerse/:verse', component: BibleVerseComponent },
  { path: 'bibleVerses', component: BibleVersesComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'parentinfo', component: ParentinfoComponent},
  { path: 'wondersurf', component: WondersurfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
