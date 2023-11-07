import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompraAdminComponent } from './lista-compra-admin.component';

describe('ListaCompraAdminComponent', () => {
  let component: ListaCompraAdminComponent;
  let fixture: ComponentFixture<ListaCompraAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCompraAdminComponent]
    });
    fixture = TestBed.createComponent(ListaCompraAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
