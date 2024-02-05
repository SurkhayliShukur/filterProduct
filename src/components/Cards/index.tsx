import { singleProductsType } from "../../interface/data"
import { useNavigate } from "react-router-dom"



const Cards = ({ items }: { items: singleProductsType }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl w-[350px] m-5">
                <figure>
                    <img src={items.image} alt={items.title} className="w-[350px] h-[250px]  object-contain" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {items.title.slice(0,15)}...
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div>
                        <p>{items.category}</p>
                    </div>
                    <div className="flex justify-end items-end">
                        <button 
                        onClick={() => navigate(`${"/detail"}/${items.id}`)}
                        className="btn btn-primary"
                        >Detail Page</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cards