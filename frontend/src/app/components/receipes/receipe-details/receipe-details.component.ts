import { Component, Input, OnInit } from '@angular/core';
import { ReceipesResult } from 'src/app/models/receipesResult';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.scss']
})
export class ReceipeDetailsComponent implements OnInit {

  @Input() receipe: ReceipesResult | any;

  selectedReceipe: ReceipesResult | any = null;

  ingredientes: any[] = [];
  apartados: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.selectedReceipe = this.receipe;
    if (this.selectedReceipe !== this.receipe) {
      this.selectedReceipe = this.receipe;
    }
    else {
      this.selectedReceipe = null;
    }
    this.receipe.ingredientes.forEach((ingrediente: any) => this.ingredientes.push(ingrediente));
    this.receipe.apartados.forEach((paso: any) => this.apartados.push(paso));
  }

}
