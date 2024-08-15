import styled from "styled-components";
import AccountHeader from "./components/AccountHeader";
import ProfileAddress from "./components/ProfileAddress";
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
            <Spacer height={90} /> 
            <AccountHeader />
            <Spacer height={20} />
            <ProfileAddress /> 
        </Container>
    );
}