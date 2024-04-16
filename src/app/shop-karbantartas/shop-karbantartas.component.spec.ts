import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopKarbantartasComponent } from './shop-karbantartas.component';

describe('ShopKarbantartasComponent', () => {
  let component: ShopKarbantartasComponent;
  let fixture: ComponentFixture<ShopKarbantartasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopKarbantartasComponent]
    });
    fixture = TestBed.createComponent(ShopKarbantartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
