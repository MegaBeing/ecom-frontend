import { TextField } from '@mui/material';
import Search from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
export default function InputField({}) {
    return (
        <TextField style={{ backgroundColor: "white", marginRight: '10px' }}
            id="search" label="Search" variant="outlined"
             />
    )
}