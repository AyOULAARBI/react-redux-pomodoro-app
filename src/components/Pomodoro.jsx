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
        <ToggleSettings onClick={()=>dispatch(setShowSettings())}>
          Settings
</ToggleSettings>
        <p>Made by AyOULAARBI</p>
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
 button{
  margin-top:1rem;
 }
 p{
  position:absolute;
  top:95%;
  left:43%;
  font-size:0.9rem;
  color: ${(props)=>props.theme.colors.bg};
background:${(props)=>props.theme.colors.primary};
 }
`
const ToggleSettings = styled.button`
all:unset;
font-size:1.7rem;
cursor:pointer;

color:${(props)=>props.theme.colors.primary};

`