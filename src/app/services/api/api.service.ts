import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../util/helper';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseApi: string = `${baseUrl}`
  constructor(private http: HttpClient) { }

  /* ++Citas++*/
  public listarCitas(mes){
    return this.http.get(this.baseApi+"/citas/mes?mes="+mes);
  }

  /* **Compras** */
  //Lista Compras
  public listarCompras(pagina, pageSize, orderBy, sort) {
    return this.http.get(this.baseApi + "/compras?numPage=" + pagina + "&numSize=" + pageSize + "&orderBy=" + orderBy + "&sortDir=" + sort);
  }

  public agregarCompra(compra,idProveedor){
    return this.http.post(this.baseApi+"/compras?idProveedor="+idProveedor,compra);
  }

  //Obtener la compra por su id
  public obtenerComprasByIdCompra(idCompra) {
    return this.http.get(this.baseApi + "/compras/" + idCompra);
  }


  /* ++Pacientes++ */
  public actualizarPaciente(paciente){
    return this.http.put(this.baseApi+"/paciente",paciente);
  }

  public agregarPaciente(paciente,idPropietario){
    return this.http.post(this.baseApi+"/paciente?idPropietario="+idPropietario,paciente);
  }

  public eliminarPaciente(idPaciente){
    return this.http.delete(this.baseApi+"/paciente/"+idPaciente);
  }

  public listarPaciente(pageNumber, pageSize, orderBy, sortDir) {
    return this.http.get(this.baseApi + "/paciente?numPage=" + pageNumber + "&numSize=" + pageSize + "&orderBy=" + orderBy + "&sortDir=" + sortDir);
  }

  public listarPacienteByPropietario(idPropietario,pageNumber,pageSize,orderBy,sortDir){
    return this.http.get(this.baseApi+"/paciente/propietario?idPropietario="+idPropietario+"&numPage="+pageNumber+"&numSize="+pageSize+"&orderBy="+orderBy+"&sortDir="+sortDir);
  }

  public obtenerPacienteById(idPaciente) {
    return this.http.get(this.baseApi + "/paciente/" + idPaciente);
  }


  /* ++Productos++ */
  public actualizarProducto(producto){
    return this.http.put(this.baseApi+"/producto",producto);
  }

  public agregarProducto(producto,idProveedor){
    return this.http.post(this.baseApi+"/producto?idProveedor="+idProveedor,producto);
  }

  public eliminarProducto(idProducto){
    return this.http.delete(this.baseApi+"/producto/"+idProducto);
  }

  public listarProductos(pageNumber, pageSize, orderBy, sortDir) {
    return this.http.get(this.baseApi+"/producto?numPage="+pageNumber+"&numSize="+pageSize+"&orderBy="+orderBy+"&sortDir="+sortDir);
  }

  public obtenerProductoById(idProducto){
    return this.http.get(this.baseApi+"/producto/"+idProducto);
  }

  public listaProductosByProveedorId(pageNumber,pageSize,orderBy,sort,idProveedor){
    return this.http.get(this.baseApi+"/producto/proveedor?idProveedor="+idProveedor+"&numPage="+pageNumber+"&numSize="+pageSize+"&orderBy="+orderBy+"&sortDir="+sort);
  }

  /* ++Propietarios++ */
  public agregarPropietario(propietario:any){
    return this.http.post(this.baseApi+"/propietario",propietario);
  }

  public listarPropietarios(pageNumber, pageSize, orderBy,sortDir){
    return this.http.get(this.baseApi+"/propietario?numPage="+pageNumber+"&numSize="+pageSize+"&orderBy="+orderBy+"&sortDir="+sortDir);
  }

  public obtenerPropietarioById(idPropietario){
    return this.http.get(this.baseApi+"/propietario/"+idPropietario);
  }


  /* ++Proveedor++ */
  public actualizarProveedor(proveedor){
    return this.http.put(this.baseApi+"/proveedor",proveedor);
  }

  public agregaProveedor(proveedor){
    return this.http.post(this.baseApi+"/proveedor",proveedor);
  }

  public eliminarProveedor(idProveedor){
    return this.http.delete(this.baseApi+"/proveedor/"+idProveedor);
  }

  public listarProveedor(pageNumber,pageSize,orderBy,sortDir){
    return this.http.get(this.baseApi+"/proveedor?numPage="+pageNumber+"&numSize="+pageSize+"&orderBy="+orderBy+"&sortDir="+sortDir);
  }

  public obtenerProveedorById(idProveedor){
    return this.http.get(this.baseApi+"/proveedor/"+idProveedor);
  }

  /* ++Servicio++ */
  public actualizarServicio(servicio){
    return this.http.put(this.baseApi+"/servicio",servicio);
  }

  public agregarServicio(servicio){
    return this.http.post(this.baseApi+"/servicio",servicio);
  }

  public eliminarServicio(idServicio){
    return this.http.delete(this.baseApi+"/servicio/"+idServicio)
  }

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
