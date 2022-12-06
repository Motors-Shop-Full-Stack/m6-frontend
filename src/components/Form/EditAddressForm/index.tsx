import { useApi } from "../../../providers/api";
import { useModal } from "../../../providers/modal";
import Button from "../../Button";
import Input from "../../Input";
import { cepMask } from "../inputMasks";
import { FormRegisterSelectBox } from "../RegistrationForm/styles";
import { ButtonBox, FormRegisterAddresInfo, FormRegisterAddressBox, FormRegisterSubTitle } from "./styles";

const EditAddressForm = ({ handleSubmit, register, errors }: any) => {
    const {handleFirstModal} = useModal()
    const {handleEditProfile} = useApi()
    
    return (
        <FormRegisterAddresInfo onSubmit={handleSubmit(handleEditProfile)}>
            <div>
                <h2>Editar endereço</h2>
            </div>
            <FormRegisterSubTitle>
                <h4>Informações de endereço</h4>
            </FormRegisterSubTitle>
            <Input
                type={"text"}
                description={"CEP"}
                placeholder={"00000-000"}
                name={"cep"}
                register={register}
                errors={errors?.cep}
                width={"100%"}
                height={"60px"}
                maskFunction={cepMask}
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
            <ButtonBox>
                    <Button
                        borderC="--grey6"
                        backgroundC="--grey6"
                        fontC="--grey2"
                        width="126px"
                        height="48px"
                        onClick={() => handleFirstModal("editAddress", false)}
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
        </FormRegisterAddresInfo>
    );
}

export default EditAddressForm;