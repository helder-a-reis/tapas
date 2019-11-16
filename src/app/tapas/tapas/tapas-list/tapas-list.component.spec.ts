import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapasListComponent } from './tapas-list.component';

describe('TapasListComponent', () => {
  let component: TapasListComponent;
  let fixture: ComponentFixture<TapasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
