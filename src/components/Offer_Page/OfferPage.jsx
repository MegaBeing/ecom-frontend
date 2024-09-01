import Corousel from "../Home_Page/components/Corousel";
import styled from "styled-components";
import PriceFilter from "./components/PriceFilter";
import { json, useParams } from "react-router-dom";
import ProductContainer from "../ProductList_Page/components/ProductContainer";
import { Button } from "@mui/material";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Loading from "../Loading";
const Spacer = styled.div`
    height: ${props => props.height}px;
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
`
export default function OfferPage() {
    const { id } = useParams();
    const [loading, setLoadingState] = useState(true);
    const [corouselList, setCorouselList] = useState([]);
    const [productList, setProductList] = useState([]);
    const url = import.meta.env.VITE_API_URL;
    const DataLoader = async () => {
        try {
            const response = await fetch(`${url}/offers/${id}`);
            if (response.ok) {
                const data = await response.json();
                let dataImages = data.images;
                setCorouselList(dataImages);
                let dataProduct = data.product;
                let dataProductList = [];
                dataProduct.forEach((value) => {
                    value.product.forEach((val) => {
                        dataProductList.push(val);
                    })
                })
                setProductList(dataProductList);
            }
        }
        catch(error){
            console.error(error)
        }
        finally{
            setLoadingState(false);
        }
    }
    useEffect(() =>{
        DataLoader();
    },[])
    if(loading)
        return <Loading/>
    return (
        <>
            <Spacer height={70} />
            <Corousel imageList={corouselList} />
            <PriceFilter priceList={['500', '1000', '2000']} />
            <Spacer height={10} />
            <ProductContainer products={productList} />
            <ButtonContainer>
                <Button variant="outlined">
                    more
                </Button>
            </ButtonContainer>
            <Footer marginTop={30} />
        </>
    )
}
