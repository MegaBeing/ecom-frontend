import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef } from 'react'
import { useNavigate } from'react-router-dom'
const textFieldSx = {
    margin: '10px',
}

export default function Signup() {
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const api_url = import.meta.env.VITE_API_URL;

    const authenticate = async () => {
        try {
            const body = {
                first_name: firstNameRef.current.value,
                last_name: lastNameRef.current.value,
                email: emailRef.current.value,
                password: emailRef.current.value,
                username: `${firstNameRef.current.value}_${lastNameRef.current.value}`.toLowerCase(),
            };
            const response = await fetch(`${api_url}/user/signup/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (response.status == 201) {
                const data = await response.json();
                localStorage.setItem('access_token', data.access);
                localStorage.setItem('refresh_token', data.refresh);
                navigate('/');
            } else {
                alert('User already exists');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <TextField
                inputRef={firstNameRef}
                sx={textFieldSx}
                id="outlined-basic"
                label="First Name"
            />
            <TextField
                inputRef={lastNameRef}
                sx={textFieldSx}
                id="outlined-basic"
                label="Last Name"
            />
            <TextField
                inputRef={emailRef}
                sx={textFieldSx}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="text"
            />
            <TextField
                inputRef={passwordRef}
                sx={textFieldSx}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
            />
            <Button
                sx={{ margin: '20px' }}
                variant="contained"
                onClick={authenticate}
            >
                Signup
            </Button>
            <Button sx={{ background: 'white', color: 'black' }} variant="contained" color="secondary">
                Sign in using <span style={{ color: '#d13232', marginLeft: '4px' }}> google </span>
            </Button>
        </>
    );
}