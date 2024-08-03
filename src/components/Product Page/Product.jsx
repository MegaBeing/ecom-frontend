import styled from 'styled-components'
import { tempCatList } from '../../assets/data';
import Corousel from '../Home Page/components/Corousel';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import Collapsible from './components/Collapsible';
const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;
const NameCatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    margin-left: 15px;
    font-size: 13px;
`
const ProductName = styled.h1`
    font-weight: 200;
    font-size: 25px;
    margin: 0;
`
const PriceContainer = styled.div`
    background-color: #d1cdcd;
    padding: 2% 5%;
    font-weight: 400;
    font-size: 20px;
    display:flex;
    justify-content: center;
    align-items:center;
    box-shadow: 0 0 5px gray;
`
const SecondContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const RatingContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
`
const DiscountContainer = styled.div`
    width: 28%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const PreviousPriceContainer = styled.div`
    text-decoration: line-through;
`
const Discount = styled.span`
    color: #009922;
`
const AddToCartButtonContainer = styled.div`
    position:fixed;
    bottom:0px;
    width:100%;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-bottom: 3%;
`
export default function Product({ product_id }) {
    const Product = {
        id: product_id,
        name: 'Brown Clutch',
        price: '₹999',
        previous_price: '₹1200',
        category: tempCatList[0].category,
        rating: 3.5,
        description: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.`,
    }
    const price_num = parseInt(Product.price.slice(1, Product.price.length));
    const previous_price_num = parseInt(Product.previous_price.slice(1, Product.previous_price.length))
    return (
        <>
            <Corousel imageList={tempCatList} />
            <TitleContainer>
                <NameCatContainer>
                    <ProductName>
                        {Product.name}
                    </ProductName>
                    {Product.category}
                </NameCatContainer>
                <PriceContainer>
                    {Product.price}
                </PriceContainer>
            </TitleContainer>
            <SecondContainer>
                <RatingContainer>
                    <Rating name="read-only" value={Math.round(Product.rating)} readOnly />
                    {Product.rating}
                </RatingContainer>
                <DiscountContainer>
                    <PreviousPriceContainer>
                        {Product.previous_price}
                    </PreviousPriceContainer>
                    <Discount>{Math.round(((previous_price_num - price_num) / previous_price_num) * 100)}% off</Discount>
                </DiscountContainer>
            </SecondContainer>
            <Collapsible description={Product.description} />
            <AddToCartButtonContainer>
                <Button sx={{width:'90%',borderRadius:'20px',backgroundColor:'gray'}} variant='contained' color='primary'>Add To Cart</Button>
            </AddToCartButtonContainer>
        </>
    );
}