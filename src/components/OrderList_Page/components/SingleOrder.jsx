import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonBase } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Button = styled(ButtonBase)`
    width:100%;
`
const OrderContainer = styled.div`
    width: 100%;
    height: 125px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    box-shadow: 0 0 1px gray;
    text-decoration:none;
    color:black;
`
const InfoContainer = styled.div`
    width: 70%;
    height: 100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`
const TextContainer = styled.div`
    width: 60%;
    height: 50%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:start;
`
const Image = styled.img`
    height: 75px;
    width: 75px;
    object-fit:cover;
    border-radius: 10px;
    box-shadow: 0 0 1px gray;
`
const ProductName = styled.div`
    font-size: 20px;
`
const ProductStatus = styled.div`
    font-size: 15px;
    font-weight: 400;
    &.pending{
        color: gray;
    }
    &.in-transit{
        color: #3492eb;
    }
    &.complete{
        color: green;
    }
    &.cancelled{
        color: red;
    }
`
export default function SingleOrder({ orderId, imageUrl, productName, orderStatus }) {
    return (
        <Link to={`/order?id=${orderId}`}>
            <Button>
                <OrderContainer>
                    <InfoContainer>
                        <Image src={imageUrl} />
                        <TextContainer>
                            <ProductName>{productName}</ProductName>
                            <ProductStatus className={orderStatus}>{orderStatus}</ProductStatus>
                        </TextContainer>
                    </InfoContainer>
                    <ArrowRightIcon />
                </OrderContainer>
            </Button>
        </Link>
    );
}