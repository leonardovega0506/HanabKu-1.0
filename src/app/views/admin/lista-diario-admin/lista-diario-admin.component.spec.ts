import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDiarioAdminComponent } from './lista-diario-admin.component';

describe('ListaDiarioAdminComponent', () => {
  let component: ListaDiarioAdminComponent;
  let fixture: ComponentFixture<ListaDiarioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDiarioAdminComponent]
    });
    fixture = TestBed.createComponent(ListaDiarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
