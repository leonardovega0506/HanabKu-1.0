import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-lista-servicio-admin',
  templateUrl: './lista-servicio-admin.component.html',
  styleUrls: ['./lista-servicio-admin.component.css']
})
export class ListaServicioAdminComponent implements OnInit{

  lista_servicio:any[];

  ngOnInit(): void {
    this.rellenarServicio();
  }

  constructor(private apiService:ApiService){}

  rellenarServicio() {
   this.apiService.listarServicio("0","10","idServicio","asc").subscribe(
    (data:any)=>{
      this.lista_servicio = data.content;
      console.log(this.lista_servicio);
    }
   );
  }

}
