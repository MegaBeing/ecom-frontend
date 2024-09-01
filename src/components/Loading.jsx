import styled from "styled-components";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #59595935; */
    z-index: 10000;
`
const Loader = styled.div`
  width: 40px;
  aspect-ratio: 1;
  color: #595858;
  position: relative;
  background:
    conic-gradient(from 134deg at top   ,currentColor 92deg,#0000 0) top,
    conic-gradient(from -46deg at bottom,currentColor 92deg,#0000 0) bottom;
  background-size: 100% 50%;
  background-repeat: no-repeat;

  &::before {
    content:'';
  position: absolute;
  inset: 0;
  --g:currentColor 14.5px,#0000 0 calc(100% - 14.5px),currentColor 0;
  background:
    linear-gradient( 45deg,var(--g)),
    linear-gradient(-45deg,var(--g));
   animation: l7 1.5s infinite cubic-bezier(0.3,1,0,1);
  }

  @keyframes l7 {
    33%  {inset:-10px;transform: rotate(0deg)}
   66%  {inset:-10px;transform: rotate(90deg)}
   100% {inset:0    ;transform: rotate(90deg)}
  }
`;
export default function Loading() {
      return (
            <Container>
                <Loader />
            </Container>
        );
  
}


