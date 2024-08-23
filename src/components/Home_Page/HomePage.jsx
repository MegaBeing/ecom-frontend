// imported components
import Corousel from "./components/Corousel";
import Category from "./components/Category/Category";
import FlatDisplayComponent from "./components/FlatDisplay/FlatDisplay";
import Loading from "../Loading";
import CustomerReviewList from "./components/MadeUpCustomerReview/CustomerReviewList";
import { ReviewItems } from "./components/MadeUpCustomerReview/Data/data";
import SingleReview from "./components/MadeUpCustomerReview/components/SingleReview";
// imported hooks or libraries
import { useEffect, useState } from "react";
import styled from 'styled-components'
const Spacer = styled.div`
    height: ${(props) => (props.height)}px;
`
export default function Home() {
    const [offer, setOfferState] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const offerData = async () => {
            try {
                const url = import.meta.env.VITE_API_URL;
                const response = await fetch(`${url}/offers/images`, { method: 'GET' });
                const data = await response.json();
                setOfferState(data);
            } catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false)
            }
        }
        offerData();
    }, []);

    const Reviews = ReviewItems.map(
        (ele,index) => (
            <SingleReview key={index} username={ele.username}  comment={ele.comment} imageUrl={ele.imageUrl} rating={ele.rating}/> 
        )
    )
    console.log(Reviews)
    if (loading)
        return <Loading />;
    return (
        <>
            <Spacer height={70}/>
            <Corousel imageList={offer} />
            <Category />
            <Spacer height={20}/>
            <FlatDisplayComponent heading='New Arrivals' />
            <Spacer height={20}/>
            <CustomerReviewList items={Reviews} />
        </>
    );
}