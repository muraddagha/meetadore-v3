import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopSidebarComponent } from './main-top-sidebar.component';

describe('MainTopSidebarComponent', () => {
  let component: MainTopSidebarComponent;
  let fixture: ComponentFixture<MainTopSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTopSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
