import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskLampComponent } from './desk-lamp.component';

describe('DeskLampComponent', () => {
  let component: DeskLampComponent;
  let fixture: ComponentFixture<DeskLampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskLampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskLampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
