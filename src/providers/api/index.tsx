import React, { ReactNode } from "react";
import { motorsShopAPI } from "../../services/api";
import { createContext, useContext, useState } from "react";
import { AxiosRequestConfig } from "axios";

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

export interface IApi {
  setHomeData: React.Dispatch<React.SetStateAction<IAnnouncementData[]>>;
  handleHomeData: (data: IAnnouncementData) => void;
  homeData: IAnnouncementData[];
}

const ApiContext = createContext<IApi>({} as IApi);

export const ApiProvider = ({ children }: IApiProvider) => {
  const [homeData, setHomeData] = useState<IAnnouncementData[]>(
    [] as IAnnouncementData[]
  );

  const handleHomeData = (data: IAnnouncementData) => {
    motorsShopAPI
      .get("announcements", { data })
      .then((resp) => {
        setHomeData(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ApiContext.Provider value={{ homeData, handleHomeData, setHomeData }}>
      {children}
    </ApiContext.Provider>
  );
};
export const useApi = () => useContext(ApiContext);
