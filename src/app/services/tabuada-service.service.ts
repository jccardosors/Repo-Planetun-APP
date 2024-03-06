import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TabuadaRequest } from '../models/tabuadaRequest';
import { Observable } from 'rxjs';
import { TabuadaResponse } from '../models/tabuadaResponse';
import { Tabuada } from '../models/tabuada';

@Injectable({
  providedIn: 'root'
})
export class TabuadaServiceService {

  url = 'https://localhost:7063/api/Tabuada/CalcularTabuada';

  constructor(private _http: HttpClient) { }

  EnviarNumerosSelecionados(tabuadaRequest: TabuadaRequest): Observable<any> {

    let resposta = this._http.post<Tabuada[]>(this.url, tabuadaRequest,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain',
        }, params: {}, responseType: 'json'
      })
    console.log(resposta);

    return resposta;
  }

}
