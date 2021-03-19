import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent {

  constructor( private gifService: GifsService ) { }

  get resultado() {
    return this.gifService.resultados;
  }

}
