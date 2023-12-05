import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalle-proveedor-admin',
  templateUrl: './detalle-proveedor-admin.component.html',
  styleUrls: ['./detalle-proveedor-admin.component.css']
})
export class DetalleProveedorAdminComponent implements OnInit {

  proveedorTraido?: any;
  idProveedor: any;
  lista_producto:any[]=[];
  proveedor={
    idProveedor:'',
    nombreProveedor:'',
    tipoProveedor:'',
    telefonoProveedor:'',
    emailProveedor:''
  };

  ngOnInit(): void {
    this.idProveedor = this.aRoute.snapshot.params['id'];
    this.apiService.obtenerProveedorById(this.idProveedor).subscribe(
      (data)=>{
        console.log(data);
        this.proveedorTraido = data;
      }
    );
    this.rellenarProductosByProveedor();
  }

  constructor(private aRoute:ActivatedRoute, private apiService:ApiService, private modal:NgbModal,private router:Router){}

  rellenarProductosByProveedor(){
    this.apiService.listaProductosByProveedorId("0","10","idProducto","asc",this.idProveedor).subscribe(
      (data:any)=>{
        console.log(data);
        this.lista_producto = data.content
      }
    );
  }

  openModal(editar){
    this.modal.open(editar);
  }

  actualizarProveedor(){

    console.log(this.proveedorTraido);

    this.apiService.actualizarProveedor(this.proveedorTraido).subscribe(
      (data)=>{
        this.ngOnInit();
        this.modal.dismissAll();
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  eliminarProveedor(){
    this.apiService.eliminarProveedor(this.idProveedor).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate['/admin/proveedor'];
      }
    );
  }
}
