import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule,
  MatBadgeModule, MatButtonToggleModule,
  MatCardModule, MatCommonModule,
  MatDatepickerModule, MatExpansionModule,
  MatMenuModule, MatIconModule,
  MatListModule, MatSortModule,
  MatInputModule, MatTableModule,
  MatDialogModule, MatSidenavModule,
  MatToolbarModule, MatFormFieldModule,
  MatSliderModule
           } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule, MatButtonToggleModule,
    MatCardModule, MatCommonModule,
    MatDatepickerModule, MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatListModule, MatSortModule,
    MatInputModule, MatTableModule,
    MatDialogModule, MatSidenavModule,
    MatToolbarModule, MatFormFieldModule,
    MatSliderModule,
    FlexLayoutModule
    ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule, MatButtonToggleModule,
    MatCardModule, MatCommonModule,
    MatDatepickerModule, MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatListModule, MatSortModule,
    MatInputModule, MatTableModule,
    MatDialogModule, MatSidenavModule,
    MatToolbarModule, MatFormFieldModule,
    MatSliderModule,
    FlexLayoutModule
    ],
})
export class NgMaterialModule { }
