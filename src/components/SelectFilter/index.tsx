import { useGetCategoryQuery } from "../../redux/api/category-api"

export const SelectFilter = () => {
    const {data,isLoading,isError} = useGetCategoryQuery('')

    let content 

    if(isLoading){
        content = "isLoading"
    } else if(isError){
        content = "isError"
    }
    else{
        content = 
        <select className="select select-ghost w-full max-w-xs">
        <option  selected>Pick the best JS framework</option>
        {
            data.map((item:string,key:number)=> (
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