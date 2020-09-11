import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProComponent } from '../app/angular-pro/angular-pro.component';

describe('AngularProComponent', () => {
  let component: AngularProComponent;
  let fixture: ComponentFixture<AngularProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
