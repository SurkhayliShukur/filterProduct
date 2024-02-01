import React from 'react'
import {singleProductsType} from "../../interface/data"



const Cards = ({items}: {items:singleProductsType}) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={items.image} alt={items.title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {items.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{items.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards