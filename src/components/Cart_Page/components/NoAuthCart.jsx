import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Container = styled.div`
    width: 100%;
    margin-top: 150px;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
`
const Heading = styled.h1`
    font-weight: 400;
    color:#34bde3;
`

export default function NoAuthCart({ isAuth }) {
    return (
        isAuth ? (<Container>
            <Heading>
                The Cart is Empty
            </Heading>
            <div>
                Please add items to the cart
            </div>
        </Container>) : (
                <Container>
                    <Heading>
                        You are not logged in
                    </Heading>
                    <div>
                        Please log in to view your cart
                    </div>
                    <Link to="/auth">
                    <Button
                        sx={{ width: '100%', borderRadius: '30px', marginTop: '20px'  }}
                        variant="contained"
                    >
                        Login / Signup
                    </Button>
                </Link>
                </Container>
                
        )
    )
}