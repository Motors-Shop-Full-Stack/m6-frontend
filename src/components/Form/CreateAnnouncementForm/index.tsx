import { useState } from "react";
import { useApi } from "../../../providers/api";
import { useModal } from "../../../providers/modal";
import Button from "../../Button";
import Input from "../../Input";
import { currencyMask } from "../inputMasks";
import { ButtonBox, Container, FormAdInputManyContainer, FormAdInputOneContainer, FormAdTitle, FormAdTypeContainer, FormSection } from "./styles";

const CreateAnnouncementForm = ({ handleSubmit, register, errors }: any) => {

  const { handleAnnouncementPostRequest } = useApi();
  const { handleSecondModal, handleFirstModal } = useModal();

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

  const handleCreateAd = (data: any) => {
    const requestObj = {
      announceType: announceType,
      title: data.title,
      fabricationYear: parseInt(data.year),
      km: parseInt(data.km),
      price: parseFloat(data.price),
      description: data.description,
      category: announceCategory,
      announceCover: data.announceCover,
    };
    handleAnnouncementPostRequest(requestObj);
  };

  return (
    <Container onSubmit={handleSubmit(handleCreateAd)}>
      <FormAdTitle>
        <h2>Criar anúncio</h2>
        <Button
          type={"button"}
          borderC={"--grey10"}
          backgroundC={"--grey10"}
          fontC={"--grey4"}
          width={"15px"}
          height={"15px"}
          onClick={() => handleFirstModal("createAnnouncement", false)}
        >
          x
        </Button>
      </FormAdTitle>
      <FormSection>
        <h3>Tipo de anúncio</h3>
        <FormAdTypeContainer>
          <Button
            type={"button"}
            value={"sale"}
            name={"sale"}
            onClick={(e) => handleAnnounceType(e)}
            borderC={"--brand1"}
            backgroundC={"--brand1"}
            fontC={"--grey10"}
            width={"80%"}
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
            width={"80%"}
            height={"30px"}
          >
            Leilão
          </Button>
        </FormAdTypeContainer>
      </FormSection>
      <FormSection>

        <h3>Informações do veículo</h3>
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
          <Input
            type={"text"}
            description={"Ano"}
            placeholder={""}
            name={"year"}
            register={register}
            errors={errors?.year}
            width={"90%"}
            height={"45px"}
          />
          <Input
            type={"text"}
            description={"Quilometragem"}
            placeholder={""}
            name={"km"}
            register={register}
            errors={errors?.km}
            width={"90%"}
            height={"45px"}
          />

          {announceType === "sale" ? (
            <Input
              type={"text"}
              description={"Preço"}
              placeholder={""}
              name={"price"}
              register={register}
              errors={errors?.price}
              width={"90%"}
              height={"45px"}
              maskFunction={currencyMask}
            />
          ) : (
            <Input
              type={"text"}
              description={"Leilão"}
              placeholder={""}
              name={"price"}
              register={register}
              errors={errors?.price}
              width={"90%"}
              height={"45px"}
              maskFunction={currencyMask}
            />
          )}

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
      </FormSection>
      <FormSection>

        <h3>Tipo de veículo</h3>
        <FormAdTypeContainer>
          <Button
            type={"button"}
            value={"car"}
            name={"car"}
            onClick={(e) => handleAnnounceCategory(e)}
            borderC={"--brand1"}
            backgroundC={"--brand1"}
            fontC={"--grey10"}
            width={"100%"}
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
            width={"100%"}
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
      </FormSection>
      <FormAdTypeContainer>
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
      </FormAdTypeContainer>
    </Container>
  );
}

export default CreateAnnouncementForm;