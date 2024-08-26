import styled from "styled-components";
import { ButtonBase } from '@mui/material'
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
    text-decoration: none;
    width:fit-content;
    height: fit-content;
    color: black;
`
const Container = styled.div`
    width: 200px;
    height: 275px;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:flex-start;
    padding:0;
    border-radius: 10px;
`
const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit:cover;
    border-radius: 30px 30px 0 0 ;
    border: 1px solid #d9dadb;
`

const Caption = styled.h3`
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 300;
    margin:0;
    font-size: 18px;
    margin-top:10px;
    margin-left: 2px;

`

const NumContainer = styled.div`
    width: 80%;
    margin-left: 2px;
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
    position: relative;

    &:before {
        content: '';
        position: absolute;
        border-top: 1px solid currentColor;
        width: 100%;
        top: 50%;
        left: 0;
    }
`

const Discount = styled.div`
color: green;

`
export default function SingleProductDisplay({ id,imageUrl, caption, price, previousPrice }) {
    let priceInt = parseInt(price);
    const api_url = import.meta.env.VITE_API_URL;
    let previousPriceInt = parseInt(previousPrice);
    let discount = Math.round((previousPriceInt - priceInt) / previousPriceInt * 100);
    const image_url = imageUrl[0] != "h" ? `${api_url}/${imageUrl}` : imageUrl;
    return (
        <StyledLink to={`/product/${id}`}>
            <ButtonBase sx={{
                borderRadius: '30px',
                // border:'1px solid black'
            }}>
                <Container>
                    <Image src={image_url} alt='Product Image' />
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
        </StyledLink>
    );
}