import React from 'react'
import Layout from '../Layout'
import { useSelector } from "react-redux"
import { RootState } from '../../redux/app/store'
import { singleProductsType } from "../../interface/data"


const Basket: React.FC = () => {
  const basket = useSelector((state:RootState) => state.products.basket.basket)
  const totalPrice = useSelector((state:RootState) => state.products.basket.totalPrice)
  console.log(basket)
  return (
    <>
      <Layout>
        <header className='flex justify-center product-center bg-slate-700 p-2 w-full'>
          <p className='text-cyan-100'>TotalPrice:{totalPrice}</p>
        </header>
        <div className='container  grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-14 '>
          {
            basket && basket.length > 0 ?
              (
                basket.map((product: singleProductsType) => (
                  <>
                    <div className="card w-96 bg-base-100 shadow-xl w-[350px] m-5">
                      <figure>
                        <img src={product.image} alt={product.title} className="w-[350px] h-[250px]  object-contain" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">
                          {product.title}
                        </h2>
                        <div>
                          <p>{product.category}</p>
                        </div>


                      </div>
                    </div>
                  </>
                ))
              )
              : (
                <p>Empty</p>
              )
          }
        </div>
      </Layout>
    </>
  )
}

export default Basket