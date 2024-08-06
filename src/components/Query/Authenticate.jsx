import styled from "styled-components"
import Login from './Login/Login'
import Signup from './Signup/Signup'
import { useState } from'react'
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledForm = styled.div`
    margin: 20px;
    padding: 10%;
    background-color: white;
    box-shadow: 0 0 5px gray;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;
const ButtonContainerContainer = styled.div`
    position: relative;
    margin-bottom: 10px;
`
const ButtonContainer = styled.div`
    width: 250px;
    font-size: 18px;
    border: 1px gray solid;
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 20px;
`
const ActiveBackground = styled.div`
    position: absolute;
    top: 1px;
    width: 130px;
    height: 40px;
    background-color: #0066ff;
    border-radius: 20px;
    transition: transform 200ms ease-in-out;

    &.signup{
        transform: translateX(120px);
    }
`
const Button = styled.div`
    z-index: 1;
    height: 40px;
    width: 125px;    
    display:flex;
    justify-content: center;
    align-items: center;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    &.active {
    color: white;
    }
`
export default function Authenticate(){
    const [state, setState] = useState(true);
    return (
        <Container>
            <StyledForm>
                <ButtonContainerContainer>
                <ButtonContainer>
                <Button 
                className={state ? 'active' : undefined}
                onClick = {() => setState(true)}>
                    Login
                </Button>
                <Button 
                className={state ? undefined : 'active'} 
                onClick = {() => setState(false)}>
                    Sign Up
                </Button>
                </ButtonContainer>
                <ActiveBackground className={state ? undefined : 'signup'}/>
                </ButtonContainerContainer>
                {state ? <Login /> : <Signup />}
            </StyledForm>
        </Container>
    );
}