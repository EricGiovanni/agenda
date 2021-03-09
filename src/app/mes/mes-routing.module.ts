import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesComponent } from './mes.component';

const routes: Routes = [{ path: 'Mes', component: MesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesRoutingModule { }
