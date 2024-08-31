import styled from "styled-components";
import { Link } from "react-router-dom";
const SectionContainer = styled.div`
    width: 43%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const Title = styled.div`
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 5px;
    color: #ffffff;
    text-transform: uppercase;
`
const StyledLink = styled(Link)`
    text-transform: capitalize;
    font-size: 20px;
    position: relative;
    text-decoration: none;
    color: #cacaca;
    /* text-decoration:underline; */
    /* margin-left: 10px; */
`
export default function LinkSection({ title, linkList }) {
    return (
        <SectionContainer>
            <Title>
                {title}
            </Title>
            {
                linkList.map((ele, index) => (
                    <StyledLink key={index} to={ele.link}>
                        {ele.title}
                    </StyledLink>
                ))
            }
        </SectionContainer>
    )
}