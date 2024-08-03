import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
const Image = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

export default function Corousel({imageList}) {
    return (
        <Carousel>
            {imageList.map((ele,index) => (<Carousel.Item>
                <Image key = {index} src={ele.imageUrl} alt="First slide" />
            </Carousel.Item>))}
        </Carousel>
    )
}