import styled from 'styled-components'
import SingleCartItem from './components/SingleCartItem';
import { Button } from '@mui/material';
import { CSSTransition } from 'react-transition-group'
import { useEffect, useState } from 'react';
import NoAuthCart from './components/NoAuthCart';
import Address from '../Query/Address/Address';
import CartTotal from './components/CartTotal';
import AddressChanger from '../Query/Address/AddressChanger.jsx';
const CartContainer = styled.div`
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    width:100%;
    height: 400px;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;
    overflow: scroll;
`
const Title = styled.div`
    width:100%;
    text-align:center;
    font-size: 32px;
    font-weight: 32px;
    color: #0175c3;
`
const ButtonContainer = styled.div`
    box-shadow: 0 -2px 5px gray;
    border-radius: 20px 20px 0 0 ;
    padding: 5% 0;
    background-color: #fffefe;
    position:absolute;
    bottom: 0;
    width:100%;
    margin-top: 30px;
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Spacer = styled.div`
    height: ${props => (props.height)}px;
`
export default function CartPage({ isAuth }) {
    const api_url = import.meta.env.VITE_API_URL;
    const [cartList, setCartList] = useState([]);
    const [billing, setBilling] = useState([]);
    const [addchange, setAddChange] = useState(false);
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
                let bill = [{
                    'key': 'Total Amount',
                    'value': `₹ ${data[0].total_amount}`
                }]
                setBilling(bill);
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
                <Spacer height={100} />
                <Title>My Cart</Title>
                <Spacer height={50} />
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
                <Spacer height={30} />
                <CartTotal elements={billing} />
                <ButtonContainer>
                    <Address setAddChange={setAddChange} />
                    <Spacer height={20} />
                    <Button
                        sx={{ width: '90%', borderRadius: '30px' }}
                        variant="contained"
                    >
                        pay {`₹${cartList.total_amount}`}
                    </Button>
                </ButtonContainer>
                <CSSTransition in={addchange} timeout={200} classNames='address-adder' unmountOnExit>
                    <AddressChanger setAddChange={setAddChange} />
                </CSSTransition>
            </>
        ) : (
            <>
                <Spacer height={70} />
                <NoAuthCart isAuth={isAuth} />
            </>
        )
    );
}