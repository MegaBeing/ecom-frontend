import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useNavigate } from'react-router-dom'
const textFieldSx = {
    margin: '10px',
}
const Linkcontainer = styled.div`
    width: 110%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default function Login() {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const api_url = import.meta.env.VITE_API_URL
    const navigate = useNavigate()
    const Authenticate = async () => {
        try {
            const body = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }
            const response = await fetch(`${api_url}/user/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }) 

            if(response.status === 200) {
            const data = await response.json()
            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('refresh_token', data.refresh_token)
            navigate('/')
            }
            else{
                alert('User Not Found')
            }
        }
        catch (error) {
            console.error('Error:', error)
        }
    }
    return (
        <>
            <TextField
                inputRef={emailRef}
                sx={textFieldSx}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="text" />
            <TextField
                inputRef={passwordRef}
                sx={textFieldSx}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password" />
            <Linkcontainer>
                <Link to='/signup'>New User</Link>
                <Link to='/forgot-password'>Forgot Password?</Link>
            </Linkcontainer>
            <Button
                sx={{ margin: '20px' }}
                variant="contained"
                onClick={() => Authenticate()}>
                Login
            </Button>
            <Button sx={{ background: 'white', color: 'black' }} variant="contained" color="secondary">
                Sign in using <span style={{ color: '#d13232', marginLeft: '4px' }}> google </span>
            </Button>
        </>
    )
}