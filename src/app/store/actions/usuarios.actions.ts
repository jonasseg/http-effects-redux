import { createAction, props } from '@ngrx/store';
import { UsuarioInterface } from '../../interfaces/usuario.interface';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');
export const cargarUsuariosSuccess = createAction(
    '[Usuarios] Cargar Usuarios Success',
    props<{ usuarios: UsuarioInterface[] }>()
);
export const cargarUsuariosError = createAction(
    '[Usuarios] Cargar Usuarios Error',
    props<{ error: any }>()
);
