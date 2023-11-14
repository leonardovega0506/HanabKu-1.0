import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../util/Helper';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  baseAnd:string =`${baseUrl}`
  constructor(private http:HttpClient) { }


  /* **Compras** */
  //Lista Compras
  public listarCompras(pagina,pageSize,orderBy,sort){
      return this.http.get(this.baseAnd+"");
  }

  //Lista compras por id Proveedor
  public listarComprasByProveedor(pagina,pageSize,orderBy,sort,idProveedor){
    return this.http.get(this.baseAnd+"");
  }

  //Obtener la compra por su id
  public obtenerComprasByIdCompra(idCompra){
    return this.http.get(this.baseAnd+""+idCompra);
  }

  //Obtener la compra por nota
  public obtenerCompraByNota(nota){
    return this.http.get(this.baseAnd+""+nota);
  }

  public obtenerDetallesCompras(idCompra){
    return this.http.get(this.baseAnd+"",idCompra);
  }

  public crearCompra(compra){
    return this.http.post(this.baseAnd,compra);  
  }

  public actualizarCompra(compra){
    return this.http.put(this.baseAnd,compra);
  }

  public eliminarCompra(idCompra){
    return this.http.delete(this.baseAnd+""+idCompra);
  }
 /* **Fin Compras** */
 
}
