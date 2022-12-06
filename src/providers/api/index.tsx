import React from "react";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import {
  IAnnouncement,
  IAnnouncementRequest,
  IApiProvider,
  ILoginData,
  IUserData,
  IDecodedData,
  IApi,
  IUser,
} from "./interfaces";
import toast from "react-hot-toast";
import axiosInstance from "../../services/api";
import { useHistory } from "react-router-dom";
import { useModal } from "../modal";

const ApiContext = createContext<IApi>({} as IApi);

export const ApiProvider = ({ children }: IApiProvider) => {

  const { handleFirstModal } = useModal();

  const [homeData, setHomeData] = useState<IAnnouncement[]>(
    [] as IAnnouncement[]
  );

  const [announcement, setAnnouncement] = useState<IAnnouncement | undefined>()

  const [user, setUser] = useState<IUser>();

  const [isSign, setIsSIgn] = useState<boolean>(false);

  const fetchAnnouncements = async () => {
    try {
      const response = await axiosInstance.get(
        "http://localhost:3000/announcements/"
      );
      setHomeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAnnouncement = async (id: string) => {
    try {
      const response = await axiosInstance.get(
        `http://localhost:3000/announcements/${id}`
      );
      setAnnouncement(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    const id = localStorage.getItem("motorshop-id");
    try {
      const response = await axiosInstance.get(
        `http://localhost:3000/users/${id}`
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAnnouncementPostRequest = async (data: IAnnouncementRequest) => {
    const token = localStorage.getItem("motorshop-token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .post("http://localhost:3000/announcements/", data, config)
      .then((res) => {
        handleFirstModal('announcementSuccess', true)
        fetchUser();
      })
      .catch((error) => {
        console.log(error)
        toast.error("ERROR");
      });
  };

  const handleLoginRequest = async (data: ILoginData) => {
    await axiosInstance
      .post("http://localhost:3000/users/login/", data)
      .then((res) => {
        localStorage.setItem("motorshop-token", res.data.token);
        localStorage.setItem("motorshop-id", res.data.userId);
        toast.success("OK");
        fetchUser();
        fetchAnnouncements();
      })
      .catch((error) => {
        console.log(error);
        toast.error("ERROR");
      });
  };

  const handleRegisterRequest = async (data: IUserData) => {
    await axios
      .post("http://localhost:3000/users/", data)
      .then((res) => {
        handleFirstModal('registrationSuccess', true)
      })
      .catch((error) => {
        toast.error("ERROR");
        console.log(error);
      });
  };

  const handleCommentPost = async (data: any, id: string) => {
    await axiosInstance
      .post(`http://localhost:3000/comments/${id}`, data)
      .then((res) => {
        toast.success("OK");
        fetchAnnouncement(id)
      })
      .catch((error) => {
        toast.error("ERROR");
        console.log(error);
      });
  };

  const handleEditProfile = async (data: any) => {
    
    Object.keys(data).forEach(key => {
      
      if (key === 'cpf'){
        data[key] = data[key].replaceAll(".", "").replace("-", "")
      }

      if (key === 'cep' && data[key] !== ''){
        data[key] = data[key].replace("-", "")
      }
      
      if (key === 'cel' && data[key] !== ''){
        data[key] = data[key].replace("(", "").replace(")", "").replace("-", "")
      }

      if (data[key] === '') {
        delete data[key];
      }
    });

    const id = localStorage.getItem("motorshop-id")
    await axiosInstance
      .patch(`http://localhost:3000/users/${id}`, data)
      .then((res) => {
        toast.success("OK");
        fetchUser()
      })
      .catch((error) => {
        toast.error("ERROR");
        console.log(error)
      });
  };

  return (
    <ApiContext.Provider
      value={{
        homeData,
        handleAnnouncementPostRequest,
        setHomeData,
        handleLoginRequest,
        handleRegisterRequest,
        user,
        setUser,
        fetchUser,
        isSign,
        handleEditProfile,
        fetchAnnouncement,
        announcement,
        handleCommentPost
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
export const useApi = () => useContext(ApiContext);
