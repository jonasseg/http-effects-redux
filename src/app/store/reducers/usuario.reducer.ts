import { createReducer, on, Action } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';
import { UsuarioInterface } from '../../interfaces/usuario.interface';

export interface UsuarioState {
    id: string;
    user: UsuarioInterface;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usuarioInitialState: UsuarioState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null,
};

const usuarioReducer$ = createReducer(usuarioInitialState,
    on(cargarUsuario, (state, { id }) => ({ ...state, loading: true, id })),
    on(cargarUsuarioSuccess, (state, { usuario }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: {...usuario},
    })),
    on(cargarUsuarioError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            error,
        };
    }),
);

export function usuarioReducer(state: UsuarioState, action: Action): UsuarioState {
    return usuarioReducer$(state, action);
}
