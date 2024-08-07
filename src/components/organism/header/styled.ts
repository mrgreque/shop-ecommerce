import styled from 'styled-components';

const StyledHeader = styled.header<{ scrolled?: boolean }>`
  height: 5em;
  margin-bottom: 2em;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  box-shadow: ${(props) =>
    props.scrolled ? '0px 0px 10px 0px rgba(0,0,0,0.75)' : 'none'};
  z-index: 999;
  display: flex;
  justify-content: center;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1em;
  width: 100%;
  max-width: 1300px;
`;

export { StyledHeader, StyledNav };
