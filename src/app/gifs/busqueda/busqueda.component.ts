import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifService: GifsService ) {}

  buscar() {
    
    const inputBuscar = this.txtBuscar.nativeElement;
    const valor = inputBuscar.value;
    
    if( valor.trim().length > 0 ) {
      this.gifService.buscarGif( valor );    
      inputBuscar.value = '';
    }    
  }
}