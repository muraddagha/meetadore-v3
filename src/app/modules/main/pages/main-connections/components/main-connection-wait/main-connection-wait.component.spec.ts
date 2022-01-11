import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConnectionWaitComponent } from './main-connection-wait.component';

describe('MainConnectionWaitComponent', () => {
  let component: MainConnectionWaitComponent;
  let fixture: ComponentFixture<MainConnectionWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainConnectionWaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConnectionWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
