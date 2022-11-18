import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
})
export class MaterialSharedModule { }
