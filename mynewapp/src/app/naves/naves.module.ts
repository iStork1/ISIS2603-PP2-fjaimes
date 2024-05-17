import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarNavesComponent } from './listar-naves/listar-naves.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListarNavesComponent],
  declarations: [ListarNavesComponent]
})
export class NavesModule { }
