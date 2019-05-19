import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdojoComponent } from './classdojo.component';

describe('ClassdojoComponent', () => {
  let component: ClassdojoComponent;
  let fixture: ComponentFixture<ClassdojoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassdojoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassdojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
