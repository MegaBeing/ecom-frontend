import styled from "styled-components";

const Container = styled.div`
    height: 125px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f5f5f5;
`
const PriceContainer = styled.div` 
    padding: 2%; 
    height: 70px;
    width: 70px;
    background-image: linear-gradient(45deg, #c7c8c9, #fafbfc);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    border-radius: 10px;
    box-shadow: 0 1px 3px gray;
`
export default function PriceFilter({priceList}){

    return (
        <Container> 
            {priceList.map((price) => (
                <PriceContainer key={price}>
                    <div>Under</div>
                    <div>{`₹${price}`}</div>
                </PriceContainer>
            ))}
        </Container>
    )
}