import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzabalyComponent } from './szabaly.component';

describe('SzabalyComponent', () => {
  let component: SzabalyComponent;
  let fixture: ComponentFixture<SzabalyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SzabalyComponent]
    });
    fixture = TestBed.createComponent(SzabalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
