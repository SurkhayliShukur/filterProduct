import React, { ReactNode } from "react"
import Navbar from "../../components/Navbar"

interface layoutProps {
    children: ReactNode
}
const Layout: React.FC<layoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    )
}

export default Layout