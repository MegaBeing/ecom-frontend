import styled from "styled-components";
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import NavDrawer from './Drawer/Drawer.jsx';
import { Link } from "react-router-dom";
const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: width 0.2s ease-in-out;
  &.nav-content-enter{
    opacity: 0;
  }
  &.nav-content-enter-active {
    opacity: 1;
    transition: opacity 400ms ease-in-out;
  }
  &.nav-content-exit {
    opacity: 1;
  }
    &.nav-content-exit-active {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }
`;

const Heading = styled.div`
  margin-left: 10px;
  font-weight: 100;
  color: black;
  transition: font-size 0.2s ease-in-out;
`;

export default function NavCont({ search, setSearchState ,visible}) {
  const isAuth = () => {
    const access_token = localStorage.getItem('access_token');
    if(!access_token) return false;
    return true;
  }
  return (<NavContent className='nav-content' style={{width: visible ? '100%' : '90%'}}>
    <NavDrawer />
    <Link to='/' style={{textDecoration: 'none'}}>
    <Heading style = {{fontSize: visible ? '30px' : '10px'}}>BatuaWala</Heading>
    </Link>
    <Stack direction="row" spacing={1}>
      {isAuth() ? <Link to='/cart'>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Link> : null}
      <IconButton color="primary" aria-label="search" onClick={() => setSearchState(!search)}>
        <SearchIcon />
      </IconButton>
    </Stack>
  </NavContent>);
}