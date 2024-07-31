import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Bag1 from '/bags-2-1516379.jpg'; // Your image path
import Bag2 from '/bags2.jpg'
import Bag3 from '/bags3.jpg'
import Bag4 from '/bags4.jpg'
const images = [
   Bag1, 
   Bag2,
   Bag3,
   Bag4,
];

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border: 1
`;

const ImageWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 500ms ease-in;
    &.fade-enter {
        transform: translateX(-100%);
    }
    &.fade-enter-active {
        transform: translateX(0);
        
    }
    &.fade-exit {
        transform: translateX(0);
    }
    &.fade-exit-active {
        transform: translateX(100%);
    }
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Button = styled(IconButton)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }
`;

const ForwardButton = styled(Button)`
    right: -80%;
`;

const BackwardButton = styled(Button)`
    left: 10px;
`;

export default function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <ImageContainer>
            <TransitionGroup component={null}>
                <CSSTransition
                    key={currentImageIndex}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                >
                    <ImageWrapper>
                        <Image src={images[currentImageIndex]} alt="carousel image" />
                    </ImageWrapper>
                </CSSTransition>
            </TransitionGroup>
            <BackwardButton onClick={prevImage}>
                <ArrowBackIosIcon />
            </BackwardButton>
            <ForwardButton onClick={nextImage}>
                <ArrowForwardIosIcon />
            </ForwardButton>
        </ImageContainer>
    );
}
