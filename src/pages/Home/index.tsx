import Layout from "../Layout"
import { useGetProductsQuery } from "../../redux/api/product-api"
import Cards from "../../components/Cards";
import {singleProductsType} from "../../interface/data"

function Home() {
    const { data, isLoading, isError } = useGetProductsQuery(0)
    let content;
    if(isLoading){
        content = "loading"
    }
    else if(isError){
        content = "Error"
    }
    else{
        content = 
        <div className="flex flex-wrap justify-between">
            {
                data.map((item:singleProductsType) => (
                    <Cards key={item.id} items = {item}/>
                ))
            }
        </div>
    }


    return (
        <Layout>
           <>
           <div className="p-3">
            {content}
           </div>
           </>
        </Layout>
    )
}
export default Home
