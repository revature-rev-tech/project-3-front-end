import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPurifiersComponent } from './air-purifiers.component';

describe('AirPurifiersComponent', () => {
  let component: AirPurifiersComponent;
  let fixture: ComponentFixture<AirPurifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirPurifiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPurifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
