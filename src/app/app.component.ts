import { Component, OnInit } from '@angular/core';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { Tabuada } from './models/tabuada';
import { TabuadaRequest } from './models/tabuadaRequest';
import { TabuadaServiceService } from './services/tabuada-service.service';

interface SlcTabuada {
  texto: string,
  valor: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PlatunTest-UI';

  tabuadaLista = new MatTableDataSource<Tabuada>();
  displayedColumns: string[] | undefined;

  formulario: any;
  slcTabuada: [] | undefined;
  slcTab: Array<SlcTabuada> | undefined;

  constructor(private _tabuadaService: TabuadaServiceService) {
    this.CarregarDropDown();
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      tabNumero: new FormControl(null),
    });
  }

  get propriedade() {
    return this.formulario.controls;
  }

  CarregarDropDown(): void {
    this.slcTab = [];
    let slcTabItem: SlcTabuada = { texto: 'Número 1', valor: 1 };
    this.slcTab.push(slcTabItem);

    slcTabItem = { texto: 'Número 2', valor: 2 };
    this.slcTab.push(slcTabItem);

    slcTabItem = { texto: 'Número 3', valor: 3 };
    this.slcTab.push(slcTabItem);

    slcTabItem = { texto: 'Número 4', valor: 4 };
    this.slcTab.push(slcTabItem);

    slcTabItem = { texto: 'Número 5', valor: 5 };
    this.slcTab.push(slcTabItem);

    slcTabItem = { texto: 'Número 6', valor: 6 };
    this.slcTab.push(slcTabItem);

    slcTabItem = { texto: 'Número 7', valor: 7 };
    this.slcTab.push(slcTabItem);

    slcTabItem = { texto: 'Número 8', valor: 8 };
    this.slcTab.push(slcTabItem);

    slcTabItem = { texto: 'Número 9', valor: 9 };
    this.slcTab.push(slcTabItem);

    slcTabItem = { texto: 'Número 10', valor: 10 };
    this.slcTab.push(slcTabItem);

    slcTabItem = { texto: 'De 1 até 10', valor: 0 };
    this.slcTab.push(slcTabItem);
  }

  EnviarFormulario(): void {
    const tabSelecionada = this.formulario.value;
    console.log(tabSelecionada);
    console.log(tabSelecionada.tabNumero);

    let tabuadaRquest = new TabuadaRequest();
    tabuadaRquest.numerosLista = [];

    if (tabSelecionada.tabNumero == 0) {
      tabuadaRquest.numerosLista.push(1);
      tabuadaRquest.numerosLista.push(2);
      tabuadaRquest.numerosLista.push(3);
      tabuadaRquest.numerosLista.push(4);
      tabuadaRquest.numerosLista.push(5);
      tabuadaRquest.numerosLista.push(6);
      tabuadaRquest.numerosLista.push(7);
      tabuadaRquest.numerosLista.push(8);
      tabuadaRquest.numerosLista.push(9);
      tabuadaRquest.numerosLista.push(10);
    } else {
      tabuadaRquest.numerosLista.push(tabSelecionada.tabNumero);
    }

    this._tabuadaService.EnviarNumerosSelecionados(tabuadaRquest).subscribe(resposta => {
      this.tabuadaLista = resposta.tabuadaLista;
      this.displayedColumns = this.ExibirColunas();
    });
  }

  ExibirColunas(): string[] {
    return ['tabNumero', 'numero', 'resultado'];
  }
}
