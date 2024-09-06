import styled from "styled-components"
import { Button, TextField } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useRef, useState } from "react";
const OuterContainer = styled.div`
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    position: absolute;
    background-color: #000000b3;
    top:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:100;
`
const InnerContainer = styled.div`
    width: 85%;
    height: 70%;
    background-color: white;
    display:flex;
    justify-content:flex-start;
    flex-direction: column;
    align-items:center;
    border-radius: 20px;
    box-shadow: 0 0 8px black;
    padding: 2%;
    
`
const CloseButtonContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Spacer = styled.div`
    height: ${props => props.height}px;
`
const FormHeading = styled.div`
    font-size: 18px;
    font-weight: 500;
`
const TwoFields = styled.div`
    display:flex;
    width:90%;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
`
export default function AddressForm({ setAddChange, addresses, activeIndex }) {
    const billing_address_name_ref = useRef('test')
    const billing_address_phone_ref = useRef('test')
    const address_line1_ref = useRef('test')
    const address_line2_ref = useRef('test')
    const city_ref = useRef('test')
    const state_ref = useRef('test')
    const country_ref = useRef('test')
    const pincode_ref = useRef('test')
    let fields = [
        {
            'actual': 'billing_address_name',
            'display': 'Name *',
            'ref': billing_address_name_ref
        },
        {
            'actual': 'billing_address_phone',
            'display': 'Phone *',
            'ref': billing_address_phone_ref
        },
        {
            'actual': 'address_line1',
            'display': 'Line 1 *',
            'ref': address_line1_ref
        },
        {
            'actual': 'address_line2',
            'display': 'Line 2',
            'ref': address_line2_ref
        },
        {
            'actual': 'city',
            'display': 'City *',
            'ref': city_ref
        },
        {
            'actual': 'state',
            'display': 'State *',
            'ref': state_ref
        },
        {
            'actual': 'country',
            'display': 'Country *',
            'ref': country_ref
        },
        {
            'actual': 'pincode',
            'display': 'Pincode *',
            'ref': pincode_ref
        },
    ];
    let addressTypes = [
        {
            actual: 'home',
            display: 'Home'
        },
        {
            actual: 'office',
            display: 'Office'
        }
    ]
    useEffect(() => {
        // console.log('in_use_effect')
        fields.forEach((element) => {
            // console.log(addresses[activeIndex][`${element.actual}`])
            if (addresses[activeIndex][`${element.actual}`] !== null) {
                element.ref.current.value = addresses[activeIndex][`${element.actual}`]
            }
            // console.log(element.ref.current.value)
        })
    }, [])
    return (
        <OuterContainer>
            <InnerContainer>
                <Spacer height={10} />
                <CloseButtonContainer>
                    <IconButton onClick={() => setAddChange(false)}>
                        <CloseIcon />
                    </IconButton>
                    <TextField
                        sx={{ marginRight: '20px' }}
                        id="outlined-select-currency"
                        variant='standard'
                        select
                        defaultValue={addresses[activeIndex].type}
                        helperText="Type of Address"
                    >
                        {addressTypes.map((option) => (
                            <MenuItem key={option.actual} value={option.actual}>
                                {option.display}
                            </MenuItem>
                        ))}
                    </TextField>
                </CloseButtonContainer>
                <Spacer height={30} />
                <TextField inputRef={fields[0].ref} label={fields[0].display} variant="standard" sx={{ width: '90%' }} />
                <Spacer height={30} />
                <TextField inputRef={fields[1].ref} label={fields[1].display} variant="standard" sx={{ width: '90%' }} />
                <Spacer height={30} />
                <FormHeading>Address</FormHeading>
                <Spacer height={30} />
                <TextField inputRef={fields[2].ref} label={fields[2].display} variant="standard" sx={{ width: '90%' }} />
                <Spacer height={30} />
                <TextField inputRef={fields[3].ref} label={fields[3].display} variant="standard" sx={{ width: '90%' }} />
                <Spacer height={30} />
                <TwoFields>
                    <TextField inputRef={fields[4].ref} label={fields[4].display} variant='standard' sx={{ width: '40%' }} />
                    <TextField inputRef={fields[5].ref} label={fields[5].display} variant='standard' sx={{ width: '40%' }} />
                </TwoFields>
                <Spacer height={30} />
                <TwoFields>
                    <TextField inputRef={fields[6].ref} label={fields[6].display} variant='standard' sx={{ width: '40%' }} />
                    <TextField inputRef={fields[7].ref} label={fields[7].display} variant='standard' sx={{ width: '40%' }} />
                </TwoFields>
                <Spacer height={80} />
                <Button variant="contained">Submit</Button>
            </InnerContainer>
        </OuterContainer>
    );
}