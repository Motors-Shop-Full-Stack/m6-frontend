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
  FormRegister,
  FormRegisterTitle,
  FormRegisterPersonalInfo,
  FormRegisterSubTitle,
  FormRegisterAddresInfo,
  FormRegisterAddressBox,
  FormRegisterAddressAccount,
  FormRegisterAccountBox,
  FormRegisterSelectBox,
} from "./styles";
import { useModal } from "../../providers/modal";
import { useApi } from "../../providers/api";
import { useState } from "react";
import { IFormProps, IUseFormProps} from "./interfaces";

const Form = ({ name }: IFormProps) => {
  const { handleSecondModal, handleFirstModal } = useModal();
  const { homeData, handleAnnouncementPostRequest, handleLoginRequest, handleRegisterRequest } =
    useApi();

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

  const [accountType, setAccountType] = useState<string>("buyer");
  const handleAccountType = (e: any) => {
    setAccountType(e.target.value);
  };

  const loginSchema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   "Mínimo 8 caracteres, um maiúsculo, um número e um caracter especial"
    // ),
  });

  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .max(50, "Máximo 50 caracteres"),
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório"),
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "Mínimo 8 caracteres, um maiúsculo, um número e um caracter especial"
      // ),
    confirmpassword: yup
      .string()
      .required("Required field!")
      .oneOf([yup.ref("password")], "Password does not match!"),
    cpf: yup
      .string()
      .required("Campo obrigatório")
      .max(11, "Máximo 11 caracteres")
      .matches(/^[0-9]*$/, "Apenas números"),
    cel: yup
      .string()
      .required("Campo obrigatório")
      .max(11, "Máximo 11 caracteres")
      .matches(/^[0-9]*$/, "Apenas números"),
    birthdate: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    cep: yup
      .string()
      .required("Campo obrigatótio")
      .max(8, "Máximo 8 caracteres")
      .matches(/^[0-9]*$/, "Apenas números"),
    state: yup.string(),
    city: yup
      .string()
      .required("Campo obrigatótio")
      .max(50, "Máximo 50 caracteres"),
    street: yup
      .string()
      .required("Campo obrigatótio")
      .max(50, "Máximo 50 caracteres"),
    number: yup.string().required("Campo obrigatótio"),
    complement: yup
      .string()
      .required("Campo obrigatótio")
      .max(20, "Máximo 20 caracteres"),
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
      name.toLowerCase() === "login"
        ? loginSchema
        : name.toLowerCase() === "createad"
        ? createdAdSchema
        : name.toLowerCase() === "register"
        ? registerSchema
        : loginSchema
    ),
  });

  const handleLogin = (data: any) => {
    const requestObj = {
      email: data.email,
      password: data.password,
    };
    handleLoginRequest(requestObj);
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
    handleAnnouncementPostRequest(requestObj);
  };

  const handleRegister = (data: any) => {

    const requestObj = {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      cel: data.cel,
      birthdate: data.birthdate,
      description: data.description,
      cep: data.cep,
      state: data.state,
      city: data.city,
      street: data.street,
      number: data.number,
      complement: data.complement,
      accountType: data.accountType,
      password: data.password,
    };

    handleRegisterRequest(requestObj)
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
            description={"Email"}
            placeholder={"Digitar email"}
            name={"email"}
            register={register}
            errors={errors?.name}
            width={"152px"}
            height={"60px"}
          />

          <Input
            type={"password"}
            description={"Senha"}
            placeholder={"Digitar senha"}
            name={"password"}
            register={register}
            errors={errors?.password}
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
            type={"submit"}
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
              errors={errors?.title}
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
                errors={errors?.year}
                width={"45%"}
                height={"45px"}
              />
              <Input
                type={"text"}
                description={"Quilometragem"}
                placeholder={""}
                name={"km"}
                register={register}
                errors={errors?.km}
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
                  errors={errors?.price}
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
                  errors={errors?.price}
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
              errors={errors?.description}
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
              errors={errors?.announceCover}
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
              errors={errors?.url}
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

    case "register":
      return (
        <FormRegister onSubmit={handleSubmit(handleRegister)}>
          <FormRegisterTitle>
            <h1>Cadastro</h1>
          </FormRegisterTitle>
          <FormRegisterPersonalInfo>
            <FormRegisterSubTitle>
              <h2>Informações pessoais</h2>
            </FormRegisterSubTitle>
            <Input
              type={"text"}
              description={"Nome"}
              placeholder={"Ex: José Silva"}
              name={"name"}
              register={register}
              errors={errors?.name}
              width={"100%"}
              height={"60px"}
            />
            <Input
              type={"email"}
              description={"Email"}
              placeholder={"Ex: jose@email.com"}
              name={"email"}
              register={register}
              errors={errors?.email}
              width={"100%"}
              height={"60px"}
            />
            <Input
              type={"text"}
              description={"CPF"}
              placeholder={"000.000.000-00"}
              name={"cpf"}
              register={register}
              errors={errors?.cpf}
              width={"100%"}
              height={"60px"}
            />
            <Input
              type={"text"}
              description={"Celular"}
              placeholder={"(DDD)90000-0000"}
              name={"cel"}
              register={register}
              errors={errors?.cel}
              width={"100%"}
              height={"60px"}
            />
            <Input
              type={"text"}
              description={"Data de nascimento"}
              placeholder={"00/00/00"}
              name={"birthdate"}
              register={register}
              errors={errors?.birthdate}
              width={"100%"}
              height={"60px"}
            />
            <Input
              type={"text"}
              description={"Descrição"}
              placeholder={"Digitar descrição"}
              name={"description"}
              register={register}
              errors={errors?.description}
              width={"100%"}
              height={"60px"}
            />
          </FormRegisterPersonalInfo>
          <FormRegisterAddresInfo>
            <FormRegisterSubTitle>
              <h2>Informações de endereço</h2>
            </FormRegisterSubTitle>
            <Input
              type={"text"}
              description={"CEP"}
              placeholder={"00000.000"}
              name={"cep"}
              register={register}
              errors={errors?.cep}
              width={"100%"}
              height={"60px"}
            />
            <FormRegisterAddressBox>
              <FormRegisterSelectBox>
                <label>Estado</label>
                <select {...register("state")}>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option>
                </select>
              </FormRegisterSelectBox>
              <Input
                type={"text"}
                description={"Cidade"}
                placeholder={"Digitar cidade"}
                name={"city"}
                register={register}
                errors={errors.city}
                width={"48%"}
                height={"60px"}
              />
            </FormRegisterAddressBox>
            <Input
              type={"text"}
              description={"Rua"}
              placeholder={"Digitar rua"}
              name={"street"}
              register={register}
              errors={errors?.street}
              width={"100%"}
              height={"60px"}
            />
            <FormRegisterAddressBox>
              <Input
                type={"text"}
                description={"Número"}
                placeholder={"Digitar número"}
                name={"number"}
                register={register}
                errors={errors?.number}
                width={"48%"}
                height={"60px"}
              />
              <Input
                type={"text"}
                description={"Complemento"}
                placeholder={"Ex: apart 307"}
                name={"complement"}
                register={register}
                errors={errors?.complement}
                width={"48%"}
                height={"60px"}
              />
            </FormRegisterAddressBox>
          </FormRegisterAddresInfo>
          <FormRegisterAddressAccount>
            <FormRegisterSubTitle>
              <h2>Tipo de conta</h2>
            </FormRegisterSubTitle>
            <FormRegisterAccountBox>
              <Button
                type={"button"}
                value={"buyer"}
                name={"buyer"}
                onClick={(e) => handleAccountType(e)}
                borderC={"--brand1"}
                backgroundC={"--brand1"}
                fontC={"--grey10"}
                width={"47%"}
                height={"30px"}
              >
                Comprador
              </Button>
              <Button
                type={"button"}
                value={"seller"}
                name={"seller"}
                onClick={(e) => handleAccountType(e)}
                borderC={"--brand1"}
                backgroundC={"--brand1"}
                fontC={"--grey10"}
                width={"47%"}
                height={"30px"}
              >
                Anunciante
              </Button>
            </FormRegisterAccountBox>
            <Input
              type={"password"}
              description={"Senha"}
              placeholder={"Digitar senha"}
              name={"password"}
              register={register}
              errors={errors?.password}
              width={"100%"}
              height={"60px"}
            />
            <Input
              type={"password"}
              description={"Confirmar senha"}
              placeholder={"Digitar senha"}
              name={"confirmpassword"}
              register={register}
              errors={errors?.confirmpassword}
              width={"100%"}
              height={"60px"}
            />
            <Button
              type={"submit"}
              value={"auction"}
              name={"sale"}
              onClick={(e) => handleAccountType(e)}
              borderC={"--brand1"}
              backgroundC={"--brand1"}
              fontC={"--grey10"}
              width={"100%"}
              height={"35px"}
            >
              Finalizar cadastro
            </Button>
          </FormRegisterAddressAccount>
        </FormRegister>
      );

    default:
      return null;
  }
};
export default Form;
