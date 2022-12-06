import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  AdvertiserContainer,
  BuyButton,
  CommentButton,
  CommentInfo,
  CommentingContainer,
  CommentsContainer,
  DescriptionContainer,
  GalleryContainer,
  InfoContainer,
  LeftColumn,
  MainContainer,
  PhotoContainer,
  RightColumn,
  ShortcutButton,
  SpanContainer,
  StyledForm,
  StyledInput
} from "./styles";
import Carro from "./test.png";
import { useParams } from "react-router-dom";
import { formatName, getInitials } from "../../utils/stringFormaters";
import { useHistory } from "react-router-dom";
import CommentCard from "../../components/CommentCard";
import { useEffect, useRef, useState } from "react";
import UserIconComponent from "../../components/UserIcon";
import { useForm } from "react-hook-form";
import { useApi } from "../../providers/api";


const Product = () => {
  const colors = useRef([
    "var(--random1)",
    "var(--random2)",
    "var(--random3)",
    "var(--random4)",
    "var(--random5)",
    "var(--random6)",
    "var(--random7)",
    "var(--random8)",
    "var(--random9)",
    "var(--random10)",
    "var(--random11)",
    "var(--random12)",
  ]);
  const [comment, setComment] = useState<string>("")

  const params: { id: string } = useParams();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { fetchAnnouncement, announcement, handleCommentPost } = useApi()

  useEffect(() => {
    fetchAnnouncement(params.id)
  }, [])

  const onSubmitFunction = (e: any) => {
    e.preventDefault()
    const data = {message: comment}
    handleCommentPost(data, params.id)
  }

  return (
    <div>
      <Header />
      <MainContainer>
        <div>
          <LeftColumn>
            <PhotoContainer>
              <img src={announcement && announcement.announceCover} alt="carro" />
            </PhotoContainer>
            <InfoContainer>
              <h2>{announcement && announcement.title}</h2>
              <SpanContainer>
                <div>
                  <span>{announcement && announcement.fabricationYear}</span>
                  <span>{announcement && announcement.km} KM</span>
                </div>
                <span>R$ {announcement && announcement.price}</span>
              </SpanContainer>
              <BuyButton>Comprar</BuyButton>
            </InfoContainer>
            <DescriptionContainer>
              <h2>Descrição</h2>
              <p>{announcement && announcement.description}</p>
            </DescriptionContainer>
            <CommentsContainer>
              <h2>Comentários</h2>
              {announcement && announcement.comments.map(item => {
                return <CommentCard key={item.id} colors={colors} data={item} />
              })}
            </CommentsContainer>
            <CommentingContainer>
              <CommentInfo>
                <UserIconComponent height={"32px"} width={"32px"}>
                  {announcement && getInitials(announcement.user.name)}
                </UserIconComponent>
                <h5>{announcement && announcement.user.name}</h5>
              </CommentInfo>
              <StyledForm onSubmit={(e) => onSubmitFunction(e)}>
                <StyledInput value={comment} {...register("message")} onChange={(e) => setComment(e.target.value)} placeholder="Carro muito confortável, foi uma ótima experiência de compra..." ></StyledInput>
                <CommentButton type="submit">Comentar</CommentButton>
                <div className="button-wrapper">
                  <ShortcutButton type="button" onClick={() => setComment("Gostei muito")}>Gostei muito</ShortcutButton>
                  <ShortcutButton type="button" onClick={() => setComment("Incrível")}>Incrível</ShortcutButton>
                  <ShortcutButton type="button" onClick={() => setComment("Recomendarei para meus amigos")}>Recomendarei para meus amigos</ShortcutButton>
                </div>
              </StyledForm>
            </CommentingContainer>
          </LeftColumn>
          <RightColumn>
            <GalleryContainer>
              <h2>Fotos</h2>
              <div>
                <img src={Carro} alt="carro" />
                <img src={Carro} alt="carro" />
                <img src={Carro} alt="carro" />
                <img src={Carro} alt="carro" />
                <img src={Carro} alt="carro" />
                <img src={Carro} alt="carro" />
              </div>
            </GalleryContainer>
            <AdvertiserContainer>
              <UserIconComponent
                height={"100px"}
                width={"100px"}
                fontSize={"36px"}
              >
                {announcement && getInitials(announcement.user.name)}
              </UserIconComponent>
              <h3>{announcement && formatName(announcement.user.name)}</h3>
              <p>{announcement && announcement.user.description}</p>
              <button onClick={() => history.push(`/profile/${announcement!.user.id}`)}>
                Ver todos os anuncios
              </button>
            </AdvertiserContainer>
          </RightColumn>
        </div>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Product;
