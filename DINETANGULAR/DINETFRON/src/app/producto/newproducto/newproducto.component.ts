import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IProducto, Producto } from 'src/app/model/producto.model';

@Component({
  selector: 'app-newproducto',
  templateUrl: './newproducto.component.html',
  styleUrls: ['./newproducto.component.css']
})
export class NewproductoComponent {
  formNew: FormGroup
  mensaje?: string
  producto: IProducto = new Producto()
  constructor(_form: FormBuilder, private _ruta: Router, private _api: ApiService) {
    this.formNew = _form.group({
      nombre: ['', [Validators.required]],
      precio: [0, [Validators.required]]
    })
  }

  guardarProducto(): void {
    this.producto.nombre = this.formNew?.get('nombre')?.value
    this.producto.precio = this.formNew?.get('precio')?.value
    this.producto.fechaCreacion = new Date()
    this._api.postNewProductos(this.producto).subscribe({
      next: data => {
        if (data) {
          this.mensaje = 'Se registro el Producto correctamente!'
          this.formNew?.get('nombre')?.setValue('')
          this.formNew?.get('precio')?.setValue(0)
        }
        else console.log('No se pudo registrar el Producto')
      }, error: err => {
        console.log('Error en el metodo postNewProductos():')
        console.log(err)
      }
    })

  }

}
