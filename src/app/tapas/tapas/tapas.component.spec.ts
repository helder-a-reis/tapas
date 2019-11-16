import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapasComponent } from './tapas.component';

describe('TapasComponent', () => {
  let component: TapasComponent;
  let fixture: ComponentFixture<TapasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
