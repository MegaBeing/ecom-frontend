import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const sx = {
    color: 'gray', 
}
export default function BackButton({navigate}) {
    return(
        <IconButton sx = {sx} onClick = {() => navigate(-1)}>
            <ArrowBackIcon />
        </IconButton>
    );
}