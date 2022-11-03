import styled from "styled-components"

interface Props{
  gap: string
}

export const AuctionWrapper = styled.div<Props>`
display: flex;
flex-direction: column;
padding: 0px 10px;
gap: 25px;

@media (min-width: 768px){
  padding: 0px 30px;
}

.auction-title{

  h5{
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  }
}

.auction-list{
  display: flex;
  overflow-x: auto;
  gap: ${props => props.gap};
}
`