import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../util/Helper';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseApi: string = `${baseUrl}`
  constructor(private http: HttpClient) { }


  /* **Compras** */
  //Lista Compras
  public listarCompras(pagina, pageSize, orderBy, sort) {
    return this.http.get(this.baseApi + "/compras?numPage=" + pagina + "&numSize=" + pageSize + "&orderBy=" + orderBy + "&sortDir=" + sort);
  }

  //Obtener la compra por su id
  public obtenerComprasByIdCompra(idCompra) {
    return this.http.get(this.baseApi + "/compras/" + idCompra);
  }


  /* ++Pacientes++ */
  public listarPaciente(pageNumber, pageSize, orderBy, sortDir) {
    return this.http.get(this.baseApi + "/paciente?numPage=" + pageNumber + "&numSize=" + pageSize + "&orderBy=" + orderBy + "&sortDir=" + sortDir);
  }

  public obtenerPacienteById(idPaciente) {
    return this.http.get(this.baseApi + "/paciente/" + idPaciente);
  }


  /* ++Productos++ */
  public listarProductos(pageNumber, pageSize, orderBy, sortDir) {
    return this.http.get(this.baseApi+"/producto?numPage="+pageNumber+"&numSize="+pageSize+"&orderBy="+orderBy+"&sortDir="+sortDir);
  }

  public obtenerProductoById(idProducto){
    return this.http.get(this.baseApi+"/producto/"+idProducto);
  }

  /* ++Propietarios++ */
  public listarPropietarios(pageNumber, pageSize, orderBy,sortDir){
    return this.http.get(this.baseApi+"/propietario?numPage="+pageNumber+"&numSize="+pageSize+"&orderBy="+orderBy+"&sortDir="+sortDir);
  }

  public obtenerPropietarioById(idPropietario){
    return this.http.get(this.baseApi+"/propietario/"+idPropietario);
  }


  /* ++Proveedor++ */
  public listarProveedor(pageNumber,pageSize,orderBy,sortDir){
    return this.http.get(this.baseApi+"/proveedor?numPage="+pageNumber+"&numSize="+pageSize+"&orderBy="+orderBy+"&sortDir="+sortDir);
  }

  public obtenerProveedorById(idProveedor){
    return this.http.get(this.baseApi+"/proveedor/"+idProveedor);
  }

  /* ++Servicio++ */
  public listarServicio(pageNumber,pageSize,orderBy,sortDir){
    return this.http.get(this.baseApi+"/servicio?numPage="+pageNumber+"&numSize="+pageSize+"&orderBy="+orderBy+"&sortDir="+sortDir);
  }

  public obtenerServicioById(idServicio){
    return this.http.get(this.baseApi+"/servicio/"+idServicio);
  }

  /* ++Ventas++ */
  public listarVentas(pageNumber,pageSize,orderBy,sortDir){
    return this.http.get(this.baseApi+"/venta?numPage="+pageNumber+"&numSize="+pageSize+"&orderBy="+orderBy+"&sortDir="+sortDir);
  }

  public obtenerVentaById(idVenta){
    return this.http.get(this.baseApi+"/venta/"+idVenta);
  }
}
