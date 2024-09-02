// imported components
import Corousel from "./components/Corousel";
import Category from "./components/Collection/Collection";
import Loading from "../Loading";
import CustomerReviewList from "./components/MadeUpCustomerReview/CustomerReviewList";
import { ReviewItems } from "./components/MadeUpCustomerReview/Data/data";
import SingleReview from "./components/MadeUpCustomerReview/components/SingleReview";
import HProductList from "./components/HProductList/HProductList";
import Footer from "../Footer/Footer";
import { CategoryItemsData } from "../../assets/data";
// imported hooks or libraries
import { useEffect, useState } from "react";
import styled from 'styled-components'
import { Button } from "@mui/material";

const Container = styled.div`
    padding: 0;
    margin: 0;
`
const Spacer = styled.div`
    height: ${(props) => (props.height)}px;
`
const HelpButton = styled.div`
    position: fixed;
    right: 10px;
    bottom: 10px;
`
const Heading = styled.div`
    font-size: 32px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-bottom: 15px;
`

export default function Home() {
    const [offer, setOfferState] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = import.meta.env.VITE_API_URL; 
    useEffect(() => {
        const Data = async () => {
            try {
                const url = import.meta.env.VITE_API_URL;
                const car_response = await fetch(`${url}/offers/images`, { method: 'GET' }); // Response for carousel
                const car_data = await car_response.json();
                setOfferState(car_data);
            } catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false)
            }
        }
        Data();
    }, []);

    const Reviews = ReviewItems.map(
        (ele,index) => (
            <SingleReview key={index} username={ele.username}  comment={ele.comment} imageUrl={ele.imageUrl} rating={ele.rating}/> 
        )
    )
    // console.log(Reviews)
    if (loading)
        return <Loading />;
    return (
        <Container>
            <Spacer height={70}/>
            <Corousel imageList={offer} isOffer={true}/>
            <HProductList isStatic={true} Data={CategoryItemsData} title='Shop By Category' className='category'/>
            <Category />
            <Spacer height={20}/>
            {/* <FlatDisplayComponent heading='New Arrivals' valueList={newArrival}/> */}
            <Spacer height={20}/>
            <HProductList isStatic={false} link={`${url}/products/filter/?is_exclusive=True`} title='New Arrivals'/>
            <Spacer height={20}/>
            <Heading>Wall Of Fame</Heading>
            <CustomerReviewList items={Reviews} />
            <Spacer height={20}/>
            <HProductList isStatic={false} link={`${url}/products/filter/?is_best_seller=True`} title='Best Sellers'/>
            <Footer position='static' margin_top={50}/>
            <HelpButton>
                <Button sx={{borderRadius: '15px'}}variant='contained'> help ?</Button>
            </HelpButton>
        </Container>
    );
}