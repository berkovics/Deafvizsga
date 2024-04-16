import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelepesComponent } from './belepes.component';

describe('BelepesComponent', () => {
  let component: BelepesComponent;
  let fixture: ComponentFixture<BelepesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BelepesComponent]
    });
    fixture = TestBed.createComponent(BelepesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
