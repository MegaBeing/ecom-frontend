import styled from "styled-components";
import ProductContainer from "../../../ProductList_Page/components/ProductContainer";
import { useEffect, useState } from "react";
import StaticProductList from "./components/StaticProductList/StaticProductList";
import { Button } from "@mui/material";
const ListContainer = styled.div`
    background-image: linear-gradient(45deg, #e0f5ff, #cfefff);
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius: 30px;
    padding-bottom: 20px;
`
const Title = styled.div`
    font-size: 32px;
    margin-bottom: 20px;
    margin-top: 20px;
`
const StyledButton = styled(Button)`
    margin-top: 10px;
    margin-bottom: 10px;
`
export default function HProductList({ isStatic, Data, link, title }) {
    const [productList, setProductListState] = useState([]);
    if (!isStatic) {
        const DataLoader = async () => {
            try {
                const response = await fetch(link, );
                if (response.ok) {
                    const data = await response.json();
                    const slicedData =  data.slice(0,4)
                    setProductListState(slicedData)
                }
            }
            catch (error) {
                console.error(error);
            }
        }
        useEffect(() => {
            DataLoader();
        },[])
    }
    return (
        <ListContainer>
            <Title>{title}</Title>
            {isStatic ? (<StaticProductList products={Data} />) : (<ProductContainer products={productList} />)}
            {!isStatic && <StyledButton sx={{marginTop:'10px',marginBottom:'10px'}} variant='contained' >view more</StyledButton>}
        </ListContainer>
    )
}