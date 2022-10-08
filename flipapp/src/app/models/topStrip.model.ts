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

export interface IMobile{
    _id: string,
    image: string,
    description: string,
    stars: number,
    ratings: string,
    reviews: string,
    more_data: string,
    more_data2: string,
    more_data3: string,
    more_data4: string,
    more_data5: string,
    more_data6: string,
    new_price: number,
    old_price: number,
    discount: number,
    delivery_type:string,
    offer: string,
    offer2:  string,
    hidden_stars: number,
    item_id: number,
}