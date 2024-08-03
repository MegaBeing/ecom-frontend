import { useState } from 'react';
import styled from 'styled-components';
import { ButtonBase } from '@mui/material';
import Collapse from 'react-bootstrap/Collapse';
import downArrow from '/down-arrow.svg'
const Container = styled.div`
    margin-top: 30px;
`
const DescriptionContainer = styled.div`
    width:100%; 
    display:block;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`
const ButtonContainer = styled.div`
    width:100%; 
    display:flex;
    align-items:center;
    justify-content:start;
    font-size: 10px;
`
const Heading = styled.span`
    font-size: 15px;
    margin-left:10px;
`
const Image = styled.img`
    width:20px;
    height:100%;
    object-fit:scale-down;
    transform: rotate(180deg);
    transition: 200ms ease-in-out transform;

    &.active{
        transform: rotate(0deg)
    }
`
const buttonBaseSx = { width: '100%', display: 'flex', justifyContent: 'space-between' };
function Collapsible({ description }) {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <DescriptionContainer>
                <ButtonContainer>
                    <ButtonBase sx={buttonBaseSx} onClick={() => setOpen(!open)}>
                        <Heading>
                            Description
                        </Heading>
                        <Image src={downArrow} className={open ? 'active' : undefined}/>
                    </ButtonBase>
                </ButtonContainer>
                <Collapse in={open}>
                    <div style={{padding:'2%'}} id="example-collapse-text">
                        {description}
                    </div>
                </Collapse>
            </DescriptionContainer>
        </Container>
    );
}

export default Collapsible;