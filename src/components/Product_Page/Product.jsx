import styled from 'styled-components'
import Corousel from '../Home Page/components/Corousel';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import Collapsible from './components/Collapsible';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;
const NameCatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    margin-left: 15px;
    font-size: 13px;
`
const ProductName = styled.h1`
    font-weight: 200;
    font-size: 25px;
    margin: 0;
`
const PriceContainer = styled.div`
    background-color: #d1cdcd;
    padding: 2% 5%;
    font-weight: 400;
    font-size: 20px;
    display:flex;
    justify-content: center;
    align-items:center;
    box-shadow: 0 0 5px gray;
`
const SecondContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const RatingContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
`
const DiscountContainer = styled.div`
    width: 28%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const PreviousPriceContainer = styled.div`
    text-decoration: line-through;
`
const Discount = styled.span`
    color: #009922;
`
const AddToCartButtonContainer = styled.div`
    position:absolute;
    bottom:0px;
    width:100%;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-bottom: 3%;
`
const AddedToCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 90%;
    border-radius: 20px;
    color: green;
    background-color: transparent;
    border: 1px solid green;
`
const Spacer = styled.div`
    height: ${(props) => (props.height)}px;
`

export default function Product() {
    const { id } = useParams();
    const api_url = import.meta.env.VITE_API_URL;
    const [product, setProductsState] = useState({});
    const [addedToCart, setCartState] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        productData();
    }, [id])
    const addToCart = async () => {
        try {
            console.log(id);
            const response = await fetch(`${api_url}/user/cart/add-to-cart/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
                body: JSON.stringify({
                    'product_id': id,
                })
            })
            if (response.ok) {
                setCartState(true)
                // navigate('/cart');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    const productData = async () => {
        try {
            const response = await fetch(`${api_url}/products/${id}`)
            const data = await response.json();
            setProductsState(data);
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <>
            <Spacer height={70} />
            <Corousel imageList={product.images} />
            <TitleContainer>
                <NameCatContainer>
                    <ProductName>
                        {product.product_name}
                    </ProductName>
                    {product.product_category}
                </NameCatContainer>
                <PriceContainer>
                    {`₹${product.price}`}
                </PriceContainer>
            </TitleContainer>
            <SecondContainer>
                <RatingContainer>
                    <Rating name="read-only" value={Math.round(Product.rating)} readOnly />
                    {product.rating}
                </RatingContainer>
                <DiscountContainer>
                    <PreviousPriceContainer>
                        {`₹${product.previous_price}`}
                    </PreviousPriceContainer>
                    <Discount>{Math.round(((product.previous_price - product.price) / product.previous_price) * 100)}% off</Discount>
                </DiscountContainer>
            </SecondContainer>
            <Collapsible description={product.description} />
            <AddToCartButtonContainer>
                {addedToCart ? (<AddedToCart>Added to Cart</AddedToCart> ) :
                    (<Button
                        sx={{ width: '90%', borderRadius: '20px', backgroundColor: 'gray' }}
                        variant='contained'
                        color='primary'
                        onClick={() => addToCart()}>Add To Cart</Button>)}
            </AddToCartButtonContainer>
        </>
    );
}