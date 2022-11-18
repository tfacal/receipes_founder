import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReceipesService } from 'src/app/backend/receipes.service';
import { difficulties } from 'src/app/models/dificulties';
import { Receipes } from 'src/app/models/receipes';
import { ReceipesResult } from 'src/app/models/receipesResult';

@Component({
  selector: 'app-search-receipes',
  templateUrl: './search-receipes.component.html',
  styleUrls: ['./search-receipes.component.scss'],
  providers: [ReceipesService]
})
export class SearchReceipesComponent implements OnInit {

  dificulties: String[] = difficulties;

  public receipesSearch: ReceipesService;

  receipe: Receipes = {
    nombre: '*',
    duracion: '*',
    comensales: '*',
    para: '*',
    dificultad: '*',
    pagina:1,
    tamaño: 10
  }

  receipesResult: ReceipesResult[] = [];

  receipesForm = new FormGroup({
    nombre: new FormControl(''),
    duracion: new FormControl(''),
    comensales: new FormControl(''),
    ingredientes: new FormControl(''),
    tipo: new FormControl(''),
    dificultad: new FormControl('')
  });

  constructor(protected injector: Injector) {
    this.receipesSearch = this.injector.get(ReceipesService);
  }

  ngOnInit(): void {
  }

  searchByFilter() {
    if(this.receipesForm.get('nombre')?.value) {this.receipe.nombre = this.receipesForm.get('nombre')?.value! } else this.receipe.nombre = '*'
    if(this.receipesForm.get('duracion')?.value) {this.receipe.duracion = this.receipesForm.get('duracion')?.value! } else this.receipe.duracion = '*'
    if(this.receipesForm.get('comensales')?.value) {this.receipe.comensales = this.receipesForm.get('comensales')?.value! } else this.receipe.comensales = '*'
    if(this.receipesForm.get('tipo')?.value) {this.receipe.para = this.receipesForm.get('tipo')?.value! } else this.receipe.para = '*'
    if(this.receipesForm.get('dificultad')?.value) {this.receipe.dificultad = this.receipesForm.get('dificultad')?.value! } else this.receipe.dificultad = '*'

    this.receipesSearch.getReceipesByFilters(this.receipe).subscribe((value) => {
      this.receipesResult = [];
      value['resultadoBusqueda'].forEach((element: ReceipesResult) => {
        this.receipesResult.push(element);
      });
    });
  }

}
