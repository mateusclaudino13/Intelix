import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaServidorComponent } from './area-servidor.component';

describe('AreaServidorComponent', () => {
  let component: AreaServidorComponent;
  let fixture: ComponentFixture<AreaServidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaServidorComponent]
    });
    fixture = TestBed.createComponent(AreaServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
