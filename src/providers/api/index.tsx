import React, { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { IUserData } from "./interfaces";
import { IUser } from "../../components/Form/interfaces";
import toast from 'react-hot-toast';

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
  homeData: IAnnouncementData[];
  setHomeData: React.Dispatch<React.SetStateAction<IAnnouncementData[]>>;
  handleAnnouncementPostRequest: (data: IAnnouncementData) => void;
  handleLoginRequest: (data: ILoginData) => void
  handleRegisterRequest: (data: IUser) => void
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
    <ApiContext.Provider value={{ homeData, handleAnnouncementPostRequest, setHomeData, handleLoginRequest, handleRegisterRequest}}>
      {children}
    </ApiContext.Provider>
  );
};
export const useApi = () => useContext(ApiContext);
