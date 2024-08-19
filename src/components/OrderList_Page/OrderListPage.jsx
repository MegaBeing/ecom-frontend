import { useState, useEffect } from "react";

// Imports
import { tempCatList } from "../../assets/data.js";
import styled from "styled-components";
import SingleOrder from "./components/SingleOrder.jsx";
import Loading from "../Loading.jsx";


const PageContainer = styled.div`
    width: 100%;
    height: fit-content;
    display:block;
`
const Spacer = styled.div`
    height: ${(props) => (props.height)}px;
`

export default function OrderListPage({ isAuth }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); 
    }, []);

    if (!isAuth)
        return <h1>Looks like we don't know you </h1>
    
    if(loading)
        return <Loading/>
    return (
        <>
        <Spacer height={85}/>
        <PageContainer>
            {tempCatList.map((ele) => <SingleOrder
                key={ele.category}
                productName={ele.category}
                imageUrl={ele.imageUrl}
                orderId='1'
                orderStatus='complete'
            />
            )}
        </PageContainer>
        </>
    );
}

