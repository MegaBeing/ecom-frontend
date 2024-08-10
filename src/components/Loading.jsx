import styled from "styled-components";
const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Loader = styled.div`
  width: 70px;
  aspect-ratio: 1;
  background: 
    radial-gradient(farthest-side, #ffa516 90%, #0000) center/16px 16px,
    radial-gradient(farthest-side, green 90%, #0000) bottom/12px 12px;
  background-repeat: no-repeat;
  animation: l17 1s infinite linear;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 8px;
    aspect-ratio: 1;
    inset: auto 0 16px;
    margin: auto;
    background: #ccc;
    border-radius: 50%;
    transform-origin: 50% calc(100% + 10px);
    animation: inherit;
    animation-duration: 0.5s;
  }

  @keyframes l17 {
    100% { transform: rotate(1turn); }
  }
`;

export default function Loading() {
    return (
        <Container>
            <Loader />
        </Container>
    );
}
