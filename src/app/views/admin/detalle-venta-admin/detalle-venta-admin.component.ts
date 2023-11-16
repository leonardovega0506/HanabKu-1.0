import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalle-venta-admin',
  templateUrl: './detalle-venta-admin.component.html',
  styleUrls: ['./detalle-venta-admin.component.css']
})
export class DetalleVentaAdminComponent implements OnInit{
  idVenta:any;
  ventaTraida?:any;

  ngOnInit(): void {
    this.idVenta = this.aRoute.snapshot.params['id'];
    this.apiService.obtenerVentaById(this.idVenta).subscribe(
      (data)=>{
        console.log(data);
        this.ventaTraida = data;
      }
    );
  }

  constructor(private aRoute:ActivatedRoute,private apiService:ApiService){}

}
