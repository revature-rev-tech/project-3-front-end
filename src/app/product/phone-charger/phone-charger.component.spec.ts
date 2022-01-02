import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneChargerComponent } from './phone-charger.component';

describe('PhoneChargerComponent', () => {
  let component: PhoneChargerComponent;
  let fixture: ComponentFixture<PhoneChargerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneChargerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneChargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
