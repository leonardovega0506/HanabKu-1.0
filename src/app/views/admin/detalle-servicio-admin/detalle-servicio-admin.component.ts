import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalle-servicio-admin',
  templateUrl: './detalle-servicio-admin.component.html',
  styleUrls: ['./detalle-servicio-admin.component.css']
})
export class DetalleServicioAdminComponent implements OnInit{

  idServicio:any;
  servicioTraido:any;

  ngOnInit(): void {
    this.idServicio = this.aRoute.snapshot.params['id'];
    this.apiService.obtenerServicioById(this.idServicio).subscribe(
      (data:any)=>{
        console.log(data);
        this.servicioTraido = data;
      }
    );
  }

  constructor(private aRoute:ActivatedRoute,private apiService:ApiService,private modal:NgbModal){}


  actualizarServicio(){
    this.apiService.actualizarServicio(this.servicioTraido).subscribe(
      (data)=>{
        console.log(data);
        this.ngOnInit();
        this.modal.dismissAll();
      }
    );
  }

  eliminarServicio(){
    this.apiService.eliminarServicio(this.idServicio).subscribe(
      (data)=>{
        console.log(data);
        this.ngOnInit();
    
      }
    );
  }

  openModal(editar){
    this.modal.open(editar);
  }
}
