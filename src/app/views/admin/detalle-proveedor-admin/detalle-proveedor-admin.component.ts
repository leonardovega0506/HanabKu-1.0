import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalle-proveedor-admin',
  templateUrl: './detalle-proveedor-admin.component.html',
  styleUrls: ['./detalle-proveedor-admin.component.css']
})
export class DetalleProveedorAdminComponent implements OnInit {

  proveedorTraido?: any;
  idProveedor: any;

  ngOnInit(): void {
    this.idProveedor = this.aRoute.snapshot.params['id'];
    this.apiService.obtenerProveedorById(this.idProveedor).subscribe(
      (data)=>{
        console.log(data);
        this.proveedorTraido = data;
      }
    );
  }

  constructor(private aRoute:ActivatedRoute, private apiService:ApiService){}

}
