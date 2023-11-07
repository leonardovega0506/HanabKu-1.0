import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductoUserComponent } from './lista-producto-user.component';

describe('ListaProductoUserComponent', () => {
  let component: ListaProductoUserComponent;
  let fixture: ComponentFixture<ListaProductoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProductoUserComponent]
    });
    fixture = TestBed.createComponent(ListaProductoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
