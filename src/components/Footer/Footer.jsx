import styled from "styled-components";
import LinkSection from "./components/LinkSection";
import {sectionData, descriptionData }from "./data/data";
import DescriptionSection from "./components/DescriptionSection";
const Container = styled.div`
    background-image: linear-gradient(80deg, #6c8b9a ,  #2e5060);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin-top: ${props => props.marginTop}px;
    position: ${props => props.position};
    bottom: 0;
    /* height: 500px; */
    border-radius: 30px 30px 0 0 ;
`

export default function Footer({ position, marginTop }) {

    return (
        <Container position={position} marginTop={marginTop}>
            <DescriptionSection title = {descriptionData.title} description={descriptionData.description}/>
            {sectionData.map((ele, index) => (
                <LinkSection key={index} title={ele.title} linkList={ele.linkList} />
            ))}
        </Container>
    );
}