import styled from "styled-components"

const Container = styled.div`
    margin-top: 50px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const Title = styled.div`
    width: 100%;
    text-align:center;
    font-size: 35px;
    font-weight: 300;
    color: #ffffff;
    margin-bottom: 10px;
`
const Description = styled.div`
    font-size: 20px;
    color: #e1e0e0;
    width: 95%;
    text-align:center;
`
export default function DescriptionSection({title, description}) {
    return(
        <Container>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
        </Container>
    )
}