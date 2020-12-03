export class Pedido{
    constructor(
        public id_pedido: string,
        public id_comercio: string,
        public mesa: string,
        public fecha: string
    ){}
}