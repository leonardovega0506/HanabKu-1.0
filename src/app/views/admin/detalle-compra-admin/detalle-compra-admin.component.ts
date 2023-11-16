import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalle-compra-admin',
  templateUrl: './detalle-compra-admin.component.html',
  styleUrls: ['./detalle-compra-admin.component.css']
})
export class DetalleCompraAdminComponent implements OnInit{
  ordenTraida?:any;
  idOrden:any;

  constructor(private aRoute:ActivatedRoute,private router:Router,private apiService:ApiService){}

  ngOnInit(): void {
    this.idOrden = this.aRoute.snapshot.params['id'];
    this.apiService.obtenerComprasByIdCompra(this.idOrden).subscribe(
      (data:any)=>{
        this.ordenTraida = data;
        console.log(this.ordenTraida);
      }
    );
  }


}
