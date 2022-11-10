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

export interface IDecodedData {
  id: string;
  email: string;
  isActive: string;
}
