import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptBasicsComponent } from '../app/typescript-basics/typescript-basics.component';

describe('TypescriptBasicsComponent', () => {
  let component: TypescriptBasicsComponent;
  let fixture: ComponentFixture<TypescriptBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
