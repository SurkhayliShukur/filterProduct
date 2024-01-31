import Layout from "../Layout"
import {useGetProductsQuery} from "../../redux/api/product-api"

function Home() {
    const {data,isLoading,isError} = useGetProductsQuery()

    return (
        <Layout>
            <div>App</div>
        </Layout>
    )
}
export default Home
