import { createSlice } from "@reduxjs/toolkit";
// const [fields,setFeild] = useState([...periods])
//     const [isActive,setStatus] = useState(false)
//     const [activeBtn,setActive] = useState(0)
//       const [current,setCurrent] = useState(fields[activeBtn]);
//       const [percentage,setPercentage] = useState(100);
//       const [time,setTime] = useState(current.minutes*60);

let PomodoroSlice = createSlice({
  name:"pomodoro",
  initialState:{
    showSettings:false,
    periods:[{type:'sprint',time:25},{type:'short break',time:5},{type:'long break',time:15}],
    isActive:false,
    activeBtn:0,
    current:{type:'sprint',time:25},
    percentage:100,
    time: 25*60,
  },
  reducers:{
    initializer: (state)=>{ console.log('initializing');return{...state,current:state.periods[state.activeBtn],time: state.current.time*60}},
    setActiveBtn: (state,action)=>{console.log('toggledBtn'); return {...state,activeBtn : action.payload}},
    decr: (state)=>{return {...state,time: state.time-1}},
    setStatus: (state,action)=>{console.log('toggled  timer btn');return {...state,isActive: ! state.isActive }},
    setCurrent: (state,action)=>{
      const {curr,i} = action.payload
      return {...state,current:curr,activeBtn:i,time: curr.time*60}
    },
    setShowSettings: (state)=> ({...state,showSettings: !state.showSettings}),
    setPeriods: (state,action)=>{console.log(action.payload);return{...state,periods:[...action.payload]}},
    setPercentage: (state)=>({...state,percentage: (state.time*100)/(state.current.time*60)})
  }
})

export let {setShowSettings,initializer,setActiveBtn,decr,setStatus,setCurrent,setPeriods,setPercentage} = PomodoroSlice.actions;
export default PomodoroSlice.reducer;