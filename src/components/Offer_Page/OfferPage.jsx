import Corousel from "../Home_Page/components/Corousel";
import styled from "styled-components";
import PriceFilter from "./components/PriceFilter";
import { useParams } from "react-router-dom";
import ProductContainer from "../ProductList_Page/components/ProductContainer";
import { Button } from "@mui/material";
import Footer from "../Footer/Footer";
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
            "id": 5,
            "product_name": "Potli",
            "product_category": "Potlis",
            "price": 1299,
            "description": "A potli bag is a traditional Indian drawstring pouch, often made from rich fabrics like silk, velvet, or brocade and embellished with intricate embroidery, beads, or mirror work. These bags are typically small and circular, with a string closure that tightens at the top. Historically used to carry small valuables, potli bags have become popular as stylish accessories for festive occasions, weddings, and parties. Their timeless charm lies in their vibrant designs and cultural significance",
            "previous_price": 5999,
            "dimensions": "12.0x12.0x12.0",
            "color": "Gray",
            "images": [
                {
                    "id": 5,
                    "image": "http://127.0.0.1:8000/media/product_images/Potli_1.jpeg"
                }
            ]
        },
        {
            "id": 6,
            "product_name": "Potli",
            "product_category": "Potlis",
            "price": 2999,
            "description": "A potli bag is a traditional Indian drawstring pouch, often made from rich fabrics like silk, velvet, or brocade and embellished with intricate embroidery, beads, or mirror work. These bags are typically small and circular, with a string closure that tightens at the top. Historically used to carry small valuables, potli bags have become popular as stylish accessories for festive occasions, weddings, and parties. Their timeless charm lies in their vibrant designs and cultural significance",
            "previous_price": 4999,
            "dimensions": "12.0x12.0x12.0",
            "color": "blue",
            "images": [
                {
                    "id": 6,
                    "image": "http://127.0.0.1:8000/media/product_images/Potli_4.jpeg"
                }
            ]
        },
        {
            "id": 7,
            "product_name": "Potli",
            "product_category": "Potlis",
            "price": 3999,
            "description": "A potli bag is a traditional Indian drawstring pouch, often made from rich fabrics like silk, velvet, or brocade and embellished with intricate embroidery, beads, or mirror work. These bags are typically small and circular, with a string closure that tightens at the top. Historically used to carry small valuables, potli bags have become popular as stylish accessories for festive occasions, weddings, and parties. Their timeless charm lies in their vibrant designs and cultural significance",
            "previous_price": 7999,
            "dimensions": "12.0x12.0x12.0",
            "color": "multi",
            "images": [
                {
                    "id": 7,
                    "image": "http://127.0.0.1:8000/media/product_images/Potli_2.jpeg"
                }
            ]
        },
        {
            "id": 8,
            "product_name": "Potli",
            "product_category": "Potlis",
            "price": 1599,
            "description": "A potli bag is a traditional Indian drawstring pouch, often made from rich fabrics like silk, velvet, or brocade and embellished with intricate embroidery, beads, or mirror work. These bags are typically small and circular, with a string closure that tightens at the top. Historically used to carry small valuables, potli bags have become popular as stylish accessories for festive occasions, weddings, and parties. Their timeless charm lies in their vibrant designs and cultural significance",
            "previous_price": 3999,
            "dimensions": "12.0x12.0x12.0",
            "color": "red",
            "images": [
                {
                    "id": 8,
                    "image": "http://127.0.0.1:8000/media/product_images/Popli_3.jpeg"
                }
            ]
        },
    ]
    return (
        <>
            <Spacer height={70} />
            <Corousel imageList={corouselList} />
            <PriceFilter priceList={['500', '1000', '2000']} />
            <Spacer height={10} />
            <ProductContainer products={productList}/>
            <ButtonContainer>
                <Button variant="outlined">
                    more
                </Button>
            </ButtonContainer>
            <Footer marginTop={30}/>
        </>
    )
}
