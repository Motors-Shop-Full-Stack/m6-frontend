import * as yup from "yup";
export
    const loginSchema = yup.object().shape({
        email: yup.string().email().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório"),
        // .matches(
        //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //   "Mínimo 8 caracteres, um maiúsculo, um número e um caracter especial"
        // ),
    });

export const registerSchema = yup.object().shape({
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
        .required("Campo obrigatório"),
    cel: yup
        .string()
        .required("Campo obrigatório"),
    birthdate: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    cep: yup
        .string()
        .required("Campo obrigatótio"),
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

export const createdAdSchema = yup.object().shape({
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