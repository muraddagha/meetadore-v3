import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConnectionActiveComponent } from './main-connection-active.component';

describe('MainConnectionActiveComponent', () => {
  let component: MainConnectionActiveComponent;
  let fixture: ComponentFixture<MainConnectionActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainConnectionActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConnectionActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
