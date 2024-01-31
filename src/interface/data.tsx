export interface productTypes {
    products: {
        id: number,
        title: string,
        price: string,
        description: string,
        category: string,
        rating: {
            rate: number,
            count: number
        }

    }[]
}