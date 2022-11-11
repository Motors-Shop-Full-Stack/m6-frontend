import { useEffect, useState } from "react"
import axios from "axios"
import { IUser } from "../components/Form/interfaces"
import { IAnnouncement } from "../pages/Home/interfaces"


export default function useFetch(url: string, config?: any | undefined){

    const [data, setData] = useState<any>()
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
    },[])

    return { data, error, loading }

}