import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSubCategory = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: 100%;

  & > div {
    width: 100%;
    max-width: 1300px;
  }
`;

const StyledSubCategoryTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.7em;
  text-transform: uppercase;
`;

const StyledSubCategoryLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0.2em;
  border-bottom: 0.05em solid transparent;
  &:hover {
    border-bottom: 0.05em solid black;
  }
`;

export { StyledSubCategory, StyledSubCategoryLink, StyledSubCategoryTitle };
