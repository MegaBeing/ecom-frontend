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
    const [newArrival, setNewArrival] = useState(null);
    useEffect(() => {
        const Data = async () => {
            try {
                const url = import.meta.env.VITE_API_URL;
                const car_response = await fetch(`${url}/offers/images`, { method: 'GET' }); // Response for carousel
                const arr_response = await fetch(`${url}/products/new-arrivals`, { method: 'GET' });
                const car_data = await car_response.json();
                const arr_data = await arr_response.json();
                setOfferState(car_data);
                setNewArrival(arr_data);
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
        <>
            <Spacer height={70}/>
            <Corousel imageList={offer} />
            <Category />
            <Spacer height={20}/>
            <FlatDisplayComponent heading='New Arrivals' valueList={newArrival}/>
            <Spacer height={20}/>
            <CustomerReviewList items={Reviews} />
        </>
    );
}