import styled from 'styled-components'
import { ButtonBase } from '@mui/material'
const Base = styled(ButtonBase)`
  width: 100%;
  height: 150px;
  box-shadow: 0 0 5px gray;
`;
const ComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 30px;
  align-items: center;
`
const Image = styled.img`
  width:30%;
  height:60%;
  object-fit:cover;
  margin: 2%;
  border-radius: 30px;
`
const Div = styled.div`
text-align:start;
`
export default function SingleFlatDisplayComponent({imageUrl,imageCaption,Price}){
  return(
    <Base sx={{borderRadius: '30px'}}>
    <ComponentWrapper>
      <Image src={imageUrl} /> 
      <Div>
        <h2>{imageCaption}</h2>
        {Price}
      </Div>
    </ComponentWrapper>
    </Base>
  )
}