import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const rotateAnimation = keyframes`
  0% {
    /* transform: rotate(0deg); */
    border-radius: 0;
  }
  50% {
    /* transform:  rotate(360deg); */
    border-radius: 50%;
  }
  100% {
    /* transform: rotate(0deg); */
    border-radius: 0;
  }
`;

const Emoji = styled.span`
  font-size : 30px; line-height: 1; transition: font-size 1s linear; color: ${(props) => props.theme.textColor};
`

const Box = styled.div`
  width: 200px;
  height: 200px;
  display: flex; align-items: center; justify-content: center;
  background-color: tomato;
  animation: ${rotateAnimation} 2s linear infinite;
  &:hover ${Emoji}{font-size:90px;}
  &:active ${Emoji}{color: #fff}
`


function App(){
  return(
    <Wrapper>
      <Box>
        <Emoji>♧</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;