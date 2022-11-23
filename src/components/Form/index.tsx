import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormProps, IUseFormProps} from "./interfaces";
import LoginForm from "./LoginForm";
import CreateAnnouncementForm from "./CreateAnnouncementForm";
import { createdAdSchema, editAddressSchema, editProfileSchema, loginSchema, registerSchema } from "./schemas";
import RegistrationForm from "./RegistrationForm";
import EditProfileForm from "./EditProfileForm";
import EditAdressForm from "./EditAddressForm";

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
        : name.toLowerCase() === "editprofile"
        ? editProfileSchema
        : name.toLowerCase() === "editaddress"
        ? editAddressSchema
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

    case "editprofile":
      return <EditProfileForm handleSubmit={handleSubmit} errors={errors} register={register} />

    case "editaddress": 
      return <EditAdressForm handleSubmit={handleSubmit} errors={errors} register={register} />

    default:
      return null;
  }
};
export default Form;
