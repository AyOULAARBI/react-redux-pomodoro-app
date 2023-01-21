import { useEffect } from "react";
import { useSelector,useDispatch} from "react-redux";
import { decr,setStatus } from "../config/pomoReducer";
function Clock() {
    let time = useSelector(state=>state.time);
    let isActive = useSelector(state => state.isActive);
    let dispatch = useDispatch();

    console.log(time,isActive)
    useEffect(()=>{
        if(time>0 && isActive){
        let interv = setInterval(()=>{
            dispatch(decr());
            console.log(time,isActive)
        },1000);
        return ()=>clearInterval(interv)
    }
    },[time])
    console.log(time);
    const getTime = ()=>{
    let minutes = Math.floor(time/60)<10?`0${Math.floor(time/60)}`: Math.floor(time/60);
    let seconds = time%60 <10 ? `0${time%60}`:time%60;
    return `${minutes}:${seconds}`;
    }       
  return (
    <>
    <h1>{getTime()}</h1>
    <button onClick={()=>dispatch(setStatus())}>start</button>
    </>
  )
}

export default Clock;