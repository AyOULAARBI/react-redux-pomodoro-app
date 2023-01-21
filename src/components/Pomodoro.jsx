import styled from "styled-components";
import Tags from './Tags';

function Pomodoro() {
  return (
    <Container>
        <h1>Pomodoro</h1>
        <Tags />
        <h2>Timer</h2>
        <h4>Settings</h4>
    </Container>
  )
}

export default Pomodoro;

const Container = styled.div`
 width:100%;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 gap:1rem;
 color: ${(props)=>props.theme.primary};
 background: ${(props)=>props.theme.primary};
`