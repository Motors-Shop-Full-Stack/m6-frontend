import { Container, CommentInfo, UserIcon, CommentBox } from "./styles";
import { handleBackgroundColor } from "../../utils/iconHandlers";
import { useEffect, useState } from "react";
const CommentCard = ({ colors }: any) => {
  const [bg, setBg] = useState<string>('');
  useEffect(() => {
    const bg = handleBackgroundColor(colors);
    setBg(bg);
  }, []);

  return (
    <Container>
      <CommentInfo>
        <UserIcon bg={bg}>JL</UserIcon>
        <h5>Júlia Lima</h5>
        <span>Há 3 dias</span>
      </CommentInfo>
      <CommentBox>
        <p>Lorem ipsum blah blah blah</p>
      </CommentBox>
    </Container>
  );
};

export default CommentCard;
