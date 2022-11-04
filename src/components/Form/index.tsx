import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Button";
import {
  StyledForm,
  TitleForm,
  DetailsBoxOne,
  DetailsBoxTwo,
  FormAd,
  FormAdTitle,
  FormAdTypeContainer,
  FormAdSubTitle,
  FormAdInputOneContainer,
  FormAdInputManyContainer,
  FormAdInputManyBoxOne,
  FormAdInputManyBoxTwo,
} from "./styles";
import { useModal } from "../../providers/modal";
import { useApi } from "../../providers/api";
import { useState } from "react";

interface IFormProps {
  name: string;
}

export interface IUseFormProps {
  name: string;
  password: string;
  title: string;
  km: number;
  year: number;
  price: number;
  description: string;
  announceCover: string;
  url: string;
}

const Form = ({ name }: IFormProps) => {
  const { handleSecondModal, handleFirstModal } = useModal();
  const { homeData, handleHomeData } = useApi();

  const [announceType, setAnnounceType] = useState<string>("sale");
  const handleAnnounceType = (e: any) => {
    setAnnounceType(e.target.value);
  };

  const [announceCategory, setAnnounceCategory] = useState<
    string | undefined
  >();
  const handleAnnounceCategory = (e: any) => {
    setAnnounceCategory(e.target.value);
  };

  const loginSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(4, "Mínimo 4 caracteres")
      .max(20, "Máximo 20 caracteres"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mínimo 8 caracteres, um maiúsculo, um número e um caracter especial"
      ),
  });

  const createdAdSchema = yup.object().shape({
    title: yup
      .string()
      .required("Campo obrigatório")
      .max(50, "Máximo 50 caracteres"),
    year: yup
      .string()
      .required("Campo obrigatório")
      .max(4, "Máximo 4 caracteres"),
    km: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    description: yup
      .string()
      .required("Campo obrigatório")
      .max(100, "Máximo 100 caracteres"),
    announceCover: yup
      .string()
      .required("Campo obrigatório")
      .max(200, "Máximo 200 caracteres"),
    url: yup
      .string()
      .required("Campo obrigatório")
      .max(200, "Máximo 200 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUseFormProps>({
    resolver: yupResolver(
      name.toLowerCase() === "login" ? loginSchema : createdAdSchema
    ),
  });

  const handleLogin = (data: any) => {
    console.log(data);
  };

  const handleCreateAd = (data: any) => {
    const requestObj = {
      announceType: announceType,
      title: data.title,
      fabricationYear: parseInt(data.year),
      km: parseInt(data.km),
      price: data.price,
      description: data.description,
      category: announceCategory,
      announceCover: data.announceCover,
    };
    handleHomeData(requestObj);
  };

  switch (name.toLowerCase()) {
    case "login":
      return (
        <StyledForm onSubmit={handleSubmit(handleLogin)}>
          <TitleForm>
            <h2>Login</h2>
          </TitleForm>
          <Input
            type={"text"}
            description={"Usuário"}
            placeholder={"Digitar usuário"}
            name={"name"}
            register={register}
            errors={errors.name}
            width={"152px"}
            height={"60px"}
          />

          <Input
            type={"password"}
            description={"Senha"}
            placeholder={"Digitar senha"}
            name={"password"}
            register={register}
            errors={errors.password}
            width={"152px"}
            height={"60px"}
          />

          <DetailsBoxOne>
            <p>Esqueci minha senha</p>
          </DetailsBoxOne>

          <Button
            borderC={"--sucess3"}
            backgroundC={"--brand1"}
            fontC={"--whiteFixed"}
            width={"152px"}
            height={"35px"}
          >
            Enviar
          </Button>

          <DetailsBoxTwo>
            <p>Ainda não possui conta?</p>
          </DetailsBoxTwo>

          <Button
            borderC={"--grey4"}
            backgroundC={"--grey10"}
            fontC={"--grey0"}
            width={"152px"}
            height={"35px"}
          >
            Cadastrar
          </Button>
        </StyledForm>
      );

    case "createad":
      return (
        <FormAd onSubmit={handleSubmit(handleCreateAd)}>
          <FormAdTitle>
            <h2>Criar anúncio</h2>
            <Button
              type={"button"}
              borderC={"--grey10"}
              backgroundC={"--grey10"}
              fontC={"--grey4"}
              width={"15px"}
              height={"15px"}
              onClick={() => handleFirstModal()}
            >
              x
            </Button>
          </FormAdTitle>
          <FormAdSubTitle>
            <h3>Tipo de anúncio</h3>
          </FormAdSubTitle>
          <FormAdTypeContainer>
            <Button
              type={"button"}
              value={"sale"}
              name={"sale"}
              onClick={(e) => handleAnnounceType(e)}
              borderC={"--brand1"}
              backgroundC={"--brand1"}
              fontC={"--grey10"}
              width={"47%"}
              height={"30px"}
            >
              Venda
            </Button>
            <Button
              type={"button"}
              value={"auction"}
              name={"sale"}
              onClick={(e) => handleAnnounceType(e)}
              borderC={"--brand1"}
              backgroundC={"--brand1"}
              fontC={"--grey10"}
              width={"47%"}
              height={"30px"}
            >
              Leilão
            </Button>
          </FormAdTypeContainer>
          <FormAdSubTitle>
            <h3>Informações do veículo</h3>
          </FormAdSubTitle>
          <FormAdInputOneContainer>
            <Input
              type={"text"}
              description={"Título"}
              placeholder={"Digitar Título"}
              name={"title"}
              register={register}
              errors={errors.title}
              width={"100%"}
              height={"45px"}
            />
          </FormAdInputOneContainer>
          <FormAdInputManyContainer>
            <FormAdInputManyBoxOne>
              <Input
                type={"text"}
                description={"Ano"}
                placeholder={""}
                name={"year"}
                register={register}
                errors={errors.year}
                width={"45%"}
                height={"45px"}
              />
              <Input
                type={"text"}
                description={"Quilometragem"}
                placeholder={""}
                name={"km"}
                register={register}
                errors={errors.km}
                width={"45%"}
                height={"45px"}
              />
            </FormAdInputManyBoxOne>
            <FormAdInputManyBoxTwo>
              {announceType === "sale" ? (
                <Input
                  type={"text"}
                  description={"Preço"}
                  placeholder={""}
                  name={"price"}
                  register={register}
                  errors={errors.price}
                  width={"45%"}
                  height={"49px"}
                />
              ) : (
                <Input
                  type={"text"}
                  description={"Leilão"}
                  placeholder={""}
                  name={"price"}
                  register={register}
                  errors={errors.price}
                  width={"45%"}
                  height={"45px"}
                />
              )}
            </FormAdInputManyBoxTwo>
          </FormAdInputManyContainer>
          <FormAdInputOneContainer>
            <Input
              type={"text"}
              description={"Descrição"}
              placeholder={"Digitar descrição"}
              name={"description"}
              register={register}
              errors={errors.description}
              width={"100%"}
              height={"45px"}
            />
          </FormAdInputOneContainer>
          <FormAdSubTitle>
            <h3>Tipo de veículo</h3>
          </FormAdSubTitle>
          <FormAdTypeContainer>
            <Button
              type={"button"}
              value={"car"}
              name={"car"}
              onClick={(e) => handleAnnounceCategory(e)}
              borderC={"--brand1"}
              backgroundC={"--brand1"}
              fontC={"--grey10"}
              width={"47%"}
              height={"30px"}
            >
              Carro
            </Button>
            <Button
              type={"button"}
              value={"motorcycle"}
              name={"motorcycle"}
              onClick={(e) => handleAnnounceCategory(e)}
              borderC={"--brand1"}
              backgroundC={"--brand1"}
              fontC={"--grey10"}
              width={"47%"}
              height={"30px"}
            >
              Moto
            </Button>
          </FormAdTypeContainer>
          <FormAdInputOneContainer>
            <Input
              type={"text"}
              description={"Imagem da capa"}
              placeholder={"https://image.com"}
              name={"announceCover"}
              register={register}
              errors={errors.announceCover}
              width={"100%"}
              height={"45px"}
            />
          </FormAdInputOneContainer>
          <FormAdInputOneContainer>
            <Input
              type={"text"}
              description={"1° imagem da galeria"}
              placeholder={"https://image.com"}
              name={"url"}
              register={register}
              errors={errors.url}
              width={"100%"}
              height={"45px"}
            />
          </FormAdInputOneContainer>
          <FormAdTypeContainer>
            <Button
              type={"button"}
              value={"sale"}
              name={"sale"}
              onClick={() => handleFirstModal()}
              borderC={"--brand1"}
              backgroundC={"--brand1"}
              fontC={"--grey10"}
              width={"47%"}
              height={"30px"}
            >
              Cancelar
            </Button>
            <Button
              type={"submit"}
              value={"auction"}
              name={"sale"}
              borderC={"--brand1"}
              backgroundC={"--brand1"}
              fontC={"--grey10"}
              width={"47%"}
              height={"30px"}
            >
              Criar anúncio
            </Button>
          </FormAdTypeContainer>
        </FormAd>
      );

    default:
      return null;
  }
};
export default Form;
