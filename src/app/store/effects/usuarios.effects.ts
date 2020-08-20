import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions/usuarios.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly usuarioService: UsuarioService
    ) {}

    public cargarUsuarios$ = createEffect(() => this.actions$
        .pipe(
            ofType(cargarUsuarios),
            mergeMap(
                () => this.usuarioService.getUsers()
                    .pipe(
                        map( usuarios => cargarUsuariosSuccess({ usuarios })),
                        catchError(error => of(
                            cargarUsuariosError({ error: { url: error.url, name: error.name, message: error.message } })
                        ))
                    )
            )
        )
    );
}
