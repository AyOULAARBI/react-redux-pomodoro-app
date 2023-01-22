import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { setShowSettings,setPeriods } from "./config/pomoReducer";

function Settings() {
    let periods = useSelector(state=>state.periods);
    let dispatch = useDispatch();
    const handleChange = (e,elmnt)=>{
        let v = e.target.value;
        if(v !==""){
            let periodsCopy = [...periods.map(item=>(item.type===elmnt.type?{...elmnt,time:parseInt(e.target.value)}:item))];
            dispatch(setPeriods(periodsCopy));
        }else{
            let periodsCopy = [...periods.map(item=>(item.type===elmnt.type?{...elmnt,time:0}:item))];
            dispatch(setPeriods(periodsCopy));
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(setShowSettings())
    }
    
  return (
    <Container>
        <form onSubmit={handleSubmit}>
            {
                periods.map((element,index)=>
                <div key={index}>
                    <label>{element.type}:</label>
                    <input type='number' name={element.type} value={element.time} onChange={()=>handleChange(event,element)}/>
                </div>)
            }
            <button type="submit">save</button>

        </form>
    </Container>
  )
}

export default Settings;

const Container = styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items:center;
form{
    display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
}
form >div{
    border: 1px solid ${props=>props.theme.colors.primary};
    border-radius:0.2rem;
    display:flex;
    align-items:center;
    flex-direction:column;
    align-self:flex-start;
    margin-bottom:1.2rem;
    input{
        all:unset;
        text-indent:1rem;
        color:white;
        background-color: ${props=>props.theme.colors.primary};
        border-radius:0.2rem;
        font-size:1.3rem;
        font-weight:bolder;
        margin-top:0.2rem;
    }
}
button{
    all:unset;
    color:white;
    padding:0.6rem 1.1rem;
    font-weight:bold;
    text-align:center;
    font-size:1.4rem;
    border:none;
    border-radius:1rem;
    background-color: ${props=>props.theme.colors.primary};
`