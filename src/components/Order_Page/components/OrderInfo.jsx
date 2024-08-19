import styled from "styled-components";
const Container = styled.div`
    width: 100%;
    padding: 5% 10%;
    box-shadow: 0 0 3px gray;
    height:300px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function OrderInfo() {
    return (
        <Container>
            <h1>Information</h1>
        </Container>
    )
}