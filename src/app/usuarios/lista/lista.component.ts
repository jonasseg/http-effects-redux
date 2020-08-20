import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../interfaces/usuario.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  public users: UsuarioInterface[];
  public loading: boolean;
  public error: any;

  constructor(
    private readonly store: Store<AppState>
  ) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.store.dispatch(cargarUsuarios());
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.loading = loading;
      this.error = error;
      this.users = users;
    });
  }

}
