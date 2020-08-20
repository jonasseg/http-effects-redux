import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioInterface } from '../interfaces/usuario.interface';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private readonly http: HttpClient) { }

  public getUsers(): Observable<UsuarioInterface[]> {
    return this.http.get<{ data: UsuarioInterface[]}>(`${environment.users.base}${environment.users.url}?per_page=6&delay=3`)
      .pipe(
        map(all => all.data)
      );
  }

  public getUserById(id: string): Observable<UsuarioInterface> {
    return this.http.get<{ data: UsuarioInterface}>(`${environment.users.base}${environment.users.url}/${id}`)
      .pipe(
        map(all => all.data)
      );
  }
}
