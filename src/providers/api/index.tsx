import React from "react";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { IAnnouncement, IAnnouncementRequest, IApiProvider, ILoginData, IUserData, IDecodedData, IApi } from "./interfaces";
import { IUser } from "../../components/Form/interfaces";
import toast from 'react-hot-toast';
import jwt_decode from "jwt-decode";

const ApiContext = createContext<IApi>({} as IApi);

export const ApiProvider = ({ children }: IApiProvider) => {

  const [homeData, setHomeData] = useState<IAnnouncement[]>(
    [] as IAnnouncement[]
  );

  const handleAnnouncementPostRequest = async (data: IAnnouncementRequest) => {
    const token = localStorage.getItem("token")
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    await axios
      .post("http://localhost:3000/announcements/", data, config)
      .then((res) => {
        toast.success("OK")
      })
      .catch((error) => {
        toast.error("ERROR")
      });
  };

  const handleLoginRequest = async (data: ILoginData) => {

    await axios
      .post("http://localhost:3000/users/login/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token)

        let decoded: IDecodedData = jwt_decode(res.data.token)

        localStorage.setItem("id", decoded.id)
        toast.success("OK")
      })
      .catch((error) => {
        console.log(error);
        toast.error("ERROR")
      });

  };

  const handleRegisterRequest = async (data: IUserData) => {
    await axios
      .post("http://localhost:3000/users/", data)
      .then((res) => {
        toast.success("OK")
      })
      .catch((error) => {
        toast.error("ERROR")
      });
  };



  return (
    <ApiContext.Provider value={{ homeData, handleAnnouncementPostRequest, setHomeData, handleLoginRequest, handleRegisterRequest }}>
      {children}
    </ApiContext.Provider>
  );
};
export const useApi = () => useContext(ApiContext);
