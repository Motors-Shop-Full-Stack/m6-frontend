import { useEffect, useState } from "react"
import axios from "axios"
import { IUser } from "../components/Form/interfaces"


export default function useFetch(url: string, config: any | undefined){

    const [data, setData] = useState<IUser | null>()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(url, config)
                    setData(response.data)
                }catch(err: any){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    })

    return { data, error, loading }

}