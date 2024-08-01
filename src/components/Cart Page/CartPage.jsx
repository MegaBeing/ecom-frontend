import styled from 'styled-components'
import { tempCatList } from '../../assets/data';
import SingleCartItem from './components/SingleCartItem';
import { Button } from '@mui/material';
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
export default function CartPage() {
    return (
        <>
            <CartContainer>
                {tempCatList.map((ele, index) => (<SingleCartItem
                    key={index}
                    itemQuantity="1"
                    itemPrice='₹999'
                    itemName={ele.category}
                    imageUrl={ele.imageUrl}
                />))}
            </CartContainer>
            <ButtonContainer>
                <Button sx={{ width: '90%',borderRadius: '30px' }} variant="contained">Checkout</Button>
            </ButtonContainer>
        </>
    );
}