import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalle-compra-admin',
  templateUrl: './detalle-compra-admin.component.html',
  styleUrls: ['./detalle-compra-admin.component.css']
})
export class DetalleCompraAdminComponent implements OnInit{
  ordenTraida?:any;
  idOrden:any;

  constructor(private aRoute:ActivatedRoute,private router:Router,private apiService:ApiService,private modal:NgbModal){}

  ngOnInit(): void {
    this.idOrden = this.aRoute.snapshot.params['id'];
    this.apiService.obtenerComprasByIdCompra(this.idOrden).subscribe(
      (data:any)=>{
        this.ordenTraida = data;
        console.log(this.ordenTraida);
      }
    );
  }

  
  productoTraido?:any;
  idProducto:any;




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
