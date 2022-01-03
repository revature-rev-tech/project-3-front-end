import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePadsComponent } from './game-pads.component';

describe('GamePadsComponent', () => {
  let component: GamePadsComponent;
  let fixture: ComponentFixture<GamePadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
