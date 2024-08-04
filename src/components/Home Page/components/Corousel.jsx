import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
const Image = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

export default function Corousel({imageList}) {
    const url = import.meta.env.VITE_API_URL;    
    if(!imageList) return null;
    return (
        <Carousel>
            {imageList.map((value) => (<Carousel.Item>
                <Image key={value.id} src={`${url}${value.image}`} alt="First slide" />
            </Carousel.Item>))}
        </Carousel>
    )
}