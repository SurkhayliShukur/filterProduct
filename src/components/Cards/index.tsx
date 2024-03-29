import { singleProductsType } from "../../interface/data"
import { useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"
import { addToBasket } from "../../redux/slices/basket-slice"


type buttons = "detail" | "product"

export interface cardProps {
    items: singleProductsType,
    buttonType: buttons
}

const Cards = ({ items, buttonType }: cardProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl w-[350px] m-5">
                <figure>
                    <img src={items.image} alt={items.title} className="w-[350px] h-[250px]  object-contain" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {items.title.slice(0, 15)}...
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div>
                        <p>{items.category}</p>
                    </div>
                    <div className="flex justify-end items-end">
                        {
                            buttonType === "detail" && <button
                                onClick={() => navigate(`${"/detail"}/${items.id}`)}
                                className="btn btn-info"
                            >Detail Page
                            </button>
                        }
                        {/* add basket button */}
                        {
                            buttonType === "product" && <button
                                onClick={() => {
                                    dispatch(
                                        addToBasket({
                                            ...items,
                                            amount: 1,
                                            totalAmount: 1,
                                            totalPrice: Number(items.price),
                                        }))
                                }}
                                className="btn btn-success"
                            >
                                Add Basket
                            </button>
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default Cards