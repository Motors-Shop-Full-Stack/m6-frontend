import { useApi } from "../../../providers/api";
import { useModal } from "../../../providers/modal";
import Button from "../../Button";
import Input from "../../Input";
import { cellMask, cpfMask } from "../inputMasks";
import { ButtonBox, Container, FormPersonalInfo, FormRegisterSubTitle } from "./styles";

const EditProfileForm = ({ handleSubmit, errors, register }: any) => {
    const { handleEditProfile } = useApi()
    const { handleFirstModal } = useModal()

    return (
        <Container onSubmit={handleSubmit(handleEditProfile)}>
            <FormPersonalInfo>
                <div>
                    <h2>Editar perfil</h2>
                </div>
                <FormRegisterSubTitle>
                    <h4>Informações pessoais</h4>
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
                    maskFunction={cpfMask}
                />
                <Input
                    type={"text"}
                    description={"Celular"}
                    placeholder={"(DDD)98888-7777"}
                    name={"cel"}
                    register={register}
                    errors={errors?.cel}
                    width={"100%"}
                    height={"60px"}
                    maskFunction={cellMask}
                />
                <Input
                    type={"date"}
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
                <ButtonBox>
                    <Button
                        borderC="--grey6"
                        backgroundC="--grey6"
                        fontC="--grey2"
                        width="126px"
                        height="48px"
                        onClick={() => handleFirstModal("editProfile", false)}
                        type="button"
                    >
                        Cancelar
                    </Button>
                    <Button
                        borderC="--brand1"
                        backgroundC="--brand1"
                        fontC="--whiteFixed"
                        width="193px"
                        height="48px"
                        type="submit"
                    >
                        Salvar alterações
                    </Button>
                </ButtonBox>
            </FormPersonalInfo>
        </Container>
    );
}

export default EditProfileForm;