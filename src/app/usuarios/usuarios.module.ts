import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';

const components = [ListaComponent, UsuarioComponent];

@NgModule({
  declarations: [ ...components, ],
  imports: [
    CommonModule
  ],
  exports: [ ...components, ],
})
export class UsuariosModule { }
