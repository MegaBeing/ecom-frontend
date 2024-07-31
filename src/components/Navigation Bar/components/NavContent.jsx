import styled from "styled-components";
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import NavDrawer from './Drawer.jsx';
import { Link } from "react-router-dom";
const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

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

const Heading = styled.h1`
  margin-left: 10px;
  font-weight: 100;
`;

export default function NavCont({ search, setSearchState }) {

  return (<NavContent className='nav-content'>
    <NavDrawer />
    <Heading>BatuaWala</Heading>
    <Stack direction="row" spacing={1}>
      <Link to='/cart'>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Link>
      <IconButton color="primary" aria-label="search" onClick={() => setSearchState(!search)}>
        <SearchIcon />
      </IconButton>
    </Stack>
  </NavContent>);
}