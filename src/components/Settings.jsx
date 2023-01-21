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
    <div>
        <form onSubmit={handleSubmit}>
            {
                periods.map((element,index)=>
                <div key={index}>
                    <label>{element.type}</label>
                    <input type='number' name={element.type} value={element.time} onChange={()=>handleChange(event,element)}/>
                </div>)
            }
            <button type="submit">save</button>

        </form>
    </div>
  )
}

export default Settings