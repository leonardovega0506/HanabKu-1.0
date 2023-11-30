import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-producto-admin',
  templateUrl: './agregar-producto-admin.component.html',
  styleUrls: ['./agregar-producto-admin.component.css']
})
export class AgregarProductoAdminComponent implements OnInit{

  productoNuevo=new FormGroup({
    nombreProducto:new FormControl('',Validators.required),
    tipoProducto:new FormControl('',Validators.required),
    claveProducto: new FormControl(''),
    marcaProducto:new FormControl(''),
    costoProducto:new FormControl(0,[Validators.required,Validators.pattern(/^[0-9]+$/)]),
    precioClienteProducto:new FormControl(0,[Validators.required,Validators.pattern(/^[0-9]+$/)]),
    cantidadProducto:new FormControl(0,[Validators.required,Validators.pattern(/^[0-9]+$/)]),
    proveedorSeleccionado:new FormControl(''),
    descripcionProducto:new FormControl(''),
  });

  listaProveedors:any[];
  listaProductos:any[];
  listaLongitudProducto:any[]=[];



  ngOnInit(): void {
    this.rellenarProveedores();
    this.rellenarProductos();
  }
  rellenarProductos() {
   this.apiService.listarProductos("0","200","idProducto","asc").subscribe(
    (data:any)=>{
      this.listaProductos = data.content;
    }
   );
  }

  rellenarProveedores() {
    this.apiService.listarProveedor("0","100","idProveedor","asc").subscribe(
      (data:any)=>{
        this.listaProveedors = data.content;
        console.log(this.listaProveedors)
      }
    );
  }

  constructor(private apiService:ApiService){}

  agregarProducto(){
   if(this.productoNuevo.valid){

    this.listaProductos.forEach(
      (e)=>{
        if(e.tipoProducto == this.productoNuevo.value.tipoProducto){
          this.listaLongitudProducto.push(e);
        }
      }
    );
    let size:number = this.listaLongitudProducto.length+1;
    this.productoNuevo.value.claveProducto = this.productoNuevo.value.tipoProducto.substring(0,2)+size+"-"+this.productoNuevo.value.nombreProducto.substring(0,3)+"-"+this.productoNuevo.value.proveedorSeleccionado; 

    this.apiService.agregarProducto(this.productoNuevo.value,this.productoNuevo.value.proveedorSeleccionado).subscribe(
      (data)=>{
        console.log(data);
        this.productoNuevo.reset();
      },
      (error)=>{
        console.log(error);
      }
    );
   } 
   else{
    console.log(this.productoNuevo.valid);
    console.log(this.productoNuevo);
   }
  }

}
