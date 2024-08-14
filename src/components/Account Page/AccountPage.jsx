import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;

const Spacer = styled.div`
    height: ${props => props.height}px;
`
export default function AccountPage() {
    return (
        <Container>
            <Spacer height={50} /> 
        </Container>
    );
}