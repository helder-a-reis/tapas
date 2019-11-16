import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapasMapComponent } from './tapas-map.component';

describe('TapasMapComponent', () => {
  let component: TapasMapComponent;
  let fixture: ComponentFixture<TapasMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapasMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapasMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
