import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPacienteAdminComponent } from './lista-paciente-admin.component';

describe('ListaPacienteAdminComponent', () => {
  let component: ListaPacienteAdminComponent;
  let fixture: ComponentFixture<ListaPacienteAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPacienteAdminComponent]
    });
    fixture = TestBed.createComponent(ListaPacienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
