import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Button";
import { StyledForm, TitleForm, DetailsBoxOne, DetailsBoxTwo } from "./styles";
import { useModal } from "../../providers/modal";

interface IFormProps {
  name: string;
}

export interface IUseFormProps {
  name: string;
  password: string;
  test: string;
}

const Form = ({ name }: IFormProps) => {
  const { handleSecondModal } = useModal();

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

  const testSchema = yup.object().shape({
    test: yup.string().required("Required field!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUseFormProps>({
    resolver: yupResolver(
      name.toLowerCase() === "login" ? loginSchema : testSchema
    ),
  });

  const handleLogin = (data: any) => {
    console.log(data);
  };

  const handleTest = (data: any) => {
    console.log(data);
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

    case "test":
      return (
        <StyledForm onSubmit={handleSubmit(handleTest)}>
          <Input
            type={"text"}
            description={"Teste"}
            placeholder={"Digitar Teste"}
            name={"test"}
            register={register}
            errors={errors.test}
            width={"152px"}
            height={"60px"}
          />
          <Button
            borderC={"--sucess3"}
            backgroundC={"--brand1"}
            fontC={"--whiteFixed"}
            width={"152px"}
            height={"35px"}
          >
            Enviar
          </Button>
        </StyledForm>
      );

    default:
      return null;
  }
};
export default Form;
