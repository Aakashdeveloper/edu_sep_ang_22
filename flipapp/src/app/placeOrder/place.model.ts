export class IOrder{
    constructor(
        public name: string,
        public email: string,
        public address: string,
        public phone: number,
        public cost: number,
        public id: number,
        public product_name: string,
    ){}
}