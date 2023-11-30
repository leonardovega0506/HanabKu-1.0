import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent {
  showWelcomeMessage: boolean = true;
  sidebarActive: boolean = false;
  welcomeMessage = '';
  isHomePage: boolean = false;
  usuarioParseado:any;
  usuario:any;

  //Constructor
  /*constructor(, private router: Router) { 
    this.setWelcomeMessage();
    this.usuarioParseado=JSON.parse(localStorage.getItem('user'));
    this.usuario = this.usuarioParseado.nombre;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkIfHomePage(event.urlAfterRedirects);
      }
    });

  }*/

  //Metodo para cerrar sesion
  /*logout() {
    Swal.fire({
      icon: 'question',
      title: "Salir",
      text: "¿Desea Salir de la aplicacion?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Salir',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
    this.login.logout();
    this.router.navigate(["/"]);
  }
  });
}*/

  //Establezco el mensaje de bienvenida
  setWelcomeMessage() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      this.welcomeMessage = '¡Buenos días!';
    } else if (currentHour >= 12 && currentHour < 18) {
      this.welcomeMessage = '¡Buenas tardes!';
    } else {
      this.welcomeMessage = '¡Buenas noches!';
    }
  }

  checkIfHomePage(currentUrl:string) {
    this.isHomePage = currentUrl.endsWith('/admin'); 
  }
}
