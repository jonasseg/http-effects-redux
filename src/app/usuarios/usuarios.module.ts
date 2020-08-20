import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RouterModule } from '@angular/router';

const components = [ListaComponent, UsuarioComponent];

@NgModule({
  declarations: [ ...components, ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ ...components, ],
})
export class UsuariosModule { }
