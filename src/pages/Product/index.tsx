import React, { useState } from 'react'
import Layout from '../Layout'
import { SelectFilter } from '../../components/SelectFilter'
import { useGetCategoryNameQuery } from '../../redux/api/category-api'
import Cards from "../../components/Cards";
import { singleProductsType } from "../../interface/data"
import Skeleton from "../../components/Skeleton";


const Product: React.FC = () => {
  const [categoryName,setCategoryName] = useState('electronics')
  const { data, isLoading, isError } = useGetCategoryNameQuery(categoryName)
  const fakeArray = Array.from({ length: 10 }, (_, index) => index)

  const selectName = (categoryName:string) => {
    setCategoryName(categoryName)
}

  let content
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
    content = "isError"
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
    <>
      <Layout>
        <h1 className='text-center text-3xl py-3'>Product</h1>
        <div className='flex justify-end items-center gap-x-2 '>

          <SelectFilter selectName = {selectName} />
        </div>
        {content}
      </Layout>
    </>
  )
}

export default Product