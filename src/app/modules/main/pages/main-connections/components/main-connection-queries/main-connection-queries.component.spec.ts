import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConnectionQueriesComponent } from './main-connection-queries.component';

describe('MainConnectionQueriesComponent', () => {
  let component: MainConnectionQueriesComponent;
  let fixture: ComponentFixture<MainConnectionQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainConnectionQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConnectionQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
