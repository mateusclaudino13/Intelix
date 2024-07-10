import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelixComponent } from './intelix.component';

describe('IntelixComponent', () => {
  let component: IntelixComponent;
  let fixture: ComponentFixture<IntelixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntelixComponent]
    });
    fixture = TestBed.createComponent(IntelixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
