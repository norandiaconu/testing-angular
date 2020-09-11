import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBasicsComponent } from '../app/rxjs-basics/rxjs-basics.component';

describe('RxjsBasicsComponent', () => {
  let component: RxjsBasicsComponent;
  let fixture: ComponentFixture<RxjsBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
