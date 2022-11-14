import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { IUser } from "../Form/interfaces";
import HeaderDefault from "./HeaderDefault";
import HeaderLogged from "./HeaderLogged";

const Header = () => {
  const [data, setData] = useState<IUser | any>()
  useEffect(() => {
    (
        async function(){
          let id = localStorage.getItem("id")
          if (id){
            try{
              const response = await axios.get<IUser>(`http://localhost:3000/users/${id}`)
              setData(response.data)
            }catch(err: any){
                console.log(err)
            }
          }
        }
    )()
},[])

  return (
    <>
      {data ? (<HeaderLogged data={data} />) : (<HeaderDefault />)}
    </>
  );
};

export default Header;
