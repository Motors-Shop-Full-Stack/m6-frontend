export interface IUser{
    name: string
    email: string
    cpf: string
    cel: string
    birthdate: string
    description: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement: string
    accountType: string
    password: string
}

export interface IFormProps {
    name: string;
  }
  
  export interface IUseFormProps {
    name?: string;
    email?: string;
    cpf?: string;
    cel?: string;
    birthdate?: string;
    accountType?: string;
    password?: string;
    confirmpassword?: string;
    title?: string;
    km?: number;
    year?: number;
    price?: number;
    description?: string;
    announceCover?: string;
    url?: string;
    cep?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: string;
    complement?: string;
  }