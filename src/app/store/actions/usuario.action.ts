import { createAction, props } from '@ngrx/store';
import { UsuarioInterface } from '../../interfaces/usuario.interface';

export const cargarUsuario = createAction(
    '[Usuario] Cargar Usuario',
    props<{ id: string }>()
);
export const cargarUsuarioSuccess = createAction(
    '[Usuario] Cargar Usuario Success',
    props<{ usuario: UsuarioInterface }>()
);
export const cargarUsuarioError = createAction(
    '[Usuario] Cargar Usuario Error',
    props<{ error: any }>()
);
