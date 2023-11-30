import { Component } from '@angular/core';
import { FormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-proveedor-admin',
  templateUrl: './agregar-proveedor-admin.component.html',
  styleUrls: ['./agregar-proveedor-admin.component.css']
})
export class AgregarProveedorAdminComponent {

  proveedorNuevo=new FormGroup({
    nombreProveedor:new FormControl('',[Validators.required,Validators.minLength(4)]),
    tipoProveedor:new FormControl('',Validators.required),
    telefonoProveedor: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12),Validators.pattern(/^[0-9]+$/)]),
    emailProveedor:new FormControl('',[Validators.minLength(5),Validators.email])
  });

  mensajesError = {
    nombreProveedor: [
      { tipo: 'required', mensaje: 'El nombre es obligatorio' },
      { tipo: 'minLength', mensaje: 'El nombre debe tener al menos 4 caracteres' }
    ],
    tipoProveedor:[
      {tipo:'required',mensaje:'El tipo es obligatorio'}
    ],
    telefonoProveedor:[
      {tipo:'required', mensaje:'El telefono es requerido'},
      {tipo:'minlLength',mensaje:'El minimo permitido es de 8 caracteres'},
      {tipo:'maxLength',mensaje:'El maximo permitido es de 12 caracteres'}],
    emailProveedor:[
      {tipo:'minlLength',mensaje:'El minimo para el email es de 5'},
      {tipo:'email',mensaje:'No tiene el formato de correo electronico'}
    ]
  }

  constructor(private apiService:ApiService){}

  agregarProveedor(){
    if(this.proveedorNuevo.valid){
      this.apiService.agregaProveedor(this.proveedorNuevo.value).subscribe(
        (data)=>{
          console.log(data);
          this.proveedorNuevo.reset();
        },
        (error)=>{
          console.log(error);
        }
      );
    }
    else{
      Swal.fire({
        title:'Datos invalidos',
        text:'Por favor ingresa correctamente los datos proporcionados',
        timer:2000,
        icon:'error'
      })
    }

  }




}
