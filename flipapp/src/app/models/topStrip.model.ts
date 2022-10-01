export interface ITop{
    _id: string,
    id: number,
    name:string,
    imgUrl: string
}

export interface ICloth{
    _id: string,
    image: string,
    brand: string,
    description: string,
    new_price: number,
    old_price: number,
    discount: number,
    delivery_type: string,
    hidden_stars: number,
    item_id:number
}