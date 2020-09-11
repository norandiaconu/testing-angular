import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PassengerFormComponent } from '../app/passenger-dashboard/passenger-form/passenger-form.component';

describe('PassengerFormComponent', () => {
  let component: PassengerFormComponent;
  let fixture: ComponentFixture<PassengerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ PassengerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
