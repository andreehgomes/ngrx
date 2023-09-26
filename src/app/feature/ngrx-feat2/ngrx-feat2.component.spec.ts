import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxFeat2Component } from './ngrx-feat2.component';

describe('NgrxFeat2Component', () => {
  let component: NgrxFeat2Component;
  let fixture: ComponentFixture<NgrxFeat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxFeat2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxFeat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
