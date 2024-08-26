import styled from "styled-components";

import ProductContainer from "../../../ProductList_Page/components/ProductContainer";

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
export default function HProductList({link, title}){
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
                    "image": "/media/product_images/bags1_MuI3JPv.jpg"
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
                    "image": "/media/product_images/BridalBag1_prjFSzl.jpg"
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
                    "image": "/media/product_images/potli1_AP6Yfhd.png"
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
                    "image": "/media/product_images/BridalBag1_dg3Nl0F.jpg"
                }
            ]
        }
    ];

    return (
        <ListContainer>
            <Title>{title}</Title>
            <ProductContainer products={productList} />
        </ListContainer>
    )
}