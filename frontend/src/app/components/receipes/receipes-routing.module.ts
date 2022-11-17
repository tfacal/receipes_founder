import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchReceipesComponent } from "./search-receipes/search-receipes.component";

export const routes: Routes = [
    {
      path: '',
      component: SearchReceipesComponent
    },
  ];


  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)],
    exports: [
      RouterModule,
    ],
  })
  export class ReceipesRoutingModule {
  }
