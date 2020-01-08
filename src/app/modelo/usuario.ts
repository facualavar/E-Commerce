export class Usuario {

    id: number;
    nombres: string;
    apellido: string;
    usuario: string;
    password: string;
    email: string;
    perfil: string;
    telefono: string;

    constructor(nomb:string, ape:string, usr:string, pass:string, email:string, perfil:string, tel?:string){

        this.nombres = nomb;
        this.apellido = ape;
        this.usuario = usr;
        this.password = pass;
        this.email = email;
        this.perfil = perfil;
        this.telefono = tel;
    }
}