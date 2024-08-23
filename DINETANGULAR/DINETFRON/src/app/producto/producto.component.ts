import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IProducto } from '../model/producto.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  formproduc: FormGroup
  codigoFilt?: string
  nombreFilt: string = ''
  constructor(private _api: ApiService, _form: FormBuilder) {
    this.formproduc = _form.group({
      codigo: [''],
      nombre: ['']
    })
  }
  ListaProductos: IProducto[] = []
  ngOnInit(): void {
    this._api.getAllProductos().subscribe({
      next: data => {
        this.ListaProductos = data
        console.log('success')
      }, error: err => {
        console.log('Error en el metodo getAllProductos():')
        console.log(err)
      }
    })
  }
  buscar() {
    this.nombreFilt = this.formproduc?.get('nombre')?.value
    this.codigoFilt = this.formproduc?.get('codigo')?.value
    console.log(this.formproduc)
    this._api.getAllProductos(this.nombreFilt, this.codigoFilt).subscribe({
      next: data => {
        this.ListaProductos = data
        console.log('success 2')
      }, error: err => {
        console.log('Error en el metodo getAllProductos():')
        console.log(err)
      }
    })
  }
}
