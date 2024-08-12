import styled from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const CategoryCard = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px gray;
  border-radius: 20px;
`

const ActionContainer = styled(CardActionArea)`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Heading = styled(Typography)`
    margin-top: 10%;
    display:flex;
    justify-content: center;
    align-items: center;
`;
const sx = { width: '80%', 
    height: '50%', 
    objectFit: 'cover', 
    alignItems: 'center', 
    borderRadius: '20px', 
    marginLeft: 'auto', 
    marginRight: 'auto' };
export default function CategoryItem({ category, imageUrl }) {
    return (
        <CategoryCard >
            <ActionContainer >
                <CardMedia
                    component="img"
                    sx={sx}
                    image={imageUrl}
                />
                <CardContent>
                    <Heading gutterBottom variant="h5" component="div">
                        {category}
                    </Heading>
                </CardContent>
            </ActionContainer>
        </CategoryCard>
    );
}