import Corousel from "./components/Corousel";
import Category from "./components/Category/Category";
import FlatDisplayComponent from "./components/FlatDisplay/FlatDisplay";
import { useEffect, useState } from "react";
export default function Home() {
    const [offer, setOfferState] = useState(null);
    useEffect(() => {
        offerData();
    },[])

    const offerData = async () => {
        try{
            const url = import.meta.env.VITE_API_URL;
            const response = await fetch(`${url}/offers/images`,{method: 'GET'});
            const data = await response.json();
            setOfferState(data);
        } catch(error){
            console.error(error);
        }
    }
    return (
    <>
        <Corousel imageList={offer}/> 
        <Category />
        <FlatDisplayComponent/>
    </>        
    );
}