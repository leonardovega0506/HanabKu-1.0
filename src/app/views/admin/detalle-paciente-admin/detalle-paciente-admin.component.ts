import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalle-paciente-admin',
  templateUrl: './detalle-paciente-admin.component.html',
  styleUrls: ['./detalle-paciente-admin.component.css']
})
export class DetallePacienteAdminComponent implements OnInit{

  pacienteTraido?:any;
  idPaciente:any;

  constructor(private aRoute:ActivatedRoute, private router:Router,private apiService:ApiService){}

  ngOnInit(): void {
    this.idPaciente = this.aRoute.snapshot.params['id'];
    this.apiService.obtenerPacienteById(this.idPaciente).subscribe(
      (data:any)=>{
        this.pacienteTraido = data;
        console.log(this.pacienteTraido);
      }
    );

  }

}
