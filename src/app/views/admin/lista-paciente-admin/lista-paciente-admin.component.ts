import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-lista-paciente-admin',
  templateUrl: './lista-paciente-admin.component.html',
  styleUrls: ['./lista-paciente-admin.component.css']
})
export class ListaPacienteAdminComponent implements OnInit{

  lista_paciente:any[];

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
   this.rellenarListaPaciente();
  }
  rellenarListaPaciente(){
    this.apiService.listarPaciente("0","10","idPaciente","asc").subscribe(
      (data:any)=>{
        this.lista_paciente = data.content;
        console.log(this.lista_paciente);
      }
    );
  }
}
