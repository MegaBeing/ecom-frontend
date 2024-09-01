import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
    height:fit-content;
    width:fit-content;
`
const Image = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 4px 5px gray;
`

export default function SingleStaticProduct({id, product_name, imageUrl}){
    const url = import.meta.env.VITE_API_URL;
    const IMAGE = url + imageUrl;
    const listUrl = `/product-list?category=${product_name}`
    return (
        <StyledLink to={listUrl}>
            <Image src={IMAGE}/>
        </StyledLink>
    )
    
}
