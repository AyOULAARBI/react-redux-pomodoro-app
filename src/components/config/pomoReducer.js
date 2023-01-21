import { createSlice } from "@reduxjs/toolkit";
// const [fields,setFeild] = useState([...periods])
//     const [isActive,setStatus] = useState(false)
//     const [activeBtn,setActive] = useState(0)
//       const [current,setCurrent] = useState(fields[activeBtn]);
//       const [percentage,setPercentage] = useState(100);
//       const [time,setTime] = useState(current.minutes*60);
let initialState ={
  periods:[{type:'sprint',time:25},{type:'short break',time:5},{type:'long break',time:15}],
  isActive:false,
  activeBtn:0,
  get current(){return this.periods[this.activeBtn]},
  percentage:100,
  get time(){return this.current.time * 60},
}
let PomodoroSlice = createSlice({
  name:"pomodoro",
  initialState:initialState,
  reducers:{
    setActiveBtn: (state,action)=> ({...state,activeBtn : action.payload}),
    decr: (state)=> ({...state,time: 2}),
    setStatus: (state)=>({...state,isActive: ! state.isActive }),
  }
})

export let {setActiveBtn,decr,setStatus} = PomodoroSlice.actions;
export default PomodoroSlice.reducer;