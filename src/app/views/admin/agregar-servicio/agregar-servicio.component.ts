import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.css']
})
export class AgregarServicioComponent {
  servicioNuevo=new FormGroup({
    nombreServicio:new FormControl('',Validators.required),
    tipoServicio:new FormControl('',Validators.required),
    claveServicio: new FormControl(''),
    costoServicio:new FormControl(''),
    duracion:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]+$/)]),
    descripcionServicio:new FormControl('')
  });

  listaProveedors:any[];
  listaProductos:any[];
  listaLongitudServicios:any[]=[];



  ngOnInit(): void {
    this.rellenarServicios();
  }
  rellenarServicios() {
   this.apiService.listarServicio("0","200","idServicio","asc").subscribe(
    (data:any)=>{
      this.listaProductos = data.content;
    }
   );
  }



  constructor(private apiService:ApiService){}

  agregarProducto(){
   if(this.servicioNuevo.valid){

    this.listaProductos.forEach(
      (e)=>{
        if(e.tipoProducto == this.servicioNuevo.value.tipoServicio){
          this.listaLongitudServicios.push(e);
        }
      }
    );
    let size:number = this.listaLongitudServicios.length+1;
    this.servicioNuevo.value.claveServicio = this.servicioNuevo.value.tipoServicio.substring(0,2)+size+"-"+this.servicioNuevo.value.nombreServicio.substring(0,3); 
    this.apiService.agregarServicio(this.servicioNuevo.value).subscribe(
      (data)=>{
        console.log(data);
        this.servicioNuevo.reset();
      },
      (error)=>{
        console.log(error);
      }
    );
   } 
   else{
    console.log(this.servicioNuevo.valid);
    console.log(this.servicioNuevo);
   }
  }
}
