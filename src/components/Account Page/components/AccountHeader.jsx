// Libraries
import styled from "styled-components";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 2% 5%;
    box-shadow: 0 0 3px gray;
    border-radius: 40px;
`;

const AccountIconSx = {
    width: '75px',
    height: '75px',
    color: 'gray', 
};
const Header = styled.div`
    font-size: 25px;
    margin-left: 10px;
    font-weight: 400;
    text-transform: Capitalize;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; 
`
export default function AccountHeader() {
    return (
        <Container>
            <AccountBoxIcon sx = {AccountIconSx}/> 
            <Header>Name</Header>
        </Container>
    );

}