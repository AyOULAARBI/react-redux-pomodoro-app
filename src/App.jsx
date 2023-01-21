import styled,{createGlobalStyle,ThemeProvider} from "styled-components";
import Pomodoro from "./components/Pomodoro";
import { Provider } from "react-redux";
import store from './components/config/pomoStore';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
};
body,html{
  color: ${(props)=> props.theme.colors.primary};
  background-color: ${(props)=> props.theme.colors.bg};
  font-size:1.5rem;
};
`
const  theme = {
    colors:{
      primary: "#83BCA9",
      secondary: "coral",
      bg:"#282B28",
    },
}

function App() {
  return (
    
    <ThemeProvider theme={theme} >
      <GlobalStyle/>
      <Provider store={store}>
        <Pomodoro/>
      </Provider>
      
    </ThemeProvider>
    

  )
}

export default App
