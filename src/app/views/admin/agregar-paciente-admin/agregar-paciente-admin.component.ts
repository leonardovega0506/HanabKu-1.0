import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-paciente-admin',
  templateUrl: './agregar-paciente-admin.component.html',
  styleUrls: ['./agregar-paciente-admin.component.css']
})
export class AgregarPacienteAdminComponent implements OnInit{

  listaPropietario:any[]=[];
    
  pacienteNuevo=new FormGroup({
    nombrePaciente:new FormControl('',[Validators.required]),
    tipoMascotaPaciente:new FormControl('',Validators.required),
    razaPaciente:new FormControl('',Validators.required),
    colorPaciente:new FormControl(''),
    sexoPaciente:new FormControl(''),
    edadPaciente:new FormControl(''),
    propietarioSeleccionado:new FormControl(''),
  });


  constructor(private apiService:ApiService){}
  ngOnInit(): void {
    this.rellenarPropietarios();
  }

  agregarPaciente(){
    if(this.pacienteNuevo.valid){
      this.apiService.agregarPaciente(this.pacienteNuevo.value,this.pacienteNuevo.value.propietarioSeleccionado).subscribe(
        (data)=>{
          console.log(data);
          this.pacienteNuevo.reset();
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
  rellenarPropietarios() {
    this.apiService.listarPropietarios("0","100","idPropietario","asc").subscribe(
      (data:any)=>{
        this.listaPropietario = data.content;
        console.log(this.listaPropietario)
      }
    );
  }
}
