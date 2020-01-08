import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCarouselComponent } from './productos-carousel.component';

describe('ProductosCarouselComponent', () => {
  let component: ProductosCarouselComponent;
  let fixture: ComponentFixture<ProductosCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
