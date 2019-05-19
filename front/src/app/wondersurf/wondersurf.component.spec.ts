import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WondersurfComponent } from './wondersurf.component';

describe('WondersurfComponent', () => {
  let component: WondersurfComponent;
  let fixture: ComponentFixture<WondersurfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WondersurfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WondersurfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
