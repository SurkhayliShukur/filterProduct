export type singleProductsType = {
    id: number,
    title: string,
    price: string,
    description: string,
    category: string,
    image: string
    rating: {
        rate: number,
        count: number
    }
}

export interface productTypes {
    products: singleProductsType[]
}
export interface priceDetails {
    amount: number,
    totalAmount: number,
    totalPrice: number,
}

export interface basketType extends singleProductsType, priceDetails {}

export interface basketState extends priceDetails {
    basket: basketType[]
}


export interface selectNameProps {
    selectName: (value: string) => void
}
