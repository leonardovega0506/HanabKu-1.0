import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-agregar-venta-admin',
  templateUrl: './agregar-venta-admin.component.html',
  styleUrls: ['./agregar-venta-admin.component.css']
})
export class AgregarVentaAdminComponent {
  listaProveedores:any[];
  proveedorSeleccionado;
  listaProductos:any[];
  listaProductosCompra:any[]=[];
  productoCompra:any;
  cantidad:any;
  total = 0;

  compra = {
    notaCompra:'',
    totalCompra :0,
    productosCompra:[]
  }

  ngOnInit(): void {
    this.rellenarProveedores();
  }

  constructor(private apiService:ApiService,private modal:NgbModal){}

  rellenarProveedores(){
    this.apiService.listarProveedor("0","10","idProveedor","asc").subscribe(
      (data:any)=>{
        this.listaProveedores = data.content;
      }

    );
  }

  cargarProductos(){
    this.apiService.listaProductosByProveedorId("0","10","idProducto","asc",this.proveedorSeleccionado).subscribe(
      (data:any)=>{
        this.listaProductos = data.content;
      }
    );
  }

  agregarProducto(){
    let totalProducto = (this.productoCompra.precioProducto * this.cantidad);
    const productoAgregado={
      clave: this.productoCompra.claveProducto,
      precio: this.productoCompra.precioProducto,
      cantidad: this.productoCompra.cantidadProducto,
      totalProducto: totalProducto
    }
    this.listaProductosCompra.push(productoAgregado);
    this.modal.dismissAll();
    this.listaProductosCompra.forEach((element)=>{
      this.total+= element.totalProducto;
    });
  }

  abrirModal(modalCantidad,producto){
    this.modal.open(modalCantidad);
    this.productoCompra = producto;
  }

  realizarCompra(){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const dayFormat = today.getDate().toString().padStart(2, '0'); 
    this.compra.notaCompra = this.productoCompra.proveedor.nombreProveedor.substring(0,4)+"/"+year.toString().substring(2,4)+month+dayFormat;
    this.compra.productosCompra = this.listaProductosCompra;
    this.compra.totalCompra = this.total;
    this.apiService.agregarCompra(this.compra,this.proveedorSeleccionado).subscribe(
      (data)=>{
        console.log(data);
      }
      );
  }
}
