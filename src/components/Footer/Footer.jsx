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
    /* height: 500px; */
    border-radius: 30px 30px 0 0 ;
`
export default function Footer() {

    return (
        <Container>
            {sectionData.map((ele, index) => (
                <Section key={index} title={ele.title} linkList={ele.linkList} />
            ))}
        </Container>
    );
}