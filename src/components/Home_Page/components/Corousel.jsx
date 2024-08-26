import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Image = styled.img`
  margin:2% 0;
  box-shadow: 0 0 5px gray;
  width: 100%;
  height: 400px;
  border-radius:20px;
  object-fit: cover;
`;

export default function Corousel({ imageList }) {
  const navigate = useNavigate();
  if (!imageList) return null;

  return (
    <Carousel>
      {imageList.map((value) => (
        <Carousel.Item
          style={{ borderRadius: '40px' }}
          key={value.id}
        >
          <Image src={value.image} alt="Slide" onClick={() => navigate(`/offer/${value.id}`)
          } />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
