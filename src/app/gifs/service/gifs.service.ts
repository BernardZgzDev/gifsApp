import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor( private _http: HttpClient ) { }

  private _apiKey: string = 'Lty4PebabEDSLsWcm6y95SE3f9sXe3C4';
  private _url: string = `https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}`;   
  private _historial: string[] = [];
  private _limit: number = 12;
  
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGif( valor: string ) {

    valor = valor.trim().toLowerCase();

    if( !this._historial.includes( valor ) ) {
      this._historial.unshift(valor);      
      this._historial = this._historial.slice(0, this._limit);
    }

    this._http.get<SearchGIFResponse>( this._url + `&q=${valor}&limit=${this._limit}` )
        .subscribe( resp => {
          console.log( resp.data );
          this.resultados = resp.data;
        } );        
  }
}