import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuario } from '../../store/actions/usuario.action';
import { UsuarioState } from '../../store/reducers/usuario.reducer';
import { UsuarioInterface } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {
  public user: UsuarioInterface;
  public loading: boolean;
  public error: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => this.store.dispatch(cargarUsuario( { id } )));
    this.store.select('usuario')
      .subscribe(({ user, error, loading }) => {
        this.user = user;
        this.loading = loading;
        this.error = error;
    });
  }

}
