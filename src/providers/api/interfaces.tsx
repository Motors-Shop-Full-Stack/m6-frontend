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
  price: number;
  description: string;
  category: string | undefined;
  announceCover: string;
}

export interface IAnnouncement extends IAnnouncementRequest {
  id: string;
  is_active: boolean;
  category: string;
  user: any
  comments: IComment[]
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

export interface IUser {
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
  announcements: IAnnouncement[];
}

export interface IComment {
  id: string
  message: string
}

export interface IApi {
  homeData: IAnnouncement[];
  isSign: boolean;
  setHomeData: React.Dispatch<React.SetStateAction<IAnnouncement[]>>;
  handleAnnouncementPostRequest: (data: IAnnouncementRequest) => void;
  handleLoginRequest: (data: ILoginData) => Promise<void | string>;
  handleRegisterRequest: (data: IUserData) => Promise<void>;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  fetchUser: () => Promise<void>;
  handleEditProfile: (data: any) => Promise<void>
  fetchAnnouncement: (id: string) => any
  fetchAnnouncements: () => Promise<void>
  announcement: IAnnouncement | undefined
  handleCommentPost: any
}
