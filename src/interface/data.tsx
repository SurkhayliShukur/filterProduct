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
export interface basketType {
    amount: number,
    totalAmount: number,
    totalPrice: number,
    totalDiscountPrice: number,
}
export interface selectNameProps {
    selectName: (value: string) => void
}
