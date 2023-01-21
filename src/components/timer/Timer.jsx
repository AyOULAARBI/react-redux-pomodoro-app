import styled from "styled-components";
import Clock from "./Clock";

function Timer() {
  return (
    <Container>
        <OuterCerc>
            <InnerCerc>
                <Clock/>
            </InnerCerc>
        </OuterCerc>
    </Container>
  )
}

export default Timer;

const Container = styled.div`
 width:190vw;
 display:flex;
 justify-content:center;
 align-items:center;
`
const OuterCerc = styled.div`
width:18rem;
height:18rem;
display:flex;
justify-content:center;
align-items:center;
background: ${({theme})=>theme.colors.primary};
border-radius:50%;
`
const InnerCerc = styled.div`
width:16rem;
height:16rem;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background: ${({theme})=>theme.colors.bg};
border-radius:50%;
`