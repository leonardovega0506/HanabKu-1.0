import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePacienteUserComponent } from './detalle-paciente-user.component';

describe('DetallePacienteUserComponent', () => {
  let component: DetallePacienteUserComponent;
  let fixture: ComponentFixture<DetallePacienteUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePacienteUserComponent]
    });
    fixture = TestBed.createComponent(DetallePacienteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
