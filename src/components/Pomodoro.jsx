import styled from "styled-components";
import Tags from './Tags';
import Timer from "./timer/Timer";
import { useDispatch,useSelector } from "react-redux";
import { setShowSettings } from "./config/pomoReducer";
import Settings from "./Settings";

function Pomodoro() {
    let status = useSelector(state=>state.showSettings)
    let dispatch = useDispatch();

  return (
        status?<Settings  />:
    <Container>
        <h2>Pomodoro</h2>
        <Tags />
        <Timer />
        <h4 onClick={()=>dispatch(setShowSettings())}>Settings</h4>
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