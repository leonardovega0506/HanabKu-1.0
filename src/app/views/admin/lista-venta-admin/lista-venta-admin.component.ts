import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-lista-venta-admin',
  templateUrl: './lista-venta-admin.component.html',
  styleUrls: ['./lista-venta-admin.component.css']
})
export class ListaVentaAdminComponent implements OnInit{

  lista_ventas:any[];

  ngOnInit(): void {
   this.rellenarVentas();
  }

  constructor(private apiService:ApiService){}

  rellenarVentas() {
    this.apiService.listarVentas("0","10","idVenta","asc").subscribe(
      (data:any)=>{
        console.log(data);
        this.lista_ventas = data.content;
      }
    );
  }

}
