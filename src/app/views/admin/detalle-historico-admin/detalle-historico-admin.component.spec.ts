import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHistoricoAdminComponent } from './detalle-historico-admin.component';

describe('DetalleHistoricoAdminComponent', () => {
  let component: DetalleHistoricoAdminComponent;
  let fixture: ComponentFixture<DetalleHistoricoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleHistoricoAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleHistoricoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
