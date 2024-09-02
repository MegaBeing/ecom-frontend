import styled from 'styled-components'
import SingleCartItem from './components/SingleCartItem';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import NoAuthCart from './components/NoAuthCart';
const CartContainer = styled.div`
    margin-top: 30px;
    width:100%;
    height: fit-content;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const ButtonContainer = styled.div`
    margin-top: 30px;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Spacer = styled.div`
    height: ${(props) => (props.height)}px;
`
export default function CartPage({ isAuth }) {
    const api_url = import.meta.env.VITE_API_URL;
    const [cartList, setCartList] = useState([]);
    const cartData = async () => {
        try {
            const response = await fetch(`${api_url}/user/cart`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setCartList(data[0]);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        cartData();
    }, []);

    return (
        (isAuth && cartList && cartList.length != 0 && cartList.cart_items.length != 0) ? (
            <>
                <Spacer height={70} />
                <CartContainer>
                    {cartList.cart_items.map((ele) => (
                        <SingleCartItem
                            key={ele.id}
                            itemQuantity={ele.quantity}
                            product={ele.product}
                            onQuantityChange={cartData}
                        />
                    ))}
                </CartContainer>
                <ButtonContainer>
                    <Button
                        sx={{ width: '90%', borderRadius: '30px' }}
                        variant="contained"
                    >
                        Checkout
                    </Button>
                </ButtonContainer>
            </>
        ) : (
            <>
                <Spacer height={70} />
                <NoAuthCart isAuth={isAuth} />
            </>
        )
    );
}