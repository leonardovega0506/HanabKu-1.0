import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-lista-propietario-admin',
  templateUrl: './lista-propietario-admin.component.html',
  styleUrls: ['./lista-propietario-admin.component.css']
})
export class ListaPropietarioAdminComponent implements OnInit{

  lista_propietario:any[]

  ngOnInit(): void {
   this.rellenarPropietarios();
  }

  constructor(private apiService:ApiService){}

  rellenarPropietarios() {
    this.apiService.listarPropietarios("0","10","idPropietario","asc").subscribe(
      (data:any)=>{
        this.lista_propietario=data.content;
        console.log(this.lista_propietario);

      }
    );
  }

}
