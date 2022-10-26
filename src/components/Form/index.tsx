import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseFormRegister, FieldValues } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { StyledForm, TitleForm, DetailsBoxOne, DetailsBoxTwo } from "./styles";

interface IFormProps {
  name: string;
}

interface ILogin {
  name: string;
  password: string;
  register: UseFormRegister<FieldValues>;
}

const Form = ({ name }: IFormProps) => {
  const loginSchema = yup.object().shape({
    name: yup
      .string()
      .required("Required Field!")
      .min(4, "Minimum 4 charachters!")
      .max(20, "Maximun 20 characters"),
    password: yup.string().required("Required Field!"),
    //   .matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character!"
    //   ),
  });

  const testSchema = yup.object().shape({
    test: yup.string().required("Required field!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(
      name.toLowerCase() === "login" ? loginSchema : testSchema
    ),
  });

  const handleLogin = (data: any) => {
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
            width={"152px"}
            height={"60px"}
          />
          <Input
            type={"password"}
            description={"Senha"}
            placeholder={"Digitar senha"}
            name={"password"}
            register={register}
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
        <StyledForm onSubmit={handleSubmit(handleLogin)}>
          <Input
            type={"text"}
            description={"Teste"}
            placeholder={"Digitar Teste"}
            name={"test"}
            register={register}
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
