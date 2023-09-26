import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxFeat1Component } from './ngrx-feat1.component';

describe('NgrxFeat1Component', () => {
  let component: NgrxFeat1Component;
  let fixture: ComponentFixture<NgrxFeat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxFeat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxFeat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
