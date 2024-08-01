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
export default function SingleCartItem({ imageUrl, itemName, itemPrice, itemQuantity }) {
    itemQuantity = parseInt(itemQuantity)
    const [quantity, setQuantityState] = useState(itemQuantity);
    const SubtractQuantity = () => {
        setQuantityState(Math.max(1, quantity - 1));
    }
    const AddQuantity = () => {
        setQuantityState(quantity + 1);
    }
    return (
        <ItemContainer>
            <Image src={imageUrl} />
            <InfoButContainer>
                <InfoContainer>
                    <ItemName>
                        {itemName}
                    </ItemName>
                    <PriceContainer>
                        {itemPrice}
                    </PriceContainer>
                </InfoContainer>
                <ButtonContainer>
                    <IconButton onClick={() => SubtractQuantity()}>
                        <RemoveIcon />
                    </IconButton>
                    {quantity}
                    <IconButton onClick={() => AddQuantity()}>
                        <AddIcon />
                    </IconButton>
                </ButtonContainer>
            </InfoButContainer>
        </ItemContainer>
    );
}