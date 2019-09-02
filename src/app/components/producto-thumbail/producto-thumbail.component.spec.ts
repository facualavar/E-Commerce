import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoThumbailComponent } from './producto-thumbail.component';

describe('ProductoThumbailComponent', () => {
  let component: ProductoThumbailComponent;
  let fixture: ComponentFixture<ProductoThumbailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoThumbailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoThumbailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
