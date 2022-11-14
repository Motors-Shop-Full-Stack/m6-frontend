import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormProps, IUseFormProps} from "./interfaces";
import LoginForm from "./LoginForm";
import CreateAnnouncementForm from "./CreateAnnouncementForm";
import { createdAdSchema, loginSchema, registerSchema } from "./schemas";
import RegistrationForm from "./RegistrationForm";

const Form = ({ name }: IFormProps) => {

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


  switch (name.toLowerCase()) {
    case "login":
      return <LoginForm handleSubmit={handleSubmit} errors={errors} register={register} />

    case "createad":
      return <CreateAnnouncementForm handleSubmit={handleSubmit} errors={errors} register={register} />

    case "register":
      return <RegistrationForm handleSubmit={handleSubmit} errors={errors} register={register} />

    default:
      return null;
  }
};
export default Form;
