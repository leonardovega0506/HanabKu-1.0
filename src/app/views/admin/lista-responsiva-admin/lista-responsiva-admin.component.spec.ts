import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResponsivaAdminComponent } from './lista-responsiva-admin.component';

describe('ListaResponsivaAdminComponent', () => {
  let component: ListaResponsivaAdminComponent;
  let fixture: ComponentFixture<ListaResponsivaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaResponsivaAdminComponent]
    });
    fixture = TestBed.createComponent(ListaResponsivaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
