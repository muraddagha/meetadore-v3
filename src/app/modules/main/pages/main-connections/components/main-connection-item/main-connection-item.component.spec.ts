import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConnectionItemComponent } from './main-connection-item.component';

describe('MainConnectionItemComponent', () => {
  let component: MainConnectionItemComponent;
  let fixture: ComponentFixture<MainConnectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainConnectionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConnectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
