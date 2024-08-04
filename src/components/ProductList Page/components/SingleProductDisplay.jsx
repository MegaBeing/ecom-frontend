import styled from "styled-components";
import { ButtonBase } from '@mui/material'

const Container = styled.div`
    width: 200px;
    height: 250px;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:start;
    padding:0 2%;
    border-radius: 10px;
    margin: 10px 5px;
`
const Image = styled.img`
    width: 200px;
    height: 150px;
    object-fit:cover;
    border-radius: 30px;
    box-shadow: 0 0 10px gray;
`

const Caption = styled.h3`
    font-weight: 300;
    margin:0;
    font-size: 22px;
    margin-top:10px;
    margin-left: 15px;
`

const NumContainer = styled.div`
width: 80%;
margin-left: 20px;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: end;

`

const PriceContainer = styled.div`
display:flex;
flex-direction:row;
justify-content: start;
align-items:end;
font-size: 15px;
font-weight: 100;
`

const PreviousPrice = styled.span`
    margin-left: 3px;
    font-size: 10px;
    text-decoration: line-through;
`

const Discount = styled.div`
color: green;

`
export default function SingleProductDisplay({ imageUrl, caption, price, previousPrice }) {
    let priceInt = parseInt(price);
    let previousPriceInt = parseInt(previousPrice);
    let discount = Math.round((previousPriceInt - priceInt) / previousPriceInt * 100);
    return (
        <ButtonBase sx={{
            borderRadius: '30px',
            // border:'1px solid black'
        }}>
            <Container>
                <Image src={imageUrl} alt='Product Image' />
                <Caption>{caption}</Caption>
                <NumContainer>
                    <PriceContainer>
                        {`₹ ${price}`}
                        <PreviousPrice>
                            {`₹ ${previousPrice}`}
                        </PreviousPrice>
                    </PriceContainer>
                    <Discount>
                        {`${discount}% off`}
                    </Discount>
                </NumContainer>
            </Container>
        </ButtonBase>
    );
}