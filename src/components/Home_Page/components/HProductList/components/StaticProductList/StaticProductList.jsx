import styled from "styled-components";
import SingleStaticProduct from "./components/SingleStaticProduct";
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items:center;
    row-gap: 14px;
    margin-bottom: 20px;
`

export default function StaticProductList({ products }) {
    return (
        <Container>
            {products.map((ele) => <SingleStaticProduct key={ele.id} {...ele} />)}
        </Container>
    )
}