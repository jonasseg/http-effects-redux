import { UsuarioInterface } from "../interfaces/usuario.interface";

export class UsuarioModel implements UsuarioInterface {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;

    constructor(user?: UsuarioInterface) {
        this.id = user?.id || null;
        this.email = user?.email || null;
        this.first_name = user?.first_name || null;
        this.last_name = user?.last_name || null;
    }
}
