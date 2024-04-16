import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisztalComponent } from './regisztal.component';

describe('RegisztalComponent', () => {
  let component: RegisztalComponent;
  let fixture: ComponentFixture<RegisztalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisztalComponent]
    });
    fixture = TestBed.createComponent(RegisztalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
