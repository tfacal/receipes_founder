import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialSharedModule } from "src/app/shared/material-shared.module";
import { ReceipeDetailsComponent } from "./receipe-details/receipe-details.component";
import { ReceipesRoutingModule } from "./receipes-routing.module";
import { SearchReceipesComponent } from "./search-receipes/search-receipes.component";

@NgModule({
  declarations: [
    SearchReceipesComponent,
    ReceipeDetailsComponent,
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    ReceipesRoutingModule,
  ],
  exports: [
    SearchReceipesComponent,
    ReceipeDetailsComponent,
  ],
})
export class ReceipesModule { }
