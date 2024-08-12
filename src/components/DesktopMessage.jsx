import styled from "styled-components";
const Container = styled.div`
    height: 100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const H3 = styled.h3`
    color: #418a06;
`
export default function DesktopMessage(){
    return(
        <Container>
            <h1>
                We are still working on the Desktop site
            </h1>
            <H3>Stay Tuned</H3>
        </Container>
    );
}