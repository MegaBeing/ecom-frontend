import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
  overflow: hidden;
  position: relative;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
  transform: translateX(-${props => props.activeIndex * 100}%);
`;

const CarouselSlide = styled.div`
    min-width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const IndicatorContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
`;

const Indicator = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#000' : '#ccc'};
  margin: 0 5px;
`;

export default function CustomerReviewList({ items }){
  const [activeIndex, setActiveIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeIndex < items.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <CarouselContainer {...handlers}>
      <IndicatorContainer>
        {items.map((_, index) => (
          <Indicator key={index} active={index === activeIndex} />
        ))}
      </IndicatorContainer>
      <CarouselTrack activeIndex={activeIndex}>
        {items.map((item, index) => (
          <CarouselSlide key={index}>
            {item}
          </CarouselSlide>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
};