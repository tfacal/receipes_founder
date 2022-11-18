import { Component, Input } from '@angular/core';
import { ReceipesResult } from 'src/app/models/receipesResult';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.scss']
})
export class ReceipeDetailsComponent {

  get receipe(): ReceipesResult | any {
    return this._receipe;
  };

  @Input()
  set receipe(value: ReceipesResult | any) {
    if (value !== this._receipe) {
      this.ingredientes = [];
      this.apartados = [];
      this._receipe = value;
      if (this._receipe) {
        this._receipe.ingredientes.forEach((ingrediente: any) => this.ingredientes.push(ingrediente));
        this.apartados = this._receipe.apartados.join(' ')
      }
    }
    console.log(this.apartados);
  }

  private _receipe: ReceipesResult | any = null;

  ingredientes: any[] = [];
  apartados: any[] = [];

  constructor() { }

}
