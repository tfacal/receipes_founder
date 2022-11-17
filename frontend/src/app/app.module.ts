import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialSharedModule } from './shared/material-shared.module';
import { SearchReceipesComponent } from './components/receipes/search-receipes/search-receipes.component';
import { ReceipeDetailsComponent } from './components/receipes/receipe-details/receipe-details.component';
import { ReceipesModule } from './components/receipes/receipes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialSharedModule,
    ReceipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
