import styled from "styled-components";
import { Link } from "react-router-dom";
import SingleFlatDisplayComponent from "./components/SingleFlatDisplayComponent";
const ComponentLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    color:black;
`
const Div = styled.div`
    margin-top: 50px;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const ComponentWrapper = styled.div`
    width: 95%;
    display: flex;
    padding:3%;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap:10px;
    border-radius: 10px;
`;
export default function FlatDisplayComponent({ heading, valueList }) {
    const url = import.meta.env.VITE_API_URL;
    return (
        <Div>
            <h1>{heading}</h1>
            <ComponentWrapper>
                {valueList.map((ele) => (
                    <ComponentLink to={`/product/${ele.id}`}>
                        <SingleFlatDisplayComponent
                            key={ele.id}
                            imageUrl={`${url}/${ele.images[0].image}`}
                            imageCaption={ele.product_name}
                            Price={`₹ ${ele.price}`} />
                    </ComponentLink>
                ))}
            </ComponentWrapper>
        </Div>
    );

}