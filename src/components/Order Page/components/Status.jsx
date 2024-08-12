import styled from "styled-components";
import ApprovalIcon from '@mui/icons-material/Approval'; // Order Recieved
import AirlinesIcon from '@mui/icons-material/Airlines'; // In-transit
import BeenhereIcon from '@mui/icons-material/Beenhere'; // Delivered
const Container = styled.div`
    width: 100%;
    padding: 5% 10%;
    box-shadow: 0 0 3px gray;
    border-radius: 10px;
`
const SubContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const ProgressBar = styled.div`
    position: relative;
    width: 75px;
    height: 5px;
    background-color: gray;
    border-radius: 5px;
    
    &::before {
        content: '';
        position: absolute;
        height: 5px;
        background-color: #b053fc;
        width: 0;
        border-radius: 5px;
    }
    
    &.in-transit::before {
        width: 0;
        animation: progress_1 2s ease-out forwards;
    }
    
    &.delivered::before {
        width: 0;
        animation: progress_2 2s ease-out 2s forwards;
    }
    
    @keyframes progress_1 {
        0% { width: 0; }
        100% { width: 100%; }
    }
    
    @keyframes progress_2 {
        0% { width: 0; }
        100% { width: 100%; }
    }
`
const IndicatorIcon = styled.div`
    background-color: #c7c5c5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;

    &.ordered {
        animation: pulse 1s ease-out forwards;
    }
    &.in-transit {
        animation: pulse 1s ease-out 2s forwards;
    }
    &.delivered{
     animation: pulse 1s ease-out 4s forwards;
     }
    @keyframes pulse {
    0% { 
    background-color: #c7c5c5;
    }
    100% { 
    background-color: #d096ff;
     }
    }
`


export default function Status({ status }) {
    let progress = 0;
    switch (status) {
        case 'ordered': progress = 1;
            break;
        case 'in-transit': progress = 2;
            break;
        case 'delivered': progress = 3;
            break;
    }
    return (
        
        <Container>
            <SubContainer>
            <IndicatorIcon className={progress >= 1 ? 'ordered' : undefined}>
                <ApprovalIcon sx={{ margin: '15px' }} />
            </IndicatorIcon>

            <ProgressBar className={progress >= 2 ? 'in-transit' : undefined} />

            <IndicatorIcon className={progress >= 2 ? 'in-transit' : undefined}>
                <AirlinesIcon sx={{ margin: '15px' }} />
            </IndicatorIcon>

            <ProgressBar className={progress >= 3 ? 'delivered' : undefined} />

            <IndicatorIcon className={progress == 3 ? 'delivered' : undefined}>
                <BeenhereIcon sx={{ margin: '15px' }} />
            </IndicatorIcon>
            </SubContainer>
        </Container>
    );
}