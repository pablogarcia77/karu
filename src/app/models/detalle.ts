export class Detalle{
    constructor(
        public id_detalle: number,
        public id_prodcto: number,
        public cantidad: number,
        public subtotal: number,
        public id_pedido: number
    ){}
}