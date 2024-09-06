import styled from "styled-components";
import CheckedAddress from "./components/CheckedAddress";


const OuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const InnerContainer = styled.div`
    width: 90%;
    box-shadow: 0 0 3px gray;
    border-radius: 10px;
`

const Title = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    width: 100%;
    font-size: 24px;
    font-weight: 400;
`

const AddressContainer = styled.div`
    display: flex;
    width:100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px; 
    overflow: scroll;
`

export default function Address({setAddChange, addresses, activeIndex, setActiveIndex}) {
    return (
        <OuterContainer>
            <InnerContainer>
                <Title>
                    Address
                </Title>
                <AddressContainer>
                    {addresses.map((address,index) => (
                        <CheckedAddress
                            key={address.id}
                            id ={address.id}
                            index={index}
                            setActiveIndex={setActiveIndex}
                            active = {index === activeIndex}
                            setAddChange={setAddChange}
                            type = {address.type}
                        />
                    ))}
                </AddressContainer>
            </InnerContainer>
        </OuterContainer>
    )
}