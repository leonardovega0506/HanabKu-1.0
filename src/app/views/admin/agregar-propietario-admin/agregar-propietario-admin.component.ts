import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-propietario-admin',
  templateUrl: './agregar-propietario-admin.component.html',
  styleUrls: ['./agregar-propietario-admin.component.css']
})
export class AgregarPropietarioAdminComponent {
  
  propietarioNuevo=new FormGroup({
    nombrePropietario:new FormControl('',[Validators.required]),
    telefono1Propietario:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12),Validators.pattern(/^[0-9]+$/)]),
    telefono2Propietario:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12),Validators.pattern(/^[0-9]+$/)]),
    emailPropietario:new FormControl('',[Validators.minLength(5),Validators.email]),
    domicilioPropietario:new FormControl(''),
    observacionesPropietario:new FormControl('')
  });


  constructor(private apiService:ApiService){}

  agregarPropietario(){
    if(this.propietarioNuevo.valid){
      this.apiService.agregarPropietario(this.propietarioNuevo.value).subscribe(
        (data)=>{
          console.log(data);
          this.propietarioNuevo.reset();
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
