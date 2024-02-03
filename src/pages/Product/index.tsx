import React from 'react'
import Layout from '../Layout'
import { SelectFilter } from '../../components/SelectFilter'
import { useGetCategoryNameQuery } from '../../redux/api/category-api'
import Cards from "../../components/Cards";
import { singleProductsType } from "../../interface/data"
import Skeleton from "../../components/Skeleton";

const Product: React.FC = () => {
  const {data,isLoading,isError} = useGetCategoryNameQuery('')
  const fakeArray = Array.from({ length: 10 }, (_, index) => index)

  let content
  if(isLoading){
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
  else if(isError){
    content = "isError"
  }
  else{
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
    <>
      <Layout>
        <div>Product Page</div>
        <div className='flex justify-end items-center gap-x-2 '>
          
          <SelectFilter />
        </div>
        {content}
      </Layout>
    </>
  )
}

export default Product