export type singleProductsType={
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
    
}
export interface selectNameProps{
    selectName: (value:string) => void
}
