import styled from 'styled-components'

const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 3px gray;
    border-radius: 40px;
    height: 500px;
`
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 25px;
    font-weight: 400;
    text-transform: capitalize;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none;
    border-radius: 30px;
`
const Spacer = styled.div`
    height: ${props => props.height}px;
`
export default function ProfileAddress() {

    return(
        <Container>
            <Header>Address</Header>
            {/* <Spacer height={20} /> */}
        </Container>
    );
}
