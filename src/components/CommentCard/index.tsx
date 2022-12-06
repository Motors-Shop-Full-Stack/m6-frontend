import { Container, CommentInfo, UserIcon, CommentBox } from "./styles";
import { handleBackgroundColor } from "../../utils/iconHandlers";
import { useEffect, useState } from "react";
import { getInitials } from "../../utils/stringFormaters";

const CommentCard = ({ colors, data }: any) => {

  const [bg, setBg] = useState<string>('');

  useEffect(() => {
    const bg = handleBackgroundColor(colors);
    setBg(bg);
  }, []);

  return (
    <Container>
      <CommentInfo>
        <UserIcon bg={bg}>{getInitials(data.user.name)}</UserIcon>
        <h5>{data.user.name}</h5>
        <span>Há 3 dias</span>
      </CommentInfo>
      <CommentBox>
        <p>{data.message}</p>
      </CommentBox>
    </Container>
  );
};

export default CommentCard;
