import styled from "styled-components";
import { Link } from "react-router-dom";
const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 20px;
    margin-top: 10px;

`
const Title = styled.div`
    font-size: 36px;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
`
const StyledLink = styled(Link)`
    text-transform: capitalize;
    font-size: 20px;
    position: relative;
    text-decoration: none;
    color: white;
    text-decoration:underline;
    margin-bottom: 5px;
    margin-left: 5px;
`

export default function Section({title, linkList}){
    return(
        <SectionContainer>
            <Title>
                {title}
            </Title>
            {linkList.map((ele,index) => (
                <StyledLink key={index} to={ele.link}>
                    {ele.title}
                </StyledLink>
            ))}
        </SectionContainer>
    )
}