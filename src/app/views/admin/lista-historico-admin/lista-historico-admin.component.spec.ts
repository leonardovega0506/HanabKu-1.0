import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHistoricoAdminComponent } from './lista-historico-admin.component';

describe('ListaHistoricoAdminComponent', () => {
  let component: ListaHistoricoAdminComponent;
  let fixture: ComponentFixture<ListaHistoricoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaHistoricoAdminComponent]
    });
    fixture = TestBed.createComponent(ListaHistoricoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
