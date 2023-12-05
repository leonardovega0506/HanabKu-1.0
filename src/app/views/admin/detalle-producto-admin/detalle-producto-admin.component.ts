import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalle-producto-admin',
  templateUrl: './detalle-producto-admin.component.html',
  styleUrls: ['./detalle-producto-admin.component.css']
})
export class DetalleProductoAdminComponent implements OnInit{

  productoTraido?:any;
  idProducto:any;

  constructor(private aRoute:ActivatedRoute,private apiService:ApiService,private modal:NgbModal){}

  ngOnInit(): void {
    this.idProducto = this.aRoute.snapshot.params['id'];
    this.apiService.obtenerProductoById(this.idProducto).subscribe(
      (data)=>{
        console.log(data),
        this.productoTraido = data;
      }
    ); 
  }

  actualizarProducto(){
    this.apiService.actualizarProducto(this.productoTraido).subscribe(
      (data)=>{
        console.log(data);
        this.ngOnInit();
        this.modal.dismissAll();
      }
    );
  }

  eliminarProducto(){
    this.apiService.eliminarProducto(this.idProducto).subscribe(
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
