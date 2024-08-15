import styled from "styled-components";
import Status from "./components/Status";
import OrderInfo from "./components/OrderInfo";

const Container = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items: center;
    padding: 2%;
`
const Spacer = styled.div`
    height: ${(props) => (props.height)}px;
`

export default function OrderPage({isAuth}){
    return (<>
        <Container>
            <Spacer height={70}/>
            <Status status='delivered' />
            <Spacer height={10}/>
            <OrderInfo/>
        </Container>
    </>);
}