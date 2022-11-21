import { useState } from "react";
import { useApi } from "../../../providers/api";
import { FormRegister, FormRegisterAccountBox, FormRegisterAddresInfo, FormRegisterAddressAccount, FormRegisterAddressBox, FormRegisterPersonalInfo, FormRegisterSelectBox, FormRegisterSubTitle, FormRegisterTitle } from "./styles";
import Button from "../../Button";
import Input from "../../Input";

const RegistrationForm = ({ handleSubmit, register, errors }: any) => {

    const { handleRegisterRequest } = useApi();

    const [accountType, setAccountType] = useState<string>("buyer");
    const handleAccountType = (e: any) => {
        setAccountType(e.target.value);
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
            accountType: accountType,
            password: data.password,
        };

        console.log(accountType)

        handleRegisterRequest(requestObj)
    };

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
                    name={"sale"}
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
}

export default RegistrationForm;