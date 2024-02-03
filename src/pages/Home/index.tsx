import Layout from "../Layout"
import { useGetProductsQuery } from "../../redux/api/product-api"
import Cards from "../../components/Cards";
import { singleProductsType } from "../../interface/data"
import Skeleton from "../../components/Skeleton";

function Home() {
    const { data, isLoading, isError } = useGetProductsQuery(0)
    const fakeArray = Array.from({ length: 10 }, (_, index) => index)
    let content;
    if (isLoading) {
        content =
            <div className="flex flex-wrap justify-between ">
                {
                    fakeArray.map((_, index) => {
                        return (
                            <Skeleton key={index} />
                        )
                    }

                    )
                }
            </div>
    }
    else if (isError) {
        content = "Error"
    }
    else {
        content =
            <div className="flex flex-wrap justify-between">
                {
                    data.map((item: singleProductsType) => (
                        <Cards key={item.id} items={item} />
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
