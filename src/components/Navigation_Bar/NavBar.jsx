import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import InputField from './components/InputField';
import { CSSTransition } from 'react-transition-group';
import { useRef, useEffect, useState } from 'react';
import NavCont from './components/NavContent';
import { IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #e6e6e6;
  box-shadow: 0 0 4px gray;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
  z-index: 100;
  transition: top 0.2s ease-in-out;
`;

const SearchContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6e6e6;
  padding: 0 10px;

  &.search-enter {
    transform: translateY(100%);
    opacity: 0.3;
  }
  &.search-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
  }
  &.search-exit {
    transform: translateY(0);
    opacity: 1;
  }
  &.search-exit-active {
    transform: translateY(100%);
    opacity: 0;
    transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
  }
`;

const StyledLogo = styled.div`
  margin-left: 10px;
`;
const SearchTextContainer = styled.div`
display: flex;
align-items: center;
`

export default function NavBar() {
  const [search, setSearchState] = useState(false);
  const [visible, setVisible] = useState(true);
  const searchContainerRef = useRef(null);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      if(search)
        setSearchState(false);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar style={{top: visible ? '0': '-70px'}}>
      <CSSTransition in={!search} timeout={400} classNames='nav-content' unmountOnExit>
        <NavCont search={search} setSearchState={setSearchState} visible={visible}/>
      </CSSTransition>

      <CSSTransition in={search} timeout={400} classNames="search" unmountOnExit>
        <SearchContainer ref={searchContainerRef}>
          <IconButton onClick={() => setSearchState(!search)}>
            <CloseIcon />
          </IconButton>
          <SearchTextContainer>
            <InputField componentName='search' searchState={search} />
            <IconButton color='primary'>
              <Search />
            </IconButton>
          </SearchTextContainer>
        </SearchContainer>
      </CSSTransition>
    </Navbar>
  );
}