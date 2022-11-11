import { ReactNode } from "react";

export interface IUserData {
  name: string;
  email: string;
  cpf: string;
  cel: string;
  birthdate: string;
  description: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  accountType: string;
  password: string;
}

export interface IApiProvider {
  children: ReactNode;
}

export interface IAnnouncementRequest {
  announceType: string;
  title: string;
  fabricationYear: number;
  km: number;
  price: string;
  description: string;
  category: string | undefined;
  announceCover: string;
}

export interface IAnnouncement extends IAnnouncementRequest{
    id: string
    is_active: boolean
    category: string
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IDecodedData {
  id: string;
  email: string;
  isActive: string;

}

export interface IApi {
  homeData: IAnnouncement[];
  setHomeData: React.Dispatch<React.SetStateAction<IAnnouncement[]>>;
  handleAnnouncementPostRequest: (data: IAnnouncementRequest) => void;
  handleLoginRequest: (data: ILoginData) => void
  handleRegisterRequest: (data: IUserData) => void
}
