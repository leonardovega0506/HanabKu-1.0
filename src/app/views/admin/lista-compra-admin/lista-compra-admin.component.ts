import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-lista-compra-admin',
  templateUrl: './lista-compra-admin.component.html',
  styleUrls: ['./lista-compra-admin.component.css']
})
export class ListaCompraAdminComponent implements OnInit{

  lista_compras:any[]=[];

  ngOnInit(): void {
   this.rellenarListaCompras();
  }

  constructor(private apiService:ApiService){}

  rellenarListaCompras(){
    this.apiService.listarCompras("0","10","idCompra","asc").subscribe(
      (data:any)=>{
        this.lista_compras = data.content;
        console.log(data);
    });
  }

}
