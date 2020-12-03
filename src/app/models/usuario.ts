export class Usuario{
    
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public email: string,
        public habilitado: any
    ){}
}