import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { GifPageComponent } from './gif-page/gif-page.component';
import { SubstringPipe } from './pipes/substring.pipe';

@NgModule({
  declarations: [
    BusquedaComponent, 
    ResultadoComponent, 
    GifPageComponent, SubstringPipe
  ],
  exports: [
    GifPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }