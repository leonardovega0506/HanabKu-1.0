import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-detalle-propietario-admin',
  templateUrl: './detalle-propietario-admin.component.html',
  styleUrls: ['./detalle-propietario-admin.component.css']
})
export class DetallePropietarioAdminComponent implements OnInit{

  propietarioTraido?:any;
  idPropietario:any;


  ngOnInit(): void {
    this.idPropietario = this.aRoute.snapshot.params['id'];
    this.apiService.obtenerPropietarioById(this.idPropietario).subscribe(
      (data)=>{
        console.log(data);
        this.propietarioTraido = data;
      }
    );
  }

  constructor(private aRoute:ActivatedRoute, private apiService:ApiService){}
}
