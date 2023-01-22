import styled from "styled-components";
import Clock from "./Clock";
import { useSelector } from "react-redux";


function Timer() {
    let percentage = useSelector(state=>state.percentage);
    console.log(percentage)
  return (
    <Container>
        <OuterCerc percentage={percentage}>
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
width:14rem;
height:14rem;
display:flex;
justify-content:center;
align-items:center;
background: conic-gradient(${(props)=> props.theme.colors.primary} ${({percentage})=>percentage}%, transparent 10%);
border-radius:50%;
`
const InnerCerc = styled.div`
width:13rem;
height:13rem;
display:flex;
justify-content:center;
align-items:center;
gap:0.5rem;
flex-direction:column;
background: ${({theme})=>theme.colors.bg};
border-radius:50%;
`