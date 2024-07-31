import styled from 'styled-components'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import InputField from './components/InputField';
import { CSSTransition } from 'react-transition-group';
import { useRef, useEffect, useState } from 'react';
import NavCont from './components/NavContent';
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background-color: #e6e6e6;
  box-shadow: 0 0 10px gray;
  position: relative;
  overflow: hidden;
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
    transform: translateX(50%);
    opacity: 0.3;
  }
  &.search-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
  }
  &.search-exit {
    transform: translateX(0);
    opacity: 1;
  }
  &.search-exit-active {
    transform: translateX(100%);
    opacity: 0;
    transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
  }
`;

const StyledLogo = styled.div`
  margin-left: 10px;
`;


export default function NavBar() {
    const [search, setSearchState] = useState(false);
    const searchContainerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (search && searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setSearchState(false);
            }
        };

        if (search) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [search]);

    return (
        <Navbar>
            <CSSTransition in={!search} timeout={400} classNames='nav-content' unmountOnExit>
                <NavCont search={search} setSearchState={setSearchState} />
            </CSSTransition>

            <CSSTransition in={search} timeout={400} classNames="search" unmountOnExit>
                <SearchContainer ref={searchContainerRef}>
                    <StyledLogo>
                        <AutoAwesomeMosaicIcon />
                    </StyledLogo>
                    <InputField componentName='search' searchState={search} />
                </SearchContainer>
            </CSSTransition>
        </Navbar>
    );
}