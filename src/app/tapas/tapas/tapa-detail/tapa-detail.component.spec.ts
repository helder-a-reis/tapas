import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapaDetailComponent } from './tapa-detail.component';

describe('TapaDetailComponent', () => {
  let component: TapaDetailComponent;
  let fixture: ComponentFixture<TapaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
