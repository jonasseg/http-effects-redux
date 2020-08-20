import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioInterface } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  public users: UsuarioInterface[];

  constructor(private readonly usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe(users => this.users = users);
  }

}
