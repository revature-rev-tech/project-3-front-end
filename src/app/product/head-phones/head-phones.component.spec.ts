import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPhonesComponent } from './head-phones.component';

describe('HeadPhonesComponent', () => {
  let component: HeadPhonesComponent;
  let fixture: ComponentFixture<HeadPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadPhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
