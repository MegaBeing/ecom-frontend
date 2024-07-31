import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import { tempCatList } from './Category/components/data';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Image = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

export default function Corousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src={tempCatList[0].imageUrl} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={tempCatList[1].imageUrl} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={tempCatList[2].imageUrl} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    )
}