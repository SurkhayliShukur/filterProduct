import React from 'react'
import Layout from '../Layout'
import { SelectFilter } from '../../components/SelectFilter'

const Product: React.FC = () => {
  return (
    <>
      <Layout>
        <div>Product Page</div>
        <div className='flex justify-end items-center gap-x-2 '>
          <SelectFilter />
        </div>
      </Layout>
    </>
  )
}

export default Product