import styled from "styled-components";
import Tags from './Tags';
import Timer from "./timer/Timer";

function Pomodoro() {
  return (
    <Container>
        <h2>Pomodoro</h2>
        <Tags />
        <Timer />
        <h4>Settings</h4>
    </Container>
  )
}

export default Pomodoro;

const Container = styled.div`
 width:100vw;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 color: ${(props)=>props.theme.primary};
 background: ${(props)=>props.theme.primary};
`