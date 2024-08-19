import { Link } from 'react-router-dom'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`
export default function DrawerListItem({ label, icon, href, trailingIcon }) {

    return (
        <StyledLink to={href}>
            <ListItem key={label} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={label} />
                    {trailingIcon &&
                        <ListItemIcon>
                            {trailingIcon}
                        </ListItemIcon>
                    }
                </ListItemButton>
            </ListItem>
        </StyledLink>
    )
}