import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { MesRoutingModule } from './mes-routing.module';
import { MesComponent } from './mes.component';


@NgModule({
  declarations: [MesComponent],
  imports: [
    CommonModule,
    MesRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
  ]
})
export class MesModule { }
