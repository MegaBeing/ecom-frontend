import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin-top: 150px;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
`
const Heading = styled.h1`
    font-weight: 400;
    color:#34bde3;
`

export default function NoAuthCart(){
    return(
        <Container>
            <Heading>
                The Cart is Empty
            </Heading>
            <div>
                Please add items to the cart
            </div>
        </Container>
    )
}