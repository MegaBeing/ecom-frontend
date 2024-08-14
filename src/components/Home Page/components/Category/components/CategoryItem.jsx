// Libraries
import styled from "styled-components";
import ButtonBase from "@mui/material/ButtonBase";

const StyledButtonBase = styled(ButtonBase)`
    width: 100%;
    height: 600px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`

export default function CategoryItem({ imageUrl , category }) {

    return (
        <StyledButtonBase>
            <Image src={imageUrl}/>
        </StyledButtonBase>
    );
}