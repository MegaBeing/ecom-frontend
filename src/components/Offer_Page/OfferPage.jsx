import Corousel from "../Home_Page/components/Corousel";
import styled from "styled-components";
import PriceFilter from "./components/PriceFilter";
import { useParams } from "react-router-dom";
import ProductContainer from "../ProductList_Page/components/ProductContainer";
import { Button } from "@mui/material";
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
    const corouselList = [{
        "id": 1,
        "image": "http://127.0.0.1:8000/media/None/batua_bag1.jpeg"
    },
    {
        "id": 2,
        "image": "http://127.0.0.1:8000/media/None/BridalBag1.jpg"
    },
    {
        "id": 3,
        "image": "http://127.0.0.1:8000/media/None/carousel_1.jpeg"
    },
    {
        "id": 4,
        "image": "http://127.0.0.1:8000/media/None/first_post.png"
    }]
    const productList = [
        {
            "id": 1,
            "product_name": "Swickon Piglett Clutch",
            "product_category": "Clutch bag",
            "price": 1999,
            "description": "this is the best clutch in the industry",
            "previous_price": 3999,
            "dimensions": "12.0x24.0x12.0",
            "color": "gray",
            "images": [
                {
                    "id": 1,
                    "image": "http://127.0.0.1:8000/media/product_images/bags1_MuI3JPv.jpg"
                }
            ]
        },
        {
            "id": 2,
            "product_name": "Ananya Pandey bag",
            "product_category": "Bridal bag",
            "price": 3999,
            "description": "this is the best bridal bag for consumers weddings",
            "previous_price": 5999,
            "dimensions": "12.0x25.0x23.0",
            "color": "white",
            "images": [
                {
                    "id": 2,
                    "image": "http://127.0.0.1:8000/media/product_images/BridalBag1_prjFSzl.jpg"
                }
            ]
        },
        {
            "id": 3,
            "product_name": "Ravi ki Polti",
            "product_category": "Potlis",
            "price": 799,
            "description": "Ravi ki best material poltli",
            "previous_price": 1299,
            "dimensions": "12.0x24.0x12.0",
            "color": "red",
            "images": [
                {
                    "id": 3,
                    "image": "http://127.0.0.1:8000/media/product_images/potli1_AP6Yfhd.png"
                }
            ]
        },
        {
            "id": 4,
            "product_name": "Swickon Piglett Clutch",
            "product_category": "Clutch bag",
            "price": 1200,
            "description": "this is second",
            "previous_price": 5000,
            "dimensions": "12.0x21.0x12.0",
            "color": "red",
            "images": [
                {
                    "id": 4,
                    "image": "http://127.0.0.1:8000/media/product_images/BridalBag1_dg3Nl0F.jpg"
                }
            ]
        }
    ]
    return (
        <>
            <Spacer height={70} />
            <Corousel imageList={corouselList} />
            <PriceFilter priceList={['500', '1000', '2000']} />
            <Spacer height={10} />
            <ProductContainer products={productList}/>
            <Spacer height={10} />
            <ButtonContainer>
                <Button variant="outlined">
                    load more
                </Button>
            </ButtonContainer>
        </>
    )
}
