import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalle-propietario-admin',
  templateUrl: './detalle-propietario-admin.component.html',
  styleUrls: ['./detalle-propietario-admin.component.css']
})
export class DetallePropietarioAdminComponent implements OnInit{

  propietarioTraido?:any;
  idPropietario:any;
  lista_paciente:any[];


  ngOnInit(): void {
    this.idPropietario = this.aRoute.snapshot.params['id'];
    this.apiService.obtenerPropietarioById(this.idPropietario).subscribe(
      (data)=>{
        console.log(data);
        this.propietarioTraido = data;
      }
    );
    this.rellenarPacientesByPropietario();
  }




  constructor(private aRoute:ActivatedRoute, private apiService:ApiService, private modal:NgbModal,private router:Router){}

  rellenarPacientesByPropietario(){
    this.apiService.listarPacienteByPropietario(this.idPropietario,"0","10","idPaciente","asc").subscribe(
      (data:any)=>{
        console.log(data);
        this.lista_paciente = data.content
      }
    );
  }

  openModal(editar){
    this.modal.open(editar);
  }

  actualizarPropietario(){

    console.log(this.propietarioTraido);

    this.apiService.actualizarProveedor(this.propietarioTraido).subscribe(
      (data)=>{
        this.ngOnInit();
        this.modal.dismissAll();
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  eliminarPropietario(){
    this.apiService.eliminarProveedor(this.idPropietario).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate['/admin/proveedor'];
      }
    );
  }
}
