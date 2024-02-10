import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductIdQuery } from '../../redux/api/product-api'
import Layout from '../Layout'

const Detail: React.FC = () => {
    const { id } = useParams()
    const { data, isLoading, isError } = useGetProductIdQuery(id)
    let content
    if (isLoading) {
        content = "Loading"
    } else if (isError) {
        content = "Error"
    }
    else {
        content =
            <div className='card lg:card-side bg-base-100 shadow-xl'>
                <figure className="w-4/6">
                    <img
                        src={data.image}
                        className="h-screen  object-cover"
                        alt={data.title}
                        style={{
                            width: '400px',
                            height: 'auto'
                        }} />
                </figure>
                <div className="card-body p-6">
                    <h2 className='card-title text-2xl text-zinc-700 m-2'>Title: {data.title}</h2>
                    <div className='badge badge-accent badge-outline badge-lg'>{data.category}</div>
                    <p className='text-xl text-zinc-700 m-2'
                        style={{ width: "480px" }} >Description: {data.description}...</p>
                    <p className='text-2xl text-zinc-700 m-2'>Price: {data.price}</p>
                </div>
            </div>
    }


    return (
        <>
            <Layout>
                <h1 className='text-center text-2xl p-6'>Detail</h1>
                {content}
            </Layout>
        </>
    )
}

export default Detail