import { Container, CommentInfo, UserIcon, CommentBox } from "./styles";
import {handleBackgroundColor} from "../../utils/iconHandlers"
const CommentCard = ({colors}: any) => {

  const bg = handleBackgroundColor(colors)

  return <Container>
    <CommentInfo>
        <UserIcon bg={bg}>JL</UserIcon>
        <h5>Júlia Lima</h5>
        <span>Há 3 dias</span>
    </CommentInfo>
    <CommentBox>
      <p>Lorem ipsum blah blah blah</p>
    </CommentBox>
  </Container>;
};

export default CommentCard;
