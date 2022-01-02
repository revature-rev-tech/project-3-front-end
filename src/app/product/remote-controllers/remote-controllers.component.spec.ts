import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteControllersComponent } from './remote-controllers.component';

describe('RemoteControllersComponent', () => {
  let component: RemoteControllersComponent;
  let fixture: ComponentFixture<RemoteControllersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteControllersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
