export class Usuario {

    id: number;
    nombres: string;
    apellido: string;
    usuario: string;
    password: string;
    email: string;
    perfil: string;

    constructor(nomb:string, ape:string, usr:string, pass:string, email:string, perfil:string){

        this.nombres = nomb;
        this.apellido = ape;
        this.usuario = usr;
        this.password = pass;
        this.email = email;
        this.perfil = perfil;
    }
}