import styled from 'styled-components'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const ItemContainer = styled.div`
width:90%;
padding: 2%;
height: 75px;
display:flex;
flex-direction:row;
justify-content:start;
align-items:center;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 0 5px gray;
`
const InfoButContainer = styled.div`
    width: 100%;
    margin-left: 10px;
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
`
const InfoContainer = styled.div`
    width: 40%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
`
const ItemName = styled.div`

    font-size: 15px;
    font-weight: 100;
`
const PriceContainer = styled.div`
    font-size: 10px;
    font-weight: 300;
`
const ButtonContainer = styled.div`
    background:#cfcfcf;
    border-radius: 10px;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    box-shadow: 0 2px 5px gray;
`
export default function SingleCartItem({ product, itemQuantity, onQuantityChange }) {
    const [quantity, setQuantityState] = useState(parseInt(itemQuantity));
    const updateQuantity = async (action) => {
        const newQuantity = action === 'add' ? quantity + 1 : Math.max(0, quantity - 1);
        
        try {
            const url = action === 'add' 
                ? `${import.meta.env.VITE_API_URL}/user/cart/add-to-cart/`
                : `${import.meta.env.VITE_API_URL}/user/cart/remove-from-cart/`;
            
            const method = action === 'add' ? 'POST' : 'DELETE';
            
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify({ product_id: product.id })
            });

            if (response.ok) {
                setQuantityState(newQuantity);
                onQuantityChange()
                onQuantityChange && onQuantityChange(product.id, newQuantity);
            } else {
                throw new Error(`Failed to ${action} item ${action === 'remove' ? 'from' : 'to'} cart`);
            }
        } catch (error) {
            console.error('Error:', error);
            // Here you could set some state to show an error message to the user
        }
    };

    const subtractQuantity = () => updateQuantity('remove');
    const addQuantity = () => updateQuantity('add');

    return (
        <ItemContainer>
            <Image src={product.images && product.images[0] ? product.images[0].image : 'placeholder-image-url'} />
            <InfoButContainer>
                <InfoContainer>
                    <ItemName>{product.product_name}</ItemName>
                    <PriceContainer>{`₹${product.price}`}</PriceContainer>
                </InfoContainer>
                <ButtonContainer>
                    <IconButton onClick={subtractQuantity} disabled={quantity <= 0}>
                        <RemoveIcon />
                    </IconButton>
                    {quantity}
                    <IconButton onClick={addQuantity}>
                        <AddIcon />
                    </IconButton>
                </ButtonContainer>
            </InfoButContainer>
        </ItemContainer>
    );
}