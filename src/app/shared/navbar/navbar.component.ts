import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  public id: string;

  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('usuario').subscribe(({id}) => this.id = id);
  }

  public irUsuario(id: string): void {
    if (!id) {
      return;
    }
    this.id = id;
    this.router.navigate(['usuario', this.id]);
  }

}
