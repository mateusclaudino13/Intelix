import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsArtigosComponent } from './cards-artigos.component';

describe('CardsArtigosComponent', () => {
  let component: CardsArtigosComponent;
  let fixture: ComponentFixture<CardsArtigosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsArtigosComponent]
    });
    fixture = TestBed.createComponent(CardsArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
