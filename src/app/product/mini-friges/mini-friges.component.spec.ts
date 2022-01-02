import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniFrigesComponent } from './mini-friges.component';

describe('MiniFrigesComponent', () => {
  let component: MiniFrigesComponent;
  let fixture: ComponentFixture<MiniFrigesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniFrigesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniFrigesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
