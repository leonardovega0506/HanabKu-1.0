import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPacienteUserComponent } from './lista-paciente-user.component';

describe('ListaPacienteUserComponent', () => {
  let component: ListaPacienteUserComponent;
  let fixture: ComponentFixture<ListaPacienteUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPacienteUserComponent]
    });
    fixture = TestBed.createComponent(ListaPacienteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
