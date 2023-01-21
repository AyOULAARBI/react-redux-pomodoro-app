import styled, { css } from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { setActiveBtn } from "./config/pomoReducer";


function Tags() {
    
    let tags = useSelector(state=> state.periods);
    let activeBtn = useSelector(state=>state.activeBtn)
    const dispatch = useDispatch();

    const handleClick = (index)=>{
        dispatch(setActiveBtn(index));
    }
  return (
    <TagsContainer>
        {tags.map((tag,index)=><TagBtn key={index} onClick={()=>handleClick(index)} isActive={activeBtn===index}>{tag.type}</TagBtn>)}
    </TagsContainer>
  )
}

export default Tags;

const TagsContainer = styled.div`
background-color: #272727;
height:3.5rem;
width:45vw;
margin:0 auto;
border-radius:1rem;
display:flex;
justify-content:space-between;
align-items:center;
`

const TagBtn = styled.button`
  all:unset;
  color:white;
  font-weight:bolder;
  width:26vw;
  margin:auto 3px;
  padding:5px 12px;
  text-align:center;
  font-size:1.1rem;
  border:none;
  border-radius:1rem;
  ${({isActive})=>
  isActive && css`
    background-color: ${props=>props.theme.colors.primary};
  `
}
`