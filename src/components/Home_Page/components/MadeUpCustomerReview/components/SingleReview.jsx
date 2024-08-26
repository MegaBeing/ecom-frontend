import styled from "styled-components";
const Container = styled.div`
    border-radius: 10px 10px 0 0;
    box-shadow: 0 2px 3px #cfcfcf;
    width: 400px;
    height: fit-content;
    margin-bottom:40px;
    display: flex;
    padding: 0;
    display:flex;
    flex-direction:column;
    justify-content: start;
    align-items: center;
`
const Image = styled.img`
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 300px;
    object-fit: cover;
`
const Description = styled.div`
    background-image: linear-gradient(45deg,#505c4e,#747873);
    padding:2%;
    height: 50px;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:start;
`
const TitleContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`
const Username = styled.div`
    font-size: 22px;
    color: white;
    font-weight: 400;
`

export default function SingleReview({rating, comment, imageUrl, username}){
    return (
        <Container>
            <Image src={imageUrl} alt="User's Image"/>
            <Description>
                <TitleContainer>
                <Username>
                    {username}
                </Username>
                </TitleContainer>
            </Description>
        </Container>
    )
}