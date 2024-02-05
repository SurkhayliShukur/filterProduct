import React from 'react'

const Skeleton = () => {
    return (
        <>
            <div className="flex flex-col gap-4 w-[350px] m-5  object-contain">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </>
    )
}

export default Skeleton