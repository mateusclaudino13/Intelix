import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDepoimentosComponent } from './cards-depoimentos.component';

describe('CardsDepoimentosComponent', () => {
  let component: CardsDepoimentosComponent;
  let fixture: ComponentFixture<CardsDepoimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsDepoimentosComponent]
    });
    fixture = TestBed.createComponent(CardsDepoimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
