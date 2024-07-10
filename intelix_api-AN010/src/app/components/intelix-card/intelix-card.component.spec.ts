import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelixCardComponent } from './intelix-card.component';

describe('IntelixCardComponent', () => {
  let component: IntelixCardComponent;
  let fixture: ComponentFixture<IntelixCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntelixCardComponent]
    });
    fixture = TestBed.createComponent(IntelixCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
