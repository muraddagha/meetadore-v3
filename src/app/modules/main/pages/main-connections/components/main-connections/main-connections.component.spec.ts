import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConnectionsComponent } from './main-connections.component';

describe('MainConnectionsComponent', () => {
  let component: MainConnectionsComponent;
  let fixture: ComponentFixture<MainConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainConnectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
