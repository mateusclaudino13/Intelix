import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelappComponent } from './intelapp.component';

describe('IntelappComponent', () => {
  let component: IntelappComponent;
  let fixture: ComponentFixture<IntelappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntelappComponent]
    });
    fixture = TestBed.createComponent(IntelappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
