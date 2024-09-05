import styled from "styled-components";
import CheckedAddress from "./components/CheckedAddress";
import { useState } from "react";

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
    text-align: center;
    width: 100%;
    font-size: 24px;
    font-weight: 400;
`

const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px; 
`

export default function Address({setAddChange}) {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            active: true,
            address_name: 'home',
            compiled_address: 'tower no. 8, flat no. 003, Nri City (GH-1), Greater Noida, 201310, Uttar Pradesh, India',
            address_line1: 'tower no. 8, flat no. 003 ',
            address_line2: 'Nri City (GH-1)',
            city: 'Greater Noida',
            state: 'Uttar Pradesh',
            pincode: '201310',
            country: 'India'
        },
        {
            id: 2,
            active: false,
            address_name: 'Office',
            compiled_address: 'tower no. 8, flat no. 003, Nri City (GH-1), Greater Noida, 201310, Uttar Pradesh, India',
            address_line1: 'tower no. 8, flat no. 003 ',
            address_line2: 'Nri City (GH-1)',
            city: 'Greater Noida',
            state: 'Uttar Pradesh',
            pincode: '201310',
            country: 'India'
        },
    ]);

    const setActiveIndex = (index) => {
        setAddresses(prevAddresses =>
            prevAddresses.map((address, i) => ({
                ...address,
                active: i === index
            }))
        );
    }

    return (
        <OuterContainer>
            <InnerContainer>
                <Title>
                    Address
                </Title>
                <AddressContainer>
                    {addresses.map((address, index) => (
                        <CheckedAddress
                            key={address.id}
                            setActiveIndex={setActiveIndex}
                            index = {index}
                            setAddChange={setAddChange}
                            {...address}
                        />
                    ))}
                </AddressContainer>
            </InnerContainer>
        </OuterContainer>
    )
}