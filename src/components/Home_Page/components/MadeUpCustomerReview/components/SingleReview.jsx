import styled from "styled-components";
import Rating from '@mui/material/Rating';
const Container = styled.div`
    border-radius: 10px 10px 0 0;
    box-shadow: 0 2px 3px #cfcfcf;
    width: 400px;
    height: 450px;
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
    padding:2%;
    height:200px;
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
    justify-content:space-between;
    align-items:center;
`
const Username = styled.div`
    font-size: 22px;
    font-weight: 400;
`
const Comment = styled.div`
    margin-top: 10px;
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
                <Rating name="read-only" value={Math.round(rating)} readOnly />
                </TitleContainer>
                <Comment>
                    " {comment} "
                </Comment>
            </Description>
        </Container>
    )
}