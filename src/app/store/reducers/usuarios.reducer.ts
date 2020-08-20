import { createReducer, on, Action } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from '../actions';
import { UsuarioInterface } from '../../interfaces/usuario.interface';

export interface UsuariosState {
    users: UsuarioInterface[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usuariosInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null,
};

const usuariosReducer$ = createReducer(usuariosInitialState,
    on(cargarUsuarios, state => ({ ...state, loading: true })),
    on(cargarUsuariosSuccess, (state, { usuarios }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...usuarios],
    })),
    on(cargarUsuariosError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            error,
        };
    }),
);

export function usuariosReducer(state: UsuariosState, action: Action): UsuariosState {
    return usuariosReducer$(state, action);
}
