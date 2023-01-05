import axios from "axios";
import { useEffect, useState } from "react"


export const  useProduct = (url) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    useEffect(() => {
        (
            async function(){
                try{
                    const response = await axios.get(url)
                    setData(response.data)
                }catch(err){
                    setError(err)
                }
            }
        )()
    }, [url])

    return { data, error }

}