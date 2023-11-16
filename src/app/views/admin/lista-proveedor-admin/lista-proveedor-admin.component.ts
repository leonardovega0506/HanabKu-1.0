import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-lista-proveedor-admin',
  templateUrl: './lista-proveedor-admin.component.html',
  styleUrls: ['./lista-proveedor-admin.component.css']
})
export class ListaProveedorAdminComponent implements OnInit{

  lista_proveedor:any[];

  ngOnInit(): void {
    this.rellenarProveedor();
  }

  constructor(private apiService:ApiService){}

  rellenarProveedor() {
    this.apiService.listarProveedor("0","10","idProveedor","asc").subscribe(
      (data:any)=>{
        console.log(data);
        this.lista_proveedor = data.content;
      }
    );
  }

}
