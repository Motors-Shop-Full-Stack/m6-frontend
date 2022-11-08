import React, { ReactNode } from "react";
import { motorsShopAPI } from "../../services/api";
import { createContext, useContext, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

export interface IApiProvider {
  children: ReactNode;
}

export interface IAnnouncementData {
  announceType: string;
  title: string;
  fabricationYear: number;
  km: number;
  price: string;
  description: string;
  category: string | undefined;
  announceCover: string;
}

interface ILoginData {
  email: string
  password: string
}

export interface IApi {
  setHomeData: React.Dispatch<React.SetStateAction<IAnnouncementData[]>>;
  handleAnnouncementPostRequest: (data: IAnnouncementData) => void;
  homeData: IAnnouncementData[];
  handleLoginRequest: (data: ILoginData) => void
}

const ApiContext = createContext<IApi>({} as IApi);

export const ApiProvider = ({ children }: IApiProvider) => {
  const [homeData, setHomeData] = useState<IAnnouncementData[]>(
    [] as IAnnouncementData[]
  );

  const handleAnnouncementPostRequest = async (data: IAnnouncementData) => {
    const token = localStorage.getItem("token")
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    
    await axios
      .post("http://localhost:3000/announcements/", data, config)
      .then((resp) => {
        console.log(resp)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginRequest = async (data: ILoginData) => {
    await axios
      .post("http://localhost:3000/users/login/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ApiContext.Provider value={{ homeData, handleAnnouncementPostRequest, setHomeData, handleLoginRequest}}>
      {children}
    </ApiContext.Provider>
  );
};
export const useApi = () => useContext(ApiContext);
