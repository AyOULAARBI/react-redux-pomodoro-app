import styled from "styled-components";
import { useEffect } from "react";
import { useSelector,useDispatch} from "react-redux";
import {initializer,setPercentage, decr,setStatus } from "../config/pomoReducer";
function Clock() {
    let time = useSelector(state=>state.time);
    let isActive = useSelector(state => state.isActive);
    let activeBtn = useSelector(state=>state.activeBtn);
    let current = useSelector(state=>state.current);

    let dispatch = useDispatch();
    
    useEffect(()=>{
        if(time>0 && isActive){
        let interv = setInterval(()=>{
            dispatch(decr());
            dispatch(setPercentage())
        },1000);
        return ()=>clearInterval(interv)
    }
    },[activeBtn,current,time,isActive])
    const getTime = ()=>{
    let minutes = Math.floor(time/60)<10?`0${Math.floor(time/60)}`: Math.floor(time/60);
    let seconds = time%60 <10 ? `0${time%60}`:time%60;
    return `${minutes}:${seconds}`;
    }       
  return (
    <>
    <h1>{getTime()}</h1>
    <span>
    {!isActive ?<Btn onClick={()=>dispatch(setStatus())}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
  </svg>
  </Btn>:
        <Btn onClick={()=>dispatch(setStatus())}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

</Btn>}
<Btn onClick={()=>dispatch(initializer())}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
</Btn>
</span>
    </>
  )
}

export default Clock;

const Btn = styled.button`
all:unset;
color: ${props=>props.theme.colors.primary};
width:3rem;
`