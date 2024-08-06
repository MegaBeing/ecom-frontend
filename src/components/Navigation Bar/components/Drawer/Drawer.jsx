import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import DehazeIcon from '@mui/icons-material/Dehaze'; // Correct import for the Dehaze icon
import { drawerData, Account } from './data/data';
import DrawerListItem from './components/DrawerListItem.jsx';
export default function NavDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const isAuth = () => {
    const access_token = localStorage.getItem('access_token');
    if(!access_token) return false;
    return true;
  }
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <DrawerListItem label={isAuth()? Account.label : 'SignUp/Login'} icon={Account.icon} href={isAuth() ? Account.href : '/auth'}/>
        <Divider />
        {drawerData.map((ele) => (
          <DrawerListItem key={ele.label} label={ele.label} icon={ele.icon} href={ele.href} trailingIcon={ele.trailingIcon}/>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}><DehazeIcon /></IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
