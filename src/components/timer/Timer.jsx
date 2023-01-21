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
width:18rem;
height:18rem;
display:flex;
justify-content:center;
align-items:center;
background: conic-gradient(${(props)=> props.theme.colors.primary} ${({percentage})=>percentage}%, transparent 10%);
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