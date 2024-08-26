import styled from "styled-components";
import SingleProductDisplay from "./SingleProductDisplay";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
`
export default function ProductContainer({ products }) {
    const api_url = import.meta.env.VITE_API_URL;
    return (
        <Container>
            {products.map((ele) => (
                <SingleProductDisplay
                    key={ele.id}
                    id={ele.id}
                    imageUrl={ele.images[0].image}
                    caption={ele.product_name}
                    price={ele.price}
                    previousPrice={ele.previous_price} />
            ))}
        </Container>
    )
}