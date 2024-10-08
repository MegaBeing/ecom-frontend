import styled from 'styled-components';
import { Button, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CreateIcon from '@mui/icons-material/Create';
import shadows from '@mui/material/styles/shadows';
const Container = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
`

const CheckContainer = styled.div`
    margin: 5px 10px 5px 10px;
    width: 240px;
    /* background-color: #bdbdbd; */
    border: 1px #bdbdbd solid;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    border-radius: 30px;

    &.active{
        background: #87dd87;
        border:1px darkgreen solid;
        color:darkgreen;
    }
`
const AddressName = styled.div`
    font-size: 18px;
    font-weight: 400;
    margin-left: 10px;
    text-transform: capitalize;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none;
`
const Spacer = styled.div`
    width: 43px;
`
const buttonSx = {
    borderRadius: '20px',
    color: 'gray',
    backgroundColor: 'white',
    width: 'fit-content',
}
export default function CheckedAddress(props) {
    return (
        <Container>
            <CheckContainer className={props.active ? 'active' : undefined} onClick={() => props.setActiveIndex(props.index)}>
                <AddressName>
                    {props.type}
                </AddressName>
                {props.active && <CheckIcon sx={{ marginRight: '10px' }} />}
            </CheckContainer>
            {props.active ? (<IconButton variant='contained' sx={buttonSx} onClick={() => props.setAddChange(true)}>
                <CreateIcon />
            </IconButton>) : (<Spacer />)}
        </Container>
    )
}