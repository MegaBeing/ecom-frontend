import styled from "styled-components";
import Section from "./components/Section";
import sectionData from "./data/data";
const Container = styled.div`
    background-image: linear-gradient(80deg, #646464 , #c0c0c0);
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
const AboutTitle = styled.div`
    font-size: 32px;
`
const About = () => {
    return
}
export default function Footer({ position, marginTop }) {

    return (
        <Container position={position} marginTop={marginTop}>
            {sectionData.map((ele, index) => (
                <Section key={index} title={ele.title} linkList={ele.linkList} />
            ))}
        </Container>
    );
}