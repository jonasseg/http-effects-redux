import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions/usuario.action';

@Injectable()
export class UsuarioEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly usuarioService: UsuarioService
    ) {}

    public cargarUsuarios$ = createEffect(() => this.actions$
        .pipe(
            ofType(cargarUsuario),
            mergeMap(
                (action) => this.usuarioService.getUserById(action.id)
                    .pipe(
                        map( usuario => cargarUsuarioSuccess({ usuario })),
                        catchError(error => of(
                            cargarUsuarioError({ error: { url: error.url, name: error.name, message: error.message } })
                        ))
                    )
            )
        )
    );
}
