import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPropietarioAdminComponent } from './lista-propietario-admin.component';

describe('ListaPropietarioAdminComponent', () => {
  let component: ListaPropietarioAdminComponent;
  let fixture: ComponentFixture<ListaPropietarioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPropietarioAdminComponent]
    });
    fixture = TestBed.createComponent(ListaPropietarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
