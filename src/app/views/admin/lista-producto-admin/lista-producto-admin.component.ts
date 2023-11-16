import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-lista-producto-admin',
  templateUrl: './lista-producto-admin.component.html',
  styleUrls: ['./lista-producto-admin.component.css']
})
export class ListaProductoAdminComponent implements OnInit{

  lista_producto:any[];

  ngOnInit(): void {
    this.rellenarProductos();
  }

  constructor(private apiService:ApiService){}

  rellenarProductos() {
    this.apiService.listarProductos("0","10","idProducto","asc").subscribe(
      (data:any)=>{
        console.log(data);
        this.lista_producto = data.content;
      }
    );
  }

}
