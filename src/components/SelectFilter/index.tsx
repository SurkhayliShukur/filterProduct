import { useGetCategoryQuery } from "../../redux/api/category-api"
import { selectNameProps } from "../../interface/data"
import React from "react"

export const SelectFilter:React.FC<selectNameProps> = ({selectName}) => {
    const { data, isLoading, isError } = useGetCategoryQuery('')

    let content

    if (isLoading) {
        content = "isLoading"
    } else if (isError) {
        content = "isError"
    }
    else {
        content =
            <select
            onChange={(e) => selectName(e.target.value)}
             className="select select-ghost w-full max-w-xs"
            
            >
                <option disabled>Choose category</option>
                {
                    data.map((item: string, key: number) => (
                        <option key={key} value={item} >{item}</option>
                    ))
                }
            </select>
    }

    return (
        <>
            <div>
                {content}
            </div>
        </>
    )
}