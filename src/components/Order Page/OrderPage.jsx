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
    height: 10px;
`

export default function OrderPage({isAuth}){
    return (<>
        <Container>
            <Spacer />
            <Status status='delivered' />
            <Spacer />
            <OrderInfo/>
        </Container>
    </>);
}