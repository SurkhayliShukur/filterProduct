import React from "react"
import { NavLink } from "react-router-dom"
import vite from "../../../public/vite.svg"

const Navbar:React.FC = () => {
    return (
        <>
            <div className="shadow-lg">
                <div className="navbar bg-base-100 container ">
                    <div className="flex-1">
                        <img src={vite} width={30} height={30} alt="logo" />
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/product">Product</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar