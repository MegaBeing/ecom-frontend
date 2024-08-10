import styled from 'styled-components'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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
export default function SingleCartItem({ product, itemQuantity }) {
    itemQuantity = parseInt(itemQuantity)
    const [quantity, setQuantityState] = useState(itemQuantity);
    const SubtractQuantity = async (product_id) => {
        try {
            const body = JSON.stringify({
                'product_id':product_id
            })
            const response = await fetch(`${import.meta.env.VITE_API_URL}/user/cart/remove-from-cart/`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                    },
                    body: body
                })
            if (response.status == 200) {
                setQuantityState(Math.max(1, quantity - 1));
            }
            else {
                throw new Error('Failed to remove item from cart');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }

    }
    const AddQuantity = async (product_id, itemQuan) => {
        try {
            const body = JSON.stringify({
                'product_id':product_id,
                'quantity':itemQuan
            })
            const response = await fetch(`${import.meta.env.VITE_API_URL}/user/cart/add_to_cart/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                    },
                    body:body

                })
            if (response.status == 200) {
                setQuantityState(quantity + 1);
            }
            else {
                throw new Error('Failed to add item to cart');
            }
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <ItemContainer>
            <Image src={product.images[0].image} />
            <InfoButContainer>
                <InfoContainer>
                    <ItemName>
                        {product.product_name}
                    </ItemName>
                    <PriceContainer>
                        {`₹${product.price}`}
                    </PriceContainer>
                </InfoContainer>
                <ButtonContainer>
                    <IconButton onClick={() => SubtractQuantity(product.id)}>
                        <RemoveIcon />
                    </IconButton>
                    {quantity}
                    <IconButton onClick={() => AddQuantity(product.id, quantity)}>
                        <AddIcon />
                    </IconButton>
                </ButtonContainer>
            </InfoButContainer>
        </ItemContainer>
    );
}