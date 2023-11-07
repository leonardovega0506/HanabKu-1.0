import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCitaAdminComponent } from './lista-cita-admin.component';

describe('ListaCitaAdminComponent', () => {
  let component: ListaCitaAdminComponent;
  let fixture: ComponentFixture<ListaCitaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCitaAdminComponent]
    });
    fixture = TestBed.createComponent(ListaCitaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
