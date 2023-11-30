import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-lista-cita-admin',
  templateUrl: './lista-cita-admin.component.html',
  styleUrls: ['./lista-cita-admin.component.css']
})
export class ListaCitaAdminComponent implements OnInit{

   days: number[][] = [];
   listaCita:any[];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.generateCalendar();
    this.rellenarCitas();
    this.getMeeting();
  }

  generateCalendar() {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    let currentDay = 1;

    for (let i = 0; i < 6; i++) {
      this.days[i] = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfWeek) {
          this.days[i][j] = null;
        } else if (currentDay <= totalDays) {
          this.days[i][j] = currentDay;
          currentDay++;
        } else {
          this.days[i][j] = null;
        }
      }
    }
  }

  async getMeeting(){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const dayFormat = today.getDate().toString().padStart(2, '0'); 
  
    const formattedDate = `${year}-${month}-${dayFormat}`;
    const response:any = await this.apiService.listarCitas(formattedDate);
  

    const meetings = response.data.filter((el) => el.fechaCita === formattedDate);
    return meetings || [];
  }

  rellenarCitas():any[]{
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const day = today.getDate().toString().padStart(2, '0'); 
  
    const formattedDate = `${year}-${month}-${day}`;
    this.apiService.listarCitas(formattedDate).subscribe(
      (data:any)=>{
        this.listaCita = data;
        this.listaCita = data.filter((el) => el.fechaCita === formattedDate);
        /*data.forEach(element => {
          this.getMeeting(element.fechaCita,element.horaCita);
          this.existsMeeting(element.fechaCita,element.horaCita);
        });*/
      }
    );
    return this.listaCita;
  }

}
